---
type: Domain Review
title: "AI Agents, LLM Frameworks & Coding Tools: 2-year review"
description: "Two-year review (Oct 2024 – Oct 2026) of open-source AI agent frameworks, coding agents, low-code builders and agent protocols: protocols consolidated under the Linux Foundation's AAIF, terminal coding agents and OpenClaw exploded, low-code builders and IDE forks died, and fair-code n8n became the business winner."
domain: ai-agents
tags: [ai-agents, coding-agents, llm-frameworks, protocols, mcp, workflow-automation, foundation, consolidation]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: oc-wiki
    resource: https://en.wikipedia.org/wiki/OpenClaw
    title: "Wikipedia: OpenClaw"
  - id: oc-fortune
    resource: https://fortune.com/2026/02/15/openai-openclaw-ai-agent-developer-peter-steinberg-moltbot-clawdbot-moltbook/
    title: "Fortune: OpenAI hires OpenClaw developer"
  - id: lf-aaif-pr
    resource: https://www.prnewswire.com/news-releases/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation-aaif-anchored-by-new-project-contributions-including-model-context-protocol-mcp-goose-and-agentsmd-302636897.html
    title: "Linux Foundation announces AAIF"
  - id: aaif-a2a
    resource: https://aaif.io/blog/a2a-joins-aaif
    title: "AAIF: A2A joins AAIF"
  - id: mcp-wiki
    resource: https://en.wikipedia.org/wiki/Model_Context_Protocol
    title: "Wikipedia: Model Context Protocol"
  - id: n8n-wiki
    resource: https://en.wikipedia.org/wiki/N8n
    title: "Wikipedia: n8n"
  - id: n8n-seriesc
    resource: https://blog.n8n.io/series-c/
    title: "n8n Series C"
  - id: lc-seriesb
    resource: https://www.langchain.com/blog/series-b
    title: "LangChain Series B"
  - id: flowise-sunset
    resource: https://flowiseai.com/sunset
    title: The Future of Flowise
  - id: tns-roo
    resource: https://thenewstack.io/roo-code-cloud-ides-ai-coding/
    title: "The New Stack: Roo Code pivots to cloud agent"
  - id: anaconda-kilo
    resource: https://www.anaconda.com/blog/anaconda-acquires-kilo-code
    title: Anaconda acquires Kilo Code
  - id: autogen-gh
    resource: https://github.com/microsoft/autogen
    title: AutoGen README (maintenance mode)
  - id: void-gh
    resource: https://github.com/voideditor/void
    title: Void README (deprecated)
  - id: aider-gh
    resource: https://github.com/Aider-AI/aider
    title: Aider repository activity
  - id: gh-api
    resource: https://api.github.com
    title: GitHub REST API (star/fork/release data pulled 2026-10-03)
  - id: dify-30m
    resource: https://dify.ai/blog/dify-raises-30m-tomorrow-s-organizations-will-be-built-by-people-and-agents
    title: Dify raises $30M
  - id: cline-funding
    resource: https://cline.bot/blog/cline-raises-32m-series-a-and-seed-funding-building-the-open-source-ai-coding-agent-that-enterprises-trust
    title: Cline raises $32M
  - id: wiki-workday
    resource: https://en.wikipedia.org/wiki/Workday,_Inc.
    title: "Wikipedia: Workday (acquisitions)"
  - id: oc-gitguardian
    resource: https://blog.gitguardian.com/moltbot-personal-assistant-goes-viral-and-so-do-your-secrets/
    title: "GitGuardian: Moltbot secrets leak analysis"
  - id: oc-foundation
    resource: https://openclaw.ai/blog/introducing-openclaw-foundation
    title: "OpenClaw Blog: Introducing the OpenClaw Foundation (2026-07-08)"
  - id: n8n-sap
    resource: https://blog.n8n.io/n8n-sap/
    title: "n8n blog: Announcing SAP's strategic investment in n8n (2026-05-12)"
  - id: shub-opencode
    resource: https://www.startuphub.ai/ai-news/startup-news/2026/opencode-ceo-on-20x-growth-ai-agent-market
    title: "StartupHub.ai: OpenCode CEO on 20x growth (Lightcone interview summary, 2026-07-24)"
  - id: anthropic-oauth-block
    resource: https://mlq.ai/news/anthropic-ends-paid-access-for-claude-in-third-party-tools-like-openclaw/
    title: "MLQ: Anthropic ends subscription access for Claude in third-party tools (2026-04)"
  - id: axios-a2a
    resource: https://www.axios.com/2026/08/17/a2a-agentic-ai-foundation-open-ai-standards
    title: "Axios: Google's A2A protocol gets a new home (2026-08-17)"
  - id: mcp-spec-0728
    resource: https://blog.modelcontextprotocol.io/posts/2026-07-28/
    title: "MCP blog: The 2026-07-28 Specification"
