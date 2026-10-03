---
type: OSS Project
title: Khoj
description: "AGPL self-hostable 'AI second brain' and research agent (~38k stars) whose YC company sunset its paid Khoj Cloud on 2026-04-15, leaving self-hosting only while founders moved to new products — declining."
resource: https://github.com/khoj-ai/khoj
tags: [ai-apps, personal-ai, rag, agpl-3.0, yc, cloud-shutdown]
domain: ai-apps
license: AGPL-3.0
license_history: ["AGPL-3.0 (current)"]
governance: single-vendor
steward: Khoj AI
backing_orgs: [organizations/khoj-ai]
metrics:
  github_stars: { value: 37555, as_of: 2026-10-03 }
  latest_release: { value: "2.0.0-beta.28 (2026-03-26)", as_of: 2026-10-03 }
  last_commit: { value: "2026-08-02", as_of: 2026-10-03 }
oss_verdict: declining
business_verdict: failed
momentum_by_window: { W3: down, W6: down, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: khoj-gh
    resource: https://github.com/khoj-ai/khoj
    title: Khoj GitHub repository (GitHub API, 2026-10-03)
  - id: khoj-sunset
    resource: https://app.khoj.dev/
    title: "Khoj Cloud has been sunset (notice, 2026-04-15)"
  - id: khoj-pq
    resource: https://www.promptquorum.com/power-local-llm/khoj-ai-second-brain-review
    title: "PromptQuorum: Khoj review 2026 — self-hosted only"
---

# Summary
Khoj (YC) offered an open-source personal AI that indexes notes (Obsidian, Notion) and does web research, with a hosted Khoj Cloud subscription; ~38k stars[^khoj-gh]. On 2026-04-15 the team shut down Khoj Cloud, citing the long tail of hand-built integrations, defensibility versus big-lab products and early architectural choices; the code stays open for self-hosting and the founders moved to new products (Open Paper, Pipali)[^khoj-sunset][^khoj-pq]. Last release 2.0.0-beta.28 (2026-03-26); last commit 2026-08-02[^khoj-gh]. Verdict: OSS declining; business (cloud) failed.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-03-26 | 2.0.0-beta.28 (last release)[^khoj-gh] | OSS | ± |
| W6 | 2026-04-15 | Khoj Cloud sunset; self-host only[^khoj-sunset] | Business | − |
| W3 | 2026-08-02 | Last commit to date[^khoj-gh] | OSS | − |

# OSS successes
- AGPL code remains available for self-hosting[^khoj-sunset].
# OSS failures / risks
- 2.0 never left beta; maintainers' attention moved elsewhere[^khoj-gh][^khoj-sunset].
# Business successes
- None in the period.
# Business failures / risks
- Personal-AI SaaS squeezed by ChatGPT/Claude memory and connectors[^khoj-sunset].

# By window
## W3
- Activity tails off (last commit 2026-08-02)[^khoj-gh].
## W6
- Cloud sunset[^khoj-sunset].
## W9
- Last beta release[^khoj-gh].
## W12
- No notable events found.
## W24
- No notable events found.

# Lessons
- Consumer "second brain" products are directly in the path of frontier labs' own memory/connectors features.

# Related
- [Khoj AI](/organizations/khoj-ai.md), [Khoj Cloud sunset](/events/2026-04-khoj-cloud-sunset.md), [Quivr](/projects/ai-apps/quivr.md), [Open Notebook](/projects/ai-apps/open-notebook.md)

[^khoj-gh]: GitHub API, khoj-ai/khoj — https://github.com/khoj-ai/khoj
[^khoj-sunset]: Khoj Cloud sunset notice — https://app.khoj.dev/
[^khoj-pq]: PromptQuorum — https://www.promptquorum.com/power-local-llm/khoj-ai-second-brain-review
