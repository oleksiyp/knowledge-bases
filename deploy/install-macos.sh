#!/usr/bin/env bash
# Installs okf-viewer and its Cloudflare tunnel as launchd agents on macOS.
#   1. cp deploy/okf-viewer.env.example deploy/okf-viewer.env && edit it
#   2. Create the Cloudflare Access application for $OKF_HOSTNAME first (see README)
#   3. ./deploy/install-macos.sh
set -euo pipefail
cd "$(dirname "$0")/.."
ROOT="$(pwd)"
ENV_FILE="$ROOT/deploy/okf-viewer.env"
[ -f "$ENV_FILE" ] || { echo "missing $ENV_FILE (copy okf-viewer.env.example)"; exit 1; }
set -a; . "$ENV_FILE"; set +a

NODE="$(command -v node)"
CLOUDFLARED="$(command -v cloudflared)"
AGENTS="$HOME/Library/LaunchAgents"
LOGS="$HOME/Library/Logs/okf-viewer"
mkdir -p "$AGENTS" "$LOGS"

npm ci --silent
npm run build --silent

# --- tunnel ------------------------------------------------------------------
tunnel_id() {
  cloudflared tunnel list --output json 2>/dev/null | "$NODE" -e 'let s="";process.stdin.on("data",d=>s+=d).on("end",()=>{const t=JSON.parse(s||"[]").find(x=>x.name===process.argv[1]);process.stdout.write(t?t.id:"")})' "$OKF_TUNNEL_NAME"
}
TUNNEL_ID="$(tunnel_id)"
if [ -z "$TUNNEL_ID" ]; then
  cloudflared tunnel create "$OKF_TUNNEL_NAME"
  TUNNEL_ID="$(tunnel_id)"
fi
[ -n "$TUNNEL_ID" ] || { echo "tunnel $OKF_TUNNEL_NAME not found"; exit 1; }
TUNNEL_CFG="$HOME/.cloudflared/$OKF_TUNNEL_NAME.yml"
cat > "$TUNNEL_CFG" <<YML
tunnel: $TUNNEL_ID
credentials-file: $HOME/.cloudflared/$TUNNEL_ID.json
ingress:
  - hostname: $OKF_HOSTNAME
    service: http://$OKF_HOST:$OKF_PORT
  - service: http_status:404
YML
# Pass this tunnel's config explicitly: otherwise cloudflared falls back to the `tunnel:` key in
# ~/.cloudflared/config.yml and can route the hostname to an unrelated tunnel.
cloudflared tunnel --config "$TUNNEL_CFG" route dns --overwrite-dns "$TUNNEL_ID" "$OKF_HOSTNAME"

# --- launchd agents ------------------------------------------------------------
write_agent() { # label, program args (as <string> lines), env block
  cat > "$AGENTS/$1.plist" <<PLIST
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>Label</key><string>$1</string>
  <key>ProgramArguments</key><array>$2</array>
  <key>WorkingDirectory</key><string>$ROOT</string>
  <key>EnvironmentVariables</key><dict>$3</dict>
  <key>RunAtLoad</key><true/>
  <key>KeepAlive</key><true/>
  <key>ThrottleInterval</key><integer>10</integer>
  <key>StandardOutPath</key><string>$LOGS/$1.log</string>
  <key>StandardErrorPath</key><string>$LOGS/$1.log</string>
</dict></plist>
PLIST
  launchctl bootout "gui/$(id -u)/$1" 2>/dev/null || true
  # bootout is asynchronous; retry until launchd has released the old instance.
  for _ in 1 2 3 4 5 6 7 8 9 10; do
    launchctl bootstrap "gui/$(id -u)" "$AGENTS/$1.plist" 2>/dev/null && return 0
    sleep 1
  done
  launchctl bootstrap "gui/$(id -u)" "$AGENTS/$1.plist"
}
kv() { printf '<key>%s</key><string>%s</string>' "$1" "$2"; }

write_agent space.okf-viewer.server \
  "<string>$NODE</string><string>$ROOT/server/index.ts</string>" \
  "$(kv OKF_BUNDLES "$OKF_BUNDLES")$(kv OKF_PORT "$OKF_PORT")$(kv OKF_HOST "$OKF_HOST")$(kv CF_ACCESS_TEAM_DOMAIN "${CF_ACCESS_TEAM_DOMAIN:-}")$(kv CF_ACCESS_AUD "${CF_ACCESS_AUD:-}")$(kv CF_ACCESS_ALLOWED_EMAILS "${CF_ACCESS_ALLOWED_EMAILS:-}")$(kv PATH "$(dirname "$NODE"):/usr/bin:/bin")"
write_agent space.okf-viewer.tunnel \
  "<string>$CLOUDFLARED</string><string>--config</string><string>$TUNNEL_CFG</string><string>tunnel</string><string>run</string><string>$OKF_TUNNEL_NAME</string>" \
  "$(kv PATH "/usr/bin:/bin")"

echo "okf-viewer: http://$OKF_HOST:$OKF_PORT  →  https://$OKF_HOSTNAME"
echo "logs: $LOGS"