---

# Executive summary
- **Protocols consolidated, fast.** MCP launched in Nov 2024, was adopted by OpenAI and Google within five months, and was donated with AGENTS.md and goose to the Linux Foundation's new Agentic AI Foundation on 2025-12-09. Google's A2A joined on 2026-08-17. All three big labs' agent standards now share one neutral home[^mcp-wiki][^lf-aaif-pr][^aaif-a2a].
- **OpenClaw was the OSS story of 2026.** A solo developer's self-hosted personal agent went from its first release (Nov 2025) to ~391k stars, the most-starred software repo on GitHub. Its creator joined OpenAI in Feb 2026 and the project moved to the OpenClaw Foundation, a 501(c)(3) launched on 2026-07-08 with OpenAI, NVIDIA, Microsoft and Tencent among partners[^oc-foundation]. It also exposed agent supply-chain risks: malicious skills, leaked secrets, and restrictions in China[^oc-wiki][^oc-fortune][^oc-gitguardian].
- **Terminal coding agents became the main battleground.** OpenCode (~211k stars; ~13M MAU and ~7T tokens/day by mid-2026 per its CEO), Codex CLI (~128k), Gemini CLI (~107k) and goose (~55k) overtook the older pioneers[^shub-opencode]. Anthropic's Jan–Apr 2026 block on using Claude subscriptions in third-party harnesses (OpenCode, OpenClaw) backfired as publicity for open harnesses[^anthropic-oauth-block]. Aider stalled: no release since Aug 2025 and no commits since May 2026[^gh-api][^aider-gh].
- **Shutdowns and consolidation hit the IDE-extension and low-code layers.** Void was deprecated (2026), Roo Code shut down to pivot to a cloud agent (2026-05-15), Flowise was sunset a year after Workday bought it (EOL 2026-08-31), and Kilo Code was acquired by Anaconda (2026-07-15)[^void-gh][^tns-roo][^flowise-sunset][^anaconda-kilo].
- **Big tech re-platformed its own OSS.** Microsoft put AutoGen (61k stars) into maintenance mode after Microsoft Agent Framework 1.0 shipped (2026-04-02). Every major lab now ships a permissive agent SDK[^autogen-gh].
- **Money went to platforms, not libraries.** n8n's valuation went from ~€250M (Mar 2025) to $2.5B (Oct 2025) to $5.2B (SAP, 12 May 2026)[^n8n-sap]. It did this under a source-available license. LangChain became a $1.25B unicorn by monetizing its closed LangSmith platform. Dify, despite ~158k stars, raised only a $30M Pre-A[^n8n-wiki][^lc-seriesb][^dify-30m].

