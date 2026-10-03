---
type: System
title: Voltron Data
description: "Company formed in 2021 by Arrow, RAPIDS and BlazingSQL leaders to commercialise the composable Arrow stack and a GPU query engine (Theseus). It raised $110M in 2022, halved its staff in 2024 and shut down in 2025, having launched Theseus too late."
resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
tags: [arrow, gpu, composable, shutdown, startup]
kind: product
first_release: 2021
org: "Voltron Data (defunct)"
outcome: dead
ideas: [ideas/analytics-lakehouse/composable-data-systems, ideas/analytics-lakehouse/gpu-accelerated-analytics]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: pavlo-2022
    resource: https://www.cs.cmu.edu/~pavlo/blog/2022/12/2022-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2022: A Year in Review"
    author: person:andy-pavlo
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
  - id: blazing-dbdb
    resource: https://dbdb.io/db/blazingsql
    title: "Database of Databases: BlazingSQL"
  - id: voltron-info
    resource: https://www.theinformation.com/briefings/ai-startup-voltron-data-switches-ceos-lays-off-staff
    title: "The Information: Voltron Data switches CEOs, lays off staff (Nov 2024)"
  - id: accenture-voltron
    resource: https://newsroom.accenture.com/news/2025/accenture-invests-in-voltron-data-to-help-organizations-use-gpu-technology-to-simplify-large-scale-data-processing
    title: "Accenture invests in Voltron Data (2025)"
  - id: velox-tt
    resource: https://www.techtarget.com/searchdatamanagement/news/252524446/Meta-and-partners-build-Velox-open-source-execution-engine
    title: "TechTarget: Meta and partners (incl. Voltron Data) build Velox (2022)"
---

# Summary

Voltron Data merged the teams behind Ursa Computing (Wes McKinney's Arrow lab), BlazingSQL (GPU SQL) and NVIDIA RAPIDS leadership[^blazing-dbdb]. It announced a $110M seed + Series A in February 2022[^pavlo-2022]. It funded a large share of Apache Arrow development, contributed to Ibis, Substrait and Velox[^velox-tt], and built Theseus, a distributed GPU query engine aimed at very large enterprises. In November 2024 it changed CEOs and laid off about half its staff[^voltron-info]. Accenture made a strategic investment in 2025 to bring Theseus to clients[^accenture-voltron]. Pavlo's 2025 review lists Voltron among the year's shutdowns: it "failed to launch [Theseus] in a timely manner", and its staff scattered to other companies[^pavlo-2025]. The exact shutdown date was not confirmed by an official announcement (unconfirmed; third-party reports point to around January 2026).

# Timeline

| Year | Event |
|---|---|
| 2021 | Founded; BlazingSQL team joins[^blazing-dbdb] |
| 2022 | $110M announced[^pavlo-2022]; Velox partner[^velox-tt] |
| 2024 | CEO change, ~50% layoffs[^voltron-info] |
| 2025 | Accenture investment[^accenture-voltron]; shutdown[^pavlo-2025] |

# What worked

- Its open-source contributions (Arrow, Substrait, Ibis) outlived the company.

# What didn't

- It had no early revenue product, and its pivot to GPU analytics coincided with GPUs becoming scarce and expensive because of AI training demand.

# Related

- [Composable data systems](/ideas/analytics-lakehouse/composable-data-systems.md) · [GPU-accelerated analytics](/ideas/analytics-lakehouse/gpu-accelerated-analytics.md) · [Apache Arrow](/systems/apache-arrow.md)
