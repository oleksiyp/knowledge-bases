---
type: OSS Project
title: Kubernetes ingress-nginx
description: "Once the default Kubernetes ingress controller; retired by SIG Network (announced Nov 2025, best-effort maintenance ended March 2026) because too few maintainers could keep it secure — the highest-profile 'retired for lack of maintainers' case."
resource: https://github.com/kubernetes/ingress-nginx
tags: [kubernetes, maintainer-sustainability, retirement, cncf]
domain: security-sustainability
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: foundation
steward: Kubernetes SIG Network (CNCF)
backing_orgs: [organizations/linux-foundation]
metrics:
  github_stars: { value: 19458, as_of: 2026-10-03 }
oss_verdict: dead
business_verdict: n/a
momentum_by_window: { W3: n/a, W6: down, W9: down, W12: down, W24: down }
status: deprecated
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: k8s-retire
    resource: https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/
    title: "Kubernetes blog: Ingress NGINX retirement (2025-11-11)"
  - id: k8s-statement
    resource: https://www.kubernetes.io/blog/2026/01/29/ingress-nginx-statement/
    title: "Kubernetes blog: Ingress NGINX statement from the Steering and Security Response Committees (2026-01-29)"
  - id: ingress-gh
    resource: https://github.com/kubernetes/ingress-nginx
    title: kubernetes/ingress-nginx GitHub repository (archived)
---
# Summary
On **2025-11-11** Kubernetes SIG Network and the Security Response Committee announced the retirement of ingress-nginx. Maintenance would continue on a best-effort basis until **March 2026**, after which there would be no releases, bug fixes or security updates. Existing deployments keep working, and the recommended replacement is the Gateway API or another ingress controller.[^k8s-retire] The stated reason is the safety and security of the ecosystem: a project deployed this widely could not be kept secure by its small group of maintainers. Verdict: **dead** (retired), a planned, orderly shutdown.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-11-11 | Retirement announced[^k8s-retire] | OSS | − |
| W9 | 2026-01-29 | Steering + SRC statement: used in ~half of cloud native environments; no patches after March[^k8s-statement] | OSS | − |
| W9 | 2026-02-27 | "Before You Migrate" guidance published[^k8s-retire] | OSS | + |
| W9 | 2026-03-19 | Final Helm chart releases (4.15.1/4.14.5/4.13.9)[^ingress-gh] | OSS | − |
| W9 | 2026-03-24 | Repository archived (read-only); maintenance ended[^ingress-gh] | OSS | − |

# OSS successes
- Retiring the project openly and early is better than letting it rot silently. A migration path (Gateway API) was provided.[^k8s-retire]

# OSS failures / risks
- The Steering Committee estimated it was used in about half of cloud native environments. Many clusters will keep running unpatched ingress-nginx after March 2026.[^k8s-statement]

# Business successes
- Gives vendor ingress and gateway products (and Gateway API implementations) an opening to win users.

# Business failures / risks
- n/a

# By window
## W3
- No notable events found.
## W6
- No notable events found (post-EOL).
## W9
- End of maintenance; migration guide.[^k8s-retire]
## W12
- Announcement.[^k8s-retire]
## W24
- Maintainer shortage leading up to the decision. The committees had warned publicly for years that the project needed contributors.[^k8s-statement]

# Lessons
- Being widely deployed does not attract maintainers. Foundations need a retirement playbook.

# Related
- [ingress-nginx retirement](/events/2025-11-ingress-nginx-retirement.md), [Linux Foundation](/organizations/linux-foundation.md)

[^k8s-retire]: Kubernetes blog.
[^k8s-statement]: Kubernetes blog, 2026-01-29.
[^ingress-gh]: GitHub repository (archived; checked 2026-10-03).