# Scorecard
| Project | OSS verdict | Business verdict | 2y trajectory | One-line why |
|---|---|---|---|---|
| [OpenClaw](/projects/ai-agents/openclaw.md) | thriving | n/a | ↑↑ | 0 → ~391k stars in 10 months; foundation + OpenAI backing; security mess |
| [OpenCode](/projects/ai-agents/opencode.md) | thriving | growing | ↑↑ | Leading open coding agent (~211k stars, ~13M MAU) |
| [n8n](/projects/ai-agents/n8n.md) | thriving | thriving | ↑↑ | Fair-code; $5.2B valuation via SAP |
| [Model Context Protocol](/projects/ai-agents/model-context-protocol.md) | thriving | n/a | ↑↑ | Universal tool protocol; AAIF-governed |
| [LangChain / LangGraph](/projects/ai-agents/langchain.md) | thriving | thriving | ↑ | 1.0 + $1.25B unicorn via LangSmith |
| [Dify](/projects/ai-agents/dify.md) | thriving | growing | ↑ | ~158k stars; modest $30M raise |
| [Langflow](/projects/ai-agents/langflow.md) | growing | acquired | → | Survives inside IBM |
| [OpenAI Codex CLI](/projects/ai-agents/openai-codex-cli.md) | thriving | n/a | ↑↑ | Lab-backed OSS harness, ~128k stars |
| [Gemini CLI / ADK](/projects/ai-agents/gemini-cli.md) | thriving | n/a | ↑↑ | Free tier drove ~107k stars |
| [Browser Use](/projects/ai-agents/browser-use.md) | thriving | growing | ↑↑ | 50k → 117k stars; $17M seed |
| [Cline](/projects/ai-agents/cline.md) | thriving | growing | ↑ | Upstream of fork family; $32M; 11M users |
| [OpenHands](/projects/ai-agents/openhands.md) | thriving | growing | ↑ | 1.0 + enterprise push |
| [Mem0](/projects/ai-agents/mem0.md) | thriving | growing | ↑ | $24M; API growth |
| [CrewAI](/projects/ai-agents/crewai.md) | thriving | growing | ↑ | 1.0; weekly releases |
| [goose](/projects/ai-agents/goose.md) | growing | n/a | ↑ | Block → AAIF handoff |
| [A2A](/projects/ai-agents/a2a-protocol.md) | growing | n/a | ↑ | v1.0; joined AAIF; usage lags MCP |
| [AGENTS.md](/projects/ai-agents/agents-md.md) | growing | n/a | ↑ | Tiny standard, broad adoption |
| [Zed](/projects/ai-agents/zed.md) | thriving | growing | ↑ | $32M Series B; 1.0; no-AI fork Gram |
| [Kilo Code](/projects/ai-agents/kilo-code.md) | growing | acquired | ↑ | Launch → Anaconda exit in 16 months |
| [Microsoft Agent Framework](/projects/ai-agents/microsoft-agent-framework.md) | growing | n/a | ↑ | 1.0 consolidates MS agent stack |
| [OpenAI Agents SDK](/projects/ai-agents/openai-agents-sdk.md) | growing | n/a | ↑ | Lab SDK, ~30k stars |
| [Pydantic AI](/projects/ai-agents/pydantic-ai.md) | growing | growing | ↑ | v1 → v2; Logfire monetization |
| [DSPy](/projects/ai-agents/dspy.md) | growing | n/a | → | Academic, steady |
| [Composio](/projects/ai-agents/composio.md) | growing | growing | ↑ | Tool layer; MCP compresses moat |
| [LlamaIndex](/projects/ai-agents/llamaindex.md) | stable | growing | → | Pivot to document agents |
| [Haystack](/projects/ai-agents/haystack.md) | stable | stable | → | 3.0 shipped; low mindshare |
| [Continue](/projects/ai-agents/continue.md) | stable | stable | → | Repositioned; 2.0 |
| [Letta](/projects/ai-agents/letta.md) | stable | stable | → | Pivot toward Letta Code |
| [AG2](/projects/ai-agents/ag2.md) | stable | n/a | → | Fork survived; small |
| [smolagents](/projects/ai-agents/smolagents.md) | stable | n/a | → | Cadence slowed |
| [SWE-agent](/projects/ai-agents/swe-agent.md) | stable | n/a | → | Research artifact |
| [AutoGen](/projects/ai-agents/autogen.md) | declining | n/a | ↓ | Maintenance mode |
| [Aider](/projects/ai-agents/aider.md) | declining | n/a | ↓ | Stalled solo project |
| [AutoGPT](/projects/ai-agents/autogpt.md) | declining | stable | ↓ | Polyform Shield platform, still beta |
| [OpenManus](/projects/ai-agents/openmanus.md) | declining | n/a | ↓ | Hype spike, no releases since Apr 2025 |
| [Roo Code](/projects/ai-agents/roo-code.md) | dead | struggling | ↓↓ | Shut down for cloud pivot |
| [Flowise](/projects/ai-agents/flowise.md) | dead | acquired | ↓↓ | Workday buy → sunset |
| [Void](/projects/ai-agents/void-editor.md) | dead | failed | ↓↓ | Deprecated VS Code fork |

