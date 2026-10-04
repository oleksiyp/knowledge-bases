---
type: Summary
title: 'Evidence Scorecard: What the Production Cases Actually Establish'
description: Production outcomes compared by evidence type, supported conclusion and limits.
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T16:34:09Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: michelin
  resource: /research/michelin-cilium.md
  title: Michelin / Cilium
- id: spotify
  resource: /research/spotify-backstage.md
  title: Spotify / Backstage
- id: discord
  resource: /research/discord-coder.md
  title: Discord / Coder
- id: oso
  resource: /research/oso-pulumi.md
  title: Oso / Pulumi
- id: scale
  resource: /research/zalando-stateful-autoscaling.md
  title: Zalando / Elasticsearch scaling
- id: route
  resource: /research/zalando-routing.md
  title: Zalando / routing
- id: cost
  resource: /research/opencost-inference.md
  title: OpenCost / inference
- id: adobe
  resource: /research/adobe-flex.md
  title: Adobe / Flex
- id: metr
  resource: /research/metr-productivity.md
  title: METR / AI productivity
- id: restore
  resource: /research/atlassian-2022.md
  title: Atlassian / restoration
- id: kv
  resource: /research/cloudflare-kv-2025.md
  title: Cloudflare / Workers KV
- id: exit
  resource: /research/repatriation-37signals.md
  title: 37signals / repatriation
---


# Evidence Scorecard: What the Production Cases Actually Establish

The question is not simply whether a source sounds positive or negative. Different evidence types support different claims. This scorecard gives executives a direct path from a conclusion to its limits.

| Case | Observed outcome | Evidence type | Strongest supported claim | Claim to reject |
|---|---|---|---|---|
| [Michelin / Cilium](/research/michelin-cilium.md) | Reported production success | Adopter account | A specific fleet migration and operating improvement | Universal superiority; automatic mesh demand |
| [Spotify / Backstage](/research/spotify-backstage.md) | Favorable association | Matched observational analysis | Platform use and later outcomes were related in the studied population | Causal fixed ROI from installing a portal |
| [Discord / Coder](/research/discord-coder.md) | Reported production success with tradeoffs | Operator migration account | Remote workspaces improved after implementation changes | Every workflow should be remote or container-based |
| [Oso / Pulumi](/research/oso-pulumi.md) | Reported migration success | Practitioner account hosted by vendor | Language reuse can contribute to a controlled infrastructure migration | A preview guarantees runtime safety |
| [Zalando / Elasticsearch scaling](/research/zalando-stateful-autoscaling.md) | Concrete operational failure | Detailed operator analysis | Interrupted transitions and cleanup can break expected convergence | All stateful Kubernetes operation fails |
| [Zalando / routing](/research/zalando-routing.md) | Mixed: realized gains and paused experiment | Multi-intervention before-and-after account | Different optimization layers can have different outcomes | Lower network cost guarantees lower total cost |
| [OpenCost / inference](/research/opencost-inference.md) | Implementation progress | Maintainer technical report | Allocation and active-use costs can be separated | Measured customer savings or universal break-even point |
| [Adobe / Flex](/research/adobe-flex.md) | Production adoption with redesign | Practitioner architecture account | GitOps can operate at substantial scale with platform engineering | The controller is a complete platform |
| [METR / AI productivity](/research/metr-productivity.md) | Bounded experiment; later estimation limited | Randomized study and follow-up limitations | One sample and tool setting supports a causal result | A timeless percentage for all AI-assisted work |
| [Atlassian / restoration](/research/atlassian-2022.md) | Concrete operational failure | Public postmortem and follow-up | Recovery throughput and scope can dominate outage duration | Backups are sufficient or useless |
| [Cloudflare / Workers KV](/research/cloudflare-kv-2025.md) | Concrete dependency failure | Public postmortem and design account | Critical dependencies can concentrate risk | Multi-cloud is invariably the answer |
| [37signals / repatriation](/research/repatriation-37signals.md) | Operator-reported success | Leadership migration account | A cloud exit is feasible for a particular workload and team | All organizations should repatriate |

Evidence notes: [^michelin] [^spotify] [^discord] [^oso] [^scale] [^route] [^cost] [^adobe] [^metr] [^restore] [^kv] [^exit]

## What changed after adding these cases

The evidence for targeted CNI consolidation, remote developer environments and language-based IaC is stronger than a release-history-only review suggests. These cases make implementation success concrete without establishing general market share or an average return.

The failure analysis is also more specific. Stateful elasticity can fail because partial external changes outlive a controller attempt. A locality optimization can increase another subsystem’s work. A platform adoption correlation can remain favorable while its causal ROI is unknown.

The resulting recommendation is to compare alternatives at the same operational boundary. Keep workload, quality requirements, staffing assumptions and observation window visible. A case is most transferable when those conditions resemble the decision at hand.

## Confidence is attached to a claim

There can be strong evidence that an operator encountered a particular failure and much weaker evidence about how frequently that failure occurs elsewhere. A published successful migration may be credible as a report while leaving alternative implementations untested. The KB’s qualitative verdicts preserve that distinction.

* [Executive summary](/executive-summary.md)
* [Failure ledger](/failure-ledger.md)
* [Methodology](/references/methodology.md)

## Further evidence and its boundaries

| Evidence | Supports | Does not establish |
|---|---|---|
| [Azure Functions](/research/azure-functions-incidents.md) | Practitioners use AI for investigation | Reliable unattended remediation |
| [Agent-network red team](/research/agent-network-redteam.md) | Interaction introduces failure mechanisms | Production failure prevalence |
| [Razorpay / Kyverno](/research/razorpay-kyverno.md) | Fleet-scale policy deployment | Complete security or regulatory compliance |
| [Platform maintenance](/research/platform-maintenance.md) | Dependencies create recurring integration work | A universal staffing ratio or negative ROI |

[^michelin]: [Michelin / Cilium](/research/michelin-cilium.md)
[^spotify]: [Spotify / Backstage](/research/spotify-backstage.md)
[^discord]: [Discord / Coder](/research/discord-coder.md)
[^oso]: [Oso / Pulumi](/research/oso-pulumi.md)
[^scale]: [Zalando / Elasticsearch scaling](/research/zalando-stateful-autoscaling.md)
[^route]: [Zalando / routing](/research/zalando-routing.md)
[^cost]: [OpenCost / inference](/research/opencost-inference.md)
[^adobe]: [Adobe / Flex](/research/adobe-flex.md)
[^metr]: [METR / AI productivity](/research/metr-productivity.md)
[^restore]: [Atlassian / restoration](/research/atlassian-2022.md)
[^kv]: [Cloudflare / Workers KV](/research/cloudflare-kv-2025.md)
[^exit]: [37signals / repatriation](/research/repatriation-37signals.md)
