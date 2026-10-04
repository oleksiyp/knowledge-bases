---
type: Idea
title: eBPF as an infrastructure implementation technique
description: eBPF gained a durable role in networking and visibility, while operational responsibility moved into
  a different layer.
area: networking
verdict: winning
confidence: medium
tags:
- cloud-native
- devops
- networking
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:05:07Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: cilium
  resource: https://www.cncf.io/announcements/2023/10/11/cloud-native-computing-foundation-announces-cilium-graduation/
  title: Cilium graduation, October 2023
- id: case-extension
  resource: /research/michelin-cilium.md
  title: Additional case evidence
---

# eBPF as an infrastructure implementation technique

## Verdict

**WINNING — eBPF gained a durable role in networking and visibility, while operational responsibility moved into a different layer.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

Cilium graduated in October 2023. CNCF’s announcement describes capabilities beyond basic container networking and an established adopter community.[^cilium] This establishes ecosystem maturity, not universal performance superiority.

## What succeeded

A common programmable kernel mechanism can support networking policy and visibility close to the traffic. Integrating these capabilities can reduce duplicated agents and provide useful context for troubleshooting.

## What failed or remained difficult

Kernel compatibility, permissions and datapath debugging remain real work. A richer dataplane can create a larger operational dependency. A benchmark on one traffic pattern cannot prove lower cost or latency for every application.

## Why and when it fits

The success is practical infrastructure consolidation, not the elimination of networking expertise. The evaluation should include what operators can diagnose during partial failures and how upgrades are rolled back.

Use it when the selected distribution and kernel are supported, required policy semantics are tested, and the team can trace packet loss across application, proxy and kernel boundaries. Retain workload-level health signals.

## What would change the verdict

Comparable operational studies including incident recovery and upgrade effort would strengthen the total-cost claim. Graduation and adopter lists are not substitutes.

## Related

* [Area review](/areas/networking.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

* [System profile: Cilium](/systems/cilium.md)

## Additional production and measurement evidence

Michelin adds a production migration account to the earlier project-maturity evidence. It strengthens the case for targeted CNI consolidation without establishing a universal comparative advantage.[^case-extension]

* [Read the case and limitations](/research/michelin-cilium.md)

[^cilium]: [Cilium graduation, October 2023](https://www.cncf.io/announcements/2023/10/11/cloud-native-computing-foundation-announces-cilium-graduation/)
[^case-extension]: [Additional case evidence](/research/michelin-cilium.md)