# By window
## W3 (2026-07-03 → 2026-10-03)
**Successes**
- OpenClaw Foundation launched as a 501(c)(3) (2026-07-08)[^oc-foundation].
- Anaconda acquires Kilo Code (2026-07-15) ([event](/events/2026-07-anaconda-acquires-kilo-code.md)); Kilo adds "Sign in with ChatGPT" via an OpenAI partnership (2026-09-29).
- OpenCode discloses ~13M MAU and ~7T tokens/day (2026-07-24)[^shub-opencode].
- A2A joins AAIF (2026-08-17; AAIF membership >250)[^axios-a2a], and the Gates Foundation joins as AAIF's first philanthropic member (Sep) ([event](/events/2026-08-a2a-joins-aaif.md)).
- OpenClaw 2.0 (v2026.8.1, 2026-08-30/31; ~16k merged PRs from 933 contributors). Haystack 3.0 (2026-07-20). AG2 1.0 (2026-07-27). Cline reports 11M users and launches Cline Desktop. LangSmith Engine v2 and Managed Deep Agents.

**Failures**
- Flowise code freeze (2026-07-29), archive (Aug) and EOL (2026-08-31) ([event](/events/2026-07-flowise-sunset.md)).
- MCP's stateless revision (2026-07-28) deprecated sampling and roots, creating churn for implementers[^mcp-spec-0728].
- Aider: zero commits all quarter.

## W6 (2026-04-03 → 2026-07-03)
**Successes**
- SAP invests in n8n at $5.2B (May) ([event](/events/2026-05-sap-invests-in-n8n.md)).
- Zed 1.0 (2026-04-29). MCP Dev Summit NA (~1,200 attendees). Continue 2.0 (2026-06-19).

**Failures**
- Roo Code shutdown announced 2026-04-20 and archived 2026-05-15 ([event](/events/2026-04-roo-code-shutdown.md)).
- Anthropic enforces its ban on Claude subscription use in all third-party agent harnesses (2026-04-04)[^anthropic-oauth-block].
- AutoGen goes to maintenance mode (last push 2026-04-15). Void deprecated and archived (June). Aider's last commits (2026-05-22).

## W9 (2026-01-03 → 2026-04-03)
**Successes**
- OpenClaw goes viral (late Jan) and its creator joins OpenAI while the project moves to a foundation (2026-02-14) ([event](/events/2026-01-openclaw-viral-renames.md), [event](/events/2026-02-openclaw-creator-joins-openai.md)).
- Dify raises $30M (2026-03-10). A2A v1.0 (Mar). Microsoft Agent Framework 1.0 (2026-04-02) ([event](/events/2026-04-microsoft-agent-framework-1-0.md)). Kilo CLI 1.0 (Feb).

**Failures**
- OpenClaw security: malicious skills, 181 leaked secrets, the MoltMatch consent incident, and Chinese state restrictions (Mar).
- Anthropic blocks Claude subscription OAuth in OpenCode (Jan 8–9) and bans it in its ToS (Feb 19)[^anthropic-oauth-block].
- Zed's AI push spawned the no-AI "Gram" fork (Mar).

