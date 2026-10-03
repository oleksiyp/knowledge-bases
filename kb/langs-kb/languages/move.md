---
type: Language
title: Move
description: "A smart-contract language created for Facebook's Libra/Diem, built around linear 'resource' types that cannot be copied or dropped, plus a formal prover. 2018–2026 verdict: technically vindicated, commercially rescued. Its corporate sponsor died in January 2022, but Move survived in the VC-funded Aptos and Sui chains, and Sui grew the largest Move developer community."
tags: [blockchain, smart-contracts, linear-types, resources, diem, aptos, sui, formal-verification]
paradigms: [imperative, resource-oriented]
typing: static
memory_model: ownership
first_released: 2019
steward: Aptos Labs and Mysten Labs (separate dialects); originally Facebook/Novi
governance: single-vendor
trajectory: niche
ideas: [ideas/platforms-and-portability/smart-contract-languages, ideas/types/linear-and-affine-types, ideas/ai-and-languages/ai-and-formal-verification]
runtimes: []
adoption_signals:
  sui_monthly_active_devs: { value: 954, as_of: 2024 }
  aptos_monthly_active_devs: { value: 465, as_of: 2024 }
era_momentum: { E1: up, E2: down, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: diem-wiki
    resource: https://en.wikipedia.org/wiki/Diem_(digital_currency)
    title: "Wikipedia: Diem (digital currency)"
  - id: diem-sale
    resource: https://finance.yahoo.com/news/silvergate-bank-confirms-diem-tech-221026595.html
    title: "Yahoo Finance/CoinDesk: Diem confirms shutdown as Silvergate acquires the project's assets"
  - id: aptos-messari
    resource: https://messari.io/report/understanding-aptos-a-comprehensive-overview
    title: "Messari: Understanding Aptos — a comprehensive overview"
  - id: stakin
    resource: https://stakin.com/blog/sui-sui-and-aptos-apt-comparing-move-layer-1-heavyweights
    title: "Stakin: Sui and Aptos — the Diem legacy transforming Web3"
  - id: sui-ec
    resource: https://blog.sui.io/sui-developers-electric-capital-report-july-2024/
    title: "Sui blog: Sui developers lead the way with Move innovation"
  - id: vaneck
    resource: https://www.vaneck.com/us/en/blogs/digital-assets/sui-vs-aptos-competitive-analysis-and-price-prediction/
    title: "VanEck: Sui vs. Aptos — competitive analysis"
  - id: coindesk-devs
    resource: https://www.coindesk.com/tech/2026/03/12/crypto-developer-activity-sinks-to-multi-year-low-as-ai-absorbs-github-s-talent-boom
    title: "CoinDesk: Crypto code commits fall 75% as developers move to AI projects"
---

# Summary

**Niche, technically vindicated.** Move was designed at Facebook (2018–2019) for the Libra
stablecoin. Its central idea is that digital assets are **resources**: values of linear type that
the type system forbids copying or implicitly destroying, so tokens cannot be duplicated or lost
by accident. The bytecode verifier enforces this, and the Move Prover can verify specifications.
Libra (renamed Diem) never launched. It wound down and sold its technology to Silvergate for about
$182M on 2022-01-31.[^diem-wiki][^diem-sale] Former Diem engineers founded **Aptos** (mainnet
October 2022) and **Sui** (mainnet May 2023), each with its own Move dialect.[^aptos-messari][^stakin]
Electric Capital data put Sui at about 954 monthly active developers in 2024, about twice Aptos.[^vaneck][^sui-ec]
Move outlived its corporate sponsor, but its fate became tied to two token ecosystems in a
contracting crypto market.[^coindesk-devs]

# Timeline

| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-06 | Libra and Move announced by Facebook | + |
| E2 | 2020-12 | Libra renamed Diem amid regulatory pushback[^diem-wiki] | − |
| E2 | 2022-01-31 | Diem shut down; assets sold to Silvergate[^diem-sale] | − |
| E3 | 2022-10 | Aptos mainnet (Aptos Move)[^aptos-messari] | + |
| E3 | 2023-05 | Sui mainnet (Sui Move, object-centric)[^stakin] | + |
| E3 | 2024 | Sui's Move developer count grows 219% in H1 2024[^sui-ec] | + |
| E4 | 2026-03 | Crypto developer activity at multi-year low[^coindesk-devs] | − |

# Ideas it bet on

| Idea | Outcome for Move |
|---|---|
| [Linear and affine types](/ideas/types/linear-and-affine-types.md) | Succeeded technically: resource safety works in production |
| [Smart-contract languages](/ideas/platforms-and-portability/smart-contract-languages.md) | Mixed: thrives only on its own chains |
| [AI and formal verification](/ideas/ai-and-languages/ai-and-formal-verification.md) | Partial: Move Prover exists, usage concentrated in core frameworks |

# What succeeded

- **Resource types** removed classes of asset-duplication and asset-loss bugs that Solidity
  leaves to programmers, which is linearity applied to money.
- **Surviving its sponsor.** Open-source Apache-2.0 code let ex-Diem teams restart on new chains.[^diem-wiki]
- **Sui's object model** adapted Move to parallel execution and attracted the largest Move
  community.[^sui-ec]

# What failed or stalled

- **Diem itself**, the reason Move existed, was killed by regulators before launch.[^diem-wiki]
- **Fragmentation.** Aptos Move and Sui Move diverged, which splits a small ecosystem.[^stakin]
- **No EVM foothold.** Move never reached Ethereum's ecosystem, so its share of value stayed small
  next to Solidity.

# By era

## E1
Designed at Facebook. Announced with Libra.

## E2
Regulatory collapse of Diem. The project was sold off.

## E3
Rebirth on Aptos and Sui with large VC rounds.

## E4
Ecosystems continued, but in a contracting crypto developer market.

# Lessons

- Good type-system ideas can outlive their sponsor if the code is open-source.
- A language tied to a platform shares that platform's fate, both regulatory and financial.

# Related

- [Smart-contract languages](/ideas/platforms-and-portability/smart-contract-languages.md)
- [Linear and affine types](/ideas/types/linear-and-affine-types.md)
- [Solidity](/languages/solidity.md), [Rust](/languages/rust.md)
- [Diem shutdown](/events/2022-01-diem-shutdown.md)

[^diem-wiki]: Wikipedia, Diem — https://en.wikipedia.org/wiki/Diem_(digital_currency)
[^diem-sale]: Diem shutdown and Silvergate sale — https://finance.yahoo.com/news/silvergate-bank-confirms-diem-tech-221026595.html
[^aptos-messari]: Messari on Aptos — https://messari.io/report/understanding-aptos-a-comprehensive-overview
[^stakin]: Stakin on Sui and Aptos — https://stakin.com/blog/sui-sui-and-aptos-apt-comparing-move-layer-1-heavyweights
[^sui-ec]: Sui on Electric Capital data — https://blog.sui.io/sui-developers-electric-capital-report-july-2024/
[^vaneck]: VanEck, Sui vs Aptos — https://www.vaneck.com/us/en/blogs/digital-assets/sui-vs-aptos-competitive-analysis-and-price-prediction/
[^coindesk-devs]: CoinDesk, crypto commits fall — https://www.coindesk.com/tech/2026/03/12/crypto-developer-activity-sinks-to-multi-year-low-as-ai-absorbs-github-s-talent-boom
