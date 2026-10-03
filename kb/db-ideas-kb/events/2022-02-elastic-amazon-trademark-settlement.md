---
type: Event
title: "Elastic and Amazon settle the Elasticsearch trademark lawsuit"
description: "In Feb 2022 Elastic and Amazon resolved the trademark suit Elastic filed in 2019; AWS stopped using the Elasticsearch name in its services. Trademark proved a stronger lever than the license."
date: 2022-02-16
year: 2022
kind: license-change
signal: mixed
ideas: [ideas/business-licensing/forks-as-backlash, ideas/business-licensing/hyperscalers-capture-dbms-market]
systems: [systems/elasticsearch, systems/opensearch]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: reg
    resource: "https://www.theregister.com/2022/02/17/elastic_amazon_trademark/"
    title: "The Register: Elastic and Amazon settle trademark case (2022-02-17)"
  - id: sdtimes
    resource: "https://sdtimes.com/softwaredev/elastic-and-amazon-reach-an-agreement-on-the-trademark-infringement-lawsuit/"
    title: "SD Times: Elastic and Amazon reach an agreement on trademark infringement lawsuit"
  - id: stack
    resource: "https://www.thestack.technology/the-big-interview-their-product-sucked-elastic-cto-shay-banon-on-suing-aws-and-returning-to-oss/"
    title: "The Stack: Shay Banon on suing AWS and returning to OSS"
---

# What happened

Elastic had sued Amazon in 2019 over the use of "Elasticsearch" in AWS product names, including Open Distro for Elasticsearch. In February 2022 the parties settled: AWS agreed to stop using the Elasticsearch name in its projects and services. It had already renamed its managed service to Amazon OpenSearch Service in September 2021.[^reg][^sdtimes]

# Why it matters

The trademark, not the license, was the asset AWS could not route around. Elastic CTO Shay Banon later framed the lawsuit as the decisive part of the fight with AWS, which made the 2024 return to open source (AGPL) possible.[^stack] It is a lesson for vendors: own and defend the trademark, because the code can be forked.

# Related

- [Forks as backlash](/ideas/business-licensing/forks-as-backlash.md) · [Elastic adds AGPL](/events/2024-08-elastic-agpl.md)

[^reg]: The Register: Elastic and Amazon settle trademark case (2022-02-17).
[^sdtimes]: SD Times: Elastic and Amazon reach an agreement on trademark infringement lawsuit.
[^stack]: The Stack: Shay Banon on suing AWS and returning to OSS.
