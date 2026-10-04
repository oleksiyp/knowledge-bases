---
type: Idea
title: Migration-safe infrastructure refactoring
description: Code reuse is most useful when resource identity and traffic movement remain explicit during a migration.
area: infrastructure-as-code
verdict: winning
confidence: medium
tags:
- cloud-native
- devops
- infrastructure-as-code
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:55:22Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: case
  resource: /research/oso-pulumi.md
  title: Production account and evidence limits
---

# Migration-safe infrastructure refactoring

## Verdict

**WINNING — Code reuse is most useful when resource identity and traffic movement remain explicit during a migration.**

The idea is to separate a change in the organization of infrastructure code from a change in deployed resources. A second separation distinguishes creating replacement capacity from sending customer traffic to it.

## Evidence

Oso’s migration account combines reusable components, preview-based refactoring and a gradual traffic transition.[^case] It is a positive implementation case for language-based IaC, while also documenting that the migration itself was difficult.

## What succeeded and failed

Reusable definitions can reduce duplicated changes across old and new environments. A routing boundary can preserve a fallback while the new infrastructure is tested. The risky assumption is that a harmless-looking code refactor cannot replace or delete a real resource.

An unchanged preview is evidence about the engine’s planned actions at that moment. It is not a complete proof of runtime equivalence, absence of out-of-band changes or the behavior of subsequent operations.

## Why and when it fits

The mechanism works when teams track logical and physical resource identity separately and retain control over customer exposure. It is particularly useful for regional replication, module extraction and replacing an execution substrate.

Define which resources may be recreated, which must retain identity, and which data cannot be duplicated casually. Evaluate a representative plan, preserve old capacity while validating the new path, and specify when rollback remains possible. Include the cost of running both environments.

## What would change the verdict

Repeated independent migration studies with failure and labor accounting would strengthen the economic generalization. The existing case supports feasibility and a useful design pattern, not an unconditional guarantee from any IaC engine.

## Related

* [Production case](/research/oso-pulumi.md)
* [Area review](/areas/infrastructure-as-code.md)
* [Executive summary](/executive-summary.md)

[^case]: [Production account and evidence limits](/research/oso-pulumi.md)
