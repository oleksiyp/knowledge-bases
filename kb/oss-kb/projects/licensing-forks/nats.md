---
type: OSS Project
title: NATS
description: "CNCF-hosted messaging system whose main vendor Synadia tried in April 2025 to pull it out of the CNCF and relicense future server releases under BSL; the CNCF pushed back with trademark petitions and within a week Synadia agreed to transfer the trademarks and keep NATS Apache-2.0 — the period's clearest foundation win over a vendor clawback."
resource: https://github.com/nats-io/nats-server
tags: [messaging, apache-2.0, cncf, trademark, foundation-hosted, governance]
domain: licensing-forks
license: Apache-2.0
license_history: ["Apache-2.0 (2012-)", "Proposed BUSL relicense withdrawn (2025-05-01)"]
governance: foundation
steward: CNCF (Linux Foundation)
backing_orgs: [organizations/synadia]
metrics:
  github_stars: { value: 20832, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: up, W6: flat, W9: flat, W12: flat, W24: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: reg-nats
    resource: https://www.theregister.com/2025/04/28/cncf_synadia_nats_dispute/
    title: "The Register: CNCF tells main NATS contributor Synadia that it's free to fork off (2025-04-28)"
  - id: tns-nats
    resource: https://thenewstack.io/synadia-attempts-to-reclaim-nats-back-from-cncf/
    title: "The New Stack: Synadia attempts to reclaim NATS back from CNCF (2025-04-29)"
  - id: cncf-nats-agree
    resource: https://www.cncf.io/announcements/2025/05/01/cncf-and-synadia-align-on-securing-the-future-of-the-nats-io-project/
    title: "CNCF and Synadia align on securing the future of the NATS.io project (2025-05-01)"
  - id: heise-nats
    resource: https://www.heise.de/en/opinion/Opinion-Is-a-split-imminent-Synadia-demands-NATS-back-from-the-CNCF-10366963.html
    title: "heise: Opinion — Is a split imminent? Synadia demands NATS back from the CNCF"
  - id: nats-gh
    resource: https://github.com/nats-io/nats-server
    title: NATS server GitHub repository (releases)
  - id: synadia-jepsen
    resource: https://www.synadia.com/blog/jepsen-nats-2-12-1
    title: "Synadia: Response to Jepsen test of NATS 2.12.1 (2025-12)"
---

# Summary
NATS is the period's test of whether a vendor can take back a project it donated to a foundation. It cannot. In April 2025 Synadia, NATS's creator and main contributor, asked the CNCF to return the project, domain and repositories, and said it planned to move future server releases to BSL with a 2–4 year conversion to Apache-2.0.[^reg-nats][^tns-nats] The CNCF refused, saying Synadia "can't unilaterally claw back a community project", and filed USPTO petitions over the NATS trademarks on Apr 24, 2025.[^reg-nats] Within a week the parties settled. Synadia assigned its two NATS trademark registrations to the Linux Foundation, the CNCF kept the domain and GitHub org, and NATS stays Apache-2.0. Synadia may build proprietary products, but under a different name.[^cncf-nats-agree] Development continued, with NATS 2.15.0 released in Sept 2026.[^nats-gh] Verdict: stable, and a governance success for the foundation.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-04-24 | CNCF publishes response; files trademark petitions[^reg-nats] | OSS | ± |
| W24 | 2025-04-28/29 | Synadia's demand (exit CNCF, BUSL future releases) becomes public[^reg-nats][^tns-nats] | OSS | − |
| W24 | 2025-05-01 | Settlement: trademarks to LF, Apache-2.0 retained[^cncf-nats-agree] | OSS | + |
| W12 | 2025-12 | Jepsen test of NATS 2.12.1; Synadia publishes response[^synadia-jepsen] | OSS | ± |
| W3 | 2026-09-17 | NATS server 2.15.0[^nats-gh] | OSS | + |

# OSS successes
- Foundation trademark ownership worked as designed, and the project stayed open.[^cncf-nats-agree]
- Development continued without a fork (2.12 → 2.15).[^nats-gh]

# OSS failures / risks
- NATS depends heavily on Synadia's engineers, which was the very argument Synadia used. If Synadia reduced its investment, the project would struggle.[^reg-nats]
- Jepsen found correctness issues in 2.12.1, and Synadia had to respond publicly.[^synadia-jepsen]

# Business successes
- Synadia keeps its commercial freedom (proprietary add-ons under its own branding).[^cncf-nats-agree]

# Business failures / risks
- Synadia lost the option to relicense the core, which limits how it can capture value from the project.

# By window
## W3
- NATS 2.15.0 (Sept 17, 2026).[^nats-gh]
## W6
- No notable governance events found.
## W9
- No notable governance events found.
## W12
- Jepsen analysis and response (Dec 2025).[^synadia-jepsen]
## W24
- Clawback attempt and settlement (Apr 24 – May 1, 2025).[^reg-nats][^cncf-nats-agree]

# Lessons
- Once a project's trademark sits with a foundation, a vendor cannot relicense it without forking and renaming. This is the strongest structural protection open source has.
- Vendors who donate projects should plan for not being able to take them back.

# Related
- [Synadia](/organizations/synadia.md)
- [Synadia–CNCF NATS dispute](/events/2025-04-synadia-cncf-nats-dispute.md)
- [OpenTofu](/projects/licensing-forks/opentofu.md) — CNCF's other licensing-related project

[^reg-nats]: The Register — https://www.theregister.com/2025/04/28/cncf_synadia_nats_dispute/
[^tns-nats]: The New Stack — https://thenewstack.io/synadia-attempts-to-reclaim-nats-back-from-cncf/
[^cncf-nats-agree]: CNCF announcement — https://www.cncf.io/announcements/2025/05/01/cncf-and-synadia-align-on-securing-the-future-of-the-nats-io-project/
[^heise-nats]: heise — https://www.heise.de/en/opinion/Opinion-Is-a-split-imminent-Synadia-demands-NATS-back-from-the-CNCF-10366963.html
[^nats-gh]: NATS server GitHub — https://github.com/nats-io/nats-server
[^synadia-jepsen]: Synadia blog — https://www.synadia.com/blog/jepsen-nats-2-12-1
