---
type: Event
title: Lightbend relicenses Akka from Apache 2.0 to the Business Source License
description: On 2022-09-07 Lightbend announced that Akka, the main JVM actor toolkit, would move from Apache 2.0 to BSL 1.1 starting with Akka 2.7, with per-core fees for companies above $25M revenue. The community forked Akka 2.6 as Apache Pekko, which became an ASF top-level project in May 2024.
event_kind: policy
date: 2022-09-07
era: E2
impact: negative
languages: [languages/scala, languages/java]
runtimes: [runtimes/hotspot-openjdk]
ideas: [ideas/concurrency/actor-model]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: siliconangle-akka
    resource: https://siliconangle.com/2022/09/07/lightbend-says-akka-will-shift-open-source-paid-business-source-license/
    title: "SiliconANGLE: Lightbend says Akka will shift from open source to a paid Business Source License"
  - id: register-akka
    resource: https://www.theregister.com/2022/09/08/open_source_biz_sick_of
    title: "The Register: Open source biz shifts Akka to Business Source License"
  - id: petabridge-akka
    resource: https://petabridge.com/blog/lightbend-akka-license-change/
    title: "Petabridge: Lightbend's Akka License Change and Akka.NET"
  - id: pekko-tlp
    resource: https://news.apache.org/foundation/entry/apache-software-foundation-announces-new-top-level-project-apache-pekko
    title: "ASF Blog: Apache Pekko becomes a Top-Level Project (2024-05-16)"
    author: org:apache
  - id: akka-rebrand
    resource: https://akka.io/blog/lightbend-launches-akka-3-rebrands-company-as-akka
    title: "Akka: Lightbend launches Akka 3, rebrands company as Akka (2024-11-15)"
---

# What happened
On 2022-09-07 Lightbend announced that Akka would move from Apache 2.0 to the **Business Source License 1.1**, starting with Akka 2.7. Production use would need a commercial licence for companies with more than $25M annual revenue. The Register reported list prices of $1,995 per core (Standard) and $2,995 per core (Enterprise). Each release would revert to Apache 2.0 after three years.[^siliconangle-akka][^register-akka] CEO and Akka creator Jonas Bonér argued that large companies were profiting from Akka without contributing back. Critics called per-core pricing for a library "a non-starter".[^register-akka]

Petabridge said its separate Akka.NET port was unaffected and stayed on Apache 2.0.[^petabridge-akka] The community forked the last Apache release line (Akka 2.6.x) as **Apache Pekko**. Pekko entered the ASF incubator and graduated to a top-level project on 2024-05-16, with Java and Scala APIs and more than 50 released libraries.[^pekko-tlp] In November 2024 Lightbend renamed itself "Akka" and relaunched the product as the Akka 3 platform, with an SDK, serverless and bring-your-own-cloud hosting.[^akka-rebrand]

# Why it matters
- It is the clearest case in this period of a **core language-ecosystem library** changing licence. The fork appeared within months, which shows the community can and will fork a relicensed library.
- It sped up the decline of the actor-library approach on the JVM, as Java's virtual threads (2023) offered scalable concurrency without a third-party runtime.
- It hurt Scala's "reactive" positioning, which had been closely tied to Akka.

# Related
- [Actor model](/ideas/concurrency/actor-model.md), [Scala](/languages/scala.md), [Java](/languages/java.md)
- [Virtual threads](/ideas/concurrency/virtual-threads.md)

[^siliconangle-akka]: SiliconANGLE — https://siliconangle.com/2022/09/07/lightbend-says-akka-will-shift-open-source-paid-business-source-license/
[^register-akka]: The Register — https://www.theregister.com/2022/09/08/open_source_biz_sick_of
[^petabridge-akka]: Petabridge — https://petabridge.com/blog/lightbend-akka-license-change/
[^pekko-tlp]: ASF Blog: Apache Pekko TLP — https://news.apache.org/foundation/entry/apache-software-foundation-announces-new-top-level-project-apache-pekko
[^akka-rebrand]: Akka: Lightbend rebrands as Akka — https://akka.io/blog/lightbend-launches-akka-3-rebrands-company-as-akka
