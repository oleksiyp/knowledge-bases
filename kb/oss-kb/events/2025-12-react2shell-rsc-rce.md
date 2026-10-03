---
type: Event
title: "React2Shell: CVSS-10 RCE in React Server Components (CVE-2025-55182 / CVE-2025-66478)"
description: An unauthenticated remote code execution flaw in the React Server Components deserialization protocol was exploited within hours through Next.js, and CISA added it to its Known Exploited Vulnerabilities catalog.
event_kind: security-incident
date: 2025-12-03
window: W12
impact: negative
projects: [projects/devtools-languages/react, projects/devtools-languages/nextjs, projects/devtools-languages/deno]
organizations: [organizations/vercel, organizations/react-foundation]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: deno-blog
    resource: https://deno.com/blog
    title: "Deno blog (post on React Server Components vulnerabilities)"
  - id: datadog-r2s
    resource: https://securitylabs.datadoghq.com/articles/cve-2025-55182-react2shell-remote-code-execution-react-server-components/
    title: "Datadog Security Labs: CVE-2025-55182 (React2Shell) RCE in React Server Components and Next.js"
  - id: gtig-r2s
    resource: https://cloud.google.com/blog/topics/threat-intelligence/threat-actors-exploit-react2shell-cve-2025-55182
    title: "Google Threat Intelligence: Multiple threat actors exploit React2Shell (CVE-2025-55182)"
  - id: rapid7-r2s
    resource: https://www.rapid7.com/blog/post/etr-react2shell-cve-2025-55182-critical-unauthenticated-rce-affecting-react-server-components/
    title: "Rapid7: React2Shell, critical unauthenticated RCE affecting React Server Components"
---

# What happened
On 2025-11-29 a researcher reported CVE-2025-55182 ("React2Shell"), an unauthenticated RCE in the React Server Components deserialization ("Flight") protocol, rated CVSS 10.0. Fixes shipped in React 19.0.1, 19.1.2 and 19.2.1, and Meta and Vercel disclosed it with patches on 2025-12-03.[^datadog-r2s][^rapid7-r2s] The Next.js counterpart, CVE-2025-66478, affected default App Router setups on 15.x and 16.x. Public exploits (including a Metasploit module) appeared by 2025-12-04, and Google Threat Intelligence saw exploitation by many clusters, from opportunistic criminals to suspected espionage groups. CISA added it to the KEV catalog on 2025-12-05.[^gtig-r2s][^rapid7-r2s] Vercel released a `fix-react2shell-next` tool on 2025-12-06 (not re-verified in pass 2). Other runtimes that host RSC, such as Deno, published their own guidance.[^deno-blog]

# Why it matters
It was the most severe vulnerability in React's history. It landed two months after React's move to a foundation, and it showed that a server-side protocol inside a UI library carries network-protocol-level risk.

# Outcome so far
Patched across the ecosystem. The incident added to the debate over how complex RSC is and how closely it is tied to Next.js and Vercel.

# Related
- [React](/projects/devtools-languages/react.md), [Next.js](/projects/devtools-languages/nextjs.md), [Next.js middleware bypass](/events/2025-03-nextjs-middleware-auth-bypass.md)

[^datadog-r2s]: Datadog — https://securitylabs.datadoghq.com/articles/cve-2025-55182-react2shell-remote-code-execution-react-server-components/
[^gtig-r2s]: Google Threat Intelligence — https://cloud.google.com/blog/topics/threat-intelligence/threat-actors-exploit-react2shell-cve-2025-55182
[^rapid7-r2s]: Rapid7 — https://www.rapid7.com/blog/post/etr-react2shell-cve-2025-55182-critical-unauthenticated-rce-affecting-react-server-components/
[^deno-blog]: Deno blog — https://deno.com/blog
