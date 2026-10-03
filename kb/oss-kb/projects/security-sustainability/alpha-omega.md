---
type: OSS Project
title: Alpha-Omega
description: "Linux Foundation directed fund (>$7M/yr) paying for security work in critical OSS; in 2026 became the conduit for AI-lab money to help maintainers triage AI-discovered vulnerabilities and seeded Akrites."
resource: https://alpha-omega.dev
tags: [funding, security, linux-foundation, maintainers]
domain: security-sustainability
license: n/a
license_history: []
governance: foundation
steward: Linux Foundation / OpenSSF
backing_orgs: [organizations/linux-foundation]
metrics:
  annual_budget_usd: { value: 7000000, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: flat, W6: up, W9: up, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ao-site
    resource: https://alpha-omega.dev/
    title: Alpha-Omega homepage
  - id: lf-12m
    resource: https://www.linuxfoundation.org/press/linux-foundation-announces-12.5-million-in-grant-funding-from-leading-organizations-to-advance-open-source-security
    title: "LF: $12.5M grant funding (2026-03-17)"
  - id: anthropic-glasswing
    resource: https://www.anthropic.com/glasswing
    title: "Anthropic: Project Glasswing"
  - id: lf-akrites
    resource: https://www.linuxfoundation.org/press/linux-foundation-and-industry-leaders-launch-akrites-to-defend-critical-open-source-software-against-ai-enabled-cyber-threats
    title: "LF: Akrites launch (2026-06-25)"
  - id: ao-seasonal
    resource: https://alpha-omega.dev/blog/announcing-the-new-alpha-omega-seasonal-grant-program/
    title: "Alpha-Omega: Announcing the new seasonal grant program (2026-2027 calendar)"
---
# Summary
Alpha-Omega funds security staff and audits at critical projects and ecosystems. Its budget is described as over $7M a year, with funders including Anthropic, AWS, Citi, GitHub, Google, Google DeepMind, Microsoft and OpenAI.[^ao-site] Verdict: **growing**. In 2026 it co-administered the $12.5M AI-security grant pool aimed at the "unprecedented influx of security findings" hitting maintainers (2026-03-17).[^lf-12m] Together with OpenSSF, it received the $2.5M Anthropic pledged to the two of them through the Linux Foundation when Project Glasswing launched (2026-04-07).[^anthropic-glasswing] It also provided seed funding (amount undisclosed) for Akrites, the shared industry SIRT and coordinated-disclosure body launched on 2026-06-25 with 19 founding members including AWS, Anthropic, Google, Microsoft/GitHub, OpenAI, NVIDIA and JPMorganChase.[^lf-akrites] For 2026–2027 it replaced rolling applications with quarterly seasonal grant cycles (submission, then co-design, then decision).[^ao-seasonal]

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W9 | 2026-03-17 | Co-administers $12.5M AI-security grant pool[^lf-12m] | Business | + |
| W6 | 2026-04-07 | $2.5M Glasswing donation to Alpha-Omega + OpenSSF[^anthropic-glasswing] | Business | + |
| W6 | 2026-06-25 | Seed-funds Akrites (19 founding members)[^lf-akrites] | OSS | + |
| W3 | 2026-07 → 09 | First Q3 seasonal grant cycle under new quarterly framework (date of framework announcement not confirmed)[^ao-seasonal] | OSS | + |

# OSS successes
- Money goes directly to maintainers and ecosystem security teams instead of to tools.[^lf-12m]

# OSS failures / risks
- The size of the problem (thousands of AI-found bugs) dwarfs a budget of about $7–20M.

# Business successes
- The donor base widened to include the AI labs (OpenAI, Anthropic, Google DeepMind).[^ao-site]

# Business failures / risks
- Depends on a small number of corporate donors.

# By window
## W3
- Q3 seasonal grant cycle (Jul–Sep) under the new framework.[^ao-seasonal]
## W6
- Glasswing donation and Akrites seed funding.[^anthropic-glasswing][^lf-akrites]
## W9
- $12.5M pool.[^lf-12m]
## W12
- No notable events found.
## W24
- No notable events verified in this pass.

# Lessons
- Pooled, directed funds are the most scalable way so far for companies to pay for upstream security.

# Related
- [OpenSSF](/projects/security-sustainability/openssf.md), [Linux Foundation](/organizations/linux-foundation.md), [Akrites](/events/2026-06-akrites-launch.md)

[^ao-site]: alpha-omega.dev.
[^lf-12m]: LF press, 2026-03-17.
[^anthropic-glasswing]: Anthropic.
[^lf-akrites]: LF press, 2026-06-25.
[^ao-seasonal]: Alpha-Omega blog.
