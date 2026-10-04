---
type: Event
title: "MariaDB plc taken private by K1 after failed SPAC listing"
description: "K1 Investment Management bought MariaDB plc for about $0.55 a share (~$37M) in 2024, less than two years after a SPAC listing at $10 a share; the shares were delisted from the NYSE in August 2024."
date: 2024-09-10
year: 2024
kind: acquisition
signal: negative
ideas: [ideas/business-licensing/database-company-ipos, ideas/business-licensing/database-company-graveyard]
systems: [systems/mariadb]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: reg
    resource: "https://www.theregister.com/2024/02/20/mariadb_plc_private_offer/"
    title: "The Register: MariaDB receives offer to go private after disastrous IPO (2024-02-20)"
  - id: tc
    resource: "https://techcrunch.com/2024/02/20/mariadbs-potential-take-private-deal-is-an-indictment-of-2021s-spac-mania/"
    title: "TechCrunch: MariaDB potential take-private deal is an indictment of SPAC mania (2024-02-20)"
  - id: sa
    resource: "https://siliconangle.com/2024/09/10/mariadb-goes-private-acquisition-k1-investment-management/"
    title: "SiliconANGLE: MariaDB goes private after acquisition by K1 (2024-09-10)"
  - id: pavlo-2023
    resource: "https://www.cs.cmu.edu/~pavlo/blog/2024/01/2023-databases-retrospective.html"
    title: "Andy Pavlo: Databases in 2023: A Year in Review"
---

# What happened

MariaDB plc went public in December 2022 by merging with the SPAC Angel Pond. In 2023 it laid off staff twice, killed its Xpand distributed-SQL product and its SkySQL DBaaS (SkySQL was later spun out), and its stock fell about 90%.[^pavlo-2023] In February 2024, with shares at about $0.35 against the $10 SPAC price, K1 Investment Management offered $0.55 a share, about $37M.[^reg][^tc] The offer settled in July 2024, the shares were delisted in August, and the company went private.[^sa]

# Why it matters

It is the starkest public-market failure among database companies in the period. A widely used open-source database (MariaDB Server) did not translate into a viable public company, mainly because the cloud business never took off and the SPAC route brought a weak balance sheet.

# Related

- [Database company IPOs](/ideas/business-licensing/database-company-ipos.md) · [Database company graveyard](/ideas/business-licensing/database-company-graveyard.md) · [MariaDB](/systems/mariadb.md)

[^reg]: The Register: MariaDB receives offer to go private after disastrous IPO (2024-02-20).
[^tc]: TechCrunch: MariaDB potential take-private deal is an indictment of SPAC mania (2024-02-20).
[^sa]: SiliconANGLE: MariaDB goes private after acquisition by K1 (2024-09-10).
[^pavlo-2023]: Andy Pavlo: Databases in 2023: A Year in Review.
