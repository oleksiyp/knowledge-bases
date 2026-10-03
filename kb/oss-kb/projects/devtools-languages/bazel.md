---
type: OSS Project
title: Bazel (and Buck2)
description: "Google's Apache-2.0 polyglot build system — completed its multi-year modernization with Bazel 9 LTS (Jan 2026: WORKSPACE removed, rules Starlarkified) and gained a user-funded BUILD Foundation under the Linux Foundation (announced BazelCon 2025); Meta's Rust-based Buck2 remains a capable but still \"no stable release\" alternative."
resource: https://github.com/bazelbuild/bazel
tags: [build-system, monorepo, google, meta, apache-2.0, linux-foundation, starlark]
domain: devtools-languages
license: Apache-2.0
license_history: ["Apache-2.0 (2015-)"]
governance: single-vendor
steward: Google (core); BUILD Foundation (Linux Foundation directed fund) for community rulesets/docs
backing_orgs: [organizations/linux-foundation]
metrics:
  github_stars: { value: 25913, as_of: 2026-10-03 }
  buck2_github_stars: { value: 4453, as_of: 2026-10-03 }
  latest_release: { value: "9.2.0", as_of: 2026-07-13 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: up, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T08:16:50Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: bazel-gh
    resource: https://github.com/bazelbuild/bazel/releases
    title: bazelbuild/bazel releases (via GitHub API, 2026-10-03)
  - id: bazel-9
    resource: https://blog.bazel.build/2026/01/20/bazel-9.html
    title: "Bazel blog: Bazel 9 LTS"
    author: org:google
  - id: bazel-q3-2025
    resource: https://blog.bazel.build/2025/10/07/bazel-q3-2025-community-update.html
    title: "Bazel blog: Bazel Q3 2025 Community Update"
    author: org:google
  - id: bazel-q1-2026
    resource: https://blog.bazel.build/2026/04/08/bazel-q1-2026-community-update.html
    title: "Bazel blog: Bazel Q1 2026 Community Update"
    author: org:google
  - id: thestack-bazel
    resource: https://www.thestack.technology/why-everyone-is-moving-to-googles-bazel-build-system/
    title: "The Stack: Bazel — why everyone is moving to Google's OSS build system"
  - id: lf-build-agreement
    resource: https://cdn.platform.linuxfoundation.org/agreements/build-foundation.pdf
    title: "Linux Foundation: The BUILD Foundation participation agreement"
    author: org:linux-foundation
  - id: bazel10-issue
    resource: https://github.com/bazelbuild/bazel/issues/30881
    title: "bazelbuild/bazel issue #30881: Release 10.0.0 - Jan 2027"
  - id: buck2-gh
    resource: https://github.com/facebook/buck2
    title: facebook/buck2 GitHub repository (README; releases via GitHub API)
---

# Summary
Bazel's last two years were about paying down debt rather than growth. Bazel 9.0 LTS (2026-01-20) removed WORKSPACE entirely in favor of the Bzlmod module system and finished "Starlarkification" — language rules (including C++ into `rules_cc`) now live outside the core, turning Bazel into "a lean core with rich APIs".[^bazel-9] Releases are dependable (9.1.0 in April, 9.2.0 on 2026-07-13, 8.x backports through Sept 2026; Bazel 10 targeted for January 2027).[^bazel-gh][^bazel10-issue] The governance story is the interesting one: because more people now use Bazel outside Google than inside, community leaders (Helen Altshuler, Alex Eagle) set up the **BUILD Foundation**, a Linux Foundation directed fund announced at BazelCon 2025 and funded by Canva, Spotify and Uber, to pay for rulesets, docs and infrastructure Google does not prioritize — while Google keeps control of the core.[^thestack-bazel][^bazel-q1-2026][^lf-build-agreement] Meta's Buck2 (Rust, Starlark-compatible) is used at huge scale inside Meta but still ships only date-stamped pre-release tags.[^buck2-gh] Verdict: stable.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-07 | JetBrains Bazel plugin reaches GA [^bazel-q3-2025] | OSS | + |
| W24 | 2025-10 | Bazel Central Registry adds signed provenance/attestations; LF entity "being formed" [^bazel-q3-2025] | OSS | + |
| W12 | 2025-11 | BazelCon 2025 (Atlanta): BUILD Foundation announced as LF directed fund; Canva/Spotify/Uber funding [^thestack-bazel][^bazel-q1-2026] | Governance | + |
| W9 | 2026-01-20 | Bazel 9.0 LTS: WORKSPACE removed, Starlarkification complete; Bazel 6 EOL [^bazel-9][^bazel-gh] | OSS | + |
| W6 | 2026-04-20 | Bazel 9.1.0 [^bazel-gh] | OSS | + |
| W3 | 2026-07-13 | Bazel 9.2.0 [^bazel-gh] | OSS | + |
| W3 | 2026-09 | Bazel 10 pre-releases; final targeted 2027-01 [^bazel10-issue] | OSS | + |

# OSS successes
- A breaking modernization (WORKSPACE removal) shipped on schedule with migration tooling, including an "agent-driven" migration setup.[^bazel-9]
- Broad enterprise adoption (Adobe, DoorDash, Snap, Nvidia, Snowflake, Salesforce, LinkedIn cited) and a commercial support ecosystem (Aspect, BuildBuddy, EngFlow, Tweag).[^thestack-bazel][^bazel-q3-2025]
- The BUILD Foundation gives non-Google users a funded voice.[^thestack-bazel]

# OSS failures / risks
- Core governance remains with Google; the foundation funds only the periphery.[^bazel-q1-2026]
- Even within Google, Android, Chrome and Earth keep their own build systems.[^thestack-bazel]
- Buck2 still has no stable release tag, limiting adoption outside Meta.[^buck2-gh]

# Business successes
- Not applicable to Bazel itself; a cluster of small vendors (BuildBuddy, EngFlow, Aspect Build) sponsor BazelCon and sell remote execution/caching.[^bazel-q3-2025]

# Business failures / risks
- None disclosed in the period.

# By window
## W3
- Bazel 9.2.0 (2026-07-13), 8.8.x backports; Bazel 10 pre-releases; BazelCon 2026 set for Amsterdam, Oct 13–15.[^bazel-gh][^bazel-q1-2026]
## W6
- Bazel 9.1.0/9.1.1.[^bazel-gh]
## W9
- Bazel 9.0 LTS (2026-01-20).[^bazel-9]
## W12
- BUILD Foundation announced at BazelCon 2025.[^thestack-bazel]
## W24
- JetBrains plugin GA; BCR attestations.[^bazel-q3-2025]

# Lessons
- When external users outnumber the originating company's own, a user-funded foundation for the "edges" is a pragmatic halfway house short of full neutral governance.
- Long-telegraphed breaking changes with tooling (and now AI-assisted migration) can land without a fork.

# Related
- [Linux Foundation](/organizations/linux-foundation.md)
- [Nx](/projects/devtools-languages/nx.md)
- [Turborepo](/projects/devtools-languages/turborepo.md)
- [BUILD Foundation event](/events/2025-11-bazel-build-foundation.md)

[^bazel-gh]: bazelbuild/bazel releases
[^bazel-9]: Bazel blog: Bazel 9 LTS
[^bazel-q3-2025]: Bazel blog: Q3 2025 Community Update
[^bazel-q1-2026]: Bazel blog: Q1 2026 Community Update
[^thestack-bazel]: The Stack: why everyone is moving to Bazel
[^lf-build-agreement]: Linux Foundation: BUILD Foundation agreement
[^bazel10-issue]: Bazel issue #30881: Release 10.0.0
[^buck2-gh]: facebook/buck2 GitHub repository
