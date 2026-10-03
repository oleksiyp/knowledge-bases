---
type: Idea
title: JS engine tiering, JIT-less modes and ahead-of-time bytecode
description: JavaScript engines spent 2018–2026 adding cheaper middle tiers (V8 Sparkplug 2021, Maglev 2023), simplifying their top tiers (SpiderMonkey Warp, V8 leaving Sea of Nodes for Turboshaft), and offering JIT-less modes as a security trade. Meanwhile Hermes showed that AOT bytecode with no JIT wins on mobile. Incremental tiering succeeded; the "compile typed JS to native" sequel (Static Hermes) is still unproven.
area: runtime-performance
tags: [v8, sparkplug, maglev, turboshaft, warp, jit, jitless, hermes, static-hermes, bytecode, security]
outcome: succeeded
maturity_2026: mainstream
origin_year: 2008
mainstream_year: 2010
languages: [languages/javascript, languages/typescript]
runtimes: [runtimes/v8, runtimes/spidermonkey, runtimes/javascriptcore, runtimes/hermes, runtimes/quickjs]
related_ideas: [ideas/runtime-performance/jit-for-dynamic-languages, ideas/runtime-performance/copy-and-patch-jit, ideas/runtime-performance/startup-snapshotting, ideas/runtime-performance/aot-native-images, ideas/platforms-and-portability/webassembly-in-the-browser]
era_momentum: { E1: up, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: v8-jitless
    resource: https://v8.dev/blog/jitless
    title: "V8 blog: JIT-less V8 (2019-03-13)"
    author: org:google
  - id: sparkplug
    resource: https://v8.dev/blog/sparkplug
    title: "V8 blog: Sparkplug — a non-optimizing JavaScript compiler (2021-05-27)"
    author: org:google
  - id: maglev
    resource: https://v8.dev/blog/maglev
    title: "V8 blog: Maglev — V8's Fastest Optimizing JIT (2023-12-05)"
    author: org:google
  - id: sea-of-nodes
    resource: https://v8.dev/blog/leaving-the-sea-of-nodes
    title: "V8 blog: Land ahoy — leaving the Sea of Nodes (2025-03-25)"
    author: org:google
  - id: warp
    resource: https://hacks.mozilla.org/2020/11/warp-improved-js-performance-in-firefox-83/
    title: "Mozilla Hacks: Warp — Improved JS performance in Firefox 83 (Nov 2020)"
    author: org:mozilla
  - id: sdsm
    resource: https://therecord.media/microsoft-announces-new-super-duper-secure-mode-for-edge
    title: "The Record: Microsoft announces 'Super Duper Secure Mode' for Edge (Aug 2021; ~45% of V8 CVEs JIT-related)"
  - id: v8-sandbox
    resource: https://v8.dev/blog/sandbox
    title: "V8 blog: The V8 Sandbox (April 2024)"
    author: org:google
  - id: lockdown-jsc
    resource: https://blog.alexi.sh/posts/2022/07/lockdown-jsc/
    title: "Alexis Lours: The impact of iOS 16 Lockdown Mode in Safari (JIT disabled; July 2022)"
  - id: fb-hermes
    resource: https://engineering.fb.com/2019/07/12/android/hermes/
    title: "Engineering at Meta: Hermes — an open source JavaScript engine optimized for mobile apps (2019-07-12)"
    author: org:meta
  - id: rn-070
    resource: https://reactnative.dev/blog/2022/09/05/version-070
    title: "React Native blog: React Native 0.70 — Hermes as default engine (2022-09-05)"
    author: org:meta
  - id: rn-084
    resource: https://reactnative.dev/blog/2026/02/11/react-native-0.84
    title: "React Native blog: React Native 0.84 — Hermes V1 by default (2026-02-11)"
    author: org:meta
  - id: static-hermes
    resource: https://www.react-native.eu/talks/tzvetan-mikov-static-hermes-the-next-generation-of-hermes
    title: "React Native EU 2023: Tzvetan Mikov — Static Hermes, the Next Generation of Hermes"
  - id: speedometer3
    resource: https://webkit.org/blog/15249/optimizing-webkit-safari-for-speedometer-3-0/
    title: "WebKit blog: Optimizing WebKit & Safari for Speedometer 3.0 (April 2024)"
    author: org:apple
  - id: shopify-javy
    resource: https://shopify.engineering/javascript-in-webassembly-for-shopify-functions
    title: "Shopify Engineering: Bringing JavaScript to WebAssembly for Shopify Functions (QuickJS-based Javy)"
---

# Summary
**Succeeded, quietly, with a security twist.** Mature engines still had significant headroom. V8 added **Sparkplug** (2021), a non-optimizing baseline compiler that emits machine code straight from bytecode, and **Maglev** (2023), a fast mid-tier optimizer. It then replaced the 10-year-old Sea of Nodes design in its top tier with the CFG-based **Turboshaft**, which halved compile time.[^sparkplug][^maglev][^sea-of-nodes] SpiderMonkey's **Warp** (Firefox 83, 2020) went the other way, replacing a speculative optimizer with a simpler CacheIR-driven one.[^warp] WebKit gained about 60% on Speedometer 3 within the Safari 17.x line.[^speedometer3] At the same time, the JIT was reframed as **attack surface**. Microsoft found about 45% of V8 CVEs were JIT-related and trialled a JIT-less Edge mode. Apple's Lockdown Mode disables the JIT, and V8 built an in-process sandbox.[^sdsm][^lockdown-jsc][^v8-sandbox] On mobile, Meta's **Hermes** (2019) gave up the JIT entirely. It precompiles bytecode at build time and became React Native's default in 0.70 (2022), with a rebuilt Hermes V1 as default in 0.84 (Feb 2026).[^fb-hermes][^rn-070][^rn-084] **Static Hermes**, which compiles soundly typed JS/TS to native code, impressed in microbenchmarks (2023) but has not become a general production path.[^static-hermes]

# The idea
Multi-tier execution means interpreting cold code cheaply, compiling warm code quickly, and spending expensive optimization only on hot code, with deoptimization when speculation fails. The 2018–2026 refinements were:
1. **More, cheaper tiers** to cut the cliff between interpreter and optimizer (Sparkplug, Maglev).[^sparkplug][^maglev]
2. **Simpler optimizers**: CFG IRs over sea-of-nodes, and CacheIR/inline-cache-driven compilation.[^sea-of-nodes][^warp]
3. **No JIT at all** where startup, memory, platform rules (iOS) or security dominate: JIT-less V8, Lockdown Mode, Hermes AOT bytecode, and QuickJS inside Wasm.[^v8-jitless][^fb-hermes][^shopify-javy]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-03 | V8 ships a JIT-less mode (for iOS-like and locked-down platforms) [^v8-jitless] | + |
| E1 | 2019-07-12 | Hermes open-sourced: AOT bytecode, no JIT ([event](/events/2019-07-hermes-open-sourced.md)) [^fb-hermes] | + |
| E2 | 2020-11 | SpiderMonkey Warp in Firefox 83 [^warp] | + |
| E2 | 2021-05 | V8 Sparkplug baseline compiler [^sparkplug] | + |
| E2 | 2021-08 | Edge "Super Duper Secure Mode" disables the JIT; ~45% of V8 CVEs JIT-related [^sdsm] | mixed |
| E2 | 2022-07 | iOS 16 Lockdown Mode disables JSC's JIT [^lockdown-jsc] | mixed |
| E2 | 2022-09 | Hermes default in React Native 0.70 [^rn-070] | + |
| E3 | 2023-09 | Static Hermes unveiled (typed JS → native) [^static-hermes] | + |
| E3 | 2023-12 | V8 Maglev mid-tier JIT [^maglev] | + |
| E3 | 2024-04 | V8 Sandbox announced; WebKit Speedometer 3 gains [^v8-sandbox][^speedometer3] | + |
| E4 | 2025-03 | V8 leaves Sea of Nodes; Turboshaft halves compile time [^sea-of-nodes] | + |
| E4 | 2026-02 | Hermes V1 default in React Native 0.84 [^rn-084] | + |

# Where it succeeded
- **Real-world speed on the web.** Mid tiers improved interactive benchmarks (Speedometer) more than peak tiers did, because web pages run lots of lukewarm code.[^maglev][^speedometer3]
- **Engineering simplification paid off.** Both V8 (Turboshaft) and SpiderMonkey (Warp) got faster *and* simpler.[^sea-of-nodes][^warp]
- **No-JIT was the right call for mobile and embedding.** Hermes on React Native and QuickJS for Wasm plugin hosts show that startup and memory beat peak throughput in those settings.[^rn-070][^shopify-javy]

# Where it failed or stalled
- **JIT security never got solved**, only contained. Sandboxing and JIT-less modes trade performance for safety.[^sdsm][^v8-sandbox]
- **Static Hermes / typed AOT JS** remains niche. Using types for performance requires *sound* types, which TypeScript deliberately isn't (see [TypeScript's bet](/ideas/types/typescript-structural-typing-wins.md)).[^static-hermes]
- **Diminishing returns.** By E4 the engines' headline work had shifted from raw JS speed to Wasm, memory and security, a sign that the JS performance frontier has flattened.[^v8-sandbox]

