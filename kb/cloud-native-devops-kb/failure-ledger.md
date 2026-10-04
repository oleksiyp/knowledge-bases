---
type: Summary
title: 'Failure Ledger: What Broke, Retired or Disappointed'
description: Concrete negative outcomes and the narrower lessons they support.
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T16:34:09Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: aws
  resource: /research/aws-2021.md
  title: 'AWS December 2021: internal dependencies can impair recovery tools'
- id: log
  resource: /events/2021-12-log4j.md
  title: Log4j vulnerability response
- id: atlas
  resource: /research/atlassian-2022.md
  title: 'Atlassian 2022: restore capacity was the limiting service'
- id: weave
  resource: /events/2024-02-weaveworks.md
  title: Weaveworks ceases commercial operations
- id: xz
  resource: /events/2024-03-29-xz.md
  title: XZ malicious releases disclosed
- id: adobe
  resource: /research/adobe-flex.md
  title: 'Adobe Flex: GitOps scale required control-plane engineering'
- id: gitpod
  resource: /events/2024-10-31-gitpod.md
  title: Gitpod explains leaving Kubernetes
- id: actions
  resource: /events/2025-03-tj-actions.md
  title: tj-actions CI dependency compromised
- id: kv
  resource: /research/cloudflare-kv-2025.md
  title: 'Cloudflare Workers KV 2025: simplification and dependency concentration'
- id: ingress
  resource: /events/2025-11-11-ingress.md
  title: Ingress NGINX retirement announced
- id: cdktf
  resource: /events/2025-12-10-cdktf.md
  title: CDK for Terraform archived
- id: metr
  resource: /research/metr-productivity.md
  title: METR productivity evidence and its 2026 revision
- id: platform
  resource: /areas/platform-engineering.md
  title: Platform engineering and developer experience
- id: observability
  resource: /areas/observability.md
  title: Observability and telemetry economics
- id: security
  resource: /areas/security.md
  title: Software supply chain and runtime security
- id: reliability
  resource: /areas/reliability.md
  title: Reliability, recovery and incident learning
- id: stateful
  resource: /research/zalando-stateful-autoscaling.md
  title: Additional production failure evidence
- id: routing
  resource: /research/zalando-routing.md
  title: Additional production failure evidence
---


# Failure Ledger: What Broke, Retired or Disappointed

This ledger separates incidents, product outcomes and unsupported expectations. It does not infer failure rates from the number of public reports.

| Case | Observed negative outcome | Supported lesson | Overreach to avoid |
|---|---|---|---|
| [AWS, December 2021](/research/aws-2021.md) | Internal dependencies impaired service and control operations | Recovery plans must include control-plane dependencies | Every running workload failed |
| [Log4j, December 2021](/events/2021-12-log4j.md) | Widespread dependency required coordinated vulnerability response | Deployment-aware inventory and patching matter | An SBOM alone would have prevented exploitation |
| [Atlassian, April 2022](/research/atlassian-2022.md) | Unintended deletion exceeded prepared restore capacity | Test destructive scope and restore throughput | Backups have no value |
| [Weaveworks, 2024](/events/2024-02-weaveworks.md) | Commercial operations closed | Sponsor economics and project governance differ | GitOps or Flux died |
| [XZ, March 2024](/events/2024-03-29-xz.md) | Malicious upstream releases | Popularity and past trust do not guarantee future safety | Every Linux distribution was compromised |
| [Adobe’s original Flex hub](/research/adobe-flex.md) | Shared delivery control plane hit scale and recovery limits | The platform itself needs reliability engineering | GitOps cannot scale |
| [Gitpod’s Kubernetes fit](/events/2024-10-31-gitpod.md) | Operator chose a different substrate for its workload | Isolation and workload shape matter | Kubernetes failed for ordinary services |
| [tj-actions, March 2025](/events/2025-03-tj-actions.md) | Trusted CI dependency delivered malicious behavior | Reusable execution expands the trust boundary | Every dependent repository was exploited |
| [Workers KV, June 2025](/research/cloudflare-kv-2025.md) | Concentrated storage dependency disrupted service | Test independence of critical paths | Multi-cloud always solves resilience |
| [Ingress NGINX retirement](/events/2025-11-11-ingress.md) | Maintenance was scheduled to end | Widely used components still need maintainers and exits | All NGINX controllers retired |
| [CDKTF, December 2025](/events/2025-12-10-cdktf.md) | Product archived after insufficient fit at scale | Language ergonomics do not guarantee a viable product | All programming-language IaC failed |
| [AI productivity assumptions](/research/metr-productivity.md) | One experiment found slowdown; later estimation became unreliable | Evaluate current accepted outcomes in context | AI always slows or always accelerates developers |

