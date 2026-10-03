---
type: Event
title: Meta launches closed Muse Spark, sidelining Llama
description: "On 8 Apr 2026 Meta Superintelligence Labs launched Muse Spark as a proprietary model with no weights — Meta's retreat from open frontier models; it later released the Apache-2.0 Muse Glimmer 30B (Aug 2026)."
event_kind: other
date: 2026-04-08
window: W6
impact: negative
projects: [projects/ai-models/meta-llama]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: vb-muse-spark
    resource: https://venturebeat.com/technology/goodbye-llama-meta-launches-new-proprietary-ai-model-muse-spark-first-since
    title: "VentureBeat: Goodbye, Llama? Meta launches new proprietary AI model Muse Spark"
    author: org:venturebeat
  - id: cnbc-avocado
    resource: https://www.cnbc.com/2025/12/09/meta-avocado-ai-strategy-issues.html
    title: "CNBC: From Llamas to Avocados"
    author: org:cnbc
  - id: wiki-muse
    resource: https://en.wikipedia.org/wiki/Muse_Spark
    title: "Wikipedia: Muse Spark"
  - id: wiki-msl
    resource: https://en.wikipedia.org/wiki/Meta_Superintelligence_Labs
    title: "Wikipedia: Meta Superintelligence Labs"
  - id: infoq-glimmer
    resource: https://www.infoq.com/news/2026/08/meta-muse-glimmer/
    title: "InfoQ: Meta open-sources Muse Glimmer, a 30B local agentic model (2026-08)"
    author: org:infoq
---

# What happened
After months of reports that its "Avocado" model would be closed[^cnbc-avocado], Meta launched Muse Spark on 8 Apr 2026 — MSL's first model — available only in Meta AI and a private API preview, with no weights[^vb-muse-spark]. Alexandr Wang said bigger models were in development "with plans to open-source future versions"; a spokesperson said current Llama models "will continue to be available as open source"[^vb-muse-spark].

# Why it matters
Meta was the leading US champion of open weights (Llama ~1.2B downloads)[^vb-muse-spark]. Its retreat left Google (Gemma), OpenAI (gpt-oss), NVIDIA (Nemotron) and startups to carry US open models.

# Outcome so far
Muse Spark iterated to v1.3 (Sept 2026) and Muse Code launched (Aug 2026); on 10 Aug 2026 Meta released Muse Glimmer, a 30B model distilled from Muse Spark, under Apache-2.0 (runs on a single 24 GB consumer GPU; no Meta-hosted API)[^infoq-glimmer] — a smaller, more permissively licensed open model, but not a frontier one. Llama itself shows no new releases[^wiki-msl].

# Related
- [Meta Llama](/projects/ai-models/meta-llama.md), [Llama 4 launch](/events/2025-04-llama-4-launch-and-lmarena-controversy.md)

[^vb-muse-spark]: VentureBeat, Apr 2026.
[^cnbc-avocado]: CNBC, 9 Dec 2025.
[^wiki-muse]: Wikipedia, Muse Spark.
[^wiki-msl]: Wikipedia, MSL.
[^infoq-glimmer]: InfoQ, Aug 2026.
