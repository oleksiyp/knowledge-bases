---
type: Area
title: Software supply chain and runtime security
description: Verifiable identity and provenance matured, while inventories and early checks remained incomplete
  defenses.
area: security
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T16:34:09Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: i1
  resource: /ideas/security/provenance-and-signing.md
  title: Artifact provenance and signing as verifiable evidence
- id: i2
  resource: /ideas/security/sbom-to-remediation.md
  title: SBOMs are inventory inputs, not a remediation outcome
- id: i3
  resource: /ideas/security/defense-beyond-shift-left.md
  title: Defense beyond shift-left and dependency scanning
- id: i4
  resource: /ideas/security/workload-identity.md
  title: Short-lived workload identity and CI federation
- id: i5
  resource: /ideas/security/policy-and-runtime.md
  title: Admission policy and runtime detection as complementary controls
---



# Software supply chain and runtime security

Verifiable identity and provenance matured, while inventories and early checks remained incomplete defenses.

## Idea scorecard

Verdicts concern the stated idea and fit, not market share. “Winning” means a durable useful mechanism with the evidence limits described in the linked assessment. [^i1] [^i2] [^i3] [^i4] [^i5]

| Idea | Verdict | Assessment |
|---|---|---|
| [Artifact provenance and signing as verifiable evidence](/ideas/security/provenance-and-signing.md) | winning | Signing and build provenance matured into useful trust evidence, but neither proves that software is benign. |
| [SBOMs are inventory inputs, not a remediation outcome](/ideas/security/sbom-to-remediation.md) | mixed | Software inventories help exposure analysis, but actionable security requires context, ownership and a reliable remediation loop. |
| [Defense beyond shift-left and dependency scanning](/ideas/security/defense-beyond-shift-left.md) | mixed | Early checks are valuable, but build compromise and malicious maintenance require controls across the software lifecycle. |
| [Short-lived workload identity and CI federation](/ideas/security/workload-identity.md) | winning | Workload identity reduces dependence on distributed long-lived credentials while making identity policy an essential operating service. |
| [Admission policy and runtime detection as complementary controls](/ideas/security/policy-and-runtime.md) | winning | Policy enforcement and runtime detection matured, but effective response still requires maintained rules and operational ownership. |

## What succeeded

Sigstore, SLSA and workload identity create concrete trust interfaces. Admission and runtime tools cover different lifecycle stages. These mechanisms are more useful when connected to the exact artifact or identity being admitted.

## What failed or remained unsettled

Log4j, XZ and CI dependency compromise involve different causes. Treating them all as a reason to buy more scanners loses the causal distinctions. An SBOM is an inventory; a signature is an identity claim; neither alone proves safe behavior.

## Decision implications

Build a chain from source and build identity through artifact verification to deployment and response. Keep authority narrow, inventory deployed artifacts, and practice revocation and rebuild. Measure verified remediation and actionable detection.

## Evidence trail

* [2021 12 Log4J](/events/2021-12-log4j.md)
* [2024 03 29 Xz](/events/2024-03-29-xz.md)
* [2025 03 Tj Actions](/events/2025-03-tj-actions.md)

The scorecard is a synthesis of the linked assessments. Release milestones establish availability; case studies establish situated experience; surveys establish associations. None alone establishes universal return on investment.

* [Executive summary](/executive-summary.md)
* [Cross-cutting lessons](/lessons/)

## Selected systems and standards

* [Falco](/systems/falco.md) — A runtime threat-detection project that graduated in 2024.
* [Sigstore](/systems/sigstore.md) — Identity-linked signing and transparency infrastructure for artifact verification.
* [SLSA](/systems/slsa.md) — A framework for describing software supply-chain build guarantees.
* [SPIFFE and SPIRE](/systems/spiffe-spire.md) — Workload identity interfaces and attestation machinery.

* [Evidence: Razorpay: policy enforcement at fleet scale](/research/razorpay-kyverno.md)

* [Kyverno system profile](/systems/kyverno.md)

[^i1]: [Artifact provenance and signing as verifiable evidence](/ideas/security/provenance-and-signing.md)
[^i2]: [SBOMs are inventory inputs, not a remediation outcome](/ideas/security/sbom-to-remediation.md)
[^i3]: [Defense beyond shift-left and dependency scanning](/ideas/security/defense-beyond-shift-left.md)
[^i4]: [Short-lived workload identity and CI federation](/ideas/security/workload-identity.md)
[^i5]: [Admission policy and runtime detection as complementary controls](/ideas/security/policy-and-runtime.md)
