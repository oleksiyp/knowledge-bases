---
type: Category Guide
title: "AI software, compute credits & AI-safety grants"
description: "Guide to grants, fellowships and compute/API-credit programs for AI software, open-source maintainers using AI, and AI-safety research and tooling, verified as of October 2026."
category: ai
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: cfoss
    resource: https://claude.com/contact-sales/claude-for-oss
    title: "Claude for Open Source (Anthropic)"
  - id: glasswing
    resource: https://www.anthropic.com/glasswing
    title: "Project Glasswing (Anthropic)"
  - id: codex-oss
    resource: https://developers.openai.com/community/codex-for-oss
    title: "Codex for Open Source (OpenAI)"
  - id: register-daybreak
    resource: https://www.theregister.com/security/2026/09/04/openai-commits-1b-in-ai-credits-to-frontline-cyber-defenders/5294382
    title: "OpenAI commits $1B in AI credits to frontline cyber defenders (The Register)"
  - id: oai-tac
    resource: https://openai.com/index/trusted-access-for-cyber/
    title: "Introducing Trusted Access for Cyber (OpenAI)"
  - id: ltff-closed
    resource: https://funds.effectivealtruism.org/funds/far-future
    title: "The Long-Term Future Fund has closed (EA Funds)"
  - id: taif-forum
    resource: https://forum.effectivealtruism.org/posts/dYuNi5Rh68o9YKstg/ea-funds-is-launching-the-transformative-ai-fund
    title: "EA Funds is launching the Transformative AI Fund"
  - id: cg-wiki
    resource: https://en.wikipedia.org/wiki/Coefficient_Giving
    title: "Coefficient Giving (Wikipedia)"
  - id: cg-tais-granted
    resource: https://grantedai.com/grants/coefficient-giving-rfp-technical-ai-safety-research-navigating-transformative-ai-coefficient-2026
    title: "Coefficient Giving Technical AI Safety RFP (GrantedAI listing)"
  - id: afmr
    resource: https://www.microsoft.com/en-us/research/collaboration/accelerating-foundation-models-research/
    title: "Accelerating Foundation Models Research (Microsoft Research)"
  - id: nv-agp
    resource: https://www.nvidia.com/en-us/industries/higher-education-research/academic-grant-program/
    title: "NVIDIA Academic Grant Program"
  - id: aisi-grants
    resource: https://aisi.gov.uk/grants
    title: "AISI grants"
  - id: ap-site
    resource: https://alignmentproject.aisi.gov.uk/
    title: "The Alignment Project"
  - id: nairr-home
    resource: https://nairrpilot.org/
    title: "NAIRR Pilot"
  - id: ehpc-fastlane
    resource: https://www.eurohpc-ju.europa.eu/ai-factories/ai-factories-access-modes/fast-lane-access-ai-factories_en
    title: "EuroHPC Fast Lane Access"
  - id: aria-sga-funding
    resource: https://aria.org.uk/opportunity-spaces/mathematics-for-safe-ai/safeguarded-ai/funding
    title: "ARIA Safeguarded AI — Funding"
  - id: foresight-rfp
    resource: https://foresight.org/grants/grants-ai-for-science-safety/
    title: "Foresight AI for Science & Safety Nodes RFP"
  - id: fellows-post
    resource: https://alignment.anthropic.com/2025/anthropic-fellows-program-2026/
    title: "Anthropic Fellows Program"
  - id: nv-gf
    resource: https://research.nvidia.com/graduate-fellowships
    title: "NVIDIA Graduate Fellowship"
  - id: fmf-grantees
    resource: https://www.frontiermodelforum.org/updates/announcement-of-new-ai-safety-fund-grantees/
    title: "Frontier Model Forum: new AI Safety Fund grantees"
  - id: llama-granted
    resource: https://grantedai.com/grants/llama-impact-grants-meta-platforms-inc-08e50598
    title: "Llama Impact Grants (GrantedAI listing)"
  - id: sff-2026
    resource: https://survivalandflourishing.fund/2026/application
    title: "SFF-2026 application announcement"
  - id: hf-gpus
    resource: https://huggingface.co/docs/hub/en/spaces-gpus
    title: "Hugging Face Community GPU Grants"
  - id: trc-faq
    resource: https://sites.research.google/trc/faq/
    title: "TPU Research Cloud FAQ"
  - id: oai-startups-gupta
    resource: https://guptadeepak.com/startup-offers/programs/openai-for-startups
    title: "OpenAI for Startups: Discontinued, and What to Use Instead"
  - id: manifund-2026
    resource: https://forum.effectivealtruism.org/posts/BRdEfX6WNg4hGSYFk/regranting-in-2026-now-more-than-ever-1
    title: "Manifund: Regranting in 2026"
  - id: msaig-open-call
    resource: https://www.microsoft.com/en-us/research/academic-program/ai-for-good-lab-open-call/
    title: "Microsoft AI for Good Lab Open Call"
