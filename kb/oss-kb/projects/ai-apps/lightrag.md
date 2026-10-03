---
type: OSS Project
title: LightRAG
description: "HKU Data Science Lab's MIT graph-RAG framework with server/UI (~40k stars, EMNLP 2025), a lightweight alternative to Microsoft GraphRAG that absorbed RAG-Anything multimodal support in 2026 — thriving academic OSS."
resource: https://github.com/HKUDS/LightRAG
tags: [ai-apps, rag, graph-rag, mit, academic]
domain: ai-apps
license: MIT
license_history: ["MIT (2024-)"]
governance: academic
steward: HKU Data Science Lab (HKUDS)
backing_orgs: []
metrics:
  github_stars: { value: 39950, as_of: 2026-10-03 }
  latest_release: { value: "v1.5.7 (2026-09-02)", as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lr-gh
    resource: https://github.com/HKUDS/LightRAG
    title: LightRAG GitHub repository (GitHub API, 2026-10-03)
  - id: lr-acl
    resource: https://aclanthology.org/2025.findings-emnlp.568/
    title: "LightRAG: Simple and Fast Retrieval-Augmented Generation (Findings of EMNLP 2025)"
  - id: rag-anything
    resource: https://arxiv.org/pdf/2510.12323
    title: "RAG-Anything: All-in-One RAG Framework (arXiv 2510.12323)"
---

# Summary
LightRAG combines knowledge-graph and vector retrieval in a dual-level design and ships an API server and web UI; created Oct 2024, it reached ~40k stars by Oct 2026[^lr-gh] and was published in Findings of EMNLP 2025[^lr-acl]. The lab's RAG-Anything multimodal pipeline (Oct 2025) was integrated with LightRAG[^rag-anything]. Releases continue (v1.5.7, 2026-09-02)[^lr-gh], and downstream apps (e.g., Kotaemon) embed it. Verdict: thriving academic OSS; no business.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-02 | Repo created; rapid star growth[^lr-gh] | OSS | + |
| W12 | 2025-10/11 | RAG-Anything paper; EMNLP 2025 publication[^rag-anything][^lr-acl] | OSS | + |
| W3 | 2026-09-02 | v1.5.7[^lr-gh] | OSS | + |

# OSS successes
- Academic project with sustained engineering and releases[^lr-gh].
# OSS failures / risks
- Academic stewardship: depends on student/postdoc turnover.
# Business successes
- n/a.
# Business failures / risks
- n/a.

# By window
## W3
- v1.5.7[^lr-gh].
## W6
- Continued releases[^lr-gh].
## W9
- No notable events found.
## W12
- EMNLP 2025 / RAG-Anything[^lr-acl][^rag-anything].
## W24
- Launch and growth[^lr-gh].

# Lessons
- Hong Kong/China academic labs (HKUDS) can produce top-tier OSS apps when they ship a usable server and UI, not just paper code.

# Related
- [RAGFlow](/projects/ai-apps/ragflow.md), [LlamaIndex](/projects/ai-agents/llamaindex.md)

[^lr-gh]: GitHub API, HKUDS/LightRAG — https://github.com/HKUDS/LightRAG
[^lr-acl]: ACL Anthology — https://aclanthology.org/2025.findings-emnlp.568/
[^rag-anything]: arXiv 2510.12323 — https://arxiv.org/pdf/2510.12323
