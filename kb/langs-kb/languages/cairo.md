---
type: Language
title: Cairo
description: "StarkWare's language for provable computation: programs whose execution can be proven with STARKs, used for the Starknet ZK rollup. 2018–2026 verdict: a niche success. It was rebuilt as a Rust-like language with a safe intermediate representation (Cairo 1.0, 2023), which showed that a domain-specific language can be co-designed with a proof system, but adoption stayed confined to Starknet."
tags: [blockchain, zero-knowledge, starknet, stark, provable-computation, rust-like]
paradigms: [imperative, functional]
typing: static
memory_model: ownership
first_released: 2020
steward: StarkWare
governance: single-vendor
trajectory: niche
ideas: [ideas/platforms-and-portability/smart-contract-languages, ideas/types/linear-and-affine-types]
runtimes: []
adoption_signals: {}
era_momentum: { E1: up, E2: up, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: cairo1
    resource: https://www.starknet.io/blog/cairo-1-0-is-here/
    title: "Starknet blog: Cairo 1.0 is here"
  - id: cairo1-medium
    resource: https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038
    title: "StarkWare (Medium): Cairo 1.0 is here"
  - id: sn-011
    resource: https://www.cairo-lang.org/blog/starknet-alpha-v0-11-0-the-transition-to-cairo-1-0-begins/
    title: "Cairo-lang blog: Starknet Alpha v0.11.0 — the transition to Cairo 1.0 begins"
  - id: coinrepublic
    resource: https://www.thecoinrepublic.com/2023/01/06/starknets-revamping-of-its-cairo-programming-but-why/
    title: "The Coin Republic: StarkNet's revamping of its Cairo programming — but why?"
  - id: defillama-tvl
    resource: https://x.com/DefiLlama/status/1873107003532542213
    title: "DefiLlama: TVL dominance by smart contract language (2024-12-27)"
  - id: coindesk-devs
    resource: https://www.coindesk.com/tech/2026/03/12/crypto-developer-activity-sinks-to-multi-year-low-as-ai-absorbs-github-s-talent-boom
    title: "CoinDesk: Crypto code commits fall 75% as developers move to AI projects"
---

# Summary

**Niche, technically coherent.** Cairo ("CPU Algebraic Intermediate Representation") lets
programmers write general programs whose execution traces can be proven with STARK proofs. It
powers StarkWare's products and the **Starknet** rollup. The original Cairo (0.x, around 2020) was
close to an assembly language. StarkWare rebuilt it as **Cairo 1.0** (public in January 2023):
Rust-inspired syntax and ownership, compiled through **Sierra** ("Safe Intermediate
Representation") to Cairo assembly. Sierra guarantees that every execution, even a failing
one, can be proven, so sequencers can charge for reverted transactions.[^cairo1][^cairo1-medium][^coinrepublic]
Starknet moved to Cairo 1.0 contracts during 2023.[^sn-011] Outside Starknet's ecosystem Cairo had
little uptake. Rust- and Solidity-based zkVMs (which prove ordinary RISC-V or EVM code) offered
an alternative that needs no new language.[^defillama-tvl][^coindesk-devs]

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2020 | Cairo 0 used for StarkEx proofs | + |
| E2 | 2021–2022 | Starknet alpha on mainnet with Cairo 0 contracts | + |
| E3 | 2023-01 | Cairo 1.0 open-sourced: Rust-like language plus Sierra IR[^cairo1][^coinrepublic] | + |
| E3 | 2023-03/05 | Starknet v0.11 begins transition to Cairo 1.0 contracts[^sn-011] | + |
| E4 | 2025–2026 | Crypto developer contraction affects Starknet ecosystem[^coindesk-devs] | − |

# Ideas it bet on

| Idea | Outcome for Cairo |
|---|---|
| [Smart-contract languages](/ideas/platforms-and-portability/smart-contract-languages.md) | Niche: a dedicated language for ZK rollups |
| Language and IR co-designed with a proof system (Sierra) | Succeeded technically |
| [Linear and affine types](/ideas/types/linear-and-affine-types.md) | Adopted: Rust-like ownership in Cairo 1.0 |

# What succeeded

- **Design for provability.** Sierra solved a real problem for provers: provable failure, which
  enables denial-of-service protection.[^cairo1]
- **Developer ergonomics.** The move from assembly-like Cairo 0 to Rust-like Cairo 1.0 widened the
  pool of possible developers.[^coinrepublic]

# What failed or stalled

- **Ecosystem size.** Cairo stayed tied to Starknet, a small part of DeFi value, which is
  dominated by Solidity on EVM chains.[^defillama-tvl]
- **Competition from zkVMs.** General zkVMs prove programs written in existing languages (Rust,
  Solidity), which weakens the case for a bespoke provable language.

# By era

## E1
Cairo 0 for StarkEx.

## E2
Starknet alpha. Early ecosystem growth.

## E3
Cairo 1.0 and Sierra. Contracts migrated.

## E4
Stable but niche, in a shrinking crypto developer market.

# Lessons

- Co-designing a language with its verification back end (Sierra) can solve problems that general
  languages cannot.
- Bespoke languages compete with "prove existing code" approaches. Familiar languages often win.

# Related

- [Smart-contract languages](/ideas/platforms-and-portability/smart-contract-languages.md)
- [Solidity](/languages/solidity.md), [Move](/languages/move.md), [Rust](/languages/rust.md)

[^cairo1]: Starknet, Cairo 1.0 is here — https://www.starknet.io/blog/cairo-1-0-is-here/
[^cairo1-medium]: StarkWare, Cairo 1.0 is here — https://medium.com/starkware/cairo-1-0-is-here-7e1ac8377038
[^sn-011]: Starknet Alpha v0.11.0 — https://www.cairo-lang.org/blog/starknet-alpha-v0-11-0-the-transition-to-cairo-1-0-begins/
[^coinrepublic]: The Coin Republic on Cairo revamp — https://www.thecoinrepublic.com/2023/01/06/starknets-revamping-of-its-cairo-programming-but-why/
[^defillama-tvl]: DefiLlama TVL by language — https://x.com/DefiLlama/status/1873107003532542213
[^coindesk-devs]: CoinDesk, crypto commits fall — https://www.coindesk.com/tech/2026/03/12/crypto-developer-activity-sinks-to-multi-year-low-as-ai-absorbs-github-s-talent-boom