# Why
1. **Workload reality.** Web apps run large amounts of code a few times each, not small loops millions of times. Cheap tiers fit that profile. Benchmarks moved from Octane-style peak tests to Speedometer-style responsiveness tests.[^speedometer3]
2. **Security economics.** Type-confusion bugs in optimizing JITs were the most exploited browser bug class, so vendors invested in containment rather than more speculation.[^sdsm][^v8-sandbox]
3. **Platform rules.** iOS forbids third-party JITs, which made an AOT bytecode design like Hermes the rational choice for React Native.[^fb-hermes]
4. **Unsound types limit AOT.** Without trustworthy type information, ahead-of-time native compilation of JS cannot beat a speculating JIT except in restricted subsets.[^static-hermes]

# Lessons
- Mature runtimes improve most by *rebalancing tiers*, not by adding cleverer peak optimizations.
- "No JIT" is a legitimate design point once startup, memory, platform policy and security are counted.
- Compare Python's [copy-and-patch JIT](/ideas/runtime-performance/copy-and-patch-jit.md) and Ruby's YJIT: JS engines show where those efforts may end up.

# Related
- [V8](/runtimes/v8.md), [SpiderMonkey](/runtimes/spidermonkey.md), [JavaScriptCore](/runtimes/javascriptcore.md), [Hermes](/runtimes/hermes.md), [QuickJS](/runtimes/quickjs.md)
- [JIT for dynamic languages](/ideas/runtime-performance/jit-for-dynamic-languages.md), [Copy-and-patch JIT](/ideas/runtime-performance/copy-and-patch-jit.md), [Startup snapshotting](/ideas/runtime-performance/startup-snapshotting.md), [AOT native images](/ideas/runtime-performance/aot-native-images.md)

