---
type: Guide
title: What changed in software funding, 2025–2026
description: "The shifts that make older grant lists wrong: US federal cuts and the SBIR lapse, NGI Zero ending and NLnet Restack starting, CZI EOSS replaced, LTFF replaced, crypto programs paused, and AI labs becoming funders of open-source maintainers."
tags: [guide, landscape, changes]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: nsf-sbir
    resource: /programs/startup-rnd/nsf-sbir-sttr.md
    title: NSF SBIR/STTR concept
  - id: restack
    resource: /programs/oss-infrastructure/nlnet-restack.md
    title: NLnet Restack concept
  - id: otf
    resource: /programs/public-interest/otf-internet-freedom-fund.md
    title: OTF Internet Freedom Fund concept
  - id: os4s
    resource: /programs/research-software/os4science-open-source-life-sciences.md
    title: Open Source for Science Fund concept
  - id: taif
    resource: /programs/ai/ea-funds-transformative-ai-fund.md
    title: EA Funds Transformative AI Fund concept
  - id: register-daybreak
    resource: https://www.theregister.com/security/2026/09/04/openai-commits-1b-in-ai-credits-to-frontline-cyber-defenders/5294382
    title: "The Register: OpenAI commits $1B in AI credits to frontline cyber defenders (2026-09-04)"
  - id: optimism
    resource: /programs/web3/optimism-retro-funding.md
    title: Optimism Retro Funding concept
  - id: alpha-omega
    resource: /programs/oss-infrastructure/alpha-omega-grants.md
    title: Alpha-Omega concept
---

# The short version

Lists of software grants written before 2026 are often wrong. Programs have closed, paused or been
renamed, and the money has moved: away from US federal research and foreign-aid budgets, and
towards **European public funds** and **AI labs and hyperscalers**.

# What closed, paused or lapsed