## W12 (2025-10-03 → 2026-01-03)
**Successes**
- n8n raises $180M Series C at $2.5B (2025-10-09) ([event](/events/2025-10-n8n-series-c.md)).
- LangChain/LangGraph 1.0 and $125M at $1.25B (Oct) ([event](/events/2025-10-langchain-series-b-unicorn.md)).
- AAIF launched with MCP, AGENTS.md and goose (2025-12-09) ([event](/events/2025-12-agentic-ai-foundation-launch.md)).
- Mem0 raises $24M. CrewAI 1.0. OpenHands 1.0. n8n 2.0. Kilo raises $8M. OpenClaw first released (2025-11-24).

**Failures**
- Void remained paused, and Aider made no releases in this window.

## W24 (2024-10-03 → 2025-10-03)
**Successes**
- MCP launches (Nov 2024), then OpenAI (Mar 2025) and Google (Apr 2025) adopt it.
- Lab OSS agents arrive: OpenAI Agents SDK (Mar 2025), Codex CLI (Apr), Google ADK (Apr), A2A (Apr), Gemini CLI (2025-06-25).
- Funding: Browser Use $17M (Mar), n8n €55M Series B (Mar), Browserbase $40M (Jun), Cline $32M (Jul), Composio Series A (Jul), Zed $32M (Aug). AGENTS.md published (Aug). Pydantic AI v1 and DSPy 3.0.

**Failures**
- AG2 forks AutoGen (Nov 2024) ([event](/events/2024-11-ag2-forks-autogen.md)).
- MCP security holes: tool poisoning (Apr) and CVE-2025-6514 (Jul).
- Low-code builders get absorbed: IBM closes DataStax/Langflow (May) ([event](/events/2025-05-ibm-closes-datastax-langflow.md)) and Workday acquires Flowise (Aug) ([event](/events/2025-08-workday-acquires-flowise.md)).
- Void development stops (Aug 2025). Aider's last release (2025-08-09).

# Trends
1. **Standards went to a neutral foundation unusually early.** Within 13 months, MCP, AGENTS.md, goose and A2A all moved under the Linux Foundation's AAIF. Competitors co-governing from the start avoided a protocol war; ACP was merged into A2A rather than fighting it. ([AAIF](/organizations/agentic-ai-foundation.md))
2. **The harness is commoditized and open, while models stay closed.** OpenAI, Google, Microsoft and Block all open-sourced agent harnesses and SDKs under Apache-2.0 or MIT, which squeezed independent frameworks toward paid ops platforms (LangSmith, Logfire, CrewAI AMP). ([Codex CLI](/projects/ai-agents/openai-codex-cli.md), [Gemini CLI](/projects/ai-agents/gemini-cli.md))
3. **Coding agents displaced low-code builders and IDE forks.** Flowise named "Claude Code/OpenClaw" when it sunset. Roo Code said "IDEs are not the future". Void was deprecated[^flowise-sunset][^tns-roo][^void-gh].
4. **Labs hire creators and sponsor foundations instead of buying companies.** OpenAI hired OpenClaw's creator and backed a foundation rather than acquiring anything[^oc-fortune].
5. **The Cline fork family consolidated.** Of Cline, Roo and Kilo, one shut down and one was acquired within three months. Permissive licenses made forking easy, but a fork does not build a moat.
6. **Source-available licensing did not block success.** n8n (Sustainable Use License), Dify (modified Apache) and the AutoGPT platform (Polyform Shield) kept or grew their communities. n8n became the domain's most valuable company[^n8n-wiki].
7. **Agent security became a first-order issue.** MCP CVEs, malicious OpenClaw skills, mass secret leaks and government restrictions all arrived as tool-access protocols and plugin ecosystems scaled[^mcp-wiki][^oc-gitguardian].
8. **Big tech re-platformed its own projects.** Microsoft ran AutoGen through a v0.2 to v0.4 rewrite, an AG2 fork and finally MAF with maintenance mode, a cautionary tale for anyone adopting a lab-research project.

