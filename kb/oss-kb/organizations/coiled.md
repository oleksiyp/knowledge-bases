---
type: Organization
title: Coiled
description: Company founded by Dask creator Matthew Rocklin that sells managed Dask and, increasingly, general serverless/GPU Python cloud compute; $26M raised (seed + 2021 Series A), no new round reported since, usage ~2x in H1 2026.
resource: https://coiled.io
tags: [commercial-open-source, dask, distributed-computing, cloud]
org_kind: coss-startup
hq: "New York, NY (2021 Series A release; 2020 seed release datelined San Francisco)"
funding: { total_usd: "~26M (seed $5M 2020 + Series A $21M 2021)", last_round: "Series A $21M (Bessemer)", last_round_date: 2021-05-18, valuation_usd: "undisclosed" }
business_verdict: stable
projects: [projects/scientific-computing/dask]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: coiled-seed
    resource: https://www.prnewswire.com/news-releases/coiled-announces-5m-seed-funding-to-meet-the-needs-of-modern-data-teams-301139759.html
    title: "PR Newswire: Coiled announces $5M seed funding"
  - id: coiled-seriesa
    resource: https://www.prnewswire.com/news-releases/coiled-cloud-launches-at-dask-distributed-summit-after-securing-21m-in-series-a-funding-led-by-bessemer-venture-partners-301294178.html
    title: "PR Newswire: Coiled Cloud launches after securing $21M Series A led by Bessemer"
  - id: coiled-blog
    resource: https://docs.coiled.io/blog/index.html
    title: Coiled blog index
  - id: coiled-stability
    resource: https://docs.coiled.io/blog/coiled-stability-update.html
    title: "Coiled Stability Update (2026-07-08)"
---

# Summary
Coiled raised a $5M seed and then a $21M Series A led by Bessemer (launched at the 2021 Dask Distributed Summit)[^coiled-seed][^coiled-seriesa]. Over 2025 it broadened from "hosted Dask" to a general Python cloud-compute platform — GPU-accelerated serverless functions pitched as an AWS Lambda alternative, batch/SLURM-style job arrays, marimo notebooks and MLflow deployments[^coiled-blog]. In July 2026 it reported usage roughly doubling since January alongside two production outages (May 6, June 29)[^coiled-stability]. No new funding has been reported since 2021. Verdict: **stable** niche business.

# Business timeline
| Date | Event |
|---|---|
| 2020-09-29 | $5M seed (Costanoa Ventures, IA Ventures)[^coiled-seed] |
| 2021-05-18 | $21M Series A (Bessemer); Coiled Cloud launch[^coiled-seriesa] |
| 2024-11-19 | SLURM-style job arrays on the cloud[^coiled-blog] |
| 2025-06-11 | GPU serverless "alternative to AWS Lambda"[^coiled-blog] |
| 2025-08-21 | marimo notebook support[^coiled-blog] |
| 2026-07-08 | Stability update: ~2x usage, two outages[^coiled-stability] |

# Monetization model
Usage-based managed compute that runs in the customer's own AWS/GCP/Azure account; Dask remains BSD-3-Clause.

# Successes
- Survived the post-2022 funding drought without visible layoffs (none reported) and grew usage[^coiled-stability].
- Diversified beyond Dask to generic Python/GPU workloads[^coiled-blog].

# Failures / risks
- Dask's dataframe niche squeezed by Polars, DuckDB, Ray and Spark; Ray's commercial steward was acquired (Nscale–Anyscale).
- Reliability incidents in 2026[^coiled-stability]; funding runway undisclosed.

# Related
- [Dask](/projects/scientific-computing/dask.md), [Ray](/projects/ai-inference/ray.md), [Anyscale](/organizations/anyscale.md)
- [Scientific computing domain review](/domains/scientific-computing.md)

[^coiled-seed]: https://www.prnewswire.com/news-releases/coiled-announces-5m-seed-funding-to-meet-the-needs-of-modern-data-teams-301139759.html
[^coiled-seriesa]: https://www.prnewswire.com/news-releases/coiled-cloud-launches-at-dask-distributed-summit-after-securing-21m-in-series-a-funding-led-by-bessemer-venture-partners-301294178.html
[^coiled-blog]: https://docs.coiled.io/blog/index.html
[^coiled-stability]: https://docs.coiled.io/blog/coiled-stability-update.html
