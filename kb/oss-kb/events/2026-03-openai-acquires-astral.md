---
type: Event
title: OpenAI agrees to acquire Astral (uv, Ruff, ty)
description: OpenAI agreed to buy Astral, the company behind Python's most popular new tools, and moved the team into Codex. Astral's pyx registry business was later wound down and its GPU packaging work open-sourced.
event_kind: acquisition
date: 2026-03-19
window: W9
impact: mixed
projects: [projects/devtools-languages/uv]
organizations: [organizations/astral]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: astral-openai
    resource: https://astral.sh/blog/openai
    title: "Astral blog: Astral to join OpenAI"
  - id: willison
    resource: https://simonwillison.net/2026/mar/19/openai-acquiring-astral/
    title: "Simon Willison: Thoughts on OpenAI acquiring Astral and uv/ruff/ty"
  - id: pydevtools-acq
    resource: https://pydevtools.com/blog/openai-acquires-astral/
    title: "pydevtools: OpenAI to Acquire Astral"
  - id: talkpython-552
    resource: https://talkpython.fm/episodes/show/552/astral-joins-openai
    title: "Talk Python To Me #552: Astral joins OpenAI, with Charlie Marsh (2026-06-17)"
    author: org:talk-python
  - id: pydevtools-pyx
    resource: https://pydevtools.com/blog/astral-winds-down-pyx-open-sources-gpu-packaging/
    title: "pydevtools: Astral Shuts Down pyx, Open-Sources the Part That Mattered"
  - id: openai-astral
    resource: https://openai.com/index/openai-to-acquire-astral/
    title: "OpenAI: OpenAI to acquire Astral (2026-03-19)"
    author: org:openai
  - id: cnbc-astral
    resource: https://www.cnbc.com/2026/03/19/openai-to-acquire-developer-tooling-startup-astral.html
    title: "CNBC: OpenAI to acquire developer tooling startup Astral (2026-03-19)"
    author: org:cnbc
  - id: cm-astral-blog
    resource: "https://astral.sh/blog"
    title: "Astral blog index (post-deal releases: Ruff v0.16.0 2026-07-23; uv malware checks 2026-06-08)"
---

# What happened
On 2026-03-19 Astral announced it had agreed to join OpenAI's Codex team, subject to customary closing conditions including regulatory approval; 30+ Astral staff were to join Codex. The price was not disclosed.[^astral-openai][^openai-astral][^cnbc-astral][^pydevtools-acq] Astral's tools account for hundreds of millions of downloads a month; uv alone had about 126M.[^astral-openai][^willison] OpenAI said it would keep supporting the open-source tools.[^astral-openai]

# Why it matters
Three months after Anthropic bought Bun, this deal confirmed a pattern: AI labs are buying the developer tools that run inside their coding agents. The Python ecosystem's most important new infrastructure is now owned by an AI vendor.[^willison]

# Outcome so far
On Talk Python #552 (published 2026-06-17) Charlie Marsh said the team had joined OpenAI about a month before recording, which puts the close around early May 2026. No formal OpenAI closing announcement was found[^talkpython-552]. (Corrected in pass 2: "closed in March 2026" → ~early May 2026.) Around June 2026 the hosted pyx registry was wound down, and its GPU index and prebuilt-wheel work was released openly.[^pydevtools-pyx] uv and Ruff kept their release pace, and ty is aiming for a stable release in 2026.[^pydevtools-pyx] uv is dual Apache-2.0/MIT licensed and Ruff and ty are MIT, so the community could fork them if needed.[^willison]

# Related
- [uv / Ruff / ty](/projects/devtools-languages/uv.md), [Astral](/organizations/astral.md)
- [Anthropic acquires Bun](/events/2025-12-anthropic-acquires-bun.md)

[^astral-openai]: Astral blog — https://astral.sh/blog/openai
[^willison]: Simon Willison — https://simonwillison.net/2026/mar/19/openai-acquiring-astral/
[^pydevtools-acq]: pydevtools — https://pydevtools.com/blog/openai-acquires-astral/
[^pydevtools-pyx]: pydevtools — https://pydevtools.com/blog/astral-winds-down-pyx-open-sources-gpu-packaging/
[^openai-astral]: OpenAI, 2026-03-19.
[^cnbc-astral]: CNBC, 2026-03-19.

## Additional notes (coss-market)

Market context: One of four AI-lab/AI-coding acquisitions of developer tools in Dec 2025–Jun 2026 (Bun, Astral, Stainless, Continue). Post-deal, Astral kept shipping in public (uv vulnerability/malware checks, 2026-06-08; Ruff v0.16.0, 2026-07-23)[^cm-astral-blog]. See [AI labs acquiring OSS dev tools](/projects/coss-market/ai-lab-devtool-acquisitions.md).

[^cm-astral-blog]: Astral blog index.
[^talkpython-552]: Talk Python To Me #552, 2026-06-17.
