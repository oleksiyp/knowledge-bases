---
type: Research
title: 'Michelin: successful CNI consolidation with a selective mesh strategy'
description: A fleet migration supports targeted networking consolidation while a prior mesh deployment had little
  internal uptake.
area: networking
year: 2026
publication_date: '2026-07-14'
kind: case-study
evidence_strength: situated-primary-account
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:55:22Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: michelin
  resource: https://www.cncf.io/case-studies/michelin-2/
  title: Michelin Cilium consolidation account, July 14, 2026
---

# Michelin: successful CNI consolidation with a selective mesh strategy

## Observed result

Michelin’s account reports replacing two CNIs across roughly 70–80 clusters in spring 2025, over about two months, without customer-visible outage. It describes improved network visibility and DNS-based egress policy. The same account says an earlier service-mesh deployment attracted little internal adoption.[^michelin]

## Method and limits

This is an adopter account published through CNCF, not an independent incident audit. The publication date is July 2026; the reported migration occurred in 2025. There is no matched counterfactual for other implementations.

## Decision implication

The inference is to evaluate capabilities independently. Success with a networking foundation does not justify activating every adjacent feature. A supported migration procedure and a concrete user need matter more than a broad platform label.

## Related assessments

* [Ebpf Networking](/ideas/networking/ebpf-networking.md)
* [Mesh Simplification](/ideas/networking/mesh-simplification.md)
* [Area review](/areas/networking.md)

[^michelin]: [Michelin Cilium consolidation account, July 14, 2026](https://www.cncf.io/case-studies/michelin-2/)
