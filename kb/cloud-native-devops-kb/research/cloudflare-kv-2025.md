---
type: Research
title: 'Cloudflare Workers KV 2025: simplification and dependency concentration'
description: A storage dependency connected a local design tradeoff to a broad service disruption.
kind: postmortem
year: 2025
area: reliability
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:08:48Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: kv
  resource: https://blog.cloudflare.com/cloudflare-service-outage-june-12-2025/
  title: Cloudflare June 12, 2025 outage report
- id: kvdesign
  resource: https://blog.cloudflare.com/rearchitecting-workers-kv-for-redundancy/
  title: 'Cloudflare: rearchitecting Workers KV for redundancy'
---

# Cloudflare Workers KV 2025: simplification and dependency concentration

## Finding

Cloudflare’s June incident report and subsequent design explanation link Workers KV availability to a failed underlying provider and describe rebuilding redundancy.[^kv][^kvdesign]

## Method and limitations

The reports are first-party accounts of the failure and design response. They do not establish that the proposed architecture had already proven every resilience objective, nor that every Cloudflare product was unavailable.

## Interpretation for decisions

The important inference is to price both sides of a decision: simplifying dependencies reduces routine work, but may concentrate exceptional risk. The right countermeasure is a tested independent path for the critical operation, not an unqualified multi-cloud policy.

## Related

* [Idea assessment](/ideas/reliability/dependency-aware-resilience.md)
* [Area review](/areas/reliability.md)

[^kv]: [Cloudflare June 12, 2025 outage report](https://blog.cloudflare.com/cloudflare-service-outage-june-12-2025/)
[^kvdesign]: [Cloudflare: rearchitecting Workers KV for redundancy](https://blog.cloudflare.com/rearchitecting-workers-kv-for-redundancy/)