---

# Overview

In 2026 most "AI grants" for software people are **in-kind**: API credits, chatbot subscriptions and GPU-hours, not cash. The biggest change of the year is that frontier labs now compete to give **open-source maintainers** free model access, driven by AI-assisted vulnerability discovery:

- **Anthropic's Claude for Open Source** (Feb 2026) gives up to 10,000 maintainers six months of Claude Max 20x.[^cfoss]
- **Project Glasswing** (Apr 2026) added up to $100M in Mythos Preview credits and $4M in donations to Alpha-Omega/OpenSSF and the Apache Software Foundation.[^glasswing]
- **OpenAI's Codex for Open Source** (Mar 2026) bundles ChatGPT Pro, API credits from a $1M fund and Codex Security.[^codex-oss]
- **OpenAI's Daybreak** (Sep 2026) pledged $1B in subsidised cyber-defence access and names OSS maintainers as a priority group.[^register-daybreak] The older OpenAI Cybersecurity Grant Program was refocused on a $10M API-credit pool.[^oai-tac]

**Public compute** has become a serious alternative to corporate credits. The US **NAIRR Pilot** got a permanent Operations Center on 1 September 2026, and its rolling allocations continue.[^nairr-home] Europe's **EuroHPC AI Factories** give SMEs and startups free GPU time, up to 50,000 GPU-hours through Fast Lane.[^ehpc-fastlane]

**AI-safety funding** reorganized in 2025–26:
- Open Philanthropy became **Coefficient Giving** (Nov 2025).[^cg-wiki] Its roughly $40M technical AI safety RFP closed on 21 Aug 2026.[^cg-tais-granted]
- EA Funds **closed the Long-Term Future Fund** and launched the **Transformative AI Fund** (Aug 2026).[^ltff-closed][^taif-forum]
- The UK AISI's Challenge Fund and Alignment Project (£27M to 60 projects) are closed.[^aisi-grants][^ap-site]
- New money came from Schmidt Sciences, a $10M multi-agent consortium, ARIA's verified-software cyber call[^aria-sga-funding] and Foresight's open-source nodes.[^foresight-rfp]

# Best options by applicant profile

| Profile | Best programs |
|---|---|
| OSS maintainer of a widely used package | [Claude for Open Source](/programs/ai/anthropic-claude-for-open-source.md), [Codex for Open Source](/programs/ai/openai-codex-for-open-source.md), [Daybreak / Patch the Planet](/programs/ai/openai-daybreak-frontline-defenders.md) |
| OSS security-tool builder | [OpenAI Cybersecurity Grant Program](/programs/ai/openai-cybersecurity-grant-program.md), [ARIA Safeguarded AI](/programs/ai/aria-safeguarded-ai.md), Glasswing (via [Claude for OSS](/programs/ai/anthropic-claude-for-open-source.md)) |
| Independent AI-safety researcher or engineer | [Transformative AI Fund](/programs/ai/ea-funds-transformative-ai-fund.md), [Manifund](/programs/ai/manifund-ai-safety-regranting.md), [Anthropic Fellows](/programs/ai/anthropic-fellows-program.md), [Coefficient CDTF](/programs/ai/coefficient-giving-career-development-transition.md), [Foresight](/programs/ai/foresight-ai-safety-nodes.md) |
| Academic AI or safety lab | [Schmidt Trustworthy AI](/programs/ai/schmidt-sciences-trustworthy-ai.md), [Multi-agent fund](/programs/ai/multi-agent-ai-safety-fund.md), [SFF](/programs/ai/survival-and-flourishing-fund.md), [NAIRR](/programs/ai/nsf-nairr-pilot.md), [TPU Research Cloud](/programs/ai/google-tpu-research-cloud.md) |
| Academic needing LLM API credits | [Anthropic AI for Science](/programs/ai/anthropic-ai-for-science.md), [Gemini Academic Program](/programs/ai/google-gemini-academic-program.md), [OpenAI Researcher Access](/programs/ai/openai-researcher-access-program.md), [AWS research credits](/programs/ai/aws-cloud-credit-for-research.md) |
| PhD student | [NVIDIA Graduate Fellowship](/programs/ai/nvidia-graduate-fellowship.md), [Lambda Research Grant](/programs/ai/lambda-research-grant.md), [Cooperative AI PhD Fellowship](/programs/ai/cooperative-ai-foundation-grants.md) |
| VC-backed AI startup | [Google for Startups AI tier](/programs/ai/google-for-startups-cloud-ai.md), [AWS GenAI Accelerator](/programs/ai/aws-generative-ai-accelerator.md), [Microsoft for Startups](/programs/ai/microsoft-for-startups.md), [Claude for Startups](/programs/ai/anthropic-claude-for-startups.md) |
| Bootstrapped startup or solo developer | [EuroHPC Playground/Fast Lane](/programs/ai/eurohpc-ai-factories-access.md) (EU), [Cloudflare Tier 3](/programs/ai/cloudflare-for-startups.md), [Hugging Face GPU grants](/programs/ai/hugging-face-community-gpu-grants.md), [TRC](/programs/ai/google-tpu-research-cloud.md) |
| Nonprofit or civic-tech | [Google.org AI Impact Challenges](/programs/ai/google-org-ai-impact-challenges.md), [Mozilla Democracy x AI](/programs/ai/mozilla-democracy-x-ai.md), [People-First AI Fund](/programs/ai/openai-people-first-ai-fund.md) (US) |

