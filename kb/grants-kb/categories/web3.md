---
type: Category Guide
title: "Web3 / crypto ecosystem grants & retroactive public-goods funding"
description: Map of blockchain-foundation grants, DAO programs, Bitcoin developer funders and retroactive/quadratic public-goods funding for software, with 2026 status (many paused or restructured), payout currency and KYC notes.
category: web3
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: esp-blog
    resource: https://blog.ethereum.org/category/ecosystem-support-program
    title: "EF Blog: Ecosystem Support Program"
  - id: esp-applicants
    resource: https://esp.ethereum.foundation/applicants
    title: "ESP: Applicants Overview"
  - id: ethdaily-eth
    resource: https://ethdaily.io/ef-esp-pays-grants-in-eth
    title: "ETH Daily: ESP pays grants in ETH"
  - id: op-s9
    resource: https://optimism.io/blog/season-9-from-experiment-to-organization
    title: "Optimism: Season 9"
  - id: gg25
    resource: https://gov.gitcoin.co/t/early-thinking-on-gg25/24883
    title: "Gitcoin Gov: Early thinking on GG25"
  - id: pc-update
    resource: https://projectcatalyst.io/blog/update-from-the-catalyst-team
    title: "Project Catalyst: Update from the team"
  - id: w3f
    resource: https://github.com/w3f/Grants-Program
    title: "GitHub: w3f/Grants-Program"
  - id: r9k
    resource: https://retro9000.avax.network/
    title: "Retro9000 archive"
  - id: agd
    resource: https://governance.aave.com/t/aave-grants-dao-is-the-program-still-active-and-accepting-applications/25319
    title: "Aave Governance: AGD status"
  - id: cl-evo
    resource: https://chain.link/blog/build-program-evolution
    title: "Chainlink: Evolving the Build Program"
  - id: aap
    resource: https://forum.arbitrum.foundation/t/arbitrum-audit-program-transparency-report-3/30976
    title: "Arbitrum: AAP Transparency Report #3"
  - id: arb-s3
    resource: https://forum.arbitrum.foundation/t/arbitrum-d-a-o-grant-program-season-3-official-thread/28753
    title: "Arbitrum: D.A.O. Season 3"
  - id: dao-fund
    resource: https://www.coindesk.com/tech/2026/02/18/from-2016-hack-to-usd150m-endowment-the-dao-s-second-act-focuses-on-ethereum-security
    title: "CoinDesk: TheDAO Security Fund"
  - id: sn-seed
    resource: https://www.starknet.io/grants/seed-grants/
    title: "Starknet: Seed Grants"
  - id: zch
    resource: https://forum.zcashcommunity.com/t/coinholder-directed-retroactive-grants-program-q2-2026-now-accepting-proposals/55328
    title: "Zcash Forum: Coinholder retro grants rules"
  - id: os-apply
    resource: https://opensats.org/apply
    title: "OpenSats: Apply"
  - id: scf-hb
    resource: https://stellar.gitbook.io/scf-handbook
    title: "SCF Handbook"
  - id: pz-s3
    resource: https://forum.celo.org/t/prezenti-season-3-is-open-frontier-anchor-and-boost-grants-for-celo/13714
    title: "Celo Forum: Prezenti Season 3"
  - id: base-gitcoin
    resource: https://gitcoin.co/apps/base-builder-grants
    title: "Gitcoin: Base Builder Grants"
  - id: vb-45m
    resource: https://www.opensourceforu.com/2026/02/ethereum-co-founder-vitalik-buterin-puts-45m-into-open-source-privacy-and-verifiable-systems/
    title: "Open Source For You: Vitalik $45M"
  - id: sol
    resource: https://solana.org/grants-funding
    title: "Solana Foundation: Grants"
---

# Overview
Crypto ecosystems remain one of the largest sources of non-dilutive money for open-source software, but 2025–26 was a year of retrenchment and restructuring:

