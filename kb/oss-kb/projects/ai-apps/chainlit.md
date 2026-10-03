---
type: OSS Project
title: Chainlit
description: "Apache-2.0 Python framework for chat-style LLM UIs (~12k stars) whose founding team (LiteralAI) stepped back on 2025-05-01 and shut LiteralAI, handing Chainlit to community maintainers under a formal agreement — stable after a clean handover."
resource: https://github.com/Chainlit/chainlit
tags: [ai-apps, ui-framework, python, apache-2.0, community-handover]
domain: ai-apps
license: Apache-2.0
license_history: ["Apache-2.0 (2023-)"]
governance: community
steward: Chainlit maintainers (Maintainer Agreement)
backing_orgs: []
metrics:
  github_stars: { value: 12492, as_of: 2026-10-03 }
  last_push: { value: "2026-09-18", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: failed
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: cl-gh
    resource: https://github.com/Chainlit/chainlit
    title: Chainlit GitHub repository (GitHub API, 2026-10-03)
  - id: cl-pypi
    resource: https://pypi.org/project/chainlit/
    title: "PyPI: chainlit (maintenance notice)"
  - id: literal-migration
    resource: https://docs.literalai.com/more/migration-guide
    title: "Literal AI migration guide (discontinuation notice)"
---

# Summary
Chainlit lets Python developers ship ChatGPT-like UIs for agents quickly; ~12k stars[^cl-gh]. Its company pivoted to the LiteralAI observability product, then decided to discontinue LiteralAI (service until 2025-10-31) and seek new maintainers; since 2025-05-01 the original team has stepped back and Chainlit is maintained by @Chainlit/chainlit-maintainers under a formal Maintainer Agreement[^cl-pypi][^literal-migration]. Commits continue (last push 2026-09-18)[^cl-gh]. Verdict: OSS stable via community handover; business failed.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-05-01 | Original team steps back; community maintainers take over[^cl-pypi] | OSS | ± |
| W12 | 2025-10-31 | LiteralAI service discontinued[^literal-migration] | Business | − |
| W3 | 2026-09-18 | Ongoing maintenance pushes[^cl-gh] | OSS | + |

# OSS successes
- Explicit, documented handover rather than silent abandonment[^cl-pypi].
# OSS failures / risks
- Slower feature development without a funded team.
# Business successes
- None.
# Business failures / risks
- LiteralAI (LLM observability) lost to Langfuse/LangSmith[^literal-migration].

# By window
## W3
- Maintenance continues[^cl-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- LiteralAI shutdown[^literal-migration].
## W24
- Community handover[^cl-pypi].

# Lessons
- A formal maintainer agreement is a low-cost way for a failing company to keep its OSS alive.

# Related
- [Gradio](/projects/ai-apps/gradio.md), [Streamlit](/projects/ai-apps/streamlit.md), [Langfuse](/projects/ai-apps/langfuse.md)

[^cl-gh]: GitHub API, Chainlit/chainlit — https://github.com/Chainlit/chainlit
[^cl-pypi]: PyPI chainlit — https://pypi.org/project/chainlit/
[^literal-migration]: Literal AI docs — https://docs.literalai.com/more/migration-guide
