---
type: OSS Project
title: LibreChat
description: "MIT-licensed multi-provider chat UI (~45k stars) whose solo-founder project was acquired by ClickHouse in November 2025 and has since shipped faster (agents, admin panel, code interpreter) while staying MIT — thriving, acquired."
resource: https://github.com/danny-avila/LibreChat
tags: [ai-apps, chat-ui, mit, acquired, clickhouse]
domain: ai-apps
license: MIT
license_history: ["MIT (2023-)"]
governance: company-led-open-core
steward: ClickHouse, Inc.
backing_orgs: [organizations/clickhouse-inc]
metrics:
  github_stars: { value: 45209, as_of: 2026-10-03 }
  github_forks: { value: 9268, as_of: 2026-10-03 }
  latest_release: { value: "v0.8.8 (2026-10-01)", as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: acquired
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lc-gh
    resource: https://github.com/LibreChat-AI/LibreChat
    title: LibreChat GitHub repository (GitHub API, 2026-10-03; redirected from danny-avila/LibreChat)
  - id: bw-lc
    resource: https://www.businesswire.com/news/home/20251104505230/en/ClickHouse-Acquires-LibreChat-to-Democratize-AI-Driven-Analytics-Through-the-Open-Source-Agentic-Data-Stack
    title: "BusinessWire: ClickHouse Acquires LibreChat (2025-11-04)"
  - id: osfy-lc
    resource: https://www.opensourceforu.com/2025/11/clickhouse-acquires-librechat-to-democratise-ai-driven-data-access/
    title: "Open Source For You: ClickHouse acquires LibreChat (2025-11)"
  - id: lc-changelog
    resource: https://www.librechat.ai/changelog
    title: LibreChat changelog
  - id: lc-v084
    resource: https://www.librechat.ai/changelog/v0.8.4
    title: "LibreChat v0.8.4 changelog (2026-03)"
  - id: lc-lia
    resource: https://www.librechat.ai/blog/2026-09-29_meet-lia-building-librechat-with-librechat
    title: "LibreChat blog: Meet Lia — building LibreChat with LibreChat (2026-09-29)"
---

# Summary
LibreChat is an MIT-licensed, self-hostable chat interface that unifies OpenAI, Anthropic, Google, local and other models with agents, MCP and RAG. Built largely by Danny Avila, it was **acquired by ClickHouse on 2025-11-04** to become the UI layer of ClickHouse's "Agentic Data Stack"; ClickHouse committed to keep it open source[^bw-lc][^osfy-lc]. Since then the repo moved to the LibreChat-AI org and release cadence increased (weekly RCs, monthly stable: v0.8.4 → v0.8.8)[^lc-changelog][^lc-gh]. Verdict: OSS thriving (MIT kept), business acquired — the clean-exit counterexample to Open WebUI's relicensing.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-11-04 | ClickHouse acquires LibreChat; Avila and team join; stays open source[^bw-lc][^osfy-lc] | Business | + |
| W9 | 2026-03 | v0.8.4 release[^lc-v084] | OSS | + |
| W6 | 2026 Q2 | v0.8.5–0.8.6: admin panel, agent skills, subagents[^lc-changelog] | OSS | + |
| W3 | 2026-09-29 | "Lia" agent built on LibreChat to develop LibreChat[^lc-lia] | OSS | + |
| W3 | 2026-10-01 | v0.8.8 (approvals, scheduled chats, programmatic tool calling)[^lc-gh][^lc-changelog] | OSS | + |

# OSS successes
- ~45k stars, ~9.3k forks, MIT unchanged after acquisition[^lc-gh].
- Faster cadence post-acquisition: weekly RCs, monthly stables[^lc-changelog].

# OSS failures / risks
- Roadmap now tied to ClickHouse's analytics strategy; single-vendor governance.

# Business successes
- Founder exit to a ~$15B COSS company; product becomes a strategic funnel for ClickHouse Cloud[^bw-lc].

# Business failures / risks
- No standalone LibreChat business; deal terms undisclosed.

# By window
## W3
- v0.8.8 and "Lia" self-development agent[^lc-gh][^lc-lia].
## W6
- Admin panel, agent skills, subagents (v0.8.5–0.8.7)[^lc-changelog].
## W9
- v0.8.4[^lc-v084].
## W12
- Acquired by ClickHouse (2025-11-04)[^bw-lc].
## W24
- No notable events found (steady solo-led development).

# Lessons
- For a popular single-maintainer UI, acqui-hire by an infra company that needs a front end can preserve a permissive licence better than self-monetisation.

# Related
- [ClickHouse, Inc.](/organizations/clickhouse-inc.md), [ClickHouse acquires LibreChat](/events/2025-11-clickhouse-acquires-librechat.md), [Langfuse](/projects/ai-apps/langfuse.md), [Open WebUI](/projects/ai-apps/open-webui.md), [ClickHouse DB](/projects/databases/clickhouse.md)

[^lc-gh]: GitHub API, LibreChat-AI/LibreChat, 2026-10-03 — https://github.com/LibreChat-AI/LibreChat
[^bw-lc]: BusinessWire, 2025-11-04 — https://www.businesswire.com/news/home/20251104505230/en/ClickHouse-Acquires-LibreChat-to-Democratize-AI-Driven-Analytics-Through-the-Open-Source-Agentic-Data-Stack
[^osfy-lc]: Open Source For You, Nov 2025 — https://www.opensourceforu.com/2025/11/clickhouse-acquires-librechat-to-democratise-ai-driven-data-access/
[^lc-changelog]: LibreChat changelog — https://www.librechat.ai/changelog
[^lc-v084]: LibreChat v0.8.4 — https://www.librechat.ai/changelog/v0.8.4
[^lc-lia]: LibreChat blog, 2026-09-29 — https://www.librechat.ai/blog/2026-09-29_meet-lia-building-librechat-with-librechat
