---
type: Idea
title: Admission policy and runtime detection as complementary controls
description: Policy enforcement and runtime detection matured, but effective response still requires maintained
  rules and operational ownership.
area: security
verdict: winning
confidence: medium
tags:
- cloud-native
- devops
- security
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T16:34:09Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: admission
  resource: https://kubernetes.io/blog/2024/04/24/validating-admission-policy-ga/
  title: ValidatingAdmissionPolicy reaches GA, April 2024
- id: falco
  resource: https://www.cncf.io/announcements/2024/02/29/cloud-native-computing-foundation-announces-falco-graduation/
  title: Falco graduates, February 2024
- id: evidence-razorpay-kyverno
  resource: /research/razorpay-kyverno.md
  title: 'Razorpay: policy enforcement at fleet scale'
---


# Admission policy and runtime detection as complementary controls

## Verdict

**WINNING — Policy enforcement and runtime detection matured, but effective response still requires maintained rules and operational ownership.** This is an editorial assessment of the evidence within October 4, 2021–October 4, 2026, not a market-share estimate.

## Evidence during the period

Kubernetes 1.30 made ValidatingAdmissionPolicy generally available in April 2024. Falco graduated in February 2024.[^admission][^falco]

## What succeeded

Admission rules can reject known-bad resource configurations before they enter the cluster. Runtime detection can observe behavior that is not visible in a static manifest. The two address different stages of execution.

## What failed or remained difficult

Overbroad policy can block legitimate recovery, while permissive exceptions can undermine the intended guarantee. Detection without a capable responder produces noise. An accepted manifest does not establish that the process will behave safely.

## Why and when it fits

The causal model is layered coverage with different evidence at each layer. More rules do not necessarily improve coverage if no one can explain or maintain them.

Start with a small number of high-value rules and an audit phase. Define failure behavior and an accountable exception process. Test runtime detections against known scenarios and measure actionable response, not alert volume.

## What would change the verdict

Production studies that report false positives, missed events and response outcomes could strengthen the security outcome claim. Graduation and feature availability are weaker evidence.

## Related

* [Area review](/areas/security.md)
* [Executive summary](/executive-summary.md)
* [Evidence method](/references/methodology.md)

* [System profile: Falco](/systems/falco.md)

## Additional evidence: Razorpay

[Read the evidence and its limits](/research/razorpay-kyverno.md).[^evidence-razorpay-kyverno]

[^admission]: [ValidatingAdmissionPolicy reaches GA, April 2024](https://kubernetes.io/blog/2024/04/24/validating-admission-policy-ga/)
[^falco]: [Falco graduates, February 2024](https://www.cncf.io/announcements/2024/02/29/cloud-native-computing-foundation-announces-falco-graduation/)
[^evidence-razorpay-kyverno]: [Razorpay: policy enforcement at fleet scale](/research/razorpay-kyverno.md)
