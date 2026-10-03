---
type: Idea
title: Quantum programming languages
description: "Languages and SDKs for programming quantum computers: standalone languages (Q#, Silq), Python-embedded circuit SDKs (Qiskit, Cirq, PennyLane), intermediate representations (OpenQASM 3, QIR) and hybrid GPU–QPU models (CUDA-Q). 2018–2026 verdict: Python-embedded SDKs won by default, and standalone quantum languages stayed niche. The field's main constraint was hardware that could not yet run useful fault-tolerant programs, not language design."
area: platforms-and-portability
tags: [quantum, qsharp, qiskit, cirq, openqasm, cuda-q, guppy, silq, ibm, microsoft, nvidia, quantinuum]
outcome: unproven
maturity_2026: experimental
origin_year: 1998
mainstream_year: null
languages: [languages/q-sharp-and-quantum, languages/python, languages/rust]
runtimes: []
related_ideas: [ideas/types/linear-and-affine-types, ideas/platforms-and-portability/gpu-programming-languages]
era_momentum: { E1: up, E2: up, E3: flat, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: qiskit1
    resource: https://www.ibm.com/quantum/blog/qiskit-1-launch
    title: "IBM Quantum blog: Qiskit 1.0 coming in February 2024"
  - id: qiskit2
    resource: https://www.ibm.com/quantum/blog/qiskit-2-0-release-summary
    title: "IBM Quantum blog: Release News — Qiskit SDK v2.0 is here!"
  - id: qdk-infoq
    resource: https://www.infoq.com/news/2024/01/microsoft-azure-quantum-qdk/
    title: "InfoQ: Microsoft Launches Azure Quantum Development Kit 1.0"
  - id: qdk-rust
    resource: https://mspoweruser.com/microsoft-new-azure-quantum-development-kit/
    title: "MSPoweruser: New Azure Quantum Development Kit is 100x faster, 100x smaller, runs in a browser"
  - id: oqasm3
    resource: https://dl.acm.org/doi/10.1145/3505636
    title: "ACM TQC: OpenQASM 3 — A Broader and Deeper Quantum Assembly Language"
  - id: braket-qasm
    resource: https://aws.amazon.com/about-aws/whats-new/2022/03/amazon-braket-openqasm-3-0
    title: "AWS: Amazon Braket adds support for OpenQASM 3.0 (2022-03)"
  - id: guppy
    resource: https://docs.quantinuum.com/guppy/
    title: "Quantinuum: Guppy documentation"
  - id: guppy-own
    resource: https://arxiv.org/html/2510.13082v1
    title: "arXiv: Imperative quantum programming with ownership and borrowing in Guppy"
  - id: cudaq
    resource: https://developer.nvidia.com/cuda-q
    title: "NVIDIA: CUDA-Q"
  - id: cudaq-2026
    resource: https://nvidianews.nvidia.com/news/nvidia-expands-open-source-cuda-q-platform-for-fault-tolerant-quantum-computing
    title: "NVIDIA Newsroom: NVIDIA expands open source CUDA-Q platform for fault-tolerant quantum computing (2026)"
  - id: survey-qpl
    resource: https://arxiv.org/pdf/2606.26254
    title: "arXiv: A Survey of Quantum Programming Languages (2026)"
---

# Summary

**Unproven, with a clear winner in form.** By 2026 most quantum programs were Python code calling
an SDK: IBM's **Qiskit** (1.0 in February 2024, 2.0 in March 2025),[^qiskit1][^qiskit2] Google's
Cirq, Xanadu's PennyLane, or Nvidia's **CUDA-Q** for hybrid GPU–QPU workflows.[^cudaq] Programs
are lowered to **OpenQASM 3** or QIR as an interchange format.[^oqasm3][^braket-qasm] Microsoft's
**Q#**, the best-known standalone quantum language, survived by being rebuilt. Its new QDK
(1.0, January 2024) was rewritten mostly in Rust, about 100x faster, and runs in the browser
and in Python.[^qdk-infoq][^qdk-rust] Research languages such as Silq showed safer
semantics (automatic uncomputation) without adoption. The most interesting 2024–2026 design is
Quantinuum's **Guppy**, a Python-embedded, statically typed language that treats qubits as
linear values (ownership and borrowing) to prevent no-cloning errors.[^guppy][^guppy-own] The
binding constraint was hardware: until fault-tolerant machines exist, programs stay small and
language features matter less than compilers and error-correction tooling.[^cudaq-2026]

# The idea

Quantum programs manipulate qubits that cannot be copied (no-cloning) and must be uncomputed to
avoid unwanted entanglement. They interleave with classical control in real time (mid-circuit
measurement, feedback). Language design questions: circuit builders versus structured
languages, how to type qubits (linear types), how to express classical–quantum control flow,
and what IR to standardise for hardware vendors.

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2017–2019 | Q# (2017), Qiskit, Cirq (2018) establish SDK-vs-language split | + |
| E1 | 2020 | Silq (ETH Zürich) demonstrates safe automatic uncomputation | + |
| E2 | 2021–2022 | OpenQASM 3 specified; Amazon Braket adds support in 2022-03[^oqasm3][^braket-qasm] | + |
| E3 | 2023 | Nvidia CUDA Quantum (later CUDA-Q) for hybrid GPU–QPU programming[^cudaq] | + |
| E3 | 2024-01 | Microsoft QDK 1.0, rewritten in Rust/Wasm[^qdk-infoq][^qdk-rust] | + |
| E3 | 2024-02-15 | Qiskit 1.0 with a stable API and versioning cycle[^qiskit1] | + |
| E3 | 2024 | Quantinuum introduces Guppy (linear qubit types)[^guppy] | + |
| E4 | 2025-03-31 | Qiskit 2.0 released[^qiskit2] | + |
| E4 | 2026 | Nvidia extends open-source CUDA-Q for fault-tolerant workflows[^cudaq-2026] | + |

# Where it succeeded

- **Python SDKs** gave scientists access to quantum hardware through ordinary notebooks.
  Qiskit's move to stable 1.x/2.x APIs fixed its reputation for constant breaking changes.[^qiskit1][^qiskit2]
- **Shared IRs** (OpenQASM 3, QIR) let hardware vendors support many front ends.[^braket-qasm]
- **Q#'s rewrite** turned a heavy .NET toolchain into a light Rust/Wasm one, a small example of
  [native rewrites of tooling](/ideas/tooling-and-ecosystem/native-rewrites-of-tooling.md).[^qdk-rust]

# Where it failed or stalled

- **Standalone languages** (Q#, Silq, Quipper) did not win users outside their sponsors. Q#
  itself now runs mainly through Python.
- **Usefulness.** Without fault-tolerant hardware, most programs remain small demonstrations,
  so it is too early to say which language features matter.
- **Fragmentation.** Each hardware company maintains its own SDK, and the 2026 survey literature
  still lists dozens of languages.[^survey-qpl]

# Why

1. **Python hosting beats new syntax** when users are physicists and chemists who already live in
   NumPy and Jupyter. Guppy and CUDA-Q embed in Python for that reason.[^guppy][^cudaq]
2. **Hardware vendors own the stacks.** IBM, Google, Quantinuum and Nvidia each tie their SDK to
   their hardware or simulators, which limits neutral languages.
3. **Type-system ideas are being adopted quietly.** Linear qubit types (Guppy) are the
   classical-PL idea most likely to last, mirroring Rust's ownership.[^guppy-own]

# Lessons

- In a field without production workloads, SDK stability and Python integration matter more than
  language elegance.
- Ownership and linearity are a general tool. They apply to qubits as well as to memory and to
  money (Move).

# Related

- [Q# and quantum languages](/languages/q-sharp-and-quantum.md)
- [Linear and affine types](/ideas/types/linear-and-affine-types.md)
- [GPU programming languages](/ideas/platforms-and-portability/gpu-programming-languages.md)

[^qiskit1]: Qiskit 1.0 launch — https://www.ibm.com/quantum/blog/qiskit-1-launch
[^qiskit2]: Qiskit 2.0 release — https://www.ibm.com/quantum/blog/qiskit-2-0-release-summary
[^qdk-infoq]: InfoQ, Azure QDK 1.0 — https://www.infoq.com/news/2024/01/microsoft-azure-quantum-qdk/
[^qdk-rust]: MSPoweruser on new QDK — https://mspoweruser.com/microsoft-new-azure-quantum-development-kit/
[^oqasm3]: OpenQASM 3 paper — https://dl.acm.org/doi/10.1145/3505636
[^braket-qasm]: Amazon Braket OpenQASM 3.0 — https://aws.amazon.com/about-aws/whats-new/2022/03/amazon-braket-openqasm-3-0
[^guppy]: Guppy docs — https://docs.quantinuum.com/guppy/
[^guppy-own]: Ownership and borrowing in Guppy — https://arxiv.org/html/2510.13082v1
[^cudaq]: NVIDIA CUDA-Q — https://developer.nvidia.com/cuda-q
[^cudaq-2026]: NVIDIA expands CUDA-Q — https://nvidianews.nvidia.com/news/nvidia-expands-open-source-cuda-q-platform-for-fault-tolerant-quantum-computing
[^survey-qpl]: Survey of Quantum Programming Languages — https://arxiv.org/pdf/2606.26254
