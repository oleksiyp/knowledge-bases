---
type: Event
title: OpenVox, the community fork of Puppet, ships first release
description: "After Perforce ended public Puppet packaging in late 2024, Vox Pupuli forked Puppet as OpenVox (first release 8.11 on Jan 22, 2025; 9.0.0 on Oct 2, 2026)."
event_kind: fork
date: 2025-01-22
window: W24
impact: positive
projects: [projects/licensing-forks/openvox]
organizations: []
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: lwn-openvox
    resource: https://lwn.net/Articles/1005781/
    title: "LWN: Puppet fork OpenVox makes first release (2025-01-22)"
  - id: voxpupuli-openvox
    resource: https://voxpupuli.org/openvox/
    title: "Vox Pupuli: OpenVox"
  - id: openvox-gh
    resource: https://github.com/OpenVoxProject/openvox
    title: OpenVox GitHub releases
---

# What happened
Perforce stopped public open-source packaging of Puppet in late 2024 and moved development to internal forks.[^voxpupuli-openvox] Vox Pupuli announced a fork in December 2024 and on Jan 22, 2025 released OpenVox 8.11, a drop-in "soft fork".[^lwn-openvox]

# Why it matters
It shows the "close the build pipeline" playbook used by owners such as Perforce and Broadcom, and shows that a fork can be organised within weeks when a community organisation already exists.

# Outcome so far
OpenVox 9.0.0, its first independent major version, shipped on Oct 2, 2026.[^openvox-gh]

# Related
- [OpenVox](/projects/licensing-forks/openvox.md)

[^lwn-openvox]: LWN — https://lwn.net/Articles/1005781/
[^voxpupuli-openvox]: Vox Pupuli — https://voxpupuli.org/openvox/
[^openvox-gh]: GitHub — https://github.com/OpenVoxProject/openvox
