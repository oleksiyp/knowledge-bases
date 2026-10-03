---
type: OSS Project
title: "Ingress NGINX (kubernetes/ingress-nginx)"
description: "The community Kubernetes ingress controller used by roughly half of clusters; after the March 2025 IngressNightmare CVEs and years of 1-2 volunteer maintainers it was retired in March 2026 and its repository archived — the emblematic cloud-native maintainer-burnout failure."
resource: https://github.com/kubernetes/ingress-nginx
tags: [cloud-native, networking, ingress, apache-2.0, retired, maintainer-burnout]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2016-2026, archived)"]
governance: foundation
steward: Kubernetes SIG Network (CNCF)
backing_orgs: [organizations/cncf]
metrics:
  github_stars: { value: 19458, as_of: 2026-10-03 }
  share_of_cloud_native_envs: { value: "~50%", as_of: 2026-01-29 }
oss_verdict: dead
business_verdict: n/a
momentum_by_window: { W3: n/a, W6: down, W9: down, W12: down, W24: down }
status: archived
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ingn-gh
    resource: https://github.com/kubernetes/ingress-nginx
    title: "kubernetes/ingress-nginx (archived)"
    last_modified: 2026-03-23T00:00:00Z
  - id: wiz
    resource: https://www.wiz.io/blog/ingress-nginx-kubernetes-vulnerabilities
    title: "Wiz: IngressNightmare — CVE-2025-1974 and related ingress-nginx vulnerabilities"
    author: org:wiz
  - id: ingn-retire
    resource: https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/
    title: "Ingress NGINX Retirement: What You Need to Know"
    author: org:kubernetes
  - id: ingn-statement
    resource: https://www.kubernetes.io/blog/2026/01/29/ingress-nginx-statement/
    title: "Ingress NGINX: Statement from the Kubernetes Steering and Security Response Committees"
    author: org:kubernetes
  - id: google-oss
    resource: https://opensource.googleblog.com/2026/02/the-end-of-an-era-transitioning-away-from-ingress-nginx.html
    title: "Google Open Source Blog: The End of an Era — Transitioning Away from Ingress NGINX"
    author: org:google
  - id: nginx-alt
    resource: https://blog.nginx.org/blog/the-ingress-nginx-alternative-open-source-nginx-ingress-controller-for-the-long-term
    title: "NGINX blog: The Ingress NGINX alternative (F5 NGINX Ingress Controller)"
    author: org:f5
  - id: cg-fork
    resource: https://www.chainguard.dev/unchained/keeping-ingress-nginx-alive
    title: "Chainguard: Fork yeah: we're keeping ingress-nginx alive (EmeritOSS, Dec 22, 2025)"
    author: org:chainguard
  - id: traefik-fork
    resource: https://traefik.io/blog/the-illusion-of-safety-why-the-ingress-nginx-fork-is-not-a-security-strategy
    title: "Traefik Labs: Why the ingress-nginx fork is not a security strategy"
    author: org:traefik-labs
  - id: herodevs
    resource: https://www.herodevs.com/blog-posts/ingress-nginx-end-of-life-2026-migration-and-support
    title: "HeroDevs: ingress-nginx end of life 2026 migration and support"
---

# Summary
Ingress NGINX was the default way to get HTTP traffic into Kubernetes for nearly a decade, and in the last two years it went from ubiquitous to retired. In March 2025, Wiz disclosed "IngressNightmare" (CVE-2025-1974, CVSS 9.8, unauthenticated RCE via the admission controller), finding over 6,500 publicly exposed vulnerable clusters[^wiz]. In November 2025 SIG Network and the Security Response Committee announced best-effort maintenance only until March 2026[^ingn-retire]; in January 2026 the Kubernetes Steering Committee issued an unusual joint statement noting it still served about 50% of cloud-native environments with only 1-2 maintainers[^ingn-statement]. The repository was archived in March 2026[^ingn-gh]. Verdict: **dead** (by deliberate, well-communicated retirement).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-24 | IngressNightmare: CVE-2025-1974 (9.8) + 4 annotation-injection CVEs; ~43% of cloud envs vulnerable[^wiz] | OSS | − |
| W12 | 2025-11-11 | Retirement announced; best-effort maintenance until March 2026[^ingn-retire] | OSS | − |
| W12 | 2025-12-22 | Chainguard announces a maintenance-only fork via its EmeritOSS program (chainguard-forks/ingress-nginx)[^cg-fork] | OSS | + |
| W9 | 2026-01-29 | Steering + SRC statement: ~50% of environments still affected[^ingn-statement] | OSS | − |
| W9 | 2026-02-12 | Google OSS blog promotes Gateway API and ingress2gateway migration tooling[^google-oss] | OSS | + |
| W9 | 2026-03 | Project retired; repo archived (last push 2026-03-23)[^ingn-gh] | OSS | − |

