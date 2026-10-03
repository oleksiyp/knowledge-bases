---
type: Trend
title: Supply-chain attacks industrialized and moved into CI trust
description: "Open source registries became the main attack surface. Phished maintainer tokens (chalk/debug) gave way to self-replicating worms (the Shai-Hulud family) and then to theft of CI/OIDC trust that produced malware with valid provenance. Platforms responded by changing defaults (npm 12)."
tags: [security, supply-chain, npm, pypi, ci, cross-domain]
strength: strong
first_seen: W24
direction_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
domains: [security-sustainability, devtools-languages, end-user-apps, ai-agents]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: aikido-chalk
    resource: https://www.aikido.dev/blog/npm-debug-and-chalk-packages-compromised
    title: "Aikido: npm debug and chalk packages compromised (2025-09-08)"
  - id: datadog-sh2
    resource: https://securitylabs.datadoghq.com/articles/shai-hulud-2.0-npm-worm/
    title: "Datadog Security Labs: Shai-Hulud 2.0"
  - id: tanstack-pm
    resource: https://tanstack.com/blog/npm-supply-chain-compromise-postmortem
    title: TanStack npm supply-chain compromise postmortem
  - id: snyk-litellm
    resource: https://snyk.io/blog/poisoned-security-scanner-backdooring-litellm/
    title: "Snyk: Poisoned security scanner backdooring LiteLLM"
  - id: sb-keyv
    resource: https://securityboulevard.com/2026/08/mini-shai-hulud-npm-attack-more-than-2200-components-impacted/
    title: "Security Boulevard: Mini Shai-Hulud, 2,200+ components (Aug 2026)"
  - id: gh-npm-plan
    resource: https://github.blog/security/supply-chain-security/our-plan-for-a-more-secure-npm-supply-chain/
    title: "GitHub: Our plan for a more secure npm supply chain"
---

# Summary

Attacks on OSS registries escalated through three stages over the two years:

| Stage | Period | Technique | Example |
|---|---|---|---|
| 1. Stolen credentials | Mar–Sep 2025 | Phishing maintainers; compromised GitHub Actions tags | [tj-actions](/events/2025-03-tj-actions-changed-files-compromise.md); [chalk/debug](/events/2025-09-chalk-debug-npm-compromise.md), with 2B+ weekly downloads[^aikido-chalk] |
| 2. Self-replicating worms | Sep–Nov 2025 | Malware republishes itself using stolen tokens | [Shai-Hulud](/events/2025-09-shai-hulud-npm-worm.md); [Shai-Hulud 2.0](/events/2025-11-shai-hulud-2-npm-worm.md), 796 packages[^datadog-sh2]; [GlassWorm on Open VSX](/events/2025-10-glassworm-open-vsx-worm.md) |
| 3. Stolen CI trust | Mar–Aug 2026 | `pull_request_target`, cache poisoning and OIDC token theft yield malware with **valid provenance**; security tools used as the entry point | [Trivy to LiteLLM](/events/2026-03-teampcp-trivy-litellm-compromise.md)[^snyk-litellm]; [TanStack](/events/2026-05-tanstack-mini-shai-hulud.md)[^tanstack-pm]; [keyv wave, 2,200+ components](/events/2026-08-keyv-shai-hulud-wave.md)[^sb-keyv] |

State actors joined in: North Korean groups compromised [axios](/events/2026-03-axios-npm-compromise.md) and [Mastra](/events/2026-06-mastra-npm-compromise-sapphire-sleet.md). Attacks also moved to developer machines and plugin ecosystems. A backdoored Nx Console editor extension led to the theft of about 3,800 internal GitHub repositories ([event](/events/2026-05-github-internal-repos-breach.md)). Malicious ComfyUI node packs and more than 1,000 exposed ComfyUI servers turned the AI-app plugin registry into an attack surface (see [ComfyUI](/projects/ai-apps/comfyui.md)). End-user ecosystems were also hit: more than 1,500 malicious AUR packages ([event](/events/2026-06-arch-aur-malware.md)) and the Bitwarden CLI on npm.

# Platform response

- npm revoked classic tokens in Dec 2025 ([event](/events/2025-12-npm-classic-tokens-revoked.md)) and introduced trusted publishing.[^gh-npm-plan]
- **npm 12 turned install scripts off by default** in Jul 2026 ([event](/events/2026-07-npm-12-install-scripts-off.md)). This is the most important structural fix of the period.
- PyPI blocks uploads to releases older than 14 days.
- The CRA's reporting obligations went live in Sep 2026 ([event](/events/2026-09-cra-reporting-obligations-start.md)).

# Business side

Security vendors whose marketing is built on threat research boomed:

- Google–Wiz, $32B ([event](/events/2025-03-google-acquires-wiz.md)).
- Aikido became a unicorn ([org](/organizations/aikido-security.md)).
- Palo Alto acquired Koi ([org](/organizations/koi-security.md)).
- Socket and Chainguard grew.

Snyk, the incumbent, stalled.

# Lessons

- Changing defaults works better than publishing guidance.
- Cooldown periods and curated mirrors (for example Chainguard Libraries) protected customers from the keyv wave.
- Provenance proves where a package was built, not that the build was benign. Build-system hygiene is now critical.

# Related

- [npm registry](/projects/security-sustainability/npm-registry.md), [PyPI](/projects/security-sustainability/pypi.md), [Open VSX](/projects/security-sustainability/open-vsx.md)
- [Domain review: security and sustainability](/domains/security-sustainability.md)

[^aikido-chalk]: Aikido blog.
[^datadog-sh2]: Datadog Security Labs.
[^tanstack-pm]: TanStack postmortem.
[^snyk-litellm]: Snyk blog.
[^sb-keyv]: Security Boulevard.
[^gh-npm-plan]: GitHub blog.
