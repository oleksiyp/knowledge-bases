---
type: Idea
title: Languages designed for (or around) LLMs
description: "Two related bets: general-purpose languages marketed as 'AI-native' or built for AI workloads (Mojo, MoonBit), and DSLs and protocols for programming *with* LLMs (prompt languages such as LMQL and BAML, schema-constrained structured outputs, MCP tool definitions). 2022–2026 verdict: the plumbing succeeded (structured outputs, typed tool schemas, MCP everywhere), while new languages 'for AI' stayed niche and won mainly by being Python-compatible."
area: ai-and-languages
tags: [llm, mojo, moonbit, baml, lmql, dspy, structured-outputs, json-schema, mcp, dsl, ai-native]
outcome: mixed
maturity_2026: adopted
origin_year: 2022
mainstream_year: 2024
languages: [languages/mojo, languages/python, languages/typescript]
runtimes: []
related_ideas: [ideas/ai-and-languages/llm-impact-on-language-adoption, ideas/types/python-superset-languages, ideas/runtime-performance/ml-compilers-and-mlir, ideas/ai-and-languages/natural-language-programming-and-vibe-coding]
era_momentum: { E1: n/a, E2: n/a, E3: up, E4: up }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: mojo-reg
    resource: https://www.theregister.com/2023/05/05/modular_struts_its_mojo_a/
    title: "The Register: Modular reveals Mojo, Python superset with C-level speed"
  - id: mojo-1
    resource: https://www.modular.com/blog/modular-26-5-mojo-1-0-is-here
    title: "Modular: Modular 26.5 — Mojo 1.0 is here!"
  - id: mojo-oss
    resource: https://linuxiac.com/mojo-programming-language-goes-fully-open-source/
    title: "Linuxiac: Mojo programming language goes fully open source"
  - id: moonbit-paper
    resource: https://dl.acm.org/doi/10.1145/3643795.3648376
    title: "ACM: MoonBit — Explore the Design of an AI-Friendly Programming Language"
  - id: moonbit-roadmap
    resource: https://www.moonbitlang.com/blog/roadmap
    title: "MoonBit blog: MoonBit 1.0 Roadmap Preview"
  - id: moonbit-beta
    resource: https://www.moonbitlang.com/blog/beta-release
    title: "MoonBit blog: Announcing MoonBit Beta"
  - id: baml
    resource: https://docs.boundaryml.com/ref/prompt-syntax/ctx-output-format
    title: "BoundaryML docs: BAML prompt syntax (ctx.output_format)"
  - id: jsonschemabench
    resource: https://arxiv.org/pdf/2501.10868
    title: "arXiv: JSONSchemaBench — benchmark of structured outputs for language models"
  - id: openai-so
    resource: https://openai.com/index/introducing-structured-outputs-in-the-api/
    title: "OpenAI: Introducing Structured Outputs in the API (2024-08)"
  - id: mcp-anthropic
    resource: https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation
    title: "Anthropic: Donating MCP to the Agentic AI Foundation"
  - id: mcp-wiki
    resource: https://en.wikipedia.org/wiki/Model_Context_Protocol
    title: "Wikipedia: Model Context Protocol"
---

# Summary

**Mixed. The plumbing won and the new languages stayed niche.** The most successful
"languages for LLMs" of 2022–2026 were not general-purpose languages. They were **schemas and
protocols**: JSON Schema-constrained structured outputs (OpenAI added strict mode in August 2024,
and other vendors followed),[^openai-so][^jsonschemabench] typed tool definitions, and the **Model
Context Protocol** (Anthropic, November 2024), which by late 2025 had over 10,000 published servers
and moved to a Linux Foundation fund.[^mcp-wiki][^mcp-anthropic] Prompt DSLs such as LMQL, Guidance
and BAML found users, but most teams kept prompts in Python or TypeScript with typed wrappers.[^baml]
General-purpose languages pitched at AI had mixed results:

- **Mojo** was announced in 2023 with "35,000x faster than Python" marketing, took three years to
  reach 1.0 (August 2026), and open-sourced its compiler afterwards.[^mojo-reg][^mojo-1][^mojo-oss]
- **MoonBit** was billed as "AI-native" and designed alongside LLM tooling. It reached beta in
  2025 and was still pre-1.0 with small adoption.[^moonbit-paper][^moonbit-beta][^moonbit-roadmap]

No language designed primarily *for models to write* displaced the incumbents. See
[LLM impact on language adoption](/ideas/ai-and-languages/llm-impact-on-language-adoption.md).

# The idea

Three variants:

1. **Languages for AI workloads**: fast, accelerator-aware, Python-compatible (Mojo). See
   [Python superset languages](/ideas/types/python-superset-languages.md).
