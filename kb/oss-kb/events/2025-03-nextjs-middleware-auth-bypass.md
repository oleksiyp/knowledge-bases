---
type: Event
title: Next.js middleware authorization bypass (CVE-2025-29927)
description: A critical flaw let attackers skip Next.js middleware, including auth checks, by sending the internal x-middleware-subrequest header. Only self-hosted deployments were exposed, and Vercel's postmortem admitted slow triage.
event_kind: security-incident
date: 2025-03-21
window: W24
impact: negative
projects: [projects/devtools-languages/nextjs]
organizations: [organizations/vercel]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: vercel-postmortem
    resource: https://vercel.com/blog/postmortem-on-next-js-middleware-bypass
    title: "Vercel: Postmortem on Next.js middleware bypass"
  - id: nvd
    resource: https://nvd.nist.gov/vuln/detail/cve-2025-29927
    title: "NVD: CVE-2025-29927"
---

# What happened
The bug was reported on 2025-02-27 and confirmed on 2025-03-14. Patches (14.2.25, 15.2.3) shipped on 2025-03-17/18, the CVE went public on 2025-03-21, and backports to 13.5.9 and 12.3.5 followed on 2025-03-22/23.[^vercel-postmortem][^nvd] Next.js uses an internal `x-middleware-subrequest` header to prevent middleware recursion. An attacker could send that header themselves to skip middleware entirely, including authentication checks.[^vercel-postmortem]

# Why it matters
Only self-hosted `next start` and `output: 'standalone'` deployments were vulnerable. Vercel-hosted apps were protected by Vercel's routing architecture, and so were the Netlify and Cloudflare adapters.[^vercel-postmortem] That fed the perception that Next.js treats self-hosting as second-class. Vercel's postmortem acknowledged delayed triage, weak communication with partner platforms and unclear CVE text.[^vercel-postmortem]

# Outcome so far
Vercel promised a partner mailing list, a single security reporting channel, a published LTS policy and better documentation of internals.[^vercel-postmortem] Nine months later the React2Shell RCE hit Next.js again.

# Related
- [Next.js](/projects/devtools-languages/nextjs.md), [Vercel](/organizations/vercel.md), [React2Shell](/events/2025-12-react2shell-rsc-rce.md)

[^vercel-postmortem]: Vercel postmortem — https://vercel.com/blog/postmortem-on-next-js-middleware-bypass
[^nvd]: NVD — https://nvd.nist.gov/vuln/detail/cve-2025-29927
