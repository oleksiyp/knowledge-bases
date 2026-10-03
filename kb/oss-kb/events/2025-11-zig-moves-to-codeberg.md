---
type: Event
title: Zig leaves GitHub for Codeberg
description: The Zig project moved its canonical repository to Codeberg and dropped GitHub Sponsors. Andrew Kelley cited GitHub's engineering decline, unreliable Actions and Copilot pushes that clash with Zig's no-AI policy.
event_kind: governance
date: 2025-11-26
window: W12
impact: mixed
projects: [projects/devtools-languages/zig, projects/devtools-languages/forgejo]
organizations: [organizations/zig-software-foundation, organizations/codeberg]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: zig-codeberg
    resource: https://ziglang.org/news/migrating-from-github-to-codeberg/
    title: "ziglang.org: Migrating from GitHub to Codeberg"
  - id: wiki-codeberg
    resource: https://en.wikipedia.org/wiki/Codeberg
    title: "Wikipedia: Codeberg"
  - id: zig-gh
    resource: https://github.com/ziglang/zig
    title: Zig GitHub repository (read-only; last push 2025-11-27 via GitHub API)
  - id: pcg-gentoo
    resource: https://www.pcgamer.com/software/linux/after-microsoft-couldnt-keep-its-ai-hands-to-itself-a-notoriously-complex-linux-distro-has-started-its-long-march-away-from-github/
    title: "PC Gamer: Gentoo starts its long march away from GitHub (2026-02)"
  - id: slashdot-gentoo
    resource: https://linux.slashdot.org/story/26/01/11/1926219/gentoo-linux-plans-migration-from-github-over-attempts-to-force-copilot-usage-for-our-repositories
    title: "Slashdot: Gentoo plans migration from GitHub over 'attempts to force Copilot usage' (2026-01-11)"
---

# What happened
On 2025-11-26 Zig made `codeberg.org/ziglang/zig` its canonical repository and made the GitHub repo read-only. New issue numbers on Codeberg start at #30000 so they never collide with GitHub issue numbers.[^zig-codeberg][^zig-gh] The announcement criticised GitHub's "rotted" engineering culture and unreliable Actions scheduling, and said Copilot promotion was undermining Zig's strict no-LLM policy. It also called GitHub Sponsors a "liability" and asked donors to move to Every.org.[^zig-codeberg]

# Why it matters
It was the most prominent project to leave GitHub over AI, and others followed: Dillo in November 2025 (per Wikipedia) and Gentoo, which opened a Codeberg mirror in February 2026 citing GitHub's attempts to force Copilot usage.[^wiki-codeberg][^slashdot-gentoo][^pcg-gentoo] Choosing a forge became a way for projects to state their values.

# Outcome so far
Codeberg reached 300k+ repositories in November 2025 and in July 2026 banned vibe-coded projects in its terms (both per Wikipedia; not independently confirmed in pass 2).[^wiki-codeberg] The GitHub mirror still shows about 43k stars, frozen.[^zig-gh]

# Related
- [Zig](/projects/devtools-languages/zig.md), [Forgejo / Codeberg](/projects/devtools-languages/forgejo.md), [Codeberg](/organizations/codeberg.md), [Zig Software Foundation](/organizations/zig-software-foundation.md)

[^zig-codeberg]: ziglang.org — https://ziglang.org/news/migrating-from-github-to-codeberg/
[^wiki-codeberg]: Wikipedia: Codeberg — https://en.wikipedia.org/wiki/Codeberg
[^zig-gh]: GitHub API — https://github.com/ziglang/zig
[^slashdot-gentoo]: Slashdot — https://linux.slashdot.org/story/26/01/11/1926219/gentoo-linux-plans-migration-from-github-over-attempts-to-force-copilot-usage-for-our-repositories
[^pcg-gentoo]: PC Gamer — https://www.pcgamer.com/software/linux/after-microsoft-couldnt-keep-its-ai-hands-to-itself-a-notoriously-complex-linux-distro-has-started-its-long-march-away-from-github/
