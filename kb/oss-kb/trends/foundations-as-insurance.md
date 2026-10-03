---
type: Trend
title: Foundations became insurance against vendor fate
description: "Projects moved to neutral foundations before their sponsors were sold, pivoted or died. This 'donate, then sell' pattern, plus fast foundation homes for new standards (MCP to AAIF), was the most reliable predictor of a project surviving 2024–2026."
tags: [governance, foundations, linux-foundation, cncf, pytorch-foundation, asf, cross-domain]
strength: dominant
first_seen: W24
direction_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
domains: [ai-inference, ai-agents, cloud-native, data-engineering, licensing-forks, devtools-languages, databases]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lf-aaif-pr
    resource: https://www.prnewswire.com/news-releases/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation-aaif-anchored-by-new-project-contributions-including-model-context-protocol-mcp-goose-and-agentsmd-302636897.html
    title: "Linux Foundation announces AAIF (2025-12-09)"
  - id: cncf-nats-agree
    resource: https://www.cncf.io/announcements/2025/05/01/cncf-and-synadia-align-on-securing-the-future-of-the-nats-io-project/
    title: "CNCF and Synadia align on NATS (2025-05-01)"
  - id: redmonk-valkey
    resource: https://redmonk.com/sogrady/2026/04/06/valkey-at-two/
    title: "RedMonk: Two Years of Valkey (2026-04-06)"
  - id: cncf-otel-grad
    resource: https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/
    title: "CNCF: OpenTelemetry graduates (2026-05-21)"
---

# Summary

Across every domain, the projects that came through vendor turmoil intact were those with **neutral foundation ownership of trademark and IP**. The pattern took three forms.

1. **Donate, then sell.** The project moved to a foundation before a commercial event:
   - Ray went to the PyTorch Foundation, then Anyscale was sold.
   - vLLM went to the PyTorch Foundation, then Inferact raised money.
   - DuckDB's IP sat in its own foundation, then AWS bought DuckLabs.
   - SQLMesh went to the Linux Foundation after Fivetran bought Tobiko.
2. **Neutral home from the start for standards.**
   - MCP, AGENTS.md and goose formed the Agentic AI Foundation (AAIF) in Dec 2025, and A2A joined in Aug 2026.[^lf-aaif-pr]
   - OpenTelemetry graduated from CNCF with 2,800+ contributing companies.[^cncf-otel-grad]
   - Iceberg, Polaris and Fluss are at the ASF.
3. **Foundation as fork shelter.** Valkey (LF), OpenTofu (CNCF), OpenSearch (OpenSearch Software Foundation) and OpenBao (OpenSSF) all outgrew their relicensed parents on community metrics.[^redmonk-valkey] The CNCF's ownership of the NATS trademark stopped Synadia from taking it back.[^cncf-nats-agree]

# Evidence

| Pattern | Examples | Links |
|---|---|---|
| Donate, then sell | Ray, vLLM, DuckDB, SQLMesh, Spin, Cilium | [Ray to PyTorch Foundation](/events/2025-10-ray-joins-pytorch-foundation.md), [vLLM to PyTorch Foundation](/events/2025-05-pytorch-foundation-umbrella-vllm.md), [SQLMesh to LF](/events/2026-03-sqlmesh-linux-foundation.md) |
| Standards from the start | MCP, A2A, OTel, Iceberg, React | [AAIF](/events/2025-12-agentic-ai-foundation-launch.md), [A2A joins AAIF](/events/2026-08-a2a-joins-aaif.md), [OTel graduates](/events/2026-05-opentelemetry-graduates.md), [React Foundation](/events/2025-10-react-foundation-announced.md) |
| Fork shelter | Valkey, OpenTofu, OpenSearch, OpenBao, Pekko | [Valkey](/projects/licensing-forks/valkey.md), [OpenTofu joins CNCF](/events/2025-04-opentofu-joins-cncf.md) |
| Trademark defense | NATS | [NATS dispute](/events/2025-04-synadia-cncf-nats-dispute.md) |
| Vendor-coalition rescue | MySQL (OurSQL), pgBackRest | [OurSQL](/events/2026-05-oursql-foundation-mysql-governance.md) |
| Nonprofit continuity | Ghostty, Zig, Codeberg, Ladybird | [Devtools review](/domains/devtools-languages.md) |

# Limits of the pattern

- Foundations cannot create maintainers. CNCF retired ingress-nginx because nobody would maintain it. See [The maintainer cliff](/trends/maintainer-cliff-and-ai-burden.md).
- Governance institutions themselves wobbled: the OSI paused its elections, the Nixpkgs core team dissolved, and Automattic's board tried and failed to oust its CEO. See [OSI pauses elections](/events/2026-01-osi-pauses-board-elections.md) and [Nixpkgs core team dissolves](/events/2026-08-nixpkgs-core-team-dissolves.md).
- Foundation membership is pay-to-play. Big vendors still set the direction.

# Related

- [Acquired OSS often goes quiet](/trends/acquired-oss-goes-quiet.md)
- [License pendulum](/trends/license-pendulum.md)

[^lf-aaif-pr]: Linux Foundation press release.
[^cncf-nats-agree]: CNCF announcement.
[^redmonk-valkey]: RedMonk.
[^cncf-otel-grad]: CNCF announcement.
