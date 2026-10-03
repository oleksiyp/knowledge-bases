---
type: Event
title: "Cloudflare announces Durable Objects beta"
description: "Cloudflare introduced Durable Objects, single-homed, strongly consistent stateful actors for Workers, on September 28, 2020. This compute-to-data design outlasted the 'replicate data to every edge' products."
date: 2020-09-28
year: 2020
kind: launch
signal: positive
ideas: [ideas/edge-devx/edge-databases]
systems: [systems/durable-objects]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: do-beta
    resource: https://blog.cloudflare.com/introducing-workers-durable-objects/
    title: "Cloudflare: Workers Durable Objects Beta: A New Approach to Stateful Serverless"
    author: org:cloudflare
---

# What happened
During Birthday Week 2020, Cloudflare opened a closed beta of Durable Objects. Each object has a globally unique ID and exists in one location at a time, and Workers anywhere can message it. Cloudflare called this the missing piece for running whole applications on the edge "with no centralized origin server"[^do-beta].

# Why it matters
Instead of replicating a database to every point of presence, Durable Objects route requests to the one place the state lives. This gives strong consistency without a distributed consensus protocol. In 2024 every object gained an embedded SQLite database, and D1 is built on the same primitive. It was the most durable edge-state idea of the period.

# Related
[Durable Objects](/systems/durable-objects.md) · [Edge databases](/ideas/edge-devx/edge-databases.md)
