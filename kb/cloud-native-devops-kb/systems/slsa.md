---
type: System
title: SLSA
description: A framework for describing software supply-chain build guarantees.
area: security
kind: standard
outcome: mature
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:11:46Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: source
  resource: https://slsa.dev/blog/2023/04/slsa-v1-final
  title: SLSA 1.0, April 2023
---

# SLSA

A framework for describing software supply-chain build guarantees.[^source]

## Role and outcome

Version 1.0 made build-provenance requirements a concrete interface.

## Operating boundary

A stated level or attestation must be checked against the actual build and consumption path.

The outcome label describes the reviewed project or product position, not a market-share ranking or an independent commercial audit.

## Related

* [Idea or case assessment](/ideas/security/provenance-and-signing.md)
* [Area review](/areas/security.md)

[^source]: [SLSA 1.0, April 2023](https://slsa.dev/blog/2023/04/slsa-v1-final)
