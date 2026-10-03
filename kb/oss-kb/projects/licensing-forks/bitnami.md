---
type: OSS Project
title: Bitnami container images & Helm charts
description: "Broadcom's Bitnami catalog — ubiquitous free container images and Helm charts — was restructured in Aug–Sept 2025 into a paid 'Bitnami Secure Images' product with only a small free 'latest' subset, then pulled from AWS Marketplace/ECR in June 2026; a paywall-by-distribution move that broke countless deployments and fed rivals (Docker Hardened Images, Chainguard)."
resource: https://github.com/bitnami/containers
tags: [containers, helm, packaging, paywall, broadcom, supply-chain]
domain: licensing-forks
license: Apache-2.0
license_history: ["Apache-2.0 (source of charts/Dockerfiles, unchanged)", "Free public images restricted to latest-only subset (2025-08-28)", "Legacy images moved to bitnamilegacy, unmaintained (2025-09-29)"]
governance: single-vendor
steward: Broadcom (VMware Tanzu)
backing_orgs: []
metrics: {}
oss_verdict: crisis
business_verdict: stable
momentum_by_window: { W3: down, W6: down, W9: down, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bitnami-issue
    resource: https://github.com/bitnami/containers/issues/83267
    title: "Bitnami containers issue #83267: upcoming changes to the Bitnami catalog"
  - id: charts-issue
    resource: https://github.com/bitnami/charts/issues/35164
    title: "Bitnami charts issue #35164 (HN: Broadcom to discontinue free Bitnami Helm charts, 2025-07-18)"
  - id: broadcom-prep
    resource: https://community.broadcom.com/tanzu/blogs/beltran-rueda-borrego/2025/08/18/how-to-prepare-for-the-bitnami-changes-coming-soon
    title: "Broadcom: How to prepare for the Bitnami changes coming soon (2025-08-18)"
  - id: linuxiac-bitnami
    resource: https://linuxiac.com/bitnami-ends-free-stable-images-users-forced-to-migrate-or-pay/
    title: "Linuxiac: Bitnami ends free, stable images — users forced to migrate or pay (2025-08-29)"
  - id: broadcom-aws
    resource: https://community.broadcom.com/tanzu/blogs/beltran-rueda-borrego/2026/05/20/important-update-transitioning-bitnami-offerings-o
    title: "Broadcom: Important update — transitioning Bitnami offerings on AWS (2026-05-20)"
  - id: tns-docker-dhi
    resource: https://thenewstack.io/dockers-sets-free-the-hardened-container-images/
    title: "The New Stack: Docker sets free the hardened container images (2025-12-17)"
---

# Summary
Bitnami is the clearest example in this period of monetising through distribution rather than through the license. The Dockerfiles and charts stayed Apache-2.0, but the free, maintained images that much of the Kubernetes world depended on were withdrawn. Broadcom announced in July 2025 that from Aug 28, 2025 free users would get only a limited, hardened, "latest"-tag-only subset. All versioned images moved to an unmaintained `bitnamilegacy` repository after brownouts, with a final deletion deadline of Sept 29, 2025. Full catalog access requires a Bitnami Secure Images subscription.[^bitnami-issue][^broadcom-prep] In May 2026 Broadcom and AWS announced that Bitnami content would leave AWS Marketplace, Lightsail and ECR on June 10, 2026.[^broadcom-aws] The HN threads drew 348 and 244 points, and users rushed to replacements such as Docker's hardened images, which Docker made free in Dec 2025.[^charts-issue][^tns-docker-dhi] Verdict: OSS in crisis (a trust collapse); business outcome for Broadcom unknown.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-07-17/18 | Broadcom introduces Bitnami Secure Images; free charts/images to be discontinued[^charts-issue] | Business | − |
| W24 | 2025-08-28 | Catalog restructure; brownouts begin (Aug 28–29, Sept 2–3, Sept 17–19)[^bitnami-issue][^linuxiac-bitnami] | OSS | − |
| W24 | 2025-09-29 | Final deletion deadline for legacy images on docker.io/bitnami[^bitnami-issue] | OSS | − |
| W12 | 2025-12-17 | Docker makes its hardened images free, a direct alternative[^tns-docker-dhi] | OSS | ± |
| W6 | 2026-05-19/20 | Broadcom + AWS announce Bitnami exit from AWS Marketplace/Lightsail/ECR[^broadcom-aws] | Business | − |
| W6 | 2026-06-10 | Bitnami content removed from AWS channels; instances stop receiving updates after May 20[^broadcom-aws] | OSS | − |

# OSS successes
- The source (Dockerfiles, chart templates) remains Apache-2.0, so community rebuilds are legally possible.

# OSS failures / risks
- Huge downstream breakage: Helm charts across the ecosystem defaulted to Bitnami images.[^charts-issue]
- `bitnamilegacy` gets no updates, so anyone pinned to it is accumulating unpatched CVEs.[^bitnami-issue]

# Business successes
- It moves enterprise users toward a paid subscription with SBOMs, LTS branches and support.[^bitnami-issue]

# Business failures / risks
- The move pushed users to competitors (Docker Hardened Images, Chainguard) and damaged trust in Broadcom/VMware's stewardship of open-source assets.[^tns-docker-dhi]

# By window
## W3
- No new announcements found. The aftermath is migrations off Bitnami.
## W6
- AWS channel withdrawal (May–June 2026).[^broadcom-aws]
## W9
- No notable events found.
## W12
- Docker makes hardened images free (Dec 2025).[^tns-docker-dhi]
## W24
- Announcement, brownouts and deletion (Jul–Sept 2025).[^bitnami-issue][^linuxiac-bitnami]

# Lessons
- A permissive license does not protect users when the vendor controls the build pipeline and the registry. Free binaries can disappear even when the source stays open.
- Private-equity-style acquirers (Broadcom) will charge for any widely used free distribution channel they control.

# Related
- [MinIO](/projects/licensing-forks/minio.md) — same "stop shipping free binaries" playbook
- [Bitnami free catalog ends](/events/2025-08-bitnami-free-catalog-ends.md)

[^bitnami-issue]: Bitnami containers issue #83267 — https://github.com/bitnami/containers/issues/83267
[^charts-issue]: Bitnami charts issue #35164 — https://github.com/bitnami/charts/issues/35164
[^broadcom-prep]: Broadcom community blog — https://community.broadcom.com/tanzu/blogs/beltran-rueda-borrego/2025/08/18/how-to-prepare-for-the-bitnami-changes-coming-soon
[^linuxiac-bitnami]: Linuxiac — https://linuxiac.com/bitnami-ends-free-stable-images-users-forced-to-migrate-or-pay/
[^broadcom-aws]: Broadcom community blog — https://community.broadcom.com/tanzu/blogs/beltran-rueda-borrego/2026/05/20/important-update-transitioning-bitnami-offerings-o
[^tns-docker-dhi]: The New Stack (2025-12-17), "Docker Sets Free the Hardened Container Images" — https://thenewstack.io/dockers-sets-free-the-hardened-container-images/
