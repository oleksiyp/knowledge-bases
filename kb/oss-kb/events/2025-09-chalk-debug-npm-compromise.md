---
type: Event
title: "chalk, debug and 16 other npm packages hijacked via phishing"
description: "A phishing email from a fake npmjs.help domain let attackers publish crypto-stealing versions of 18 foundational npm packages with over 2 billion combined weekly downloads."
event_kind: security-incident
date: 2025-09-08
window: W24
impact: negative
projects: [projects/security-sustainability/npm-registry]
organizations: [organizations/aikido-security]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: aikido-chalk
    resource: https://www.aikido.dev/blog/npm-debug-and-chalk-packages-compromised
    title: "Aikido: npm debug and chalk packages compromised"
  - id: stepsec-chalk
    resource: https://www.stepsecurity.io/blog/20-popular-npm-packages-compromised-chalk-debug-strip-ansi-color-convert-wrap-ansi
    title: "StepSecurity: 20+ popular npm packages compromised (chalk, debug, strip-ansi…) (2025-09-08)"
  - id: vercel-chalk
    resource: https://vercel.com/blog/critical-npm-supply-chain-attack-response-september-8-2025
    title: "Vercel: Critical npm supply chain attack response (2025-09-08)"
---
# What happened
Starting at 13:16 UTC on 2025-09-08, malicious versions of debug, chalk, ansi-styles, strip-ansi, supports-color and others (2B+ weekly downloads combined) were published from a maintainer account phished through `npmjs.help`, a domain registered 2025-09-05. The payload hooked browser `fetch`, XHR and wallet APIs to swap cryptocurrency addresses.[^aikido-chalk][^stepsec-chalk][^vercel-chalk]

# Why it matters
It was the widest-reaching npm compromise by download count and showed that a single phished maintainer can reach almost every JS project.

# Outcome so far
Caught within hours. Together with Shai-Hulud a week later, it pushed GitHub to announce its npm hardening plan on 2025-09-22.

# Related
- [npm registry](/projects/security-sustainability/npm-registry.md), [Aikido Security](/organizations/aikido-security.md)

[^aikido-chalk]: Aikido: npm debug and chalk packages compromised
[^stepsec-chalk]: StepSecurity — https://www.stepsecurity.io/blog/20-popular-npm-packages-compromised-chalk-debug-strip-ansi-color-convert-wrap-ansi
[^vercel-chalk]: Vercel — https://vercel.com/blog/critical-npm-supply-chain-attack-response-september-8-2025