| Change | Effect | Where to look now |
|---|---|---|
| **US SBIR/STTR lapsed** 1 Oct 2025 – 13 Apr 2026, then was reauthorized to 2031 with new Strategic Breakthrough awards up to $30M[^nsf-sbir] | A six-month gap in US small-business R&D grants | [NSF SBIR/STTR](/programs/startup-rnd/nsf-sbir-sttr.md) is open again (next deadline 4 Nov 2026) |
| **NSF:** 1,000+ grants terminated in 2025; CSSI paused; POSE renamed PESOSE | Fewer US research-software calls | [NSF PESOSE](/programs/research-software/nsf-pesose.md) (2 Mar 2027), [NSF CICI](/programs/research-software/nsf-oac-cici.md) |
| **NASA** open-source science elements not solicited in ROSES-2026 | No NASA OSS tool grants this cycle | [NASA OSTFL](/programs/research-software/nasa-roses-ostfl.md) (watch for a revival) |
| **OTF and US internet-freedom money disrupted** (OTF's federal grant terminated in March 2025, then litigation; USAID dismantled)[^otf] | OTF still runs rolling funds, but replacement money is mostly European | [OTF Internet Freedom Fund](/programs/public-interest/otf-internet-freedom-fund.md), [CIVICUS DDI](/programs/public-interest/civicus-ddi-digital-resiliency-grants.md), [Common Good Cyber](/programs/public-interest/isoc-common-good-cyber-fund.md) |
| **NGI Zero Commons Fund** final call closed 1 Jun 2026 | The EU's main small-grant OSS channel ended… | …and was replaced by [NLnet Restack](/programs/oss-infrastructure/nlnet-restack.md) and [CodeSupply](/programs/oss-infrastructure/nlnet-codesupply.md)[^restack] |
| **CZI Essential Open Source Software** ended | Scientific OSS lost its flagship funder… | …partly replaced by the $20M [Open Source for Science Fund](/programs/research-software/os4science-open-source-life-sciences.md)[^os4s] |
| **Long-Term Future Fund** closed (Aug 2026) | — | [EA Funds Transformative AI Fund](/programs/ai/ea-funds-transformative-ai-fund.md), always open[^taif] |
| **PSF Grants** paused (Aug 2025); Rust Foundation Fellowship closed; Google OSS Peer Bonus dormant | Language foundations shifted to paid maintainer roles | [PSF Developers-in-Residence](/programs/individuals/psf-developers-in-residence.md), [Rust Maintainers in Residence](/programs/individuals/rust-maintainers-in-residence.md) |
| **Crypto restructuring:** Optimism Retro Funding paused for 12+ months; Web3 Foundation grants closed; Cardano Catalyst paused; Aave Grants DAO sunset; EF ESP moved to wishlist-only and pays in ETH[^optimism] | Fewer open-ended web3 grants | Bitcoin funders ([OpenSats](/programs/web3/opensats-grants.md), [HRF](/programs/web3/hrf-bitcoin-development-fund.md)), [Stellar SCF](/programs/web3/stellar-community-fund.md), [TheDAO Security Fund](/programs/web3/thedao-security-fund.md) |
| **Innovate UK Smart grants** closed; Germany ZIM out of budget (Jul 2026); Enterprise Estonia start-up grant exhausted | Fewer general national startup grants | Themed competitions such as [Innovate UK](/programs/startup-rnd/innovate-uk-competitions.md) and [SPRIND Challenges](/programs/startup-rnd/sprind-challenges.md) |

# What grew

- **AI labs fund open source directly.**
  - Anthropic's [Claude for Open Source](/programs/ai/anthropic-claude-for-open-source.md) and OpenAI's [Codex for Open Source](/programs/ai/openai-codex-for-open-source.md) give maintainers free AI tooling.
  - OpenAI pledged **$1B in credits** for cyber defenders, naming open-source maintainers among them ([Daybreak](/programs/ai/openai-daybreak-frontline-defenders.md), Sept 2026).[^register-daybreak]
  - A 2026 coalition that includes Anthropic, AWS, GitHub, Google, Microsoft and OpenAI funds [Alpha-Omega](/programs/oss-infrastructure/alpha-omega-grants.md).[^alpha-omega]
- **German and EU public funding for open source is now the largest stable source.**
  - [Sovereign Tech Fund](/programs/oss-infrastructure/sovereign-tech-fund.md) and [Sovereign Tech Resilience](/programs/oss-infrastructure/sovereign-tech-resilience.md), which relaunched with CRA compliance services in Sept 2026.
  - [Prototype Fund](/programs/oss-infrastructure/prototype-fund.md), plus NLnet's new calls.
  - [Horizon Europe Open Internet Stack](/programs/oss-infrastructure/horizon-europe-open-internet-stack.md) and [EuroHPC AI Factories](/programs/ai/eurohpc-ai-factories-access.md), which offer free GPU time.
- **Free compute as a funding form:** [NAIRR](/programs/ai/nsf-nairr-pilot.md), [EuroHPC](/programs/ai/eurohpc-ai-factories-access.md), [TPU Research Cloud](/programs/ai/google-tpu-research-cloud.md) and the startup credit programs.
- **Funding through manifests and platforms:** [FLOSS/fund](/programs/oss-infrastructure/floss-fund.md) takes applications as `funding.json` files, and [thanks.dev](/programs/oss-infrastructure/thanks-dev.md) and [ecosyste.ms funds](/programs/oss-infrastructure/ecosystem-funds.md) distribute money automatically based on dependency graphs.

# What it means for applicants

1. **Check `program_status` before planning.** Of 247 programs, 26 are paused or discontinued
   and 81 are between rounds.
2. **Security, supply-chain and CRA framing wins money in 2026.** Most new pots fund hardening,
   audits and compliance rather than features.
3. **EU-based or EU-relevant projects have the most options.** US researchers should diversify
   into private foundations (Sloan, Schmidt, Simons) and compute programs.

[^nsf-sbir]: NSF SBIR/STTR concept (sources inside).
[^restack]: NLnet Restack concept.
[^otf]: OTF Internet Freedom Fund concept.
[^os4s]: Open Source for Science Fund concept.
[^taif]: Transformative AI Fund concept.
[^register-daybreak]: The Register.
[^optimism]: Optimism Retro Funding concept.
[^alpha-omega]: Alpha-Omega concept.
