---
type: Idea
title: Smart-contract languages (Solidity, Vyper, Move, Cairo, Rust-on-chain)
description: "Domain-specific languages for programs that run on blockchains, hold money, and cannot be patched after deployment. 2018–2026 verdict: mixed. Solidity kept a near-monopoly (85–92% of DeFi TVL) despite its known hazards. Safer designs (Move's resource types, Cairo's provable IR) found homes only on new chains, Facebook's Diem died, and the developer base shrank after 2022."
area: platforms-and-portability
tags: [blockchain, solidity, vyper, move, cairo, evm, smart-contracts, defi, resource-types]
outcome: mixed
maturity_2026: niche
origin_year: 2014
mainstream_year: null
languages: [languages/solidity, languages/move, languages/cairo, languages/rust]
runtimes: []
related_ideas: [ideas/types/linear-and-affine-types, ideas/memory-safety/ownership-and-borrowing, ideas/ai-and-languages/ai-and-formal-verification]
era_momentum: { E1: up, E2: up, E3: down, E4: down }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: sol08
    resource: https://www.soliditylang.org/blog/2020/12/16/solidity-v0.8.0-release-announcement/
    title: "Solidity blog: Solidity 0.8.0 Release Announcement"
  - id: defillama-tvl
    resource: https://x.com/DefiLlama/status/1873107003532542213
    title: "DefiLlama: TVL dominance by smart contract language (2024-12-27)"
  - id: vyper-llamarisk
    resource: https://hackmd.io/@LlamaRisk/BJzSKHNjn
    title: "LlamaRisk: Curve Pool Reentrancy Exploit Postmortem (2023-07-30)"
  - id: vyper-halborn
    resource: https://www.halborn.com/blog/post/explained-the-vyper-bug-hack-july-2023
    title: "Halborn: Explained — The Vyper Bug Hack (July 2023)"
  - id: diem-wiki
    resource: https://en.wikipedia.org/wiki/Diem_(digital_currency)
    title: "Wikipedia: Diem (digital currency)"
  - id: diem-sale
    resource: https://finance.yahoo.com/news/silvergate-bank-confirms-diem-tech-221026595.html
    title: "Yahoo Finance/CoinDesk: Diem confirms shutdown as Silvergate acquires the project's assets"
  - id: sui-ec
    resource: https://blog.sui.io/sui-developers-electric-capital-report-july-2024/
    title: "Sui blog: Sui developers lead the way with Move innovation (Electric Capital data)"
  - id: cairo1
    resource: https://www.starknet.io/blog/cairo-1-0-is-here/
    title: "Starknet: Cairo 1.0 is here"
  - id: coindesk-devs
    resource: https://www.coindesk.com/tech/2026/03/12/crypto-developer-activity-sinks-to-multi-year-low-as-ai-absorbs-github-s-talent-boom
    title: "CoinDesk: Crypto code commits fall 75% as developers move to AI projects (2026-03-12)"
  - id: fe-lang
    resource: https://github.com/argotorg/fe
    title: "GitHub: Fe — emerging smart contract language for the Ethereum blockchain"
  - id: ec-2024
    resource: https://hashlock.com/blog/blockchains-with-the-most-developers-in-2025
    title: "Hashlock: Blockchains with the most developers in 2025"
---

# Summary

**Mixed. The incumbent won and the better designs stayed regional.** Solidity, a JavaScript-like
language for the EVM from 2014, held **92.4% of DeFi total value locked on 1 January 2024 and
85.1% on 27 December 2024**. Rust (Solana and others) held 8.5% and Vyper 1.25%.[^defillama-tvl]
Its hazards were patched incrementally rather than designed away; for example,
overflow checks became default in 0.8.0 (December 2020).[^sol08] The most serious attempt at a
safer language, Facebook's **Move** with linear resource types, outlived its sponsor. Diem was
shut down and sold for parts in January 2022.[^diem-wiki][^diem-sale] Move then lived on in the
VC-funded chains Aptos and Sui.[^sui-ec] StarkWare's **Cairo** was rebuilt as a Rust-like
language with a provable IR (Cairo 1.0, 2023).[^cairo1] Language-level safety had limits too. In
July 2023 a **compiler bug in Vyper** silently broke reentrancy locks and cost Curve pools about
$52–69M.[^vyper-llamarisk][^vyper-halborn] The field shrank after 2022, and by 2026 crypto code
commits had fallen sharply as developers moved to AI.[^coindesk-devs]

# The idea

