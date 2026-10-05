---
type: Playbook
title: Measure the route from attention to retained contribution
description: A consistent vocabulary for revenue, attribution, cost, and cohort quality.
tags:
- ai-micro-saas
- playbooks
status: stable
generated:
  by: openai/codex
  at: '2026-10-05T00:00:00Z'
stale_after: '2027-01-05T00:00:00Z'
sources:
- id: concept-1
  resource: /evidence-matrix.md
  title: 'Evidence matrix: products, channels, and outcome limits'
---

# Measure the route from attention to retained contribution

This is a proposed measurement model, not an industry benchmark or an audit of the cases.

## Keep the units separate

| Metric | Definition for an experiment | Common misleading substitution |
|---|---|---|
| Reach | Platform-reported exposures or unique viewers; record which | Treating views as people who need the product |
| Qualified visit | Visitor matches the test’s intended task and market | Every click |
| Activation | Completion of a predefined useful product task | Account registration |
| New paid customer | First successful paid purchase, deduplicated | Trial start or cumulative users |
| MRR | Normalized recurring subscription revenue at a point in time | All cash received during a month |
| ARR | Annualized recurring run rate with stated definition | Lifetime deals, bookings, or one month of all sales × 12 |
| Attributed revenue | Receipts credited by a stated tracking rule | Incremental revenue caused by the channel |
| Contribution | Revenue less specified variable delivery and acquisition costs | Revenue or gross cash balance |
| Retention | Continued paid or active use for a defined cohort and interval | Total account count |

Report annual-prepayment cash separately from its normalized monthly subscription contribution. For one-off services, measure repeat purchase if relevant rather than forcing a subscription retention model. Do not compare different snapshots as if they were simultaneous.

## A minimal event record

Record acquisition date, campaign and creative, landing page, self-reported discovery, account or order identifier, activation date, first payment, refunds, recurring status, variable compute or fulfillment cost, and support effort. Store only data appropriate to the experiment. Preserve both first-touch and purchase-touch information; neither is a complete causal model.

Basic calculations:

- Paid conversion = new paid customers / explicitly defined eligible visitors or trials.
- Cash acquisition cost = channel cash spend / new paid customers attributed to the channel.
- Fully loaded experiment cost adds founder time, creative work, free usage, and tooling; report the assumptions.
- Cohort contribution = cohort receipts − refunds − variable service costs − associated acquisition costs.
- Payback is the first period when cumulative cohort contribution before acquisition cost covers acquisition cost.

Do not count an affiliate sale as incremental simply because a cookie exists. A holdout, phased rollout, or comparable untreated cohort can improve confidence, but small businesses should acknowledge uncertainty rather than manufacture statistical precision.

## Hypothetical worked example

An experiment spends €200 and attributes ten first orders of €30 each. Each order costs €10 to fulfill. Before refunds or founder time, contribution after acquisition is `10 × (€30 − €10) − €200 = €0`. A revenue screenshot would show €300; the test has not yet demonstrated profit. Two fully refunded orders with unrecovered delivery costs would make the result worse.

For subscriptions, do not forecast lifetime value from a few weeks of data or assume constant churn. Track realized contribution over time. Report small denominators alongside percentages: one retained customer out of two is not a stable 50% retention estimate.

## Review interval

Choose an interval that fits the task: an occasional purchase, a weekly activity, and a business subscription have different natural cadences. Inspect early activation immediately, then wait for a relevant repeat-use or renewal opportunity before claiming retention. See [the evidence matrix](/evidence-matrix.md) for the measurements absent from public stories.
