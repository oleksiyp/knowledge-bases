---
type: Paper
title: "CXL and the Return of Scale-Up Database Engines"
description: "PVLDB 2024 vision paper arguing that CXL will let databases scale up across a rack as one shared-memory machine instead of scaling out over the network."
year: 2024
venue: VLDB 2024 (PVLDB 17)
authors: [Alberto Lerner, Gustavo Alonso]
resource: https://arxiv.org/abs/2401.01150
impact: low
ideas: [ideas/hardware-engines/cxl-memory-disaggregation]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: cxl-scaleup
    resource: https://arxiv.org/abs/2401.01150
    title: "arXiv 2401.01150"
  - id: cxl-vldb25
    resource: https://www.vldb.org/pvldb/vol18/p3119-weisgut.pdf
    title: "Weisgut et al.: CXL Memory Performance for In-Memory Data Processing (PVLDB 18, 2025)"
---

# Claim

Specialized devices (GPUs, DPUs, FPGAs) exposed PCIe's limits, and efforts to fix it converged on CXL. The authors argue that CXL lets a rack become a large shared-memory machine whose resources can be added individually, bringing back scale-up database architectures in place of the cloud's shared-nothing scale-out[^cxl-scaleup].

# What happened next

The paper framed a wave of CXL database research; measurement papers on real CXL devices followed, highlighting latency and placement costs[^cxl-vldb25]. As of 2026 no mainstream database is built on CXL memory sharing, so real-world impact is "low" so far; the claim remains a prediction.

# Related

- [CXL memory disaggregation](/ideas/hardware-engines/cxl-memory-disaggregation.md)
