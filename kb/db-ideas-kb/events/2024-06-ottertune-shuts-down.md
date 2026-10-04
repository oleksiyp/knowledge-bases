---
type: Event
title: "OtterTune shuts down"
description: "In June 2024 OtterTune, the ML-based database tuning startup spun out of Andy Pavlo CMU research, shut down and laid off its staff after an acquisition offer fell through."
date: 2024-06-14
year: 2024
kind: shutdown
signal: negative
ideas: [ideas/business-licensing/database-company-graveyard, ideas/ml-for-db/ml-knob-tuning]
systems: [systems/ottertune]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: ottertune
    resource: "https://ottertune.com/about-us"
    title: "OtterTune is Dead (2020-2024)"
  - id: hn
    resource: "https://news.ycombinator.com/item?id=40682165"
    title: "Hacker News: OtterTune is dead (June 2024)"
  - id: pavlo-2024
    resource: "https://www.cs.cmu.edu/~pavlo/blog/2025/01/2024-databases-retrospective.html"
    title: "Andy Pavlo: Databases in 2024: A Year in Review"
---

# What happened

OtterTune, founded by Andy Pavlo, Dana Van Aken and Bohan Zhang to commercialize ML-based tuning of MySQL and PostgreSQL knobs, shut down in June 2024. Its website now reads "OtterTune is Dead (2020–2024)".[^ottertune] Pavlo said publicly that the company was treated badly at the end by a private-equity-backed Postgres company whose acquisition offer fell through.[^hn][^pavlo-2024]

# Why it matters

It is a clean data point on the "self-driving database" business: tuning delivered measurable gains but was a feature that cloud providers and DBaaS vendors could build themselves, so it struggled as a standalone product.

# Related

- [Database company graveyard](/ideas/business-licensing/database-company-graveyard.md) · [OtterTune](/systems/ottertune.md)

[^ottertune]: OtterTune is Dead (2020-2024).
[^hn]: Hacker News: OtterTune is dead (June 2024).
[^pavlo-2024]: Andy Pavlo: Databases in 2024: A Year in Review.
