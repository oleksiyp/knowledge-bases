---
type: Event
title: "Aurora Serverless v2 gains scale-to-zero"
description: "Ten months after announcing v1's retirement, AWS let v2 auto-pause at 0 ACUs, with a ~15 s resume. It closed the gap that had driven developers to Neon."
date: 2024-11-20
year: 2024
kind: launch
signal: positive
ideas: [ideas/cloud-architecture/serverless-databases]
systems: [systems/aurora-serverless]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: v2-zero
    resource: https://aws.amazon.com/about-aws/whats-new/2024/11/amazon-aurora-serverless-v2-scaling-zero-capacity
    title: "AWS: Aurora Serverless v2 supports scaling to zero capacity"
    author: org:aws
  - id: stack-zero
    resource: https://www.thestack.technology/aws-aurora-serverless-v2-finally-lives-up-to-its-name/
    title: "The Stack: AWS Aurora Serverless V2 finally lives up to its name"
---

# What happened
On Nov 20, 2024, Aurora Serverless v2 gained a 0-ACU minimum. Instances pause after a configurable idle period with no connections, bill only for storage while paused, and resume on the next connection in roughly 15 seconds. It requires recent engine versions (e.g. Aurora PostgreSQL 16.3+, Aurora MySQL 3.08+)[^v2-zero][^stack-zero].

# Why it matters
The Stack's headline, "finally lives up to its name", sums it up: v2 had been "serverless" for 2.5 years without scaling to zero[^stack-zero]. The resume time keeps it a dev/test feature rather than a production one.

# Related
[Serverless databases](/ideas/cloud-architecture/serverless-databases.md) · [Aurora Serverless](/systems/aurora-serverless.md) · [v1 end of life](/events/2025-03-aurora-serverless-v1-end-of-life.md)
