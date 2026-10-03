---
type: Event
title: "North Korea's Sapphire Sleet backdoors 140+ Mastra AI-framework npm packages"
description: "A hijacked maintainer account with publish rights across the Mastra scopes injected a typosquat dependency (easy-day-js) into 140+ packages; Microsoft attributed it to Sapphire Sleet."
event_kind: security-incident
date: 2026-06-17
window: W6
impact: negative
projects: [projects/security-sustainability/npm-registry]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ms-mastra
    resource: https://www.microsoft.com/en-us/security/blog/2026/06/17/postinstall-payload-inside-mastra-npm-supply-chain-compromise/
    title: "Microsoft: Inside the Mastra npm supply chain compromise"
---
# What happened
On 2026-06-16/17, the `ehindero` account was taken over and used to add easy-day-js (with a postinstall dropper) to 140+ mastra/@mastra packages. Microsoft attributes the attack to Sapphire Sleet (DPRK).[^ms-mastra]

# Why it matters
State actors are now targeting AI agent frameworks specifically.

# Outcome so far
Packages were cleaned up. The attack came three weeks before npm 12 disabled install scripts.

# Related
- [npm registry](/projects/security-sustainability/npm-registry.md)

[^ms-mastra]: Microsoft: Inside the Mastra npm supply chain compromise
