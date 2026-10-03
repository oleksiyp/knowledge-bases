---
type: Event
title: "External Secrets Operator pauses releases over maintainer burnout"
description: "In July 2025 ESO maintainers halted all releases because only one maintainer remained truly active; 300+ volunteers responded, a contributor ladder was created and releases resumed around Sep 22, 2025."
event_kind: governance
date: 2025-08-13
window: W24
impact: mixed
projects: [projects/cloud-native/external-secrets-operator, projects/cloud-native/kubernetes]
organizations: [organizations/cncf]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: eso-issue
    resource: https://github.com/external-secrets/external-secrets/issues/5084
    title: "external-secrets issue #5084: Health of External Secrets project"
  - id: infisical-eso
    resource: https://infisical.com/blog/external-secrets-operator-paused
    title: "Infisical: External Secrets Operator is paused. What's next? (Aug 2025; later updated: maintainers joined, development resumed)"
  - id: stack-eso
    resource: https://www.thestack.technology/open-source-devs-burn-out-crucial-projects-in-jeopardy/
    title: "The Stack: Burnout on Kubernetes secrets puts OSS support in spotlight (2025-08)"
  - id: hn-eso
    resource: https://news.ycombinator.com/item?id=44889991
    title: "Hacker News: External Secrets Operator to pause releases, needs additional maintainers"
---

# What happened
The ESO team announced: "We've decided to stop releases until more long-term maintainers join our team." Only one truly active maintainer remained, and during a single week of vacation zero PRs were merged while 20+ issues piled up.[^eso-issue] The pause of all new features, patches, container images and support was announced on Aug 13, 2025; maintainer Gergely Brautigam cited burnout and user entitlement.[^infisical-eso][^stack-eso][^hn-eso] (Corrected in pass 2: date 2025-07-01 (approximate) → 2025-08-13; the file name keeps its original 2025-07 prefix.)

# Why it matters
ESO sits in the secrets path of many Kubernetes clusters. A stalled project would mean unpatched security bugs. Like ingress-nginx, it shows how far cloud-native adoption has outrun maintainer capacity.

# Outcome so far
More than 300 volunteers signed up. The project added a Contributor → Member → Reviewer → Maintainer ladder with focused tracks, appointed interim maintainers and voted to resume releases around Sep 22, 2025. Its longer-term health criteria were still in progress[^eso-issue].

# Related
- [External Secrets Operator](/projects/cloud-native/external-secrets-operator.md), [Event: ingress-nginx retirement](/events/2025-11-ingress-nginx-retirement.md)

[^eso-issue]: https://github.com/external-secrets/external-secrets/issues/5084
[^infisical-eso]: Infisical — https://infisical.com/blog/external-secrets-operator-paused
[^stack-eso]: The Stack — https://www.thestack.technology/open-source-devs-burn-out-crucial-projects-in-jeopardy/
[^hn-eso]: Hacker News — https://news.ycombinator.com/item?id=44889991
