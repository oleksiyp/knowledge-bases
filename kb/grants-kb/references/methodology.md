---
type: Reference
title: Methodology and how to use this knowledge base
description: How grant programs were researched and classified, what each field means, and how to use the viewer to find funding.
tags: [methodology, meta]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: okf-spec
    resource: https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md
    title: Open Knowledge Format (OKF) v0.2 specification
---

# Scope

The bundle covers **non-dilutive funding for software work**:

- **Grants**: open-source maintenance and security, research software, public-interest
  technology, AI and AI-safety tooling, web3 ecosystems, and government R&D grants for software
  companies.
- **Grant-like support**: fellowships, stipends, retroactive public-goods funding, and cloud or
  compute credits.
- **R&D tax credits**: included as reference points, marked `funding_type: tax-credit`.

It does not cover equity investment. Accelerators are included only when they are equity-free.

The bundle follows OKF v0.2.[^okf-spec] Concepts are agent-researched (`generated.by:
claude-code/…`) and **unverified** unless a `verified` entry is present. Always confirm the
current call text on the funder's site before applying.

# Concept types

| Type | Location | What it is |
|---|---|---|
| Grant Program | `/programs/<category>/` | A recurring funding program: eligibility, amounts, process, status, fit |
| Funding Call | `/calls/` | One concrete call or deadline. `date` is the deadline, so the **Timeline** view is a deadline calendar |
| Funder | `/funders/` | The organization behind one or more programs, and how it changed in 2025–26 |
| Category Guide | `/categories/` | Landscape, comparison table and best options by applicant profile for one category |
| Guide | `/guides/` | Cross-category guides: where to start for your situation |

# Fields you can filter on (Explore)

| Field | Values |
|---|---|
| `funder_type` | government, eu, foundation, corporate, nonprofit, crypto-foundation, community, university |
| `region` | Where applicants may be based: global, eu, us, uk, de, nl, fr, pl, ua, … |
| `applicant_types` | individual, oss-project, nonprofit, company, startup, academic |
| `software_focus` | oss-infrastructure, security, research-software, internet-freedom, digital-public-goods, ai, ai-safety, web3, accessibility, developer-tools, startup-rnd, civic-tech, climate, health |
| `funding_type` | grant, fellowship, stipend, retroactive, credits, prize, contract, tax-credit |
| `oss_required` | yes, no, preferred |
| `application_model` | rolling, periodic-calls, annual, invite-only, nomination, closed |
| `program_status` | open, rolling, upcoming, closed-between-rounds, paused, discontinued. Named so as not to clash with OKF's own `status` (draft, stable, deprecated) |
| `effort_to_apply` | low, medium, high (a judgement based on form length and review stages) |

Amounts are given as written by the funder (`amount_text`), plus approximate USD bounds
(`amount_min_usd`, `amount_max_usd`) for comparison.

# How to use the viewer

- **Explore**, filtered to `type: Grant Program`: combine `region`, `applicant_types` and
  `program_status` (open or rolling) to get a shortlist for your situation.
- **Timeline**: shows every Funding Call by deadline. Colour it by `call_status` to see what is
  open now.
- **Search** (⌘K): try `type:program #security` or a funder's name.

# Freshness

Grant programs change quickly. 2025–26 brought US federal research and foreign-aid cuts,
restructured crypto grant programs, and new EU and philanthropic funds. Every concept has
`last_checked` and `stale_after: 2027-01-03`. Treat a passed `next_deadline` as a sign the next
round needs checking.

[^okf-spec]: OKF specification.
