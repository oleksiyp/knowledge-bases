---
type: Research
title: 'Razorpay: policy enforcement at fleet scale'
description: An adopter account describes automated admission controls, with limited evidence about realized risk
  reduction.
area: security
year: 2026
publication_date: '2026-06-18'
kind: practitioner-account
evidence_strength: situated-primary-account
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T16:34:09Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: primary
  resource: https://www.cncf.io/case-studies/razorpay/
  title: 'Razorpay: policy enforcement at fleet scale'
---

# Razorpay: policy enforcement at fleet scale

## Observed evidence

The CNCF case describes Razorpay using an enterprise Kyverno offering with Nirmata across more than 7,000 Kubernetes nodes. It reports pre-deployment checks, admission validation, generated defaults and network policies, image-signature verification and drift detection.[^primary]

## Method and limits

This adopter/vendor account supports deployment scale and control design. Its promotional claims do not establish complete regulatory compliance or a measured reduction in security incidents. Signing authenticates an artifact's origin under a trust policy; it cannot by itself prove the artifact lacks vulnerabilities.

## Decision implication

Measure enforced coverage separately from security outcomes. Test bypass paths, erroneous rejection, exception expiry and admission-service failure. For an internal rollout, record how policies affect both exposure and recovery time. These are evaluation recommendations, not outcomes reported by Razorpay.

* [Related assessment](/ideas/security/policy-and-runtime.md)
* [Area review](/areas/security.md)

[^primary]: [Razorpay: policy enforcement at fleet scale](https://www.cncf.io/case-studies/razorpay/)
