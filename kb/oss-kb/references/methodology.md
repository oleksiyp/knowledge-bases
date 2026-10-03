---
type: Reference
title: Methodology and conventions
description: How this OSS success/failure knowledge base was researched, structured, scored and should be read.
tags: [methodology, meta]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: okf-spec
    resource: https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md
    title: Open Knowledge Format (OKF) v0.2 specification
    author: org:google-cloud
---

# Format

The bundle conforms to OKF v0.2.[^okf-spec] Every concept is a markdown file with YAML
frontmatter carrying a `type`. All concepts are agent-generated (`generated.by:
claude-code/claude-opus-5-5`) and have no `verified` key, so their trust tier is
**unverified**. A human reviewer should add `verified: { by: human:<id>, at: ... }`
after checking a concept. Each concept has `stale_after: 2027-01-03`, three months after it was
generated.

Conformance can be checked with `python3 references/validate_okf.py .`. The script checks for
parseable frontmatter, a non-empty `type`, footnote-to-`sources[].id` joins and bundle-absolute links.

# Time windows

The analysis uses non-overlapping bands that end on 2026-10-03:

| Label | Range                   | Reads as        |
|-------|-------------------------|-----------------|
| W3    | 2026-07-03 → 2026-10-03 | last 3 months   |
| W6    | 2026-04-03 → 2026-07-03 | 3–6 months ago  |
| W9    | 2026-01-03 → 2026-04-03 | 6–9 months ago  |
| W12   | 2025-10-03 → 2026-01-03 | 9–12 months ago |
| W24   | 2024-10-03 → 2025-10-03 | 1–2 years ago   |

To get "the last N months", combine the bands. For example, last 6 months = W3 + W6.

# Concept types

| Type            | Location                         | Purpose |
|-----------------|----------------------------------|---------|
| Executive Summary | `/executive-summary.md`        | Top-level synthesis |
| Domain Review   | `/domains/*.md`                  | Per-domain scorecard, by-window analysis, trends |
| Trend           | `/trends/*.md`                   | Cross-domain trend with evidence |
| Period Review   | `/periods/*.md`                  | What happened in one window, across all domains |
| OSS Project     | `/projects/<domain>/*.md`        | One project: OSS and business outcomes |
| Market Study    | `/projects/coss-market/*.md`     | Funding, M&A and business-model analyses |
| Organization    | `/organizations/*.md`            | Companies, foundations and labs behind projects |
| Event           | `/events/YYYY-MM-*.md`           | A dated, discrete event (license change, deal, incident...) |

# Verdict scales

These are producer-defined frontmatter extensions:

- `oss_verdict`: thriving · growing · stable · contested · declining · crisis · dead.
  It is judged on contributors, adoption, release cadence, governance health and the threat of forks.
- `business_verdict`: thriving · growing · stable · struggling · failed · acquired · n/a.
  It is judged on revenue, funding, valuation, layoffs and exits.
- `momentum_by_window`: up · flat · down · n/a for each window.

The verdicts are the research agents' judgements, derived from the cited evidence. They are not
measurements.

# Research process

**Pass 1:** eleven domain research agents ran in parallel, each using web search with primary sources preferred.
The domains were AI models, AI inference, AI agents, licensing and forks, databases, data
engineering, cloud native, devtools and languages, security and sustainability, end-user apps,
and the COSS market. A synthesis pass then produced the trend, period and executive-summary
concepts.

**Pass 2** ran after the search quota was raised:
- Five verification agents, each owning a disjoint set of files, re-checked pass-1 claims against
  primary sources (company posts, SEC/HKEX filings, foundation announcements, the GitHub API) and
  reputable press.
- They replaced all but one news-feed (RSS) headline source and cut Wikipedia sources from 232 to
  160. They corrected about 130 claims and added missing W3/W6 events.
- Where an agent checked every major claim in a concept, it added `verified: { by:
  claude-code/claude-opus-5-5-verifier, ... }`. That is a machine-confirmed trust tier, not human
  review.
- Five gap-fill agents added four new domains (AI apps, scientific computing, web platforms,
  hardware and embedded) and extended devtools and languages. The executive summary's governance cross-tab is computed from `governance` and `oss_verdict`
frontmatter across all `type: OSS Project` concepts.

Known limitations:

- In pass 1, the session's web-search quota (200 queries) ran out partway through. Pass 2 re-verified
  most of the affected claims.
  After that, agents verified facts by fetching primary pages directly: company blogs, SEC
  filings, foundation announcements, the GitHub API, Wikipedia, and news RSS indexes. Where
  only a news-index headline was available, the source entry points to the RSS query URL and
  the claim is flagged in the concept. Each domain review's "Open questions" section and the
  concepts themselves mark the facts that could not be verified.
- Some projects appear in two domains from different angles (for example Zed, npm, Open VSX,
  ingress-nginx, Redis/CockroachDB). The copies cross-link to each other.

- Recent events (W3, W6) rely on web search coverage that may be incomplete.
- Funding and valuation figures are as reported in the press. Private-company revenue is
  usually an estimate.
- Coverage leans toward projects with English-language press coverage and US/EU business activity.