# Comparison

| Program | Funder | Who | Size | Status | Next deadline | Effort |
|---|---|---|---|---|---|---|
| [Claude for Open Source](/programs/ai/anthropic-claude-for-open-source.md) | [Anthropic](/funders/anthropic.md) | OSS maintainers | 6 mo Claude Max 20x (~$1.2k) | rolling | — (cap 10k) | low |
| [Codex for Open Source](/programs/ai/openai-codex-for-open-source.md) | [OpenAI](/funders/openai.md) | OSS maintainers | 6 mo ChatGPT Pro + API credits | rolling | — | low |
| [Daybreak / Patch the Planet](/programs/ai/openai-daybreak-frontline-defenders.md) | [OpenAI](/funders/openai.md) | Defenders, OSS | share of $1B subsidised access | open | ~6-month window | low |
| [OpenAI Cybersecurity Grants](/programs/ai/openai-cybersecurity-grant-program.md) | [OpenAI](/funders/openai.md) | Security teams | from $10k; $10M credits pool | rolling | — | medium |
| [OpenAI Researcher Access](/programs/ai/openai-researcher-access-program.md) | [OpenAI](/funders/openai.md) | Researchers | ≤$1k credits | rolling | Dec 2026 review | low |
| [People-First AI Fund](/programs/ai/openai-people-first-ai-fund.md) | [OpenAI](/funders/openai.md) | US nonprofits | ~$300k avg | closed | — | medium |
| [Anthropic AI for Science](/programs/ai/anthropic-ai-for-science.md) | [Anthropic](/funders/anthropic.md) | Academic/nonprofit scientists | ≤$20k credits | rolling | monthly | low |
| [Anthropic Fellows](/programs/ai/anthropic-fellows-program.md) | [Anthropic](/funders/anthropic.md) | Individuals (US/UK/CA) | $3,850/wk + compute | open | 2026-10-18 | high |
| [Claude for Startups](/programs/ai/anthropic-claude-for-startups.md) | [Anthropic](/funders/anthropic.md) | VC-backed startups | credits | rolling | — | low |
| [Economic Futures awards](/programs/ai/anthropic-economic-futures-program.md) | [Anthropic](/funders/anthropic.md) | Economists | ≤$50k | rolling | — | medium |
| [TPU Research Cloud](/programs/ai/google-tpu-research-cloud.md) | [Google](/funders/google.md) | Anyone (open results) | free TPUs | rolling | — | low |
| [Gemini Academic Program](/programs/ai/google-gemini-academic-program.md) | [Google](/funders/google.md) | Academics | credits | rolling | monthly | low |
| [Google for Startups AI tier](/programs/ai/google-for-startups-cloud-ai.md) | [Google](/funders/google.md) | Startups | ≤$350k credits | rolling | — | low |
| [Google.org AI Impact Challenges](/programs/ai/google-org-ai-impact-challenges.md) | [Google](/funders/google.md) | Nonprofits/academia | $0.5–3M | closed | — | high |
| [Microsoft for Startups](/programs/ai/microsoft-for-startups.md) | [Microsoft](/funders/microsoft.md) | Startups | ≤$150k Azure | rolling | — | low |
| [AI for Good Lab Open Call](/programs/ai/microsoft-ai-for-good-lab-open-call.md) | [Microsoft](/funders/microsoft.md) | WA State orgs | $5M pool credits | closed | — | medium |
| [AFMR → AARI](/programs/ai/microsoft-afmr-aari.md) | [Microsoft](/funders/microsoft.md) | Academics | credits | discontinued | — | medium |
| [AWS Cloud Credit for Research](/programs/ai/aws-cloud-credit-for-research.md) | [AWS](/funders/amazon-web-services.md) | Academics | students ≤$5k | rolling | — | medium |
| [AWS GenAI Accelerator](/programs/ai/aws-generative-ai-accelerator.md) | [AWS](/funders/amazon-web-services.md) | Startups | ≤$1M credits | closed | ~mid-2027 | high |
| [NVIDIA Academic Grants](/programs/ai/nvidia-academic-grant-program.md) | [NVIDIA](/funders/nvidia.md) | Faculty | ≤30k H100-hrs | paused | — | medium |
| [NVIDIA Graduate Fellowship](/programs/ai/nvidia-graduate-fellowship.md) | [NVIDIA](/funders/nvidia.md) | PhD students | ≤$60k | open | 2026-10-30 | high |
| [Llama Impact Grants](/programs/ai/meta-llama-impact-grants.md) | [Meta](/funders/meta.md) | Llama builders | $20k regional; >$1.5M/10 global | discontinued | — | medium |
| [HF Community GPU Grants](/programs/ai/hugging-face-community-gpu-grants.md) | [Hugging Face](/funders/hugging-face.md) | Space owners | in-kind GPU | rolling | — | low |
| [Mozilla Democracy x AI](/programs/ai/mozilla-democracy-x-ai.md) | [Mozilla](/funders/mozilla-foundation.md) | Civic-AI teams | $50k–$300k | closed | — | medium |
| [Lambda Research Grant](/programs/ai/lambda-research-grant.md) | [Lambda](/funders/lambda.md) | Researchers | ≤$5k credits | rolling | — | low |
| [Cloudflare for Startups](/programs/ai/cloudflare-for-startups.md) | [Cloudflare](/funders/cloudflare.md) | Startups | $10k–$350k | rolling | — | low |
| [EuroHPC AI Factories](/programs/ai/eurohpc-ai-factories-access.md) | [EuroHPC JU](/funders/eurohpc-ju.md) | EU SMEs/research | ≤50k GPU-h (Fast Lane) | rolling | continuous | low |
| [NAIRR Pilot](/programs/ai/nsf-nairr-pilot.md) | [NSF](/funders/nsf.md) | US researchers | ~2k GPU-h start-up | rolling | — | low |
| [Coefficient Technical AI Safety RFP](/programs/ai/coefficient-giving-technical-ai-safety-rfp.md) | [Coefficient Giving](/funders/coefficient-giving.md) | Researchers/orgs | ~$40M total | closed | — | medium |
| [Coefficient CDTF](/programs/ai/coefficient-giving-career-development-transition.md) | [Coefficient Giving](/funders/coefficient-giving.md) | Individuals | as needed | rolling | — | low |
| [Transformative AI Fund](/programs/ai/ea-funds-transformative-ai-fund.md) | [EA Funds](/funders/ea-funds.md) | Individuals/new orgs | $10k–$150k | rolling | — | low |
| [SFF S-Process](/programs/ai/survival-and-flourishing-fund.md) | [SFF](/funders/survival-and-flourishing-fund.md) | Charities/sponsored | $20–40M/yr | closed (rolling app) | 2027 TBA | medium |
| [Schmidt Trustworthy AI](/programs/ai/schmidt-sciences-trustworthy-ai.md) | [Schmidt Sciences](/funders/schmidt-sciences.md) | Academia/nonprofits | ≤$1M / $1–5M+ | closed | — | high |
| [AI2050 Fellowships](/programs/ai/schmidt-sciences-ai2050.md) | [Schmidt Sciences](/funders/schmidt-sciences.md) | Academics | $300–500k | nomination | — | high |
| [Multi-Agent AI Safety Fund](/programs/ai/multi-agent-ai-safety-fund.md) | [Schmidt Sciences](/funders/schmidt-sciences.md) + partners | Researchers | ≤$300k / ≤$1M | closed | — | high |
| [AISI Challenge Fund](/programs/ai/uk-aisi-challenge-fund.md) | [UK AISI](/funders/uk-ai-security-institute.md) | Academia/nonprofits | £50–200k | closed | — | medium |
| [Alignment Project](/programs/ai/uk-aisi-alignment-project.md) | [UK AISI](/funders/uk-ai-security-institute.md) | Researchers | £50k–£1M | closed | — | high |
| [ARIA Safeguarded AI: Cyber](/programs/ai/aria-safeguarded-ai.md) | [ARIA](/funders/aria.md) | Formal-methods teams | £2.5–3.5M | open | 2026-10-31 | high |
| [FMF AI Safety Fund](/programs/ai/frontier-model-forum-ai-safety-fund.md) | [Frontier Model Forum](/funders/frontier-model-forum.md) | Researchers | $10M+ fund | closed | — | high |
| [CAIF grants & PhD fellowships](/programs/ai/cooperative-ai-foundation-grants.md) | [CAIF](/funders/cooperative-ai-foundation.md) | Researchers/PhDs | varies | closed | TBA | medium |
| [Foresight AI Safety Nodes](/programs/ai/foresight-ai-safety-nodes.md) | [Foresight](/funders/foresight-institute.md) | Anyone (OSS req.) | $30–100k | open | 2026-10-31 | medium |
| [Manifund Regranting](/programs/ai/manifund-ai-safety-regranting.md) | [Manifund](/funders/manifund.md) | Individuals/charities | $5–50k | rolling | — | low |

