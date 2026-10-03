# OKF Viewer

A fast, readable viewer for [Open Knowledge Format (OKF)](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md)
knowledge bundles: directories of markdown files with YAML frontmatter, increasingly written and
maintained by agents.

Point it at one or more bundle directories and it gives you a reading-first web app. It shows
trust and freshness on every page, lets you search from anywhere, and updates itself as agents
change files.

```bash
npm install
npm run build
node server/index.ts --bundle my-kb=~/path/to/bundle      # http://127.0.0.1:4747
```

Requires Node ≥ 22.18. The server runs its TypeScript directly with Node's type stripping, so
there is no server build step.

## What it is designed for

Agent-maintained bundles are large (hundreds to thousands of concepts), heavily cross-linked,
change constantly, and carry provenance metadata that matters. The UI is built around four jobs.

### 1. Find anything in seconds
- **Command palette** (`⌘K` or `/`). Title matches appear instantly on the client. Full-text hits
  with highlighted snippets come from the server.
- **Filters** in the query: `type:event`, `#tag`, `in:folder`.
- **Commands**: start the query with `>`.
- **Recently viewed** concepts appear when the query is empty.

### 2. Read in context without losing your place
- **Concept links** show a Wikipedia-style preview on hover: type, trust, description and
  excerpt. Links to missing concepts are marked "not yet written" (spec §6.1).
- **Footnotes keyed to `sources[].id`** (spec §5.1) open a source card on hover. The card shows
  title, favicon, domain, author, `last_modified` and `usage_count`. Every source is listed with
  how often it is cited, and uncited sources are flagged.
- **Backlinks** ("Referenced by") are grouped by type and show the sentence that contains each
  link. They include references made through frontmatter (e.g. `projects: [projects/x]`), not
  just body links.
- **Navigation**: an outline with scroll spy, `[` / `]` to move through a folder, deep links to
  headings, and sortable tables (numeric-aware: `$1.2B`, `30%`).
- **Typography**: serif body text tuned for long reading, plus a dark theme and a print
  stylesheet.

### 3. Know how far to trust what you read
- **Trust tier on every page**, derived from `verified` (spec §5.3): *unverified*,
  *machine-confirmed* or *human-reviewed*.
- **Freshness** from `stale_after` (§5.5), with a banner on stale content.
- **Status banners** for `draft` and `deprecated` (§5.4).
- **Provenance panel**: who generated the concept, who verified it and when, and the number of
  sources and distinct domains.
- **Health view**: OKF v0.2 conformance (§11), broken links, footnotes without sources, stale
  concepts, orphans, and the trust distribution.

### 4. See the shape of the corpus
- **Explore** turns the frontmatter into facets automatically. Low-cardinality scalar keys, short
  string lists and nested maps become filters with live counts, where each count reflects every
  *other* active filter.
- **Results** show as a table or as cards, with an automatic or hand-picked column set. Values
  are coloured by sentiment (`thriving`, `declining`, …), and clicking a value filters by it.
  Filter state is kept in the URL, so views can be shared.
- **Timeline** covers any concept with a `date`. It has a monthly histogram coloured by any
  facet, and a clickable legend toggles values.
- **Graph** shows body links plus frontmatter references, and can focus on a concept and its
  neighbours. Every page also has a mini local graph.
- **Live**: the server watches the bundle and pushes changes over SSE. Open pages refresh in
  place and a toast tells you what changed.

It works on phones: the sidebar becomes a drawer, the context panel moves under the article,
and search goes full-screen.

## Keyboard

| Keys | Action |
|---|---|
| `⌘K` / `/` | Search & commands |
| `g h` `g e` `g t` `g g` `g x` | Home, Explore, Timeline, Graph, Health |
| `[` `]` | Previous / next concept in folder |
| `.` | Toggle context panel |
| `\` | Toggle sidebar |
| `?` | Shortcuts |

## Multiple bundles

```bash
node server/index.ts --bundle research=~/kb/research --bundle infra=~/kb/infra --port 4747
# or: OKF_BUNDLES="research=~/kb/research,infra=~/kb/infra" node server/index.ts
```

## API

| Endpoint | Returns |
|---|---|
| `GET /api/bundles` | Configured bundles |
| `GET /api/b/:bundle/manifest` | Light metadata for every concept, folders, inferred facets, stats |
| `GET /api/b/:bundle/concept/:id` | Rendered HTML, frontmatter, sources, outline, backlinks, issues |
| `GET /api/b/:bundle/search?q=` | Full-text hits with snippets |
| `GET /api/b/:bundle/graph` | Nodes and links (body and frontmatter references) |
| `GET /api/b/:bundle/health` | Conformance issues, orphans |
| `GET /api/b/:bundle/raw/:id` | The raw markdown file |
| `GET /api/events` | Server-sent events on bundle changes |

## Development

```bash
npm run dev -- --bundle my-kb=~/path/to/bundle   # API on :4747 + Vite HMR on :5173
npm run typecheck
```

## Private hosting behind Cloudflare Access

`deploy/install-macos.sh` runs the server and a Cloudflare Tunnel as launchd agents.

1. `cp deploy/okf-viewer.env.example deploy/okf-viewer.env` and fill it in. The file is
   git-ignored.
2. **Create the Access application first**, so the hostname is never publicly reachable:
   - In Cloudflare Zero Trust, go to Access → Applications → Add → Self-hosted.
   - Set the hostname to `OKF_HOSTNAME`.
   - Add a policy: Allow, with Include set to Emails = your address.
3. Run `./deploy/install-macos.sh`. It builds the app, creates the tunnel, routes DNS and
   installs both agents.
4. For defense in depth, set `CF_ACCESS_TEAM_DOMAIN` and `CF_ACCESS_AUD` (from the Access
   application) and re-run the installer. The server then rejects any request without a valid
   Access JWT, even one that somehow reaches it without passing through Access.

The server binds to `127.0.0.1` by default and never renders raw HTML from markdown.

## License

MIT
