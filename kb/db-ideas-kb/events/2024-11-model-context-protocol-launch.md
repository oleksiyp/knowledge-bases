---
type: Event
title: "Anthropic launches the Model Context Protocol"
description: "MCP, released on 2024-11-25 with a reference Postgres server, became the standard way for LLM agents to talk to databases. Within a year nearly every DBMS shipped an MCP server, ahead of any serious authorization model."
date: 2024-11-25
year: 2024
kind: standard
signal: positive
ideas: [ideas/vector-ai/ai-agents-as-database-users]
systems: [systems/postgresql, systems/sqlite]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: mcp
    resource: https://www.anthropic.com/news/model-context-protocol
    title: "Anthropic: Introducing the Model Context Protocol (2024-11-25)"
    author: org:anthropic
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: dd
    resource: https://securitylabs.datadoghq.com/articles/mcp-vulnerability-case-study-SQL-injection-in-the-postgresql-mcp-server/
    title: "Datadog Security Labs: SQL injection in the Postgres MCP server"
---

# What happened

Anthropic open-sourced MCP with "pre-built MCP servers for popular enterprise systems like Google Drive, Slack, GitHub, Git, Postgres, and Puppeteer."[^mcp] OpenAI adopted MCP in March 2025. By mid-2025, per Pavlo, "every DBMS added support", including ClickHouse, Snowflake, MongoDB, Neo4j, Redis, Oracle, YugabyteDB, PlanetScale, Supabase and the major clouds.[^pavlo-2025]

# Why it matters

MCP made databases directly usable by agents, which drove agent-created databases at Neon and Supabase. It standardized access, not authorization. The reference Postgres server's read-only mode could be bypassed by SQL injection, and it was deprecated in July 2025.[^dd]

# Related

- [AI agents as database users](/ideas/vector-ai/ai-agents-as-database-users.md) · [Replit agent deletes production DB](/events/2025-07-replit-agent-deletes-production-database.md)

[^mcp]: Anthropic announcement.
[^pavlo-2025]: Pavlo, 2025 review.
[^dd]: Datadog Security Labs.
