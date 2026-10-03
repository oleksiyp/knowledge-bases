---
type: OSS Project
title: Neovim
description: Community-run, Apache-2.0 Vim fork; steadily shipping (0.11, 0.12.x through Aug 2026), passed 100k GitHub stars, and remained Stack Overflow's most admired development environment for a fifth year in 2025.
resource: https://github.com/neovim/neovim
tags: [code-editor, vim, apache-2.0, community, donations]
domain: devtools-languages
license: Apache-2.0
license_history: ["Apache-2.0 (new code) / Vim license (inherited code) (2014-)"]
governance: community
steward: Neovim core team
backing_orgs: []
metrics:
  github_stars: { value: 102702, as_of: 2026-10-03 }
oss_verdict: thriving
business_verdict: n/a
momentum_by_window: { W3: flat, W6: flat, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: nvim-gh
    resource: https://github.com/neovim/neovim
    title: Neovim GitHub repository (stars via GitHub API, 2026-10-03)
  - id: wiki-nvim
    resource: https://en.wikipedia.org/wiki/Neovim
    title: "Wikipedia: Neovim"
  - id: nvim-releases
    resource: https://github.com/neovim/neovim/releases
    title: "Neovim GitHub releases (0.11.0 2025-03-26; 0.12.0 2026-03-29; 0.12.5 2026-08-23; via GitHub API)"
  - id: nvim-012-guide
    resource: https://echasnovski.com/blog/2026-03-13-a-guide-to-vim-pack
    title: "Evgeni Chasnovski (Neovim core): A Guide to vim.pack (built-in plugin manager)"
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
---

# Summary
Neovim is a quiet community success: no company, no VC, steady releases (0.11 on 2025-03-26 simplified LSP configuration and completion; 0.12 on 2026-03-29 added a built-in plugin manager, `vim.pack`, and native insert-mode completion; 0.12.5 on 2026-08-23), ~103k GitHub stars (vs Vim's ~41k), and the Stack Overflow "most admired" development environment again in 2025.[^nvim-releases][^nvim-012-guide][^nvim-gh][^so-2025][^wiki-nvim] Verdict: thriving; its model — volunteer core, donations, plugin ecosystem — is unaffected by the acquisition and AI-pivot turbulence elsewhere in the domain.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-26 | Neovim 0.11 (streamlined LSP config, completion) [^nvim-releases] | OSS | + |
| W24 | 2025-07 | SO Developer Survey: most admired dev environment (5th year per Wikipedia) [^so-2025][^wiki-nvim] | OSS | + |
| W9 | 2026-03-29 | Neovim 0.12 — built-in plugin manager `vim.pack`, native auto-completion [^nvim-releases][^nvim-012-guide] | OSS | + |
| W3 | 2026-08-23 | Neovim 0.12.5 [^nvim-releases] | OSS | + |
| W3 | 2026-10-03 | ~103k stars vs Vim's ~41k (GitHub API) [^nvim-gh] | OSS | + |

# OSS successes
- Built-in LSP/treesitter and now a built-in plugin manager made Neovim a "batteries included" IDE alternative without a vendor.[^nvim-012-guide]

# OSS failures / risks
- Still pre-1.0; reliance on a small core team.

# Business successes
- n/a.

# Business failures / risks
- n/a.

# By window
## W3
- 0.12.4 (2026-07-05) and 0.12.5 (2026-08-23).[^nvim-releases]
## W6
- 0.12.2/0.12.3 patch releases (April–June 2026).[^nvim-releases]
## W9
- Neovim 0.12.0 with `vim.pack` (2026-03-29).[^nvim-releases]
## W12
- No notable events found.
## W24
- 0.11; most admired in SO 2025.[^nvim-releases][^so-2025]

# Lessons
- Community-governed tools without commercial pressure can out-grow their predecessors and retain developer affection.

# Related
- [Zed](/projects/devtools-languages/zed.md), [Ghostty](/projects/devtools-languages/ghostty.md), [Open VSX](/projects/devtools-languages/open-vsx.md)

[^nvim-gh]: Neovim GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/neovim/neovim
[^wiki-nvim]: Wikipedia: Neovim — https://en.wikipedia.org/wiki/Neovim
[^nvim-releases]: Neovim GitHub releases — https://github.com/neovim/neovim/releases
[^nvim-012-guide]: A Guide to vim.pack — https://echasnovski.com/blog/2026-03-13-a-guide-to-vim-pack
[^so-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
