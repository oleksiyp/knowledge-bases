---
type: Language
title: Solidity
description: "The JavaScript-flavoured smart-contract language for the Ethereum Virtual Machine. 2018–2026 verdict: a dominant incumbent in a shrinking domain. It holds 85–92% of DeFi value locked and has hardened incrementally (checked arithmetic in 0.8, 2020), but it never escaped the EVM, and crypto developer activity fell sharply after 2022."
tags: [blockchain, ethereum, evm, smart-contracts, defi, web3]
paradigms: [imperative, object-oriented, contract-oriented]
typing: static
memory_model: manual
first_released: 2014
steward: Ethereum Foundation (Solidity team)
governance: foundation
trajectory: stable
ideas: [ideas/platforms-and-portability/smart-contract-languages, ideas/ai-and-languages/ai-and-formal-verification]
runtimes: []
adoption_signals:
  defi_tvl_share_pct: { value: 85.08, as_of: 2024-12 }
era_momentum: { E1: up, E2: up, E3: flat, E4: down }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: sol08
    resource: https://www.soliditylang.org/blog/2020/12/16/solidity-v0.8.0-release-announcement/
    title: "Solidity blog: Solidity 0.8.0 Release Announcement (2020-12-16)"
  - id: sol-types
    resource: https://docs.soliditylang.org/en/v0.8.30/types.html
    title: "Solidity 0.8.30 documentation: Types"
  - id: defillama-tvl
    resource: https://x.com/DefiLlama/status/1873107003532542213
    title: "DefiLlama: TVL dominance by smart contract language (2024-12-27)"
  - id: vyper-halborn
    resource: https://www.halborn.com/blog/post/explained-the-vyper-bug-hack-july-2023
    title: "Halborn: Explained — The Vyper Bug Hack (July 2023)"
  - id: coindesk-devs
    resource: https://www.coindesk.com/tech/2026/03/12/crypto-developer-activity-sinks-to-multi-year-low-as-ai-absorbs-github-s-talent-boom
    title: "CoinDesk: Crypto code commits fall 75% as developers move to AI projects (2026-03-12)"
  - id: ec-2024
    resource: https://hashlock.com/blog/blockchains-with-the-most-developers-in-2025
    title: "Hashlock: Blockchains with the most developers in 2025 (Electric Capital data)"
  - id: fe-lang
    resource: https://github.com/argotorg/fe
    title: "GitHub: Fe — emerging smart contract language for the Ethereum blockchain"
  - id: overflow
    resource: https://dev.to/h33min/integer-overflow-in-solidity-08-are-we-really-safe-2li5
    title: "DEV: Integer overflow in Solidity 0.8+ — are we really safe?"
---

# Summary

**Stable incumbent in a domain that peaked.** Solidity has been the default language of
Ethereum and every EVM-compatible chain throughout 2018–2026. By total value locked it controlled
**92.4% of DeFi on 2024-01-01 and 85.1% on 2024-12-27**, ahead of Rust (8.5%) and Vyper
(1.25%).[^defillama-tvl] It improved by hardening rather than redesign: 0.8.0 (2020-12-16) made
arithmetic overflow revert by default, with explicit `unchecked` blocks as the escape hatch.[^sol08][^sol-types]
Alternative EVM languages did not dent its share. Vyper suffered a costly compiler bug in 2023,
and Fe remained experimental.[^vyper-halborn][^fe-lang] Solidity's trajectory follows crypto's
rather than its own merits. Monthly active crypto developers peaked around 2022, and by March 2026
crypto code commits had fallen sharply as developers moved to AI.[^ec-2024][^coindesk-devs]

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018–2020 | DeFi "summer" (2020) makes Solidity contracts hold billions | + |
| E2 | 2020-12-16 | Solidity 0.8.0: checked arithmetic by default[^sol08] | + |
| E2 | 2021–2022 | Peak crypto developer activity; EVM-compatible L2s and chains multiply[^ec-2024] | + |
| E3 | 2023-07 | Vyper compiler bug (Curve exploit) reinforces Solidity's dominance among EVM languages[^vyper-halborn] | mixed |
| E4 | 2024-12 | Solidity TVL share 85%, down from 92% in a year as Rust chains grow[^defillama-tvl] | − |
| E4 | 2026-03 | Crypto developer commits at multi-year low[^coindesk-devs] | − |

# Ideas it bet on

| Idea | Outcome for Solidity |
|---|---|
| [Smart-contract languages](/ideas/platforms-and-portability/smart-contract-languages.md) | Won inside the EVM. The EVM itself is the moat |
| Checked arithmetic by default | Succeeded: removed a major class of bugs[^sol08] |
| [AI and formal verification](/ideas/ai-and-languages/ai-and-formal-verification.md) | Partial: SMTChecker and external tools exist, but audits remain manual-heavy |

# What succeeded

- **Network effects.** One language for dozens of EVM chains, plus mature tools (Foundry,
  Hardhat), auditors and a large training corpus for AI assistants.
- **Incremental safety.** Overflow checks, custom errors and more explicit semantics made common
  bugs rarer without forcing a migration.[^sol08]

# What failed or stalled

- **Language-level safety stayed shallow.** Reentrancy and access-control bugs remain programmer
  responsibilities. `unchecked` blocks reintroduce overflow risk.[^overflow]
- **No escape from the EVM.** Newer chains chose Rust (Solana), Move (Aptos/Sui) or Cairo
  (Starknet), which slowly eroded Solidity's share.[^defillama-tvl]
- **Developer base shrinkage** after the 2022 crypto downturn.[^ec-2024][^coindesk-devs]

# By era

## E1
DeFi growth. Solidity became the language of money-handling contracts.

## E2
0.8 hardening. Developer activity peaked with the 2021 bull market.

## E3
Competition from Move and Cairo chains. The Vyper bug showed the risk of alternatives.

## E4
Share erosion to Rust-based chains, and contraction of the developer base.

# Lessons

- In platform-locked domains, language dominance follows the VM.
- Safe defaults with explicit escape hatches (0.8's `unchecked`) are a pragmatic way to harden an
  incumbent.

# Related

- [Smart-contract languages](/ideas/platforms-and-portability/smart-contract-languages.md)
- [Move](/languages/move.md), [Cairo](/languages/cairo.md)
- [Vyper/Curve exploit](/events/2023-07-vyper-compiler-bug-curve-exploit.md)

[^sol08]: Solidity 0.8.0 announcement — https://www.soliditylang.org/blog/2020/12/16/solidity-v0.8.0-release-announcement/
[^sol-types]: Solidity docs, Types — https://docs.soliditylang.org/en/v0.8.30/types.html
[^defillama-tvl]: DefiLlama TVL by language — https://x.com/DefiLlama/status/1873107003532542213
[^vyper-halborn]: Halborn on the Vyper bug — https://www.halborn.com/blog/post/explained-the-vyper-bug-hack-july-2023
[^coindesk-devs]: CoinDesk, crypto commits fall — https://www.coindesk.com/tech/2026/03/12/crypto-developer-activity-sinks-to-multi-year-low-as-ai-absorbs-github-s-talent-boom
[^ec-2024]: Hashlock on developer counts — https://hashlock.com/blog/blockchains-with-the-most-developers-in-2025
[^fe-lang]: Fe language — https://github.com/argotorg/fe
[^overflow]: Integer overflow in Solidity 0.8+ — https://dev.to/h33min/integer-overflow-in-solidity-08-are-we-really-safe-2li5
