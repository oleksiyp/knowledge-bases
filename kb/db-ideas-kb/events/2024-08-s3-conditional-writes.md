---
type: Event
title: "Amazon S3 adds conditional writes"
description: "S3 gained If-None-Match create-if-absent (Aug 2024) and If-Match compare-and-swap (Nov 2024). Object-storage-native databases could now coordinate writers without DynamoDB or ZooKeeper."
date: 2024-08-20
year: 2024
kind: launch
signal: positive
ideas: [ideas/cloud-architecture/object-storage-native-databases]
systems: [systems/s3, systems/slatedb, systems/warpstream]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: s3-cond
    resource: https://aws.amazon.com/about-aws/whats-new/2024/08/amazon-s3-conditional-writes
    title: "AWS: Amazon S3 now supports conditional writes (2024-08-20)"
    author: org:aws
  - id: s3-ifmatch
    resource: https://aws.amazon.com/about-aws/whats-new/2024/11/amazon-s3-functionality-conditional-writes
    title: "AWS: Amazon S3 adds new functionality for conditional writes (Nov 2024)"
    author: org:aws
  - id: morling
    resource: https://www.morling.dev/blog/leader-election-with-s3-conditional-writes/
    title: "Gunnar Morling: Leader Election With S3 Conditional Writes"
---

# What happened
On Aug 20, 2024, S3 added conditional writes: `PutObject` and `CompleteMultipartUpload` accept `If-None-Match` and fail if the object already exists. The feature carries no extra charge and is available in all regions[^s3-cond]. In November 2024 AWS added `If-Match` (write only if the ETag is unchanged), which is true compare-and-swap, and let bucket policies require conditional writes[^s3-ifmatch].

# Why it matters
Google Cloud Storage and Azure Blob already had preconditions. S3, the dominant store, did not, so systems built on it needed an external lock service. With CAS on a manifest object, writers can fence each other, commit table snapshots and elect leaders on S3 alone[^morling]. This is a key enabler for SlateDB, lakehouse commits and diskless Kafka designs.

# Related
[Object-storage-native databases](/ideas/cloud-architecture/object-storage-native-databases.md) · [S3](/systems/s3.md) · [SlateDB](/systems/slatedb.md)
