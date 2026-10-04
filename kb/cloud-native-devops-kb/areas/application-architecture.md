---
type: Area
title: Application architecture and execution models
description: The period favors workload-specific execution choices over a single universal application architecture.
area: application-architecture
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:11:46Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: i1
  resource: /ideas/application-architecture/right-sized-services.md
  title: Right-sized services and modular simplicity
- id: i2
  resource: /ideas/application-architecture/serverless-and-containers.md
  title: Serverless and managed containers as selective operating models
- id: i3
  resource: /ideas/application-architecture/durable-workflows.md
  title: Durable execution for long-running coordination
- id: i4
  resource: /ideas/application-architecture/wasm-execution.md
  title: WebAssembly as a specialized execution boundary
---

# Application architecture and execution models

The period favors workload-specific execution choices over a single universal application architecture.

## Idea scorecard

Verdicts concern the stated idea and fit, not market share. “Winning” means a durable useful mechanism with the evidence limits described in the linked assessment. [^i1] [^i2] [^i3] [^i4]

| Idea | Verdict | Assessment |
|---|---|---|
| [Right-sized services and modular simplicity](/ideas/application-architecture/right-sized-services.md) | mixed | Service decomposition is valuable when boundaries justify it; simpler deployment can win when coordination and operations dominate. |
| [Serverless and managed containers as selective operating models](/ideas/application-architecture/serverless-and-containers.md) | winning | Managed execution expanded its workload range, while cold starts, limits and provider coupling remained design inputs. |
| [Durable execution for long-running coordination](/ideas/application-architecture/durable-workflows.md) | winning | Durable workflow engines provide a useful alternative to custom retry and orchestration code when their programming model fits. |
| [WebAssembly as a specialized execution boundary](/ideas/application-architecture/wasm-execution.md) | niche | WebAssembly supports a credible specialized execution ecosystem, but the evidence here does not establish replacement of general container platforms. |

## What succeeded

Managed containers and functions expanded capabilities; durable workflows packaged recurring coordination logic. A modular application remains a legitimate starting point, and specialized runtimes can fit specific isolation or execution needs.

## What failed or remained unsettled

The weak claim is universal replacement: all applications as microservices, all execution as functions, or Wasm replacing containers. The evidence here establishes narrower capabilities and cases. Network boundaries, state and lifecycle behavior still dominate difficult tradeoffs.

## Decision implications

Choose service boundaries around ownership and independent change. Evaluate cold and warm behavior for managed execution. Use durable workflows where they replace real coordination complexity, and benchmark specialized runtimes end to end.

## Evidence trail

* [Repatriation 37Signals](/research/repatriation-37signals.md)
* [2025 04 07 Cloud Run Gpu](/events/2025-04-07-cloud-run-gpu.md)
* [2025 12 01 Fermyon](/events/2025-12-01-fermyon.md)

The scorecard is a synthesis of the linked assessments. Release milestones establish availability; case studies establish situated experience; surveys establish associations. None alone establishes universal return on investment.

* [Executive summary](/executive-summary.md)
* [Cross-cutting lessons](/lessons/)

## Selected systems and standards

* [Cloud Run](/systems/cloud-run.md) — Managed container execution with a GPU serving option introduced during the review window.
* [Fermyon and Spin](/systems/fermyon-spin.md) — A WebAssembly execution ecosystem whose company was acquired by Akamai in 2025.
* [Kamal](/systems/kamal.md) — A container deployment tool used in 37signals’ simplification account.
* [AWS Lambda](/systems/lambda.md) — Managed function execution with evolving startup optimizations.
* [Temporal](/systems/temporal.md) — A durable execution system for long-running application workflows.

[^i1]: [Right-sized services and modular simplicity](/ideas/application-architecture/right-sized-services.md)
[^i2]: [Serverless and managed containers as selective operating models](/ideas/application-architecture/serverless-and-containers.md)
[^i3]: [Durable execution for long-running coordination](/ideas/application-architecture/durable-workflows.md)
[^i4]: [WebAssembly as a specialized execution boundary](/ideas/application-architecture/wasm-execution.md)
