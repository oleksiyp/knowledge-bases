---
type: Trend
title: Acquired OSS often goes quiet
description: "Post-acquisition decay: in many 2025–2026 deals the license stayed open but public development slowed, stopped or was formally sunset within 3–12 months. Foundation-held projects were the exception."
tags: [m-and-a, maintainers, risk, cross-domain]
strength: strong
first_seen: W24
direction_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
domains: [databases, ai-agents, ai-inference, licensing-forks, data-engineering]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: flowise-sunset
    resource: https://flowiseai.com/sunset
    title: The Future of Flowise
  - id: neon-gh
    resource: https://github.com/neondatabase/neon
    title: Neon repository activity (GitHub)
  - id: cdktf-docs
    resource: https://developer.hashicorp.com/terraform/cdktf
    title: "HashiCorp: CDKTF deprecated (2025-12-10)"
  - id: duck-aws
    resource: https://duckdb.org/2026/08/26/ducklabs-to-join-aws
    title: "DuckLabs to join AWS"
---

# Summary

A license that stays open is **not** the same as a project that stays alive. Several projects acquired in 2025–2026 kept their OSI license, but their public repositories went silent or were formally retired:

- **Flowise:** sunset about 12 months after Workday bought it.[^flowise-sunset]
- **Neon:** about 11 commits in the year after Databricks bought it.[^neon-gh]
- **CDKTF:** killed about 10 months after IBM closed its HashiCorp acquisition.[^cdktf-docs]

The counter-model is a project whose IP sat in a foundation before the deal. **DuckDB** stayed MIT under the DuckDB Foundation when AWS bought DuckLabs.[^duck-aws]

# Cases

| Project | Acquirer | Gap from deal to decay | What happened | Link |
|---|---|---|---|---|
| Flowise | Workday (Aug 2025) | ~12 months | Code freeze, archive, end of life on 2026-08-31 | [Flowise](/projects/ai-agents/flowise.md), [sunset](/events/2026-07-flowise-sunset.md) |
| Neon | Databricks (May 2025) | ~3 months | Public repo nearly silent; product became Lakebase | [Neon](/projects/databases/neon.md) |
| Gel (EdgeDB) | Vercel (Dec 2025) | ~1 month | Cloud shut down; repo dormant | [Gel](/projects/databases/gel.md), [event](/events/2025-12-gel-joins-vercel.md) |
| BentoML | Modular (Feb 2026) | ~3 months | Last release 2026-05-07; 6 commits in W3 | [BentoML](/projects/ai-inference/bentoml.md) |
| CDKTF | IBM/HashiCorp (Feb 2025) | ~10 months | Sunset on 2025-12-10 | [event](/events/2025-12-cdktf-sunset.md) |
| pgBackRest | (Crunchy → Snowflake) | ~11 months | Lost its paid maintainer; five-vendor rescue | [event](/events/2026-05-pgbackrest-consortium-rescue.md) |
| TGI | (internal: Hugging Face) | — | Maintenance mode, then archived | [event](/events/2025-12-tgi-maintenance-mode.md) |
| Great Expectations | (stewardship to Fivetran) | — | Moved to Fivetran stewardship | [GX](/projects/data-engineering/great-expectations.md) |

**Counter-examples where the project survived:**

- DuckDB under AWS, with a foundation holding the IP.
- Ray under Nscale, after being donated to the PyTorch Foundation.
- SQLMesh, which Fivetran moved to the Linux Foundation.
- Spin, which stayed in CNCF after Fermyon was sold.
- Flux, which outlived Weaveworks inside CNCF.

# Lessons

- **Due diligence for adopters.** Check who holds the trademark, copyright and repo admin rights, not just the license.
- **Acquirers** that want community goodwill should donate the project to a foundation as part of the deal (SQLMesh shows this works).
- **Expect a 3–12 month decay window** after acqui-hires where the product is folded into a larger platform.

# Related

- [AI labs and compute owners bought the stack](/trends/ai-labs-and-compute-owners-buy-the-stack.md)
- [Foundations as insurance](/trends/foundations-as-insurance.md)

[^flowise-sunset]: Flowise sunset notice.
[^neon-gh]: GitHub commit history.
[^cdktf-docs]: HashiCorp docs.
[^duck-aws]: DuckDB blog.
