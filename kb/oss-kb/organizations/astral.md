---
type: Organization
title: Astral
description: Company behind uv, Ruff and ty; raised seed/Series A (Accel) and an unannounced Series B (a16z), launched the pyx registry in Aug 2025, and agreed to be acquired by OpenAI on 2026-03-19.
resource: https://astral.sh
tags: [commercial-open-source, python, developer-tools, acquired, openai]
org_kind: coss-startup
hq: New York, USA
funding: { total_usd: "undisclosed", last_round: "Series B (Andreessen Horowitz; never announced, disclosed in the 2026-03-19 acquisition post)", last_round_date: "undisclosed", valuation_usd: "undisclosed (OpenAI deal terms undisclosed)" }
business_verdict: acquired
projects: [projects/devtools-languages/uv]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: astral-openai
    resource: https://astral.sh/blog/openai
    title: "Astral blog: Astral to join OpenAI"
  - id: willison
    resource: https://simonwillison.net/2026/mar/19/openai-acquiring-astral/
    title: "Simon Willison: Thoughts on OpenAI acquiring Astral"
  - id: pyx-intro
    resource: https://astral.sh/blog/introducing-pyx
    title: "Astral blog: pyx, a Python-native package registry, now in Beta"
  - id: talkpython-552
    resource: https://talkpython.fm/episodes/show/552/astral-joins-openai
    title: "Talk Python To Me #552: Astral joins OpenAI, with Charlie Marsh (2026-06-17)"
    author: org:talk-python
  - id: pydevtools-pyx
    resource: https://pydevtools.com/blog/astral-winds-down-pyx-open-sources-gpu-packaging/
    title: "pydevtools: Astral Shuts Down pyx"
  - id: openai-astral
    resource: https://openai.com/index/openai-to-acquire-astral/
    title: "OpenAI: OpenAI to acquire Astral (2026-03-19)"
    author: org:openai
  - id: cnbc-astral
    resource: https://www.cnbc.com/2026/03/19/openai-to-acquire-developer-tooling-startup-astral.html
    title: "CNBC: OpenAI to acquire developer tooling startup Astral in boost for Codex team (2026-03-19)"
    author: org:cnbc
  - id: cm-astral-openai
    resource: "https://astral.sh/blog/openai"
    title: "Astral blog: Astral to join OpenAI (2026-03-19)"
---

# Summary
Founded by Charlie Marsh, Astral built the fastest-growing Python tools of the era (uv at ~126M monthly downloads by March 2026).[^willison] Its seed (disclosed April 2023) and Series A were led by Accel's Casey Aylward; a Series B was led by a16z's Jennifer Li — neither later round was publicly announced before the acquisition.[^astral-openai][^willison] pyx, a hosted registry and its first commercial product, entered beta on 2025-08-13; after OpenAI's 2026-03-19 agreement to acquire Astral (30+ staff to join Codex after closing; terms undisclosed; subject to customary conditions including regulatory approval)[^openai-astral][^cnbc-astral], pyx was wound down (~June 2026) and its GPU-wheel work open-sourced.[^pyx-intro][^astral-openai][^pydevtools-pyx]

# Business timeline
| Date | Event |
|---|---|
| 2023-04 | Seed disclosed (Accel) [^willison] |
| undisclosed | Series A (Accel), Series B (a16z) — never announced; disclosed in the acquisition post [^astral-openai] |
| 2025-08-13 | pyx beta [^pyx-intro] |
| 2026-03-19 | OpenAI agrees to acquire Astral [^astral-openai][^openai-astral] |
| ~early 2026-05 | Deal closed; the team had joined OpenAI about a month before Charlie Marsh's Talk Python #552 recording (published 2026-06-17); no formal OpenAI closing announcement found [^talkpython-552] |
| ~2026-06 | pyx wound down; GPU indexes open-sourced [^pydevtools-pyx] |

# Monetization model
Planned: pyx private registry / platform for enterprises (private packages, security, GPU installs). Never reached scale before acquisition.[^pyx-intro][^pydevtools-pyx]

# Successes
- Massive OSS adoption; acquisition by a frontier AI lab.[^willison]

# Failures / risks
- Monetization arrived too late; tools now owned by OpenAI.[^pydevtools-pyx]

# Related
- [uv / Ruff / ty](/projects/devtools-languages/uv.md), [OpenAI acquires Astral](/events/2026-03-openai-acquires-astral.md)

[^astral-openai]: Astral blog — https://astral.sh/blog/openai
[^willison]: Simon Willison — https://simonwillison.net/2026/mar/19/openai-acquiring-astral/
[^pyx-intro]: Astral blog: pyx — https://astral.sh/blog/introducing-pyx
[^pydevtools-pyx]: pydevtools — https://pydevtools.com/blog/astral-winds-down-pyx-open-sources-gpu-packaging/
[^openai-astral]: OpenAI, 2026-03-19.
[^cnbc-astral]: CNBC, 2026-03-19.

## Additional notes (coss-market)

Market context: Astral is one of the defining cases of the 2025–26 trend of AI labs buying the OSS developer tools in their agents' hot path (with Anthropic–Bun, Anthropic–Stainless, Cursor–Continue). Astral says its tools reach "hundreds of millions of downloads per month" and that OpenAI "will continue supporting our open source tools after the deal closes"[^cm-astral-openai]. See [AI labs acquiring OSS dev tools](/projects/coss-market/ai-lab-devtool-acquisitions.md).

[^cm-astral-openai]: Astral blog, 2026-03-19.
[^talkpython-552]: Talk Python To Me #552, 2026-06-17.
