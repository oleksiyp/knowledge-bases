---
type: Idea
title: "Deterministic simulation testing (DST)"
description: "Run the whole distributed system (network, disks, clocks, scheduler) inside a single-threaded, seeded simulator so that rare failures can be found and replayed exactly. Verdict: winning. It moved from FoundationDB folklore to standard practice for new data infrastructure (TigerBeetle, WarpStream, Turso, Resonate, Aiven's diskless Kafka) and to a funded company (Antithesis, $105M Series A in 2025). It remains hard to retrofit onto existing code."
tags: [testing, simulation, determinism, fault-injection, correctness, reliability]
area: distributed-sql
verdict: winning
hype_peak: 2025
adoption_2026: common
origins: "FoundationDB's simulator (built from ~2010; Will Wilson's 2014 Strange Loop talk)"
key_systems: [systems/foundationdb, systems/tigerbeetle, systems/antithesis, systems/warpstream, systems/turso]
related_ideas: [ideas/distributed-sql/jepsen-correctness-culture, ideas/distributed-sql/specialized-oltp-ledgers, ideas/distributed-sql/transactional-kv-core-and-layers, ideas/streaming-messaging/diskless-kafka]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: fdb-paper
    resource: https://www.foundationdb.org/files/fdb-paper.pdf
    title: "FoundationDB: A Distributed Unbundled Transactional Key Value Store (SIGMOD 2021)"
  - id: antithesis-seed
    resource: https://techcrunch.com/2024/02/13/antithesis-raises-47m-to-launch-an-automated-testing-platform-for-software/
    title: "TechCrunch: Antithesis raises $47M (2024-02-13)"
  - id: antithesis-a
    resource: https://www.finsmes.com/2025/12/antithesis-raises-105m-in-series-a-funding.html
    title: "FinSMEs: Antithesis raises $105M Series A (2025-12)"
  - id: eaton-dst
    resource: https://notes.eatonphil.com/2024-08-20-deterministic-simulation-testing.html
    title: "Phil Eaton: What's the big deal about Deterministic Simulation Testing? (2024-08-20)"
    author: person:phil-eaton
  - id: warpstream-dst
    resource: https://www.warpstream.com/blog/deterministic-simulation-testing-for-our-entire-saas
    title: "WarpStream: Deterministic Simulation Testing for our entire SaaS"
    author: org:warpstream
  - id: turso-free
    resource: https://turso.tech/blog/databases-will-be-free
    title: "Turso: Databases will be free (Limbo and DST, 2024-12)"
    author: org:turso
  - id: aiven-dst
    resource: https://aiven.io/blog/deterministic-simulation-testing-in-diskless-apache-kafka
    title: "Aiven: Deterministic Simulation Testing in Diskless Apache Kafka"
    author: org:aiven
  - id: polar-dst
    resource: https://www.polarsignals.com/blog/posts/2024/05/28/mostly-dst-in-go
    title: "Polar Signals: (Mostly) Deterministic Simulation Testing in Go (2024-05-28)"
  - id: resonate-dst
    resource: https://journal.resonatehq.io/p/deterministic-simulation-testing
    title: "Resonate: Deterministic Simulation Testing"
  - id: jepsen-tb
    resource: https://jepsen.io/analyses/tigerbeetle-0.16.11
    title: "Jepsen: TigerBeetle 0.16.11 (2025-06)"
    author: person:kyle-kingsbury
  - id: se-radio
    resource: https://se-radio.net/2025/09/se-radio-685-will-wilson-on-deterministic-simulation-testing/
    title: "SE Radio 685: Will Wilson on Deterministic Simulation Testing (2025-09)"
---

# Summary
**Verdict: winning.** DST is the main correctness idea to spread out of the distributed-database world between 2018 and 2026. FoundationDB used it from the start, and its 2021 paper says even production upgrades at Apple are rehearsed in simulation[^fdb-paper]. After 2020 it became the default for new data-infrastructure projects. TigerBeetle built its whole engineering culture around a simulator. WarpStream simulates its entire SaaS[^warpstream-dst]. Turso rebuilt SQLite with DST in mind[^turso-free], and Aiven tests its diskless Kafka this way[^aiven-dst]. Phil Eaton's 2024 explainer[^eaton-dst] and Will Wilson's 2025 podcast[^se-radio] reached a wide audience. Antithesis, founded by FoundationDB's creators, offers DST as a hypervisor-level service for unmodified software. It raised $47M in 2024[^antithesis-seed] and a $105M Series A led by Jane Street in Dec 2025[^antithesis-a]. The limits: DST must be designed in from day one or bought as a heavy platform, and Jepsen still finds bugs in DST-tested systems[^jepsen-tb].

