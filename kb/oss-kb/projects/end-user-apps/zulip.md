---
type: OSS Project
title: Zulip
description: "Apache-2.0 threaded team chat; its commercial steward Kandra Labs became wholly owned by a new nonprofit Zulip Foundation in May 2026 as founder Tim Abbott left for Anthropic — a model for locking in OSS independence."
resource: https://github.com/zulip/zulip
tags: [team-chat, apache-2.0, nonprofit, foundation, slack-alternative]
domain: end-user-apps
license: Apache-2.0
license_history: ["Apache-2.0 (2015-)"]
governance: foundation
steward: Zulip Foundation (owns Kandra Labs)
backing_orgs: []
metrics:
  github_stars: { value: 25987, as_of: 2026-10-03 }
oss_verdict: stable
business_verdict: stable
momentum_by_window: { W3: flat, W6: up, W9: flat, W12: flat, W24: up }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: z10
    resource: https://blog.zulip.com/2025/03/20/zulip-10-0-released/
    title: "Zulip 10.0 released"
  - id: changelog
    resource: https://changelog.com/posts/our-slack-is-dead-long-live-zulip
    title: "Changelog: Our Slack is dead. Long live Zulip"
  - id: values
    resource: https://zulip.com/values/
    title: "Zulip.com values"
  - id: z12
    resource: https://blog.zulip.com/2026/04/27/zulip-12-0-released/
    title: "Zulip 12.0 released"
  - id: foundation
    resource: https://blog.zulip.com/2026/05/15/announcing-zulip-foundation/
    title: "Announcing the Zulip Foundation"
---
# Summary
Zulip is a small but principled success. It shipped 10.0 (Mar 2025) and 12.0 (Apr 2026)[^z10][^z12], drew migrations from Slack (e.g., Changelog, May 2025)[^changelog], and published an explicit values page (Feb 2026)[^values]. On 15 May 2026 founder Tim Abbott announced the Zulip Foundation, a nonprofit that now fully owns Kandra Labs "with no other stockholders or debt obligations"; Abbott is stepping back to join Anthropic, and the Foundation enables grants and tax-deductible donations while Kandra continues selling subscriptions[^foundation]. Previously, Abbott had personally subsidized development beyond subscription revenue[^foundation]. Verdict: OSS stable; business stable but small.

# Timeline
| Window | Date | Event | Type | Signal |
|---|---|---|---|---|
| W24 | 2025-03-20 | Zulip 10.0[^z10] | OSS | + |
| W24 | 2025-05-10 | Changelog moves from Slack to Zulip[^changelog] | Business | + |
| W9 | 2026-02-10 | Zulip values statement[^values] | OSS | + |
| W6 | 2026-04-27 | Zulip 12.0[^z12] | OSS | + |
| W6 | 2026-05-15 | Zulip Foundation owns Kandra Labs; Abbott joins Anthropic[^foundation] | Business | mixed |

# OSS successes
- Fully open (no open-core paywall on self-hosting features) with steady releases.
# OSS failures / risks
- Founder departure; small team.
# Business successes
- Nonprofit ownership removes acquisition/VC pressure[^foundation].
# Business failures / risks
- Historically relied on founder subsidy[^foundation].

# By window
## W3
- No notable events found.
## W6
- 12.0; Foundation[^z12][^foundation].
## W9
- Values page[^values].
## W12
- No notable events found.
## W24
- 10.0; Slack migrations[^z10][^changelog].

# Lessons
- Converting a founder-owned OSS company into a foundation-owned subsidiary is a clean way to guarantee long-term openness on founder exit.

# Related
- [Mattermost](/projects/end-user-apps/mattermost.md), [Matrix/Element](/projects/end-user-apps/matrix-element.md)

[^z10]: https://blog.zulip.com/2025/03/20/zulip-10-0-released/
[^changelog]: https://changelog.com/posts/our-slack-is-dead-long-live-zulip
[^values]: https://zulip.com/values/
[^z12]: https://blog.zulip.com/2026/04/27/zulip-12-0-released/
[^foundation]: https://blog.zulip.com/2026/05/15/announcing-zulip-foundation/
