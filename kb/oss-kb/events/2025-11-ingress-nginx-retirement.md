---
type: Event
title: "Kubernetes retires ingress-nginx"
description: "SIG Network and the Security Response Committee announced ingress-nginx retirement, with best-effort maintenance ending March 2026, citing ecosystem security."
event_kind: shutdown
date: 2025-11-11
window: W12
impact: negative
projects: [projects/security-sustainability/ingress-nginx]
organizations: [organizations/linux-foundation]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: k8s-retire
    resource: https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/
    title: "Kubernetes blog: Ingress NGINX retirement"
  - id: ingn-statement-cn
    resource: https://www.kubernetes.io/blog/2026/01/29/ingress-nginx-statement/
    title: "Ingress NGINX: Statement from the Kubernetes Steering and Security Response Committees (Jan 29, 2026)"
  - id: wiz-cn
    resource: https://www.wiz.io/blog/ingress-nginx-kubernetes-vulnerabilities
    title: "Wiz: IngressNightmare (CVE-2025-1974 et al.)"
  - id: google-oss-cn
    resource: https://opensource.googleblog.com/2026/02/the-end-of-an-era-transitioning-away-from-ingress-nginx.html
    title: "Google Open Source Blog: The End of an Era (Feb 12, 2026)"
  - id: ingn-gh-cn
    resource: https://github.com/kubernetes/ingress-nginx
    title: kubernetes/ingress-nginx (archived)
---
# What happened
Announced on 2025-11-11. Best-effort maintenance runs until March 2026, after which there are no releases or security fixes. Users are pointed to the Gateway API.[^k8s-retire]

# Why it matters
One of the most widely deployed Kubernetes components was shut down because it could not be maintained securely.

# Outcome so far
Maintenance ended in March 2026. Migration guidance was published on 2026-02-27.[^k8s-retire]

# Related
- [ingress-nginx](/projects/security-sustainability/ingress-nginx.md)

[^k8s-retire]: Kubernetes blog: Ingress NGINX retirement

## Additional notes (cloud-native)
- Prelude: on Mar 24, 2025 Wiz disclosed "IngressNightmare" (CVE-2025-1974, CVSS 9.8, unauthenticated RCE through the admission controller, plus four annotation-injection CVEs). It estimated ~43% of cloud environments were vulnerable and found 6,500+ clusters exposing the admission webhook publicly.[^wiz-cn] See [Event: IngressNightmare](/events/2025-03-ingressnightmare-cves.md).
- On Jan 29, 2026 the Kubernetes Steering Committee and Security Response Committee issued a rare joint statement. They said about 50% of cloud-native environments still relied on ingress-nginx, which was maintained by only 1-2 people, and urged immediate migration.[^ingn-statement-cn]
- Google's Open Source blog (Feb 12, 2026) promoted Gateway API and the ingress2gateway converter. It named GKE Gateway, Cilium and Envoy Gateway as conformant targets.[^google-oss-cn]
- The repository was archived after a final push on 2026-03-23.[^ingn-gh-cn]
- Cloud-native project pages: [ingress-nginx (cloud-native)](/projects/cloud-native/ingress-nginx.md), [Gateway API](/projects/cloud-native/gateway-api.md).

[^ingn-statement-cn]: https://www.kubernetes.io/blog/2026/01/29/ingress-nginx-statement/
[^wiz-cn]: https://www.wiz.io/blog/ingress-nginx-kubernetes-vulnerabilities
[^google-oss-cn]: https://opensource.googleblog.com/2026/02/the-end-of-an-era-transitioning-away-from-ingress-nginx.html
[^ingn-gh-cn]: https://github.com/kubernetes/ingress-nginx
