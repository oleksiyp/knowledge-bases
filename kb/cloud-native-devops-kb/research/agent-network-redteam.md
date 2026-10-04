---
type: Research
title: 'Agent networks: failures that isolated evaluations miss'
description: An internal red-team exercise demonstrates interaction risks without estimating production incident
  prevalence.
area: ai-operations
year: 2026
publication_date: '2026-04-30'
kind: red-team-exercise
evidence_strength: situated-primary-account
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T16:34:09Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: primary
  resource: https://www.microsoft.com/en-us/research/blog/red-teaming-a-network-of-agents-understanding-what-breaks-when-ai-agents-interact-at-scale/
  title: 'Agent networks: failures that isolated evaluations miss'
---

# Agent networks: failures that isolated evaluations miss

## Observed evidence

Microsoft Research reports red-teaming an internal platform of more than 100 agents. Observed mechanisms included malicious-message propagation, amplification of false claims, manipulation of verification relationships and chains that obscured an attack's origin.[^primary]

## Method and limits

This is an adversarial exercise in a particular internal network, not an outage report from a cloud control plane. It demonstrates possible failure mechanisms; it does not measure how often ordinary SRE agents fail or compare all competing models.

## Decision implication

For operational agents, test the complete communication and tool graph. Preserve the origin of evidence across handoffs, distinguish repeated claims from independent observations, and bound permissions at the executor. This application to DevOps is an inference from the demonstrated mechanisms.

* [Related assessment](/ideas/ai-operations/bounded-incident-agents.md)
* [Area review](/areas/ai-operations.md)

[^primary]: [Agent networks: failures that isolated evaluations miss](https://www.microsoft.com/en-us/research/blog/red-teaming-a-network-of-agents-understanding-what-breaks-when-ai-agents-interact-at-scale/)
