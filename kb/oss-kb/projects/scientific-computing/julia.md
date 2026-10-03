---
type: OSS Project
title: Julia
description: MIT-licensed high-performance language for scientific computing; shipped 1.11 (Oct 2024), 1.12 (Oct 2025, --trim small binaries) and 1.13 (Sept 2026, big latency/GC gains) while commercial steward JuliaHub raised a $65M Series B (Apr 2026) for its Dyad engineering-AI product — technically strong, but still a niche outside Python's orbit.
resource: https://github.com/JuliaLang/julia
tags: [language, scientific-computing, hpc, sciml, mit, juliahub, numfocus]
domain: scientific-computing
license: MIT
license_history: ["MIT (unchanged)"]
governance: community
steward: Julia core developers (NumFOCUS fiscally sponsored); JuliaHub is the main corporate employer
backing_orgs: [organizations/juliahub, organizations/numfocus]
metrics:
  github_stars: { value: 49175, as_of: 2026-10-03 }
  latest_release: { value: "v1.13.1", as_of: 2026-09-26 }
oss_verdict: stable
business_verdict: growing
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: up, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: julia-gh
    resource: https://github.com/JuliaLang/julia
    title: Julia GitHub repository and releases (v1.11.0 2024-10-08, v1.12.0 2025-10-08, v1.13.0 2026-09-10)
    last_modified: 2026-10-03T00:00:00Z
  - id: julia-112
    resource: https://julialang.org/blog/2025/10/julia-1.12-highlights/
    title: "Julia 1.12 Highlights (2025-10)"
  - id: lwn-112
    resource: https://lwn.net/Articles/1044280/
    title: "LWN: Julia 1.12 brings progress on standalone binaries and more"
    author: org:lwn
  - id: julia-113
    resource: https://julialang.org/blog/2026/09/julia-1.13-highlights/
    title: "Julia 1.13 Highlights (2026-09)"
  - id: lwn-113
    resource: https://lwn.net/Articles/1093567/
    title: "LWN: Julia 1.13 released"
    author: org:lwn
  - id: numfocus-julia
    resource: https://numfocus.org/project/julia
    title: "NumFOCUS: Julia (fiscally sponsored project since 2014)"
  - id: juliahub-b
    resource: https://www.prnewswire.com/news-releases/juliahub-raises-65m-series-b-and-launches-dyad-3-0--bringing-agentic-ai-to-industrial-digital-twins-302758889.html
    title: "JuliaHub raises $65M Series B and launches Dyad 3.0 (2026-04-30)"
  - id: juliacon-2026
    resource: https://discourse.julialang.org/t/juliacon-2026-save-the-date/132172
    title: "JuliaCon 2026: Save the date (Mainz, Aug 10–15, 2026)"
  - id: tr-tiobe-julia
    resource: https://www.techrepublic.com/article/news-tiobe-september-2026-julia-nears-top-20/
    title: "TechRepublic: TIOBE Index September 2026 — Julia nears top 20"
  - id: techzine-julia
    resource: https://www.techzine.eu/blogs/devops/118517/the-julia-programming-language-a-missed-opportunity-for-ai/
    title: "Techzine: The Julia programming language — a missed opportunity for AI"
---

