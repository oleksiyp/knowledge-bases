---
type: Event
title: Go 1.18 ships generics
description: "Go 1.18 (2022-03-15) added type parameters, its biggest change since Go 1.0, after a decade of design work. It also shipped built-in fuzzing and workspaces. The generics were deliberately minimal: no generic methods until Go 1.27 (2026)."
event_kind: release
date: 2022-03-15
era: E2
impact: positive
languages: [languages/go]
runtimes: [runtimes/go-runtime]
ideas: [ideas/types/late-generics]
tags: [go, generics, type-parameters, fuzzing]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: go-1-18
    resource: https://go.dev/blog/go1.18
    title: "Go Blog: Go 1.18 is released"
    author: org:google
  - id: planetscale-generics
    resource: https://planetscale.com/blog/generics-can-make-your-go-code-slower
    title: "PlanetScale: Generics can make your Go code slower"
  - id: go-survey-2025
    resource: https://go.dev/blog/survey2025
    title: "Go Blog: Results from the 2025 Go Developer Survey"
    author: org:google
  - id: go-1-27
    resource: https://go.dev/blog/go1.27
    title: "Go Blog: Go 1.27 is released (generic methods)"
    author: org:google
---

# What happened
On 2022-03-15 the Go team released Go 1.18 with type parameters and constraint interfaces. The announcement called generics "Go's most often requested feature" and promised that later releases would handle "more complicated generic use cases".[^go-1-18] The release also made Go "the first major language with fuzzing fully integrated into its standard toolchain" and added workspace mode.[^go-1-18] The implementation used GC-shape stenciling with runtime dictionaries, which kept compile times low. Within weeks, benchmarks showed it could make some generic code slower than interface-based code.[^planetscale-generics]

# Why it matters
It is the main test case for [late generics](/ideas/types/late-generics.md): can a language add generics 13 years in without splitting its ecosystem? The result was largely yes. Complaints about generics, the top complaint in the 2020 survey, faded and error handling replaced them.[^go-survey-2025] Uptake in libraries was gradual (`slices`, `maps`, `cmp` in the standard library). Generic methods arrived only in Go 1.27 (Aug 2026), still without interface satisfaction.[^go-1-27]

# Related
- [Go](/languages/go.md), [Go runtime](/runtimes/go-runtime.md)
- [Go error-handling syntax abandoned](/events/2025-06-go-error-handling-syntax-abandoned.md)

[^go-1-18]: Go 1.18 is released — https://go.dev/blog/go1.18
[^planetscale-generics]: PlanetScale, Generics can make your Go code slower — https://planetscale.com/blog/generics-can-make-your-go-code-slower
[^go-survey-2025]: Results from the 2025 Go Developer Survey — https://go.dev/blog/survey2025
[^go-1-27]: Go 1.27 is released — https://go.dev/blog/go1.27
