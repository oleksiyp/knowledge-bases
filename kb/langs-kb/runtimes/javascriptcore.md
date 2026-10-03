---
type: Runtime
title: JavaScriptCore
description: Apple's WebKit JavaScript engine; guaranteed relevance by the iOS WebKit mandate and revived on the server by Bun, but lost React Native to Hermes, and the regulatory end of its iOS monopoly (EU 2024, Japan 2025) has so far changed little in practice.
tags: [javascript, webassembly, jit, apple, webkit, safari, ios, bun]
runtime_kind: js-runtime
languages: [languages/javascript, languages/typescript]
steward: Apple (WebKit open-source project)
governance: single-vendor
first_released: 2002
trajectory: stable
ideas: [ideas/runtime-performance/js-engine-tiering, ideas/platforms-and-portability/js-runtime-competition, ideas/platforms-and-portability/webassembly-in-the-browser, ideas/tooling-and-ecosystem/tc39-proposal-outcomes]
adoption_signals:
  safari_browser_share_pct: { value: 18.3, as_of: 2026-09, note: "StatCounter worldwide, all platforms" }
era_momentum: { E1: flat, E2: flat, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: statcounter
    resource: https://gs.statcounter.com/browser-market-share
    title: "StatCounter: Browser market share worldwide (September 2026)"
  - id: speedometer3
    resource: https://webkit.org/blog/15249/optimizing-webkit-safari-for-speedometer-3-0/
    title: "WebKit blog: Optimizing WebKit & Safari for Speedometer 3.0 (April 2024)"
    author: org:apple
  - id: safari182
    resource: https://webkit.org/blog/16301/webkit-features-in-safari-18-2/
    title: "WebKit blog: WebKit Features in Safari 18.2 (WasmGC, Wasm tail calls; Dec 2024)"
    author: org:apple
  - id: bun-jsc
    resource: https://x.com/jarredsumner/status/1803612846296801487
    title: "Jarred Sumner on X: one of the reasons we bet on JavaScriptCore instead of V8 (2024)"
  - id: bun-anthropic
    resource: https://bun.com/blog/bun-joins-anthropic
    title: "Bun blog: Bun is joining Anthropic (2025-12-02)"
    author: org:oven
  - id: apple-engines
    resource: https://developer.apple.com/support/alternative-browser-engines
    title: "Apple Developer: Using alternative browser engines in the European Union"
    author: org:apple
  - id: reg-engines
    resource: https://www.theregister.com/2024/05/17/apple_browser_eu
    title: "The Register: Apple's browser engine rules in the EU (2024-05-17)"
  - id: owa-ban
    resource: https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/
    title: "Open Web Advocacy: Apple's Browser Engine Ban Persists, Even Under the DMA"
  - id: japan-msca
    resource: https://www.macrumors.com/2025/08/07/japan-non-webkit-browsers-on-iphone/
    title: "MacRumors: Japan law will require Apple to allow non-WebKit browsers on iPhone (2025-08-07)"
  - id: lockdown
    resource: https://blog.alexi.sh/posts/2022/07/lockdown-jsc/
    title: "Alexis Lours: The impact of iOS 16 Lockdown Mode in Safari (JIT disabled; July 2022)"
  - id: rn-079
    resource: https://reactnative.dev/blog/2025/04/08/react-native-0.79
    title: "React Native blog: React Native 0.79 (JSC moves to a community package; 2025-04-08)"
    author: org:meta
  - id: rn-070
    resource: https://reactnative.dev/blog/2022/09/05/version-070
    title: "React Native blog: Announcing React Native 0.70 (Hermes default; 2022-09-05)"
    author: org:meta
---

# Summary
JavaScriptCore (JSC) is the engine whose relevance was guaranteed by policy rather than competition: until 2024 every iOS browser had to use WebKit, so JSC ran all mobile Safari, Chrome-for-iOS and Firefox-for-iOS JavaScript. Safari still holds 18.3% of worldwide page views (September 2026).[^statcounter] In the period JSC made two notable comebacks — a ~60% Speedometer 3 improvement between Safari 17.0 and 17.4, and its surprise adoption as the engine of [Bun](/runtimes/bun.md), chosen for fast startup and low memory.[^speedometer3][^bun-jsc] It also lost ground: Meta replaced it with Hermes as React Native's default (2022) and then pushed JSC out of React Native core into a community package (2025).[^rn-070][^rn-079] The EU's DMA (iOS 17.4, March 2024) and Japan's MSCA (December 2025) formally ended the WebKit mandate, but onerous conditions meant no major non-WebKit iOS browser had shipped in the EU as of the latest reports found.[^apple-engines][^owa-ban][^japan-msca] Verdict: stable, protected, and newly relevant on the server through Bun — whose owner is now Anthropic.[^bun-anthropic]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2022-07 | iOS 16 Lockdown Mode disables JSC's JIT by default — up to ~95% slower JS benchmarks [^lockdown] | mixed |
| E2 | 2022-09-05 | React Native 0.70 makes Hermes the default, replacing JSC [^rn-070] | − |
| E3 | 2023-09 | Bun 1.0 ships on JavaScriptCore [^bun-jsc] | + |
| E3 | 2024-03 | iOS 17.4 permits alternative browser engines in the EU under the DMA (BrowserEngineKit) [^apple-engines] | − (for JSC's monopoly) |
| E3 | 2024-04 | WebKit reports ~60% Speedometer 3 gain from Safari 17.0 to 17.4 [^speedometer3] | + |
| E4 | 2024-12 | Safari 18.2 ships WasmGC and Wasm tail calls, completing cross-browser baseline [^safari182] | + |
| E4 | 2025-04-08 | React Native 0.79 moves JSC to `@react-native-community/javascriptcore` [^rn-079] | − |
| E4 | 2025-12 | Japan's MSCA takes effect; Apple allows non-WebKit engines in Japan (iOS 26.2) [^japan-msca] | − |
| E4 | 2025-12-02 | Anthropic acquires Bun, making JSC the engine under Claude Code [^bun-anthropic] | + |

# Ideas it bet on
| Idea | Outcome for JSC |
|---|---|
| Four-tier JIT (LLInt → Baseline → DFG → FTL) — see [JS engine tiering](/ideas/runtime-performance/js-engine-tiering.md) | succeeded; competitive peak performance |
| Startup/memory-first profile for server runtimes ([JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md)) | succeeded via Bun |
| Engine as platform-policy lever (iOS WebKit rule) | eroding under regulation, but not yet in practice |
| [WebAssembly in the browser](/ideas/platforms-and-portability/webassembly-in-the-browser.md) | succeeded, though Safari was last to ship WasmGC |

# What succeeded
- **Performance catch-up.** The cross-vendor Speedometer 3 effort drove a ~60% score gain in six months via megamorphic inline caches and redesigned call ICs.[^speedometer3]
- **Server second life.** Bun's founder said the WebKit monorepo (engine and browser in one tree) made JSC easier to optimize, and JSC's startup and memory profile suited short-lived processes better than V8's.[^bun-jsc] That bet carried JSC into AI coding CLIs via Bun.[^bun-anthropic]
- **Security posture.** Lockdown Mode showed a mainstream vendor willing to disable the JIT entirely for high-risk users, accepting large JS slowdowns.[^lockdown]

# What failed or stalled
- **Mobile app runtime.** For React Native, JSC was too slow to start and too large on Android; Hermes replaced it (0.70) and JSC was then removed from core (0.79).[^rn-070][^rn-079]
- **Laggard on new standards.** Safari was the last major engine to ship WasmGC (18.2, December 2024), about a year after Chrome, a recurring pattern behind "Safari is the new IE" complaints.[^safari182]
- **Monopoly by rule, not merit.** Its iOS dominance rests on Apple's rules; regulators in the EU and Japan forced them open. Critics (Mozilla among them) say Apple's terms — separate EU-only apps and EU-based engineers — made compliance "as painful as possible", and Open Web Advocacy argues the engine ban effectively persists under the DMA.[^reg-engines][^owa-ban]

# By era
## E1
- JSC is the mandatory iOS engine; FTL/B3 optimizing tiers already in place. Little public change.
## E2
- Lockdown Mode (JIT off); Hermes displaces JSC in React Native 0.70.[^lockdown][^rn-070]
## E3
- Bun 1.0 on JSC (Sept 2023); EU DMA engine opening (March 2024); Speedometer 3 gains.[^bun-jsc][^apple-engines][^speedometer3]
## E4
- WasmGC in Safari 18.2; JSC leaves React Native core; Japan MSCA; Bun acquired by Anthropic.[^safari182][^rn-079][^japan-msca][^bun-anthropic]

# Lessons
- A runtime's fate can be decided by platform policy rather than technical merit — and regulation can unwind that only slowly.
- Startup time and memory are a different optimization target from peak throughput, and choosing the "other" engine can be a differentiator (Bun).
- An engine owned by an OS vendor is safe but slow to serve third-party ecosystems (React Native) whose priorities differ.

# Related
- [V8](/runtimes/v8.md), [SpiderMonkey](/runtimes/spidermonkey.md), [Hermes](/runtimes/hermes.md), [Bun](/runtimes/bun.md)
- [JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md), [JS engine tiering](/ideas/runtime-performance/js-engine-tiering.md)
- [Bun 1.0](/events/2023-09-bun-1-0.md), [Anthropic acquires Bun](/events/2025-12-anthropic-acquires-bun.md)

[^statcounter]: StatCounter: Browser market share worldwide — https://gs.statcounter.com/browser-market-share
[^speedometer3]: WebKit blog: Optimizing WebKit & Safari for Speedometer 3.0 — https://webkit.org/blog/15249/optimizing-webkit-safari-for-speedometer-3-0/
[^safari182]: WebKit blog: WebKit Features in Safari 18.2 — https://webkit.org/blog/16301/webkit-features-in-safari-18-2/
[^bun-jsc]: Jarred Sumner on X: why Bun bet on JavaScriptCore — https://x.com/jarredsumner/status/1803612846296801487
[^bun-anthropic]: Bun blog: Bun is joining Anthropic — https://bun.com/blog/bun-joins-anthropic
[^apple-engines]: Apple Developer: Using alternative browser engines in the EU — https://developer.apple.com/support/alternative-browser-engines
[^reg-engines]: The Register: Apple's browser engine rules in the EU — https://www.theregister.com/2024/05/17/apple_browser_eu
[^japan-msca]: MacRumors: Japan law will require Apple to allow non-WebKit browsers — https://www.macrumors.com/2025/08/07/japan-non-webkit-browsers-on-iphone/
[^lockdown]: The impact of iOS 16 Lockdown Mode in Safari — https://blog.alexi.sh/posts/2022/07/lockdown-jsc/
[^rn-079]: React Native blog: React Native 0.79 — https://reactnative.dev/blog/2025/04/08/react-native-0.79
[^rn-070]: React Native blog: Announcing React Native 0.70 — https://reactnative.dev/blog/2022/09/05/version-070
[^owa-ban]: Open Web Advocacy: Apple's Browser Engine Ban Persists, Even Under the DMA — https://open-web-advocacy.org/blog/apples-browser-engine-ban-persists-even-under-the-dma/