# Upcoming deadlines

| Date | Call |
|---|---|
| 2026-10-05, 2026-11-02 … | [Anthropic AI for Science](/programs/ai/anthropic-ai-for-science.md) monthly review (first Monday) |
| 2026-10-18 | [Anthropic Fellows — January 2027 cohort](/calls/2026-10-18-anthropic-fellows-january-2027.md)[^fellows-post] |
| 2026-10-30 | [NVIDIA Graduate Fellowship 2027–28](/calls/2026-10-30-nvidia-graduate-fellowship-2027.md)[^nv-gf] |
| 2026-10-31 | [ARIA Safeguarded AI: Cybersecurity cut-off](/calls/2026-10-31-aria-safeguarded-ai-cybersecurity.md)[^aria-sga-funding] |
| 2026-10-31 | [Foresight AI for Science & Safety Nodes](/calls/2026-10-31-foresight-ai-safety-nodes.md)[^foresight-rfp] |
| Dec 2026 | [OpenAI Researcher Access](/programs/ai/openai-researcher-access-program.md) quarterly review |
| ~2027-01-31 | ARIA's next quarterly cut-off (estimated from the quarterly cadence; not published) |

Recently closed (within 12 months): [Coefficient Technical AI Safety RFP](/calls/2026-08-21-coefficient-giving-technical-ai-safety-rfp.md), [Multi-agent fund](/calls/2026-08-09-multi-agent-ai-safety-fund.md), [AWS GenAI Accelerator](/calls/2026-07-10-aws-generative-ai-accelerator.md), [Schmidt Trustworthy AI](/calls/2026-05-17-schmidt-sciences-trustworthy-ai.md), [SFF Main Round](/calls/2026-04-22-sff-2026-main-round.md), [Google.org AI for Science](/calls/2026-04-17-google-org-ai-for-science.md), [Google.org AI for Government](/calls/2026-04-03-google-org-ai-for-government-innovation.md), [Mozilla Democracy x AI](/calls/2026-03-16-mozilla-democracy-x-ai.md).

