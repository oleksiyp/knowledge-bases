---
type: Idea
title: Actor model (isolated processes communicating by messages)
description: Concurrency built from isolated units of state that interact only by asynchronous messages, often with supervision. Over 2018–2026 it was mixed. It succeeded where a runtime or platform owns it (BEAM, Orleans, Cloudflare Durable Objects, Ray, Swift's built-in actors). As a JVM library it lost momentum after Akka's 2022 move to the BSL and the Apache Pekko fork, and as a standalone language bet (Pony) it stalled.
area: concurrency
tags: [actors, beam, otp, akka, pekko, orleans, virtual-actors, swift, dapr, durable-objects, pony]
outcome: mixed
maturity_2026: adopted
origin_year: 1973
mainstream_year: 2021
languages: [languages/erlang, languages/elixir, languages/gleam, languages/scala, languages/swift, languages/csharp, languages/pony]
runtimes: [runtimes/beam, runtimes/dotnet-clr, runtimes/hotspot-openjdk]
related_ideas: [ideas/concurrency/structured-concurrency, ideas/concurrency/data-race-safety-in-types, ideas/concurrency/virtual-threads, ideas/concurrency/async-await-and-function-coloring, ideas/platforms-and-portability/edge-isolates]
era_momentum: { E1: flat, E2: up, E3: down, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: otp24-highlights
    resource: https://www.erlang.org/blog/my-otp-24-highlights/
    title: "Erlang/OTP blog: My OTP 24 highlights"
    author: org:ericsson
  - id: otp28-highlights
    resource: https://www.erlang.org/blog/highlights-otp-28/
    title: "Erlang/OTP blog: Erlang/OTP 28 Highlights (priority messages)"
    author: org:ericsson
  - id: register-akka
    resource: https://www.theregister.com/2022/09/08/open_source_biz_sick_of
    title: "The Register: Open source biz shifts Akka to Business Source License"
  - id: siliconangle-akka
    resource: https://siliconangle.com/2022/09/07/lightbend-says-akka-will-shift-open-source-paid-business-source-license/
    title: "SiliconANGLE: Lightbend says Akka will shift from open source to a paid Business Source License"
  - id: pekko-tlp
    resource: https://news.apache.org/foundation/entry/apache-software-foundation-announces-new-top-level-project-apache-pekko
    title: "ASF Blog: Apache Software Foundation Announces New Top-Level Project Apache Pekko (2024-05-16)"
    author: org:apache
  - id: akka-rebrand
    resource: https://akka.io/blog/lightbend-launches-akka-3-rebrands-company-as-akka
    title: "Akka: Lightbend launches Akka 3 and rebrands company as Akka (2024-11-15)"
  - id: petabridge-akka
    resource: https://petabridge.com/blog/lightbend-akka-license-change/
    title: "Petabridge: Lightbend's Akka License Change and Akka.NET"
  - id: orleans-overview
    resource: https://learn.microsoft.com/en-us/dotnet/orleans/overview
    title: "Microsoft Learn: Orleans overview"
    author: org:microsoft
  - id: orleans-nuget
    resource: https://www.nuget.org/packages/Microsoft.Orleans.Runtime
    title: "NuGet: Microsoft.Orleans.Runtime (version history: 9.0 Nov 2024, 10.0 Jan 2026)"
  - id: se-0306
    resource: https://github.com/swiftlang/swift-evolution/blob/main/proposals/0306-actors.md
    title: "Swift Evolution SE-0306: Actors"
  - id: swift62-approachable
    resource: https://mjtsai.com/blog/2025/11/03/swift-6-2-approachable-concurrency/
    title: "Michael Tsai: Swift 6.2: Approachable Concurrency"
  - id: dapr-grad
    resource: https://www.prnewswire.com/news-releases/cloud-native-computing-foundation-announces-dapr-graduation-302301124.html
    title: "CNCF: Cloud Native Computing Foundation Announces Dapr Graduation (Nov 2024)"
  - id: do-docs
    resource: https://developers.cloudflare.com/durable-objects/concepts/what-are-durable-objects/
    title: "Cloudflare docs: What are Durable Objects?"
  - id: ray-1
    resource: https://www.anyscale.com/blog/announcing-ray-1-0
    title: "Anyscale: Announcing Ray 1.0"
  - id: ray-actors
    resource: https://docs.anyscale.com/get-started/ray-basics
    title: "Anyscale docs: Ray basics (tasks and actors)"
  - id: wallaroo-rust
    resource: https://wallarooai.medium.com/why-wallaroo-moved-from-pony-to-rust-292e7339fc34
    title: "Wallaroo: Why Wallaroo Moved From Pony To Rust"
  - id: discord-rust-elixir
    resource: https://discord.com/blog/using-rust-to-scale-elixir-for-11-million-concurrent-users
    title: "Discord: Using Rust to Scale Elixir for 11 Million Concurrent Users"
---

# Summary
**Verdict: mixed.** The actor model **succeeded when a runtime or platform owns it**. Examples are BEAM processes (Erlang, Elixir, Gleam), Microsoft Orleans' virtual actors, Cloudflare Durable Objects, Ray actors for ML workloads, Dapr actors, and the actors built into Swift 5.5 in 2021.[^se-0306][^orleans-overview][^do-docs][^ray-actors][^dapr-grad] It **lost momentum as a general-purpose JVM library**. When Lightbend moved Akka from Apache 2.0 to the Business Source License in September 2022 (about $2k per core for large companies), the community forked it as Apache Pekko, a top-level ASF project from May 2024. Lightbend then rebranded itself as "Akka" and pivoted to a hosted platform.[^register-akka][^pekko-tlp][^akka-rebrand] Meanwhile Java's [virtual threads](/ideas/concurrency/virtual-threads.md) and [structured concurrency](/ideas/concurrency/structured-concurrency.md) gave ordinary blocking code most of the scalability that actors had promised. As the core of a new standalone language, actors stalled: Pony's flagship user, Wallaroo, rewrote in Rust.[^wallaroo-rust]

# The idea
Hewitt (1973) proposed actors. Erlang (1986) made them practical, adding preemptive scheduling, per-process heaps and supervision trees with "let it crash" recovery. Each actor owns its state, handles one message at a time, and can create other actors or send them messages. Data races cannot happen because nothing is shared, and failure is isolated and handled by supervisors. The *virtual actor* variant (Orleans, about 2014) makes actors always addressable: the runtime activates them on demand and places them across a cluster. Durable Objects and Dapr actors use the same idea.[^orleans-overview][^do-docs]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020-09 | Ray 1.0 (actors as stateful Python workers) [^ray-1] | + |
| E2 | 2021-05-12 | OTP 24 JIT and process aliases (EEP-53) improve BEAM actors [^otp24-highlights] | + |
| E2 | 2021-09 | Swift 5.5 ships language-level `actor` types (SE-0306) [^se-0306] | + |
| E2 | 2022-09-07 | Akka relicensed from Apache 2.0 to BSL 1.1 [^siliconangle-akka][^register-akka] | − |
| E3 | 2024-05-16 | Apache Pekko (Akka 2.6 fork) graduates to a top-level ASF project [^pekko-tlp] | mixed |
| E4 | 2024-11 | Dapr (with virtual actors) graduates CNCF; Orleans 9.0 released [^dapr-grad][^orleans-nuget] | + |
| E4 | 2024-11-15 | Lightbend renames itself Akka and launches the Akka 3 platform [^akka-rebrand] | mixed |
| E4 | 2025-05-21 | OTP 28 adds opt-in priority messages [^otp28-highlights] | + |
| E4 | 2025-09 | Swift 6.2 "approachable concurrency": optional main-actor-by-default isolation [^swift62-approachable] | mixed |
| E4 | 2026-01 | Orleans 10.0 [^orleans-nuget] | + |

# Where it succeeded
- **BEAM.** Actors are the only concurrency primitive there, and the runtime enforces isolation. Discord runs 11M concurrent users on Elixir, with Rust NIFs for hot data structures.[^discord-rust-elixir] See [BEAM](/runtimes/beam.md).
- **Virtual actors in managed platforms.** Orleans kept shipping majors (9.0 Nov 2024, 10.0 Jan 2026).[^orleans-nuget] Dapr graduated CNCF with actors as a building block.[^dapr-grad] Cloudflare's Durable Objects are single-threaded stateful objects with attached storage. They are essentially actors sold as infrastructure.[^do-docs]
- **ML infrastructure.** Ray uses actors as stateful workers for serving models and long-lived resources.[^ray-actors]
- **Language-level actors in Swift.** `actor` types give compile-time isolation checking, and `@MainActor` became the standard way to express UI-thread confinement.[^se-0306]

# Where it failed or stalled
- **Akka on the JVM.** The BSL switch, priced at $1,995–$2,995 per core for companies over $25M revenue, pushed open-source users to Pekko. Petabridge's Akka.NET stayed on Apache 2.0.[^register-akka][^petabridge-akka] The ecosystem split, and the company rebranded around a managed platform.[^akka-rebrand] Scala's actor-centred "reactive" era of the 2010s faded. See [Scala](/languages/scala.md).
- **Swift's actor ergonomics.** Swift 6's strict isolation checking drew heavy complaints. Swift 6.2 responded by letting modules default to main-actor isolation and by keeping async functions on the caller's actor. In effect it walked back some of the "actors everywhere" model for app code.[^swift62-approachable] See [data-race safety in types](/ideas/concurrency/data-race-safety-in-types.md).
- **Pony.** Its reference capabilities plus actors were elegant, but its main commercial user moved to Rust for ecosystem and hiring reasons.[^wallaroo-rust] See [Pony](/languages/pony.md).

# Why
1. **Who owns the runtime decides the outcome.** Actors need scheduling, mailboxes, location transparency and supervision. Where the VM or cloud platform provides these (BEAM, Orleans, Durable Objects), developers get the benefits without extra overhead. As a library on a thread-based VM (Akka), actors compete with the platform's native model. The JVM's native answer became virtual threads.
2. **Licensing shocks hurt libraries more than languages.** Akka was infrastructure inside many products (Play, Lagom and many Scala/Java services). A per-core licence fee made it a liability, and a fork appeared within months.[^register-akka][^pekko-tlp]
3. **Actors are a bad fit for request/response code.** Most business code is "call a service, await the result". Async/await and virtual threads express that directly, while actors force message protocols. That is why Swift moved toward default isolation and away from making every type an actor.[^swift62-approachable]
4. **Stateful serverless revived actors under other names.** Durable Objects and virtual actors in Dapr and Orleans succeeded by hiding the actor vocabulary behind "objects with an ID".[^do-docs][^dapr-grad]

# Lessons
- An abstraction succeeds when the platform enforces it. A library cannot guarantee isolation on a shared-memory VM.
- A single-vendor core library is a licensing risk. Pekko shows the community can and will fork.
- Rebranding actors as "stateful serverless" made them more popular than they had ever been under the actor name.

# Related
- [BEAM](/runtimes/beam.md), [Erlang](/languages/erlang.md), [Elixir](/languages/elixir.md), [Gleam](/languages/gleam.md), [Pony](/languages/pony.md), [Scala](/languages/scala.md), [Swift](/languages/swift.md)
- [Structured concurrency](/ideas/concurrency/structured-concurrency.md), [Virtual threads](/ideas/concurrency/virtual-threads.md), [Data-race safety in types](/ideas/concurrency/data-race-safety-in-types.md), [Edge isolates](/ideas/platforms-and-portability/edge-isolates.md)
- [Event: Akka relicensed to BSL](/events/2022-09-akka-bsl-relicense.md)

[^otp24-highlights]: Erlang/OTP blog: My OTP 24 highlights — https://www.erlang.org/blog/my-otp-24-highlights/
[^otp28-highlights]: Erlang/OTP 28 Highlights — https://www.erlang.org/blog/highlights-otp-28/
[^register-akka]: The Register: Open source biz shifts Akka to Business Source License — https://www.theregister.com/2022/09/08/open_source_biz_sick_of
[^siliconangle-akka]: SiliconANGLE: Lightbend says Akka will shift to BSL — https://siliconangle.com/2022/09/07/lightbend-says-akka-will-shift-open-source-paid-business-source-license/
[^pekko-tlp]: ASF: Apache Pekko becomes a Top-Level Project — https://news.apache.org/foundation/entry/apache-software-foundation-announces-new-top-level-project-apache-pekko
[^akka-rebrand]: Akka: Lightbend launches Akka 3, rebrands as Akka — https://akka.io/blog/lightbend-launches-akka-3-rebrands-company-as-akka
[^petabridge-akka]: Petabridge: Lightbend's Akka License Change and Akka.NET — https://petabridge.com/blog/lightbend-akka-license-change/
[^orleans-overview]: Microsoft Learn: Orleans overview — https://learn.microsoft.com/en-us/dotnet/orleans/overview
[^orleans-nuget]: NuGet: Microsoft.Orleans.Runtime — https://www.nuget.org/packages/Microsoft.Orleans.Runtime
[^se-0306]: Swift Evolution SE-0306: Actors — https://github.com/swiftlang/swift-evolution/blob/main/proposals/0306-actors.md
[^swift62-approachable]: Michael Tsai: Swift 6.2: Approachable Concurrency — https://mjtsai.com/blog/2025/11/03/swift-6-2-approachable-concurrency/
[^dapr-grad]: CNCF announces Dapr graduation — https://www.prnewswire.com/news-releases/cloud-native-computing-foundation-announces-dapr-graduation-302301124.html
[^do-docs]: Cloudflare: What are Durable Objects? — https://developers.cloudflare.com/durable-objects/concepts/what-are-durable-objects/
[^ray-1]: Anyscale: Announcing Ray 1.0 — https://www.anyscale.com/blog/announcing-ray-1-0
[^ray-actors]: Anyscale: Ray basics — https://docs.anyscale.com/get-started/ray-basics
[^wallaroo-rust]: Wallaroo: Why Wallaroo Moved From Pony To Rust — https://wallarooai.medium.com/why-wallaroo-moved-from-pony-to-rust-292e7339fc34
[^discord-rust-elixir]: Discord: Using Rust to Scale Elixir for 11 Million Concurrent Users — https://discord.com/blog/using-rust-to-scale-elixir-for-11-million-concurrent-users
