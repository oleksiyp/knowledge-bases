---
type: Methodology
title: Methodology and scope
description: Research boundaries, source incentives, claim dates, and OKF provenance.
tags:
- ai-micro-saas
- references
status: stable
generated:
  by: openai/codex
  at: '2026-10-05T00:00:00Z'
stale_after: '2027-01-05T00:00:00Z'
sources:
- id: okf
  resource: https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md
  title: Open Knowledge Format specification v0.2
  source_kind: specification
  accessed: '2026-10-05'
  evidence_limit: Format reference, not research evidence
---

# Methodology and scope

## Research question

What are people building with AI, how do they attract attention, and what evidence connects distribution to paying customers? Research was conducted on October 5, 2026, covering historical accounts from 2023 onward. Source dates are not automatically dates of the underlying events. Undated interviews remain undated.

The core sample comprises six case studies with explicit reported AI-assisted implementation, using Lovable, Bolt, or Cursor. Seven additional case studies examine AI-powered products whose implementation method was not established, including a paired negative case. These comparators contribute marketing evidence without being relabeled as AI-coded.

## Inclusion and exclusions

“Micro-SaaS” is used as a research starting point for narrowly scoped, small-builder software businesses, not a certified employee-count category. Each case states its actual model and scope. The corpus separately marks transaction services, physical commerce, funded comparators, and small-team origins that grew larger. Unknown current team sizes stay unknown.

Searches covered named founders, AI development tool customer stories, Indie Hackers interviews, first-person community posts, creator marketing, affiliates, SEO, and launch channels. Follow-up reading prioritized the original interview or product/program page behind an assertion. Vendor profiles were included because they provide attributable build-method testimony; they were not treated as independent validation.

Anonymous revenue anecdotes and derivative growth summaries were used only as discovery leads, not upgraded into named success evidence. Internal tools at large established companies were excluded from the micro-business sample. Open-source popularity alone was not treated as paid SaaS distribution. This bundle does not extend or modify oss-kb.

## Evidence classes

| Class | What it can establish | What it cannot establish alone |
|---|---|---|
| Named founder interview | What the founder reports about actions and outcomes | Audited revenue or causal attribution |
| Vendor customer interview | Reported use of a tool, described workflow | Representative success rate or independent comparison |
| First-person forum post | A public claim or attempted tactic at a date | Paid traction without supporting data |
| Product or program page | Advertised feature, offer, or terms | Customer uptake or incremental channel return |
| Platform policy | Rules or guidance at access time | Expected marketing effectiveness |
| Editorial synthesis | A transparent interpretation or proposed experiment | A newly observed empirical result |

Confidence is claim-specific. A public affiliate offer is stronger evidence of the offer’s existence than a promotional testimonial is of its incremental revenue. No case here was independently financially audited. No codebase was audited to establish the extent of AI contribution. “Reported AI-assisted” is therefore deliberately narrower than “independently verified AI-built.”

## Comparability and causal limits

Revenue claims retain their original units. One-time sales, monthly receipts, subscriptions, annualized run rates, bookings, and profit are different quantities. A platform listing can be observed without knowing whether it generated a customer. Founder attribution is useful testimony but not a controlled experiment. Prior audience, timing, pricing, product changes, funding, and industry experience are possible confounders.

Historical figures are not refreshed by the date this document was generated. The pages deliberately omit a numerical success rate and a universal channel ranking. This is a purposive public-source sample with substantial survivorship, English-language, and platform-promotion bias.

## OKF representation

The bundle follows OKF v0.2: concept frontmatter, source identifiers joined to footnotes, bundle-absolute links, reserved folder indexes, generation metadata, and an explicit staleness date. No human verification is claimed.[^okf] Synthesis pages point to the case concepts from which they derive; those source links are populated in frontmatter as internal provenance edges.

For maintenance, update source observations and claim dates separately, preserve historical snapshots where useful, and record meaningful changes in the [log](/log.md). Run `python3 references/validate_okf.py` from the bundle directory after edits.

[^okf]: [Open Knowledge Format specification v0.2](https://github.com/GoogleCloudPlatform/knowledge-catalog/blob/main/okf/SPEC.md).
