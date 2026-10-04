---
type: System
title: BigchainDB
description: A blockchain database whose open-source development slowed; its architecture
  and stalled release history are distinct from QLDB's centrally operated ledger service.
resource: https://github.com/bigchaindb/bigchaindb
tags:
- ledger
- blockchain
- tendermint
kind: oss
license: Apache-2.0
org: BigchainDB project
outcome: struggling
ideas:
- ideas/nosql-models/ledger-databases
sources:
- id: repo
  resource: https://github.com/bigchaindb/bigchaindb
  title: BigchainDB repository
- id: changes
  resource: https://github.com/bigchaindb/bigchaindb/blob/master/CHANGELOG.md
  title: BigchainDB release history
- id: whitepaper
  resource: https://www.bigchaindb.com/whitepaper/bigchaindb-whitepaper.pdf
  title: BigchainDB 2.0 whitepaper
status: stable
generated:
  by: codex
  at: '2026-10-03T12:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
---

# Summary

BigchainDB combined a document-oriented database with blockchain-style asset records and distributed agreement. Version 2.0 used Tendermint rather than QLDB's single trusted service operator, so the two products should not be treated as identical approaches.[^whitepaper] The public repository remains accessible under Apache 2.0, while its published changelog ends with version 2.2.2 dated August 12, 2020.[^repo][^changes]

# Timeline

| Year | Event |
|---|---|
| 2018 | Version 2.0 architecture described in the project whitepaper[^whitepaper] |
| 2020 | Changelog records 2.2.2 on August 12[^changes] |
| 2026 review | Repository and historical documentation remain accessible; this review does not establish an actively maintained production release[^repo][^changes] |

# What worked

The architecture made the trust question explicit: records agreed by multiple participants are different from an append-only journal controlled by one operator. Its open code also preserves the ability to inspect and continue the implementation even after release activity slows.[^whitepaper][^repo]

# What didn't

The visible release history does not support a story of sustained mainstream engine development. That is enough to flag maintenance and compatibility risks, but not to invent an exact company shutdown date or assert that every existing deployment disappeared.[^changes]

The transferable lesson is to separate a useful integrity property from the cost of maintaining an entire database ecosystem. A product needs an ongoing release process, operational guidance and a reason for customers to choose its trust model. Cryptographic records alone do not resolve query flexibility, deployment complexity or lifecycle obligations. This causal interpretation explains the cautious outcome label; no revenue census is available here.

# Related

- [Ledger databases](/ideas/nosql-models/ledger-databases.md)
- [Amazon QLDB](/systems/amazon-qldb.md)
