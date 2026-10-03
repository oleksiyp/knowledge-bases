---
type: Event
title: Cloudflare open-sources workerd, the Workers runtime
description: Cloudflare released workerd under Apache-2.0, the V8-isolate-based runtime behind Cloudflare Workers, making the edge-isolate model self-hostable and giving local development an exact production match.
event_kind: release
date: 2022-09-27
era: E2
impact: positive
languages: [languages/javascript, languages/typescript]
runtimes: [runtimes/workerd-isolates, runtimes/v8]
ideas: [ideas/platforms-and-portability/edge-isolates, ideas/platforms-and-portability/js-runtime-competition]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: cf-workerd
    resource: https://blog.cloudflare.com/workerd-open-source-workers-runtime/
    title: "Cloudflare blog: Introducing workerd: the Open Source Workers runtime (2022-09-27)"
    author: org:cloudflare
  - id: devclass-workerd
    resource: https://devclass.com/2022/09/28/cloudflare-previews-workerd-an-open-source-javascript-wasm-runtime-for-nanoservices/
    title: "DevClass: Cloudflare previews workerd, an open source JavaScript/Wasm runtime for 'nanoservices' (2022-09-28)"
---

# What happened
On 2022-09-27, during its Birthday Week, Cloudflare open-sourced workerd under the Apache 2.0 license. workerd shares most of its code with the production Workers runtime.[^cf-workerd] Its design is server-first and uses web-standard APIs (fetch, URL, WebCrypto). Multiple "nanoservices" run as separate V8 isolates in one process, so calls between them cost about as much as a function call. Access to the outside world goes through "capability bindings".[^cf-workerd][^devclass-workerd] Cloudflare stated that workerd on its own is not a hardened sandbox: running untrusted code needs extra layers.[^cf-workerd]

# Why it matters
Open-sourcing the runtime addressed the lock-in objection to edge isolates. It also gave Wrangler and Miniflare an exact local copy of production. workerd became the reference "web-interoperable" server runtime alongside Deno, and helped motivate WinterCG/WinterTC standardisation of a common API surface. The security caveat is the honest limit of the isolate model: multi-tenant safety depends on Cloudflare's proprietary outer layers, not on the open-source core.

# Related
- [workerd and V8 isolates](/runtimes/workerd-isolates.md), [V8](/runtimes/v8.md)
- [Edge isolates](/ideas/platforms-and-portability/edge-isolates.md), [JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md)
- [WinterTC becomes Ecma TC55](/events/2025-01-wintertc-ecma-tc55.md)

[^cf-workerd]: Cloudflare blog: Introducing workerd — https://blog.cloudflare.com/workerd-open-source-workers-runtime/
[^devclass-workerd]: DevClass: Cloudflare previews workerd — https://devclass.com/2022/09/28/cloudflare-previews-workerd-an-open-source-javascript-wasm-runtime-for-nanoservices/