# Summary
Julia kept a dependable yearly cadence — 1.11.0 (2024-10-08), 1.12.0 (2025-10-08) and 1.13.0 (2026-09-10)[^julia-gh] — and attacked its biggest weaknesses: 1.12 added the experimental `--trim` option and JuliaC.jl for small standalone binaries (one example shrank from 206 MB to 1.6 MB)[^julia-112][^lwn-112], and 1.13 cut precompilation ~30% and startup ~20% versus 1.12 and made full GC ~70× faster on fresh sessions[^julia-113][^lwn-113]. Commercially, JuliaHub raised a $65M Series B in April 2026, but for Dyad, an agentic-AI hardware/digital-twin product rather than the language[^juliahub-b]. Popularity is stable-niche: TIOBE coverage in Sept 2026 described Julia as nearing the top 20, after sitting much lower in spring 2026[^tr-tiobe-julia], and commentators call it "a missed opportunity for AI"[^techzine-julia]. Verdict: OSS stable, business growing via JuliaHub.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-10-08 | Julia 1.11.0[^julia-gh] | OSS | + |
| W12 | 2025-10-08 | Julia 1.12.0: `--trim`, JuliaC.jl, redefinable structs, threading improvements[^julia-112][^lwn-112] | OSS | + |
| W6 | 2026-04-30 | JuliaHub $65M Series B (Dorilton-led), Dyad 3.0[^juliahub-b] | Business | + |
| W3 | 2026-08-10/15 | JuliaCon 2026 in Mainz, Germany[^juliacon-2026] | OSS | + |
| W3 | 2026-09-10 | Julia 1.13.0: faster precompile/startup, ~70× faster full GC, built-in REPL highlighting[^julia-113][^lwn-113] | OSS | + |
| W3 | 2026-09 | TIOBE: Julia nears top 20[^tr-tiobe-julia] | OSS | + |

# OSS successes
- Time-to-first-X and binary-size problems substantially addressed in 1.12–1.13[^julia-112][^julia-113].
- Predictable annual releases, LTS line (1.10) still patched[^julia-gh].
- Neutral fiscal home at NumFOCUS since 2014[^numfocus-julia].

# OSS failures / risks
- Remains niche relative to Python; the AI wave mostly bypassed it[^techzine-julia].
- Heavy reliance on one company (JuliaHub) for core developer time.

# Business successes
- JuliaHub's $65M Series B and Dyad's traction with Fortune-100 engineering customers[^juliahub-b].

# Business failures / risks
- JuliaHub's growth is tied to a proprietary product (Dyad), not the open language[^juliahub-b].

# By window
## W3
- Julia 1.13.0/1.13.1; JuliaCon 2026; TIOBE uptick[^julia-113][^julia-gh][^juliacon-2026][^tr-tiobe-julia].
## W6
- JuliaHub Series B[^juliahub-b].
## W9
- No notable events found (1.12.x patches)[^julia-gh].
## W12
- Julia 1.12.0[^julia-112].
## W24
- Julia 1.11.0[^julia-gh].

# Lessons
- Technical excellence is not enough without riding the dominant ecosystem's wave (Python/AI).
- Commercial stewards of niche languages monetize vertical applications (simulation, digital twins), not the language.

# Related
- [/organizations/juliahub.md](/organizations/juliahub.md), [/organizations/numfocus.md](/organizations/numfocus.md)
- [/projects/devtools-languages/mojo.md](/projects/devtools-languages/mojo.md), [/projects/scientific-computing/octave.md](/projects/scientific-computing/octave.md)
- [/events/2026-04-juliahub-series-b.md](/events/2026-04-juliahub-series-b.md), [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^julia-gh]: https://github.com/JuliaLang/julia
[^numfocus-julia]: https://numfocus.org/project/julia
[^julia-112]: https://julialang.org/blog/2025/10/julia-1.12-highlights/
[^lwn-112]: https://lwn.net/Articles/1044280/
[^julia-113]: https://julialang.org/blog/2026/09/julia-1.13-highlights/
[^lwn-113]: https://lwn.net/Articles/1093567/
[^juliahub-b]: https://www.prnewswire.com/news-releases/juliahub-raises-65m-series-b-and-launches-dyad-3-0--bringing-agentic-ai-to-industrial-digital-twins-302758889.html
[^juliacon-2026]: https://discourse.julialang.org/t/juliacon-2026-save-the-date/132172
[^tr-tiobe-julia]: https://www.techrepublic.com/article/news-tiobe-september-2026-julia-nears-top-20/
[^techzine-julia]: https://www.techzine.eu/blogs/devops/118517/the-julia-programming-language-a-missed-opportunity-for-ai/
