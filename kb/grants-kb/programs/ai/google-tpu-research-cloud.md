---
type: Grant Program
title: Google TPU Research Cloud (TRC)
description: Free Cloud TPU quota for researchers who agree to share results openly (papers, open-source code, blog posts). Rolling invitations; other GCP costs are not covered.
resource: https://sites.research.google/trc/about/
tags: [ai, compute, tpu, research, open-source]
category: ai
funder: funders/google
funder_type: corporate
region: global
applicant_types: [individual, academic, nonprofit, oss-project]
software_focus: [ai, research-software]
funding_type: credits
oss_required: preferred
equity_free: yes
amount_text: "Free Cloud TPU quota (temporary allocation; size set by Google)"
application_model: rolling
program_status: rolling
deadline_note: "Invitations sent on a rolling basis"
effort_to_apply: low
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: trc-about
    resource: https://sites.research.google/trc/about/
    title: "TPU Research Cloud — About"
  - id: trc-faq
    resource: https://sites.research.google/trc/faq/
    title: "TPU Research Cloud — FAQ"
---

# Summary

Google's TPU Research Cloud (TRC) gives accepted researchers free Cloud TPU quota on a cluster of more than 1,000 TPU devices. It supports TensorFlow, PyTorch, JAX and Julia.[^trc-about] Anyone can sign up to express interest, and Google sends invitations on a rolling basis. Quota appears in your GCP project within minutes of accepting.[^trc-faq] In return, participants must share their TRC-supported research publicly, through papers, open-source code or blog posts, and give feedback to Google.[^trc-faq] For open-source ML developers training or fine-tuning models, it is one of the most accessible free accelerator programs.

# Eligibility

- Open to anyone. Google does not publish restrictions by applicant type.[^trc-faq]
- Research must follow Google's AI Principles.[^trc-faq]

# What it funds

- TPU time only. VMs, storage and other GCP services are billed to you, though usually at small cost.[^trc-faq]

# Amounts & terms

- A temporary, free TPU quota. Duration and size are at Google's discretion, and extensions can be requested.[^trc-faq]
- Google asks you to acknowledge TRC in publications.[^trc-faq]

# How to apply

- Fill in the "apply now" form on the TRC site. Invitations follow if approved.[^trc-about][^trc-faq]

# Deadlines

| Date | Event |
|---|---|
| Rolling | — |

# Track record

- TRC has long backed open model training. Google does not publish counts on the pages consulted.

# Fit

- **Good fit if:** you train open models or run large experiments and will publish code.
- **Poor fit if:** you need GPUs or CUDA-only stacks, or you cannot publish your results.

# Related

- [Google (funder)](/funders/google.md)
- [NAIRR Pilot](/programs/ai/nsf-nairr-pilot.md)
- [EuroHPC AI Factories](/programs/ai/eurohpc-ai-factories-access.md)

[^trc-about]: TRC About — https://sites.research.google/trc/about/
[^trc-faq]: TRC FAQ — https://sites.research.google/trc/faq/
