---
type: Runtime
title: BEAM (Erlang/OTP virtual machine)
description: The Erlang virtual machine that hosts Erlang, Elixir and Gleam. 2018–2026 verdict is a quiet success. The BeamAsm JIT (OTP 24, 2021) removed its main performance complaint, yearly OTP releases kept modernising it, and it gained a second statically typed language (Gleam). Its weak points were a critical SSH CVE in 2025 and failed attempts to compile BEAM languages to WebAssembly.
runtime_kind: vm
tags: [beam, erlang, otp, jit, actor-model, fault-tolerance, preemptive-scheduling]
languages: [languages/erlang, languages/elixir, languages/gleam]
ideas: [ideas/concurrency/actor-model, ideas/types/set-theoretic-types, ideas/tooling-and-ecosystem/hot-reload-and-live-programming]
first_released: 1998
steward: Ericsson OTP team (open source, Apache-2.0) with the Erlang Ecosystem Foundation
governance: single-vendor
trajectory: stable
adoption_signals:
  otp_major_release: { value: "OTP 29.0", as_of: 2026-05 }
  github_stars_erlang_otp: { value: 12349, as_of: 2026-10-03 }
era_momentum: { E1: flat, E2: up, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: jit-first-look
    resource: https://www.erlang.org/blog/a-first-look-at-the-jit/
    title: "Erlang/OTP blog: A first look at the JIT (2020-11-03)"
    author: org:ericsson
  - id: otp24-highlights
    resource: https://www.erlang.org/blog/my-otp-24-highlights/
    title: "Erlang/OTP blog: My OTP 24 highlights"
    author: org:ericsson
  - id: otp27-highlights
    resource: https://www.erlang.org/blog/highlights-otp-27/
    title: "Erlang/OTP blog: Erlang/OTP 27 Highlights"
    author: org:ericsson
  - id: otp28-highlights
    resource: https://www.erlang.org/blog/highlights-otp-28/
    title: "Erlang/OTP blog: Erlang/OTP 28 Highlights"
    author: org:ericsson
  - id: otp29-highlights
    resource: https://www.erlang.org/blog/highlights-otp-29/
    title: "Erlang/OTP blog: Erlang/OTP 29 Highlights (2026-05-18)"
    author: org:ericsson
  - id: erlang-news
    resource: https://www.erlang.org/news
    title: "Erlang/OTP: News (release dates OTP 27.0–29.1)"
    author: org:ericsson
  - id: cve-2025-32433
    resource: https://thehackernews.com/2025/04/critical-erlangotp-ssh-vulnerability.html
    title: "The Hacker News: Critical Erlang/OTP SSH Vulnerability (CVSS 10.0) Allows Unauthenticated Code Execution"
  - id: firefly-gh
    resource: https://github.com/GetFirefly/firefly
    title: "GetFirefly/firefly: An alternative BEAM implementation, designed for WebAssembly (archived 2024-06-10)"
  - id: discord-rust-elixir
    resource: https://discord.com/blog/using-rust-to-scale-elixir-for-11-million-concurrent-users
    title: "Discord: Using Rust to Scale Elixir for 11 Million Concurrent Users"
  - id: erlef
    resource: https://codesync.global/media/introducing-erlang-ecosystem-foundation/
    title: "Code Sync: Introducing the Erlang Ecosystem Foundation (Code BEAM SF 2019)"
  - id: nx-announce
    resource: https://dashbit.co/blog/nx-numerical-elixir-is-now-publicly-available
    title: "Dashbit: Nx (Numerical Elixir) is now publicly available (2021-02-18)"
---

# Summary
The BEAM came through 2018–2026 as a **stable, slowly improving success**. It ran no hype cycle. It fixed its biggest technical weakness, the lack of native code generation. **BeamAsm**, a template JIT for x86-64 and AArch64, shipped in OTP 24 in May 2021 after about ten years of failed attempts. It brought large speedups and let developers profile BEAM code with standard tools such as `perf`.[^otp24-highlights][^jit-first-look] The model it is built on did not change: preemptively scheduled lightweight processes, per-process heaps, and supervision trees with "let it crash" recovery. Its language family grew. Elixir moved to gradual set-theoretic typing, and Gleam reached 1.0 (2024) as a statically typed BEAM language.

The failures sit at the edges. Attempts to run BEAM languages outside the BEAM, such as Lumen/Firefly compiling Erlang to WebAssembly, were abandoned.[^firefly-gh] OTP's built-in SSH daemon had a CVSS 10 pre-authentication RCE (CVE-2025-32433) that was exploited in the wild and hit Cisco network products.[^cve-2025-32433] Raw numeric performance is still poor, so heavy computation moves into native code: Rust NIFs via Rustler at Discord, Nx/EXLA for tensors.[^discord-rust-elixir][^nx-announce]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-03 | Erlang Ecosystem Foundation launched at Code BEAM SF [^erlef] | + |
| E1 | 2020-11-03 | OTP team publishes "A first look at the JIT" [^jit-first-look] | + |
| E2 | 2021-02-18 | Nx (Numerical Elixir) released, which compiles tensor code to XLA from the BEAM [^nx-announce] | + |
| E2 | 2021-05-12 | OTP 24 ships the BeamAsm JIT, EEP-54 error messages and process aliases [^otp24-highlights] | + |
| E3 | 2024-05-15 | OTP 27: `json` module, triple-quoted strings, Markdown `-doc` attributes, multiple trace sessions [^otp27-highlights][^erlang-news] | + |
| E3 | 2024-06-10 | Firefly (ex-Lumen) Erlang→Wasm compiler archived [^firefly-gh] | − |
| E4 | 2025-04-16 | CVE-2025-32433: unauthenticated RCE in the OTP SSH server (CVSS 10), exploited in the wild [^cve-2025-32433] | − |
| E4 | 2025-05-21 | OTP 28: priority messages, zip generators in comprehensions [^otp28-highlights][^erlang-news] | + |
| E4 | 2026-05-13 | OTP 29: experimental native records, secure-coding warnings, SSH daemon services off by default, hybrid ML-KEM key exchange [^otp29-highlights][^erlang-news] | + |

# Ideas it bet on
| Idea | Outcome for BEAM |
|---|---|
| [Actor model](/ideas/concurrency/actor-model.md) (processes, mailboxes, supervision) | Succeeded. It is the reference implementation, and other runtimes copied pieces of it. |
| Template JIT instead of an optimising JIT (BeamAsm) | Succeeded. It is simple, portable to two ISAs and gave large speedups. |
| Hot code loading | Mixed. It is still used in telecom, while most cloud deployments use rolling restarts instead. See [hot reload](/ideas/tooling-and-ecosystem/hot-reload-and-live-programming.md). |
| Multiple languages on one VM (Erlang, Elixir, Gleam, LFE) | Succeeded. Hex is shared and Gleam interoperates freely. |
| Running BEAM languages off-VM (Wasm via Lumen/Firefly) | Abandoned [^firefly-gh] |

# What succeeded
- **BeamAsm JIT.** OTP 24 delivered native code without giving up the BEAM's semantics. The JIT emits machine code per instruction using AsmJit, and debug info lets `perf` and gdb work on it.[^otp24-highlights][^jit-first-look] Later releases (OTP 25–27) added type-based optimisations on top, and OTP 27 added low-overhead native coverage on the JIT.[^otp27-highlights]
- **Developer-experience modernisation.** OTP 24 brought column numbers in errors and EEP-54 messages that explain which argument was bad. OTP 27 moved the docs to Markdown via ExDoc, added a built-in `json` module and added sigils. These changes closed gaps that had long made Erlang feel dated.[^otp24-highlights][^otp27-highlights]
- **Proven scale.** Discord serves 11M concurrent users on Elixir services, using Rust NIFs for the hot data structures.[^discord-rust-elixir]
- **Ecosystem breadth.** The runtime now hosts Phoenix/LiveView web apps, Nx/Livebook numeric work and the Gleam language.[^nx-announce]

# What failed or stalled
- **Escaping the VM.** Lumen, renamed Firefly, set out to AOT-compile Erlang/Elixir to native code and WebAssembly. It was archived in June 2024 without a production release.[^firefly-gh] The process model, preemption and GC semantics are hard to reproduce outside the BEAM.
- **Security debt in bundled protocols.** OTP ships full SSH, TLS and HTTP stacks. CVE-2025-32433 showed that a little-audited bundled daemon can create a CVSS 10 exposure in third-party appliances.[^cve-2025-32433] OTP 29 responded by disabling SSH daemon services by default and adding secure-coding guidelines and compiler warnings.[^otp29-highlights]
- **Compute-heavy workloads.** Even with the JIT, CPU-bound code is slow next to the JVM or native code. The usual answer is to delegate to NIFs (Rustler) or XLA, not to make the VM faster.[^discord-rust-elixir][^nx-announce]

# By era
## E1
Ericsson released OTP 22 and OTP 23 on its yearly schedule. The Erlang Ecosystem Foundation (2019) gave Erlang, Elixir and LFE a shared non-profit home.[^erlef] The JIT design was announced in late 2020.[^jit-first-look]
## E2
OTP 24 shipped BeamAsm and much better error messages.[^otp24-highlights] Nx extended the BEAM into numerical computing.[^nx-announce] Elixir began its type-system research.
## E3
OTP 26 and 27 continued the modernisation (json, `-doc`, sigils).[^otp27-highlights] Gleam 1.0 shipped. Firefly was archived.[^firefly-gh]
## E4
The SSH CVE was the worst incident of the period.[^cve-2025-32433] OTP 28 added priority messages, and OTP 29 added native records and a security-hardening pass.[^otp28-highlights][^otp29-highlights] Elixir 1.20 made gradual type checking the default.

# Lessons
- A conservative template JIT can deliver most of the benefit at a fraction of the complexity. BeamAsm took about a decade because earlier, more ambitious JIT attempts failed.[^jit-first-look]
- The runtime's semantics (preemption, isolation, supervision) are the product, and they do not port to other targets. Alternative implementations died, while languages that targeted the BEAM thrived.
- A "batteries-included" runtime also carries the security liability of every protocol stack it bundles.

# Related
- [Erlang](/languages/erlang.md), [Elixir](/languages/elixir.md), [Gleam](/languages/gleam.md)
- [Actor model](/ideas/concurrency/actor-model.md), [Set-theoretic types](/ideas/types/set-theoretic-types.md)
- [Event: OTP 24 ships the BeamAsm JIT](/events/2021-05-erlang-otp-24-beamasm-jit.md)
- [GHC runtime](/runtimes/ghc-runtime.md), [OCaml 5 runtime](/runtimes/ocaml-5-runtime.md)

[^jit-first-look]: Erlang/OTP blog: A first look at the JIT — https://www.erlang.org/blog/a-first-look-at-the-jit/
[^otp24-highlights]: Erlang/OTP blog: My OTP 24 highlights — https://www.erlang.org/blog/my-otp-24-highlights/
[^otp27-highlights]: Erlang/OTP blog: Erlang/OTP 27 Highlights — https://www.erlang.org/blog/highlights-otp-27/
[^otp28-highlights]: Erlang/OTP blog: Erlang/OTP 28 Highlights — https://www.erlang.org/blog/highlights-otp-28/
[^otp29-highlights]: Erlang/OTP blog: Erlang/OTP 29 Highlights — https://www.erlang.org/blog/highlights-otp-29/
[^erlang-news]: Erlang/OTP News — https://www.erlang.org/news
[^cve-2025-32433]: The Hacker News: Critical Erlang/OTP SSH Vulnerability — https://thehackernews.com/2025/04/critical-erlangotp-ssh-vulnerability.html
[^firefly-gh]: GetFirefly/firefly (archived) — https://github.com/GetFirefly/firefly
[^discord-rust-elixir]: Discord: Using Rust to Scale Elixir for 11 Million Concurrent Users — https://discord.com/blog/using-rust-to-scale-elixir-for-11-million-concurrent-users
[^erlef]: Code Sync: Introducing the Erlang Ecosystem Foundation — https://codesync.global/media/introducing-erlang-ecosystem-foundation/
[^nx-announce]: Dashbit: Nx (Numerical Elixir) is now publicly available — https://dashbit.co/blog/nx-numerical-elixir-is-now-publicly-available
