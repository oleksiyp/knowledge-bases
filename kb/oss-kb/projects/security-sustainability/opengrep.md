---
type: OSS Project
title: Opengrep
description: "Community fork of Semgrep CE launched 2025-01-23 by a consortium of AppSec vendors after Semgrep's 2024-12-13 licensing clampdown; a vendor-backed 'defensive fork' that ships releases every few weeks (v1.30, v2.0 alphas with inter-file analysis in Sep 2026) but remains niche."
resource: https://github.com/opengrep/opengrep
tags: [sast, fork, license-change, appsec]
domain: security-sustainability
license: LGPL-2.1
license_history: ["LGPL-2.1 (inherited from Semgrep CE, forked 2025-01)"]
governance: community
steward: Opengrep consortium (Aikido, Arnica, Amplify, Endor Labs, Jit, Kodem, Legit, Mobb, Orca)
backing_orgs: [organizations/aikido-security, organizations/endor-labs, organizations/semgrep]
metrics:
  github_stars: { value: 3133, as_of: 2026-10-03 }
oss_verdict: growing
business_verdict: n/a
momentum_by_window: { W3: up, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: opengrep
    resource: https://www.opengrep.dev/
    title: Opengrep homepage
  - id: opengrep-gh
    resource: https://github.com/opengrep/opengrep/releases
    title: Opengrep GitHub releases
    last_modified: 2026-09-21T00:00:00Z
  - id: prn-launch
    resource: https://www.prnewswire.com/news-releases/security-rivals-unite-to-launch-opengrep-following-semgrep-clampdown-302358962.html
    title: "PR Newswire: Security rivals unite to launch Opengrep following Semgrep clampdown (2025-01-23)"
  - id: socket-opengrep
    resource: https://socket.dev/blog/opengrep-forks-semgrep
    title: "Socket: Opengrep emerges as open source alternative amid Semgrep licensing controversy"
  - id: secweek-semgrep-d
    resource: https://www.securityweek.com/semgrep-raises-100m-for-ai-powered-code-security-platform/
    title: "SecurityWeek: Semgrep raises $100M for AI-powered code security platform (Feb 2025)"
---
# Summary
Semgrep maintains an LGPL-2.1 static-analysis engine. It raised a $100M Series D led by Menlo Ventures in February 2025, bringing its total funding to $204M.[^secweek-semgrep-d] On 2024-12-13 Semgrep moved community-contributed rules under a commercial license and took capabilities such as ignore tracking, fingerprinting and meta-variables out of the open engine.[^prn-launch] On **2025-01-23**, a consortium of AppSec vendors launched Opengrep as a fork of Semgrep CE. Members are Aikido Security, Arnica, Amplify, Endor Labs, Jit, Kodem, Legit Security, Mobb and Orca Security, with "capital and development expertise from each member" (no amounts disclosed) and a pledge to move it under foundation management.[^prn-launch][^socket-opengrep] Verdict: **growing**. The fork ships often. v1.24 through v1.30 came out between June and September 2026, and v2.0 alphas add inter-file analysis and a build without Python.[^opengrep-gh] It is still small (about 3.1k GitHub stars) and mostly funded by Semgrep's competitors. *Corrected in pass 2:* Semgrep funding "$93M through Series C" became "$204M total after the $100M Series D (Feb 2025)", and the fork dates were confirmed.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-13 | Semgrep restricts CE features and rule licensing[^prn-launch] | Business | − |
| W24 | 2025-01-23 | Opengrep fork launched by a 9+ vendor consortium[^prn-launch] | OSS | + |
| W24 | 2025-02 | Semgrep raises $100M Series D (total $204M)[^secweek-semgrep-d] | Business | + |
| W6 | 2026-06-30 | v1.24.0; regular releases continue[^opengrep-gh] | OSS | + |
| W3 | 2026-09-05 → 09-11 | v2.0.0 alphas (no-Python build, inter-file analysis); v1.30.0 on 09-07[^opengrep-gh] | OSS | + |

# OSS successes
- Kept a full-featured open SAST engine in the commons, restoring taint and inter-procedural analysis and Windows support.[^opengrep][^socket-opengrep]
- Fast release cadence: 7+ minor releases between July and September 2026.[^opengrep-gh]

# OSS failures / risks
- Development depends on competitors' commercial interest. The promised move to a foundation has not been confirmed.[^prn-launch]

# Business successes
- Consortium members avoid depending on a rival's engine.[^prn-launch]

# Business failures / risks
- The relicensing cost Semgrep community goodwill, but its funding was not affected ($100M raised two weeks after the fork).[^secweek-semgrep-d]

# By window
## W3
- v1.26–v1.30 and the first v2.0.0 alphas (inter-file analysis) released.[^opengrep-gh]
## W6
- v1.21–v1.25 released; regular cadence.[^opengrep-gh]
## W9
- No notable events found.
## W12
- No notable events found.
## W24
- Semgrep clampdown (2024-12-13); fork launched (2025-01-23); Semgrep Series D.[^prn-launch][^secweek-semgrep-d]

# Lessons
- In security tooling, relicensing quickly produces vendor-consortium forks (compare Valkey and OpenTofu).
- A defensive fork can keep shipping without hurting the original vendor's fundraising. Both sides "win" in the short run.

# Related
- [Semgrep](/organizations/semgrep.md), [Aikido Security](/organizations/aikido-security.md), [Endor Labs](/organizations/endor-labs.md), [Opengrep fork](/events/2025-01-opengrep-forks-semgrep.md)

[^opengrep]: opengrep.dev.
[^opengrep-gh]: Opengrep GitHub releases (checked 2026-10-03).
[^prn-launch]: PR Newswire, 2025-01-23.
[^socket-opengrep]: Socket blog.
[^secweek-semgrep-d]: SecurityWeek, Feb 2025.
