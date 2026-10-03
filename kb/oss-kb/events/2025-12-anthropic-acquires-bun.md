---
type: Event
title: Anthropic acquires Bun
description: Anthropic's first acquisition. It bought Oven, the zero-revenue startup behind the Bun JavaScript runtime, because Claude Code ships as a Bun executable. Bun stays MIT-licensed.
event_kind: acquisition
date: 2025-12-02
window: W12
impact: mixed
projects: [projects/devtools-languages/bun]
organizations: [organizations/oven]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bun-joins-anthropic
    resource: https://bun.com/blog/bun-joins-anthropic
    title: "Bun blog: Bun is joining Anthropic"
  - id: si-claude-code
    resource: https://www.streetinsider.com/Mergers+and+Acquisitions/Anthropic+acquires+JavaScript+runtime+Bun,+Claude+Code+hits+$1B+revenue/25688349.html
    title: "StreetInsider: Anthropic acquires JavaScript runtime Bun, Claude Code hits $1B revenue"
  - id: devclass-acq
    resource: https://devclass.com/2025/12/03/bun-javascript-runtime-acquired-by-anthropic-tying-its-future-to-ai-coding/
    title: "DevClass: Bun JavaScript runtime acquired by Anthropic"
  - id: cm-gn-stainless
    resource: https://www.anthropic.com/news/anthropic-acquires-stainless
    title: "Anthropic: Anthropic acquires Stainless (2026-05-18)"
  - id: tc-stainless
    resource: https://techcrunch.com/2026/05/18/anthropic-has-acquired-the-dev-tools-startup-used-by-openai-google-and-cloudflare/
    title: "TechCrunch: Anthropic has acquired the dev tools startup used by OpenAI, Google and Cloudflare (2026-05-18)"
---

# What happened
On 2025-12-02 Anthropic announced its first acquisition: Oven Inc., maker of Bun. The announcement came alongside news that Claude Code had reached $1B in run-rate revenue.[^si-claude-code] Bun had raised $26M ($7M seed, $19M Series A), had more than four years of runway and zero revenue, and was growing about 25% month over month to 7.2M monthly downloads.[^bun-joins-anthropic] Bun stays MIT-licensed, keeps developing in public and keeps its team.[^bun-joins-anthropic]

# Why it matters
It was the first time a frontier AI lab bought a core language runtime. The motive was that Claude Code, FactoryAI and OpenCode all ship as Bun single-file executables.[^bun-joins-anthropic] It showed that an OSS project can be strategically valuable without any revenue.

# Outcome so far
Bun's roadmap now follows Claude Code's needs.[^devclass-acq] In May 2026 the team merged an AI-written rewrite of Bun from Zig to Rust (see related). OpenAI made a parallel move by acquiring Astral in March 2026.

# Related
- [Bun](/projects/devtools-languages/bun.md), [Oven](/organizations/oven.md)
- [OpenAI acquires Astral](/events/2026-03-openai-acquires-astral.md), [Bun's Rust rewrite](/events/2026-05-bun-rust-rewrite.md)

[^bun-joins-anthropic]: Bun blog — https://bun.com/blog/bun-joins-anthropic
[^si-claude-code]: StreetInsider — https://www.streetinsider.com/Mergers+and+Acquisitions/Anthropic+acquires+JavaScript+runtime+Bun,+Claude+Code+hits+$1B+revenue/25688349.html
[^devclass-acq]: DevClass — https://devclass.com/2025/12/03/bun-javascript-runtime-acquired-by-anthropic-tying-its-future-to-ai-coding/

## Additional notes (coss-market)

Market context: Bun was the first of a series of AI-lab acquisitions of developer tools — OpenAI–Astral (Mar 2026), Anthropic–Stainless (May 18, 2026; terms undisclosed, The Information reported talks at >$300M)[^cm-gn-stainless][^tc-stainless] and Cursor–Continue (Jun 2026). See [AI labs acquiring OSS dev tools](/projects/coss-market/ai-lab-devtool-acquisitions.md).

[^cm-gn-stainless]: Anthropic — https://www.anthropic.com/news/anthropic-acquires-stainless
[^tc-stainless]: TechCrunch — https://techcrunch.com/2026/05/18/anthropic-has-acquired-the-dev-tools-startup-used-by-openai-google-and-cloudflare/
