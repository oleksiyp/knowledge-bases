---
type: Event
title: MariaDB reverses quiet removal of Galera from community server
description: "In Feb 2026 Galera Cluster dependencies vanished undocumented from MariaDB community binaries. After an outcry MariaDB committed (Mar 9 2026) to keep Galera in Community Server 12.3, but questions returned in July 2026."
event_kind: governance
date: 2026-03-09
window: W9
impact: mixed
projects: [projects/databases/mariadb]
organizations: [organizations/mariadb]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: reg-galera-backdown
    resource: https://www.theregister.com/software/2026/03/09/mariadb-backs-down-on-galera-removal-after-community-outcry/5224684
    title: "The Register: MariaDB backs down on Galera removal after community outcry"
  - id: reg-galera-again
    resource: https://www.theregister.com/databases/2026/07/30/mariadb-again-faces-questions-over-galeras-open-source-future/5280975
    title: "The Register: MariaDB again faces questions over Galera's open source future"
  - id: infoworld-codership
    resource: https://www.infoworld.com/article/3999634/mariadbs-acquisition-of-codership-why-enterprises-should-care.html
    title: "InfoWorld: MariaDB's acquisition of Codership"
---

# What happened
MariaDB plc bought Codership, the Galera maker, in 2025[^infoworld-codership]. In Feb 2026 Galera dependencies disappeared from MariaDB Community binaries without documentation. After community pushback, co-founder Max Mether said "now is not the time for a major change", and MariaDB committed to keep Galera libraries (GPLv2) in Community Server 12.3[^reg-galera-backdown].

# Why it matters
Galera is the de-facto open-source high-availability layer for MariaDB and MySQL. Removing it would have pushed clustering users toward proprietary products[^reg-galera-backdown].

# Outcome so far
In July 2026 the issue resurfaced. MySQL Galera support ends Sept 30 2026, and MariaDB is developing proprietary replication for enterprise customers on a "distinct development path". Percona offers XtraDB Cluster with its own Galera fork as an alternative[^reg-galera-again].

# Related
- [/projects/databases/mariadb.md](/projects/databases/mariadb.md), [/projects/databases/mysql.md](/projects/databases/mysql.md)

[^reg-galera-backdown]: The Register, 2026-03-09.
[^reg-galera-again]: The Register, 2026-07-30.
[^infoworld-codership]: InfoWorld, 2025.
