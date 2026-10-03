---
type: OSS Project
title: Hugging Face Datasets
description: Apache-2.0 Python library for loading/streaming ML and scientific datasets from the Hugging Face Hub; steady releases (4.0 removed loading scripts in July 2025, 5.0 in June 2026 added agent-trace parsing) — healthy OSS whose owner is being acquired by NVIDIA.
resource: https://github.com/huggingface/datasets
tags: [datasets, machine-learning, python, apache-2.0, single-vendor, arrow]
domain: scientific-computing
license: Apache-2.0
license_history: ["Apache-2.0 (2020-)"]
governance: single-vendor
steward: Hugging Face
backing_orgs: [organizations/hugging-face]
metrics:
  github_stars: { value: 22024, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: acquired
momentum_by_window: { W3: flat, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ds-gh
    resource: https://github.com/huggingface/datasets
    title: huggingface/datasets GitHub repository
    last_modified: 2026-10-03T00:00:00Z
  - id: ds-400
    resource: https://github.com/huggingface/datasets/releases/tag/4.0.0
    title: "datasets 4.0.0 release notes (2025-07-09)"
  - id: ds-500
    resource: https://github.com/huggingface/datasets/releases/tag/5.0.0
    title: "datasets 5.0.0 release notes (2026-06-05)"
  - id: ds-releases
    resource: https://github.com/huggingface/datasets/releases
    title: huggingface/datasets releases
  - id: nv-hf-blog
    resource: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
    title: "NVIDIA blog: NVIDIA to Acquire Hugging Face (2026-09-03)"
---

# Summary
Datasets is the de facto loader for ML training and evaluation data, built on Apache Arrow and tightly coupled to the Hugging Face Hub[^ds-gh]. It shipped 3.1 (Oct 2024) through 5.0.1 (Jul 2026) — roughly monthly minors — with two breaking majors: 4.0 (2025-07-09) removed dataset loading scripts entirely, replaced `Sequence` with `List` and moved media decoding to TorchCodec[^ds-400]; 5.0 (2026-06-05) added loading/parsing of coding-agent traces (Claude Code, Codex, etc.) for SFT and made multi-shard streaming shuffle the default[^ds-500]. OSS health is stable-to-good but it is single-vendor, and its steward agreed in Sept 2026 to be acquired by NVIDIA[^nv-hf-blog].

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-31 | 3.1.0[^ds-releases] | OSS | + |
| W24 | 2025-07-09 | 4.0.0: loading scripts removed, TorchCodec decoding, `List` type[^ds-400] | OSS | +/− |
| W12 | 2025-10 → 12 | 4.2–4.4 releases[^ds-releases] | OSS | + |
| W9 | 2026-01 → 03 | 4.5–4.8 releases[^ds-releases] | OSS | + |
| W6 | 2026-06-05 | 5.0.0: agent-trace datasets, new streaming shuffle (breaking)[^ds-500] | OSS | + |
| W3 | 2026-07-28 | 5.0.1[^ds-releases] | OSS | ~ |
| W3 | 2026-09-03 | NVIDIA agrees to acquire Hugging Face[^nv-hf-blog] | Business | ~ |

# OSS successes
- Removing arbitrary-code loading scripts in 4.0 closed a long-standing security/maintenance hole and pushed the Hub toward Parquet-native datasets[^ds-400].
- Quickly adapted to the agent era (agent-trace parsing in 5.0)[^ds-500].

# OSS failures / risks
- 4.0's script removal broke many older community datasets that relied on loading scripts[^ds-400].
- Single-vendor governance; roadmap follows Hub product priorities.

# Business successes
- Part of the Hub moat that made Hugging Face an acquisition target[^nv-hf-blog].

# Business failures / risks
- Post-acquisition priorities under NVIDIA are unknown; neutrality pledge only[^nv-hf-blog].

# By window
## W3
- 5.0.1 (2026-07-28); NVIDIA–Hugging Face deal announced 2026-09-03[^ds-releases][^nv-hf-blog].
## W6
- 5.0.0 major release (2026-06-05)[^ds-500].
## W9
- 4.5.0–4.8.4 releases (Jan–Mar 2026)[^ds-releases].
## W12
- 4.2–4.4 releases[^ds-releases].
## W24
- 3.1–3.6 and the breaking 4.0 (2025-07-09)[^ds-400].

# Lessons
- Removing "convenient but unsafe" extensibility (executable loading scripts) is painful but sustainable when a canonical data format (Parquet) exists.
- Library value accrues to the platform that hosts the data, not the library itself.

# Related
- [/organizations/hugging-face.md](/organizations/hugging-face.md), [/events/2026-09-nvidia-to-acquire-hugging-face.md](/events/2026-09-nvidia-to-acquire-hugging-face.md)
- [/projects/data-engineering/apache-arrow.md](/projects/data-engineering/apache-arrow.md), [/projects/ai-inference/transformers.md](/projects/ai-inference/transformers.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^ds-gh]: https://github.com/huggingface/datasets
[^ds-400]: https://github.com/huggingface/datasets/releases/tag/4.0.0
[^ds-500]: https://github.com/huggingface/datasets/releases/tag/5.0.0
[^ds-releases]: https://github.com/huggingface/datasets/releases
[^nv-hf-blog]: https://blogs.nvidia.com/blog/nvidia-to-acquire-hugging-face/
