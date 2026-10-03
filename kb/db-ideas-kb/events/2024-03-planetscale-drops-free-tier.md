---
type: Event
title: "PlanetScale kills its free Hobby tier and lays off staff"
description: "PlanetScale ended free databases (new Hobby databases blocked Mar 6, plan retired Apr 8, 2024) alongside layoffs, citing profitability. It is the clearest signal that VC-funded free serverless tiers were unsustainable."
date: 2024-03-06
year: 2024
kind: pivot
signal: negative
ideas: [ideas/cloud-architecture/serverless-databases]
systems: [systems/planetscale]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ps-hobby
    resource: https://planetscale.com/changelog/deprecating-hobby
    title: "PlanetScale changelog: Deprecating the Hobby plan"
    author: org:planetscale
  - id: reg-ps
    resource: https://www.theregister.com/2024/03/11/planetscale_lays_off_staff_and/
    title: "The Register: PlanetScale lays off staff and kills free tier"
    author: org:the-register
  - id: logrocket
    resource: https://blog.logrocket.com/11-planetscale-alternatives-free-tiers/
    title: "LogRocket: 11 PlanetScale alternatives with free tiers"
  - id: pavlo-2025
    resource: https://www.cs.cmu.edu/~pavlo/blog/2026/01/2025-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2025: A Year in Review"
    author: person:andy-pavlo
---

# What happened
PlanetScale stopped new Hobby (free) databases on Mar 6, 2024 and retired the plan on Apr 8, 2024. Unupgraded databases went to sleep, and the cheapest paid option became $39/month. CEO Sam Lambert said the company needed to "prioritize profitability and build a company that can last forever". Layoffs, mostly in sales and marketing, were announced at the same time[^ps-hobby][^reg-ps].

# Why it matters
Free serverless tiers had been the growth engine for developer databases since 2021. PlanetScale's reversal, and the developer backlash, showed their cost once funding tightened. Neon and Supabase picked up many of the displaced hobby users. PlanetScale itself refocused on paid production workloads and later on Postgres.

# Related
[Serverless databases](/ideas/cloud-architecture/serverless-databases.md) · [PlanetScale](/systems/planetscale.md)