# The idea
Make all sources of nondeterminism (thread scheduling, network delivery, disk I/O, time, randomness) go through interfaces that a simulator controls from a single seed. Then run thousands of simulated clusters per hour, injecting partitions, crashes, torn writes and clock jumps far faster than real time. Any failure replays exactly from its seed. That turns once-a-year production heisenbugs into reproducible, debuggable test cases.

# Timeline 2018–2026
| Year | Event | Signal |
|---|---|---|
| 2018 | FoundationDB open-sourced, including its simulator | + |
| 2020 | TigerBeetle created (Jul). Its simulator (the "VOPR") later became central to how it is built and marketed | + |
| 2021 | FoundationDB SIGMOD paper documents simulation-first engineering[^fdb-paper] | + |
| 2024 | Antithesis exits stealth with $47M at a $215M valuation (Feb 13)[^antithesis-seed]. Polar Signals tries "mostly DST" in Go[^polar-dst]. Eaton explainer (Aug)[^eaton-dst]. Turso Limbo commits to DST (Dec)[^turso-free] | + (hype) |
| 2025 | Jepsen tests TigerBeetle and finds only two minor safety issues[^jepsen-tb]. Aiven, WarpStream and Resonate publish DST programs[^aiven-dst][^warpstream-dst][^resonate-dst]. Antithesis raises $105M (Dec)[^antithesis-a] | + |

# What succeeded
- **Bug-finding power.** WarpStream reports simulating 280 logical hours in 6 wall-clock hours with Antithesis[^warpstream-dst]. Turso found that each new fault the simulator learned to inject exposed new bugs[^turso-free].
- **Correctness as a selling point.** TigerBeetle markets its simulator directly. Its Jepsen report found seven crashes and liveness issues but only two minor safety bugs (missing results for multi-predicate queries, wrong timestamps in a debug API)[^jepsen-tb].
- **A funded tooling market.** Antithesis is used by about 40 companies, with Jane Street both lead investor and customer[^antithesis-a].

# What failed
- **Retrofitting.** Existing codebases in Go, Java or C++ with real threads and syscalls are very hard to make deterministic. Polar Signals' "mostly DST" title admits as much[^polar-dst]. This is the gap Antithesis's deterministic hypervisor targets.
- **Simulator blind spots.** A simulator only finds bugs in the faults and workloads it models. Jepsen's TigerBeetle work still found crashes and retry-forever behavior that the VOPR had missed[^jepsen-tb].
- **Hype exceeding practice.** Many 2024–2025 "we do DST" posts describe partial determinism or fuzzing with seeded randomness, not whole-system simulation (our assessment).

# Why
1. **Distributed bugs are rare-event bugs.** Unit tests cannot reach the state space, and production is too slow and expensive a fuzzer. Simulation compresses years of fault exposure into hours.
2. **New systems could design for it.** The wave of new data infrastructure after 2020 (diskless Kafka, Rust/Zig databases, object-storage-native engines) started from a clean slate and could route all I/O through a simulator.
3. **Credibility for small vendors.** A startup asking a bank to trust a new database needs evidence. DST plus a published Jepsen report became the way to provide it.
4. **AI-generated code raises the stakes (emerging).** If more code is written by agents, automated whole-system verification becomes more valuable. Antithesis's 2025 raise came amid that argument. This is our reading, and whether it drives adoption is not yet shown.

# Lessons
- Make I/O, time and scheduling injectable from the first commit. Retrofitting determinism costs far more than building it in.
- Simulation and external black-box testing (Jepsen) complement each other. Neither is enough alone.
- A testing approach can become a product category once it is packaged to work on unmodified software.

# Related
- Systems: [FoundationDB](/systems/foundationdb.md), [TigerBeetle](/systems/tigerbeetle.md), [Antithesis](/systems/antithesis.md), [WarpStream](/systems/warpstream.md), [Turso](/systems/turso.md)
- Ideas: [Jepsen correctness culture](/ideas/distributed-sql/jepsen-correctness-culture.md), [Specialized OLTP ledgers](/ideas/distributed-sql/specialized-oltp-ledgers.md)
- Events: [Antithesis launch](/events/2024-02-antithesis-launch.md), [Jepsen tests TigerBeetle](/events/2025-06-jepsen-tigerbeetle.md)

[^fdb-paper]: Zhou et al., SIGMOD 2021.
[^antithesis-seed]: TechCrunch, 2024-02-13.
[^antithesis-a]: FinSMEs, Dec 2025.
[^eaton-dst]: Phil Eaton, 2024-08-20.
[^warpstream-dst]: WarpStream blog.
[^turso-free]: Turso blog, Dec 2024.
[^aiven-dst]: Aiven blog.
[^polar-dst]: Polar Signals blog, 2024-05-28.
[^resonate-dst]: Resonate journal.
[^jepsen-tb]: Jepsen, June 2025.
[^se-radio]: SE Radio episode 685, Sept 2025.