[^v8-jitless]: V8 blog: JIT-less V8 — https://v8.dev/blog/jitless
[^sparkplug]: V8 blog: Sparkplug — https://v8.dev/blog/sparkplug
[^maglev]: V8 blog: Maglev — https://v8.dev/blog/maglev
[^sea-of-nodes]: V8 blog: Land ahoy — leaving the Sea of Nodes — https://v8.dev/blog/leaving-the-sea-of-nodes
[^warp]: Mozilla Hacks: Warp — https://hacks.mozilla.org/2020/11/warp-improved-js-performance-in-firefox-83/
[^sdsm]: The Record: Microsoft 'Super Duper Secure Mode' for Edge — https://therecord.media/microsoft-announces-new-super-duper-secure-mode-for-edge
[^v8-sandbox]: V8 blog: The V8 Sandbox — https://v8.dev/blog/sandbox
[^lockdown-jsc]: Alexis Lours: iOS 16 Lockdown Mode in Safari — https://blog.alexi.sh/posts/2022/07/lockdown-jsc/
[^fb-hermes]: Engineering at Meta: Hermes — https://engineering.fb.com/2019/07/12/android/hermes/
[^rn-070]: React Native blog: React Native 0.70 — https://reactnative.dev/blog/2022/09/05/version-070
[^rn-084]: React Native blog: React Native 0.84 — https://reactnative.dev/blog/2026/02/11/react-native-0.84
[^static-hermes]: React Native EU 2023: Static Hermes — https://www.react-native.eu/talks/tzvetan-mikov-static-hermes-the-next-generation-of-hermes
[^speedometer3]: WebKit blog: Optimizing WebKit & Safari for Speedometer 3.0 — https://webkit.org/blog/15249/optimizing-webkit-safari-for-speedometer-3-0/
[^shopify-javy]: Shopify Engineering: Bringing JavaScript to WebAssembly for Shopify Functions — https://shopify.engineering/javascript-in-webassembly-for-shopify-functions