# Success patterns
- **Distribution plus a free or cheap path to models.** Gemini CLI's free tier, OpenClaw's chat-app UX and OpenCode's provider-agnostic design all won on this.
- **A closed, adjacent product on top of a permissive OSS core.** LangSmith, Logfire, Mem0's API, n8n Cloud and the Browser Use cloud all follow this pattern.
- **Neutral governance before fragmentation.** MCP and A2A moved to a foundation before anyone forked them.
- **Repositioning on the AI wave from an existing asset.** n8n's integration catalog became agent tooling, and LlamaIndex turned toward document agents.

# Failure patterns
- **A single vendor controls an OSS tool and changes strategy.** Roo Code shut down for a pivot, and AutoGen was retired by its sponsor.
- **Acquisition by a non-developer SaaS company.** Flowise was sunset 12 months after Workday bought it.
- **Solo or volunteer maintainers against subsidized lab tools.** Aider stalled and Void was deprecated.
- **Hype without a maintainer team.** OpenManus has made no releases since Apr 2025, and AutoGPT's platform is still in beta.
- **Category obsolescence.** Rigid low-code LLM chains lost ground to general coding agents.

# Open questions / watchlist for next 6 months
- OpenClaw Foundation (launched Jul 2026) governance and funding transparency, how much influence OpenAI has, and whether security improves (skill vetting, CVEs).
- Kilo's license under Anaconda ("source-available" wording versus the MIT license in the repo).
- Whether LangChain announces a Series C (as of 2026-10-03 only a filings-based Forge listing at ~$3B exists; no company or press confirmation) and how labs' SDKs affect LangSmith growth.
- Whether n8n moves toward an IPO, and whether Dify and other low-code builders follow Flowise's decline.
- Adoption of MCP's stateless spec and real production usage of A2A after joining AAIF.
- Whether more VS Code-fork and extension agents shut down or pivot to cloud agents (Continue, Cline).
- Whether Aider is formally archived or handed off.

[^aaif-a2a]: https://aaif.io/blog/a2a-joins-aaif
[^aider-gh]: https://github.com/Aider-AI/aider
[^anaconda-kilo]: https://www.anaconda.com/blog/anaconda-acquires-kilo-code
[^autogen-gh]: https://github.com/microsoft/autogen
[^dify-30m]: https://dify.ai/blog/dify-raises-30m-tomorrow-s-organizations-will-be-built-by-people-and-agents
[^flowise-sunset]: https://flowiseai.com/sunset
[^gh-api]: https://api.github.com
[^lc-seriesb]: https://www.langchain.com/blog/series-b
[^lf-aaif-pr]: https://www.prnewswire.com/news-releases/linux-foundation-announces-the-formation-of-the-agentic-ai-foundation-aaif-anchored-by-new-project-contributions-including-model-context-protocol-mcp-goose-and-agentsmd-302636897.html
[^mcp-wiki]: https://en.wikipedia.org/wiki/Model_Context_Protocol
[^n8n-wiki]: https://en.wikipedia.org/wiki/N8n
[^oc-fortune]: https://fortune.com/2026/02/15/openai-openclaw-ai-agent-developer-peter-steinberg-moltbot-clawdbot-moltbook/
[^oc-gitguardian]: https://blog.gitguardian.com/moltbot-personal-assistant-goes-viral-and-so-do-your-secrets/
[^oc-wiki]: https://en.wikipedia.org/wiki/OpenClaw
[^tns-roo]: https://thenewstack.io/roo-code-cloud-ides-ai-coding/
[^void-gh]: https://github.com/voideditor/void
[^oc-foundation]: OpenClaw blog, 2026-07-08.
[^n8n-sap]: n8n blog, 2026-05-12.
[^shub-opencode]: StartupHub.ai, 2026-07-24 (CEO figures from YC Lightcone).
[^anthropic-oauth-block]: MLQ.ai, Apr 2026.
[^axios-a2a]: Axios, 2026-08-17.
[^mcp-spec-0728]: MCP blog, 2026-07-28.
