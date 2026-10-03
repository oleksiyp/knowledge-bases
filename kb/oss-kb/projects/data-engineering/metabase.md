---
type: OSS Project
title: Metabase
description: Widely deployed AGPL/commercial BI tool (~49.5k stars) pivoting to AI analytics; hit by a cluster of critical CVEs (SQL injection to admin, H2 file read/write) in July–August 2026.
resource: https://github.com/metabase/metabase
tags: [bi, agpl-3.0, open-core, security-incident]
domain: data-engineering
license: "AGPL-3.0 (outside enterprise/) + Metabase Commercial License (enterprise/)"
license_history: ["AGPL-3.0 core + Metabase Commercial License for enterprise code"]
governance: company-led-open-core
steward: Metabase Inc.
backing_orgs: []
metrics:
  github_stars: { value: 49517, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: down, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:19:24Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: mb-gh
    resource: https://github.com/metabase/metabase
    title: Metabase GitHub repository (v0.63.x / v0.58.x releases)
    last_modified: 2026-10-03T00:00:00Z
  - id: mb-adv
    resource: https://github.com/metabase/metabase/security/advisories
    title: "Metabase GitHub security advisories (CVE-2026-72898, -72899, -72900, H2 file read/write)"
  - id: citybiz-mb
    resource: https://www.citybiz.co/article/127233/metabase-raises-30m-in-series-b/
    title: "Citybiz: Metabase Raises $30M in Series B (2021, led by Insight Partners)"
  - id: mb-blog
    resource: https://www.metabase.com/blog
    title: Metabase blog (security updates Aug 2026; AI posts Jun 2026)
---

# Summary
Metabase stays one of the most-used open-source BI tools (49.5k stars) with parallel release trains (0.58.x LTS-like and 0.63.x)[^mb-gh]. In June 2026 it launched AI features ("AI for everyone"), an OpenAI Codex integration and a Claude skill[^mb-blog]. In July–August 2026 it disclosed several critical advisories: arbitrary file read/write via H2 built-ins (2026-07-12), SQL injection via an unauthenticated endpoint and via public dashboards leading to admin access (CVE-2026-72898/72899, 2026-08-06), a data-leak medium issue, and a multi-issue advisory on 2026-08-11[^mb-adv][^mb-blog]. Its last announced round was a $30M Series B led by Insight Partners in 2021[^citybiz-mb]; no revenue disclosures or new rounds were found for 2025–2026. Verdict: stable product, damaged security reputation in W3.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W6 | 2026-06-09 | "AI for everyone" product launch[^mb-blog] | Business | + |
| W3 | 2026-07-12 | Critical: arbitrary file read/write via H2 functions[^mb-adv] | OSS | − |
| W3 | 2026-08-06 | Critical SQLi CVEs leading to admin access; "upgrade now" notice[^mb-adv][^mb-blog] | OSS | − |
| W3 | 2026-08-27 | Post-mortem "August 2026 Security Vulnerability: What happened?"[^mb-blog] | OSS | ± |

# OSS successes
- Rapid disclosure and patching across release trains[^mb-adv][^mb-gh].

# OSS failures / risks
- Multiple critical pre-auth/public-link vulnerabilities in one quarter[^mb-adv].

# Business successes
- AI integrations with major model vendors[^mb-blog].

# Business failures / risks
- Security incidents threaten trust among self-hosters.

# By window
## W3
- Critical CVE cluster and post-mortem[^mb-adv][^mb-blog].
## W6
- AI launch[^mb-blog].
## W9
- Embedding simplification (Jan 2026)[^mb-blog].
## W12
- No notable events found.
## W24
- Community Data Stack Report 2025 (Sept 2025)[^mb-blog].

# Lessons
- BI tools that execute user-influenced SQL are high-value targets; public sharing features widen the attack surface.

# Related
- [Apache Superset](/projects/data-engineering/apache-superset.md), [Metabase CVEs](/events/2026-08-metabase-critical-sql-injection-cves.md)

[^mb-gh]: Metabase GitHub releases.
[^mb-adv]: Metabase GitHub security advisories.
[^mb-blog]: Metabase blog.
[^citybiz-mb]: Citybiz, 2021.
