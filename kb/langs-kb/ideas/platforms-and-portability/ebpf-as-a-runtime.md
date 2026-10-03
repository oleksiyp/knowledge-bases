---
type: Idea
title: eBPF as a general-purpose, verified in-kernel runtime
description: "Run small, statically verified programs inside the OS kernel (and increasingly elsewhere) as a safe, hot-loadable extension mechanism for networking, observability, security and now CPU scheduling. 2018–2026 verdict: succeeded. Cilium, Falco and sched_ext run on eBPF, the ISA became an IETF RFC, and Windows ported it. The costs: the verifier is a recurring source of CVEs and a hard programming target, so unprivileged eBPF was switched off by default."
area: platforms-and-portability
tags: [ebpf, linux-kernel, verifier, cilium, observability, networking, sched_ext, windows, sandboxing]
outcome: succeeded
maturity_2026: mainstream
origin_year: 2014
mainstream_year: 2019
languages: [languages/c, languages/rust]
runtimes: [runtimes/ebpf, runtimes/llvm]
related_ideas: [ideas/platforms-and-portability/server-side-wasm, ideas/platforms-and-portability/edge-isolates, ideas/memory-safety/rust-in-os-kernels]
era_momentum: { E1: up, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: ebpf-fdn
    resource: https://lwn.net/Articles/866101/rss
    title: "LWN: Facebook, Google, Isovalent, Microsoft and Netflix launch eBPF Foundation"
  - id: rfc9669
    resource: https://www.rfc-editor.org/info/rfc9669/
    title: "IETF RFC 9669: BPF Instruction Set Architecture (ISA)"
  - id: lwn-rfc
    resource: https://lwn.net/Articles/997002/
    title: "LWN: The BPF instruction set architecture is now RFC 9669"
  - id: schedext-docs
    resource: https://docs.ebpf.io/linux/program-type/BPF_PROG_TYPE_STRUCT_OPS/sched_ext_ops/
    title: "eBPF Docs: struct_ops sched_ext_ops"
  - id: schedext-nv
    resource: https://www.phoronix.com/news/NVIDIA-Talks-Up-Sched-Ext
    title: "Phoronix: NVIDIA engineer talks up sched_ext possibilities at FOSDEM"
  - id: cisco-iso
    resource: https://investor.cisco.com/news/news-details/2024/Cisco-Completes-Acquisition-of-Isovalent-to-Define-the-Future-of-Multicloud-Networking-and-Security/default.aspx
    title: "Cisco: Cisco completes acquisition of Isovalent (2024-04-12)"
  - id: ebpf-win
    resource: https://microsoft.github.io/ebpf-for-windows/
    title: "Microsoft: eBPF for Windows"
  - id: cve-3490
    resource: https://www.sentinelone.com/vulnerability-database/cve-2021-3490/
    title: "SentinelOne: CVE-2021-3490 Linux kernel eBPF ALU32 bounds vulnerability"
  - id: ubuntu-unpriv
    resource: https://ubuntu.com/security/notices/USN-5318-1
    title: "Ubuntu USN-5318-1: Linux kernel vulnerabilities (unprivileged eBPF disabled by default)"
  - id: lf-state
    resource: https://www.linuxfoundation.org/hubfs/LF%20Research/The_State_of_eBPF_010824.pdf?hsLang=en
    title: "Linux Foundation Research: The State of eBPF (January 2024)"
---

# Summary

**Succeeded. eBPF became the kernel's programmable runtime.** It grew from a packet filter
into a general in-kernel VM with a static verifier, JIT compilers and typed maps. By 2026 it was
the basis of cloud-native networking (Cilium), runtime security (Falco, Tetragon), continuous
profiling and observability. In Linux 6.12 (November 2024) it gained **pluggable CPU schedulers**
through sched_ext.[^schedext-docs][^schedext-nv]

Signs of institutional success:

- The eBPF Foundation was formed in 2021.[^ebpf-fdn]
- The ISA was standardised as IETF RFC 9669 in October 2024.[^rfc9669][^lwn-rfc]
- Microsoft built eBPF for Windows.[^ebpf-win]
- Cisco bought Isovalent, the company behind Cilium, in 2024.[^cisco-iso]

The main cost is the verifier. It is a complex abstract interpreter, its bugs produced
privilege-escalation CVEs (2021), and distributions disabled unprivileged eBPF by default.[^cve-3490][^ubuntu-unpriv]

# The idea

Instead of kernel modules (unsafe, version-coupled) or upstream patches (slow), users load small
programs that the kernel **verifies** before running: bounded loops, memory safety, typed
helper calls. The kernel then JIT-compiles them to native code and attaches them to hooks
(network, tracepoints, LSM, scheduler). It is a "safe extension language for the kernel", and the
kernel-side analogue of what WebAssembly is for browsers. Programs are usually written in
restricted C (or Rust via Aya) and compiled by LLVM's BPF backend.

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018–2020 | BTF and CO-RE ("compile once, run everywhere") make eBPF programs portable across kernels | + |
| E2 | 2021 | Verifier bugs (e.g. CVE-2021-3490) enable local root; unprivileged eBPF disabled by default in major distros[^cve-3490][^ubuntu-unpriv] | − |
| E2 | 2021-08 | eBPF Foundation launched by Facebook, Google, Isovalent, Microsoft, Netflix[^ebpf-fdn] | + |
| E3 | 2023-12 / 2024-04 | Cisco announces, then completes, acquisition of Isovalent (Cilium)[^cisco-iso] | + |
| E3 | 2024-01 | Linux Foundation "State of eBPF" report documents broad production use[^lf-state] | + |
| E4 | 2024-10 | RFC 9669 standardises the BPF ISA[^rfc9669][^lwn-rfc] | + |
| E4 | 2024-11 | Linux 6.12 merges sched_ext: CPU schedulers as BPF programs[^schedext-docs] | + |

# Where it succeeded

- **Networking.** Cilium replaced iptables-based Kubernetes networking at many large users, and
  XDP load balancers run at very large scale.
- **Observability and security.** bpftrace, Pixie, Parca, Falco and Tetragon made production
  introspection safe and cheap.[^lf-state]
- **Kernel policy as code.** sched_ext lets Meta, Google and others experiment with schedulers
  without patching or rebooting.[^schedext-nv]
- **Standardisation.** An RFC-defined ISA lets non-Linux implementations (Windows, user-space
  runtimes) share toolchains.[^rfc9669][^ebpf-win]

# Where it failed or stalled

- **Unprivileged use.** The original vision of any user safely loading BPF did not survive the
  2021 verifier CVEs and Spectre-class issues. eBPF is effectively root-only now.[^ubuntu-unpriv]
- **Programmability.** Verifier rejections ("program too complex", lost bounds) make eBPF a hard
  target. Most users consume eBPF products rather than writing programs.
- **Windows.** eBPF for Windows exists but in 2025 was still limited mostly to network hooks.[^ebpf-win]

# Why

1. **It replaced a worse option.** Kernel modules and out-of-tree patches were unsafe and slow to
   ship. eBPF offered safety plus hot loading inside an existing kernel.
2. **Cloud-native timing.** Kubernetes networking and security needed per-pod policy at kernel
   speed exactly when eBPF matured (2018–2021).
3. **Toolchain investment.** LLVM's BPF backend, BTF/CO-RE and libbpf made programs portable across
   kernel versions, which removed the main deployment pain.
4. **Verification has limits.** A sound but conservative verifier is hard to write and hard to
   satisfy. That trade-off capped both unprivileged use and developer reach.

# Lessons

- Safe, verified extension points beat both "fork the kernel" and "trust the module".
- A verifier is part of the trusted computing base. Its bugs are kernel bugs.

# Related

- [eBPF runtime](/runtimes/ebpf.md), [LLVM](/runtimes/llvm.md)
- [Server-side Wasm](/ideas/platforms-and-portability/server-side-wasm.md) (sandboxed bytecode in user space)
- [Rust in OS kernels](/ideas/memory-safety/rust-in-os-kernels.md)
- [eBPF Foundation](/events/2021-08-ebpf-foundation-formed.md), [RFC 9669](/events/2024-10-bpf-isa-rfc-9669.md), [sched_ext](/events/2024-11-sched-ext-merged-linux-6-12.md)

[^ebpf-fdn]: LWN, eBPF Foundation — https://lwn.net/Articles/866101/rss
[^rfc9669]: RFC 9669 — https://www.rfc-editor.org/info/rfc9669/
[^lwn-rfc]: LWN on RFC 9669 — https://lwn.net/Articles/997002/
[^schedext-docs]: eBPF Docs, sched_ext_ops — https://docs.ebpf.io/linux/program-type/BPF_PROG_TYPE_STRUCT_OPS/sched_ext_ops/
[^schedext-nv]: Phoronix on sched_ext — https://www.phoronix.com/news/NVIDIA-Talks-Up-Sched-Ext
[^cisco-iso]: Cisco completes Isovalent acquisition — https://investor.cisco.com/news/news-details/2024/Cisco-Completes-Acquisition-of-Isovalent-to-Define-the-Future-of-Multicloud-Networking-and-Security/default.aspx
[^ebpf-win]: eBPF for Windows — https://microsoft.github.io/ebpf-for-windows/
[^cve-3490]: CVE-2021-3490 — https://www.sentinelone.com/vulnerability-database/cve-2021-3490/
[^ubuntu-unpriv]: Ubuntu USN-5318-1 — https://ubuntu.com/security/notices/USN-5318-1
[^lf-state]: The State of eBPF — https://www.linuxfoundation.org/hubfs/LF%20Research/The_State_of_eBPF_010824.pdf?hsLang=en