- **Ethereum Foundation ESP** stopped accepting unsolicited proposals (Aug 2025) and since Nov 2025 funds only against EF-written Wishlist items and RFPs; since 10 June 2026 grants are paid in ETH by default.[^esp-blog][^ethdaily-eth]
- **Optimism Retro Funding**, the flagship retroactive program, was paused in January 2026 "for at least the next 12 months".[^op-s9]
- **Gitcoin** ran GG24 (Oct 2025) under a new multi-mechanism model but planned only a small partner-funded GG25 to "preserve runway"; no GG25 dates were published by Oct 2026.[^gg25]
- **Cardano Catalyst** paused Fund15/16 and ran a small curated pilot instead;[^pc-update] **Web3 Foundation** discontinued its Polkadot grants program;[^w3f] **Avalanche Retro9000** is archived;[^r9k] **Aave Grants DAO** is sunset.[^agd]
- New money appeared for **Ethereum security**: TheDAO Security Fund (≈$150M endowment, ~$8M/yr yield) launched in 2026,[^dao-fund] and Vitalik Buterin pledged ~$45M personally for privacy/verifiable open-source tech.[^vb-45m]
- **Bitcoin** funders (OpenSats, HRF, Brink, Spiral) stayed steady and remain the most "classic" open-source grantmakers in the space.[^os-apply]

Common traits: payouts are usually **in tokens** (ETH, OP, STRK, XLM, ZEC, BTC/sats, ADA) or stablecoins (USDC, USDm), rarely fiat; **KYC/KYB is now standard** at most foundations (ESP, Starknet, Stellar, Prezenti; Zcash retro above $50K);[^esp-applicants][^sn-seed][^scf-hb][^pz-s3][^zch] and ecosystem grants increasingly favour **traction metrics** or **convertible** structures over pure public goods.[^sol]

# Best options by applicant profile
| Profile | Best programs |
|---|---|
| OSS maintainer of Ethereum infra/tooling | [EF ESP](/programs/web3/ethereum-foundation-esp.md), [TheDAO Security Fund](/programs/web3/thedao-security-fund.md) (security), [Octant](/programs/web3/octant.md), [Drips](/programs/web3/drips.md) |
| Ethereum L1 core developer | [Protocol Guild](/programs/web3/protocol-guild.md), [EF ESP](/programs/web3/ethereum-foundation-esp.md) |
| Bitcoin / nostr OSS developer | [OpenSats](/programs/web3/opensats-grants.md), [HRF BDF](/programs/web3/hrf-bitcoin-development-fund.md), [Brink](/programs/web3/brink-grants-fellowship.md), [Spiral](/programs/web3/spiral-grants.md) |
| Privacy / Zcash builder | [Zcash Community Grants](/programs/web3/zcash-community-grants.md), [Zcash coinholder retro grants](/programs/web3/zcash-coinholder-retroactive-grants.md), [Octant Epoch 13](/programs/web3/octant.md) |
| Early-stage startup on an L1/L2 | [Starknet Seed/Growth](/programs/web3/starknet-foundation-grants.md), [Stellar SCF](/programs/web3/stellar-community-fund.md), [Solana Foundation](/programs/web3/solana-foundation-grants.md), [Aptos](/programs/web3/aptos-foundation-grants.md), [Base Batches](/programs/web3/base-batches.md), [Prezenti/Celo](/programs/web3/celo-prezenti-grants.md) |
| Already shipped, wants retro reward | [Base Builder Grants](/programs/web3/base-builder-grants.md), [Zcash coinholder retro](/programs/web3/zcash-coinholder-retroactive-grants.md), [NEAR Protocol Rewards](/programs/web3/near-protocol-rewards.md) |
| Needs a smart-contract audit | [Uniswap UFSF](/programs/web3/uniswap-foundation-security-fund.md), [Avalanche audit subsidies](/programs/web3/avalanche-foundation-builder-grants.md) |
| Small/fast grant, individual builder | [Superteam instagrants](/programs/web3/superteam-instagrants.md), [Filecoin open grants](/programs/web3/filecoin-foundation-open-grants.md), [Giveth QF](/programs/web3/giveth-qf-rounds.md) |
| PhD researcher | [EF PhD Fellowship](/programs/web3/ethereum-foundation-phd-fellowship.md), [Avalanche research call](/programs/web3/avalanche-foundation-builder-grants.md), [Sui academic awards](/programs/web3/sui-foundation-grants.md) |
| AI on-chain | [Deep Funding](/programs/web3/deep-funding-singularitynet.md), [Prezenti Frontier pool](/programs/web3/celo-prezenti-grants.md) |

