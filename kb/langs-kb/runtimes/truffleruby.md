---
type: Runtime
title: TruffleRuby
description: "TruffleRuby is Oracle Labs' Ruby built on the Truffle partial-evaluation framework and Graal JIT. For years it was the fastest Ruby on peak-performance benchmarks, yet it never became the Ruby people deploy: warm-up, memory and C-extension compatibility got in the way, and YJIT took the 'faster Ruby' role. When Oracle refocused GraalVM on GraalJS and GraalPy (Sept 2025), TruffleRuby lost Oracle sponsorship and became a community project (Jan 2026)."
tags: [truffleruby, graalvm, truffle, partial-evaluation, ruby, oracle, polyglot]
runtime_kind: jit
languages: [languages/ruby]
ideas: [ideas/runtime-performance/jit-for-dynamic-languages, ideas/runtime-performance/aot-native-images]
trajectory: declining
steward: TruffleRuby community (formerly Oracle Labs)
governance: community
era_momentum: { E1: up, E2: flat, E3: flat, E4: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tr-33
    resource: https://truffleruby.dev/blog/truffleruby-33-is-released
    title: "TruffleRuby 33 is Released — no longer sponsored by Oracle (2026-01-13)"
  - id: tr-gh
    resource: https://github.com/truffleruby/truffleruby
    title: "GitHub: truffleruby/truffleruby"
  - id: graalvm-25
    resource: https://www.infoworld.com/article/4061937/graalvm-25-arrives-backed-by-jdk-25.html
    title: "InfoWorld: GraalVM 25 arrives; Oracle detaches GraalVM from Java SE, focuses on GraalJS and GraalPy (Sept 2025)"
  - id: graal-24
    resource: https://medium.com/graalvm/whats-new-in-truffle-and-graal-languages-40027a59c401
    title: "GraalVM blog: What's new in Truffle 24.0 and Graal Languages"
    author: org:oracle
  - id: yjit-32
    resource: https://shopify.engineering/ruby-yjit-is-production-ready
    title: "Shopify Engineering: Ruby 3.2's YJIT is Production-Ready"
    author: org:shopify
  - id: shopify-tr
    resource: https://github.com/Shopify/truffleruby
    title: "GitHub: Shopify/truffleruby fork"
---

# Summary
TruffleRuby is the **"fastest Ruby nobody runs"**, and between 2018 and 2026 it lost its corporate home. It applies Truffle's self-specialising AST interpreters and partial evaluation through the Graal compiler, and on peak-performance benchmarks it was often several times faster than CRuby. Shopify contributed to it for years (it kept a fork).[^shopify-tr] Oracle moved the Truffle languages to standalone distributions starting with the 23.x/24.x releases.[^graal-24]

Three things held it back:
- long warm-up and higher memory use, which matter for Rails processes that restart and scale horizontally
- imperfect compatibility with C extensions and the exact semantics of CRuby
- YJIT, which delivered 10–15% production gains inside the stock interpreter from 2022 on and took away the "you need a different Ruby to go fast" argument.[^yjit-32]

In September 2025 Oracle detached GraalVM from the Java SE release train and said the team would focus on **GraalJS and GraalPy**. Ruby was not mentioned.[^graalvm-25] On 2026-01-13 TruffleRuby 33 shipped as "no longer sponsored by Oracle". The repository moved to `truffleruby/truffleruby`, the CLA was dropped, release cadence decoupled from GraalVM, and version numbers now track Ruby compatibility: 33 ≈ Ruby 3.3, 40 ≈ Ruby 4.0.[^tr-33][^tr-gh]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E3 | 2022-12 | YJIT production-ready in CRuby, removing the main reason to switch [^yjit-32] | − |
| E3–E4 | 2023–2024 | Graal languages ship as standalone distributions, decoupled from the GraalVM JDK [^graal-24] | mixed |
| E4 | 2025-09-16 | Oracle: GraalVM team to focus on GraalJS and GraalPy [^graalvm-25] | − |
| E4 | 2026-01-13 | TruffleRuby 33: Oracle sponsorship ends; community repo and versioning [^tr-33] | − / mixed |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| [JIT for dynamic languages](/ideas/runtime-performance/jit-for-dynamic-languages.md) | partial evaluation won benchmarks, lost deployment |
| [AOT native images](/ideas/runtime-performance/aot-native-images.md) | native-image builds reduced startup but not enough to change adoption |

# What succeeded
- **Research impact.** Truffle/Graal showed that one language-agnostic optimising compiler can give near-JVM peak performance to dynamic languages. Its results shaped the design discussion around YJIT and ZJIT.
- **Compatibility effort.** TruffleRuby ran large parts of Rails and many C extensions, which is rare for an alternative Ruby.

# What failed or stalled
- **Production adoption.** No large Rails deployment publicly standardised on it. Warm-up and memory costs did not suit typical Rails fleets.
- **Sponsor alignment.** Oracle's commercial interest moved to Java, then to JavaScript and Python, which have bigger markets. Ruby was dropped first.[^graalvm-25][^tr-33]

# By era
## E1
GraalVM 19 era; TruffleRuby the benchmark leader.
## E2
Steady compatibility work; Shopify engagement.
## E3
YJIT goes to production; TruffleRuby's niche narrows.
## E4
Oracle refocus; community spin-out.

# Lessons
- Peak performance is not the metric for web runtimes. Warm-up, memory per process and drop-in compatibility decide.
- A runtime owned by a vendor lab lives or dies by the vendor's portfolio priorities.

# Related
- [CRuby YJIT/ZJIT](/runtimes/cruby-yjit.md) · [GraalVM](/runtimes/graalvm.md) · [PyPy](/runtimes/pypy.md) · [Ruby](/languages/ruby.md)
- [TruffleRuby leaves Oracle](/events/2026-01-truffleruby-leaves-oracle.md)

[^tr-33]: TruffleRuby 33 is Released — https://truffleruby.dev/blog/truffleruby-33-is-released
[^tr-gh]: GitHub: truffleruby/truffleruby — https://github.com/truffleruby/truffleruby
[^graalvm-25]: InfoWorld: GraalVM 25 arrives — https://www.infoworld.com/article/4061937/graalvm-25-arrives-backed-by-jdk-25.html
[^graal-24]: GraalVM blog: What's new in Truffle 24.0 and Graal Languages — https://medium.com/graalvm/whats-new-in-truffle-and-graal-languages-40027a59c401
[^yjit-32]: Shopify Engineering: Ruby 3.2's YJIT is Production-Ready — https://shopify.engineering/ruby-yjit-is-production-ready
[^shopify-tr]: GitHub: Shopify/truffleruby — https://github.com/Shopify/truffleruby
