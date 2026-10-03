---
type: Language
title: Hare
description: Drew DeVault's deliberately small C-replacement (announced April 2022) with manual memory management, no generics and an explicit refusal to support Windows or macOS upstream; it ships steadily (0.24 in 2024, 0.25.2 in 2025, 0.26.0 in Feb 2026) and aims to freeze forever at 1.0, but its principled constraints cap it at a niche among free-Unix systems programmers.
tags: [systems, better-c, manual-memory, minimalism, free-software, qbe]
paradigms: [systems, imperative, procedural]
typing: static
memory_model: manual
first_released: 2022
steward: Drew DeVault and Hare contributors (SourceHut-hosted)
governance: bdfl
trajectory: niche
ideas: [ideas/memory-safety/bounds-safety-and-hardened-c, ideas/tooling-and-ecosystem/language-editions-and-evolution]
runtimes: []
adoption_signals:
  latest_release: { value: "0.26.0", as_of: 2026-02-13 }
era_momentum: { E1: n/a, E2: up, E3: flat, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: hare-announce
    resource: https://harelang.org/blog/2022-04-25-announcing-hare/
    title: "Hare blog: Announcing the Hare programming language (2022-04-25)"
  - id: lwn-hare
    resource: https://lwn.net/Articles/893285/
    title: "LWN: DeVault: Announcing the Hare programming language"
  - id: hare-0240
    resource: https://harelang.org/blog/2024-02-16-hare-0.24.0-released/
    title: "Hare blog: Hare 0.24.0 released, and Hare's new release policy (2024-02-16)"
  - id: hare-0242
    resource: https://harelang.org/blog/2024-07-13-hare-0.24.2-release/
    title: "Hare blog: Hare 0.24.2 released (July 2024)"
  - id: hare-0252
    resource: https://harelang.org/blog/2025-06-21-hare-0.25.2-released/
    title: "Hare blog: Hare 0.25.2 released (2025-06-21) — mandatory out-of-memory handling, hare-update"
  - id: hare-rfcs
    resource: https://harelang.org/blog/2025-06-02-planned-breaking-changes/
    title: "Hare blog: A tour of upcoming RFCs (2025-06-02)"
  - id: hare-blog
    resource: https://harelang.org/blog/
    title: "Hare blog index (Hare 0.26.0 released 2026-02-13; FOSDEM 2026 meetup)"
  - id: hare-faq
    resource: https://harelang.org/documentation/faq.html
    title: "Hare documentation: Frequently asked questions"
  - id: hn-hare-faq
    resource: https://news.ycombinator.com/item?id=40467850
    title: "Hacker News (2024): 'I was interested in Hare until I found this immensely self-defeating FAQ item'"
---

# Summary
Hare is a systems language in the C tradition — static types, manual memory management, tagged unions, error-handling via result types, a tiny runtime — built on the QBE backend rather than LLVM and announced on 2022-04-25.[^hare-announce][^lwn-hare] Its identity is **principled minimalism**: no generics by design ("a deliberate design choice which simplifies the language considerably"), "fewer memory safety guarantees than Rust", and no upstream support for proprietary operating systems: "Hare does not and will not officially support proprietary operating systems upstream."[^hare-faq] Releases became versioned in February 2024 (0.24.0, with a quarterly-ish 0.YY.Q scheme), followed by 0.24.2 (July 2024), 0.25.2 (June 2025, which made out-of-memory handling mandatory and shipped a `hare-update` migration tool) and 0.26.0 (February 2026).[^hare-0240][^hare-0242][^hare-0252][^hare-blog] Its stated end-state is a 1.0 whose syntax and semantics "freeze" so it "can be depended upon indefinitely" — the "100-year language" pitch.[^hare-faq] Verdict: **niche by choice** — coherent and actively developed, but its platform and feature refusals rule it out for most industry users.

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E2 | 2022-04-25 | Hare announced (Linux/FreeBSD, QBE backend) [^hare-announce][^lwn-hare] | + |
| E3 | 2024-02-16 | First versioned release 0.24.0; new release policy [^hare-0240] | + |
| E3 | 2024-07 | 0.24.2: NetBSD, for-each loops, optional params, new crypto APIs [^hare-0242] | + |
| E3 | 2024 | FAQ stance on proprietary OSes widely criticized as self-limiting [^hn-hare-faq] | − |
| E4 | 2025-06-02 | "A tour of upcoming RFCs": planned breaking changes [^hare-rfcs] | mixed |
| E4 | 2025-06-21 | 0.25.2: mandatory OOM handling, `hare-update` tool [^hare-0252] | + |
| E4 | 2026-02-13 | 0.26.0 [^hare-blog] | = |

# Ideas it bet on
| Idea | Outcome for Hare |
|---|---|
| Simplicity over features (no generics, small spec) | coherent; limits appeal |
| Bounds-checked slices, explicit nullable pointers ([bounds safety](/ideas/memory-safety/bounds-safety-and-hardened-c.md)) | partial safety only |
| Freeze-at-1.0 stability ([language evolution](/ideas/tooling-and-ecosystem/language-editions-and-evolution.md) by refusal) | untested — no 1.0 yet |
| Mandatory allocation-failure handling | shipped in 0.25 [^hare-0252] |
| Free-software-only platforms | principled; caps adoption [^hare-faq] |

# What succeeded
- **Steady, documented evolution** with migration tooling (`hare-update`) for breaking changes — better change management than many larger projects.[^hare-0252]
- **Clear design philosophy** that its community understands and endorses.[^hare-faq]

# What failed or stalled
- **Platform refusal**: no upstream Windows/macOS rules out most commercial and desktop users; third-party macOS ports exist but are unsupported upstream.[^hare-faq][^hn-hare-faq]
- **Memory-safety era mismatch**: launched the same year as the NSA memory-safety guidance; offering "fewer guarantees than Rust" positioned it outside the policy-driven demand (see [memory safety policy push](/ideas/memory-safety/memory-safety-policy-push.md)).[^hare-faq]
- **Competition**: [Zig](/languages/zig.md) and [Odin](/languages/odin.md) occupy the "better C" space with cross-platform support and larger communities.

# By era
## E1
- Not public.
## E2
- Announcement, enthusiastic reception among free-software/Unix developers.[^hare-announce]
## E3
- Versioned releases begin.[^hare-0240]
## E4
- Breaking-change RFCs, 0.25 and 0.26 releases, FOSDEM 2026 meetup.[^hare-rfcs][^hare-blog]

# Lessons
- Values-driven constraints (free platforms only, no generics) produce a coherent language and a small, loyal user base — not mass adoption.
- A "freeze forever" promise only has value once there is something widely used to freeze.

# Related
- [C](/languages/c.md), [Zig](/languages/zig.md), [Odin](/languages/odin.md), [Rust](/languages/rust.md)
- [Bounds safety and hardened C](/ideas/memory-safety/bounds-safety-and-hardened-c.md)

[^hare-announce]: Hare blog: Announcing the Hare programming language — https://harelang.org/blog/2022-04-25-announcing-hare/
[^lwn-hare]: LWN: DeVault: Announcing the Hare programming language — https://lwn.net/Articles/893285/
[^hare-0240]: Hare blog: Hare 0.24.0 released — https://harelang.org/blog/2024-02-16-hare-0.24.0-released/
[^hare-0242]: Hare blog: Hare 0.24.2 released — https://harelang.org/blog/2024-07-13-hare-0.24.2-release/
[^hare-0252]: Hare blog: Hare 0.25.2 released — https://harelang.org/blog/2025-06-21-hare-0.25.2-released/
[^hare-rfcs]: Hare blog: A tour of upcoming RFCs — https://harelang.org/blog/2025-06-02-planned-breaking-changes/
[^hare-blog]: Hare blog index — https://harelang.org/blog/
[^hare-faq]: Hare FAQ — https://harelang.org/documentation/faq.html
[^hn-hare-faq]: Hacker News: reaction to Hare's FAQ on proprietary OSes — https://news.ycombinator.com/item?id=40467850
