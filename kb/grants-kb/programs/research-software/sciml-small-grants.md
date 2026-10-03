---
type: Grant Program
title: SciML Small Grants (Julia scientific machine learning bounties)
description: Rolling bounty-style micro-grants ($100–$2,250) for defined tasks in the Julia SciML ecosystem, funded by donations through NumFOCUS; claim a project, get an exclusive window, get paid on completion.
resource: https://sciml.ai/news/2026/05/26/sciml_small_grants_two_year_update/index.html
tags: [research-software, julia, sciml, bounty, microgrant, numfocus]
category: research-software
funder: funders/numfocus
funder_type: community
region: global
applicant_types: [individual]
software_focus: [research-software, ai]
funding_type: prize
oss_required: yes
equity_free: yes
amount_min_usd: 100
amount_max_usd: 2250
amount_text: "$100–$2,250 per task"
application_model: rolling
program_status: rolling
deadline_note: "Rolling; tasks listed in sciml.ai small_grants.md"
effort_to_apply: low
example_funded: [LoopVectorization.jl, OrdinaryDiffEq.jl]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: sciml-2yr
    resource: https://sciml.ai/news/2026/05/26/sciml_small_grants_two_year_update/index.html
    title: "SciML Small Grants Program: Two Years In (May 2026)"
  - id: sciml-ann
    resource: https://discourse.julialang.org/t/ann-sciml-small-grants-program-funded-open-source-contributions/113708
    title: "Julia Discourse: [ANN] SciML Small Grants Program"
  - id: jsoc
    resource: https://julialang.org/jsoc/index.html
    title: "Julia Seasons of Contributions"
---

# Summary

SciML, the Julia scientific machine-learning organization, runs a **bounty-style small grants program**. Maintainers list specific tasks with a fixed payment. A contributor declares intent by PR, gets an exclusive window (usually a month, extendable), and is paid on completion.[^sciml-2yr] Payments run **$100–$300** for small fixes, **$400–$800** for features, and **$1,800–$2,250** for architecture or performance work. The money comes from donations through NumFOCUS, which can be earmarked.[^sciml-2yr] Eight projects were completed between July 2025 and May 2026 (about $5,950), and lifetime payouts are about $8.4–8.6K.[^sciml-2yr] The broader Julia ecosystem also offers Julia Seasons of Contributions and GSoC stipends.[^jsoc]

# Eligibility

- Anyone able to do the task.[^sciml-2yr]

# What it funds

- Specific listed tasks: compatibility updates, benchmarks, GPU performance, solver features.[^sciml-2yr]

# Amounts & terms

- Fixed per task; may be raised if the contributor exceeds scope.[^sciml-2yr]

# How to apply

- Open a PR to the sciml.ai repository editing `small_grants.md` to claim a task.[^sciml-2yr]

# Deadlines

Rolling.

# Track record

- See summary. Completed work includes LoopVectorization.jl Julia 1.12 compatibility and OrdinaryDiffEq tests and benchmarks.[^sciml-2yr][^sciml-ann]

# Fit

- **Good fit if:** you are a Julia developer who wants small paid tasks.
- **Poor fit if:** you need project-level funding.

# Related

- [/funders/numfocus.md](/funders/numfocus.md) · [/programs/research-software/numfocus-small-development-grants.md](/programs/research-software/numfocus-small-development-grants.md)

[^sciml-2yr]: [SciML two-year update](https://sciml.ai/news/2026/05/26/sciml_small_grants_two_year_update/index.html)
[^sciml-ann]: [SciML announcement](https://discourse.julialang.org/t/ann-sciml-small-grants-program-funded-open-source-contributions/113708)
[^jsoc]: [Julia JSoC](https://julialang.org/jsoc/index.html)
