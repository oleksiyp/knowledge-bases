---
type: Event
title: Hasura pivots from GraphQL to PromptQL
description: "On 2 June 2025 Hasura's co-founder announced PromptQL, an AI data agent, as the 'spiritual successor to GraphQL', demoting the open-source Hasura GraphQL Engine to maintenance while v3/DDN kept a proprietary control plane."
event_kind: other
date: 2025-06-02
window: W24
impact: negative
projects: [projects/web-platforms/hasura, projects/web-platforms/nhost]
organizations: [organizations/hasura]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: promptql
    resource: https://hasura.io/blog/from-graphql-to-promptql-a-new-chapter-begins
    title: "Hasura: From GraphQL to PromptQL — a new chapter begins (2025-06-02)"
  - id: fortune
    resource: https://fortune.com/2025/09/14/ai-engineers-consultant-premium-enterprise-data-integration-high-pay-llms-big-four/
    title: "Fortune: AI engineers deployed as consultants at $900/hour (2025-09-14)"
  - id: nhost
    resource: https://nhost.io/blog/introducing-constellation
    title: "Nhost: Constellation — Hasura-compatible GraphQL in Go (2026-06-03)"
  - id: lts
    resource: https://hasura.io/legal/support-policy-hasura-v2
    title: "Hasura: Support policy for Hasura v2"
---
# What happened
Tanmai Gopal wrote on 2 June 2025 that PromptQL — which generates data programs and business logic from natural language — is "the spiritual successor to GraphQL for the age of AI"; Hasura GraphQL Engine and DDN "will continue to be hosted and maintained"[^promptql].

# Why it matters
A 2022 unicorn built on an Apache-licensed engine re-centred on an AI product sold with forward-deployed engineers (~$900/hour per Fortune)[^fortune]. It is a template for how AI reshaped API-generation COSS companies.

# Outcome so far
Hasura v2 continues under annual LTS releases (v2.50 in 2026)[^lts]. Nhost, long dependent on Hasura v2, released Constellation on 3 June 2026 as a Hasura-compatible open engine, saying v2 is "winding down" and v3 "does not follow the same open-source model"[^nhost].

# Related
- [Hasura GraphQL Engine](/projects/web-platforms/hasura.md), [Nhost](/projects/web-platforms/nhost.md), [Hasura (org)](/organizations/hasura.md)

[^promptql]: https://hasura.io/blog/from-graphql-to-promptql-a-new-chapter-begins
[^fortune]: https://fortune.com/2025/09/14/ai-engineers-consultant-premium-enterprise-data-integration-high-pay-llms-big-four/
[^nhost]: https://nhost.io/blog/introducing-constellation
[^lts]: https://hasura.io/legal/support-policy-hasura-v2
