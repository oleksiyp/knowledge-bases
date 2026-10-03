---
type: Organization
title: Zed Industries
description: Maker of the Zed editor (GPL/AGPL/Apache), founded by Atom creator Nathan Sobo; raised a $32M Sequoia-led Series B in Aug 2025 to build agent-native collaborative editing (DeltaDB).
resource: https://zed.dev
tags: [commercial-open-source, ai-editor, ai-agents]
org_kind: coss-startup
hq: Boulder, USA (unverified)
funding: { total_usd: ">42M", last_round: "Series B, $32M (Sequoia)", last_round_date: 2025-08-20, valuation_usd: "undisclosed" }
business_verdict: growing
projects: [projects/ai-agents/zed]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: zed-seriesb
    resource: https://zed.dev/blog/sequoia-backs-zed
    title: "Zed: Sequoia backs Zed"
  - id: zed-wiki
    resource: https://en.wikipedia.org/wiki/Zed_(text_editor)
    title: "Wikipedia: Zed (text editor)"
  - id: zed-blog
    resource: https://zed.dev/blog
    title: "Zed blog index (pricing, Education, Business, DeltaDB, Delta posts)"
---

# Summary
Zed raised $32M Series B led by Sequoia on 2025-08-20 (over $42M total) and plans to open-source DeltaDB with optional paid services[^zed-seriesb]. It shipped Windows (Oct 2025) and 1.0 (Apr 2026)[^zed-wiki]. Verdict: **growing**.

# Business timeline
| Date | Event |
|---|---|
| 2025-08-20 | $32M Series B (Sequoia)[^zed-seriesb] |
| 2025-10 | Windows release[^zed-wiki] |
| 2026-04 | Zed 1.0[^zed-wiki] |

# Monetization model
Free copyleft editor; paid AI/hosted features (freemium)[^zed-wiki].

# Successes
- Funding and 1.0 milestone; strong OSS community (91k stars).

# Failures / risks
- AI direction prompted a no-AI fork (Gram, Mar 2026)[^zed-wiki].

# Related
- [/projects/ai-agents/zed.md](/projects/ai-agents/zed.md)

[^zed-seriesb]: https://zed.dev/blog/sequoia-backs-zed
[^zed-wiki]: https://en.wikipedia.org/wiki/Zed_(text_editor)

## Additional notes (devtools-languages)
- Monetization timeline from Zed's blog: token-based LLM pricing (2025-09-24), Zed for Education (2026-03-09), Zed for Business (2026-05-06), DeltaDB introduced (2026-06-11), and Delta, pitched as a replacement for pull requests, in public beta from 2026-09-16.[^zed-blog]
- Exact dates: Windows GA 2025-10-15; Zed 1.0 2026-04-29.[^zed-blog]
- Ecosystem: the Agent Client Protocol gained JetBrains (2025-10-06), and an ACP registry went live on 2026-01-28.[^zed-blog]
- Related: [Zed (editor view)](/projects/devtools-languages/zed.md)

[^zed-blog]: Zed blog — https://zed.dev/blog
