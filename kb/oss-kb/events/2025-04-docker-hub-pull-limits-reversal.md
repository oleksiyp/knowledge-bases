---
type: Event
title: "Docker postpones Docker Hub pull-limit and pull-charge changes"
description: "Docker's planned April 1, 2025 Docker Hub policy changes (tighter pull limits, pull consumption charges, storage billing) were not enforced after developer backlash; pull charges were dropped and storage billing delayed indefinitely."
event_kind: other
date: 2025-04-08
window: W24
impact: mixed
projects: [projects/cloud-native/docker]
organizations: [organizations/docker-inc]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: hub-policy
    resource: https://www.docker.com/blog/revisiting-docker-hub-policies-prioritizing-developer-experience/
    title: "Docker: Revisiting Docker Hub policies — prioritizing developer experience"
    author: org:docker
---

# What happened
Docker had announced Docker Hub changes for Apr 1, 2025, including new pull-rate limits, pull consumption charges and storage-based billing. In an Apr 8, 2025 update it said those changes were not enforced. Pull consumption charges were eliminated, storage billing was delayed indefinitely, and existing limits stayed in place (100 pulls/6h unauthenticated, 200/6h for Personal accounts). Docker also promised 6 months' notice before any future enforcement[^hub-policy].

# Why it matters
Docker Hub is the default registry for the whole ecosystem, and the reversal shows how little pricing power Docker has over free pulls once they are embedded in CI systems.

# Outcome so far
Docker turned to value-added offerings instead, notably making Hardened Images free in December 2025 with paid SLAs ([event](/events/2025-12-docker-hardened-images-free.md)).

# Related
- [Docker](/projects/cloud-native/docker.md), [Docker Inc](/organizations/docker-inc.md)

[^hub-policy]: https://www.docker.com/blog/revisiting-docker-hub-policies-prioritizing-developer-experience/
