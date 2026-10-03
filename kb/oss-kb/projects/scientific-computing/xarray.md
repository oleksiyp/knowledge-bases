---
type: OSS Project
title: xarray
description: Labeled N-D arrays for climate, weather and geoscience; absorbed DataTree (Oct 2024) and Zarr-Python 3 support, ships near-monthly CalVer releases, but default-branch commit volume roughly halved YoY as its founders' company Earthmover focuses on Icechunk — stable core of the Pangeo stack.
resource: https://github.com/pydata/xarray
tags: [scientific-python, geoscience, climate, apache-2.0, numfocus, community, pangeo]
domain: scientific-computing
license: Apache-2.0
license_history: ["Apache-2.0"]
governance: community
steward: xarray core team (NumFOCUS fiscally sponsored)
backing_orgs: [organizations/numfocus]
metrics:
  github_stars: { value: 4206, as_of: 2026-10-03 }
  default_branch_commits_apr_sep: { value: 154, as_of: 2026-10-01, note: "vs 296 in Apr–Sep 2025 (GitHub API)" }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: down, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: xr-gh
    resource: https://github.com/pydata/xarray
    title: xarray GitHub repository and releases (v2024.10.0 2024-10-24 … v2026.09.0 2026-09-29)
    last_modified: 2026-10-03T00:00:00Z
  - id: xr-202410
    resource: https://github.com/pydata/xarray/releases/tag/v2024.10.0
    title: xarray v2024.10.0 release (DataTree upstreamed)
  - id: xr-202609
    resource: https://github.com/pydata/xarray/releases/tag/v2026.09.0
    title: xarray v2026.09.0 release
  - id: xr-whatsnew
    resource: https://docs.xarray.dev/en/v2026.04.0/whats-new.html
    title: xarray What's New (v2026.04.0)
  - id: zarr3-blog
    resource: https://zarr.dev/blog/zarr-python-3-release/
    title: "Zarr-Python 3 is here! (2025-01-09)"
  - id: earthmover-seed
    resource: https://www.businesswire.com/news/home/20250919639500/en/Earthmover-Raises-$7.2M-Seed-Round-to-Transform-Earth-Science-Data-Management
    title: "Business Wire: Earthmover Raises $7.2M Seed Round (2025-09-19)"
  - id: pymc6
    resource: https://www.pymc.io/blog/pymc_v6_ecosystem_updates.html
    title: "PyMC 6.0 & ecosystem updates (ArviZ 1.0 on xarray.DataTree)"
---

# Summary
xarray is the labeled-array backbone of climate/weather science (the Pangeo stack). Its big structural step was upstreaming DataTree in v2024.10.0 (2024-10-24), plus full Zarr-Python 3 compatibility from January 2025[^xr-202410][^zarr3-blog]. DataTree has since become a building block elsewhere — ArviZ 1.0 replaced InferenceData with `xarray.DataTree` in the PyMC 6 ecosystem[^pymc6]. Releases stay frequent (v2026.04.0, 07.0, 09.0)[^xr-gh][^xr-whatsnew], but default-branch commits fell ~48% YoY (154 vs 296, Apr–Sep)[^xr-gh]. Commercial energy around the project sits with Earthmover (founded by xarray core developers; $7.2M seed, Sept 2025), which concentrates on Zarr/Icechunk[^earthmover-seed]. Verdict: stable, mature, but thinner contributor activity.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-24 | v2024.10.0 — DataTree merged into xarray[^xr-202410] | OSS | + |
| W24 | 2025-01-09 | v2025.01.1 released alongside Zarr-Python 3 with full support[^zarr3-blog] | OSS | + |
| W24 | 2025-09-19 | Earthmover (xarray founders' company) raises $7.2M seed[^earthmover-seed] | Business | + |
| W12 | 2025-10 → 12 | v2025.10.x, v2025.11.0, v2025.12.0[^xr-gh] | OSS | + |
| W6 | 2026-04-13 | v2026.04.0 — minimum Zarr 3.0, DataTree `inherit='all_coords'`[^xr-whatsnew] | OSS | + |
| W6 | 2026-05 | ArviZ 1.0 / PyMC 6 adopt `xarray.DataTree` as results container[^pymc6] | OSS | + |
| W3 | 2026-09-29 | v2026.09.0 — Zarr V3 rectilinear chunks, Arrow PyCapsule export, DataTree in `apply_ufunc`; last to support Python 3.11[^xr-202609] | OSS | + |

# OSS successes
- DataTree upstreaming solved hierarchical (netCDF4/Zarr group) data natively[^xr-202410].
- Downstream adoption as a data model (ArviZ/PyMC)[^pymc6].

# OSS failures / risks
- Commit volume roughly halved YoY[^xr-gh]; small core team.
- Funding is grant-dependent (NASA/NSF earth-science programs that came under US budget pressure — see domain review).

# Business successes
- n/a directly; Earthmover provides a commercial home for several core devs[^earthmover-seed].

# Business failures / risks
- n/a.

# By window
## W3
- v2026.07.0 (07-09) and v2026.09.0 (09-29)[^xr-gh][^xr-202609].
## W6
- v2026.04.0 (04-13); ArviZ 1.0 adopts DataTree[^xr-whatsnew][^pymc6].
## W9
- v2026.01.0, v2026.02.0[^xr-gh].
## W12
- v2025.10–12 releases[^xr-gh].
## W24
- DataTree upstreamed (2024-10-24); Zarr 3 support (2025-01); Earthmover seed (2025-09)[^xr-202410][^zarr3-blog][^earthmover-seed].

# Lessons
- Merging a popular extension (DataTree) into core turned it into an ecosystem standard.
- Domain-science libraries depend on public science funding; a startup employing founders helps but focuses on its own product.

# Related
- [Zarr](/projects/scientific-computing/zarr.md), [Dask](/projects/scientific-computing/dask.md), [PyMC](/projects/scientific-computing/pymc.md), [pandas](/projects/data-engineering/pandas.md), [Apache Arrow](/projects/data-engineering/apache-arrow.md)
- [NumFOCUS](/organizations/numfocus.md), [Scientific computing domain review](/domains/scientific-computing.md)

[^xr-gh]: https://github.com/pydata/xarray
[^xr-202410]: https://github.com/pydata/xarray/releases/tag/v2024.10.0
[^xr-202609]: https://github.com/pydata/xarray/releases/tag/v2026.09.0
[^xr-whatsnew]: https://docs.xarray.dev/en/v2026.04.0/whats-new.html
[^zarr3-blog]: https://zarr.dev/blog/zarr-python-3-release/
[^earthmover-seed]: https://www.businesswire.com/news/home/20250919639500/en/Earthmover-Raises-$7.2M-Seed-Round-to-Transform-Earth-Science-Data-Management
[^pymc6]: https://www.pymc.io/blog/pymc_v6_ecosystem_updates.html
