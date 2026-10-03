---
type: Event
title: CockroachDB moves source code to private development, citing AI
description: "On Sept 15 2026 Cockroach Labs said CockroachDB and Pebble would be developed privately, with the public GitHub repo kept only as a historical snapshot. It cited LLM-assisted exploit discovery and code reproduction."
event_kind: license-change
date: 2026-09-15
window: W3
impact: negative
projects: [projects/databases/cockroachdb, projects/licensing-forks/cockroachdb]
organizations: [organizations/cockroach-labs]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: crl-source
    resource: https://www.cockroachlabs.com/blog/source-code-protection/
    title: "Protecting Cockroach Labs' Source Code in the Age of AI"
  - id: crl-continuum
    resource: https://www.cockroachlabs.com/blog/continuum-announcement/
    title: "Cockroach Continuum: the Agentic Database Cloud"
  - id: sdtimes-core
    resource: https://sdtimes.com/os/cockroachdb-retires-self-hosted-core-offering-makes-enterprise-version-free-for-companies-under-10m-in-annual-revenue/
    title: "SD Times: CockroachDB retires self-hosted Core"
---

# What happened
Cockroach Labs announced that new CockroachDB and Pebble development will happen in private. The public repo stays as a historical snapshot and no longer accepts contributions. The license (CockroachDB Software License) and customer terms are unchanged, and releases, patches and community bug reporting continue. Reasons given: LLMs can "surface implementation details, internal logic, and architectural patterns" quickly, which makes exploits easier, plus uncertainty around copyright and AI-assisted functional reproduction[^crl-source]. Cockroach Continuum, an "agentic database cloud", launched the same day[^crl-continuum].

# Why it matters
This is the final step after the Nov 2024 retirement of Core[^sdtimes-core]. It also creates a new rationale, "AI makes public source risky", that other single-vendor projects could adopt.

# Outcome so far
The repo (32.5k stars) still shows CI-related commits in late Sept 2026 while the transition happens. Community reaction beyond this was not verified.

# Related
- [/projects/databases/cockroachdb.md](/projects/databases/cockroachdb.md), [/organizations/cockroach-labs.md](/organizations/cockroach-labs.md)

[^crl-source]: Cockroach Labs blog, 2026-09-15.
[^crl-continuum]: Cockroach Labs blog, 2026-09-15.
[^sdtimes-core]: SD Times, 2024.

## Additional notes (licensing-forks)
- **Where this sits in the relicensing ladder:** Apache core (to 2019) → BSL (2019–2024) → unified Enterprise license with the free Core edition retired (Nov 2024) → private development (Sept 2026). This is the first case in the period where a vendor ended **source availability**, not just OSI-open licensing. See [CockroachDB (licensing view)](/projects/licensing-forks/cockroachdb.md).
- **Link to AI-era licensing:** the "functional reproduction" rationale is the vendor-side version of the [chardet AI-rewrite relicensing](/events/2026-03-chardet-ai-rewrite-relicense.md) debate. In the same month, Valkey reported a surge in AI-found security advisories, another instance of the "AI makes bugs cheap to find" argument.

