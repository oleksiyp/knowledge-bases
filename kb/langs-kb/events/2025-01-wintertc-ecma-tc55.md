---
type: Event
title: WinterCG becomes Ecma TC55 (WinterTC)
description: The W3C community group for web-interoperable server runtimes (Node.js, Deno, Cloudflare Workers, Bun and others) moved to Ecma as Technical Committee 55 so it could publish actual standards such as the Minimum Common API.
event_kind: governance
date: 2025-01-10
era: E4
impact: positive
languages: [languages/javascript]
runtimes: [runtimes/nodejs, runtimes/deno, runtimes/bun, runtimes/workerd-isolates]
ideas: [ideas/platforms-and-portability/js-runtime-competition, ideas/platforms-and-portability/edge-isolates]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: w3c-wintertc
    resource: https://www.w3.org/community/wintercg/2025/01/10/goodbye-wintercg-welcome-wintertc/
    title: "W3C WinterCG: Goodbye WinterCG, welcome WinterTC (2025-01-10)"
    author: org:w3c
  - id: igalia-wintertc
    resource: https://www.igalia.com/2025/01/10/WinterCG-becomes-Ecmas-WinterTC.html
    title: "Igalia: WinterCG becomes Ecma's WinterTC (2025-01-10)"
    author: org:igalia
  - id: wintertc-faq
    resource: https://wintertc.org/faq
    title: "WinterTC FAQ"
    author: org:ecma
---

# What happened
On 2025-01-10 WinterCG announced that its work was moving to a new Ecma International committee, TC55 "Web-interoperable server runtimes", nicknamed WinterTC.[^w3c-wintertc][^igalia-wintertc] WinterCG had started in May 2022 as a W3C Community Group. Such groups cannot publish standards. As the group's goals grew to include non-browser APIs, members wanted a body that could. Ecma provides that along with an IPR policy.[^wintertc-faq] The decision to move was made in December 2024.[^wintertc-faq] Andreu Botella (Igalia) and Luca Casonato (Deno) are co-chairs. The first deliverable is the "Minimum Common API", a subset of web APIs that every server runtime should implement.[^igalia-wintertc]

# Why it matters
The competition among Node, Deno, Bun and the edge isolates risked fragmenting "server JavaScript". WinterTC is the consensus answer: compete on implementation, converge on `fetch`, `Request`/`Response`, streams, `URL` and WebCrypto. Interoperability through web standards is one of the period's real successes. Multi-runtime frameworks and edge-portable code depend on that common surface. Formal standards from TC55 were still early in 2026.

# Related
- [JS runtime competition](/ideas/platforms-and-portability/js-runtime-competition.md), [Edge isolates](/ideas/platforms-and-portability/edge-isolates.md)
- [Node.js](/runtimes/nodejs.md), [Deno](/runtimes/deno.md), [workerd](/runtimes/workerd-isolates.md)
- [workerd open-sourced](/events/2022-09-workerd-open-sourced.md)

[^w3c-wintertc]: W3C WinterCG: Goodbye WinterCG, welcome WinterTC — https://www.w3.org/community/wintercg/2025/01/10/goodbye-wintercg-welcome-wintertc/
[^igalia-wintertc]: Igalia: WinterCG becomes Ecma's WinterTC — https://www.igalia.com/2025/01/10/WinterCG-becomes-Ecmas-WinterTC.html
[^wintertc-faq]: WinterTC FAQ — https://wintertc.org/faq
