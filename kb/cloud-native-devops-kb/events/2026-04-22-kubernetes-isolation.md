---
type: Event
title: Kubernetes 1.36 makes Pod user namespaces stable
description: A concrete isolation capability matured without making all tenancy risks disappear.
date: '2026-04-22'
year: 2026
area: orchestration
kind: release
signal: success
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:19:14Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: release
  resource: https://kubernetes.io/blog/2026/04/22/kubernetes-v1-36-release/
  title: Kubernetes 1.36 release announcement
---

# Kubernetes 1.36 makes Pod user namespaces stable

## What happened

The April 22, 2026 Kubernetes 1.36 release announcement records Pod user namespaces reaching stable status. User mappings separate container user identifiers from host identifiers.[^release]

## Why it matters

This is a specific improvement in isolation machinery. It strengthens the technical picture without establishing that all mutually untrusted workloads should share a node.

## Evidence boundary

A release milestone establishes availability and maturity of the feature. Kernel attack surfaces, network access, resource contention and controller authorization still require separate evaluation.

* [Operators and tenancy assessment](/ideas/orchestration/operators-and-tenancy.md)
* [2026 review](/years/2026.md)

[^release]: [Kubernetes 1.36 release announcement](https://kubernetes.io/blog/2026/04/22/kubernetes-v1-36-release/)