# OSS successes
- Clean end-of-life: four months' notice, explicit "no more security patches" messaging, artifacts kept available[^ingn-retire].
- Successor path existed: Gateway API is GA and ingress2gateway maps common ingress-nginx annotations[^google-oss].

# OSS failures / risks
- Critical-infrastructure-level adoption maintained by 1-2 people on nights and weekends[^ingn-statement].
- The "snippets" annotation design made configuration injection structurally easy; the IngressNightmare chain exploited it[^wiz][^google-oss].
- Long tail of unpatched clusters after March 2026 is now a standing security liability.

# Business successes
- Commercial beneficiaries: F5 positioned its separate NGINX Ingress Controller as the long-term alternative[^nginx-alt]; extended-support vendors (e.g., HeroDevs) sell post-EOL patches[^herodevs]; Chainguard maintains a free, maintenance-only fork (best-effort CVE fixes, no new features) as a funnel to its paid hardened images[^cg-fork], which competitors such as Traefik argue is no substitute for migrating[^traefik-fork]; Gateway API implementations (Envoy Gateway, Cilium, Istio, kgateway, Traefik) gain migrations.

# Business failures / risks
- No company was willing to fund the maintainers despite massive dependence — the clearest example of the cloud-native free-rider problem.

# By window
## W3
- No notable events found (project archived); migration and extended-support activity continue.
## W6
- Post-retirement migrations to Gateway API implementations; no upstream releases.
## W9
- Steering statement (Jan 29), Google migration guidance (Feb 12), retirement and archive (March 2026)[^ingn-statement][^google-oss][^ingn-gh].
## W12
- Retirement announced Nov 11, 2025[^ingn-retire]; Chainguard EmeritOSS fork announced Dec 22, 2025[^cg-fork].
## W24
- IngressNightmare disclosed Mar 24, 2025[^wiz].

# Lessons
- Usage share is not a sustainability signal; track maintainer count per critical component.
- Overly flexible config surfaces (raw config snippets) become security debt that small teams cannot service.
- Retiring loudly and early beats a silent abandonware state.

# Related
- [Gateway API](/projects/cloud-native/gateway-api.md), [Kubernetes](/projects/cloud-native/kubernetes.md), [Envoy](/projects/cloud-native/envoy.md), [ingress-nginx (security-sustainability view)](/projects/security-sustainability/ingress-nginx.md)
- [Event: IngressNightmare](/events/2025-03-ingressnightmare-cves.md), [Event: ingress-nginx retirement](/events/2025-11-ingress-nginx-retirement.md)

[^ingn-gh]: https://github.com/kubernetes/ingress-nginx
[^wiz]: https://www.wiz.io/blog/ingress-nginx-kubernetes-vulnerabilities
[^ingn-retire]: https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/
[^ingn-statement]: https://www.kubernetes.io/blog/2026/01/29/ingress-nginx-statement/
[^google-oss]: https://opensource.googleblog.com/2026/02/the-end-of-an-era-transitioning-away-from-ingress-nginx.html
[^nginx-alt]: https://blog.nginx.org/blog/the-ingress-nginx-alternative-open-source-nginx-ingress-controller-for-the-long-term
[^cg-fork]: https://www.chainguard.dev/unchained/keeping-ingress-nginx-alive
[^traefik-fork]: https://traefik.io/blog/the-illusion-of-safety-why-the-ingress-nginx-fork-is-not-a-security-strategy
[^herodevs]: https://www.herodevs.com/blog-posts/ingress-nginx-end-of-life-2026-migration-and-support
