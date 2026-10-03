---
type: OSS Project
title: h2oGPT
description: "H2O.ai's Apache-2.0 private document-chat app (~12k stars) — last pushed Oct 2025 and archived read-only (reported Feb 2026) — dead."
resource: https://github.com/h2oai/h2ogpt
tags: [ai-apps, rag, apache-2.0, archived]
domain: ai-apps
license: Apache-2.0
license_history: ["Apache-2.0 (2023-)"]
governance: single-vendor
steward: H2O.ai
backing_orgs: []
metrics:
  github_stars: { value: 11955, as_of: 2026-10-03 }
  archived: { value: true, as_of: 2026-10-03 }
oss_verdict: dead
business_verdict: n/a
momentum_by_window: { W3: n/a, W6: n/a, W9: down, W12: down, W24: down }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: h2ogpt-gh
    resource: https://github.com/h2oai/h2ogpt
    title: h2oGPT GitHub repository (GitHub API — archived, last push 2025-10-09)
  - id: h2ogpt-pq
    resource: https://www.promptquorum.com/power-local-llm/h2ogpt-review
    title: "PromptQuorum: h2oGPT review 2026 — archived status"
---

# Summary
h2oGPT was H2O.ai's open answer to PrivateGPT (2023). The GitHub API shows it archived, with the last push on 2025-10-09[^h2ogpt-gh]; a review site reports archival on 2026-02-26[^h2ogpt-pq]. H2O.ai's commercial focus (Enterprise h2oGPTe) is closed. Verdict: dead; a vendor-side "open demo" retired once it stopped generating leads.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-10-09 | Last push[^h2ogpt-gh] | OSS | − |
| W9 | 2026-02-26 | Repository archived (reported)[^h2ogpt-pq] | OSS | − |

# OSS successes
- Clean archive (explicit end-of-life) rather than silent abandonment.
# OSS failures / risks
- Never built a community beyond the vendor.
# Business successes
- n/a.
# Business failures / risks
- n/a (H2O.ai's paid product is separate).

# By window
## W3
- n/a (archived).
## W6
- n/a (archived).
## W9
- Archived (reported)[^h2ogpt-pq].
## W12
- Final push[^h2ogpt-gh].
## W24
- Declining activity.

# Lessons
- Vendor-built "open" demos of a closed enterprise product rarely outlive the marketing cycle.

# Related
- [PrivateGPT](/projects/ai-apps/privategpt.md), [GPT4All](/projects/ai-apps/gpt4all.md)

[^h2ogpt-gh]: GitHub API, h2oai/h2ogpt — https://github.com/h2oai/h2ogpt
[^h2ogpt-pq]: PromptQuorum — https://www.promptquorum.com/power-local-llm/h2ogpt-review
