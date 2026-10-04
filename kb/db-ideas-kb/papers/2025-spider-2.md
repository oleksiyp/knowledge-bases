---
type: Paper
title: "Spider 2.0: Evaluating Language Models on Real-World Enterprise Text-to-SQL Workflows"
description: "A benchmark of 632 enterprise text-to-SQL workflows over real BigQuery/Snowflake/local databases with 1,000+ column schemas. The best o1-preview agent solved 21.3%, against 91.2% on Spider 1.0 and 73.0% on BIRD, deflating 'text-to-SQL is solved' claims."
year: 2025
venue: ICLR 2025 (Oral)
authors: [Fangyu Lei, Jixuan Chen, Yuxiao Ye, Ruisheng Cao, Dongchan Shin, Hongjin Su, Zhaoqing Suo, Hongcheng Gao, Wenjing Hu, Pengcheng Yin, Victor Zhong, Caiming Xiong, Ruoxi Sun, Qian Liu, Sida Wang, Tao Yu]
resource: https://arxiv.org/abs/2411.07763
impact: medium
ideas: [ideas/vector-ai/text-to-sql]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: paper
    resource: https://arxiv.org/abs/2411.07763
    title: "arXiv 2411.07763"
  - id: gh
    resource: https://github.com/xlang-ai/Spider2
    title: "xlang-ai/Spider2 repository (news log)"
  - id: broken
    resource: https://arxiv.org/abs/2601.08778
    title: "Pervasive Annotation Errors Break Text-to-SQL Benchmarks and Leaderboards (2026)"
---

# Claim

Academic text-to-SQL benchmarks (Spider 1.0, BIRD) overstate readiness. Real enterprise work involves huge schemas (often 1,000+ columns), multiple SQL dialects, cloud warehouses (BigQuery, Snowflake), project codebases and multi-step transformations. On 632 such tasks, an o1-preview-based code agent solved only 21.3%, versus 91.2% on Spider 1.0 and 73.0% on BIRD.[^paper]

# What happened next

- It became the reference "hard" benchmark (with Spider 2.0-Lite and -Snow variants) for agentic text-to-SQL, and vendors began reporting results on it.
- The maintainers fixed evaluation-suite issues in October 2025 and refreshed the leaderboard. Evaluation depends on a hosted Snowflake account, which was suspended in August 2026.[^gh]
- A 2026 audit estimated 62.8% of Spider 2.0-Snow annotations contain errors, so leaderboard numbers need care.[^broken]
- Net effect: it reset expectations. Production text-to-SQL emphasizes curated semantic layers and human review.

# Related

- [Text-to-SQL](/ideas/vector-ai/text-to-sql.md) · [Text-to-SQL benchmarks are broken (2026)](/papers/2026-text-to-sql-benchmarks-broken.md)

[^paper]: Spider 2.0 abstract.
[^gh]: Spider2 repo news.
[^broken]: arXiv 2601.08778.
