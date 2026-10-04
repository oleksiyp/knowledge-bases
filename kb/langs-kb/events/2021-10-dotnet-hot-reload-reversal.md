---
type: Event
title: .NET restores hot reload to dotnet watch
description: The .NET SDK project merged a reversal restoring hot reload support to dotnet watch after its removal.
event_kind: policy
date: '2021-10-23'
date_precision: day
era: E2
impact: mixed
tags:
- reversal
languages: []
runtimes: []
ideas:
- ideas/tooling-and-ecosystem/hot-reload-and-live-programming
status: stable
generated:
  by: openai/codex
  at: '2026-10-03T00:00:00Z'
stale_after: '2027-04-03T00:00:00Z'
sources:
- id: announcement
  title: .NET restores hot reload to dotnet watch
  resource: https://github.com/dotnet/sdk/pull/22262
---

# What happened
The .NET SDK project merged a reversal restoring hot reload support to dotnet watch after its removal. The public pull request records the implementation change.[^announcement]

# Why it matters
**Interpretation:** access through an open command-line tool affects ecosystem trust as well as developer convenience. The reversal is evidence of a distribution-policy correction, not a new runtime invention.

# Related
- [Hot reload](/ideas/tooling-and-ecosystem/hot-reload-and-live-programming.md)

[^announcement]: .NET restores hot reload to dotnet watch — https://github.com/dotnet/sdk/pull/22262
