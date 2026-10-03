---
type: Grant Program
title: DOE ASCR Next-Generation Scientific Software Technologies / Software Stewardship (CASS)
description: DOE Office of Science ASCR funding that carries the Exascale Computing Project software legacy through a set of software stewardship organizations federated as CASS; awarded to national labs and partners, no open call as of Oct 2026.
resource: https://cass.community/about/
tags: [research-software, hpc, exascale, doe, us-federal, stewardship]
category: research-software
funder: funders/doe-office-of-science
funder_type: government
region: us
applicant_types: [academic, nonprofit]
software_focus: [research-software, oss-infrastructure]
funding_type: grant
oss_required: yes
equity_free: yes
amount_text: "Multi-year stewardship awards to DOE labs and university partners; amounts not published per organization"
application_model: invite-only
program_status: closed-between-rounds
deadline_note: "Stewardship organizations selected after 2021 RFI and subsequent ASCR solicitations; no open 2026 call found"
effort_to_apply: high
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
last_checked: 2026-10-03
sources:
  - id: cass-about
    resource: https://cass.community/about/
    title: "CASS: About Us"
  - id: cass-home
    resource: https://cass.community/
    title: "Consortium for the Advancement of Scientific Software"
  - id: ascr-fy26
    resource: https://science.osti.gov/-/media/budget/pdf/sc-budget-request-to-congress/2026/FY-2026-Advanced-Scientific-Computing-Research-Budget-Request.pdf
    title: "DOE FY2026 ASCR Budget Request"
  - id: fr-stewardship-rfi
    resource: https://www.federalregister.gov/documents/2021/10/29/2021-23582/stewardship-of-software-for-scientific-and-high-performance-computing
    title: "Federal Register (2021): Stewardship of Software for Scientific and High-Performance Computing (RFI)"
---

# Summary

After the Exascale Computing Project (ECP) ended, DOE's Office of Advanced Scientific Computing Research (ASCR) kept the ECP software stack alive by funding **software stewardship organizations**. These are federated as the **Consortium for the Advancement of Scientific Software (CASS)** and funded through ASCR's Next-Generation Scientific Software Technologies (NGSST) and SciDAC programs.[^cass-about] The CASS portfolio covers scalable math libraries, data/visualization tools, development and performance tools, and tools that link HPC to AI workflows.[^cass-home] ASCR's FY2026 budget request describes a Next-Generation-Software-Stewardship program supporting five stewardship organizations under CASS.[^ascr-fy26] This is not an open grant program for outside maintainers. Money flows to the selected organizations, mostly DOE labs and university partners. The process began with a 2021 RFI.[^fr-stewardship-rfi]

# Eligibility

- Through ASCR solicitations, when issued. As of October 2026 no open stewardship call was found. Individual projects join CASS member organizations rather than applying to DOE directly.[^cass-about]

# What it funds

- Maintenance, porting, testing, release engineering and community support for HPC scientific software, such as ECP-era libraries and tools.[^cass-home]

# Amounts & terms

- Not published per organization.

# How to apply

- No open call. Engage the relevant CASS member organization, or watch ASCR funding opportunity announcements.[^cass-about]

# Deadlines

None open.

# Track record

- CASS federates the stewardship organizations; its July 2026 ASCR PI-meeting poster summarizes current work.[^cass-home]

# Fit

- **Good fit if:** your software is part of the DOE HPC ecosystem and you can partner with a CASS member.
- **Poor fit if:** you are an independent maintainer looking for an application form.

# Related

- [/funders/doe-office-of-science.md](/funders/doe-office-of-science.md) · [/programs/research-software/bssw-fellowship.md](/programs/research-software/bssw-fellowship.md)

[^cass-about]: [CASS About](https://cass.community/about/)
[^cass-home]: [CASS home](https://cass.community/)
[^ascr-fy26]: [FY2026 ASCR budget request](https://science.osti.gov/-/media/budget/pdf/sc-budget-request-to-congress/2026/FY-2026-Advanced-Scientific-Computing-Research-Budget-Request.pdf)
[^fr-stewardship-rfi]: [Federal Register RFI 2021](https://www.federalregister.gov/documents/2021/10/29/2021-23582/stewardship-of-software-for-scientific-and-high-performance-computing)
