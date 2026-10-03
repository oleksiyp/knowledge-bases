---
type: Event
title: OurSQL Foundation launched; Oracle promises MySQL governance reform
description: "After a Feb 2026 open letter, MySQL ecosystem vendors (Percona, PlanetScale, PingCAP, Alibaba, VillageSQL) launched the OurSQL Foundation (May 26 2026). Oracle answered (June 26 2026) with a technical steering committee and public roadmap discussions, which critics call advisory only."
event_kind: governance
date: 2026-05-26
window: W6
impact: mixed
projects: [projects/databases/mysql, projects/databases/vitess, projects/databases/tidb]
organizations: [organizations/planetscale]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: reg-letter
    resource: https://www.theregister.com/2026/02/17/mysql_foundation_oracle_letter/
    title: "The Register: Dear Oracle, we need to talk about the future of MySQL (2026-02-17)"
  - id: heise-letter
    resource: https://www.heise.de/en/news/Can-MySQL-still-be-saved-Open-letter-to-Oracle-11181146.html
    title: "heise: Can MySQL still be saved? Open letter to Oracle"
  - id: reg-oursql
    resource: https://www.theregister.com/databases/2026/05/26/mysql-faithful-launch-oursql-foundation-to-keep-oracle-honest/5246451
    title: "The Register: MySQL faithful launch OurSQL Foundation to keep Oracle honest (2026-05-26)"
  - id: reg-governance
    resource: https://www.theregister.com/databases/2026/06/26/oracle-promises-to-open-up-mysql-governance-but-the-community-wants-guarantees/5263106
    title: "The Register: Oracle promises to open up MySQL governance (2026-06-26)"
  - id: infoworld-push
    resource: https://www.infoworld.com/article/4134394/community-push-intensifies-to-free-mysql-from-oracles-control-amid-stagnation-fears.html
    title: "InfoWorld: Community push intensifies to free MySQL from Oracle's control"
---

# What happened
- **Feb 2026:** Nearly 200 developers, users and companies, led by Percona, signed an open letter after community summits in San Francisco and Brussels. They asked Oracle to co-create a non-profit MySQL foundation and loosen trademark control. They noted only one public commit since Dec 7 2025[^heise-letter][^reg-letter][^infoworld-push].
- **May 26 2026:** The OurSQL Foundation launched with Percona (Zaitsev, Tkachenko), PlanetScale, PingCAP, VillageSQL, Alibaba and independent consultants[^reg-oursql].
- **June 26 2026:** Oracle announced a technical steering committee (Oracle, AWS, Google Cloud; Microsoft absent), public roadmap discussions, contributor summits and GitHub collaboration[^reg-governance].

# Why it matters
It is the first organised attempt to move a major Oracle-owned open-source database toward neutral governance without forking it.

# Outcome so far
Zaitsev called it "a step in the right direction" but noted the community role is advisory and nothing is legally binding[^reg-governance]. Public GitHub activity on mysql-server resumed in Sept 2026 (see [/projects/databases/mysql.md](/projects/databases/mysql.md)).

# Related
- [/events/2025-09-oracle-mysql-layoffs.md](/events/2025-09-oracle-mysql-layoffs.md), [/projects/databases/mysql.md](/projects/databases/mysql.md), [/projects/databases/vitess.md](/projects/databases/vitess.md), [/projects/databases/tidb.md](/projects/databases/tidb.md)

[^reg-letter]: The Register, 2026-02-17.
[^heise-letter]: heise online, Feb 2026.
[^reg-oursql]: The Register, 2026-05-26.
[^reg-governance]: The Register, 2026-06-26.
[^infoworld-push]: InfoWorld, Feb 2026.
