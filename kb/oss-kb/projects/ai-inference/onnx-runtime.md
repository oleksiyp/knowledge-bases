---
type: OSS Project
title: ONNX Runtime
description: "Microsoft's cross-platform inference runtime for ONNX models, important for edge/Windows and classic ML; steady releases but peripheral to the LLM-serving boom — stable."
resource: https://github.com/microsoft/onnxruntime
tags: [ai-inference, edge, mit, big-tech]
domain: ai-inference
license: MIT
license_history: ["MIT (2018-)"]
governance: single-vendor
steward: Microsoft
backing_orgs: []
metrics:
  github_stars: { value: 21989, as_of: 2026-10-03 }
  latest_release: { value: v1.30.0, as_of: 2026-09-10 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ort-gh
    resource: https://github.com/microsoft/onnxruntime
    title: ONNX Runtime GitHub repository (stars, releases via GitHub API)
  - id: hf-tf5
    resource: https://huggingface.co/blog/transformers-v5
    title: "Transformers v5 (interoperability incl. ONNXRuntime)"
---

# Summary
ONNX Runtime continues as Microsoft's portable inference layer (v1.30.0 on 2026-09-10; 22k stars)[^ort-gh] and is listed among the engines transformers v5 interoperates with[^hf-tf5]. It is not a primary LLM serving choice for datacenters, where vLLM/SGLang dominate. Verdict: stable.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W12 | 2025-12-01 | Named in transformers v5 interop list[^hf-tf5] | OSS | + |
| W3 | 2026-09-10 | v1.30.0[^ort-gh] | OSS | flat |

# OSS successes
- Broad hardware execution providers; edge/Windows reach[^ort-gh].
# OSS failures / risks
- Peripheral to LLM serving; single-vendor.
# Business successes
- n/a
# Business failures / risks
- n/a

# By window
## W3
- v1.30.0[^ort-gh].
## W6
- No notable events found.
## W9
- No notable events found.
## W12
- transformers v5 interop[^hf-tf5].
## W24
- No notable events found.

# Lessons
- Generic model-format runtimes lost ground to architecture-specialised LLM engines.

# Related
- [transformers](/projects/ai-inference/transformers.md), [llama.cpp](/projects/ai-inference/llama-cpp.md)

[^ort-gh]: ONNX Runtime GitHub — https://github.com/microsoft/onnxruntime
[^hf-tf5]: HF blog — https://huggingface.co/blog/transformers-v5
