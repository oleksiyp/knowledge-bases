---
type: Event
title: Zarr-Python 3.0 released with full Zarr v3 spec and sharding
description: On 2025-01-09 Zarr-Python 3.0 shipped after more than a year of work, implementing the Zarr v3 specification with chunk sharding and async I/O; xarray released same-day support, starting the ecosystem-wide move to Zarr v3.
event_kind: release
date: 2025-01-09
window: W24
impact: positive
projects: [projects/scientific-computing/zarr, projects/scientific-computing/xarray]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: zarr3-blog
    resource: https://zarr.dev/blog/zarr-python-3-release/
    title: "Zarr-Python 3 is here! (2025-01-09)"
  - id: zarr-gh
    resource: https://github.com/zarr-developers/zarr-python
    title: zarr-python GitHub releases
  - id: zarr-migration
    resource: https://zarr.readthedocs.io/en/stable/user-guide/v3_migration/
    title: Zarr-Python 3.0 Migration Guide
  - id: icechunk-nws
    resource: https://www.earthmover.io/blog/icechunk-at-nws-cirrus
    title: "Earthmover: Icechunk adopted by the National Weather Service (2026-06-04)"
  - id: zarr-summit
    resource: https://cloudnativegeo.org/blog/2025/11/2025-zarr-summit-recap/
    title: "2025 Zarr Summit Recap"
---

# What happened
Zarr-Python 3.0.0 was released on 2025-01-09 with full support for the Zarr v3 spec, the chunk-sharding extension, async I/O and threaded parallelism, and a modernized extensible codebase; 30+ contributors took part and xarray v2025.01.1 shipped the same day with full support[^zarr3-blog].

# Why it matters
Sharding makes Zarr practical for petabyte-scale cloud object stores (fewer, larger objects), and v3 is the base for cross-language implementations and for transactional layers such as Icechunk[^zarr3-blog][^icechunk-nws].

# Outcome so far
The 3.x line reached 3.4.0 (2026-09-15) with commits up ~50% YoY; migration required API changes documented in a v3 migration guide[^zarr-gh][^zarr-migration]. The first Zarr Summit was held in Rome in Oct 2025, and the US National Weather Service adopted Zarr-based Icechunk for its CIRRUS data lake in 2026[^zarr-summit][^icechunk-nws].

# Related
- [/projects/scientific-computing/zarr.md](/projects/scientific-computing/zarr.md), [/projects/scientific-computing/xarray.md](/projects/scientific-computing/xarray.md), [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^zarr3-blog]: https://zarr.dev/blog/zarr-python-3-release/
[^zarr-gh]: https://github.com/zarr-developers/zarr-python
[^zarr-migration]: https://zarr.readthedocs.io/en/stable/user-guide/v3_migration/
[^icechunk-nws]: https://www.earthmover.io/blog/icechunk-at-nws-cirrus
[^zarr-summit]: https://cloudnativegeo.org/blog/2025/11/2025-zarr-summit-recap/
