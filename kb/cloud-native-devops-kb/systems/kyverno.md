---
type: System
title: Kyverno
description: Policy-as-code enforcement with fleet adoption and explicit lifecycle obligations.
area: security
kind: policy-engine
outcome: established
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T16:34:09Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: cncf
  resource: https://www.cncf.io/projects/kyverno/
  title: CNCF Kyverno project record
- id: case
  resource: /research/razorpay-kyverno.md
  title: Razorpay adoption evidence
---

# Kyverno

CNCF records Kyverno's incubation in July 2022 and graduation on March 16, 2026.[^cncf] The [Razorpay account](/research/razorpay-kyverno.md) supplies a situated adoption example.[^case]

## What succeeded

Declarative policies can make repeated checks part of delivery and admission. Graduation is a project-maturity milestone, not a measurement of prevented incidents.

## What to evaluate

Assign an owner to policy changes and exceptions. Test enforcement behavior during controller outages, identity changes and rollback. Check which controls apply to new requests and which detect existing drift. Decide what evidence would show that a policy is effective rather than merely installed.

* [Policy and runtime assessment](/ideas/security/policy-and-runtime.md)
* [Security area](/areas/security.md)

[^cncf]: [CNCF Kyverno project record](https://www.cncf.io/projects/kyverno/)
[^case]: [Razorpay adoption evidence](/research/razorpay-kyverno.md)
