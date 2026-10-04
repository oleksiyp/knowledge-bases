---
type: Event
title: "Fauna announces shutdown of its serverless database"
description: "In March 2025 Fauna said it would shut its FaunaDB service on 30 May 2025 because its board and investors could not raise the capital needed to scale a global operational DBaaS, and promised an open-source release of the core."
date: 2025-03-19
year: 2025
kind: shutdown
signal: negative
ideas: [ideas/business-licensing/database-company-graveyard, ideas/business-licensing/managed-service-is-the-business, ideas/distributed-sql/deterministic-transactions]
systems: [systems/fauna]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: fauna
    resource: "https://fauna.evanweaver.com/the-future-of-fauna/"
    title: "Fauna: The Future of Fauna (March 19, 2025; founder-hosted archive)"
  - id: infoq
    resource: "https://www.infoq.com/news/2025/03/fauna-shuts-down/"
    title: "InfoQ: Fauna shutting down, is the future open source?"
  - id: reg
    resource: "https://www.theregister.com/2025/03/24/faunadb_shut_down/"
    title: "The Register: FaunaDB shutters but hints at open source future (2025-03-24)"
---

# What happened

On March 19, 2025, Fauna announced its planned shutdown.[^fauna] Reports specified that its service would end on 30 May 2025 and that it would stop accepting new customers.[^infoq][^reg] The company said that "driving broad-based adoption of a new operational database that runs as a service globally is very capital intensive" and that its board and investors had concluded it was not possible to raise that capital independently.[^fauna] It promised to open-source the core database, including its transaction engine and FQL language.[^fauna]

# Why it matters

Fauna had Calvin-inspired, strictly serializable distributed transactions and was well regarded technically. Its announcement directly identified the financing required for a global service as a constraint. This supports a business explanation for the shutdown, without proving that product design or technical tradeoffs played no role.

# Related

- [Database company graveyard](/ideas/business-licensing/database-company-graveyard.md) · [Managed service is the business](/ideas/business-licensing/managed-service-is-the-business.md) · [Fauna](/systems/fauna.md)

[^fauna]: Fauna: The Future of Fauna (March 19, 2025; founder-hosted archive).
[^infoq]: InfoQ: Fauna shutting down, is the future open source?.
[^reg]: The Register: FaunaDB shutters but hints at open source future (2025-03-24).
