---
type: Event
title: "MongoDB introduces the Server Side Public License (SSPL)"
description: "MongoDB moved MongoDB Community Server from AGPLv3 to its new SSPL on 16 Oct 2018, requiring anyone offering it as a service to open-source their whole service stack. It started the source-available wave."
date: 2018-10-16
year: 2018
kind: license-change
signal: negative
ideas: [ideas/business-licensing/source-available-licenses, ideas/business-licensing/hyperscalers-capture-dbms-market]
systems: [systems/mongodb, systems/documentdb]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: sspl-wiki
    resource: "https://en.wikipedia.org/wiki/Server_Side_Public_License"
    title: "Wikipedia: Server Side Public License"
  - id: mdb-faq
    resource: "https://www.mongodb.com/legal/licensing/server-side-public-license/faq"
    title: "MongoDB: SSPL FAQ"
  - id: slashdot
    resource: "https://developers.slashdot.org/story/18/10/16/2039253/mongodb-switches-up-its-open-source-license"
    title: "Slashdot: MongoDB switches up its open-source license (2018-10-16)"
---

# What happened

On 16 October 2018 MongoDB Inc. released the Server Side Public License and applied it to all MongoDB Community Server versions and patch releases from that date.[^sspl-wiki][^slashdot] SSPL copies AGPLv3 but rewrites section 13: anyone who offers the software's functionality as a service must release the source of everything used to run that service, including management, monitoring and backup tooling.[^mdb-faq] MongoDB submitted SSPL to the Open Source Initiative and withdrew it on 9 March 2019 after objections that it discriminates against a field of endeavor. Debian, Fedora and RHEL dropped MongoDB.[^sspl-wiki]

# Why it matters

SSPL became the template for later relicensings (Elastic 2021, Redis 2024). It did not stop AWS, which launched the MongoDB-compatible DocumentDB three months later without MongoDB code. It did give MongoDB leverage for licensed deals such as Alibaba Cloud's in 2019. MongoDB's business was driven by Atlas rather than the license.

# Related

- [Source-available licenses](/ideas/business-licensing/source-available-licenses.md) · [AWS launches DocumentDB](/events/2019-01-amazon-documentdb-launch.md) · [MongoDB](/systems/mongodb.md)

[^sspl-wiki]: Wikipedia: Server Side Public License.
[^mdb-faq]: MongoDB: SSPL FAQ.
[^slashdot]: Slashdot: MongoDB switches up its open-source license (2018-10-16).
