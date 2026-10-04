---
type: Paper
title: 'Velox: Meta’s Unified Execution Engine'
description: "Meta describes a reusable vectorized execution library shared across analytical and machine-learning systems. Its practical contribution is a common execution layer with explicit integration boundaries."
year: 2022
venue: 'PVLDB 15(12): 3372–3384'
authors:
- Pedro Pedreira
- Orri Erling
- Masha Basmanova
- Kevin Wilfong
- Laith Sakka
- Krishna Pai
- Wei He
- Biswapesh Chattopadhyay
resource: https://www.vldb.org/pvldb/vol15/p3372-pedreira.pdf
impact: high
ideas:
- ideas/analytics-lakehouse/composable-data-systems
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: paper
  resource: https://www.vldb.org/pvldb/vol15/p3372-pedreira.pdf
  title: 'Velox: Meta’s Unified Execution Engine'
- id: meta
  resource: https://engineering.fb.com/2023/03/09/open-source/velox-open-source-execution-engine/
  title: 'Introducing Velox: An open source unified execution engine'
- id: manifesto
  resource: https://www.vldb.org/pvldb/vol16/p2679-pedreira.pdf
  title: The Composable Data Management System Manifesto
---

# Claim

Velox proposes a reusable C++ execution library for systems that otherwise duplicate their vectorized operators, functions and memory representations. It accepts an optimized plan and executes work locally; the integrating system supplies the language frontend, global optimizer and distributed orchestration. This boundary allows reuse without requiring every application to become the same database.[^paper]

# What happened next

Meta described integration with Presto through Prestissimo and with Spark through Gluten, as well as machine-learning data processing. Its 2023 engineering account explains that the aim includes consistent behavior and reduced engineering duplication alongside execution speed.[^meta]

The 2023 composable-systems manifesto generalized this approach into a modular stack of interfaces and reusable implementations.[^manifesto] The practical success is narrower than arbitrary plug-and-play database assembly: an execution library can be shared while each host retains substantial integration work. The paper itself makes that separation explicit, so comparing Velox directly with a complete SQL database would misstate its claim.[^paper]

The high impact assessment rests on an implemented shared execution layer and documented integrations. It does not imply that every engine should adopt C++, or that common operators eliminate differences in SQL semantics and resource management.

# Related

- [Velox](/systems/velox.md)
- [Composable data systems](/ideas/analytics-lakehouse/composable-data-systems.md)
- [Composable manifesto](/papers/2023-composable-data-management-system-manifesto.md)
