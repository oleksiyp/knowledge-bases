---
type: Event
title: "Linux Foundation launches Valkey, a fork of Redis"
description: "On 28 Mar 2024, eight days after Redis left BSD, the Linux Foundation launched Valkey from Redis 7.2.4 with backing from AWS, Google Cloud, Oracle, Ericsson and Snap. By 2026 it had overtaken Redis on several community measures."
date: 2024-03-28
year: 2024
kind: fork
signal: positive
ideas: [ideas/business-licensing/forks-as-backlash, ideas/business-licensing/hyperscalers-capture-dbms-market]
systems: [systems/valkey, systems/redis]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: lf-valkey
    resource: "https://www.linuxfoundation.org/press/linux-foundation-launches-open-source-valkey-community"
    title: "Linux Foundation launches open source Valkey community (2024-03-28)"
  - id: aws-valkey
    resource: "https://aws.amazon.com/about-aws/whats-new/2024/10/amazon-elasticache-valkey"
    title: "AWS: Announcing Amazon ElastiCache for Valkey (2024-10-08)"
  - id: redmonk
    resource: "https://redmonk.com/sogrady/2026/04/06/valkey-at-two/"
    title: "RedMonk: Two Years of Valkey (2026-04-06)"
  - id: percona
    resource: "https://www.percona.com/blog/community-erosion-post-license-change-quantifying-the-power-of-open-source/"
    title: "Percona: Community erosion post license change"
---

# What happened

The Linux Foundation announced Valkey, a BSD-licensed continuation of Redis 7.2.4, with long-time Redis maintainers and backing from AWS, Google Cloud, Oracle, Ericsson and Snap.[^lf-valkey] In October 2024 AWS launched ElastiCache for Valkey, priced 33% lower (serverless) and 20% lower (node-based) than its other engines.[^aws-valkey]

# Why it matters

Valkey is the clearest fork win of the period. RedMonk wrote in April 2026 that Valkey "is not behaving like most forks" and had more substantial committers than Redis.[^redmonk] Percona measured that about 37.5% of Redis's pre-fork outside contributors had stopped contributing.[^percona] Redis's return to AGPL in 2025 did not bring them back.

# Related

- [Forks as backlash](/ideas/business-licensing/forks-as-backlash.md) · [Redis relicense](/events/2024-03-redis-source-available-relicense.md) · [Valkey](/systems/valkey.md)

[^lf-valkey]: Linux Foundation launches open source Valkey community (2024-03-28).
[^aws-valkey]: AWS: Announcing Amazon ElastiCache for Valkey (2024-10-08).
[^redmonk]: RedMonk: Two Years of Valkey (2026-04-06).
[^percona]: Percona: Community erosion post license change.
