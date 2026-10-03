---
type: Event
title: Oracle–Eclipse trademark deal forces Jakarta EE off the javax namespace
description: "In May 2019 the Eclipse Foundation said its agreement with Oracle meant Jakarta EE could use the javax package namespace only 'as is', never evolve it. This forced the javax.* to jakarta.* rename in Jakarta EE 9 (Dec 2020), a break across the whole enterprise Java ecosystem."
event_kind: governance
date: 2019-05-03
era: E1
impact: negative
languages: [languages/java]
runtimes: [runtimes/hotspot-openjdk]
ideas: [ideas/tooling-and-ecosystem/language-editions-and-evolution]
tags: [java, jakarta-ee, eclipse-foundation, oracle, trademark, migration]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: infoq
    resource: https://www.infoq.com/news/2019/05/end-of-javax-package/
    title: "InfoQ: The end of the javax package namespace"
  - id: eclipse
    resource: https://www.eclipse.org/community/eclipse_newsletter/2019/may/jakartafuture.php
    title: "Eclipse Newsletter: Jakarta Going Forward"
    author: org:eclipse-foundation
  - id: spring-boot-3
    resource: https://spring.io/blog/2022/11/24/spring-boot-3-0-goes-ga/
    title: "Spring Blog: Spring Boot 3.0 Goes GA"
    author: org:spring
---

# What happened
Oracle had transferred Java EE to the Eclipse Foundation in 2017. After 18 months of talks, Mike Milinkovich announced in early May 2019 that Oracle kept the Java trademarks. The `javax` package namespace could be used in Jakarta EE specifications only "as is", and no changes were allowed.[^infoq][^eclipse] Any evolution of the APIs therefore required a new namespace. Jakarta EE 9 (December 2020) did almost nothing except rename `javax.*` to `jakarta.*`.

# Why it matters
It is a governance failure with a large migration cost. Every servlet container, JPA provider and framework had to ship a breaking release, and the ecosystem split into `javax` and `jakarta` worlds for years. Spring Framework 6 and Spring Boot 3.0 (Nov 2022) moved to Jakarta EE 9+ as part of their baseline, which dragged most of the market across.[^spring-boot-3] The lesson matches other cases where a single vendor controlled names or licences ([Oracle licensing](/events/2019-01-oracle-java-8-public-updates-end.md)). Owning trademarks gave Oracle power over the ecosystem even after giving away the code.

# Related
- [Java](/languages/java.md)
- [Language editions and evolution](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md)

[^infoq]: InfoQ, May 2019 — https://www.infoq.com/news/2019/05/end-of-javax-package/
[^eclipse]: Eclipse: Jakarta Going Forward — https://www.eclipse.org/community/eclipse_newsletter/2019/may/jakartafuture.php
[^spring-boot-3]: Spring Boot 3.0 Goes GA — https://spring.io/blog/2022/11/24/spring-boot-3-0-goes-ga/
