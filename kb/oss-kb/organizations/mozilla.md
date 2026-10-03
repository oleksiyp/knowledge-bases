---
type: Organization
title: Mozilla
description: "Nonprofit-owned maker of Firefox and Thunderbird; record revenue ($680M+ in 2024) but ~86% from Google search royalties, product shutdowns, Foundation layoffs and a 2025–26 pivot to an opt-in 'AI browser' under CEO Anthony Enzor-DeMeo."
resource: https://www.mozilla.org
tags: [nonprofit, browser, search-deal-dependency, ai-pivot]
org_kind: nonprofit
hq: San Francisco, USA
funding: { total_usd: "n/a (revenue-funded)", last_round: "n/a", last_round_date: null, valuation_usd: "n/a" }
business_verdict: struggling
projects: [projects/end-user-apps/firefox, projects/end-user-apps/thunderbird]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: hentzschel-2024
    resource: https://www.soeren-hentzschel.at/mozilla/mozilla-umsatz-2024/
    title: "Sören Hentzschel: Mozilla revenue 2024"
  - id: mozfdn
    resource: https://www.theverge.com/2024/11/5/24289124/mozilla-foundation-layoffs-advocacy-global-programs
    title: "The Verge: Mozilla Foundation eliminates advocacy division"
    author: org:the-verge
  - id: pocket
    resource: https://blog.mozilla.org/en/mozilla/building-whats-next/
    title: "Mozilla: Building what's next (Pocket/Fakespot shutdown)"
  - id: remedy
    resource: https://www.omgubuntu.co.uk/2025/09/google-antitrust-ruling-firefox-search-deal
    title: "OMG! Ubuntu: Google can keep paying for Firefox search deal"
  - id: ceo
    resource: https://blog.mozilla.org/en/mozilla/leadership/mozillas-next-chapter-anthony-enzor-demeo-new-ceo/
    title: "Mozilla: Anthony Enzor-DeMeo named CEO"
  - id: mistral
    resource: https://blog.mozilla.org/en/firefox/mozilla-mistral-partnership/
    title: "Mozilla and Mistral partnership"
  - id: mozai
    resource: https://blog.mozilla.ai/cq-stack-overflow-for-agents/
    title: "Mozilla.ai: cq — Stack Overflow for AI coding agents"
  - id: uk-vpn
    resource: https://blog.mozilla.org/netpolicy/2026/05/15/mozilla-to-uk-regulators-vpns-are-essential-privacy-and-security-tools-and-should-not-be-undermined/
    title: "Mozilla to UK regulators: VPNs are essential privacy and security tools"
---
# Summary
Mozilla (Foundation + taxable Mozilla Corporation + MZLA/Thunderbird + Mozilla.ai + Mozilla Ventures) is financially comfortable on paper but strategically dependent. 2024 revenue exceeded $680M, net assets ~$1.4B, but Google provided ~86% of revenue and expenses rose to $589M+[^hentzschel-2024]. The September 2025 Google search remedy preserved non-exclusive default payments[^remedy]. It cut programs (Foundation advocacy division, ~30% of Foundation staff, Nov 2024[^mozfdn]; Pocket/Fakespot, May 2025[^pocket]) and named Firefox GM Anthony Enzor-DeMeo CEO in Dec 2025 with an AI-browser strategy[^ceo], culminating in a Mistral partnership (Sept 2026)[^mistral]. Mozilla.ai continues shipping open AI tooling[^mozai]. Verdict: struggling (dependency + strategic churn), not distressed.

# Business timeline
| Window | Date | Event |
|---|---|---|
| W24 | 2024-11-05 | Foundation lays off ~30%, ends advocacy division[^mozfdn] |
| W24 | 2025-05-22 | Pocket and Fakespot shut down[^pocket] |
| W24 | 2025-09-02 | Remedy ruling preserves Google payments (non-exclusive)[^remedy] |
| W12 | 2025-12-16 | Enzor-DeMeo becomes Mozilla Corp CEO[^ceo] |
| W9 | 2026-01 | 2024 financials: $680M+ revenue, Google ~86%[^hentzschel-2024] |
| W6 | 2026-05-15 | Public policy push to UK regulators on VPNs[^uk-vpn] |
| W3 | 2026-09-16 | Mistral partnership for Firefox Smart Window[^mistral] |

# Monetization model
Search royalties (Google default, others), subscriptions (Mozilla VPN, Relay), advertising (new-tab sponsored content); ~$66M from subscriptions+ads in 2024[^hentzschel-2024].

# Successes
- Record revenue; survived antitrust remedies; Firefox AI kill switch defused part of the AI backlash.
# Failures / risks
- Single-customer dependency; repeated product shutdowns; trust damage from 2025 ToU episode.

# Related
- [Firefox](/projects/end-user-apps/firefox.md), [Thunderbird](/projects/end-user-apps/thunderbird.md)
- [Google search remedy](/events/2025-09-google-search-remedy-mozilla.md), [Firefox ToU backlash](/events/2025-02-firefox-terms-of-use-backlash.md)

[^hentzschel-2024]: https://www.soeren-hentzschel.at/mozilla/mozilla-umsatz-2024/
[^mozfdn]: https://www.theverge.com/2024/11/5/24289124/mozilla-foundation-layoffs-advocacy-global-programs
[^pocket]: https://blog.mozilla.org/en/mozilla/building-whats-next/
[^remedy]: https://www.omgubuntu.co.uk/2025/09/google-antitrust-ruling-firefox-search-deal
[^ceo]: https://blog.mozilla.org/en/mozilla/leadership/mozillas-next-chapter-anthony-enzor-demeo-new-ceo/
[^mistral]: https://blog.mozilla.org/en/firefox/mozilla-mistral-partnership/
[^mozai]: https://blog.mozilla.ai/cq-stack-overflow-for-agents/
[^uk-vpn]: https://blog.mozilla.org/netpolicy/2026/05/15/mozilla-to-uk-regulators-vpns-are-essential-privacy-and-security-tools-and-should-not-be-undermined/
