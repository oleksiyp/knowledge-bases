---
type: Market Study
title: "GitHub Octoverse 2025"
description: "GitHub's Octoverse 2025 (Oct 28, 2025): 180M+ developers, 36M+ new in a year, TypeScript overtakes Python as #1 by contributors, India adds 5.2M developers and is projected to lead by 2030, and 1.1M+ repos use LLM SDKs — the demand side of the open source economy."
resource: https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/
tags: [github, developer-statistics, typescript, india, ai, market-study]
domain: coss-market
metrics:
  github_developers: { value: "180M+", as_of: 2025-10-28 }
  new_developers_2025: { value: "36M+ (+23%)", as_of: 2025-10-28 }
  llm_sdk_repos: { value: "1.1M+ (+178%)", as_of: 2025-10-28 }
momentum_by_window: { W3: n/a, W6: n/a, W9: n/a, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T18:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T18:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: octoverse-2025
    resource: https://github.blog/news-insights/octoverse/octoverse-a-new-developer-joins-github-every-second-as-ai-leads-typescript-to-1/
    title: "GitHub blog: Octoverse — A new developer joins GitHub every second as AI leads TypeScript to #1 (2025-10-28)"
  - id: reg-octoverse
    resource: "https://www.theregister.com/2025/10/29/india_devs_github/"
    title: "The Register: India devs to outstrip US as AI reshapes coding, says GitHub (2025-10-29)"
---

# Summary

Octoverse 2025 (published 2025-10-28) documents the demand side of open source in the AI era: **180M+ developers** on GitHub, **36M+ joined in the year (+23%)** — more than one per second[^octoverse-2025]. **TypeScript became the #1 language by contributors** (1M+ new contributors, +66%), overtaking Python (#2, +48%) one year after Octoverse 2024 had crowned Python[^octoverse-2025][^reg-octoverse]. **India** added 5.2M+ developers (21.9M total, #2) and is projected at 57.5M by 2030 — one in three new developers[^octoverse-2025]. AI is now infrastructure: **4.3M AI-related repos**, **1.1M+ public repos using LLM SDKs (+178%)**, ~80% of new developers try Copilot in week one, and the Copilot coding agent opened 1M+ PRs (May–Sept 2025)[^octoverse-2025].

# Key numbers

| Metric | Value |
|---|---|
| Developers on GitHub | 180M+ |
| New developers 2025 | 36M+ (+23% YoY) |
| Public/OSS contributions | 1.12B (+13%) |
| Commits | 986M+ (+25%) |
| Avg PRs merged per month | 43.2M (+23%) |
| #1 language | TypeScript (+66% contributors) |
| India | 5.2M new; 21.9M total; 57.5M projected 2030 |
| AI repos | 4.3M; 693k+ new in 12 months |
| LLM-SDK repos | 1.1M+ (+178%) |
| Copilot coding agent PRs | 1M+ (May–Sept 2025) |

All figures from [^octoverse-2025].

# Business implications
- Typed languages win in agent-written code — a tailwind for TypeScript-first COSS (Vercel/Next.js, Supabase, Bun).
- India becomes the largest growth market for developer-tool COSS (Red Hat, GitLab, etc. expanding there; Red Hat moved China engineering to India in 2026 — see [Red Hat](/organizations/red-hat.md)).

# By window
## W3 / W6 / W9
- No new Octoverse edition yet (2026 edition expected ~late Oct 2026).
## W12
- Octoverse 2025 published 2025-10-28[^octoverse-2025].
## W24
- Octoverse 2024: Python #1 driven by AI[^reg-octoverse].

# Lessons
- AI is increasing the developer population and code volume, not shrinking it — the monetization question is who captures that.

# Related
- [AI disruption of OSS monetization](/projects/coss-market/ai-disruption-of-oss-monetization.md), [Domain review](/domains/coss-market.md)

[^octoverse-2025]: GitHub blog, 2025-10-28.
[^reg-octoverse]: The Register: India devs to outstrip US as AI reshapes coding, says GitHub (2025-10-29).