# Comparison
| Program | Funder | Who | Size | Status | Next deadline | Effort |
|---|---|---|---|---|---|---|
| [EF ESP](/programs/web3/ethereum-foundation-esp.md) | [EF](/funders/ethereum-foundation.md) | OSS Ethereum infra/research | Scoped; paid in ETH | Rolling (Wishlist) | Rolling | Medium |
| [EF PhD Fellowship](/programs/web3/ethereum-foundation-phd-fellowship.md) | [EF](/funders/ethereum-foundation.md) | PhD students | $24K | Closed between rounds | 2027 TBA | Medium |
| [Protocol Guild](/programs/web3/protocol-guild.md) | [Protocol Guild](/funders/protocol-guild.md) | L1 core devs | Vesting share | Open (nomination) | Quarterly audits | Low |
| [Gitcoin Grants](/programs/web3/gitcoin-grants.md) | [Gitcoin](/funders/gitcoin.md) | Public goods | QF match | Between rounds | GG25 unannounced | Low |
| [Optimism Retro Funding](/programs/web3/optimism-retro-funding.md) | [Optimism](/funders/optimism-foundation.md) | Superchain OSS | OP | Paused | — | Low |
| [Optimism Grants Council](/programs/web3/optimism-grants-council.md) | [Optimism](/funders/optimism-foundation.md) | DeFi on OP | OP | Between seasons | — | Medium |
| [TheDAO Security Fund](/programs/web3/thedao-security-fund.md) | [TheDAO SF](/funders/thedao-security-fund.md) | Ethereum security | RFPs up to $600K | Open (Round 2) | Allocation mid-Nov 2026 | Medium |
| [Giveth QF](/programs/web3/giveth-qf-rounds.md) | [Giveth](/funders/giveth.md) | Public goods | QF match | Between rounds | — | Low |
| [Octant](/programs/web3/octant.md) | [Golem Fdn](/funders/golem-foundation.md) | ETH public goods | ETH epochs | Upcoming | Epoch 13 opens 2026-10-14 | Medium |
| [Drips](/programs/web3/drips.md) | [Drips](/funders/drips.md) | OSS repos | Streams/Waves | Open | Recurring | Low |
| [Arbitrum D.A.O. grants](/programs/web3/arbitrum-dao-domain-allocator-grants.md) | [Arbitrum](/funders/arbitrum-foundation.md) | Builders | ≤50K USDC | Between seasons | S4 unconfirmed | Medium |
| [Arbitrum Audit Program](/programs/web3/arbitrum-audit-program.md) | [Arbitrum](/funders/arbitrum-foundation.md) | Arbitrum teams | ≤100% audit | Closed | — | Medium |
| [Base Builder Grants](/programs/web3/base-builder-grants.md) | [Base](/funders/coinbase-base.md) | Shipped builders | 1–5 ETH | Rolling (nomination) | — | Low |
| [Base Batches](/programs/web3/base-batches.md) | [Base](/funders/coinbase-base.md) | Pre-seed startups | $10K | Between rounds | 2027 TBA | Medium |
| [Solana Foundation](/programs/web3/solana-foundation-grants.md) | [Solana Fdn](/funders/solana-foundation.md) | OSS public goods | Milestone/convertible | Rolling | Rolling | Medium |
| [Superteam instagrants](/programs/web3/superteam-instagrants.md) | [Solana Fdn](/funders/solana-foundation.md) | Regional builders | ≤$10–15K USDC | Rolling (some paused) | Rolling | Low |
| [W3F / Polkadot grants](/programs/web3/web3-foundation-grants.md) | [W3F](/funders/web3-foundation.md) | — | — | Discontinued | — | — |
| [Project Catalyst](/programs/web3/cardano-project-catalyst.md) | [Catalyst](/funders/project-catalyst.md) | Cardano teams | 50–200K ADA (pilot) | Paused | — | High |
| [Stellar SCF Build](/programs/web3/stellar-community-fund.md) | [SDF](/funders/stellar-development-foundation.md) | Stellar projects | ≤$150K XLM | Open | 2026-11-08 | High |
| [NEAR Protocol Rewards](/programs/web3/near-protocol-rewards.md) | [NEAR Fdn](/funders/near-foundation.md) | NEAR builders | ≤$10K/mo | Rolling | Rolling | Low |
| [Sui grants/RFPs](/programs/web3/sui-foundation-grants.md) | [Sui Fdn](/funders/sui-foundation.md) | Sui builders | Per RFP | Open | Per RFP | Medium |
| [Aptos Ecosystem Grants](/programs/web3/aptos-foundation-grants.md) | [Aptos Fdn](/funders/aptos-foundation.md) | Aptos builders | $5–50K | Rolling | Rolling | Medium |
| [Avalanche Builder Hub](/programs/web3/avalanche-foundation-builder-grants.md) | [Avalanche Fdn](/funders/avalanche-foundation.md) | Builders/academics | ≤$50K research | Rolling | Rolling | Medium |
| [Avalanche Retro9000](/programs/web3/avalanche-retro9000.md) | [Avalanche Fdn](/funders/avalanche-foundation.md) | — | — | Discontinued | — | — |
| [Polygon Community Grants](/programs/web3/polygon-community-grants.md) | [Polygon CTB](/funders/polygon-community-treasury.md) | Polygon builders | POL | Unverified | — | Medium |
| [ZKsync Community Activation](/programs/web3/zksync-community-activation-rfps.md) | [ZKsync](/funders/zksync-foundation.md) | Education/growth | ZK | Open (RFPs) | Per RFP | Medium |
| [Starknet Seed/Growth](/programs/web3/starknet-foundation-grants.md) | [Starknet Fdn](/funders/starknet-foundation.md) | MVP+ teams | ≤$25K / ≤$1M STRK | Rolling | Rolling | Medium |
| [Prezenti (Celo)](/programs/web3/celo-prezenti-grants.md) | [Prezenti](/funders/prezenti.md) | Celo products | from $25K | Open | 2026-12-29 | Medium |
| [Filecoin Open Grants](/programs/web3/filecoin-foundation-open-grants.md) | [Filecoin Fdn](/funders/filecoin-foundation.md) | OSS storage tooling | ≤$50K | Rolling | Rolling | Low |
| [Zcash Community Grants](/programs/web3/zcash-community-grants.md) | [ZCG](/funders/zcash-community-grants.md) | Zcash teams | Scoped | Rolling | Rolling | Medium |
| [Zcash coinholder retro](/programs/web3/zcash-coinholder-retroactive-grants.md) | [FPF](/funders/financial-privacy-foundation.md) | Completed work | USD in ZEC | Upcoming | 2026-11-13 | Medium |
| [OpenSats](/programs/web3/opensats-grants.md) | [OpenSats](/funders/opensats.md) | Bitcoin/nostr OSS | Varies | Rolling | Rolling | Low |
| [Brink](/programs/web3/brink-grants-fellowship.md) | [Brink](/funders/brink.md) | Bitcoin protocol devs | Year-long | Rolling | Rolling | Medium |
| [HRF BDF](/programs/web3/hrf-bitcoin-development-fund.md) | [HRF](/funders/human-rights-foundation.md) | Freedom tech | sats | Rolling | Rolling | Low |
| [Spiral](/programs/web3/spiral-grants.md) | [Spiral](/funders/spiral.md) | Bitcoin OSS devs | BTC | Rolling | Rolling | Low |
| [Vitalik / Kanro](/programs/web3/vitalik-buterin-kanro-giving.md) | [Kanro](/funders/kanro.md) | Invite-only | Large | Invite-only | — | High |
| [Uniswap Foundation Grants](/programs/web3/uniswap-foundation-grants.md) | [UF](/funders/uniswap-foundation.md) | Uniswap builders | $7.5K–$1M+ | Rolling | Rolling | Medium |
| [UFSF audits](/programs/web3/uniswap-foundation-security-fund.md) | [UF](/funders/uniswap-foundation.md) | v4 hook teams | ≤100% audit | Open | 2026-10-07 | Low |
| [Aave Grants DAO](/programs/web3/aave-grants-dao.md) | [Aave DAO](/funders/aave-dao.md) | — | — | Discontinued | — | — |
| [Chainlink BUILD](/programs/web3/chainlink-build.md) | [Chainlink Labs](/funders/chainlink-labs.md) | Token projects | Not a grant | Discontinued | — | High |
| [Funding the Commons](/programs/web3/funding-the-commons.md) | [FtC](/funders/funding-the-commons.md) | PG founders | Residency | Between calls | — | Medium |
| [Deep Funding](/programs/web3/deep-funding-singularitynet.md) | [SingularityNET](/funders/singularitynet.md) | AI builders | ≤~$100K | Between rounds | — | Medium |

