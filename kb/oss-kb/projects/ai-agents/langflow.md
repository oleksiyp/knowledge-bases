---
type: OSS Project
title: Langflow
description: MIT-licensed visual agent/RAG builder acquired by DataStax (Apr 2024) and carried into IBM when IBM closed its DataStax acquisition (May 2025); ~155k stars and still actively released — the low-code builder that survived inside big tech.
resource: https://github.com/langflow-ai/langflow
tags: [ai-agents, low-code, mit, big-tech, acquired]
domain: ai-agents
license: MIT
license_history: ["MIT (2023-)"]
governance: single-vendor
steward: IBM (via DataStax)
backing_orgs: []
metrics:
  github_stars: { value: 155462, as_of: 2026-10-03 }
  github_forks: { value: 10169, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: acquired
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: langflow-gh
    resource: https://github.com/langflow-ai/langflow
    title: Langflow GitHub repository (v1.12.4, 2026-09-29; API stats 2026-10-03)
  - id: dbta-ibm
    resource: https://www.dbta.com/Editorial/News-Flashes/IBM-Officially-Closes-Acquisition-of-DataStax-169711.aspx
    title: "DBTA: IBM officially closes acquisition of DataStax"
  - id: reg-ibm
    resource: https://www.theregister.com/2025/02/25/ibm_datastax/
    title: "The Register: IBM plans to buy open source Cassandra wrangler DataStax"
    author: org:theregister
  - id: tns-ibm
    resource: https://thenewstack.io/ibm-to-acquire-datastax-to-boost-watsonx-ai-development/
    title: "The New Stack: Langflow, Cassandra — IBM's DataStax buy"
    author: org:thenewstack
---

# Summary
Langflow is a Python-based visual builder for agents and RAG flows (MIT, ~155k stars)[^langflow-gh]. DataStax acquired it in April 2024; IBM announced the DataStax acquisition on 2025-02-25 and closed it in late May 2025, folding Langflow into watsonx[^reg-ibm][^dbta-ibm][^tns-ibm]. Unlike Flowise, it continues shipping (v1.12.4 on 2026-09-29)[^langflow-gh]. Verdict: OSS **growing**; business **acquired**.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-02-25 | IBM announces DataStax acquisition (incl. Langflow) | Business | ~ [^reg-ibm] |
| W24 | 2025-05-28 | IBM closes DataStax deal | Business | ~ [^dbta-ibm] |
| W3 | 2026-09-29 | v1.12.4; 155k stars | OSS | + [^langflow-gh] |

# OSS successes
- Continued active development after two ownership changes[^langflow-gh].
# OSS failures / risks
- Big-tech owner priorities (watsonx) could shift; category risk shared with Flowise/Dify.
# Business successes
- Double exit (to DataStax, then IBM).
# Business failures / risks
- No standalone revenue visibility.

# By window
## W3
- Ongoing releases[^langflow-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- IBM–DataStax deal (announced Feb, closed May 2025)[^reg-ibm][^dbta-ibm].

# Lessons
- An OSS project acquired as part of a larger strategic asset (DataStax) can be more durable than one bought as a standalone feature (Flowise→Workday).

# Related
- [/events/2025-05-ibm-closes-datastax-langflow.md](/events/2025-05-ibm-closes-datastax-langflow.md)
- [/projects/ai-agents/flowise.md](/projects/ai-agents/flowise.md), [/projects/ai-agents/dify.md](/projects/ai-agents/dify.md)

[^langflow-gh]: https://github.com/langflow-ai/langflow
[^dbta-ibm]: https://www.dbta.com/Editorial/News-Flashes/IBM-Officially-Closes-Acquisition-of-DataStax-169711.aspx
[^reg-ibm]: https://www.theregister.com/2025/02/25/ibm_datastax/
[^tns-ibm]: https://thenewstack.io/ibm-to-acquire-datastax-to-boost-watsonx-ai-development/
