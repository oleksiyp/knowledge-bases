---
type: OSS Project
title: Zarr
description: Cloud-native chunked N-D array format; Zarr-Python 3 (Jan 2025) delivered the v3 spec with sharding, the first Zarr Summit (Oct 2025) and Earthmover's Icechunk (1.0 2025, 2.0 Apr 2026; adopted by the US National Weather Service) made it the default for cloud climate/imaging data — growing.
resource: https://github.com/zarr-developers/zarr-python
tags: [scientific-python, storage-format, cloud-native, mit, numfocus, community, geoscience, bioimaging]
domain: scientific-computing
license: MIT
license_history: ["MIT"]
governance: community
steward: Zarr Steering Council (NumFOCUS fiscally sponsored)
backing_orgs: [organizations/numfocus]
metrics:
  github_stars: { value: 2064, as_of: 2026-10-03, note: "zarr-python repo" }
  default_branch_commits_apr_sep: { value: 318, as_of: 2026-10-01, note: "vs 208 in Apr–Sep 2025 (GitHub API)" }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: zarr-gh
    resource: https://github.com/zarr-developers/zarr-python
    title: zarr-python GitHub repository and releases (v3.0.0 2025-01-09 … v3.4.0 2026-09-15)
    last_modified: 2026-10-03T00:00:00Z
  - id: zarr3-blog
    resource: https://zarr.dev/blog/zarr-python-3-release/
    title: "Zarr-Python 3 is here! (2025-01-09)"
  - id: zarr-summit
    resource: https://cloudnativegeo.org/blog/2025/11/2025-zarr-summit-recap/
    title: "Cloud-Native Geospatial: 2025 Zarr Summit Recap (Rome, Oct 13–17 2025)"
  - id: devseed-zarr
    resource: https://developmentseed.org/blog/2025-10-13-zarr/
    title: "Development Seed: Zarr Everywhere (2025-10-13)"
  - id: icechunk-announce
    resource: https://www.earthmover.io/blog/icechunk/
    title: "Earthmover: Announcing Icechunk!"
  - id: icechunk-gh
    resource: https://github.com/earth-mover/icechunk
    title: Icechunk GitHub repository (Apache-2.0; v1.0.0 2025-07-10, v2.0.0 2026-04-08)
  - id: icechunk2
    resource: https://www.earthmover.io/blog/announcing-icechunk-2-better-consistency-performance-and-reliability-for-tensor-storage
    title: "Earthmover: Announcing Icechunk 2 (2026-04-09)"
  - id: icechunk-nws
    resource: https://www.earthmover.io/blog/icechunk-at-nws-cirrus
    title: "Earthmover: Icechunk adopted by the National Weather Service (NWS CIRRUS, 2026-06-04)"
  - id: earthmover-seed
    resource: https://www.businesswire.com/news/home/20250919639500/en/Earthmover-Raises-$7.2M-Seed-Round-to-Transform-Earth-Science-Data-Management
    title: "Business Wire: Earthmover Raises $7.2M Seed Round (2025-09-19)"
  - id: ngff-rfc2
    resource: https://ngff.openmicroscopy.org/rfc/2/
    title: "OME-NGFF RFC-2: Zarr v3"
---

