---
type: Grant Program
title: OpenAI Cybersecurity Grant Program
description: OpenAI grants, mostly API credits, for defensive-security teams using frontier models on open-source and critical-infrastructure security. Re-scoped in February 2026 around a $10M API-credit pool for teams with a vulnerability-remediation track record; applications are rolling.
resource: https://openai.com/index/openai-cybersecurity-grant-program/
tags: [ai, security, api-credits, open-source, cyber-defense]
category: ai
funder: funders/openai
funder_type: corporate
region: global
applicant_types: [individual, oss-project, nonprofit, company, academic]
software_focus: [security, ai, oss-infrastructure]
funding_type: credits
oss_required: preferred
equity_free: yes
amount_min_usd: 10000
amount_text: "Grants historically from $10,000 (credits, cash or direct funding); since Feb 2026 a $10M API-credit pool for cyber-defense teams"
application_model: rolling
program_status: rolling
deadline_note: "Rolling; no published deadline"
effort_to_apply: medium
example_funded: [Socket, Semgrep, Trail of Bits, Calif]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: oai-cyber-grant
    resource: https://openai.com/index/openai-cybersecurity-grant-program/
    title: "OpenAI Cybersecurity Grant Program (program page; 403 to automated fetch, seen via search)"
  - id: oai-tac
    resource: https://openai.com/index/trusted-access-for-cyber/
    title: "Introducing Trusted Access for Cyber (OpenAI, 5 Feb 2026)"
  - id: cyberexpress-tac
    resource: https://thecyberexpress.com/trusted-access-for-cyber-openai/
    title: "Trusted Access For Cyber: OpenAI Expands AI Security (The Cyber Express)"
  - id: blockchain-news-tac
    resource: https://blockchain.news/flashnews/openai-announces-trusted-access-for-cyber-model-hits-high-cybersecurity-rating-and-10-million-api-credits-to-accelerate-defense
    title: "OpenAI Announces Trusted Access for Cyber ... 10 Million API Credits"
  - id: socket-grant
    resource: https://socket.dev/blog/openai-cybersecurity-grant-program
    title: "Socket Selected for OpenAI's Cybersecurity Grant Program"
  - id: register-daybreak
    resource: https://www.theregister.com/security/2026/09/04/openai-commits-1b-in-ai-credits-to-frontline-cyber-defenders/5294382
    title: "OpenAI commits $1B in AI credits to frontline cyber defenders (The Register, 4 Sep 2026)"
---

# Summary

OpenAI's Cybersecurity Grant Program funds defenders who use AI to improve security. Projects must be defensive and meant for broad public benefit.[^oai-cyber-grant] On 5 February 2026 OpenAI launched "Trusted Access for Cyber" and refocused the program: it committed **$10M in API credits** to teams with a proven record of finding and fixing vulnerabilities in open-source software and critical infrastructure.[^oai-tac][^blockchain-news-tac] The first recipients under the new framing were Socket, Semgrep, Calif and Trail of Bits.[^cyberexpress-tac] Applications remain rolling. Since September 2026 the program sits beside the much larger Daybreak for Frontline Defenders credit pool (see [Daybreak](/programs/ai/openai-daybreak-frontline-defenders.md)).[^register-daybreak]

# Eligibility

- Researchers, developers and organizations anywhere OpenAI's API is supported.[^oai-cyber-grant]
- Projects must be defensive. Offensive-security projects are out of scope.[^oai-cyber-grant]
- The 2026 credit pool favours teams with a demonstrated record of vulnerability discovery and remediation in OSS or critical infrastructure.[^oai-tac]

# What it funds

- AI-powered defensive tooling, including vulnerability discovery and remediation, supply-chain security, detection and response, and secure-by-default code.[^oai-cyber-grant][^cyberexpress-tac]
- Not funded: offensive or exploit-development work.

# Amounts & terms

- Grants have historically started at $10,000, paid as API credits, direct funding or equivalents.[^oai-cyber-grant]
- 2026: a $10M API-credit pool for qualifying cyber-defense teams.[^oai-tac]
- OpenAI expects results to be shared openly. Usage stays subject to the Trusted Access for Cyber identity and trust checks.[^oai-tac]

# How to apply

- Use the application form linked from the program page. Proposals should be short and say where current models fall short for security work. Include the team, method, timeline, budget and plan for sharing results.[^oai-cyber-grant]
- Teams that want cyber-permissive model access also need to go through Trusted Access for Cyber verification.[^oai-tac]

# Deadlines

| Date | Event |
|---|---|
| Rolling | Applications reviewed continuously; no published deadline |

# Track record

- Socket received a grant for supply-chain security work.[^socket-grant]
- 2026 credit recipients include Socket, Semgrep, Calif and Trail of Bits.[^cyberexpress-tac]

# Fit

- **Good fit if:** you maintain or build open-source security tooling, or run a security team with a public record of disclosures, and need model access or credits.
- **Poor fit if:** you need cash salary support, or your work is offensive tooling.

# Related

- [OpenAI (funder)](/funders/openai.md)
- [Daybreak for Frontline Defenders](/programs/ai/openai-daybreak-frontline-defenders.md)
- [Codex for Open Source](/programs/ai/openai-codex-for-open-source.md)
- [Anthropic Claude for Open Source / Project Glasswing](/programs/ai/anthropic-claude-for-open-source.md)

[^oai-cyber-grant]: OpenAI Cybersecurity Grant Program — https://openai.com/index/openai-cybersecurity-grant-program/
[^oai-tac]: Introducing Trusted Access for Cyber — https://openai.com/index/trusted-access-for-cyber/
[^cyberexpress-tac]: The Cyber Express — https://thecyberexpress.com/trusted-access-for-cyber-openai/
[^blockchain-news-tac]: Blockchain.news — https://blockchain.news/flashnews/openai-announces-trusted-access-for-cyber-model-hits-high-cybersecurity-rating-and-10-million-api-credits-to-accelerate-defense
[^socket-grant]: Socket blog — https://socket.dev/blog/openai-cybersecurity-grant-program
[^register-daybreak]: The Register — https://www.theregister.com/security/2026/09/04/openai-commits-1b-in-ai-credits-to-frontline-cyber-defenders/5294382
