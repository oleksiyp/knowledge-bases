---
type: OSS Project
title: "Dagger"
description: "Programmable, container-based CI/CD engine from Docker founder Solomon Hykes; pivoted in 2025 toward AI agents (LLM primitive, container-use sandboxes for coding agents) — OSS stable, business repositioning toward the \"CI bottleneck\" created by coding agents."
resource: https://github.com/dagger/dagger
tags: [cloud-native, ci-cd, containers, ai-agents, apache-2.0, company-led]
domain: cloud-native
license: Apache-2.0
license_history: ["Apache-2.0 (2022-)"]
governance: company-led-open-core
steward: Dagger Inc.
backing_orgs: []
metrics:
  github_stars: { value: 16313, as_of: 2026-10-03 }
  container_use_stars: { value: 4055, as_of: 2026-10-03 }
  latest_release: { value: "v0.21.0 (2026-05-26)", as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: dagger-gh
    resource: https://github.com/dagger/dagger
    title: "Dagger GitHub repository"
    last_modified: 2026-10-03T00:00:00Z
  - id: cu-gh
    resource: https://github.com/dagger/container-use
    title: "dagger/container-use repository"
  - id: dagger-blog
    resource: https://dagger.io/blog
    title: "Dagger blog"
    author: org:dagger
  - id: tns-dagger
    resource: https://thenewstack.io/ai-dev-tools-how-to-containerize-agents-using-dagger/
    title: "The New Stack: How to containerize agents using Dagger"
---

# Summary
Dagger runs CI/CD pipelines as code inside containers. In 2025 it pivoted its narrative to AI: an LLM primitive and "self-healing pipelines" (Apr 23, 2025), then "Containing Agent Chaos" and the open-source container-use project (Jun 2025), which gives coding agents isolated, git-backed container workspaces[^dagger-blog][^cu-gh][^tns-dagger]. In September 2026 it framed coding-agent output as "The Great CI Bottleneck of 2026"[^dagger-blog]. The engine remains pre-1.0 (v0.21.0, May 2026) with ~16k stars; container-use reached ~4k stars[^dagger-gh][^cu-gh]. Verdict: OSS **stable**; business **stable** (no 2025-2026 funding verified).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-01-29 | Dagger Cloud v3 with tracing[^dagger-blog] | Business | + |
| W24 | 2025-04-23 | LLM primitive; self-healing pipelines with agents[^dagger-blog] | OSS | + |
| W24 | 2025-06-14 | "Containing Agent Chaos" / container-use for coding agents[^dagger-blog][^cu-gh] | OSS | + |
| W9 | 2026-03-30 | Cache control for module functions[^dagger-blog] | OSS | flat |
| W6 | 2026-05-26 | Dagger v0.21.0[^dagger-gh] | OSS | flat |
| W3 | 2026-09-15 | "The Great CI Bottleneck of 2026" positioning[^dagger-blog] | Business | flat |

# OSS successes
- Early, credible entrant in agent sandboxing (container-use)[^cu-gh].
- Broad SDK coverage (Go, Python, TypeScript, PHP, Java, Rust, Elixir)[^dagger-blog].

# OSS failures / risks
- Still 0.x after four years; frequent API changes.
- Agent-sandbox space crowded (E2B, Daytona, Docker's own sandboxes, cloud providers).

# Business successes
- Dagger Cloud v3 and module catalog for enterprise reuse[^dagger-blog].

# Business failures / risks
- Repeated repositioning (CUE-based CI → multi-language SDKs → AI agents) signals search for product-market fit.

# By window
## W3
- CI-bottleneck positioning (Sep 2026)[^dagger-blog].
## W6
- v0.21.0 (May 26, 2026)[^dagger-gh].
## W9
- Module function cache control[^dagger-blog].
## W12
- No notable events found.
## W24
- AI pivot: LLM primitive, container-use[^dagger-blog][^cu-gh].

# Lessons
- Container infrastructure vendors are re-selling isolation as "agent safety" — a real need but a fast-commoditizing one.

# Related
- [Docker](/projects/cloud-native/docker.md), [Temporal](/projects/cloud-native/temporal.md)

[^dagger-gh]: https://github.com/dagger/dagger
[^cu-gh]: https://github.com/dagger/container-use
[^dagger-blog]: https://dagger.io/blog
[^tns-dagger]: https://thenewstack.io/ai-dev-tools-how-to-containerize-agents-using-dagger/
