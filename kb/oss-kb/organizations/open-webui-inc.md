---
type: Organization
title: Open WebUI Inc.
description: "San Francisco company behind Open WebUI, founded by Timothy J. Baek; monetises enterprise/white-label licences enabled by its April 2025 branding clause; aggregators report a July 2026 Series B and ~$88M total funding (unconfirmed by primary sources)."
resource: https://openwebui.com
tags: [commercial-open-source, ai-apps, chat-ui, source-available]
org_kind: coss-startup
hq: San Francisco, USA
funding: { total_usd: "~$88M (aggregator-reported, unconfirmed)", last_round: "Series B (aggregator-reported)", last_round_date: 2026-07-09, valuation_usd: "undisclosed" }
business_verdict: growing
projects: [projects/ai-apps/open-webui]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: caplight-owui
    resource: https://www.caplight.com/company/openwebui
    title: "Caplight: Open WebUI funding history (aggregator)"
  - id: owui-license-docs
    resource: https://docs.openwebui.com/license/
    title: Open WebUI License documentation
  - id: owui-enterprise
    resource: https://docs.openwebui.com/enterprise/
    title: Open WebUI for Enterprise
  - id: owui-openrouter
    resource: https://openwebui.com/blog/open-webui-openrouter-interface-and-inference-for-enterprise-ai
    title: "Open WebUI blog: OpenRouter partnership (2026-05)"
  - id: owui-gh
    resource: https://github.com/open-webui/open-webui
    title: Open WebUI GitHub repository (LICENSE history)
---

# Summary
Open WebUI Inc. stewards the most-starred self-hosted LLM chat UI. Its licence moved MIT → BSD-3 (Jan 2025) → BSD-3 + branding clause + CLA (Apr 2025), so deployments over 50 users must keep branding or buy an enterprise licence[^owui-license-docs]. In April 2026 the copyright line moved from Timothy J. Baek to "Open WebUI Inc."[^owui-gh]. Caplight/Crunchbase-type aggregators list accelerator, seed, Series A and a Series B (2026-07-09) with Benchmark, 8VC, Theory Ventures, Pace, GTMfund and YC, totalling ~$88M; no primary announcement was found, so treat as unconfirmed[^caplight-owui].

# Business timeline
| Window | Date | Event | Signal |
|---|---|---|---|
| W24 | 2025-04-19 | Branding clause + CLA adopted[^owui-license-docs] | ± |
| W6 | 2026-04-14 | Copyright assigned to Open WebUI Inc. in LICENSE[^owui-gh] | ± |
| W6 | 2026-05-31 | OpenRouter enterprise partnership[^owui-openrouter] | + |
| W3 | 2026-07-09 | Series B (aggregator-reported)[^caplight-owui] | + |

# Monetization model
Enterprise licences (white-labelling, SSO/support), partner integrations; free for ≤50-user deployments[^owui-enterprise].

# Successes
- Converted massive community adoption into enterprise demand without a full source-available relicence.

# Failures / risks
- "Open" brand vs non-OSI licence; funding opacity; founder concentration.

# Related
- [Open WebUI](/projects/ai-apps/open-webui.md), [Branding licence event](/events/2025-04-open-webui-branding-license.md), [AI apps domain](/domains/ai-apps.md)

[^caplight-owui]: Caplight (aggregator) — https://www.caplight.com/company/openwebui
[^owui-license-docs]: Open WebUI License — https://docs.openwebui.com/license/
[^owui-enterprise]: Enterprise — https://docs.openwebui.com/enterprise/
[^owui-openrouter]: Open WebUI blog — https://openwebui.com/blog/open-webui-openrouter-interface-and-inference-for-enterprise-ai
[^owui-gh]: GitHub — https://github.com/open-webui/open-webui
