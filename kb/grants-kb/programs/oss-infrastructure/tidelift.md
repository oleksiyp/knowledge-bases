---
type: Grant Program
title: Tidelift (Sonar) — paid maintainer "lifter" program
description: Commercial subscription model (acquired by Sonar, announced Dec 2024) that pays maintainers monthly to meet security/maintenance standards for packages its customers use — an income alternative to grants, not a grant.
resource: https://support.tidelift.com/hc/en-us/articles/4406294816916-How-we-pay-lifters
tags: [open-source, business-model, maintainers, supply-chain]
category: oss-infrastructure
funder: funders/sonar-tidelift
funder_type: corporate
region: global
applicant_types: [individual, oss-project]
software_focus: [oss-infrastructure, security]
funding_type: contract
oss_required: yes
equity_free: yes
amount_text: "Monthly income allocated by customer usage of your package (SBOM-based); amounts vary"
application_model: rolling
program_status: rolling
effort_to_apply: low
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: tidelift-pay
    resource: https://support.tidelift.com/hc/en-us/articles/4406294816916-How-we-pay-lifters
    title: "Tidelift: How we pay lifters"
  - id: sonar-tidelift
    resource: https://www.sonarsource.com/company/press-releases/sonar-to-acquire-tidelift/
    title: "Sonar to acquire Tidelift"
  - id: socket-sonar
    resource: https://socket.dev/blog/sonar-to-acquire-tidelift
    title: "Socket: Sonar to acquire Tidelift"
---

# Summary

Tidelift sells enterprises a managed open source subscription and passes revenue to "lifters" — maintainers who agree to follow secure development and maintenance practices for their packages.[^tidelift-pay] Income is allocated monthly based on customers' uploaded SBOMs (packages actually used).[^tidelift-pay] Sonar announced its acquisition of Tidelift on 17 December 2024 and stated maintainers would see no disruption.[^sonar-tidelift][^socket-sonar] It's listed here as a business-model alternative to grants.

# Eligibility

- Maintainers of packages Tidelift customers use.[^tidelift-pay]

# What it funds

- Ongoing assurance tasks (security process, licensing, maintenance).[^tidelift-pay]

# Amounts & terms

- Usage-based monthly payments.[^tidelift-pay]

# How to apply

- Sign up as a lifter for your package.[^tidelift-pay]

# Deadlines

| Date | Event |
|---|---|
| Rolling | Join anytime |

# Track record

- Acquired by Sonar.[^sonar-tidelift]

# Fit

- Good fit if: your package is popular in enterprise stacks (npm, PyPI, Maven…).

# Related

- [GitHub Sponsors](/programs/individuals/github-sponsors.md), [thanks.dev](/programs/oss-infrastructure/thanks-dev.md)

[^tidelift-pay]: Tidelift support, https://support.tidelift.com/hc/en-us/articles/4406294816916-How-we-pay-lifters
[^sonar-tidelift]: Sonar press release, https://www.sonarsource.com/company/press-releases/sonar-to-acquire-tidelift/
[^socket-sonar]: Socket blog, https://socket.dev/blog/sonar-to-acquire-tidelift
