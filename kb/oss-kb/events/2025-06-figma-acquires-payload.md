---
type: Event
title: Figma acquires Payload CMS team
description: "On 17 June 2025 Figma acquired the team behind the MIT-licensed Payload headless CMS to power Figma Sites; Payload stayed MIT and active, but Payload Cloud stopped taking new projects."
event_kind: acquisition
date: 2025-06-17
window: W24
impact: mixed
projects: [projects/web-platforms/payload]
organizations: [organizations/figma]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: join
    resource: https://github.com/payloadcms/payload/discussions/12843
    title: "GitHub: Payload is joining Figma! (2025-06-17)"
  - id: crains
    resource: https://www.crainsgrandrapids.com/news/technology/grand-rapids-tech-firm-acquired-by-san-francisco-web-designer/
    title: "Crain's Grand Rapids: Payload CMS acquired by Figma"
  - id: cmswire
    resource: https://www.cmswire.com/digital-experience/when-cms-meets-ux-design-what-figmas-payload-deal-really-means/
    title: "CMSWire: What Figma's Payload deal really means"
  - id: uithings
    resource: https://uithings.com/figma-acquires-payload
    title: "UIThings: Figma acquires Payload CMS"
  - id: v4
    resource: https://payloadcms.com/posts/blog/payload-40-admin-ui-redesign-tanstack-mcp-and-more
    title: "Payload 4.0: Admin UI redesign, TanStack, MCP and more"
---
# What happened
Grand Rapids-based Payload announced on 17 June 2025 that its whole team was joining Figma; terms were not disclosed[^join][^crains]. Payload stays MIT-licensed and self-hostable, with the existing team leading development[^join].

# Why it matters
A design platform bought a major open-source CMS to move "from design to deployment" via Figma Sites[^cmswire] — part of a pattern of platforms (Vercel, Figma, Shopify) acquiring OSS web building blocks.

# Outcome so far
Payload Cloud paused new projects[^uithings]; the OSS project kept shipping (v3.x weekly; 4.0 beta in April 2026 with an admin redesign, TanStack support and MCP)[^v4].

# Related
- [Payload](/projects/web-platforms/payload.md), [Figma](/organizations/figma.md)
- [Vercel acquires Better Auth](/events/2026-07-vercel-acquires-better-auth.md), [Shopify acquires Tailwind Labs](/events/2026-09-shopify-acquires-tailwind-labs.md)

[^join]: https://github.com/payloadcms/payload/discussions/12843
[^crains]: https://www.crainsgrandrapids.com/news/technology/grand-rapids-tech-firm-acquired-by-san-francisco-web-designer/
[^cmswire]: https://www.cmswire.com/digital-experience/when-cms-meets-ux-design-what-figmas-payload-deal-really-means/
[^uithings]: https://uithings.com/figma-acquires-payload
[^v4]: https://payloadcms.com/posts/blog/payload-40-admin-ui-redesign-tanstack-mcp-and-more
