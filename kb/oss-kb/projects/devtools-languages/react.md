---
type: OSS Project
title: React
description: The dominant UI library; moved from Meta control to the vendor-neutral React Foundation under the Linux Foundation (announced Oct 2025, launched Feb 2026) while suffering its worst-ever vulnerability, the CVSS-10 React2Shell RCE in Server Components.
resource: https://github.com/facebook/react
tags: [javascript, ui-library, mit, foundation-hosted, linux-foundation, governance]
domain: devtools-languages
license: MIT
license_history: ["BSD+Patents (2013-2017)", "MIT (2017-)"]
governance: foundation
steward: React Foundation (Linux Foundation)
backing_orgs: [organizations/react-foundation, organizations/vercel]
metrics:
  github_stars: { value: 250862, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: n/a
momentum_by_window: { W3: up, W6: flat, W9: up, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
verified: { by: claude-code/claude-opus-5-5-verifier, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: react-gh
    resource: https://github.com/facebook/react
    title: React GitHub repository (stars via GitHub API, 2026-10-03)
  - id: react-releases
    resource: https://github.com/facebook/react/releases
    title: "React GitHub releases (19.x patch/backport releases 2025-12 → 2026-07; 19.3.0 on 2026-09-09; via GitHub API)"
  - id: react-blog
    resource: https://react.dev/blog
    title: "react.dev blog index (React v19 2024-12-05; 19.2 2025-10-01; Compiler v1.0 2025-10-07)"
    author: org:react-foundation
  - id: react-19-3
    resource: https://react.dev/blog/2026/09/09/react-19-3
    title: "react.dev: React 19.3 (2026-09-09)"
    author: org:react-foundation
  - id: react-foundation-blog
    resource: https://react.dev/blog/2025/10/07/introducing-the-react-foundation
    title: "react.dev: Introducing the React Foundation"
    author: org:react-foundation
  - id: react-foundation-launch
    resource: https://react.dev/blog/2026/02/24/the-react-foundation
    title: "react.dev: The React Foundation — A New Home for React Hosted by the Linux Foundation (2026-02-24)"
    author: org:react-foundation
  - id: react-rce
    resource: https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components
    title: "react.dev: Critical Security Vulnerability in React Server Components (CVE-2025-55182, 2025-12-03)"
    author: org:react-foundation
  - id: react-dos
    resource: https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components
    title: "react.dev: Denial of Service and Source Code Exposure in React Server Components (2025-12-11)"
    author: org:react-foundation
  - id: cisa-kev
    resource: https://www.cisa.gov/news-events/alerts/2025/12/05/cisa-adds-one-known-exploited-vulnerability-catalog
    title: "CISA: Adds One Known Exploited Vulnerability to Catalog (CVE-2025-55182, 2025-12-05)"
---

# Summary
React remains the most-starred UI library (251k GitHub stars) and shipped steadily — React 19 (2024-12-05), 19.2 (2025-10-01, `Activity`, `useEffectEvent`), React Compiler 1.0 (2025-10-07) and React 19.3 (2026-09-09, `<ViewTransition>`, Fragment refs, independent transitions).[^react-gh][^react-blog][^react-19-3] The governance headline: on 2025-10-07 Meta announced it would transfer React, React Native and JSX to a new **React Foundation** at the Linux Foundation, with Seth Webster as executive director; the foundation officially launched on 2026-02-24 with eight platinum founding members (Amazon, Callstack, Expo, Huawei — which joined after the announcement — Meta, Microsoft, Software Mansion and Vercel) and a provisional leadership council for technical governance.[^react-foundation-blog][^react-foundation-launch] The low point was React2Shell (CVE-2025-55182, CVSS 10.0), an unauthenticated RCE in the React Server Components deserialization protocol reported via Meta's bug bounty on 2025-11-29, disclosed and fixed (19.0.1/19.1.2/19.2.1) on 2025-12-03, and added to CISA's KEV catalog on 2025-12-05; follow-up DoS/source-exposure bugs (2025-12-11) and a string of RSC hardening backports through July 2026 followed.[^react-rce][^cisa-kev][^react-dos][^react-releases] Verdict: OSS stable with improved governance; RSC's security and complexity remain contested.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2024-12-05 | React 19 [^react-blog] | OSS | + |
| W24 | 2025-10-01 | React 19.2 (Activity, useEffectEvent) [^react-blog] | OSS | + |
| W12 | 2025-10-07 | React Foundation announced (Linux Foundation); React Compiler 1.0 [^react-foundation-blog][^react-blog] | Governance | + |
| W12 | 2025-11-29 → 12-05 | React2Shell CVE-2025-55182 reported (11-29), patched/disclosed (12-03), CISA KEV (12-05) [^react-rce][^cisa-kev] | OSS | − |
| W12 | 2025-12-11 | Further RSC DoS and source-code-exposure advisories [^react-dos] | OSS | − |
| W9 | 2026-02-24 | React Foundation officially launches; Meta transfers React; Huawei joins as founding member [^react-foundation-launch] | Governance | + |
| W6 | 2026-04 → 06 | RSC hardening backports across 19.0/19.1/19.2 (cycle protections, type hardening) [^react-releases] | OSS | = |
| W3 | 2026-09-09 | React 19.3 (`<ViewTransition>`, Fragment refs, Trusted Types) [^react-19-3][^react-releases] | OSS | + |

# OSS successes
- Vendor-neutral governance with a multi-company board, ending the "Meta's project" critique.[^react-foundation-blog][^react-foundation-launch]
- Separate technical governance to be set by contributors so no single company is over-represented.[^react-foundation-blog]
- React Compiler reached 1.0 and 19.3 delivered long-awaited View Transitions.[^react-blog][^react-19-3]

# OSS failures / risks
- RSC's custom serialization protocol produced a CVSS-10 RCE; exploitation confirmed within two days (CISA KEV 2025-12-05).[^react-rce][^cisa-kev]
- Server-component architecture remains heavily shaped by Vercel/Next.js, which some see as a de-facto vendor influence.

# Business successes
- n/a (foundation). Founding members fund infrastructure, React Conf and ecosystem grants.[^react-foundation-blog]

# Business failures / risks
- n/a.

# By window
## W3
- React 19.3 (2026-09-09); further RSC decoding fixes in 19.x backports (2026-07-21).[^react-19-3][^react-releases]
## W6
- RSC hardening patch releases (May–June 2026).[^react-releases]
## W9
- React Foundation formal launch (2026-02-24).[^react-foundation-launch]
## W12
- Foundation announced; Compiler 1.0; React2Shell and follow-up advisories.[^react-foundation-blog][^react-rce][^react-dos]
## W24
- React 19 / 19.1 / 19.2.[^react-blog]

# Lessons
- Mature single-company projects can move to foundations without forks when the company itself leads the transfer.
- New protocol surfaces (RSC Flight serialization) deserve the scrutiny of network protocols, not UI libraries.

# Related
- [React Foundation](/organizations/react-foundation.md)
- [React Foundation announced](/events/2025-10-react-foundation-announced.md), [React2Shell](/events/2025-12-react2shell-rsc-rce.md)
- [Next.js](/projects/devtools-languages/nextjs.md), [React Router / Remix](/projects/devtools-languages/react-router.md)

[^react-gh]: React GitHub repository (stars via GitHub API, 2026-10-03) — https://github.com/facebook/react
[^react-releases]: React GitHub releases — https://github.com/facebook/react/releases
[^react-blog]: react.dev blog index — https://react.dev/blog
[^react-19-3]: react.dev: React 19.3 — https://react.dev/blog/2026/09/09/react-19-3
[^react-foundation-blog]: react.dev: Introducing the React Foundation — https://react.dev/blog/2025/10/07/introducing-the-react-foundation
[^react-foundation-launch]: react.dev: The React Foundation — https://react.dev/blog/2026/02/24/the-react-foundation
[^react-rce]: react.dev: Critical Security Vulnerability in React Server Components — https://react.dev/blog/2025/12/03/critical-security-vulnerability-in-react-server-components
[^react-dos]: react.dev: Denial of Service and Source Code Exposure in RSC — https://react.dev/blog/2025/12/11/denial-of-service-and-source-code-exposure-in-react-server-components
[^cisa-kev]: CISA: Adds One Known Exploited Vulnerability to Catalog — https://www.cisa.gov/news-events/alerts/2025/12/05/cisa-adds-one-known-exploited-vulnerability-catalog
