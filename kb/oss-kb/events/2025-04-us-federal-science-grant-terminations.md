---
type: Event
title: US federal science grant terminations and budget fight hit research-software funding
description: "From April 2025 NSF and NIH terminated or froze thousands of grants, imposed anti-DEI certification terms (prompting The Carpentries and the PSF to withdraw $1.5M proposals) and faced proposed ~56% (NSF) cuts; Congress largely rejected the cuts in the FY2026 bills (Jan 2026), but the FY2027 request (Apr 2026) renewed them."
event_kind: other
date: 2025-04-18
window: W24
impact: negative
projects: [projects/scientific-computing/jupyter, projects/scientific-computing/numpy, projects/scientific-computing/r-cran]
organizations: [organizations/numfocus, organizations/python-software-foundation]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: eos-nsf
    resource: https://eos.org/research-and-developments/nsf-cancels-hundreds-of-dei-and-disinformation-grants
    title: "Eos: NSF cancels hundreds of DEI and disinformation grants"
  - id: cen-nsf
    resource: https://cen.acs.org/policy/research-funding/NSF-terminates-over-1000-grants/103/web/2025/05
    title: "C&EN: NSF terminates over 1,000 grants in 2 weeks"
  - id: sciencenews-cuts
    resource: https://www.sciencenews.org/article/nih-nsf-cuts-2025-data
    title: "Science News: See the alarming extent of NIH and NSF funding cuts in 2025 (2025-11-18)"
  - id: carpentries-pose
    resource: https://carpentries.org/blog/2025/06/announcing-withdrawal-of-nsf-pose-proposal/
    title: "The Carpentries: Announcing withdrawal of NSF POSE proposal (2025-06-09)"
  - id: reg-psf
    resource: https://www.theregister.com/software/2025/10/27/python-foundation-rejects-15m-grant-with-no-dei-strings/1384421
    title: "The Register: Python Foundation rejects $1.5M grant with no-DEI strings"
  - id: aip-fy26
    resource: https://www.aip.org/fyi/congress-set-to-finalize-science-budgets-rejecting-trump-cuts
    title: "AIP FYI: Congress set to finalize science budgets rejecting Trump cuts"
  - id: ihe-fy26
    resource: https://www.insidehighered.com/news/quick-takes/2026/01/07/congress-plans-mostly-buck-trumps-nsf-nasa-energy-cuts
    title: "Inside Higher Ed: Congress plans to mostly buck Trump's NSF, NASA, Energy cuts (2026-01-07)"
  - id: cra-fy27
    resource: https://cra.org/crn/2026/05/president-trump-releases-another-potentially-disastrous-budget-request-for-fiscal-year-2027-nsf-hit-hard-with-deep-cuts-for-essential-areas-of-computing-research/
    title: "CRA: FY2027 budget request — NSF hit hard (May 2026)"
  - id: nsf-pose-updates
    resource: https://www.nsf.gov/funding/initiatives/pathways-enable-open-source-ecosystems/updates
    title: "NSF POSE program updates"
---

# What happened
- **Terminations (W24).** NSF terminated ~400 awards on 2025-04-18 and more on 2025-04-25 — 1,042 active grants in two weeks — saying awards "not aligned with NSF's priorities", including DEI and misinformation research, were cut[^cen-nsf][^eos-nsf]. By November 2025, tracked terminations/freezes totalled ~3,800 NIH and NSF grants and ~$3B in unspent funds (NIH ~$2.3B/~2,500 grants; NSF ~$700M/1,300+ grants)[^sciencenews-cuts].
- **Anti-DEI terms on new awards.** NSF required grantees to certify they do not operate programs that "advance or promote DEI". The Carpentries (research-software training) withdrew a recommended $1.5M POSE (Pathways to Enable Open-Source Ecosystems) proposal on 2025-06-09[^carpentries-pose]; the PSF withdrew a $1.5M NSF proposal on 2025-10-27[^reg-psf]. POSE itself continued with a revised solicitation (minor changes 2025-09-02)[^nsf-pose-updates].
- **Budget fight.** The FY2026 request sought to cut NSF ~56% and NASA science ~47%. Congress rejected this: the final FY2026 bills (House 2026-01-09; Senate 2026-01-15) set NSF at $8.75B (−3.4%) and cut NASA's Science Mission Directorate only 1.1%[^aip-fy26][^ihe-fy26]. The FY2027 request (April 2026) again proposed NSF at $3.96B (−55%), with CISE −63% and the TIP directorate (home of POSE) −43% versus FY2025[^cra-fy27].

# Why it matters
Much scientific OSS (Jupyter, NumPy/SciPy, R/Bioconductor packages, domain libraries) is maintained by university-employed researchers and research software engineers whose salaries come from federal grants. Terminations, a falling award rate and anti-DEI conditions on community and training programs pushed projects toward philanthropy (e.g., the [Open Source for Science Fund](/events/2026-05-open-source-for-science-fund-launch.md)), corporate sponsors and non-US funders. It hit at the same moment CZI's EOSS program had ended and NumFOCUS was running deficits.

# Outcome so far
Congress restored most top-line budgets for FY2026, but award volumes and success rates stayed depressed through 2025, and the FY2027 request renewed the threat[^sciencenews-cuts][^cra-fy27]. No large-scale abandonment of a major scientific-Python project caused directly by the cuts was found; the damage is diffuse (fewer RSE positions, training programs and new grants).

# Related
- [/events/2025-10-psf-withdraws-nsf-grant.md](/events/2025-10-psf-withdraws-nsf-grant.md)
- [/events/2026-05-open-source-for-science-fund-launch.md](/events/2026-05-open-source-for-science-fund-launch.md), [/events/2026-02-numfocus-restructuring.md](/events/2026-02-numfocus-restructuring.md)
- [/organizations/numfocus.md](/organizations/numfocus.md), [/organizations/python-software-foundation.md](/organizations/python-software-foundation.md)
- [/domains/scientific-computing.md](/domains/scientific-computing.md)

[^eos-nsf]: https://eos.org/research-and-developments/nsf-cancels-hundreds-of-dei-and-disinformation-grants
[^cen-nsf]: https://cen.acs.org/policy/research-funding/NSF-terminates-over-1000-grants/103/web/2025/05
[^sciencenews-cuts]: https://www.sciencenews.org/article/nih-nsf-cuts-2025-data
[^carpentries-pose]: https://carpentries.org/blog/2025/06/announcing-withdrawal-of-nsf-pose-proposal/
[^reg-psf]: https://www.theregister.com/software/2025/10/27/python-foundation-rejects-15m-grant-with-no-dei-strings/1384421
[^aip-fy26]: https://www.aip.org/fyi/congress-set-to-finalize-science-budgets-rejecting-trump-cuts
[^ihe-fy26]: https://www.insidehighered.com/news/quick-takes/2026/01/07/congress-plans-mostly-buck-trumps-nsf-nasa-energy-cuts
[^cra-fy27]: https://cra.org/crn/2026/05/president-trump-releases-another-potentially-disastrous-budget-request-for-fiscal-year-2027-nsf-hit-hard-with-deep-cuts-for-essential-areas-of-computing-research/
[^nsf-pose-updates]: https://www.nsf.gov/funding/initiatives/pathways-enable-open-source-ecosystems/updates
