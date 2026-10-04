---
type: Event
title: "Microsoft open-sources GraphRAG"
description: "Microsoft Research released GraphRAG on GitHub on 2024-07-02: LLM-built knowledge graphs with community summaries for whole-corpus questions. It was very popular, but its indexing cost was so high that Microsoft's own LazyGraphRAG cut it to 0.1% five months later."
date: 2024-07-02
year: 2024
kind: launch
signal: mixed
ideas: [ideas/vector-ai/rag-stack-consolidation-and-graphrag]
systems: []
status: stable
generated: { by: codex/gpt-6, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: blog
    resource: https://www.microsoft.com/en-us/research/blog/graphrag-new-tool-for-complex-data-discovery-now-on-github/
    title: "Microsoft Research: GraphRAG now on GitHub (2024-07-02)"
    author: org:microsoft-research
  - id: lazy
    resource: https://www.microsoft.com/en-us/research/blog/lazygraphrag-setting-a-new-standard-for-quality-and-cost/
    title: "Microsoft Research: LazyGraphRAG (2024-11-25)"
    author: org:microsoft-research
  - id: gh
    resource: https://github.com/microsoft/graphrag
    title: "microsoft/graphrag (≈36k stars, 2026-10-03)"
---

# What happened

Microsoft Research published GraphRAG (MIT license). It reported ~70–80% win rates over naive RAG on comprehensiveness and diversity for "global" questions, at 20–70% of the token use of source-text summarization.[^blog] On 2024-11-25 Microsoft followed with LazyGraphRAG, whose indexing cost is "identical to vector RAG and 0.1% of the costs of full GraphRAG", with more than 700x lower query cost for global search.[^lazy]

# Why it matters

GraphRAG attracted substantial developer attention (about 36k GitHub stars at the original research snapshot).[^gh] It also showed the pattern behind many LLM-in-data ideas: LLM preprocessing over a whole corpus is expensive and is cut back fast. It gave graph databases a marketing boost, but GraphRAG itself stores its graph in files, not in a graph DBMS.

# Related

- [RAG stack consolidation and GraphRAG](/ideas/vector-ai/rag-stack-consolidation-and-graphrag.md) · [Neo4j](/systems/neo4j.md)

[^blog]: Microsoft Research blog.
[^lazy]: Microsoft Research blog.
[^gh]: GitHub API.
