---
type: Organization
title: Hasura (PromptQL)
description: "Bengaluru/San Francisco company behind the Hasura GraphQL Engine; a 2022 unicorn ($100M Series C) that pivoted in June 2025 to PromptQL, an AI data agent sold with forward-deployed engineers, leaving Hasura v2 in LTS mode."
resource: https://hasura.io
tags: [commercial-open-source, graphql, ai-agents, pivot]
org_kind: coss-startup
hq: San Francisco, USA / Bengaluru, India
funding: { total_usd: "~136.5M (reported)", last_round: "Series C $100M led by Greenoaks", last_round_date: "2022", valuation_usd: "~1B (2022, reported)" }
business_verdict: struggling
projects: [projects/web-platforms/hasura]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: promptql
    resource: https://hasura.io/blog/from-graphql-to-promptql-a-new-chapter-begins
    title: "Hasura: From GraphQL to PromptQL — a new chapter begins (2025-06-02)"
  - id: fortune
    resource: https://fortune.com/2025/09/14/ai-engineers-consultant-premium-enterprise-data-integration-high-pay-llms-big-four/
    title: "Fortune: AI engineers deployed as consultants at $900/hour (2025-09-14)"
  - id: lts
    resource: https://hasura.io/legal/support-policy-hasura-v2
    title: "Hasura: Support policy for Hasura v2"
  - id: funding
    resource: https://lapaasvoice.com/startup/hasura/
    title: "Lapaas Voice: Hasura funding profile (Series C $100M, $136.5M total) — secondary"
---
# Summary
Hasura raised a reported **$100M Series C led by Greenoaks in 2022** (~$136.5M total, ~$1B valuation)[^funding]. On **2 June 2025** co-founder Tanmai Gopal announced **PromptQL** as GraphQL's "spiritual successor for the age of AI"[^promptql]; by Sept 2025 Fortune reported PromptQL deploying AI engineers to Fortune 500 clients at ~$900/hour[^fortune]. Hasura v2 remains under an annual LTS policy (final LTS supported three years)[^lts]. No new round announced since 2022. Verdict: struggling/pivoting.

# Business timeline
| Date | Event |
|---|---|
| 2022 | $100M Series C (reported)[^funding] |
| 2025-06-02 | PromptQL pivot[^promptql] |
| 2025-09-14 | Fortune: $900/h forward-deployed engineers[^fortune] |
| 2026-07/09 | v2.50 LTS (see project)[^lts] |

# Monetization model
PromptQL enterprise contracts (software + forward-deployed engineers); Hasura DDN cloud; v2 enterprise support.

# Successes
- Early enterprise AI-agent revenue claims[^fortune].

# Failures / risks
- Core OSS community left behind; downstream projects (Nhost) reimplementing the engine.

# Related
- [Hasura GraphQL Engine](/projects/web-platforms/hasura.md), [Hasura PromptQL pivot](/events/2025-06-hasura-promptql-pivot.md)

[^promptql]: https://hasura.io/blog/from-graphql-to-promptql-a-new-chapter-begins
[^fortune]: https://fortune.com/2025/09/14/ai-engineers-consultant-premium-enterprise-data-integration-high-pay-llms-big-four/
[^lts]: https://hasura.io/legal/support-policy-hasura-v2
[^funding]: https://lapaasvoice.com/startup/hasura/
