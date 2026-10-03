---
type: OSS Project
title: Microsoft Agent Framework (and Semantic Kernel)
description: Microsoft's MIT-licensed Python/.NET agent framework unifying AutoGen and Semantic Kernel ideas; reached 1.0 on 2026-04-02 with A2A/MCP interop, consolidating Microsoft's fragmented agent OSS.
resource: https://github.com/microsoft/agent-framework
tags: [ai-agents, agent-framework, mit, single-vendor, big-tech, dotnet]
domain: ai-agents
license: MIT
license_history: ["MIT (2025-)"]
governance: single-vendor
steward: Microsoft
backing_orgs: []
metrics:
  github_stars: { value: 13913, as_of: 2026-10-03 }
  github_forks: { value: 2416, as_of: 2026-10-03 }
  semantic_kernel_github_stars: { value: 28620, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: n/a }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: maf-gh
    resource: https://github.com/microsoft/agent-framework
    title: Microsoft Agent Framework GitHub repository (created 2025-04-28; API stats 2026-10-03)
  - id: maf-releases
    resource: https://github.com/microsoft/agent-framework/releases
    title: "MAF releases: python-1.0.0 / dotnet-1.0.0 (2026-04-02), python-github-copilot-1.0.0 (2026-07-23)"
  - id: autogen-gh
    resource: https://github.com/microsoft/autogen
    title: AutoGen README (maintenance mode; MAF named as successor)
  - id: sk-gh
    resource: https://github.com/microsoft/semantic-kernel
    title: Semantic Kernel GitHub repository (dotnet-1.80.1, 2026-09-03)
---

# Summary
Microsoft Agent Framework (MAF) is Microsoft's consolidated agent SDK for Python and .NET (repo created 2025-04-28), designed as the successor to AutoGen and the agent layer over Semantic Kernel[^maf-gh][^autogen-gh]. Version 1.0 shipped for both languages on 2026-04-02 with "stable APIs, and a commitment to long-term support" and A2A/MCP interop; a GitHub Copilot integration package hit 1.0 on 2026-07-23[^maf-releases][^autogen-gh]. Semantic Kernel (28.6k stars) continues releasing (dotnet-1.80.1, Sep 2026)[^sk-gh]. Verdict: OSS **growing** (13.9k stars, still well behind AutoGen's legacy brand); business n/a.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-28 | Repo created | OSS | + [^maf-gh] |
| W12 | 2025-Q4 | Public preview announced (exact date unverified in this pass) | OSS | + [^maf-gh] |
| W9 | 2026-04-02 | MAF 1.0 for Python and .NET | OSS | + [^maf-releases] |
| W6 | 2026-04 | AutoGen put in maintenance mode; users directed to MAF | OSS | ~ [^autogen-gh] |
| W3 | 2026-07-23 | GitHub Copilot integration package 1.0 | OSS | + [^maf-releases] |

# OSS successes
- Ends Microsoft's three-way split (AutoGen, Semantic Kernel, Azure AI Agent SDK) with one supported path[^autogen-gh].
# OSS failures / risks
- Migration burden on AutoGen users; single-vendor and Azure-leaning.
# Business successes
- n/a (feeds Azure AI Foundry).
# Business failures / risks
- n/a.

# By window
## W3
- Copilot integration 1.0[^maf-releases].
## W6
- AutoGen users migrate[^autogen-gh].
## W9
- 1.0 release[^maf-releases].
## W12
- Preview phase.
## W24
- Repo created[^maf-gh].

# Lessons
- Big-tech consolidation of overlapping OSS projects improves clarity but strands earlier communities.

# Related
- [/projects/ai-agents/autogen.md](/projects/ai-agents/autogen.md), [/projects/ai-agents/ag2.md](/projects/ai-agents/ag2.md)
- [/events/2026-04-microsoft-agent-framework-1-0.md](/events/2026-04-microsoft-agent-framework-1-0.md)

[^maf-gh]: https://github.com/microsoft/agent-framework
[^maf-releases]: https://github.com/microsoft/agent-framework/releases
[^autogen-gh]: https://github.com/microsoft/autogen
[^sk-gh]: https://github.com/microsoft/semantic-kernel
