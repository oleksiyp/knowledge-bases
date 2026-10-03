---
type: Rule
title: "Ethics self-assessment, security appraisal and gender equality plan"
description: The ethics and security self-assessments every Horizon Europe applicant completes in Part A, which items typically apply to OIS software projects (personal data, AI, dual use/misuse), EU classified information rules, and the gender-equality-plan eligibility condition for public bodies, research organisations and universities.
tags: [open-internet-stack, cluster-4, ethics, security, gender-equality-plan, horizon-europe-rules]
verified_on: 2026-10-03
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: ga-2026
    title: "Horizon Europe Work Programme 2026-2027 — 15. General Annexes (PDF dated 29 Sep 2026)"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
  - id: af-ria-ia
    title: "EU Grants: Application form (HE RIA and IA) V5.1 – 22.01.2026"
    resource: https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/temp-form/af/af_he-ria-ia_en.pdf
---
# Ethics

- Projects must comply with ethical principles (incl. the highest standards of research integrity) and EU, international and national law[^ga-2026].
- **All applicants complete the ethics self-assessment** as part of the application (Commission guidance: "How to complete your ethics self-assessment")[^ga-2026].
- Projects with ethics issues undergo an **ethics review**; resulting requirements become **ethics deliverables** in the grant agreement (e.g. ethics committee opinions, authorisations)[^ga-2026].
- Activities must be exclusively civil; human cloning, heritable genetic modification and embryo creation for research are excluded[^ga-2026].

The Part A ethics issues table is organised in sections: 1 human embryonic stem cells and embryos, 2 humans, 3 human cells/tissues, 4 personal data, 5 animals, 6 non-EU countries, 7 environment, health and safety, **8 artificial intelligence**, 9 other ethics issues; for each "yes" you indicate the page of the full proposal where it is addressed[^af-ria-ia].

**Typical for OIS projects:** personal data (user studies, telemetry, identity, messaging/social tools — GDPR compliance and DPIAs), AI (if components use machine learning), non-EU countries (data transfers, partners), and "other" (e.g. potential misuse of privacy/anonymity tools). Answer honestly; flagging an issue is not a negative, but leaving an obvious one unaddressed invites ethics requirements at grant preparation.

# Security (EU classified and sensitive information)

- Part A includes a **security issues table** (EU classified information, misuse, other security issues)[^af-ria-ia].
- Projects involving classified or sensitive information go through a **security appraisal** and may get security rules, deliverables (security advisory board, project security officer) or restricted dissemination[^ga-2026].
- TRES SECRET UE information cannot be funded; CONFIDENTIEL UE and above requires facility and personnel security clearances; subcontracting classified tasks needs prior approval[^ga-2026].
- Beneficiaries must make sure national or third-country security requirements (export controls, classification) do not affect implementation, and notify issues immediately[^ga-2026].

OIS software projects rarely involve EUCI, but cryptography (incl. post-quantum, which DATA-02 explicitly asks for) can raise **export-control / dual-use** questions — address them under "other security issues". Participation-level restrictions (high-risk suppliers, China) are separate: see [/rules/security-restrictions.md](/rules/security-restrictions.md).

# Gender equality plan (GEP) — an eligibility condition

Public bodies, research organisations and higher-education establishments (public or private) from Member States and Associated Countries must **have a GEP at grant signature** meeting four process requirements: published and signed by top management; dedicated resources; sex/gender-disaggregated data with reporting at least every two years; training on gender equality/unconscious bias[^ga-2026]. A self-declaration is made in the Participant Register; equivalent strategic documents may count[^ga-2026]. The condition **does not apply** to private for-profit companies (incl. SMEs), NGOs or civil-society organisations[^ga-2026] — relevant because many OIS consortia are SME/foundation-heavy.

Separately, the **gender dimension in R&I content** is assessed under Excellence (or must be justified as not relevant), and gender balance among lead researchers is a tie-breaker[^ga-2026][^af-ria-ia].

# Related
- [/rules/security-restrictions.md](/rules/security-restrictions.md)
- [/rules/proposal-template-and-page-limits.md](/rules/proposal-template-and-page-limits.md)
- [/rules/evaluation-criteria-and-scoring.md](/rules/evaluation-criteria-and-scoring.md)

[^ga-2026]: General Annexes WP 2026-2027, Annex B — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/wp-call/2026-2027/wp-15-general-annexes_horizon-2026-2027_en.pdf
[^af-ria-ia]: Application form HE RIA/IA V5.1 (Part A ethics and security tables) — https://ec.europa.eu/info/funding-tenders/opportunities/docs/2021-2027/horizon/temp-form/af/af_he-ria-ia_en.pdf
