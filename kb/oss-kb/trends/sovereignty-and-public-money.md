---
type: Trend
title: Digital sovereignty and public money became an OSS demand driver
description: "Geopolitics, especially in Europe, turned open source into industrial policy. It brought an EU open source strategy with a €2B envelope, government migrations off Microsoft (ICC, Schleswig-Holstein, Dutch NixOS desktop), the CRA's steward regime and Sovereign Tech Agency funding. Sovereign-cloud vendors such as Nextcloud boomed, while US public infrastructure (NVD, CVE) wobbled."
tags: [sovereignty, eu, regulation, cra, public-funding, end-user, cross-domain]
strength: strong
first_seen: W24
direction_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
domains: [end-user-apps, security-sustainability, coss-market, licensing-forks, ai-models]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ec-oss
    resource: https://digital-strategy.ec.europa.eu/en/factpages/eu-open-source-strategy
    title: EU Open Source Strategy
  - id: icc
    resource: https://www.theregister.com/2025/10/31/international_criminal_court_ditches_office/
    title: "The Register: ICC ditches Microsoft Office (2025-10-31)"
  - id: sh
    resource: https://www.heise.de/en/news/Goodbye-Microsoft-Schleswig-Holstein-relies-on-Open-Source-and-saves-millions-11105459.html
    title: "heise: Schleswig-Holstein relies on open source"
  - id: nc-momentum
    resource: https://nextcloud.com/blog/press_releases/sovereign-workspace-momentum/
    title: "Nextcloud: sovereign workspace momentum"
  - id: reg-dawo
    resource: https://www.theregister.com/os-platforms/2026/09/28/dutch-government-turns-to-nixos-for-a-sovereign-desktop/5299501
    title: "The Register: Dutch government turns to NixOS (2026-09-28)"
  - id: cra
    resource: https://digital-strategy.ec.europa.eu/en/policies/cra-reporting
    title: "European Commission: CRA reporting obligations"
  - id: cve-ext
    resource: https://therecord.media/cisa-extends-cve-program-contract-with-mitre
    title: "The Record: CISA extends CVE program contract with MITRE"
  - id: cen-nsf
    resource: https://cen.acs.org/policy/research-funding/NSF-terminates-over-1000-grants/103/web/2025/05
    title: "C&EN: NSF terminates over 1,000 grants (May 2025)"
---

# Summary

In Europe in particular, open source moved from cost-saving IT to **industrial and security policy**. Demand rose for neutral, foundation-governed or EU-based OSS vendors, and new compliance obligations arrived.

# Evidence

| Window | Event |
|---|---|
| W24 | Schleswig-Holstein's migration off Microsoft[^sh]; the [CVE program's MITRE funding crisis](/events/2025-04-cve-mitre-funding-crisis.md) (the US side wobbling)[^cve-ext]; [EU AI Act obligations for general-purpose models](/events/2025-08-eu-ai-act-gpai-obligations.md) |
| W12 | The [ICC drops Microsoft for openDesk](/events/2025-10-icc-drops-microsoft-for-opendesk.md)[^icc]; Nextcloud's €250M "Sovereignty 2030" plan[^nc-momentum]; [Windows 10 end of support](/events/2025-10-windows-10-end-of-support.md) pushes desktop Linux |
| W9 | NVD moves to risk-based enrichment ([event](/events/2026-04-nvd-risk-based-enrichment.md)) |
| W6 | The [EU Tech Sovereignty Package / Open Source Strategy](/events/2026-06-eu-tech-sovereignty-package-open-source-strategy.md) with a €2B, 7-year envelope[^ec-oss]; [Euro-Office fork of OnlyOffice](/events/2026-06-euro-office-onlyoffice-fork.md); Nvidia adopts OpenBao |
| W3 | [CRA reporting obligations begin](/events/2026-09-cra-reporting-obligations-start.md)[^cra]; the Dutch government picks NixOS for its sovereign desktop[^reg-dawo]; [Android developer verification enforcement](/events/2026-09-android-developer-verification-enforcement.md) threatens F-Droid; the Sovereign Tech Agency relaunches with a CRA focus |

# Who benefits

- **Business:** [Nextcloud](/organizations/nextcloud.md) (2M+ new seats in 2025), [Proton](/organizations/proton.md), [Element](/organizations/element.md), and [Mistral](/organizations/mistral-ai.md), which used the sovereignty narrative to reach €21B.
- **Projects:** OpenBao and OpenTofu (sovereign clouds), LibreOffice, Collabora and Euro-Office (with fragmentation among them), and Linux desktops.
- **Foundations:** the CRA's open-source steward role formally recognises foundations.

# The US side: public funding retreated (found in pass 2)

While Europe added public money, US federal science funding for OSS contracted, and philanthropy only partly filled the gap:

- **NSF terminations.** NSF terminated more than 1,000 grants in two weeks (Apr 2025).[^cen-nsf] Grant terms with anti-DEI conditions led The Carpentries and the PSF to withdraw proposals. See [federal grant terminations](/events/2025-04-us-federal-science-grant-terminations.md) and [PSF withdraws its NSF grant](/events/2025-10-psf-withdraws-nsf-grant.md).
- **Budget fights.** Congress restored FY2026 science funding (Jan 2026), but the FY2027 request again proposes cutting NSF by about 55%.
- **Funders weakening.** CZI's Essential Open Source Software program ($58M) ended. NumFOCUS ran deficits and restructured ([event](/events/2026-02-numfocus-restructuring.md)). A $20M Open Source for Science Fund launched in May 2026 ([event](/events/2026-05-open-source-for-science-fund-launch.md)).
- **US public vulnerability infrastructure wobbled:** NVD and CVE (above).

The European counterweight includes the Sovereign Tech Agency's grants, among them €1.285M to KDE and $450k to R, plus Spain's state investor backing Penpot ([event](/events/2026-07-penpot-raises-6-9m-spanish-state.md)).

See [Domain review: scientific computing](/domains/scientific-computing.md).

# Risks

- The sovereign office suite market is fragmenting: four rivals, plus the [TDF–Collabora split](/events/2026-04-tdf-expels-collabora-members.md).
- CRA compliance costs may fall on small maintainers despite the steward carve-out.
- Public money is slow and targeted at procurement, not at maintainers.

# Related

- [Domain review: end-user apps](/domains/end-user-apps.md), [security and sustainability](/domains/security-sustainability.md)
- [European sovereign tech (market study)](/projects/coss-market/european-sovereign-tech-oss.md)

[^ec-oss]: European Commission.
[^icc]: The Register.
[^sh]: heise online.
[^nc-momentum]: Nextcloud press release.
[^reg-dawo]: The Register.
[^cra]: European Commission.
[^cve-ext]: The Record.
[^cen-nsf]: C&EN.
