---
type: Organization
title: Oven (Bun)
description: VC-backed startup behind the Bun JavaScript runtime; raised ~$26M with zero revenue and was acquired by Anthropic on 2025-12-02 to underpin Claude Code.
resource: https://bun.com
tags: [commercial-open-source, javascript-runtime, acquired, anthropic]
org_kind: coss-startup
hq: San Francisco, USA
funding: { total_usd: "~26M", last_round: "Series A $19M (Khosla Ventures)", last_round_date: 2023, valuation_usd: "undisclosed" }
business_verdict: acquired
projects: [projects/devtools-languages/bun]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bun-joins-anthropic
    resource: https://bun.com/blog/bun-joins-anthropic
    title: "Bun blog: Bun is joining Anthropic"
  - id: si-claude-code
    resource: https://www.streetinsider.com/Mergers+and+Acquisitions/Anthropic+acquires+JavaScript+runtime+Bun,+Claude+Code+hits+$1B+revenue/25688349.html
    title: "StreetInsider: Anthropic acquires Bun, Claude Code hits $1B revenue"
  - id: reg-rust
    resource: https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381
    title: "The Register: Anthropic's Bun Rust rewrite merged at speed of AI"
  - id: cm-bun-anthropic
    resource: "https://bun.com/blog/bun-joins-anthropic"
    title: "Bun blog: Bun is joining Anthropic (2025-12-02)"
---

# Summary
Oven Inc. was founded by Jarred Sumner to commercialise Bun. It raised a $7M seed (Kleiner Perkins, 2022) and a $19M Series A (Khosla Ventures, 2023), had 4+ years of runway and **zero revenue** when Anthropic acquired it on 2025-12-02 — Anthropic's first acquisition.[^bun-joins-anthropic][^si-claude-code] The team now works inside Anthropic; in May 2026 it merged an AI-generated Zig→Rust rewrite of Bun.[^reg-rust]

# Business timeline
| Date | Event |
|---|---|
| 2022 | $7M seed led by Kleiner Perkins [^bun-joins-anthropic] |
| 2023 | $19M Series A led by Khosla Ventures [^bun-joins-anthropic] |
| 2025-12-02 | Acquired by Anthropic (price undisclosed) [^bun-joins-anthropic][^si-claude-code] |
| 2026-05-14 | Rust rewrite merged under Anthropic ownership [^reg-rust] |

# Monetization model
Planned cloud hosting never launched as revenue; post-acquisition, Bun is funded as strategic infrastructure for Claude Code and the Agent SDK.[^bun-joins-anthropic]

# Successes
- Built a top-tier runtime (96k stars) and exited without a business model.[^bun-joins-anthropic]

# Failures / risks
- Independence lost; roadmap tied to one AI vendor.

# Related
- [Bun](/projects/devtools-languages/bun.md), [Anthropic acquires Bun](/events/2025-12-anthropic-acquires-bun.md)

[^bun-joins-anthropic]: Bun blog: Bun is joining Anthropic — https://bun.com/blog/bun-joins-anthropic
[^si-claude-code]: StreetInsider — https://www.streetinsider.com/Mergers+and+Acquisitions/Anthropic+acquires+JavaScript+runtime+Bun,+Claude+Code+hits+$1B+revenue/25688349.html
[^reg-rust]: The Register — https://www.theregister.com/devops/2026/05/14/anthropics-bun-rust-rewrite-merged-at-speed-of-ai/5240381

## Additional notes (coss-market)

Market context: Bun's sale is the clearest example that zero-revenue OSS can command a strategic exit when an AI product depends on it — Claude Code ships as a Bun executable; Bun had raised $26M ($7M seed + $19M Series A), had 7.2M monthly downloads (Oct 2025) and $0 revenue, and remains MIT-licensed[^cm-bun-anthropic]. See [AI labs acquiring OSS dev tools](/projects/coss-market/ai-lab-devtool-acquisitions.md).

[^cm-bun-anthropic]: Bun blog, 2025-12-02.
