---
type: Event
title: Facebook open-sources the Hermes JavaScript engine
description: At Chain React 2019 Facebook released Hermes, an MIT-licensed JS engine for React Native that compiles JavaScript to bytecode ahead of time instead of JIT-compiling it on the device.
event_kind: release
date: 2019-07-12
era: E1
impact: positive
languages: [languages/javascript]
runtimes: [runtimes/hermes, runtimes/v8, runtimes/javascriptcore]
ideas: [ideas/runtime-performance/js-engine-tiering]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: fb-hermes
    resource: https://engineering.fb.com/2019/07/12/android/hermes/
    title: "Engineering at Meta: Hermes, an open source JavaScript engine optimized for mobile apps (2019-07-12)"
    author: org:meta
  - id: rn-hermes-default
    resource: https://reactnative.dev/blog/2022/07/08/hermes-as-the-default
    title: "React Native blog: Hermes as the Default (2022-07-08)"
    author: org:meta
  - id: rn-082
    resource: https://reactnative.dev/blog/2025/10/08/react-native-0.82
    title: "React Native blog: React Native 0.82 – A New Era (2025-10-08)"
    author: org:meta
---

# What happened
On 2019-07-12 Facebook announced and open-sourced Hermes at the Chain React conference. Hermes is a small JavaScript engine for React Native on Android. It is released under the MIT license.[^fb-hermes] It deliberately skips a JIT. JavaScript is compiled to bytecode at build time, and the app ships that bytecode. The stated goals were faster time-to-interactive, lower memory use and smaller downloads on low-end phones.[^fb-hermes]

# Why it matters
Hermes went against the main trend in engines, which was ever more elaborate JIT tiers. On mobile the costs that hurt are startup time, memory and app size. Apple's iOS rules on JIT also made a JIT-less design attractive. Hermes became the default engine for new React Native projects in 0.70 (2022).[^rn-hermes-default] Its successor, Hermes V1, came out of the "Static Hermes" research branch. Hermes V1 was presented with React Native 0.82 in October 2025.[^rn-082] The full JS-to-native ahead-of-time compilation promised by Static Hermes has not shipped as the default (as of late 2025).

# Related
- [Hermes](/runtimes/hermes.md), [V8](/runtimes/v8.md), [JavaScriptCore](/runtimes/javascriptcore.md)
- [JS engine tiering](/ideas/runtime-performance/js-engine-tiering.md)

[^fb-hermes]: Engineering at Meta: Hermes — https://engineering.fb.com/2019/07/12/android/hermes/
[^rn-hermes-default]: React Native blog: Hermes as the Default — https://reactnative.dev/blog/2022/07/08/hermes-as-the-default
[^rn-082]: React Native blog: React Native 0.82 – A New Era — https://reactnative.dev/blog/2025/10/08/react-native-0.82
