---
type: OSS Project
title: "Kubernetes Gateway API"
description: "The role-oriented successor to the Ingress API; steady v1.2-v1.6 releases and the ingress-nginx retirement turned it from \"the future\" into the default migration target in 2026, benefiting Envoy Gateway, Cilium, Istio, kgateway and Traefik."
resource: https://github.com/kubernetes-sigs/gateway-api
tags: [cloud-native, networking, ingress, apache-2.0, foundation-hosted]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2020-)"]
governance: foundation
steward: Kubernetes SIG Network (CNCF)
backing_orgs: [organizations/cncf]
metrics:
  github_stars: { value: 3014, as_of: 2026-10-03 }
  envoy_gateway_stars: { value: 3065, as_of: 2026-10-03 }
  kgateway_stars: { value: 5695, as_of: 2026-10-03 }
  traefik_stars: { value: 65052, as_of: 2026-10-03 }
  caddy_stars: { value: 76244, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: gw-gh
    resource: https://github.com/kubernetes-sigs/gateway-api
    title: "kubernetes-sigs/gateway-api releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: google-oss
    resource: https://opensource.googleblog.com/2026/02/the-end-of-an-era-transitioning-away-from-ingress-nginx.html
    title: "Google Open Source Blog: The End of an Era — Transitioning Away from Ingress NGINX"
  - id: ingn-retire
    resource: https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/
    title: "Ingress NGINX Retirement: What You Need to Know"
  - id: eg-gh
    resource: https://github.com/envoyproxy/gateway
    title: "Envoy Gateway repository"
  - id: kgw-gh
    resource: https://github.com/kgateway-dev/kgateway
    title: "kgateway repository"
  - id: traefik-gh
    resource: https://github.com/traefik/traefik
    title: "Traefik repository"
  - id: caddy-gh
    resource: https://github.com/caddyserver/caddy
    title: "Caddy repository"
  - id: spin-gw
    resource: https://www.cncf.io/projects/spin/
    title: "CNCF: Spin project page (SpinKube with Gateway API post)"
---

# Summary
Gateway API is the Kubernetes SIG Network API that replaces annotation-heavy Ingress with role-separated resources (GatewayClass/Gateway/HTTPRoute, plus TCP/UDP/gRPC routes). It shipped v1.2 (Oct 2024) through v1.6 (Jun 2026) on a roughly four-month cadence[^gw-gh], and the March 2026 retirement of ingress-nginx made it the officially recommended migration path[^ingn-retire][^google-oss]. Its standard channel has been GA without breaking changes for 2+ years[^google-oss]. Verdict: **growing** — an API standard that commoditizes the data plane and shifts competition to implementations.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-03 | v1.2.0 released[^gw-gh] | OSS | + |
| W24 | 2025-04-24 | v1.3.0 released[^gw-gh] | OSS | + |
| W12 | 2025-10-06 | v1.4.0 released[^gw-gh] | OSS | + |
| W12 | 2025-11-11 | ingress-nginx retirement names Gateway API as primary replacement[^ingn-retire] | OSS | + |
| W9 | 2026-02-12 | Google OSS blog: ingress2gateway maps ingress-nginx annotations to HTTPRoute[^google-oss] | OSS | + |
| W9 | 2026-02-27 | v1.5.0 released[^gw-gh] | OSS | + |
| W6 | 2026-06-29 | v1.6.0 released[^gw-gh] | OSS | + |

# OSS successes
- Multi-vendor conformance: GKE Gateway, Cilium and Envoy Gateway cited as conformant implementations[^google-oss]; kgateway (ex-Gloo, donated by Solo.io) and Traefik also implement it[^kgw-gh][^traefik-gh].
- Ecosystem pull: even Wasm projects publish Gateway API guides (SpinKube, Feb 2026)[^spin-gw].

# OSS failures / risks
- Fragmented implementations: users must now choose among many controllers, each with different extension CRDs.
- ingress2gateway cannot translate every snippet-based ingress-nginx config; complex migrations remain manual[^google-oss].

# Business successes
- Envoy-based gateways (Envoy Gateway, Istio, kgateway), Cilium/Isovalent and Traefik Labs gained a forced migration wave in 2026. Caddy (76k stars) and Traefik (65k stars) remain the most-starred proxies in the space[^caddy-gh][^traefik-gh].

# Business failures / risks
- No direct business; implementations compete on enterprise add-ons (WAF, rate limiting, auth).

# By window
## W3
- v1.6 adoption (released Jun 29); Traefik and Envoy Gateway continue regular releases[^gw-gh][^eg-gh].
## W6
- v1.6.0 released Jun 29, 2026; Traefik v3.7 (May 2026) and other implementations continue releases[^gw-gh].
## W9
- v1.5 (Feb 27, 2026); Google migration guidance[^gw-gh][^google-oss].
## W12
- v1.4 (Oct 2025); named successor to ingress-nginx[^ingn-retire].
## W24
- v1.2 and v1.3 releases[^gw-gh].

# Lessons
- A neutral API spec plus conformance tests lets a foundation retire an implementation without stranding users.
- Standards shift value to implementations; vendors with Envoy or eBPF data planes captured it.

# Related
- [ingress-nginx](/projects/cloud-native/ingress-nginx.md), [Envoy](/projects/cloud-native/envoy.md), [Cilium](/projects/cloud-native/cilium.md), [Istio](/projects/cloud-native/istio.md)
- [Event: ingress-nginx retirement](/events/2025-11-ingress-nginx-retirement.md)

[^gw-gh]: https://github.com/kubernetes-sigs/gateway-api
[^google-oss]: https://opensource.googleblog.com/2026/02/the-end-of-an-era-transitioning-away-from-ingress-nginx.html
[^ingn-retire]: https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/
[^eg-gh]: https://github.com/envoyproxy/gateway
[^kgw-gh]: https://github.com/kgateway-dev/kgateway
[^traefik-gh]: https://github.com/traefik/traefik
[^caddy-gh]: https://github.com/caddyserver/caddy
[^spin-gw]: https://www.cncf.io/projects/spin/
