---
type: Idea
title: Artifact provenance and signing as verifiable evidence
description: Signing and build provenance matured into useful trust evidence, but neither proves that software is
  benign.
area: security
verdict: winning
confidence: high
tags:
- cloud-native
- devops
- security
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:05:07Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: sigstore
  resource: https://blog.sigstore.dev/sigstore-ga-ddd6ba67894d/
  title: Sigstore general availability, October 2022
- id: slsa
  resource: https://slsa.dev/blog/2023/04/slsa-v1-final
  title: SLSA 1.0, April 2023
---

# Artifact provenance and signing as verifiable evidence

## Verdict

**WINNING — Signing and build provenance matured into useful trust evidence, but neither proves that software is benign.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

Sigstore’s Rekor and Fulcio reached general availability in October 2022. SLSA 1.0 followed in April 2023 with a focused build-provenance framework.[^sigstore][^slsa]

## What succeeded

Consumers can ask who built an artifact, under which process, and whether the artifact matches the evidence. This supports more explicit release policy than trusting a package name or a mutable download location.

## What failed or remained difficult

A faithfully recorded build can still contain malicious source or compromised inputs. Producing attestations without verifying them at consumption creates paperwork rather than a trust boundary. Identity and policy must be anchored outside the artifact’s own claims.

## Why and when it fits

The success is better evidence and a verification interface. It is not a general prevention guarantee. The strongest implementation connects the attestation to the exact artifact admitted into production and to a defined trusted builder.

Begin with release artifacts and a small policy that can be enforced consistently. Record exceptions and test rejection of an artifact from an unexpected builder. Preserve emergency recovery paths without silently disabling verification.

## What would change the verdict

Independent incident comparisons could establish how much particular policies reduce compromise impact. Standards maturity alone cannot quantify prevention.

## Related

* [Area review](/areas/security.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

* [System profile: Sigstore](/systems/sigstore.md)

* [System profile: SLSA](/systems/slsa.md)

[^sigstore]: [Sigstore general availability, October 2022](https://blog.sigstore.dev/sigstore-ga-ddd6ba67894d/)
[^slsa]: [SLSA 1.0, April 2023](https://slsa.dev/blog/2023/04/slsa-v1-final)