Smart contracts are immutable programs that hold assets and are attacked by adversaries with
unlimited retries and flash loans. That pushes language design toward: no hidden control flow
(reentrancy), checked arithmetic, explicit asset types that cannot be copied or dropped (Move's
`resource`/abilities, an application of
[linear and affine types](/ideas/types/linear-and-affine-types.md)), formal verification (Move
Prover), and, for ZK rollups, languages whose execution can be proven (Cairo → Sierra → CASM).

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-06 | Facebook announces Libra, with the Move language | + |
| E2 | 2020-12-16 | Solidity 0.8.0: checked arithmetic by default[^sol08] | + |
| E2 | 2022-01-31 | Diem shut down; assets sold to Silvergate for about $182M[^diem-wiki][^diem-sale] | − |
| E3 | 2022-10 / 2023-05 | Aptos and Sui mainnets launch with Move variants[^diem-wiki] | + |
| E3 | 2023-01 / 2023-05 | Cairo 1.0 released; Starknet moves to Cairo 1.0-only contracts[^cairo1] | + |
| E3 | 2023-07-30 | Vyper compiler reentrancy bug exploited against Curve pools[^vyper-llamarisk] | − |
| E3 | 2024 | Sui reaches about 954 monthly active devs, about 2x Aptos (Electric Capital)[^sui-ec] | + |
| E4 | 2024-12 | Solidity TVL share down to 85%, Rust up to 8.5%[^defillama-tvl] | mixed |
| E4 | 2026-03 | Crypto developer activity at multi-year low[^coindesk-devs] | − |

# Where it succeeded

- **Solidity** is the de facto language of DeFi: EVM-compatible chains, auditors, tooling
  (Foundry, Hardhat) and an AI corpus all centre on it.[^defillama-tvl]
- **Move** proved resource types usable in practice, and Sui grew the largest Move community.[^sui-ec]
- **Cairo** gave ZK rollups a dedicated high-level language with guarantees that execution can be
  proven.[^cairo1]

# Where it failed or stalled

- **Diem and Libra**, the corporate sponsor of the safest design, collapsed under regulatory
  pushback before launch.[^diem-wiki]
- **Vyper**, pitched as the safer, Pythonic EVM language, suffered the period's most notable
  compiler-induced loss, a reminder that compilers are part of the trusted base.[^vyper-halborn]
- **Fe** and other "safer EVM" languages remained experimental or were rewritten.[^fe-lang]
- **The talent pool shrank.** Crypto's monthly active developers peaked around 2022 and declined
  afterwards.[^ec-2024][^coindesk-devs]

# Why

1. **Network effects at the VM level.** The EVM is the deployment target for dozens of chains, so
   Solidity's lock-in comes from the VM and the audit ecosystem, not only from the language.
2. **Safety bought through new chains.** Move and Cairo only became viable by launching new
   chains, which tied language adoption to token economics and VC cycles.
3. **Regulation decided the corporate path.** Diem died for monetary-policy reasons, not technical
   ones.[^diem-wiki]
4. **Incremental hardening was enough.** Checked arithmetic, linters, fuzzers and audits addressed
   the worst Solidity hazards without forcing migration.[^sol08]

# Lessons

- In a domain built on network effects, a safer language needs a new platform to carry it.
- A compiler bug can undo language-level safety (Vyper 2023). Verified or heavily fuzzed
  compilers matter when code holds money.

# Related

- [Solidity](/languages/solidity.md), [Move](/languages/move.md), [Cairo](/languages/cairo.md)
- [Linear and affine types](/ideas/types/linear-and-affine-types.md)
- [AI and formal verification](/ideas/ai-and-languages/ai-and-formal-verification.md)
- [Diem shutdown](/events/2022-01-diem-shutdown.md), [Vyper/Curve exploit](/events/2023-07-vyper-compiler-bug-curve-exploit.md)

[^sol08]: Solidity 0.8.0 announcement — https://www.soliditylang.org/blog/2020/12/16/solidity-v0.8.0-release-announcement/
[^defillama-tvl]: DefiLlama TVL by language — https://x.com/DefiLlama/status/1873107003532542213
[^vyper-llamarisk]: LlamaRisk postmortem — https://hackmd.io/@LlamaRisk/BJzSKHNjn
[^vyper-halborn]: Halborn, Vyper bug — https://www.halborn.com/blog/post/explained-the-vyper-bug-hack-july-2023
[^diem-wiki]: Wikipedia, Diem — https://en.wikipedia.org/wiki/Diem_(digital_currency)
[^diem-sale]: Diem shutdown and Silvergate sale — https://finance.yahoo.com/news/silvergate-bank-confirms-diem-tech-221026595.html
[^sui-ec]: Sui on Electric Capital data — https://blog.sui.io/sui-developers-electric-capital-report-july-2024/
[^cairo1]: Cairo 1.0 is here — https://www.starknet.io/blog/cairo-1-0-is-here/
[^coindesk-devs]: CoinDesk, crypto commits fall — https://www.coindesk.com/tech/2026/03/12/crypto-developer-activity-sinks-to-multi-year-low-as-ai-absorbs-github-s-talent-boom
[^fe-lang]: Fe language — https://github.com/argotorg/fe
[^ec-2024]: Hashlock, blockchains with most developers — https://hashlock.com/blog/blockchains-with-the-most-developers-in-2025