The linked primary-source notes provide dates, scope and limitations.[^aws][^log][^atlas][^weave][^xz][^adobe][^gitpod][^actions][^kv][^ingress][^cdktf][^metr]

## Additional failures within otherwise useful approaches

Zalando’s stateful-scaling account identifies cancellation and cleanup defects, making the operator-lifecycle risk concrete.[^stateful] Its later routing account distinguishes successful changes from an unresolved zone-affinity trial.[^routing] These refine the failure categories: a recoverable control loop needs correct transitions, and a cost optimization needs whole-path accounting.

* [Stateful autoscaling case](/research/zalando-stateful-autoscaling.md)
* [Routing and locality case](/research/zalando-routing.md)
* [Evidence comparison](/evidence-scorecard.md)

## Failed expectations rather than failed categories

“Install a portal and get a platform,” “collect everything and get observability,” “sign an artifact and make it safe,” and “use multiple regions and become resilient” all omit necessary operating mechanisms. The idea assessments explain those missing conditions; they do not claim to have measured how often every organization makes the mistake.[^platform][^observability][^security][^reliability]

Acquisitions and rebranding are excluded from the failure count unless the evidence establishes a negative outcome. That is why Fermyon’s acquisition and Gitpod’s Ona positioning are recorded as mixed events elsewhere.

* [Executive summary](/executive-summary.md)
* [Decision guide](/decision-guide.md)

## Emerging automation and maintenance limits

The [Azure Functions account](/research/azure-functions-incidents.md) documents disappointing flexibility and maintenance effort in early structured investigation workflows. This is a design limitation, not a failed cloud service. The [agent-network exercise](/research/agent-network-redteam.md) records adversarial failures in an internal environment, not a production cloud outage. The [maintenance analysis](/research/platform-maintenance.md) identifies recurring obligations rather than demonstrating that platform engineering fails economically.

[^aws]: [AWS December 2021: internal dependencies can impair recovery tools](/research/aws-2021.md)
[^log]: [Log4j vulnerability response](/events/2021-12-log4j.md)
[^atlas]: [Atlassian 2022: restore capacity was the limiting service](/research/atlassian-2022.md)
[^weave]: [Weaveworks ceases commercial operations](/events/2024-02-weaveworks.md)
[^xz]: [XZ malicious releases disclosed](/events/2024-03-29-xz.md)
[^adobe]: [Adobe Flex: GitOps scale required control-plane engineering](/research/adobe-flex.md)
[^gitpod]: [Gitpod explains leaving Kubernetes](/events/2024-10-31-gitpod.md)
[^actions]: [tj-actions CI dependency compromised](/events/2025-03-tj-actions.md)
[^kv]: [Cloudflare Workers KV 2025: simplification and dependency concentration](/research/cloudflare-kv-2025.md)
[^ingress]: [Ingress NGINX retirement announced](/events/2025-11-11-ingress.md)
[^cdktf]: [CDK for Terraform archived](/events/2025-12-10-cdktf.md)
[^metr]: [METR productivity evidence and its 2026 revision](/research/metr-productivity.md)
[^platform]: [Platform engineering and developer experience](/areas/platform-engineering.md)
[^observability]: [Observability and telemetry economics](/areas/observability.md)
[^security]: [Software supply chain and runtime security](/areas/security.md)
[^reliability]: [Reliability, recovery and incident learning](/areas/reliability.md)
[^stateful]: [Additional production failure evidence](/research/zalando-stateful-autoscaling.md)
[^routing]: [Additional production failure evidence](/research/zalando-routing.md)
