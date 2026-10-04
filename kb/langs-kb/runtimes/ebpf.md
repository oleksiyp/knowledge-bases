---
type: Runtime
title: eBPF runtime in Linux
description: Verified program loading, kernel hooks and portable loaders made eBPF effective infrastructure. Verifier
  complexity and kernel dependencies constrain its universality and safety guarantees.
runtime_kind: kernel-vm
tags:
- compilers
- infrastructure
trajectory: growing
languages:
- languages/c
- languages/rust
ideas:
- ideas/platforms-and-portability/ebpf-as-a-runtime
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: bpf-paper
  title: The eBPF Runtime in the Linux Kernel (2024)
  resource: https://arxiv.org/abs/2410.00026
- id: libbpf
  title: libbpf overview and CO-RE
  resource: https://libbpf.readthedocs.io/en/latest/libbpf_overview.html
- id: brf
  title: 'BRF: eBPF Runtime Fuzzer (2023)'
  resource: https://arxiv.org/abs/2305.08782
- id: verifier
  title: 'Linux kernel: eBPF verifier'
  resource: https://docs.kernel.org/bpf/verifier.html
---

# Summary
**Verdict: succeeded as constrained systems infrastructure.** eBPF lets programs run at selected operating-system hooks after verification. Its runtime includes instruction execution, helpers, maps, loading rules and attachment points—not just a bytecode format.[^bpf-paper]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1–E2 | period development | Programmability expands beyond packet filtering | + [^bpf-paper] |
| E2–E3 | CO-RE tooling | BTF and libbpf improve cross-kernel deployment | + [^libbpf] |
| E3 | 2023 | BRF research targets eBPF runtime bugs | limitation / testing [^brf] |
| E4 | 2024-10 | Runtime survey describes wider systems applications | established [^bpf-paper] |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| Verify restricted programs before loading | Enables extensibility within a controlled contract [^verifier] |
| Typed kernel metadata plus relocation | Reduces per-host compilation needs [^libbpf] |
| A verifier eliminates all runtime bugs | Rejected by fuzzing evidence [^brf] |

# What succeeded
libbpf's CO-RE approach combines compiler metadata, BTF and loader relocations. It adapts references to kernel types and fields at load time, reducing the need to ship source and compile on every target machine.[^libbpf]

The runtime survey documents uses spanning networking, observability and security. The success is placing small programs close to relevant events while exposing controlled interfaces to kernel state.[^bpf-paper]

# What failed or stalled
Verification constrains programs: register states, pointer use and helper arguments must satisfy the kernel's rules. A logically safe program can still be difficult to express in a form the verifier accepts.[^verifier]

CO-RE relocates layout-dependent accesses; it cannot supply a helper or attachment capability absent from the target kernel. Deployment therefore still needs a supported-kernel contract.[^libbpf]

BRF's researchers found bugs by producing inputs that passed enough subsystem constraints to reach runtime behavior. The verifier and JIT are themselves software requiring testing; verified loading is not an absolute security guarantee.[^brf]

# By era
- **E1–E2:** the application space expands beyond the original filtering model.[^bpf-paper]
- **E3:** portability tooling and deeper runtime testing become central.[^libbpf][^brf]
- **E4:** the established runtime remains coupled to kernel capabilities.[^verifier]

# Lessons
**Synthesis:** restricted execution succeeds when the restriction matches a useful deployment boundary. The kernel integration is the source of both value and portability cost. Treat supported kernels, privilege requirements and update policy as part of the runtime interface.

# Related
- [eBPF as a runtime](/ideas/platforms-and-portability/ebpf-as-a-runtime.md)
- [Rust in kernels](/ideas/memory-safety/rust-in-os-kernels.md)

[^bpf-paper]: The eBPF Runtime in the Linux Kernel (2024) — https://arxiv.org/abs/2410.00026
[^libbpf]: libbpf overview and CO-RE — https://libbpf.readthedocs.io/en/latest/libbpf_overview.html
[^brf]: BRF: eBPF Runtime Fuzzer (2023) — https://arxiv.org/abs/2305.08782
[^verifier]: Linux kernel: eBPF verifier — https://docs.kernel.org/bpf/verifier.html
