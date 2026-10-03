---
type: Event
title: Go team stops pursuing error-handling syntax
description: "On 2025-06-03 the Go team announced it would stop pursuing syntactic changes for error handling 'for the foreseeable future' and close such proposals. This ended seven years of failed designs (check/handle, try, ?), even though error handling is users' top complaint."
event_kind: proposal-rejected
date: 2025-06-03
era: E4
impact: negative
languages: [languages/go]
runtimes: []
ideas: [ideas/types/sum-types-and-pattern-matching]
tags: [go, error-handling, proposals, language-design, consensus]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: go-error-syntax
    resource: https://go.dev/blog/error-syntax
    title: "Go Blog: [ On | No ] syntactic support for error handling (Robert Griesemer)"
    author: org:google
  - id: q-discussion
    resource: https://github.com/golang/go/discussions/71460
    title: "golang/go discussion #71460: reduce error handling boilerplate using ?"
  - id: go-survey-2025
    resource: https://go.dev/blog/survey2025
    title: "Go Blog: Results from the 2025 Go Developer Survey"
    author: org:google
---

# What happened
Robert Griesemer's post "[ On | No ] syntactic support for error handling" (2025-06-03) reviewed three failed attempts. The first was the 2018 `check`/`handle` draft, judged too complicated. The second was the 2019 `try` builtin, abandoned after roughly 900 GitHub comments over hidden control flow. The third was Ian Lance Taylor's 2024 `?` operator, which was "quickly overrun with comments and many suggestions for minor tweaks".[^go-error-syntax][^q-discussion] The conclusion: "For the foreseeable future, the Go team will stop pursuing syntactic language changes for error handling." Future syntax proposals will be closed without investigation, and the team will focus on libraries and tooling instead.[^go-error-syntax]

# Why it matters
It is a rare formal "no" from a major language on its users' most persistent complaint. Error handling had regained the top spot in Go surveys once generics shipped.[^go-error-syntax] The 2025 survey still lists error handling, enums and nil safety among missing features.[^go-survey-2025] The team gave consensus-driven design and the cost of a second idiom as its reasons: "none of the error handling proposals reached anything close to a consensus". The case contrasts with [late generics](/ideas/types/late-generics.md), which did reach consensus. It shows the limit of Go's minimalism: a steward can end a debate, but the complaint stays.

# Related
- [Go](/languages/go.md)
- [Go 1.18 generics](/events/2022-03-go-1-18-generics.md)
- [Sum types and pattern matching](/ideas/types/sum-types-and-pattern-matching.md)

[^go-error-syntax]: [ On | No ] syntactic support for error handling — https://go.dev/blog/error-syntax
[^q-discussion]: golang/go discussion #71460 — https://github.com/golang/go/discussions/71460
[^go-survey-2025]: Results from the 2025 Go Developer Survey — https://go.dev/blog/survey2025