# Tips

- **Maintainers:** apply to both Claude for Open Source and Codex for Open Source. Both welcome borderline cases if you explain why the ecosystem depends on your project.[^cfoss][^codex-oss] Name dependents, downloads and OpenSSF criticality, since these are the published criteria.
- **Credits are not salary.** Pair lab credits with a cash source such as the Transformative AI Fund, Manifund or Foresight if you need to pay for your own time.[^taif-forum][^manifund-2026][^foresight-rfp]
- **Publish openly.** TRC requires public sharing of results,[^trc-faq] and Foresight requires all outputs to be open-sourced.[^foresight-rfp]
- **Biosecurity screening:** Anthropic's science credits involve a biosecurity review, so frame dual-use work carefully.
- **Compute without VC:** EuroHPC Playground and Fast Lane (EU) and NAIRR Start-Up (US, with federal grants) need no investor backing.[^ehpc-fastlane][^nairr-home]
- **Hosting demos:** for a public demo, use the Space settings to request a Hugging Face community GPU grant.[^hf-gpus]
- **SFF:** submit the rolling application early, because it automatically files a Speculation Grant request.[^sff-2026]

# Discontinued or paused programs

- **Long-Term Future Fund (EA Funds)** closed in August 2026 and was replaced by the Transformative AI Fund.[^ltff-closed]
- **Microsoft AFMR** concluded. Its successor AARI has no open call.[^afmr]
- **NVIDIA Academic Grant Program** is "currently not accepting new applications".[^nv-agp]
- **Meta Llama Impact Grants:** the last global call closed in Nov 2024 and no 2026 round was found.[^llama-granted]
- **UK AISI Challenge Fund, Systemic Safety Grants and Alignment Project** are all closed. The Alignment Project site says AISI is "unlikely to run a similar program in 2026".[^aisi-grants][^ap-site]
- **FMF AI Safety Fund** has no open RFP; remaining funds go to narrowly scoped projects.[^fmf-grantees]
- **Microsoft AI for Good Lab Open Call (WA)** is closed.[^msaig-open-call]
- **OpenAI direct startup credits:** third parties report there is no direct application; credits come only through partner VCs.[^oai-startups-gupta]

