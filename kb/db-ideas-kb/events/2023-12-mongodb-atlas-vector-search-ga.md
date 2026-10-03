---
type: Event
title: "MongoDB Atlas Vector Search goes GA"
description: "MongoDB made Atlas Vector Search and dedicated Search Nodes generally available on 2023-12-04, six months after preview. The largest document database had absorbed vector search within a year of ChatGPT."
date: 2023-12-04
year: 2023
kind: launch
signal: positive
ideas: [ideas/vector-ai/vector-search-as-a-feature]
systems: [systems/mongodb]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: mdb
    resource: https://www.mongodb.com/company/newsroom/press-releases/mongo-db-announces-general-availability-of-new-capabilities-to-power-next-generation-apps
    title: "MongoDB: GA of Atlas Vector Search and Atlas Search Nodes (2023-12-04)"
    author: org:mongodb
  - id: calcalist
    resource: https://www.calcalistech.com/ctechnews/article/rz31q82b5
    title: "Calcalist: Pinecone weighs sale; MongoDB named among potential buyers"
---

# What happened

After a June 2023 preview, MongoDB declared Atlas Vector Search GA with dedicated Search Nodes so vector/search workloads scale separately from the operational cluster. Named customers included AT&T Cybersecurity and UKG.[^mdb]

# Why it matters

It is a clear example of bundling. Developers already storing JSON documents in Atlas got vectors next to their data with no new vendor. In 2025 MongoDB was reported among potential buyers of Pinecone, which shows the incumbents had become the specialists' exit market.[^calcalist]

# Related

- [Vector search as a feature](/ideas/vector-ai/vector-search-as-a-feature.md) · [MongoDB](/systems/mongodb.md)

[^mdb]: MongoDB press release.
[^calcalist]: Calcalist.
