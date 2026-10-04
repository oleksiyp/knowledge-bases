---
type: Language
title: Q# and quantum programming languages
description: Quantum programming toolchains matured as specialist tools; compiler improvements and simulation are
  distinct from demonstrated useful quantum advantage.
trajectory: niche
tags:
- language-evolution
paradigms:
- quantum
- domain-specific
typing: static
memory_model: mixed
steward: Microsoft and the wider quantum software community
governance: single-vendor
ideas:
- ideas/platforms-and-portability/quantum-programming-languages
runtimes: []
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: qdk
  title: Microsoft Quantum Development Kit overview
  resource: https://learn.microsoft.com/en-us/azure/quantum/qdk-main-overview
- id: qiskit
  title: 'IBM: Qiskit 2.0 release, 3 April 2025'
  resource: https://www.ibm.com/quantum/blog/qiskit-2-0-release-summary
- id: qdk-preview
  title: 'Microsoft: Modern QDK preview, September 2023'
  resource: https://quantum.microsoft.com/en-us/insights/blogs/introducing-the-microsoft-quantum-development-kit-preview
- id: resources
  title: 'Microsoft: Introduction to resource estimation'
  resource: https://learn.microsoft.com/en-us/azure/quantum/intro-to-resource-estimation
- id: qiskit-notes
  title: Qiskit 2.0 release notes
  resource: https://quantum.cloud.ibm.com/docs/en/api/qiskit/release-notes/2.0
---

# Summary
**Verdict: useful specialist tooling; broad computational advantage is not established by tool releases.** Q# expresses quantum algorithms, while the QDK supplies development and execution tools. Qiskit provides a different, Python-centered ecosystem. Their progress should be assessed separately from hardware claims.[^qdk][^qiskit]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E3 | 2023-09 | Reworked QDK preview supports lighter deployment and browser tooling | + [^qdk-preview] |
| E4 | 2025-04-03 | Qiskit SDK 2.0 released | + / migration [^qiskit] |
| E4 | cutoff review | Resource estimation remains an explicit part of development | realism [^resources] |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| A dedicated quantum language | Captures domain operations and supports development tooling [^qdk] |
| Existing Python workflows | Qiskit provides an alternative integration path [^qiskit] |
| Resource-aware algorithm development | Helps estimate requirements before hardware is available [^resources] |

# What succeeded
Microsoft's reworked QDK reduced setup burdens and enabled browser-based editing, debugging and simulation. The preview describes a Rust implementation and WebAssembly delivery: conventional compiler engineering improved access to quantum software.[^qdk-preview]

Qiskit 2.0 added a compiled C interface for selected functionality and expanded circuit capabilities. This is evidence of an SDK becoming more useful to other software components, not a single language winning the entire domain.[^qiskit-notes]

# What failed or stalled
Qiskit 2.0 removed older interfaces and Pulse support. Users depending on those APIs faced real migration work despite the release's other improvements.[^qiskit-notes]

Resource estimation makes assumptions about logical operations, error correction and hardware explicit. A simulated program or a favorable compiler benchmark does not establish that a practical quantum machine executes the workload more cheaply than a classical one.[^resources]

# By era
- **E1–E2:** specialist language and SDK development form the background to later toolchain changes.
- **E3:** QDK delivery is redesigned to improve accessibility.[^qdk-preview]
- **E4:** SDK maturation includes both new integration interfaces and compatibility breaks.[^qiskit-notes]

# Lessons
**Synthesis:** score language expressiveness, tool usability, hardware access and useful algorithmic advantage separately. A toolchain can succeed at the first two while the application case remains unproven. No language-market-share estimate is inferred from vendor release announcements here.

# Related
- [Quantum programming ideas](/ideas/platforms-and-portability/quantum-programming-languages.md)
- [LLVM](/runtimes/llvm.md)

[^qdk]: Microsoft Quantum Development Kit overview — https://learn.microsoft.com/en-us/azure/quantum/qdk-main-overview
[^qiskit]: IBM: Qiskit 2.0 release, 3 April 2025 — https://www.ibm.com/quantum/blog/qiskit-2-0-release-summary
[^qdk-preview]: Microsoft: Modern QDK preview, September 2023 — https://quantum.microsoft.com/en-us/insights/blogs/introducing-the-microsoft-quantum-development-kit-preview
[^resources]: Microsoft: Introduction to resource estimation — https://learn.microsoft.com/en-us/azure/quantum/intro-to-resource-estimation
[^qiskit-notes]: Qiskit 2.0 release notes — https://quantum.cloud.ibm.com/docs/en/api/qiskit/release-notes/2.0