# Upcoming deadlines
| Date | Call |
|---|---|
| 2026-10-07 | [Uniswap UFSF October cohort](/calls/2026-10-07-uniswap-ufsf-october-cohort.md) |
| 2026-10-14 | Octant Epoch 13 opens (privacy, 100 ETH matching) — [program](/programs/web3/octant.md) |
| 2026-11-08 | [Stellar SCF #46 Build Award](/calls/2026-11-08-stellar-scf-46-build.md) |
| 2026-11-13 | [Zcash coinholder retro grants Q4](/calls/2026-11-13-zcash-coinholder-retro-q4.md) |
| mid-Nov 2026 | TheDAO Security Fund Round Two allocation — [program](/programs/web3/thedao-security-fund.md) |
| 2026-12-29 | [Prezenti Celo Season 3 closes](/calls/2026-12-29-prezenti-celo-season-3.md) |
| late Jan 2027 | TheDAO Round Two submission window closes (exact date unverified) |

Recently closed (for cadence): [Catalyst Pilot 2026-08-20](/calls/2026-08-20-cardano-catalyst-pilot-2026.md), [Zcash Q3 2026-08-14](/calls/2026-08-14-zcash-coinholder-retro-q3.md), [Arbitrum Audit Program 2026-07-31](/calls/2026-07-31-arbitrum-audit-program-close.md), [Optimism S9 2026-05-20](/calls/2026-05-20-optimism-grants-council-s9.md), [Giveth Ethereum Security QF 2026-05-14](/calls/2026-05-14-giveth-ethereum-security-qf.md), [Zcash Q2 2026-05-14](/calls/2026-05-14-zcash-coinholder-retro-q2.md), [EF PhD 2026-04-22](/calls/2026-04-22-ef-phd-fellowship-2026.md), [Base Batches 2026-03-09](/calls/2026-03-09-base-batches-2026-startup.md), [FtC El Salvador 2026-09-18](/calls/2026-09-18-ftc-el-salvador-fellowship.md), [Gitcoin GG24 2025-10-28](/calls/2025-10-28-gitcoin-gg24.md).

# Tips
- **Map to the funder's published priorities.** ESP now only funds Wishlist/RFP items — use Office Hours first.[^esp-applicants]
- **Plan for token payouts and volatility.** Budgets are often set in USD but paid in tokens (XLM, ZEC, STRK) at disbursement rates; check whether you can legally receive and hold them.[^scf-hb][^zch][^sn-seed]
- **Expect KYC/KYB and a grant agreement** at most foundations; nym-friendly options are rarer (OpenSats explicitly is).[^esp-applicants][^os-apply]
- **Show proof of work.** Retro programs (Base, Zcash coinholder, NEAR rewards) and traction pools (Prezenti Anchor) reward shipped, verifiable usage.[^base-gitcoin][^pz-s3]
- **Milestone structure is the norm**: tranches (SCF 10/20/30/40%), 20/80 (Prezenti), 40/40/20 (Catalyst pilot).[^scf-hb][^pz-s3][^pc-update]
- **Watch governance forums** (Arbitrum, Optimism, Zcash, Celo) — that is where seasons are announced or quietly not renewed.[^arb-s3]

# Discontinued or paused programs
- **Optimism Retro Funding** — paused ≥12 months from Jan 2026 for strategic re-evaluation.[^op-s9]
- **Web3 Foundation Grants Program** and **Polkadot Open Source Developer Grants bounty** — discontinued/closed.[^w3f]
- **Project Catalyst Fund15/16** — paused Jan 2026; replaced by a small curated pilot.[^pc-update]
- **Avalanche Retro9000** — archived in 2026.[^r9k]
- **Aave Grants DAO** — sunset (confirmed July 2026).[^agd]
- **Chainlink BUILD** — concluded June 2026 (was never a grant).[^cl-evo]
- **Arbitrum Audit Program** — closed 31 Jul 2026; **Arbitrum D.A.O. grants** Season 3 ended March 2026 with no confirmed Season 4.[^aap][^arb-s3]
- **EF ESP open applications** — ended Aug 2025 (replaced by Wishlist/RFP).[^esp-blog]

[^esp-blog]: https://blog.ethereum.org/category/ecosystem-support-program
[^esp-applicants]: https://esp.ethereum.foundation/applicants
[^ethdaily-eth]: https://ethdaily.io/ef-esp-pays-grants-in-eth
[^op-s9]: https://optimism.io/blog/season-9-from-experiment-to-organization
[^gg25]: https://gov.gitcoin.co/t/early-thinking-on-gg25/24883
[^pc-update]: https://projectcatalyst.io/blog/update-from-the-catalyst-team
[^w3f]: https://github.com/w3f/Grants-Program
[^r9k]: https://retro9000.avax.network/
[^agd]: https://governance.aave.com/t/aave-grants-dao-is-the-program-still-active-and-accepting-applications/25319
[^cl-evo]: https://chain.link/blog/build-program-evolution
[^aap]: https://forum.arbitrum.foundation/t/arbitrum-audit-program-transparency-report-3/30976
[^arb-s3]: https://forum.arbitrum.foundation/t/arbitrum-d-a-o-grant-program-season-3-official-thread/28753
[^dao-fund]: https://www.coindesk.com/tech/2026/02/18/from-2016-hack-to-usd150m-endowment-the-dao-s-second-act-focuses-on-ethereum-security
[^sn-seed]: https://www.starknet.io/grants/seed-grants/
[^zch]: https://forum.zcashcommunity.com/t/coinholder-directed-retroactive-grants-program-q2-2026-now-accepting-proposals/55328
[^os-apply]: https://opensats.org/apply
[^scf-hb]: https://stellar.gitbook.io/scf-handbook
[^pz-s3]: https://forum.celo.org/t/prezenti-season-3-is-open-frontier-anchor-and-boost-grants-for-celo/13714
[^base-gitcoin]: https://gitcoin.co/apps/base-builder-grants
[^vb-45m]: https://www.opensourceforu.com/2026/02/ethereum-co-founder-vitalik-buterin-puts-45m-into-open-source-privacy-and-verifiable-systems/
[^sol]: https://solana.org/grants-funding
