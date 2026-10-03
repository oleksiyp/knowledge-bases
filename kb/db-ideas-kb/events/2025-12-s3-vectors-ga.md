---
type: Event
title: "Amazon S3 Vectors becomes generally available"
description: "AWS made native vector indexes in S3 GA on 2025-12-02 (2B vectors per index, 14 regions). It claims up to 90% lower cost than specialized vector databases. Object storage itself had become a vector store."
date: 2025-12-02
year: 2025
kind: launch
signal: positive
ideas: [ideas/vector-ai/object-storage-vector-search, ideas/vector-ai/vector-search-as-a-feature, ideas/vector-ai/dedicated-vector-databases]
systems: [systems/s3]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: aws
    resource: https://aws.amazon.com/blogs/aws/amazon-s3-vectors-now-generally-available-with-increased-scale-and-performance
    title: "AWS News Blog: Amazon S3 Vectors now generally available with increased scale and performance"
    author: org:aws
  - id: novalogiq
    resource: https://novalogiq.com/2025/12/03/aws-claims-90-vector-cost-savings-with-s3-vectors-ga-calls-it-complementary-analysts-split-on-what-it-means-for-vector-databases/
    title: "AWS claims 90% vector cost savings with S3 Vectors GA, calls it 'complementary' (2025-12-03)"
---

# What happened

After a July 2025 preview, AWS made S3 Vectors GA at re:Invent. It supports up to 2 billion vectors per index and 10,000 indexes per vector bucket, in 14 regions. AWS said customers created 250,000+ indexes, ingested 40B+ vectors and ran 1B+ queries during the roughly four-month preview, and claimed up to 90% lower total cost than specialized vector databases.[^aws] AWS called it complementary to OpenSearch and other vector databases. Analysts were split on what it means for the specialists.[^novalogiq]

# Why it matters

It is the end point of the object-storage trend. When the cheapest storage tier on the largest cloud does vector search natively, standalone vendors must compete on latency, features (hybrid search, filtering) or deployment model rather than on storage cost.

# Related

- [Object-storage vector search](/ideas/vector-ai/object-storage-vector-search.md) · [S3](/systems/s3.md) · [turbopuffer](/systems/turbopuffer.md)

[^aws]: AWS News Blog.
[^novalogiq]: Novalogiq.
