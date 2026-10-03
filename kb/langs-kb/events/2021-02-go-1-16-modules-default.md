---
type: Event
title: Go 1.16 makes modules the default
description: "Go 1.16 (2021-02-16) turned on module mode by default, ending the GOPATH era three years after Russ Cox's contested 'vgo' proposal. 96% of surveyed developers had already switched."
event_kind: release
date: 2021-02-16
era: E2
impact: positive
languages: [languages/go]
runtimes: [runtimes/go-runtime]
ideas: [ideas/tooling-and-ecosystem/dependency-management-built-in]
tags: [go, modules, gopath, vgo, dependency-management]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: go-1-16
    resource: https://go.dev/blog/go1.16
    title: "Go Blog: Go 1.16 is released"
    author: org:google
  - id: vgo-intro
    resource: https://research.swtch.com/vgo-intro
    title: "research!rsc: Go += Package Versioning (Go & Versioning, Part 1)"
  - id: go-survey-2020
    resource: https://go.dev/blog/survey2020-results
    title: "Go Blog: Go Developer Survey 2020 Results"
    author: org:google
  - id: kateg-survey
    resource: https://arxiv.org/pdf/2102.12105v1.pdf
    title: "arXiv 2102.12105: Empirical study of Go dependency management modes (GOPATH vs modules)"
---

# What happened
On 2021-02-16 Go 1.16 shipped with module mode on by default (`GO111MODULE=on`). The same release added `//go:embed` and native Apple-silicon support.[^go-1-16] The module design began as Russ Cox's 2018 "vgo" proposal. It introduced minimal version selection, semantic import versioning and a project-based workflow, and it replaced the community-built `dep` tool, a decision that caused friction with the community.[^vgo-intro] By the 2020 developer survey, 96% of respondents already used modules.[^go-survey-2020] Ecosystem migration took longer: a June-2020 sample of 20,000 popular GitHub projects found only 35.9% had moved to modules.[^kateg-survey]

# Why it matters
Go gained a built-in, reproducible dependency system in one tool, with no separate package manager. A checksum database and module proxy were part of the design. It is the template case for [built-in dependency management](/ideas/tooling-and-ecosystem/dependency-management-built-in.md) and [integrated toolchains](/ideas/tooling-and-ecosystem/integrated-toolchains.md). It also shows the cost of a steward overriding a community-built tool: the tool won technically, but trust took a hit.

# Related
- [Go](/languages/go.md), [Go runtime](/runtimes/go-runtime.md)
- [Go 1.18 generics](/events/2022-03-go-1-18-generics.md)

[^go-1-16]: Go 1.16 is released — https://go.dev/blog/go1.16
[^vgo-intro]: Go += Package Versioning — https://research.swtch.com/vgo-intro
[^go-survey-2020]: Go Developer Survey 2020 Results — https://go.dev/blog/survey2020-results
[^kateg-survey]: arXiv 2102.12105 — https://arxiv.org/pdf/2102.12105v1.pdf
