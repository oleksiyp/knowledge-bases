---
type: OSS Project
title: Mem0
description: Apache-2.0 memory layer for AI agents; raised $24M (Seed + Series A, Oct 2025) on fast API growth and reached ~66k stars — the leading OSS "agent memory" project.
resource: https://github.com/mem0ai/mem0
tags: [ai-agents, memory, apache-2.0, company-led-open-core]
domain: ai-agents
license: Apache-2.0
license_history: ["Apache-2.0 (2023-)"]
governance: company-led-open-core
steward: Mem0 Inc
backing_orgs: [organizations/mem0]
metrics:
  github_stars: { value: 66496, as_of: 2026-10-03 }
  api_calls_per_quarter: { value: 186000000, as_of: 2025-09-30 }
oss_verdict: thriving
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: mem0-gh
    resource: https://github.com/mem0ai/mem0
    title: Mem0 GitHub repository (API stats 2026-10-03)
  - id: mem0-seriesa
    resource: https://mem0.ai/series-a
    title: "Mem0 raises $24M Seed + Series A"
    author: org:mem0
---

# Summary
Mem0 provides persistent memory for agents. On 2025-10-28 it announced $24M across Seed (Kindred Ventures) and Series A (Basis Set Ventures), citing 41k stars, 14M Python downloads and API calls rising from 35M (Q1 2025) to 186M (Q3 2025), plus integrations in CrewAI and AWS's Agent SDK[^mem0-seriesa]. By 2026-10-03 it had ~66.5k stars[^mem0-gh]. Verdict: OSS **thriving**; business **growing**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-28 | $24M Seed+Series A; 186M API calls in Q3 2025 | Business | + [^mem0-seriesa] |
| W3 | 2026-09-25 | Active releases (ts-v3.3.1); 66.5k stars | OSS | + [^mem0-gh] |

# OSS successes
- 41k → 66.5k stars in under a year[^mem0-seriesa][^mem0-gh].
# OSS failures / risks
- Labs are adding native memory to models/agents, a substitute threat.
# Business successes
- Strong API usage growth[^mem0-seriesa].
# Business failures / risks
- Revenue undisclosed.

# By window
## W3
- Continued releases[^mem0-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- $24M funding[^mem0-seriesa].
## W24
- Growth phase (stats only).

# Lessons
- "Picks and shovels" components (memory) monetize via hosted APIs even when the library is permissive.

# Related
- [/organizations/mem0.md](/organizations/mem0.md), [/projects/ai-agents/letta.md](/projects/ai-agents/letta.md)

[^mem0-gh]: https://github.com/mem0ai/mem0
[^mem0-seriesa]: https://mem0.ai/series-a
