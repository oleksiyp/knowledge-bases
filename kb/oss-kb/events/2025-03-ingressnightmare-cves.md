---
type: Event
title: "IngressNightmare: critical RCE vulnerabilities in Kubernetes ingress-nginx"
description: "Wiz disclosed CVE-2025-1974 (CVSS 9.8) and four related ingress-nginx CVEs on Mar 24, 2025, estimating ~43% of cloud environments were vulnerable; the episode exposed a 1-2-maintainer project at the heart of Kubernetes and led to its retirement."
event_kind: security-incident
date: 2025-03-24
window: W24
impact: negative
projects: [projects/cloud-native/ingress-nginx, projects/cloud-native/kubernetes]
organizations: [organizations/cncf, organizations/wiz]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: wiz
    resource: https://www.wiz.io/blog/ingress-nginx-kubernetes-vulnerabilities
    title: "Wiz: IngressNightmare"
    author: org:wiz
  - id: ingn-statement
    resource: https://www.kubernetes.io/blog/2026/01/29/ingress-nginx-statement/
    title: "Ingress NGINX: Statement from the Kubernetes Steering and Security Response Committees"
  - id: google-oss
    resource: https://opensource.googleblog.com/2026/02/the-end-of-an-era-transitioning-away-from-ingress-nginx.html
    title: "Google OSS blog: transitioning away from Ingress NGINX"
---

# What happened
On Mar 24, 2025, Wiz disclosed five vulnerabilities in kubernetes/ingress-nginx, branded "IngressNightmare". The worst, CVE-2025-1974 (CVSS 9.8), allowed unauthenticated remote code execution via the admission controller. CVE-2025-1097, CVE-2025-1098 and CVE-2025-24514 were annotation-injection flaws, and CVE-2025-24513 was a separate issue[^wiz]. Wiz estimated ~43% of cloud environments were vulnerable and found 6,500+ clusters, including Fortune 500 companies, exposing the admission webhook to the internet[^wiz].

# Why it matters
The flaws exploited the controller's configuration-"snippet" design, which made injection structurally easy[^google-oss]. They hit a component used by about half of cloud-native environments and maintained by only 1-2 volunteers[^ingn-statement]. This is a textbook critical-infrastructure-on-volunteers failure.

# Outcome so far
Patches shipped, but the incident convinced SIG Network and the Security Response Committee that the project could not be sustained securely. Retirement was announced Nov 11, 2025 and took effect in March 2026[^ingn-statement].

# Related
- [ingress-nginx](/projects/cloud-native/ingress-nginx.md), [Gateway API](/projects/cloud-native/gateway-api.md)
- [Event: ingress-nginx retirement](/events/2025-11-ingress-nginx-retirement.md), [Wiz](/organizations/wiz.md)

[^wiz]: https://www.wiz.io/blog/ingress-nginx-kubernetes-vulnerabilities
[^ingn-statement]: https://www.kubernetes.io/blog/2026/01/29/ingress-nginx-statement/
[^google-oss]: https://opensource.googleblog.com/2026/02/the-end-of-an-era-transitioning-away-from-ingress-nginx.html
