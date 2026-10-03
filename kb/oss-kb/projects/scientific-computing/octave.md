---
type: OSS Project
title: GNU Octave (vs MATLAB)
description: The GPL MATLAB-compatible numerical environment; kept a steady volunteer release cadence (9.x → 11.3, 2024–2026) with better classdef and MATLAB compatibility, while proprietary MATLAB (MathWorks, ~$1.5B revenue) suffered a week-plus ransomware outage in May 2025 that reminded academia of single-vendor risk.
resource: https://octave.org
tags: [numerical-computing, matlab-compatible, gpl-3.0, gnu, community, proprietary-contrast]
domain: scientific-computing
license: GPL-3.0-or-later
license_history: ["GPL-3.0-or-later (unchanged)"]
governance: community
steward: GNU Project / Octave maintainers (volunteers)
backing_orgs: []
metrics:
  latest_release: { value: "11.3.0", as_of: 2026-06-01 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: flat, W6: up, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: octave-news
    resource: https://octave.org/news.html
    title: GNU Octave news (release history 9.3 → 11.3)
  - id: octave-11
    resource: https://lists.gnu.org/archive/html/info-gnu/2026-02/msg00012.html
    title: "info-gnu: GNU Octave 11.1.0 released"
  - id: lwn-octave-11
    resource: https://lwn.net/Articles/1059965/
    title: "LWN: GNU Octave 11.1.0 released"
    author: org:lwn
  - id: mathworks-ransomware
    resource: https://www.mathworks.com/company/trust-center/may-2025-ransomware-incident.html
    title: "MathWorks: May 2025 Ransomware Incident"
  - id: register-mathworks
    resource: https://www.theregister.com/security/2025/05/27/mathworks-ransomware-disruptions-rages-on-into-second-week/804153
    title: "The Register: MathWorks ransomware disruption rages on into second week (2025-05-27)"
    author: org:the-register
  - id: bleeping-mathworks
    resource: https://www.bleepingcomputer.com/news/security/mathworks-blames-ransomware-attack-for-ongoing-outages/
    title: "BleepingComputer: MATLAB dev confirms ransomware attack behind service outage"
  - id: mathworks-factsheet
    resource: https://www.mathworks.com/content/dam/mathworks/fact-sheet/2025-company-factsheet-8-5x11-8282v25.pdf
    title: "MathWorks 2025 company fact sheet"
---

# Summary
GNU Octave is the volunteer-run, GPL alternative to MATLAB. Over the window it shipped 9.3/9.4 (Dec 2024–Feb 2025), 10.1–10.3 (Mar–Oct 2025) and 11.1–11.3 (Feb–Jun 2026)[^octave-news]; 11.1 (Feb 2026) improved classdef objects, broadcasting for sparse/diagonal/permutation matrices and MATLAB-compatible NANFLAG/VECDIM options[^octave-11][^lwn-octave-11]. The proprietary contrast: MathWorks (~$1.5B annual revenue per its 2025 fact sheet)[^mathworks-factsheet] was hit by a commodity ransomware attack on 2025-05-18 that took down MATLAB Online, licensing and File Exchange for more than a week during exam season[^mathworks-ransomware][^register-mathworks][^bleeping-mathworks]. Verdict: stable, low-drama OSS; the larger story is that numerical-computing users moved to Python/Julia rather than to Octave.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-15 / 2025-02-07 | Octave 9.3.0, 9.4.0[^octave-news] | OSS | + |
| W24 | 2025-03-28 | Octave 10.1.0[^octave-news] | OSS | + |
| W24 | 2025-05-18 | MathWorks ransomware attack; MATLAB Online/licensing outage >1 week[^mathworks-ransomware][^register-mathworks] | Business (proprietary contrast) | − |
| W24 | 2025-06-03 | Octave 10.2.0[^octave-news] | OSS | + |
| W24 | 2025-10-01 | Octave 10.3.0[^octave-news] | OSS | + |
| W9 | 2026-02-20/23 | Octave 11.1.0: classdef, broadcasting for special matrices, MATLAB-compat options[^octave-11][^lwn-octave-11] | OSS | + |
| W6 | 2026-05-28 / 06-01 | Octave 11.2.0, 11.3.0[^octave-news] | OSS | + |

# OSS successes
- Reliable major-per-year cadence with continuous MATLAB-compatibility gains[^octave-news][^octave-11].

# OSS failures / risks
- Small volunteer team; limited mindshare growth as users migrate to NumPy/SciPy and Julia rather than Octave.

# Business successes
- n/a (no commercial steward).

# Business failures / risks
- n/a for Octave. For MATLAB: the 2025 ransomware incident exposed cloud-licensing single points of failure[^mathworks-ransomware][^bleeping-mathworks].

# By window
## W3
- No notable events found.
## W6
- Octave 11.2.0 and 11.3.0[^octave-news].
## W9
- Octave 11.1.0[^octave-11].
## W12
- No notable events found.
## W24
- Octave 9.3 → 10.3; MathWorks ransomware outage[^octave-news][^mathworks-ransomware].

# Lessons
- Proprietary scientific software with online license checks creates outage risk that open alternatives don't have.
- Compatibility clones survive but rarely win; ecosystems with new capabilities (Python, Julia) attract the migration instead.

# Related
- [/projects/scientific-computing/julia.md](/projects/scientific-computing/julia.md), [/projects/scientific-computing/scipy.md](/projects/scientific-computing/scipy.md), [/projects/scientific-computing/numpy.md](/projects/scientific-computing/numpy.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^octave-news]: https://octave.org/news.html
[^octave-11]: https://lists.gnu.org/archive/html/info-gnu/2026-02/msg00012.html
[^lwn-octave-11]: https://lwn.net/Articles/1059965/
[^mathworks-ransomware]: https://www.mathworks.com/company/trust-center/may-2025-ransomware-incident.html
[^register-mathworks]: https://www.theregister.com/security/2025/05/27/mathworks-ransomware-disruptions-rages-on-into-second-week/804153
[^bleeping-mathworks]: https://www.bleepingcomputer.com/news/security/mathworks-blames-ransomware-attack-for-ongoing-outages/
[^mathworks-factsheet]: https://www.mathworks.com/content/dam/mathworks/fact-sheet/2025-company-factsheet-8-5x11-8282v25.pdf
