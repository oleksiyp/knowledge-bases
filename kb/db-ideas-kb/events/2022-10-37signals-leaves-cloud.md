---
type: Event
title: "37signals announces it is leaving the cloud"
description: "DHH's 'Why we're leaving the cloud' launched the cloud-repatriation debate. 37signals cut its $3.2M/yr cloud bill and by 2025 had moved its ~18 PB S3 footprint on-prem."
date: 2022-10-19
year: 2022
kind: pivot
signal: negative
ideas: [ideas/cloud-architecture/managed-dbaas-vs-repatriation]
systems: [systems/s3]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: dhh-leaving
    resource: https://world.hey.com/dhh/why-we-re-leaving-the-cloud-654b47e0
    title: "DHH: Why we're leaving the cloud"
    author: person:dhh
  - id: dcd-2m
    resource: https://www.datacenterdynamics.com/en/news/37signals-claims-it-saved-almost-2m-last-year-from-cloud-repatriation/
    title: "DCD: 37signals claims it saved almost $2m last year from cloud repatriation"
  - id: stack-s3exit
    resource: https://www.thestack.technology/dhh-aws-egress-s3-pure/
    title: "The Stack: AWS takes the egress hit as DHH actually exits the cloud"
  - id: dhh-10m
    resource: https://world.hey.com/dhh/our-cloud-exit-savings-will-now-top-ten-million-over-five-years-c7d9b5bd
    title: "DHH: Our cloud-exit savings will now top ten million over five years"
    author: person:dhh
---

# What happened
On Oct 19, 2022, David Heinemeier Hansson announced that 37signals (Basecamp, HEY) would move off AWS and Google Cloud, citing a $3.2M annual cloud bill and arguing that renting is a bad deal for medium-sized companies with stable growth[^dhh-leaving]. By 2024 the bill was down to $1.3M, all of it S3[^dcd-2m]. In 2025 the company moved its S3 data (about 18 PB of new Pure Storage capacity) on-prem, replacing ~$1.5M/yr of S3 with a system costing under $200k/yr. AWS waived a ~$250k egress bill[^stack-s3exit]. DHH projects savings of over $10M across five years[^dhh-10m].

# Why it matters
It is the best-documented repatriation case and the main counterexample to "managed cloud for everything". It also shows the limits: the savings depend on steady load and an operations-heavy team, and the broader market kept moving to cloud DBaaS.

# Related
[Managed DBaaS vs repatriation](/ideas/cloud-architecture/managed-dbaas-vs-repatriation.md) · [S3](/systems/s3.md)
