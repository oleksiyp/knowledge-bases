---
type: Paper
title: "Pervasive Annotation Errors Break Text-to-SQL Benchmarks and Leaderboards"
description: "Found that 52.8% of BIRD Mini-Dev and 62.8% of Spider 2.0-Snow examples contain annotation errors. Re-evaluating on corrected data moved leaderboard ranks by up to ±9 places and dropped rank correlation from 0.85 to 0.32."
year: 2026
venue: CIDR 2026 (as 'Text-to-SQL Benchmarks are Broken'); arXiv 2601.08778
authors: [Tengjun Jin, Yoojin Choi, Yuxuan Zhu, Daniel Kang]
resource: https://arxiv.org/abs/2601.08778
impact: medium
ideas: [ideas/vector-ai/text-to-sql]
status: stable
generated: { by: codex/gpt-6, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: arxiv
    resource: https://arxiv.org/abs/2601.08778
    title: "arXiv 2601.08778 (Jan 2026)"
  - id: cidr
    resource: https://www.vldb.org/cidrdb/2026/text-to-sql-benchmarks-are-broken-an-in-depth-analysis-of-annotation-errors.html
    title: "CIDR 2026: Text-to-SQL Benchmarks are Broken: An In-Depth Analysis of Annotation Errors"
  - id: revisql
    resource: https://arxiv.org/abs/2603.20004
    title: "ReViSQL: Human-Level Text-to-SQL via RL on Verified Data (2026)"
---

# Claim

The two most-cited modern text-to-SQL benchmarks are largely mislabeled. The errors are wrong gold SQL, ambiguous questions, and mismatches between question semantics and the data. The authors put the error rate at 52.8% for BIRD Mini-Dev and 62.8% for Spider 2.0-Snow (the CIDR version reports 66.1% for Spider 2.0-Snow). After correcting a BIRD dev subset, 16 open-source agents shifted by −9 to +9 ranks, and Spearman correlation between original and corrected rankings fell from 0.85 to 0.32.[^arxiv][^cidr]

# What happened next

- Follow-up work trained on *verified* data. ReViSQL reported 93.2% on an expert-verified BIRD subset. The paper compares this with a 92.96% human baseline; its verified subset is not interchangeable with the original full benchmark, so this is not a general demonstration of superhuman SQL ability.[^revisql]
- It undercut years of leaderboard-driven claims and supports a broader lesson for the KB: in LLM-for-data research, evaluation quality is often the bottleneck.
- Impact on products is indirect so far. It reinforces vendors' move to customer-specific evaluation sets.

# Related

- [Text-to-SQL](/ideas/vector-ai/text-to-sql.md) · [Spider 2.0](/papers/2025-spider-2.md)

[^arxiv]: arXiv abstract.
[^cidr]: CIDR 2026 page.
[^revisql]: arXiv 2603.20004.
