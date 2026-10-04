---
type: Event
title: "OpenAI acquires Rockset and shuts down its service"
description: "On 21 June 2024 OpenAI announced it had acquired Rockset, a real-time indexing and analytics database, to power retrieval in its products. Rockset stopped taking new customers and wound down its cloud service by late September 2024."
date: 2024-06-21
year: 2024
kind: acquisition
signal: mixed
ideas: [ideas/business-licensing/database-acquisitions-as-ai-acquihires, ideas/business-licensing/database-company-graveyard]
systems: [systems/rockset]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: openai
    resource: "https://openai.com/index/openai-acquires-rockset/"
    title: "OpenAI: OpenAI acquires Rockset (2024-06-21)"
  - id: bnf
    resource: "https://blocksandfiles.com/2024/06/24/openai-buys-rockset/"
    title: "Blocks & Files: OpenAI acquires Rockset for vector database capabilities (2024-06-24)"
  - id: pavlo-2024
    resource: "https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html"
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
---

# What happened

OpenAI acquired Rockset, founded by former Facebook RocksDB and Hadoop engineers, to strengthen retrieval infrastructure across its products.[^openai] Price was not disclosed. Rockset said it would stop new sign-ups and transition existing customers off its service, with month-to-month customers given until the end of September 2024.[^bnf][^pavlo-2024]

# Why it matters

It was the first prominent case of an AI lab buying a database company for its team and engine and closing the product. It set a pattern that repeated in 2025 (Gel, Kùzu) and showed customers the risk of depending on a venture-funded hosted database.

# Related

- [AI-era acquisitions](/ideas/business-licensing/database-acquisitions-as-ai-acquihires.md) · [Database company graveyard](/ideas/business-licensing/database-company-graveyard.md) · [Rockset](/systems/rockset.md)

[^openai]: OpenAI: OpenAI acquires Rockset (2024-06-21).
[^bnf]: Blocks & Files: OpenAI acquires Rockset for vector database capabilities (2024-06-24).
[^pavlo-2024]: Andy Pavlo: Databases in 2024: A Year in Review.
