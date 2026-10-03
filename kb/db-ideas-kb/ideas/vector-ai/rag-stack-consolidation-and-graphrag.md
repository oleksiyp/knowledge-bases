---
type: Idea
title: "The RAG retrieval stack: consolidation, GraphRAG and agentic search"
description: "Retrieval-augmented generation in 2023 meant a chunker, an embedding model and a vector database glued together with LangChain. By 2026 the stack had collapsed into existing systems (model providers' built-in file search, databases with vector + full-text hybrid search). GraphRAG was a research hit with costly indexing, and coding agents showed that plain tool-driven search (grep) often beats embeddings. Verdict: mixed."
tags: [rag, retrieval, graphrag, hybrid-search, agentic-search, knowledge-graphs]
area: vector-ai
verdict: mixed
hype_peak: 2024
adoption_2026: mainstream
origins: "Lewis et al., 'Retrieval-Augmented Generation' (NeurIPS 2020). ChatGPT plugins and LangChain/LlamaIndex (2022–23) turned it into an application pattern."
key_systems: [systems/pinecone, systems/chroma, systems/weaviate, systems/vespa, systems/elasticsearch, systems/neo4j, systems/pgvector]
related_ideas: [ideas/vector-ai/dedicated-vector-databases, ideas/vector-ai/vector-search-as-a-feature, ideas/vector-ai/ai-agents-as-database-users, ideas/nosql-models/graph-databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: oai-fs
    resource: https://simonwillison.net/2024/Aug/30/openai-file-search/
    title: "Simon Willison: OpenAI file search result relevance (vector store / file_search, 2024)"
  - id: graphrag-blog
    resource: https://www.microsoft.com/en-us/research/blog/graphrag-new-tool-for-complex-data-discovery-now-on-github/
    title: "Microsoft Research: GraphRAG now on GitHub (2024-07-02)"
    author: org:microsoft-research
  - id: graphrag-paper
    resource: https://arxiv.org/abs/2404.16130
    title: "Edge et al.: From Local to Global: A Graph RAG Approach to Query-Focused Summarization (2024)"
  - id: lazygraphrag
    resource: https://www.microsoft.com/en-us/research/blog/lazygraphrag-setting-a-new-standard-for-quality-and-cost/
    title: "Microsoft Research: LazyGraphRAG (2024-11-25)"
    author: org:microsoft-research
  - id: cherny
    resource: https://x.com/bcherny/status/2017824286489383315
    title: "Boris Cherny (Claude Code) on RAG vs agentic search"
  - id: pragmatic
    resource: https://newsletter.pragmaticengineer.com/p/building-claude-code-with-boris-cherny
    title: "Pragmatic Engineer: Building Claude Code with Boris Cherny"
  - id: pavlo-2023
    resource: https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: graphrag-gh
    resource: https://github.com/microsoft/graphrag
    title: "microsoft/graphrag GitHub repository (≈36k stars on 2026-10-03)"
  - id: pc-sls
    resource: https://www.pinecone.io/newsroom/pinecone-makes-accurate-fast-scalable-generative-ai-accessible-to-organizations-large-and-small-with-launch-of-its-serverless-vector-database/
    title: "Pinecone: Serverless GA press release (2024-05-21)"
    author: org:pinecone
---

# Summary

**Verdict: mixed.** RAG itself won: grounding LLMs in private data through retrieval is standard practice. The separate RAG *stack* did not survive as a product category. Model providers absorbed the plumbing: OpenAI's Assistants API shipped hosted vector stores and `file_search` in April 2024.[^oai-fs] Databases absorbed the index (see [vector search as a feature](/ideas/vector-ai/vector-search-as-a-feature.md)). Even the "R" changed. Claude Code's creator said early versions "used RAG + a local vector db, but we found pretty quickly that agentic search generally works better", meaning the model driving grep and glob.[^cherny] **GraphRAG** (Microsoft Research, 2024) beat naive RAG on whole-corpus "global" questions with ~70–80% win rates.[^graphrag-blog] But its LLM-heavy indexing was expensive, and Microsoft's own LazyGraphRAG cut indexing cost to 0.1% of GraphRAG's.[^lazygraphrag] That made the expensive version hard to justify and kept graph databases a niche.

# The idea

1. **Classic RAG (2023):** chunk documents, embed them, store them in a vector DB, retrieve top-k at query time and put them in the prompt. Every layer (chunkers, embedders, vector DBs, orchestration frameworks, rerankers) became a startup category.
2. **GraphRAG (2024):** use an LLM to extract an entity/relationship graph, cluster it into communities, pre-summarize them and answer global questions by map-reduce over summaries.[^graphrag-paper]
3. **Agentic retrieval (2025–26):** give the model tools (SQL, grep, search APIs, MCP) and let it iterate rather than trusting one similarity lookup.

# Timeline 2018–2026

| Year | Event | Signal |
|---|---|---|
| 2020 | RAG paper (Lewis et al.) | + |
| 2023 | "Year of the vector database"; LangChain/LlamaIndex RAG tutorials make Pinecone and Chroma default components[^pavlo-2023] | + |
| 2024 | OpenAI hosted vector stores / file_search (Apr); GraphRAG paper (Apr) and open-source release (Jul 2); LazyGraphRAG (Nov)[^oai-fs][^graphrag-paper][^graphrag-blog][^lazygraphrag] | ± |
| 2024 | Pinecone reports "RAG reduces unhelpful GPT-4 responses by 50%" in its serverless launch[^pc-sls] | + |
| 2025 | Vector-DB buzz "muted"; MCP and agents become the integration layer[^pavlo-2025] | − |
| 2025–26 | Coding agents (Claude Code) favor agentic search over embedding indexes[^cherny][^pragmatic] | − |

# What succeeded

- **Retrieval as a grounding technique.** It is universal in enterprise LLM apps.
- **Hybrid search.** Combining BM25/keyword and vector results, plus a reranker, became the standard recipe. That favored engines with both (Elasticsearch, OpenSearch, Vespa, Weaviate, Postgres with full-text plus pgvector).
- **GraphRAG as an idea** is popular (about 36k GitHub stars) and influenced query-focused summarization.[^graphrag-gh]

# What failed

- **The standalone RAG middleware stack.** Its pieces became features of model APIs or databases.
- **Expensive GraphRAG indexing.** LLM extraction over a whole corpus costs more than most teams can justify. LazyGraphRAG's numbers (0.1% indexing cost, 700x cheaper global queries) were Microsoft's own admission of that.[^lazygraphrag]
- **"Every agent needs a vector DB."** For code and well-structured corpora, iterative tool use proved simpler and avoided stale indexes, privacy and security problems.[^cherny]
- **Graph databases as the RAG winners.** GraphRAG builds its graph in files and dataframes, not in a graph DBMS. Graph vendors gained marketing, not a new tier.

# Why

1. **Context windows grew and models got better at tool use**, which reduced the precision required from a single retrieval step.
2. **Retrieval quality is dominated by data hygiene and hybrid ranking**, not by the vector store. So the store became a commodity.
3. **Cost asymmetry.** Precomputing LLM summaries over every document pays off only when queries are many and the corpus is static. LazyGraphRAG's deferred design reflects that.[^lazygraphrag]

# Lessons

- Pipeline categories that sit between a model API and a database get squeezed from both sides.
- Precompute with LLMs only when reuse justifies it. Otherwise defer the work to query time.
- Index freshness and access control often matter more than recall@k.

# Related

- [Dedicated vector databases](/ideas/vector-ai/dedicated-vector-databases.md) · [AI agents as database users](/ideas/vector-ai/ai-agents-as-database-users.md) · [Graph databases](/ideas/nosql-models/graph-databases.md)
- Systems: [Vespa](/systems/vespa.md), [Weaviate](/systems/weaviate.md), [Chroma](/systems/chroma.md), [Neo4j](/systems/neo4j.md)
- Events: [GraphRAG open-sourced](/events/2024-07-graphrag-open-sourced.md)

[^oai-fs]: Simon Willison on OpenAI file_search (launched April 2024 with Assistants API v2).
[^graphrag-blog]: Microsoft Research blog.
[^graphrag-paper]: arXiv 2404.16130.
[^lazygraphrag]: Microsoft Research blog.
[^cherny]: Boris Cherny post on X.
[^pragmatic]: Pragmatic Engineer interview.
[^pavlo-2023]: Pavlo, 2023 review.
[^pavlo-2025]: Pavlo, 2025 review.
[^graphrag-gh]: GitHub.
[^pc-sls]: Pinecone press release.
