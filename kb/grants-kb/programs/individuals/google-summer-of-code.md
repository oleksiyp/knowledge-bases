---
type: Grant Program
title: Google Summer of Code (GSoC)
description: Google-paid stipends ($750–$6,600, PPP-adjusted) for students and open-source beginners aged 18+ to spend 90–350 hours on a mentored open-source project; 2026 cycle under way, 2027 dates not yet announced.
resource: https://summerofcode.withgoogle.com/
tags: [open-source, mentorship, students, beginners, stipend]
category: individuals
funder: funders/google
funder_type: corporate
region: global
applicant_types: [individual]
software_focus: [oss-infrastructure, developer-tools]
funding_type: stipend
oss_required: yes
equity_free: yes
amount_min_usd: 750
amount_max_usd: 6600
amount_text: "Small $750–$1,650; medium $1,500–$3,300; large $3,000–$6,600 (PPP-adjusted by country)"
application_model: annual
program_status: closed-between-rounds
deadline_note: "Contributor applications typically open mid-March for ~2 weeks (2026: 16–31 March). 2027 dates not yet published as of 2026-10-03."
effort_to_apply: medium
success_rate: "≈7.5% of applicants (1,141 contributors from 15,245 applicants in 2026)"
example_funded: [185 mentoring orgs in 2026]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: gsoc-timeline
    resource: https://developers.google.com/open-source/gsoc/timeline
    title: "Google Summer of Code 2026 Timeline"
  - id: gsoc-stipends
    resource: https://developers.google.com/open-source/gsoc/help/student-stipends
    title: "GSoC Contributor Stipends"
  - id: gsoc-faq
    resource: https://developers.google.com/open-source/gsoc/faq
    title: "GSoC FAQ"
  - id: gsoc-2026-contributors
    resource: https://opensource.googleblog.com/2026/04/the-journey-begins-meet-the-2026-gsoc-contributors.html
    title: "The Journey Begins: Meet the 2026 GSoC Contributors!"
  - id: gsoc-2026-orgs
    resource: https://opensource.googleblog.com/2026/02/introducing-the-185-organizations-for-gsoc-2026.html
    title: "Introducing the 185 Organizations for GSoC 2026"
---

# Summary

Google Summer of Code pays new open-source contributors to spend a summer coding on a project for an accepted mentoring organization. Stipends range from $750 to $6,600 depending on project size and the contributor's country.[^gsoc-stipends] The 2026 cycle accepted 1,141 contributors from 15,245 applicants in 131 countries, working with 184–185 organizations.[^gsoc-2026-contributors][^gsoc-2026-orgs] As of 3 October 2026 the 2026 coding period is in its extended phase, which ends in November, and Google has not published the 2027 dates.[^gsoc-timeline]

# Eligibility

- Applicants must be 18 or older at registration.[^gsoc-faq]
- Applicants must be students or open-source beginners. Google's guide treats having fewer than about 10 merged PRs as beginner status.[^gsoc-faq]
- Applicants cannot be resident in a US-embargoed country, and may have been accepted at most once before.[^gsoc-faq]
- Payment goes through Payoneer. Contributors in unsupported countries and in Quebec cannot be paid as of 2026.[^gsoc-stipends]

# What it funds

- Code (and some docs or design) work on a project proposed with a GSoC mentoring organization.
- There are three project sizes: about 90, 175 or 350 hours.[^gsoc-faq]
- It does not fund your own standalone project. The project must sit inside an accepted organization.

# Amounts & terms

| Size | Base | PPP range |
|---|---|---|
| Small (~90h) | $1,500 | $750–$1,650 |
| Medium (~175h) | $3,000 | $1,500–$3,300 |
| Large (~350h) | $6,000 | $3,000–$6,600 |

Payment is 45% after the midterm evaluation and 55% after the final evaluation.[^gsoc-stipends] Code is released under the organization's open-source license.

# How to apply

1. Mentoring organizations apply in January and are announced in mid-February (2026: 19 January–3 February, announced 19 February).[^gsoc-timeline]
2. Contributors write proposals with an organization. In 2026 the window ran 16–31 March, and acceptances were announced on 30 April.[^gsoc-timeline]
3. Community bonding runs in May, then coding starts in late May. Evaluations fall in July and August, and extended timelines run to November.[^gsoc-timeline]

Tip: start talking to the organization in February, as soon as the org list is out. Orgs reviewed 23,371 proposals in 2026.[^gsoc-2026-contributors]

# Deadlines

| Cycle | Contributor deadline | Notes |
|---|---|---|
| 2026 | 2026-03-31 | [Call file](/calls/2026-03-31-gsoc-2026-contributor-applications.md) |
| 2027 | not announced | Expect a similar mid/late-March window (inference from past cycles, unverified) |

# Track record

- 2026: 1,141 contributors, 15,245 applicants, 23,371 proposals, 2,000+ mentors.[^gsoc-2026-contributors]

# Fit

- **Good fit if** you are a student or newcomer who wants a paid, mentored entry into an established OSS project.
- **Poor fit if** you are an experienced maintainer seeking funding for your own project. Look at [FUTO](/programs/individuals/futo-grants.md) or the [category guide](/categories/individuals.md) instead.

# Related

- Funder: [Google](/funders/google.md)
- Similar programs: [Outreachy](/programs/individuals/outreachy.md), [LFX Mentorship](/programs/individuals/lfx-mentorship.md), [Summer of Bitcoin](/programs/individuals/summer-of-bitcoin.md)
- Category guide: [Individuals](/categories/individuals.md)

[^gsoc-timeline]: Google, GSoC 2026 timeline.
[^gsoc-stipends]: Google, GSoC contributor stipends page.
[^gsoc-faq]: Google, GSoC FAQ.
[^gsoc-2026-contributors]: Google Open Source Blog, April 2026.
[^gsoc-2026-orgs]: Google Open Source Blog, February 2026.
