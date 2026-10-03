---
type: Paper
title: "Are You Sure You Want to Use MMAP in Your Database Management System?"
description: "CIDR 2022 paper arguing, with benchmarks, that memory-mapped file I/O causes correctness and performance problems for DBMSs, especially on fast NVMe."
year: 2022
venue: CIDR 2022
authors: [Andrew Crotty, Viktor Leis, Andrew Pavlo]
resource: https://vldb.org/cidrdb/2022/are-you-sure-you-want-to-use-mmap-in-your-database-management-system.html
impact: medium
ideas: [ideas/hardware-engines/mmap-in-dbms, ideas/hardware-engines/ssd-optimized-buffer-managers]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: mmap-cidr
    resource: https://vldb.org/cidrdb/2022/are-you-sure-you-want-to-use-mmap-in-your-database-management-system.html
    title: "CIDR 2022 paper page"
  - id: mmap-pdf
    resource: https://cs.brown.edu/people/acrotty/pubs/p13-crotty.pdf
    title: "Paper PDF"
  - id: mmapbench
    resource: https://github.com/viktorleis/mmapbench
    title: "viktorleis/mmapbench"
  - id: pavlo-2022
    resource: https://www.cs.cmu.edu/~pavlo/blog/2022/12/2022-databases-retrospective.html
    title: "Andy Pavlo: Databases in 2022: A Year in Review"
    author: person:andy-pavlo
---

# Claim

Using mmap in place of a DBMS-managed buffer pool looks simple but brings (1) transactional-safety problems because the OS can write dirty pages at any time, (2) I/O stalls and errors surfaced as page faults and signals, (3) error-handling complexity, and (4) performance problems from page-table contention, single-threaded eviction and TLB shootdowns. Benchmarks on NVMe show mmap failing to reach device bandwidth once the working set exceeds memory[^mmap-pdf][^mmapbench]. The authors recommend mmap only in narrow cases.

# What happened next

The paper became the standard reference in design debates, widely discussed online. Practice moved the same way: InfluxDB's new engine dropped mmap (Pavlo noted it approvingly in his 2022 review)[^pavlo-2022], and new engines (LeanStore follow-ups, CedarDB, TigerBeetle) manage their own caches. Defenders of LMDB-style designs argue mmap is fine for read-mostly embedded use, which the paper partly concedes. Impact is "medium": it shaped new designs but did not force changes in existing mmap-based systems.

# Related

- [mmap in DBMS](/ideas/hardware-engines/mmap-in-dbms.md)
- [NVMe-era storage engines](/ideas/hardware-engines/ssd-optimized-buffer-managers.md)
