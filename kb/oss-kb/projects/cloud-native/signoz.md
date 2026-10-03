---
type: OSS Project
title: "SigNoz"
description: "OpenTelemetry-native, ClickHouse-backed open-source observability platform (Datadog alternative); grew to ~32k GitHub stars with weekly releases through 2026 — a growing OTel-first challenger, though business metrics are not public."
resource: https://github.com/SigNoz/signoz
tags: [cloud-native, observability, opentelemetry, open-core, clickhouse]
domain: cloud-native
license: "MIT (core) + proprietary ee/ directory"
license_history: ["MIT core with enterprise directory (2021-)"]
governance: company-led-open-core
steward: SigNoz Inc.
backing_orgs: []
metrics:
  github_stars: { value: 32267, as_of: 2026-10-03 }
  latest_release: { value: "v0.144.0 (2026-09-29)", as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: growing
momentum_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: signoz-gh
    resource: https://github.com/SigNoz/signoz
    title: "SigNoz GitHub repository and releases"
    last_modified: 2026-10-03T00:00:00Z
  - id: signoz-funding
    resource: https://signoz.io/blog/signoz-funding/
    title: "SigNoz blog: We've raised $6.5M to build the future of open source observability (Sep 2023)"
    author: org:signoz
  - id: signalfire-signoz
    resource: https://www.signalfire.com/blog/signoz-pioneers-open-source-observability-with-65m-led-by-signalfire
    title: "SignalFire: SigNoz pioneers open source observability with $6.5M"
  - id: signoz-foundry
    resource: https://signoz.io/changelog/2026-02-18-introducing-foundry-a-simpler-way-to-deploy-signoz-ub8ipzqlfpwizb79qmp7l80z/
    title: "SigNoz changelog v0.112.0 (2026-02-18): Foundry deployment tool"
    author: org:signoz
  - id: signoz-mcp
    resource: https://signoz.io/changelog/2026-05-01-introducing-the-signoz-mcp-server-r5iwnkpxtsz88akwt6abqddn/
    title: "SigNoz changelog v0.121.1 (2026-05-01): SigNoz MCP server"
    author: org:signoz
  - id: cncf-otel-grad
    resource: https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/
    title: "CNCF announces OpenTelemetry's graduation"
---

# Summary
SigNoz positions itself as an "open-source, OpenTelemetry-native observability platform" unifying logs, metrics and traces on ClickHouse[^signoz-gh]. It is one of the main beneficiaries of OTel becoming the de facto standard[^cncf-otel-grad]: with collection standardized, a single-binary OTel-native backend is a credible Datadog/New Relic alternative. The repo has ~32k stars, 7,000+ commits and a weekly release train (v0.133 in mid-July 2026 to v0.144 on Sep 29, 2026)[^signoz-gh]. Its last disclosed financing is a $6.5M seed led by SignalFire (Sep 28, 2023; Uncorrelated Ventures, Alumni Ventures and GitHub co-founder Tom Preston-Werner participated); no 2025-2026 round was found[^signoz-funding][^signalfire-signoz]. Verdict: OSS **growing**; business **growing** but thinly capitalized relative to rivals (revenue not public).

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W3 | 2026-07-15 → 2026-09-29 | Weekly releases v0.133 – v0.144[^signoz-gh] | OSS | + |
| W9 | 2026-02-18 | v0.112: "Foundry" simplified self-host deployment[^signoz-foundry] | OSS | + |
| W6 | 2026-05-01 | v0.121.1: SigNoz MCP server for AI agents[^signoz-mcp] | OSS | + |
| W6 | 2026-05-21 | OTel graduation strengthens OTel-native vendors' pitch[^cncf-otel-grad] | OSS | + |

# OSS successes
- High release velocity (weekly) and large community for a young project (~32k stars)[^signoz-gh].
- Rides the OTel standard rather than proprietary agents.

# OSS failures / risks
- GitHub reports the license as NOASSERTION because the repo mixes an MIT core with an enterprise directory[^signoz-gh]; open-core boundary may shift.
- ~1.1k open issues signals support load outpacing maintainers[^signoz-gh].

# Business successes
- SigNoz Cloud and enterprise offerings, funded by a modest $6.5M seed (2023)[^signoz-funding]; ARR is not public.

# Business failures / risks
- Small war chest vs. rivals: no disclosed raise since 2023[^signalfire-signoz]. (Corrected in pass 2: search-engine snippets dating a $5.4M SignalFire round to "July 2026" are wrong; the round was announced Sep 2023.)
- Competes against well-funded Grafana Labs, Datadog and ClickHouse's own observability push.

# By window
## W3
- v0.133-v0.144 weekly releases[^signoz-gh].
## W6
- SigNoz MCP server (May 1)[^signoz-mcp]; OTel graduation tailwind[^cncf-otel-grad].
## W9
- Foundry deployment tool (v0.112, Feb 18)[^signoz-foundry].
## W12
- No notable events found.
## W24
- No notable events found beyond continuous releases.

# Lessons
- Once a collection standard exists, new entrants can compete purely on backend cost and UX.

# Related
- [OpenTelemetry](/projects/cloud-native/opentelemetry.md), [Grafana](/projects/cloud-native/grafana.md), [Jaeger](/projects/cloud-native/jaeger.md)

[^signoz-gh]: https://github.com/SigNoz/signoz
[^signoz-funding]: https://signoz.io/blog/signoz-funding/
[^signalfire-signoz]: https://www.signalfire.com/blog/signoz-pioneers-open-source-observability-with-65m-led-by-signalfire
[^signoz-foundry]: https://signoz.io/changelog/2026-02-18-introducing-foundry-a-simpler-way-to-deploy-signoz-ub8ipzqlfpwizb79qmp7l80z/
[^signoz-mcp]: https://signoz.io/changelog/2026-05-01-introducing-the-signoz-mcp-server-r5iwnkpxtsz88akwt6abqddn/
[^cncf-otel-grad]: https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/
