---
type: Paper
title: The Composable Data Management System Manifesto
description: "A vision paper organizes database software into reusable components and shared interfaces. Its influence is in framing the design tradeoffs of modular systems rather than proving universal interoperability."
year: 2023
venue: 'PVLDB 16(10): 2679–2685'
authors:
- Pedro Pedreira
- Orri Erling
- Konstantinos Karanasos
- Scott Schneider
- Wes McKinney
- Satya R Valluri
- Mohamed Zait
- Jacques Nadeau
resource: https://www.vldb.org/pvldb/vol16/p2679-pedreira.pdf
impact: medium
ideas:
- ideas/analytics-lakehouse/composable-data-systems
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: paper
  resource: https://www.vldb.org/pvldb/vol16/p2679-pedreira.pdf
  title: The Composable Data Management System Manifesto
- id: velox
  resource: https://engineering.fb.com/2023/03/09/open-source/velox-open-source-execution-engine/
  title: 'Introducing Velox: An open source unified execution engine'
---

# Claim

The manifesto argues that specialized databases need not independently reimplement their entire software stack. Reusable components and shared interfaces can preserve specialization while reducing engineering cost and inconsistent behavior. It distinguishes language frontends, intermediate representations, optimization, execution and storage, rather than treating an engine as an indivisible product.[^paper]

# What happened next

Velox's documented integrations provide an implementation example of the thesis: common execution components can serve different host systems. They also show that host-specific planning and integration remain necessary.[^velox] The manifesto describes an existing movement and a research agenda; it did not invent Arrow or cause every later use of reusable engines.

Its impact assessment is therefore medium as a paper, even though the component-reuse idea is important. Naming and organizing a trend helps designers compare interfaces, but it is not a controlled demonstration that any combination of components will be cheaper or faster. The useful evaluation asks which boundary is stable enough to share and what adaptation costs remain.

The analytical lesson is to distinguish successful reuse of a well-scoped library from universal interoperability. Common data buffers do not by themselves guarantee identical semantics, scheduling or failure handling across complete products.

# Related

- [Composable data systems](/ideas/analytics-lakehouse/composable-data-systems.md)
- [Apache Arrow](/systems/apache-arrow.md)
- [DataFusion](/systems/datafusion.md)
- [Velox paper](/papers/2022-velox.md)