2. **Languages designed so LLMs generate them well**: regular syntax, strong local reasoning,
   fast feedback, toolchains that expose structured errors to agents (MoonBit's stated goal).[^moonbit-paper]
3. **DSLs for programming LLMs**: prompts as typed functions (BAML), constrained decoding grammars
   (LMQL, Outlines), declarative pipelines (DSPy), and tool or agent interfaces (MCP).

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E3 | 2022–2023 | LMQL, Guidance, Outlines: constrained decoding and prompt languages | + |
| E3 | 2023-05 | Modular announces Mojo for "AI developers"[^mojo-reg] | + |
| E3 | 2024 | MoonBit paper: "AI-friendly programming language"[^moonbit-paper] | + |
| E3 | 2024-08 | OpenAI Structured Outputs with strict JSON Schema adherence[^openai-so] | + |
| E4 | 2024-11 | Anthropic releases Model Context Protocol[^mcp-wiki] | + |
| E4 | 2025-06 | MoonBit beta[^moonbit-beta] | mixed |
| E4 | 2025-12 | MCP donated to the Linux Foundation's Agentic AI Foundation[^mcp-anthropic] | + |
| E4 | 2026-08 | Mojo 1.0; compiler open-sourced; external contributions accepted in 1.1[^mojo-1][^mojo-oss] | + |

# Where it succeeded

- **Structured outputs and typed tools** became standard API features. Type systems (Pydantic,
  Zod, JSON Schema) became the contract between programs and models.[^openai-so][^jsonschemabench]
- **MCP** became the shared "plug-in ABI" for agents, adopted by OpenAI, Google and Microsoft
  tools within about a year.[^mcp-wiki]
- **Mojo** found a real niche in portable GPU kernels and Modular's inference stack.[^mojo-1]

# Where it failed or stalled

- **"AI-native" general-purpose languages** lacked the training data that makes models fluent.
  A language designed for LLMs starts with zero LLM knowledge of it.
- **Prompt DSLs** fragmented. Most developers kept prompts in host-language strings with schema
  validation rather than adopting a separate language.[^baml]
- **Mojo's long path to openness** (closed compiler until 2026) slowed community adoption
  compared with its early hype.[^mojo-oss]

# Why

1. **The interface problem was about data, not syntax.** What models needed from programs was
   machine-checkable structure (schemas, types). Schemas can be added to existing languages.
2. **Training-data incumbency works against new languages** that target LLM authors, a
   chicken-and-egg problem.
3. **Python compatibility is the only proven route for AI-focused languages.** Mojo's superset
   strategy kept it relevant where Swift for TensorFlow failed.

# Lessons

- To make code AI-friendly, invest in types, schemas and machine-readable diagnostics in existing
  languages before inventing a new one.
- Protocols (MCP) spread faster than languages because they ask for no rewrite.

# Related

- [Mojo](/languages/mojo.md)
- [Python superset languages](/ideas/types/python-superset-languages.md)
- [LLM impact on language adoption](/ideas/ai-and-languages/llm-impact-on-language-adoption.md)
- [MCP announced](/events/2024-11-model-context-protocol-announced.md), [Mojo 1.0](/events/2026-08-mojo-1-0-open-source.md)

[^mojo-reg]: The Register on Mojo — https://www.theregister.com/2023/05/05/modular_struts_its_mojo_a/
[^mojo-1]: Mojo 1.0 — https://www.modular.com/blog/modular-26-5-mojo-1-0-is-here
[^mojo-oss]: Linuxiac, Mojo fully open source — https://linuxiac.com/mojo-programming-language-goes-fully-open-source/
[^moonbit-paper]: MoonBit AI-friendly design — https://dl.acm.org/doi/10.1145/3643795.3648376
[^moonbit-roadmap]: MoonBit 1.0 roadmap — https://www.moonbitlang.com/blog/roadmap
[^moonbit-beta]: MoonBit Beta — https://www.moonbitlang.com/blog/beta-release
[^baml]: BAML docs — https://docs.boundaryml.com/ref/prompt-syntax/ctx-output-format
[^jsonschemabench]: JSONSchemaBench — https://arxiv.org/pdf/2501.10868
[^openai-so]: OpenAI Structured Outputs — https://openai.com/index/introducing-structured-outputs-in-the-api/
[^mcp-anthropic]: Anthropic, donating MCP — https://www.anthropic.com/news/donating-the-model-context-protocol-and-establishing-of-the-agentic-ai-foundation
[^mcp-wiki]: Wikipedia, MCP — https://en.wikipedia.org/wiki/Model_Context_Protocol