[^cfoss]: Anthropic — https://claude.com/contact-sales/claude-for-oss
[^glasswing]: Anthropic — https://www.anthropic.com/glasswing
[^codex-oss]: OpenAI — https://developers.openai.com/community/codex-for-oss
[^register-daybreak]: The Register — https://www.theregister.com/security/2026/09/04/openai-commits-1b-in-ai-credits-to-frontline-cyber-defenders/5294382
[^oai-tac]: OpenAI — https://openai.com/index/trusted-access-for-cyber/
[^ltff-closed]: EA Funds — https://funds.effectivealtruism.org/funds/far-future
[^taif-forum]: EA Forum — https://forum.effectivealtruism.org/posts/dYuNi5Rh68o9YKstg/ea-funds-is-launching-the-transformative-ai-fund
[^cg-wiki]: Wikipedia — https://en.wikipedia.org/wiki/Coefficient_Giving
[^cg-tais-granted]: GrantedAI — https://grantedai.com/grants/coefficient-giving-rfp-technical-ai-safety-research-navigating-transformative-ai-coefficient-2026
[^afmr]: Microsoft Research — https://www.microsoft.com/en-us/research/collaboration/accelerating-foundation-models-research/
[^nv-agp]: NVIDIA — https://www.nvidia.com/en-us/industries/higher-education-research/academic-grant-program/
[^aisi-grants]: AISI — https://aisi.gov.uk/grants
[^ap-site]: Alignment Project — https://alignmentproject.aisi.gov.uk/
[^nairr-home]: NAIRR Pilot — https://nairrpilot.org/
[^ehpc-fastlane]: EuroHPC — https://www.eurohpc-ju.europa.eu/ai-factories/ai-factories-access-modes/fast-lane-access-ai-factories_en
[^aria-sga-funding]: ARIA — https://aria.org.uk/opportunity-spaces/mathematics-for-safe-ai/safeguarded-ai/funding
[^foresight-rfp]: Foresight — https://foresight.org/grants/grants-ai-for-science-safety/
[^fellows-post]: Anthropic — https://alignment.anthropic.com/2025/anthropic-fellows-program-2026/
[^nv-gf]: NVIDIA — https://research.nvidia.com/graduate-fellowships
[^fmf-grantees]: FMF — https://www.frontiermodelforum.org/updates/announcement-of-new-ai-safety-fund-grantees/
[^llama-granted]: GrantedAI — https://grantedai.com/grants/llama-impact-grants-meta-platforms-inc-08e50598
[^sff-2026]: SFF — https://survivalandflourishing.fund/2026/application
[^hf-gpus]: Hugging Face — https://huggingface.co/docs/hub/en/spaces-gpus
[^trc-faq]: Google — https://sites.research.google/trc/faq/
[^oai-startups-gupta]: guptadeepak.com — https://guptadeepak.com/startup-offers/programs/openai-for-startups
[^manifund-2026]: EA Forum — https://forum.effectivealtruism.org/posts/BRdEfX6WNg4hGSYFk/regranting-in-2026-now-more-than-ever-1
[^msaig-open-call]: Microsoft Research — https://www.microsoft.com/en-us/research/academic-program/ai-for-good-lab-open-call/
