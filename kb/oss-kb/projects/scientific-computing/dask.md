---
type: OSS Project
title: Dask
description: Python-native parallel/distributed computing for arrays and dataframes; completed its query-planner (dask-expr) transition in 2025, kept monthly releases and patched a Jupyter-proxy XSS (CVE-2026-23528), while commercial steward Coiled broadened into general serverless/GPU cloud compute — stable, but squeezed by Polars, DuckDB, Ray and Spark.
resource: https://github.com/dask/dask
tags: [scientific-python, distributed-computing, dataframe, bsd-3-clause, numfocus, community]
domain: scientific-computing
license: BSD-3-Clause
license_history: ["BSD-3-Clause"]
governance: community
steward: Dask maintainers (NumFOCUS fiscally sponsored); Coiled and NVIDIA employ key maintainers
backing_orgs: [organizations/coiled, organizations/numfocus]
metrics:
  github_stars: { value: 13931, as_of: 2026-10-03 }
  default_branch_commits_apr_sep: { value: 108, as_of: 2026-10-01, note: "dask/dask; vs 96 in Apr–Sep 2025. dask/distributed: 108 vs 51 (GitHub API)" }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: dask-gh
    resource: https://github.com/dask/dask
    title: Dask GitHub repository and releases (2024.10.0 … 2026.8.0)
    last_modified: 2026-10-03T00:00:00Z
  - id: dask-changelog
    resource: https://docs.dask.org/en/stable/changelog.html
    title: Dask changelog
  - id: nvd-dask-xss
    resource: https://nvd.nist.gov/vuln/detail/CVE-2026-23528
    title: "NVD: CVE-2026-23528 (Dask dashboard XSS via jupyter-server-proxy)"
  - id: coiled-stability
    resource: https://docs.coiled.io/blog/coiled-stability-update.html
    title: "Coiled Stability Update (2026-07-08)"
  - id: coiled-blog
    resource: https://docs.coiled.io/blog/index.html
    title: Coiled blog index (2025 posts on GPU serverless, marimo, MLflow)
  - id: coiled-seriesa
    resource: https://www.prnewswire.com/news-releases/coiled-cloud-launches-at-dask-distributed-summit-after-securing-21m-in-series-a-funding-led-by-bessemer-venture-partners-301294178.html
    title: "PR Newswire: Coiled secures $21M Series A led by Bessemer (2021)"
---

# Summary
Dask is mature infrastructure for scaling NumPy/pandas/xarray workloads. The 2025.x releases completed the switch to the expression-based query planner (custom low-level optimizers dropped in 2025.4.0, `collections_to_dsk` → `collections_to_expr`), and 2025.9–2026.7 releases tracked pandas 3, NumPy 2.5, Zarr 3 sharding and preliminary free-threaded Python 3.14t[^dask-changelog]. A notable security fix (CVE-2026-23528, an XSS in the dashboard that could execute code via JupyterLab + jupyter-server-proxy) landed in 2026.1.0, with backport patch releases on older branches in July 2026[^nvd-dask-xss][^dask-gh]. Commercial steward Coiled ($26M raised by 2021) repositioned as a general Python cloud-compute platform (serverless GPU functions, batch jobs, marimo) and reported usage roughly doubling in H1 2026 — along with two outages[^coiled-blog][^coiled-stability]. Verdict: stable OSS; niche-but-steady business.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-22 | Dask 2025.4.0 — breaking: expression system everywhere, low-level optimizers removed[^dask-changelog] | OSS | +/− |
| W24 | 2025-06-11 | Coiled pitches "GPU-accelerated serverless alternative to AWS Lambda"[^coiled-blog] | Business | + |
| W24 | 2025-09-10 | Dask 2025.9.0 — pandas 3 compatibility overhaul; UCX protocol removed[^dask-changelog] | OSS | + |
| W9 | 2026-01-16 | Dask 2026.1.0 fixes CVE-2026-23528 dashboard XSS[^nvd-dask-xss][^dask-changelog] | OSS | − |
| W9 | 2026-03-19 | 2026.3.0 — preliminary Python 3.14t support[^dask-changelog] | OSS | + |
| W6 | 2026-06-11 | 2026.6.0 — pandas 3.1 compatibility, task-stream overhaul[^dask-changelog] | OSS | + |
| W3 | 2026-07-08 | Coiled stability update: usage ~2x since Jan; outages May 6 and Jun 29[^coiled-stability] | Business | +/− |
| W3 | 2026-07-13 | Backport releases 2025.9.3, 2026.1.3 on older branches[^dask-gh] | OSS | + |
| W3 | 2026-08-24 | Dask 2026.8.0[^dask-gh] | OSS | + |

# OSS successes
- Query planning (dask-expr) shipped without forking the user API[^dask-changelog].
- Kept pace with pandas 3, NumPy 2.5 and Zarr 3[^dask-changelog].

# OSS failures / risks
- Low commit volume for a project of its footprint (~100 commits per half-year in dask/dask)[^dask-gh].
- Dataframe mindshare shifting to Polars/DuckDB on single node and Ray/Spark at cluster scale.
- Security: dashboard XSS reachable through common Jupyter setups[^nvd-dask-xss].

# Business successes
- Coiled growing usage (~2x Jan→Jul 2026) after broadening beyond Dask[^coiled-stability].

# Business failures / risks
- No reported Coiled funding since the 2021 $21M Series A[^coiled-seriesa]; reliability incidents in 2026[^coiled-stability].

# By window
## W3
- Coiled stability post (07-08); backport patches (07-13); 2026.8.0 (08-24)[^coiled-stability][^dask-gh].
## W6
- 2026.6.0 (06-11)[^dask-changelog].
## W9
- CVE-2026-23528 fixed in 2026.1.0; 2026.3.0 with 3.14t[^nvd-dask-xss][^dask-changelog].
## W12
- 2025.10.0–2025.12.0 releases[^dask-gh].
## W24
- 2025.4.0 expression-system break; Coiled GPU/serverless pivot[^dask-changelog][^coiled-blog].

# Lessons
- A distributed-compute vendor built around one OSS framework tends to broaden into generic compute to survive.
- Dashboards proxied through notebooks are a recurring XSS-to-RCE path.

# Related
- [Coiled](/organizations/coiled.md), [NumFOCUS](/organizations/numfocus.md)
- [xarray](/projects/scientific-computing/xarray.md), [Zarr](/projects/scientific-computing/zarr.md), [pandas](/projects/data-engineering/pandas.md), [Polars](/projects/data-engineering/polars.md), [Ray](/projects/ai-inference/ray.md), [Apache Spark](/projects/data-engineering/apache-spark.md)
- [Scientific computing domain review](/domains/scientific-computing.md)

[^dask-gh]: https://github.com/dask/dask
[^dask-changelog]: https://docs.dask.org/en/stable/changelog.html
[^nvd-dask-xss]: https://nvd.nist.gov/vuln/detail/CVE-2026-23528
[^coiled-stability]: https://docs.coiled.io/blog/coiled-stability-update.html
[^coiled-blog]: https://docs.coiled.io/blog/index.html
[^coiled-seriesa]: https://www.prnewswire.com/news-releases/coiled-cloud-launches-at-dask-distributed-summit-after-securing-21m-in-series-a-funding-led-by-bessemer-venture-partners-301294178.html