# Summary
Zarr is the success story of the scientific-data layer. Zarr-Python 3.0 shipped on 2025-01-09 after more than a year of work, implementing the Zarr v3 spec with chunk sharding, async I/O and a modernized codebase[^zarr3-blog]; follow-ups reached 3.4.0 (2026-09-15) with commits up ~50% YoY (318 vs 208, Apr–Sep)[^zarr-gh]. The community held its first Zarr Summit in Rome (Oct 2025)[^zarr-summit], bioimaging adopted Zarr v3 via OME-NGFF RFC-2[^ngff-rfc2], and Earthmover's Apache-2.0 Icechunk transactional engine for Zarr[^icechunk-announce] reached 1.0 (tagged 2025-07-10) and 2.0 (tagged 2026-04-08, announced 2026-04-09)[^icechunk-gh], with the US National Weather Service adopting it for its CIRRUS data lake[^earthmover-seed][^icechunk2][^icechunk-nws]. Verdict: growing; commercial value accrues to Earthmover and cloud vendors rather than the project.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01-09 | Zarr-Python 3.0.0 — v3 spec, sharding, async I/O[^zarr3-blog] | OSS | + |
| W24 | 2025-07-10 | Icechunk 1.0 (Apache-2.0 transactional engine for Zarr)[^icechunk-gh] | OSS | + |
| W24 | 2025-09-19 | Earthmover $7.2M seed (Lowercarbon Capital)[^earthmover-seed] | Business | + |
| W12 | 2025-10-13 | First Zarr Summit, Rome (Oct 13–17)[^zarr-summit][^devseed-zarr] | OSS | + |
| W12 | 2025-11-21 | zarr-python 3.1.4/3.1.5[^zarr-gh] | OSS | + |
| W6 | 2026-04-09 | Icechunk 2 announced[^icechunk2] | OSS | + |
| W6 | 2026-04-30 | zarr-python 3.2.0[^zarr-gh] | OSS | + |
| W6 | 2026-06-04 | Icechunk adopted by NWS CIRRUS operational data lake[^icechunk-nws] | Business | + |
| W3 | 2026-07-30 / 09-15 | zarr-python 3.3.0, 3.4.0[^zarr-gh] | OSS | + |

# OSS successes
- v3 spec + sharding make Zarr practical for very large cloud object-store datasets[^zarr3-blog].
- Cross-domain uptake: geoscience (Pangeo, NWS), bioimaging (OME-NGFF)[^ngff-rfc2][^icechunk-nws].
- Multi-language implementations (TensorStore, zarr-java, zarrita.js, Rust)[^devseed-zarr].

# OSS failures / risks
- v2→v3 migration churn: breaking API changes, stricter metadata parsing in 3.4[^zarr-gh].
- Versioning/transactions live in a company-led project (Icechunk) rather than the spec.

# Business successes
- Earthmover seed round and public-sector adoption of Icechunk[^earthmover-seed][^icechunk-nws].

# Business failures / risks
- Heavy dependence on US federal earth-science funding (NASA, NOAA) at a time of budget cuts (see domain review).

# By window
## W3
- 3.3.0 (07-30), 3.4.0 (09-15)[^zarr-gh].
## W6
- Icechunk 2 (04-09), zarr-python 3.2.0 (04-30), NWS adoption (06-04)[^icechunk2][^zarr-gh][^icechunk-nws].
## W9
- 3.1.6 (2026-03-20)[^zarr-gh].
## W12
- Zarr Summit (Oct 2025)[^zarr-summit].
## W24
- Zarr-Python 3.0 (2025-01-09); Earthmover seed (2025-09-19)[^zarr3-blog][^earthmover-seed].

# Lessons
- Open formats win when paired with a reference implementation, cross-language libraries and a neutral steward.
- A startup building a value-add layer (Icechunk) can drive format adoption without capturing the format.

# Related
- [/events/2025-01-zarr-python-3-release.md](/events/2025-01-zarr-python-3-release.md)
- [xarray](/projects/scientific-computing/xarray.md), [Dask](/projects/scientific-computing/dask.md), [Apache Iceberg](/projects/data-engineering/apache-iceberg.md)
- [NumFOCUS](/organizations/numfocus.md), [Scientific computing domain review](/domains/scientific-computing.md)

[^zarr-gh]: https://github.com/zarr-developers/zarr-python
[^zarr3-blog]: https://zarr.dev/blog/zarr-python-3-release/
[^zarr-summit]: https://cloudnativegeo.org/blog/2025/11/2025-zarr-summit-recap/
[^devseed-zarr]: https://developmentseed.org/blog/2025-10-13-zarr/
[^icechunk-announce]: https://www.earthmover.io/blog/icechunk/
[^icechunk-gh]: https://github.com/earth-mover/icechunk
[^icechunk2]: https://www.earthmover.io/blog/announcing-icechunk-2-better-consistency-performance-and-reliability-for-tensor-storage
[^icechunk-nws]: https://www.earthmover.io/blog/icechunk-at-nws-cirrus
[^earthmover-seed]: https://www.businesswire.com/news/home/20250919639500/en/Earthmover-Raises-$7.2M-Seed-Round-to-Transform-Earth-Science-Data-Management
[^ngff-rfc2]: https://ngff.openmicroscopy.org/rfc/2/
