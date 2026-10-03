---
type: OSS Project
title: CockroachDB
description: "Distributed SQL database that retired its free 'Core' edition (Nov 2024, free only under $10M revenue) and then on Sept 15, 2026 moved all development to private repos citing AI risks — the furthest retreat from open source of any major database, ending even source availability for new releases."
resource: https://github.com/cockroachdb/cockroach
tags: [database, distributed-sql, source-available, proprietary, relicensing]
domain: licensing-forks
license: "CockroachDB Software License (proprietary, source-available)"
license_history: ["Apache-2.0 core + CCL (to 2019)", "BUSL-1.1 core (2019-2024)", "Unified CockroachDB Enterprise license; Core retired (24.3, 2024-11-18)", "Development moved to private repos; public repo frozen as snapshot (2026-09-15)"]
governance: single-vendor
steward: Cockroach Labs
backing_orgs: [organizations/cockroach-labs]
metrics:
  github_stars: { value: 32539, as_of: 2026-10-03 }
oss_verdict: dead
business_verdict: stable
momentum_by_window: { W3: down, W6: flat, W9: flat, W12: flat, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: crdb-license
    resource: https://www.cockroachlabs.com/blog/enterprise-license-announcement/
    title: "Cockroach Labs: Enterprise license announcement (2024-08-15)"
  - id: crdb-gh
    resource: https://github.com/cockroachdb/cockroach
    title: CockroachDB GitHub repository
  - id: crdb-private
    resource: https://www.cockroachlabs.com/blog/source-code-protection/
    title: "Cockroach Labs: Protecting Cockroach Labs' source code in the age of AI (2026-09-15)"
  - id: crdb-continuum
    resource: https://finance.yahoo.com/technology/ai/articles/cockroach-labs-launches-cockroach-continuum-130000617.html
    title: "Cockroach Labs launches Cockroach Continuum (2026-09-15)"
  - id: crdb-continuum-prn
    resource: https://www.prnewswire.com/news-releases/cockroach-labs-launches-cockroach-continuum-the-agentic-database-cloud-for-running-the-entire-database-estate-as-one-elastic-system-302878610.html
    title: "PR Newswire: Cockroach Labs launches Cockroach Continuum (2026-09-15)"
  - id: crdb-series-f
    resource: https://www.cockroachlabs.com/news/press-release-series-f-funding/
    title: "Cockroach Labs: $278M Series F at $5B valuation (Dec 2021)"
  - id: blind-layoffs
    resource: https://www.teamblind.com/layoffs/company/cockroach-labs
    title: "Blind layoff tracker: Cockroach Labs (lists 50 layoffs on 2026-09-02; unconfirmed)"
---

# Summary
CockroachDB went further from open source than any other major database in this period. On Aug 15, 2024 Cockroach Labs announced it would retire the free self-hosted "Core" edition. From v24.3 (effective Nov 18, 2024, and applied to patch releases of 23.1 and later) all self-hosted users run a single Enterprise build. It is free only for individuals, students, academics and businesses under $10M annual revenue; everyone else pays. The source stays publicly available.[^crdb-license] No notable community fork emerged: the BSL-era code was already non-open, and the distributed-SQL alternatives (YugabyteDB, TiDB) were already in place. On Sept 15, 2026 the company went further. New CockroachDB and Pebble releases are now developed in private repositories, and the public GitHub repo is a frozen historical snapshot. The reasons given were that LLMs can surface implementation details "at a scale and speed that fundamentally changes the security calculus" and that code can now be "functionally reproduced" cheaply.[^crdb-private] The post, by co-founder Peter Mattis, cites the "Mythos" incident as an example of AI-accelerated vulnerability discovery; the license itself and pricing are unchanged, and some Go libraries (errors, apd, redact, datadriven) stay public.[^crdb-private] The same day it launched "Cockroach Continuum", an "agentic database cloud".[^crdb-continuum][^crdb-continuum-prn] Verdict: OSS dead (not even source-available going forward), business stable (no verified financials).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| (pre) | 2024-08-15 | Announces end of Core edition; unified Enterprise license with <$10M free tier[^crdb-license] | OSS | − |
| W24 | 2024-11-18 | v24.3: new license takes effect (retroactive to 23.1+ patches)[^crdb-license] | OSS | − |
| W3 | 2026-09-02 | ~50 layoffs reported (Blind tracker only; unconfirmed)[^blind-layoffs] | Business | − |
| W3 | 2026-09-15 | Development moved to private repos, citing AI-era security and copyright risks; public repo frozen[^crdb-private] | OSS | − |
| W3 | 2026-09-15 | Cockroach Continuum "agentic database cloud" launched[^crdb-continuum] | Business | + |

# OSS successes
- Small companies can still self-host the binaries for free. Some Go libraries remain open source, and the historical code remains readable.[^crdb-license][^crdb-private]

# OSS failures / risks
- No OSI-approved edition is left, and large companies must pay to run it in production.[^crdb-license]
- Since Sept 2026 new code is not even source-available, which ends outside review of the code.[^crdb-private]
- Applying the license retroactively to patch releases of older versions upset users who had planned around BSL change dates.[^crdb-license]

# Business successes
- Moving free Core users onto a revenue-gated license turns large self-hosted deployments into sales leads. Revenue impact not disclosed.

# Business failures / risks
- No new funding since the $278M Series F at a $5B valuation (Dec 2021); no 2025–2026 revenue figure from the company.[^crdb-series-f]
- The Blind layoff tracker lists about 50 layoffs on 2026-09-02, two weeks before the private-repo move. No press or company confirmation was found.[^blind-layoffs]

# By window
## W3
- Development goes private (Sept 15, 2026); Continuum launch the same day.[^crdb-private][^crdb-continuum]
## W6
- No notable licensing events found.
## W9
- No notable licensing events found.
## W12
- No notable events found.
## W24
- License takes effect with v24.3 (Nov 18, 2024).[^crdb-license]

# Lessons
- AI is now given as a reason for closing source entirely, both because LLMs make bugs cheaper to find and because they make reimplementation cheaper. Expect other source-available vendors to follow.
- When a project has already been source-available (BSL) for years, going fully proprietary causes little fork risk, because there is no recent open codebase to fork and no large external contributor base.
- Revenue-threshold free tiers ("free under $10M") are becoming the standard compromise.

# Related
- [Cockroach Labs](/organizations/cockroach-labs.md)
- [CockroachDB development goes private](/events/2026-09-cockroachdb-source-goes-private.md)
- [CockroachDB (databases view)](/projects/databases/cockroachdb.md)
- [CockroachDB ends Core edition](/events/2024-11-cockroachdb-ends-core-edition.md)
- [Akka](/projects/licensing-forks/akka.md) — another BSL vendor

[^crdb-license]: Cockroach Labs blog — https://www.cockroachlabs.com/blog/enterprise-license-announcement/
[^crdb-gh]: CockroachDB GitHub — https://github.com/cockroachdb/cockroach
[^crdb-private]: Cockroach Labs blog — https://www.cockroachlabs.com/blog/source-code-protection/
[^crdb-continuum-prn]: PR Newswire — https://www.prnewswire.com/news-releases/cockroach-labs-launches-cockroach-continuum-the-agentic-database-cloud-for-running-the-entire-database-estate-as-one-elastic-system-302878610.html
[^crdb-series-f]: Cockroach Labs — https://www.cockroachlabs.com/news/press-release-series-f-funding/
[^blind-layoffs]: Blind layoff tracker — https://www.teamblind.com/layoffs/company/cockroach-labs
[^crdb-continuum]: Cockroach Labs press release (via Yahoo Finance) — https://finance.yahoo.com/technology/ai/articles/cockroach-labs-launches-cockroach-continuum-130000617.html
