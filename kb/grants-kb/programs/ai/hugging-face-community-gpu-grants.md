---
type: Grant Program
title: Hugging Face Community GPU Grants & ZeroGPU
description: Free GPU hardware upgrades for Hugging Face Spaces that show community value (academic demos, open-source projects), requested from Space settings. ZeroGPU gives free shared RTX PRO 6000 Blackwell GPUs to Gradio Spaces. Rolling, no deadline.
resource: https://huggingface.co/docs/hub/en/spaces-gpus
tags: [ai, compute, gpu, open-source, demos]
category: ai
funder: funders/hugging-face
funder_type: corporate
region: global
applicant_types: [individual, oss-project, academic]
software_focus: [ai, oss-infrastructure, research-software]
funding_type: credits
oss_required: preferred
equity_free: yes
amount_text: "In-kind GPU hardware for a Space (ZeroGPU or dedicated GPU); free accounts can host 2 ZeroGPU Spaces"
application_model: rolling
program_status: rolling
deadline_note: "Request from the Space settings at any time"
effort_to_apply: low
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: hf-gpus
    resource: https://huggingface.co/docs/hub/en/spaces-gpus
    title: "Using GPU Spaces — Community GPU Grants (Hugging Face docs)"
  - id: hf-zerogpu
    resource: https://huggingface.co/docs/hub/spaces-zerogpu
    title: "Spaces ZeroGPU: Dynamic GPU Allocation for Spaces"
  - id: hf-zerogpu-grant
    resource: https://huggingface.co/spaces/zero-gpu-explorers/README/discussions/121
    title: "Request for Community Grant for ZeroGPU (example request)"
---

# Summary

Hugging Face gives **community GPU grants**: free hardware upgrades for innovative Spaces. You request one with the "community grant" button in your Space's settings.[^hf-gpus] Separately, **ZeroGPU** assigns shared NVIDIA RTX PRO 6000 Blackwell GPUs on demand to Gradio Spaces. Free accounts in good standing can host up to two ZeroGPU Spaces, and PRO accounts up to ten.[^hf-zerogpu] Requests often say "Academic project", and Hugging Face staff review them case by case.[^hf-zerogpu-grant] It is the lowest-friction way to host a public demo of an open model.

# Eligibility

- Any Space owner. Academic demos and OSS projects with traction are typical.[^hf-gpus]
- ZeroGPU hosting needs a verified account at least 30 days old (free tier).[^hf-zerogpu]

# What it funds

- GPU hardware for the Space, either a ZeroGPU slot or dedicated GPUs.[^hf-gpus]
- Not training compute or cash.

# Amounts & terms

- Free ZeroGPU daily usage quotas apply to visitors (for example 5 min/day for a free account).[^hf-zerogpu]

# How to apply

- Open Space settings, choose "Apply for a community grant", and describe the project.[^hf-gpus]

# Deadlines

| Date | Event |
|---|---|
| Rolling | — |

# Track record

- Many academic paper demos are hosted on granted hardware (see the public grant-request discussions).[^hf-zerogpu-grant]

# Fit

- **Good fit if:** you want a public, GPU-backed demo of an open model or paper.
- **Poor fit if:** you need training compute (see [TRC](/programs/ai/google-tpu-research-cloud.md) or [EuroHPC](/programs/ai/eurohpc-ai-factories-access.md)).

# Related

- [Hugging Face (funder)](/funders/hugging-face.md)
- [Lambda Research Grant](/programs/ai/lambda-research-grant.md)

[^hf-gpus]: Hugging Face docs — https://huggingface.co/docs/hub/en/spaces-gpus
[^hf-zerogpu]: Hugging Face docs — https://huggingface.co/docs/hub/spaces-zerogpu
[^hf-zerogpu-grant]: Example request — https://huggingface.co/spaces/zero-gpu-explorers/README/discussions/121
