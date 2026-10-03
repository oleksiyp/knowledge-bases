---
type: Event
title: Ubuntu 25.10 makes Rust coreutils and sudo-rs the default
description: Ubuntu 25.10 (October 2025) shipped uutils (Rust coreutils) and sudo-rs by default, the first major distro to swap core userland for Rust rewrites. A date-command bug broke automatic updates and two sudo-rs flaws needed patches, but the move was carried into 26.04 LTS with some GNU fallbacks.
event_kind: adoption
date: 2025-10-09
era: E4
impact: mixed
languages: [languages/rust, languages/c]
runtimes: []
ideas: [ideas/memory-safety/rust-in-os-kernels, ideas/memory-safety/memory-safety-policy-push]
tags: [ubuntu, canonical, uutils, sudo-rs, rewrite, linux-distribution]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: reg-sudors-plan
    resource: https://www.theregister.com/2025/05/08/ubuntu_2510_makes_rusk_sudo_default/
    title: "The Register: Sudo-rs make me a sandwich, hold the buffer overflows (2025-05-08)"
  - id: lwn-date
    resource: https://lwn.net/Articles/1043103/
    title: "LWN: Date bug affects Ubuntu 25.10 automatic updates"
  - id: omg-date
    resource: https://www.omgubuntu.co.uk/2025/10/ubuntu-25-10-rust-coreutils-date-bug
    title: "OMG! Ubuntu: Rust Bug Broke Ubuntu 25.10 Automatic Update Checks"
  - id: reg-sudors-hole
    resource: https://www.theregister.com/2025/11/13/ubuntu_rust_sudo_hole/
    title: "The Register: Ubuntu 25.10's Rusty sudo holes quickly welded shut (2025-11-13)"
  - id: ubuntu-sudors
    resource: https://ubuntu.com/server/docs/reference/other-tools/sudo-rs/
    title: "Ubuntu Server documentation: sudo-rs"
    author: org:canonical
---

# What happened
In spring 2025 Canonical announced plans to "oxidise" Ubuntu. Ubuntu 25.10 would ship **sudo-rs** (Trifecta Tech Foundation's memory-safe sudo) and **uutils coreutils** (a Rust reimplementation of GNU coreutils) by default, to test them before the 26.04 LTS.[^reg-sudors-plan] 25.10 shipped on 2025-10-09 with both.

Problems followed. The Rust `date` ignored the `-r` (file reference) option and returned the current time. That silently stopped unattended-upgrades checks and some backup scripts until a fix landed in late October.[^lwn-date][^omg-date] In November, USN-7867-1 fixed two low-severity sudo-rs vulnerabilities.[^reg-sudors-hole] For known incompatibilities, Canonical kept GNU versions of several commands (including `cp`, `mv`, `rm`, `chmod`) in 25.10 and 26.04 LTS.[^omg-date]

# Why it matters
This was the first mainstream distribution to replace foundational C userland with Rust rewrites, rather than adding Rust alongside C. It applied the [memory-safety policy push](/ideas/memory-safety/memory-safety-policy-push.md) to the OS base. It is a balanced data point. The visible failures were *compatibility and logic* bugs, not memory corruption, which shows that a rewrite's main risk is behavioural fidelity to decades of GNU edge cases. Memory safety is not the hard part. Debian made a parallel decision to require Rust in APT from May 2026. Together these show Rust becoming core infrastructure beyond the [kernel](/ideas/memory-safety/rust-in-os-kernels.md).

# Related
- [Rust](/languages/rust.md), [C](/languages/c.md)
- [Rust in OS kernels](/ideas/memory-safety/rust-in-os-kernels.md)
- [C-to-Rust translation](/ideas/memory-safety/c-to-rust-translation.md)

[^reg-sudors-plan]: The Register: Sudo-rs make me a sandwich, hold the buffer overflows — https://www.theregister.com/2025/05/08/ubuntu_2510_makes_rusk_sudo_default/
[^lwn-date]: LWN: Date bug affects Ubuntu 25.10 automatic updates — https://lwn.net/Articles/1043103/
[^omg-date]: OMG! Ubuntu: Rust Bug Broke Ubuntu 25.10 Automatic Update Checks — https://www.omgubuntu.co.uk/2025/10/ubuntu-25-10-rust-coreutils-date-bug
[^reg-sudors-hole]: The Register: Ubuntu 25.10's Rusty sudo holes quickly welded shut — https://www.theregister.com/2025/11/13/ubuntu_rust_sudo_hole/
[^ubuntu-sudors]: Ubuntu Server documentation: sudo-rs — https://ubuntu.com/server/docs/reference/other-tools/sudo-rs/
