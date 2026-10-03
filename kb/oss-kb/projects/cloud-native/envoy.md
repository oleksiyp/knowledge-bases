---
type: OSS Project
title: "Envoy Proxy (and Envoy Gateway)"
description: "CNCF-graduated L7 proxy underlying Istio, many API gateways and Gateway API implementations; quarterly releases (1.36-1.39) and Envoy Gateway's rise as a vendor-neutral ingress-nginx successor keep it thriving."
resource: https://github.com/envoyproxy/envoy
tags: [cloud-native, networking, proxy, apache-2.0, foundation-hosted, cncf-graduated]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2016-)"]
governance: foundation
steward: Cloud Native Computing Foundation
backing_orgs: [organizations/cncf]
metrics:
  github_stars: { value: 29034, as_of: 2026-10-03 }
  envoy_gateway_stars: { value: 3065, as_of: 2026-10-03 }
  pingora_stars: { value: 27574, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: envoy-gh
    resource: https://github.com/envoyproxy/envoy
    title: "Envoy GitHub releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: eg-gh
    resource: https://github.com/envoyproxy/gateway
    title: "Envoy Gateway repository"
  - id: google-oss
    resource: https://opensource.googleblog.com/2026/02/the-end-of-an-era-transitioning-away-from-ingress-nginx.html
    title: "Google OSS blog: transitioning away from Ingress NGINX"
  - id: pingora-gh
    resource: https://github.com/cloudflare/pingora
    title: "Cloudflare Pingora repository"
  - id: haproxy-gh
    resource: https://github.com/haproxy/haproxy
    title: "HAProxy repository mirror"
---

# Summary
Envoy is the data plane for Istio and a long list of gateways; it kept a quarterly cadence — 1.36 (Oct 2025), 1.37 (Jan 2026), 1.38 (Apr 2026), 1.39 (Jul 2026)[^envoy-gh]. Envoy Gateway, the project's own Gateway API controller, is cited by Google as a conformant destination for ingress-nginx migrations[^google-oss][^eg-gh]. Competing Rust-based proxies (Cloudflare's Apache-2.0 Pingora, ~27.6k stars) and HAProxy remain alternatives[^pingora-gh][^haproxy-gh]. Verdict: **thriving** infrastructure with diversified corporate maintainers.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-14 | Envoy 1.36[^envoy-gh] | OSS | + |
| W9 | 2026-01-13 | Envoy 1.37[^envoy-gh] | OSS | + |
| W9 | 2026-02-12 | Envoy Gateway named a conformant ingress-nginx replacement[^google-oss] | OSS | + |
| W6 | 2026-04-23 | Envoy 1.38[^envoy-gh] | OSS | + |
| W3 | 2026-07-14 | Envoy 1.39[^envoy-gh] | OSS | + |

# OSS successes
- Ubiquitous data plane (Istio, Envoy Gateway, kgateway and many API gateways).
- Envoy Gateway gives a vendor-neutral "batteries included" ingress[^eg-gh].

# OSS failures / risks
- C++ complexity and build tooling raise the bar for new contributors; memory-safe Rust alternatives (Pingora) gain mindshare[^pingora-gh].

# Business successes
- n/a; commercial value captured by Tetrate, Solo.io, cloud providers.

# Business failures / risks
- None specific to the project in the window.

# By window
## W3
- Envoy 1.39[^envoy-gh].
## W6
- Envoy 1.38[^envoy-gh].
## W9
- Envoy 1.37; ingress-nginx migration target[^envoy-gh][^google-oss].
## W12
- Envoy 1.36[^envoy-gh].
## W24
- No notable events found beyond routine releases.

# Lessons
- Being the shared data plane of competitors is a durable position: rivals fund the commons they all depend on.

# Related
- [Istio](/projects/cloud-native/istio.md), [Gateway API](/projects/cloud-native/gateway-api.md), [ingress-nginx](/projects/cloud-native/ingress-nginx.md)

[^envoy-gh]: https://github.com/envoyproxy/envoy
[^eg-gh]: https://github.com/envoyproxy/gateway
[^google-oss]: https://opensource.googleblog.com/2026/02/the-end-of-an-era-transitioning-away-from-ingress-nginx.html
[^pingora-gh]: https://github.com/cloudflare/pingora
[^haproxy-gh]: https://github.com/haproxy/haproxy
