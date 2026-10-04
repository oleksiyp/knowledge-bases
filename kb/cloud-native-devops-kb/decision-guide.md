---
type: Guide
title: 'Decision Guide: Applying the Five-Year Evidence'
description: A context-sensitive guide to cloud-native and DevOps investment decisions.
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:15:14Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: platform
  resource: /areas/platform-engineering.md
  title: Platform engineering and developer experience
- id: orchestration
  resource: /areas/orchestration.md
  title: Orchestration and workload placement
- id: economics
  resource: /areas/cloud-economics.md
  title: Cloud economics, FinOps and sustainability
- id: measurement
  resource: /lessons/measure-the-counterfactual.md
  title: Measure accepted outcomes and preserve the counterfactual
- id: complexity
  resource: /lessons/total-cost-of-complexity.md
  title: Count the cost of operating the abstraction
- id: automation
  resource: /lessons/automation-with-ownership.md
  title: Automation succeeds when authority and recovery have owners
- id: outcomes
  resource: /lessons/four-outcomes.md
  title: Technical merit, adoption, economics and vendor survival are different outcomes
- id: method
  resource: /references/methodology.md
  title: Scope, evidence and verdicts
- id: ai
  resource: /research/aiopslab.md
  title: 'AIOpsLab: evaluating agents under injected faults'
---

# Decision Guide: Applying the Five-Year Evidence

Start with the problem and the organization’s ability to operate the solution. The choices below are inferences from the area assessments, not guaranteed outcomes or a mandatory tool stack.[^platform][^orchestration][^economics]

| Situation | First option to evaluate | Evidence to require before expanding |
|---|---|---|
| Small team, few services | Managed execution and a simple repeatable deployment path | Lower total operating effort at required reliability |
| Many teams repeating the same provisioning work | A narrow platform API and supported golden path | Successful self-service, reduced tickets, maintained delivery stability |
| Large Kubernetes fleet | Reconciliation, tenancy policy and capacity controls | Tested disruption budgets, upgrade process and control-plane recovery |
| Repeated delivery incidents | Smaller exposure boundaries and useful health signals | Detection and recovery of representative failures, including data changes |
| High telemetry spend | Signal budgets and explicit sampling policies | Required incident questions remain answerable |
| Unclear cloud bill | Ownership, allocation and useful unit economics | Cost per successful outcome with shared and labor costs visible |
| Stable high-volume workload | Compare managed and owned capacity | Full-cycle total cost and a team willing to own recovery |
| Security inventory without remediation | Connect artifacts to deployments and accountable actions | Verified exposure decisions, revocation and replacement |
| AI-generated changes increasing review load | Narrower tasks and accepted-outcome measurement | Net benefit including rework, quality and downstream stability |
| Proposed autonomous remediation | Read-only diagnosis and constrained reversible actions | Failure analysis, intervention rates and tested authority boundaries |

## A practical evaluation sequence

**Establish the baseline.** Pick a stable service or workflow boundary. Record customer outcomes, completion latency, failures, support work and total cost. A measure such as “time to first working service” is more useful than the number of installed plugins.[^measurement]

**Choose one mechanism.** Specify which repeated work or failure mode it should remove. Name the remaining work and its owner. Avoid combining several major changes if the purpose is to learn which one helped.[^complexity]

**Exercise the failure path.** Test restoration, bad input, unavailable dependencies and an upgrade or rollback. For security or AI tools, test denial and containment as well as successful execution.[^automation]

**Review the whole lifecycle.** Include migration, support, version changes and retirement. Record what would cause the team to stop, simplify or choose another option. An exit criterion makes the trial informative even when the product is not adopted.[^outcomes]

## Evidence that deserves skepticism

A release proves availability, not economic benefit. A foundation milestone is not market share. A vendor benchmark is not a matched production comparison. A self-reported success does not represent every workload. A survey association is not a guaranteed intervention. A successful agent demonstration is not a production reliability distribution.[^method][^ai]

* [Executive summary](/executive-summary.md)
* [Failure ledger](/failure-ledger.md)

[^platform]: [Platform engineering and developer experience](/areas/platform-engineering.md)
[^orchestration]: [Orchestration and workload placement](/areas/orchestration.md)
[^economics]: [Cloud economics, FinOps and sustainability](/areas/cloud-economics.md)
[^measurement]: [Measure accepted outcomes and preserve the counterfactual](/lessons/measure-the-counterfactual.md)
[^complexity]: [Count the cost of operating the abstraction](/lessons/total-cost-of-complexity.md)
[^automation]: [Automation succeeds when authority and recovery have owners](/lessons/automation-with-ownership.md)
[^outcomes]: [Technical merit, adoption, economics and vendor survival are different outcomes](/lessons/four-outcomes.md)
[^method]: [Scope, evidence and verdicts](/references/methodology.md)
[^ai]: [AIOpsLab: evaluating agents under injected faults](/research/aiopslab.md)
