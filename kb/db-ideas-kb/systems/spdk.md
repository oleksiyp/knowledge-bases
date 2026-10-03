---
type: System
title: SPDK (Storage Performance Development Kit)
description: "Intel-originated open-source toolkit with user-space, polled NVMe drivers that bypass the kernel. Delivers the highest raw I/O efficiency, but databases mostly chose io_uring instead because SPDK gives up the file system, sharing and normal operations."
resource: https://spdk.io
tags: [io, kernel-bypass, nvme, storage, intel]
kind: oss
first_release: 2015
org: "Intel (open-source community project)"
license: BSD-3-Clause
outcome: stable
ideas: [ideas/hardware-engines/io-uring-kernel-bypass]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: spdk-site
    resource: https://spdk.io
    title: "SPDK project site"
  - id: nvme-vldb23
    resource: https://www.vldb.org/pvldb/vol16/p2090-haas.pdf
    title: "Haas, Leis: What Modern NVMe Storage Can Do, And How To Exploit It (PVLDB 16, 2023)"
  - id: iouring-dbms
    resource: https://arxiv.org/abs/2512.04859
    title: "High-Performance DBMSs with io_uring: When and How to use it (2025)"
---

# Summary

SPDK provides user-space, poll-mode NVMe drivers and storage libraries[^spdk-site]. An application that uses it owns the NVMe device directly: no syscalls, no interrupts, no kernel block layer or file system. Database research compared it with io_uring and libaio for NVMe-optimized storage engines[^nvme-vldb23]. In practice SPDK is used in storage systems and appliances; mainstream databases adopted io_uring instead, which gets much of the benefit while staying inside the kernel[^iouring-dbms].

# Timeline

| Year | Event |
|---|---|
| 2015 | Open-sourced by Intel |
| 2019 | io_uring arrives in Linux 5.1, narrowing SPDK's advantage |
| 2023 | Compared head-to-head in VLDB storage-engine research[^nvme-vldb23] |

# What worked

- Lowest CPU cost per I/O; useful for storage targets (NVMe-oF), appliances and research.

# What didn't

- Requires dedicated polling cores and exclusive device access, no file system, and special privileges; poor fit for containers and cloud block storage. No major OSS database depends on it.

# Related

- [io_uring and kernel bypass](/ideas/hardware-engines/io-uring-kernel-bypass.md)
