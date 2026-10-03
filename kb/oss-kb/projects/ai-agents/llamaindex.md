---
type: OSS Project
title: LlamaIndex
description: MIT-licensed RAG/agent framework (~52k stars) whose company pivoted from general RAG toward "agentic document workflows" (LlamaParse, LlamaExtract, LlamaCloud), with strategic investment from Databricks and KPMG in 2025.
resource: https://github.com/run-llama/llama_index
tags: [ai-agents, rag, llm-framework, mit, company-led-open-core]
domain: ai-agents
license: MIT
license_history: ["MIT (2022-)"]
governance: company-led-open-core
steward: LlamaIndex Inc
backing_orgs: []
metrics:
  github_stars: { value: 52388, as_of: 2026-10-03 }
  github_forks: { value: 8267, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: growing
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: li-gh
    resource: https://github.com/run-llama/llama_index
    title: LlamaIndex GitHub repository (v0.14.25 2026-09-21; API stats 2026-10-03)
  - id: li-blog
    resource: https://www.llamaindex.ai/blog
    title: LlamaIndex blog index
---

# Summary
LlamaIndex remains a widely used MIT framework (52.4k stars) but its company has clearly pivoted to document AI: "Agentic Document Workflows" (Apr 2025), LlamaParse/LlamaExtract, ExtractBench (Aug 2026) and Extract v2.5 (2026-10-01)[^li-blog]. Databricks and KPMG invested in May 2025[^li-blog]. Verdict: OSS **stable** (framework growth flattened; still on 0.14.x)[^li-gh]; business **growing** in its document-processing niche.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-23 | "Agentic Document Workflows" repositioning | Business | ~ [^li-blog] |
| W24 | 2025-05-01 | Investments from Databricks and KPMG | Business | + [^li-blog] |
| W3 | 2026-08-11 | ExtractBench released | OSS | + [^li-blog] |
| W3 | 2026-10-01 | Extract v2.5 document extraction agents | Business | + [^li-blog] |

# OSS successes
- Still a core RAG library; LiteParse local parsing (Sep 2026)[^li-blog].
# OSS failures / risks
- Framework layer commoditized by lab SDKs; never reached a 1.0 API.
# Business successes
- Clear vertical: enterprise document extraction (finance, insurance, healthcare)[^li-blog].
# Business failures / risks
- Funding/valuation not disclosed in sources reviewed; competition from IDP vendors and VLMs.

# By window
## W3
- ExtractBench; Extract v2.5[^li-blog].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Document-workflows pivot; Databricks/KPMG investment[^li-blog].

# Lessons
- Framework companies survive by narrowing to a paid vertical where the OSS is the on-ramp.

# Related
- [/projects/ai-agents/langchain.md](/projects/ai-agents/langchain.md), [/projects/ai-agents/haystack.md](/projects/ai-agents/haystack.md)

[^li-gh]: https://github.com/run-llama/llama_index
[^li-blog]: https://www.llamaindex.ai/blog
