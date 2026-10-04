---
type: System
title: Garnet
description: "Microsoft Research's open-source, RESP-compatible remote cache-store written in C# on .NET and built on FASTER research. Released in March 2024 with benchmarks beating Redis, KeyDB and Dragonfly, its research results show an alternative implementation, not a measured market takeover."
resource: https://github.com/microsoft/garnet
tags: [key-value, cache, research, dotnet, resp, microsoft]
kind: research
first_release: 2024
org: "Microsoft Research"
license: MIT
outcome: stable
ideas: [ideas/nosql-models/redis-and-in-memory-key-value]
status: stable
generated: { by: codex, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: research
    resource: https://www.microsoft.com/en-us/research/project/garnet/microsoft-research-blog/
    title: "Microsoft Research Garnet launch, March 18, 2024"
  - id: infoq
    resource: https://www.infoq.com/news/2024/04/microsoft-garnet-cache-store/
    title: "InfoQ: Microsoft Research open-sources Garnet cache-store (2024-04)"
    author: org:infoq
  - id: intro
    resource: https://thewindowsupdate.com/2024/03/18/introducing-garnet-an-open-source-next-generation-faster-cache-store-for-accelerating-applications-and-services/
    title: "Introducing Garnet (Microsoft Research blog mirror, 2024-03-18)"
    author: org:microsoft
  - id: mtp
    resource: https://www.marktechpost.com/2024/03/22/researchers-at-microsoft-introduce-garnet-an-open-source-and-faster-cache-store-system-for-accelerating-applications-and-services/
    title: "MarkTechPost: Researchers at Microsoft introduce Garnet (2024-03-22)"
---

# Summary

Garnet came out of Microsoft Research's FASTER project and was open-sourced in March 2024, in the same week Redis changed its license[^intro][^infoq]. It speaks RESP, so unmodified Redis clients work. It runs on .NET with a thread-scalable storage layer and supports lists, sorted sets, HyperLogLog, bitmaps, cluster mode, transactional stored procedures and tiered storage beyond RAM[^infoq]. Microsoft's benchmarks showed higher throughput and better tail latency than Redis, KeyDB and Dragonfly at high client counts[^mtp]. Its benchmarks are evidence about the tested workloads, not proof of universal superiority or installed-base share.

# Timeline

| Year | Event |
|---|---|
| 2024 | Open-sourced under MIT (Mar 18)[^intro] |

# What worked

The architectural lesson is that protocol compatibility and implementation continuity are separate. An application can retain a familiar client API while the server uses a different runtime and storage design. Garnet's reported results make that hypothesis concrete, although real deployments must include memory pressure, persistence and tail latency rather than compare only peak request rates.[^intro]

- It showed that a managed-runtime (C#) system can match or beat C for cache workloads with careful design.
- It gave Microsoft a RESP engine it controls, independent of Redis Ltd.

# What didn't

- RESP compatibility does not prove full Redis feature or command equivalence. A replacement must be tested against the application's commands, persistence needs and failover behavior.
- This research does not establish third-party production adoption or a commercial outcome. The important distinction is between an independently implemented engine and a fork inheriting Redis's existing ecosystem.

# Related

- [In-memory KV and the Redis saga](/ideas/nosql-models/redis-and-in-memory-key-value.md)
- [Redis](/systems/redis.md), [Valkey](/systems/valkey.md), [Dragonfly](/systems/dragonfly.md)
