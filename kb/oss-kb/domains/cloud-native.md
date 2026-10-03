---
type: Domain Review
title: "Cloud Native (Kubernetes, containers, observability, IaC, platform engineering, networking): 2-year review"
description: "Oct 2024 – Oct 2026: Kubernetes entered a stable 'boring' era. OpenTelemetry graduated and reshaped observability. Maintainer-starved components (ingress-nginx) were retired, and value consolidated into a few winners: Temporal ($12.55B), Grafana Labs ($600M+ ARR; ~$9B valuation reported, not confirmed), Chronosphere ($3.35B to Palo Alto Networks); small vendors exited (Sidero Labs to Yardi)."
domain: cloud-native
tags: [cloud-native, kubernetes, observability, opentelemetry, gitops, service-mesh, iac, containers, webassembly, virtualization, maintainer-burnout]
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: k8s-137
    resource: https://kubernetes.io/blog/2026/08/26/kubernetes-v1-37-release/
    title: "Kubernetes v1.37 release"
  - id: k8s-135
    resource: https://kubernetes.io/blog/2025/12/17/kubernetes-v1-35-release/
    title: "Kubernetes v1.35 release"
  - id: k8s-134
    resource: https://kubernetes.io/blog/2025/08/27/kubernetes-v1-34-release/
    title: "Kubernetes v1.34 release"
  - id: ingn-statement
    resource: https://www.kubernetes.io/blog/2026/01/29/ingress-nginx-statement/
    title: "Ingress NGINX: Statement from Kubernetes Steering and SRC"
  - id: ingn-retire
    resource: https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/
    title: "Ingress NGINX Retirement"
  - id: wiz
    resource: https://www.wiz.io/blog/ingress-nginx-kubernetes-vulnerabilities
    title: "Wiz: IngressNightmare"
  - id: eso-issue
    resource: https://github.com/external-secrets/external-secrets/issues/5084
    title: "External Secrets Operator release pause"
  - id: cncf-otel-grad
    resource: https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/
    title: "CNCF: OpenTelemetry graduation"
  - id: prom3
    resource: https://prometheus.io/blog/2024/11/14/prometheus-3-0/
    title: "Prometheus 3.0"
  - id: panw-chrono
    resource: https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-to-acquire-chronosphere--next-gen-observability-leader--for-the-ai-era
    title: "Palo Alto Networks to acquire Chronosphere"
  - id: sa-grafana
    resource: https://siliconangle.com/2026/02/13/grafana-labs-reportedly-raising-funding-9b-valuation/
    title: "SiliconANGLE: Grafana Labs at ~$9B"
  - id: temporal-d
    resource: https://temporal.io/news/temporal-raises-300M-to-make-agentic-ai-real-for-companies
    title: "Temporal Series D"
  - id: temporal-e
    resource: https://temporal.io/news/temporal-raises-550m-at-a-12-55b-valuation
    title: "Temporal press release: $550M Series E at $12.55B (Sep 14, 2026)"
  - id: grafana-pr-2025
    resource: https://grafana.com/press/2025/09/30/grafana-labs-surpasses-400m-arr-and-7000-customers-gains-new-investors-to-accelerate-global-expansion/
    title: "Grafana Labs press release: $400M+ ARR, 7,000 customers (Sep 30, 2025)"
  - id: grafana-pr-2026
    resource: https://grafana.com/press/2026/08/26/grafana-labs-crosses-10000-customer-milestone-as-ai-adoption-accelerates-growth-across-the-platform/
    title: "Grafana Labs press release: 10,000 customers, ARR above $600M (Aug 26, 2026)"
  - id: edgar-fts
    resource: https://efts.sec.gov/LATEST/search-index?q=%22Grafana%20Labs%22&forms=S-1
    title: "SEC EDGAR full-text search: no S-1 mentioning Grafana Labs (checked 2026-10-03)"
  - id: sidero-yardi
    resource: https://www.siderolabs.com/blog/sidero-labs-joins-yardi
    title: "Sidero Labs blog: Sidero Labs joins Yardi (Sep 14, 2026)"
  - id: port-series-c
    resource: https://www.port.io/blog/port-100m-series-c
    title: "Port: $100M Series C at $800M valuation (Dec 11, 2025)"
  - id: dbta-flox
    resource: https://www.dbta.com/Editorial/News-Flashes/Flox-Raises-25M-in-Funding-to-Address-Growing-AI-Complexity-for-Engineering-Teams-171643.aspx
    title: "DBTA: Flox raises $25M Series B (Sep 26, 2025)"
  - id: docker-cloud-sandboxes
    resource: https://www.docker.com/press-release/cloud-sandboxes-extending-secure-ai-agent-isolation-beyond-the-laptop/
    title: "Docker press release: Cloud Sandboxes (Sep 24, 2026)"
  - id: reg-openinfra
    resource: https://www.theregister.com/software/2025/03/12/openinfra-joins-the-linux-foundation/1008838
    title: "The Register: OpenInfra joins the Linux Foundation (Mar 12, 2025)"
  - id: panw-chrono-close
    resource: https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-completes-chronosphere-acquisition--unifying-observability-and-security-for-the-ai-era
    title: "Palo Alto Networks completes Chronosphere acquisition (Jan 29, 2026)"
  - id: upbound-v3
    resource: https://www.globenewswire.com/news-release/2026/08/19/3347812/0/en/upbound-launches-platform-to-unify-cloud-and-ai-infrastructure-operations.html
    title: "GlobeNewswire: Upbound V3 launch (Aug 19, 2026)"
  - id: cg-fork
    resource: https://www.chainguard.dev/unchained/keeping-ingress-nginx-alive
    title: "Chainguard: maintenance fork of ingress-nginx via EmeritOSS (Dec 22, 2025)"
  - id: linuxiac-coreteam
    resource: https://linuxiac.com/nixpkgs-core-team-dissolves/
    title: "Linuxiac: Nixpkgs Core Team dissolves (Aug 8, 2026)"
  - id: eso-releases
    resource: https://github.com/external-secrets/external-secrets/releases
    title: "External Secrets Operator GitHub releases"
  - id: polar-profiles-alpha
    resource: https://www.polarsignals.com/blog/posts/2026/03/26/opentelemetry-profiling-goes-alpha
    title: "Polar Signals: OpenTelemetry Profiling goes Alpha (Mar 26, 2026)"
  - id: temporal-secondary
    resource: https://temporal.io/blog/temporal-raises-secondary-funding
    title: "Temporal: $105M secondary at $2.5B (Oct 1, 2025)"
  - id: dd-otel-news
    resource: https://opensource.datadoghq.com/otel-news/2026/01/
    title: "Datadog Open Source Hub: OpenTelemetry news, Jan 2026"
  - id: dhi
    resource: https://www.docker.com/blog/docker-hardened-images-for-every-developer/
    title: "Docker Hardened Images for everyone"
  - id: hub-policy
    resource: https://www.docker.com/blog/revisiting-docker-hub-policies-prioritizing-developer-experience/
    title: "Docker Hub policy revision"
  - id: tc-docker-ceo
    resource: https://techcrunch.com/2025/02/13/former-oracle-cloud-exec-don-johnson-takes-over-as-dockers-new-ceo/
    title: "TechCrunch: Docker CEO change"
  - id: istio-ga
    resource: https://istio.io/latest/blog/2024/ambient-reaches-ga/
    title: "Istio ambient GA"
  - id: linkerd-forever
    resource: https://www.buoyant.io/blog/linkerd-forever
    title: "Buoyant: Linkerd Forever"
  - id: xp-grad
    resource: https://www.upbound.io/blog/crossplane-graduates-from-cncf-upbound-redefines-ai-native-infrastructure
    title: "Crossplane graduates"
  - id: uxp2-clarify
    resource: https://www.upbound.io/blog/uxp-2-0-and-crossplane
    title: "UXP 2.0 and Crossplane"
  - id: akuity-2025
    resource: https://finance.yahoo.com/sectors/technology/articles/gitops-leader-akuity-celebrates-5-153000818.html
    title: "Akuity FY2025 results"
  - id: itpro-flux
    resource: https://www.itpro.com/software/open-source/why-flux-cds-survival-is-another-major-victory-for-the-open-source-community
    title: "ITPro: Flux survival"
  - id: nww-fermyon
    resource: https://www.networkworld.com/article/4099424/akamai-acquires-fermyon-for-edge-computing-as-webassembly-comes-of-age.html
    title: "Akamai acquires Fermyon"
  - id: pmx-press
    resource: https://www.proxmox.com/en/about/company-details/press-releases
    title: "Proxmox press releases"
  - id: openinfra-blog
    resource: https://openinfra.org/blog/
    title: "OpenInfra blog"
  - id: grafanacon26
    resource: https://grafana.com/blog/grafanacon-2026-announcements/
    title: "GrafanaCON 2026"
  - id: google-oss
    resource: https://opensource.googleblog.com/2026/02/the-end-of-an-era-transitioning-away-from-ingress-nginx.html
    title: "Google OSS: transitioning away from Ingress NGINX"
  - id: podman-cncf
    resource: https://www.cncf.io/projects/podman-container-tools/
    title: "CNCF: Podman Container Tools"
  - id: coolify-gh
    resource: https://github.com/coollabsio/coolify
    title: "Coolify releases"
  - id: detsys-blog
    resource: https://determinate.systems/blog/
    title: "Determinate Systems blog"
  - id: pulumi-blog
    resource: https://www.pulumi.com/blog/
    title: "Pulumi blog"
  - id: dagger-blog
    resource: https://dagger.io/blog
    title: "Dagger blog"
  - id: cisco-blog-26
    resource: https://blogs.cisco.com/?p=486429
    title: "Cisco Isovalent networking blog"
---

# Executive summary
- **Kubernetes is mature, and its edges are fragile.** Core Kubernetes shipped every release on time (v1.34 Aug 2025 → v1.37 Aug 2026; DRA GA, in-place Pod resize GA)[^k8s-134][^k8s-135][^k8s-137]. Meanwhile ingress-nginx, used by about 50% of environments, was retired in March 2026 because only 1-2 people maintained it[^ingn-statement]. External Secrets Operator froze releases in 2025 for the same reason[^eso-issue].
- **OpenTelemetry is the domain's biggest OSS success.** It graduated from CNCF on May 21, 2026 with 12,000+ contributors from 2,800+ companies[^cncf-otel-grad]. Prometheus 3.0 adopted OTLP and Jaeger v2 was rebuilt on the OTel Collector[^prom3].
- **Value consolidated into a few observability and infrastructure winners.** Palo Alto Networks bought Chronosphere for $3.35B (about 20x ARR; closed Jan 29, 2026)[^panw-chrono][^panw-chrono-close]. Grafana Labs announced $400M+ ARR (Sep 2025) and $600M+ ARR with 10,000+ customers (Aug 2026); a ~$9B round was reported in Feb 2026 but never confirmed, and there is no public S-1[^grafana-pr-2025][^grafana-pr-2026][^sa-grafana][^edgar-fts]. Temporal went from $2.5B (Oct 2025) to $5B (Feb 2026) to $12.55B (Sep 2026) on AI-agent demand[^temporal-secondary][^temporal-d][^temporal-e]. Smaller vendors exited or raised modestly: Yardi bought Sidero Labs (Talos) in Sep 2026, Port raised $100M at $800M, and Flox raised $25M[^sidero-yardi][^port-series-c][^dbta-flox].
- **AI repositioning is everywhere.** Docker (Model Runner, MCP), Dagger (container-use), Pulumi (Neo), Upbound ("AI-native control plane"), Linkerd (MCP traffic), Akuity (agentic ops) and Grafana (Assistant) all relaunched themselves around AI agents[^dagger-blog][^pulumi-blog][^uxp2-clarify][^akuity-2025][^grafanacon26].
- **Soft open-core moves replaced relicensing.** Instead of BSL-style license changes (see [OpenTofu](/projects/licensing-forks/opentofu.md), [Bitnami](/projects/licensing-forks/bitnami.md), [OpenBao](/projects/licensing-forks/openbao.md)), cloud-native vendors gated *artifacts*: Buoyant keeps stable Linkerd builds for paying customers, and Upbound restricts v2 Official Providers to UXP[^linkerd-forever][^uxp2-clarify]. Docker went the other way and open-sourced 1,000+ Hardened Images to win share[^dhi].
- **The Broadcom/VMware exodus fed open virtualization.** Proxmox VE (9.0 → 9.2, Datacenter Manager, a North American subsidiary), KubeVirt/Harvester and OpenStack (now under the Linux Foundation) all gained[^pmx-press][^openinfra-blog].
- **Foundation hosting worked as insurance.** Flux survived Weaveworks' collapse, Spin survived the Fermyon acquisition, and Podman moved under CNCF[^itpro-flux][^nww-fermyon][^podman-cncf].

# Scorecard
| Project | OSS verdict | Business verdict | 2y trajectory | One-line why |
|---|---|---|---|---|
| [Kubernetes](/projects/cloud-native/kubernetes.md) | stable | n/a | flat | On-time releases; maintainer gaps in sub-projects |
| [ingress-nginx](/projects/cloud-native/ingress-nginx.md) | dead | n/a | down | IngressNightmare CVEs → retired Mar 2026 |
| [Gateway API](/projects/cloud-native/gateway-api.md) | growing | n/a | up | Official ingress successor |
| [OpenTelemetry](/projects/cloud-native/opentelemetry.md) | thriving | n/a | up | Graduated May 2026; de facto standard |
| [Prometheus](/projects/cloud-native/prometheus.md) | stable | n/a | flat | 3.0 modernization, OTLP-native |
| [Grafana](/projects/cloud-native/grafana.md) | thriving | thriving | up | Grafana 13; $600M+ ARR (Aug 2026); ~$9B (reported) |
| [Jaeger](/projects/cloud-native/jaeger.md) | stable | n/a | flat | v2 rebuilt on OTel Collector |
| [SigNoz](/projects/cloud-native/signoz.md) | growing | growing | up | OTel-native challenger, 32k stars; only a $6.5M seed (2023) |
| [VictoriaMetrics](/projects/cloud-native/victoriametrics.md) | stable | stable | flat | Independent, Apache-2.0, fast cadence |
| [Cilium](/projects/cloud-native/cilium.md) | thriving | acquired | up | Default eBPF CNI; Isovalent inside Cisco |
| [Istio](/projects/cloud-native/istio.md) | growing | n/a | up | Ambient GA won the sidecar debate |
| [Linkerd](/projects/cloud-native/linkerd.md) | contested | stable | flat | Gated stable builds; Buoyant profitable |
| [Envoy](/projects/cloud-native/envoy.md) | thriving | n/a | up | Shared data plane; Envoy Gateway rise |
| [Argo CD](/projects/cloud-native/argo-cd.md) | thriving | growing | up | GitOps winner; Akuity 100+ customers |
| [Flux](/projects/cloud-native/flux.md) | stable | n/a | flat | Survived vendor death via ControlPlane |
| [Crossplane](/projects/cloud-native/crossplane.md) | growing | struggling | mixed | Graduated, but providers gated by Upbound |
| [Backstage](/projects/cloud-native/backstage.md) | stable | n/a | flat | Default IDP framework; SaaS rivals |
| [Pulumi](/projects/cloud-native/pulumi.md) | stable | stable | flat | Terraform/HCL interop; no new funding |
| [Dagger](/projects/cloud-native/dagger.md) | stable | stable | flat | Pivot to agent sandboxes |
| [Docker](/projects/cloud-native/docker.md) | stable | stable | mixed | CEO change, Hub reversal, free DHI |
| [Podman](/projects/cloud-native/podman.md) | growing | n/a | up | CNCF Sandbox; Podman 6.0 |
| [containerd](/projects/cloud-native/containerd.md) | stable | n/a | flat | Quiet 2.x evolution |
| [Talos Linux](/projects/cloud-native/talos-linux.md) | growing | acquired | up | Immutable K8s OS; Sidero bought by Yardi (Sep 2026) |
| [Nix](/projects/cloud-native/nix.md) | growing | growing | up | Reproducibility meets CRA/FedRAMP |
| [Spin & Wasm](/projects/cloud-native/spin-webassembly.md) | stable | acquired | flat | Fermyon → Akamai; Wasm narrowed to edge |
| [KubeVirt](/projects/cloud-native/kubevirt.md) | growing | n/a | up | VMware-exodus landing zone |
| [Proxmox VE](/projects/cloud-native/proxmox-ve.md) | thriving | growing | up | Biggest VMware-exodus winner |
| [Coolify](/projects/cloud-native/coolify.md) | thriving | growing | up | 62k stars; v4 GA Apr 2026 |
| [Temporal](/projects/cloud-native/temporal.md) | thriving | thriving | up | $12.55B; AI-agent durable execution |
| [External Secrets Operator](/projects/cloud-native/external-secrets-operator.md) | stable | n/a | mixed | Burnout pause → recovery; v1.0 Nov 2025, v2.x every ~3 weeks |

# By window
## W3 (2026-07-03 → 2026-10-03)
**Successes**
- Temporal $550M Series E at $12.55B (Sep 14), ARR >$250M[^temporal-e].
- Kubernetes v1.37 "Garhwal" (Aug 26) with 67 enhancements[^k8s-137]; Cilium 1.20, Istio 1.31, Argo CD 3.5, Crossplane 2.4, Podman 6.1, Talos 1.14.
- Proxmox North America launch and NVIDIA/Omnissa integrations[^pmx-press]; Determinate's FlakeHub FedRAMP High[^detsys-blog]; Pulumi adds full Terraform state/HCL support[^pulumi-blog].
- Grafana Labs passes $600M ARR and 10,000 customers (Aug 26)[^grafana-pr-2026]; Upbound V3 (Aug 19)[^upbound-v3]; Docker Cloud Sandboxes for AI agents (Sep 24)[^docker-cloud-sandboxes].
- Yardi acquires Sidero Labs (announced Sep 14); Talos stays MPL-2.0 and adds a hypervisor[^sidero-yardi].

**Failures**
- v1.37's cgroup v1 hard-fail and IPVS deprecation create upgrade pain for lagging fleets[^k8s-137].
- Post-retirement ingress-nginx clusters get no upstream fixes after March; the only maintained path is Chainguard's best-effort fork[^ingn-statement][^cg-fork].
- Nixpkgs Core Team dissolves (Aug 8), another NixOS governance body to fail[^linuxiac-coreteam].

## W6 (2026-04-03 → 2026-07-03)
**Successes**
- OpenTelemetry graduates (May 21)[^cncf-otel-grad].
- Kubernetes v1.36 (Apr 22); GrafanaCON / Grafana 13 (Apr 21)[^grafanacon26]; Coolify v4.0 GA (Apr 27)[^coolify-gh]; Proxmox VE 9.2[^pmx-press].

**Failures**
- Mesh consolidation continues; Linkerd stays the smaller mesh despite 2.20.
- Backstage remains in CNCF incubation; IDP buyers shift to SaaS and AI "agentic platforms".

## W9 (2026-01-03 → 2026-04-03)
**Successes**
- Temporal $300M Series D at $5B (Feb 17)[^temporal-d]; Grafana Labs reported ~$9B round (Feb 13)[^sa-grafana].
- Chronosphere deal closes (Jan 29)[^panw-chrono-close]; Akuity reports +150% new ARR[^akuity-2025]; OTel profiles signal reaches public alpha (Mar 26)[^polar-profiles-alpha].

**Failures**
- ingress-nginx retired and archived (March); Steering/SRC emergency statement (Jan 29)[^ingn-statement].

## W12 (2025-10-03 → 2026-01-03)
**Successes**
- Palo Alto Networks to acquire Chronosphere for $3.35B (Nov 19)[^panw-chrono].
- Crossplane graduates (Nov 6)[^xp-grad]; Kubernetes v1.35 with in-place resize GA[^k8s-135]; Docker Hardened Images free (Dec 17)[^dhi].
- External Secrets Operator ships v1.0 (Nov 7) after its maintainer crisis[^eso-releases]; Port raises $100M at $800M (Dec 11)[^port-series-c].

**Failures**
- ingress-nginx retirement announced (Nov 11)[^ingn-retire].
- Fermyon sold to Akamai at an undisclosed price, ending the standalone Wasm-PaaS bet[^nww-fermyon].

## W24 (2024-10-03 → 2025-10-03)
**Successes**
- Prometheus 3.0 and Istio ambient GA (Nov 2024)[^prom3][^istio-ga]; Kubernetes v1.34 DRA GA[^k8s-134].
- Podman and Spin enter CNCF (Jan 2025)[^podman-cncf]; OpenInfra votes to join the Linux Foundation (announced Mar 12, 2025; completed by June 2025)[^reg-openinfra].
- Temporal's $2.5B secondary (Oct 1, 2025) and Flox's $25M Series B (Sep 26, 2025)[^temporal-secondary][^dbta-flox].

**Failures**
- IngressNightmare (Mar 2025, CVSS 9.8)[^wiz]; External Secrets Operator release freeze (Jul 2025)[^eso-issue].
- Docker CEO change (Feb 2025)[^tc-docker-ceo] and reversal of Docker Hub pull-limit/charge plans (Apr 2025)[^hub-policy]; Upbound restricts Official Providers (Aug 2025)[^uxp2-clarify].

# Trends
1. **The maintainer cliff.** Usage far outran maintainer supply in widely deployed add-ons: ingress-nginx retired[^ingn-statement] and ESO paused[^eso-issue]. Foundations now retire projects deliberately instead of letting them rot. See [ingress-nginx](/projects/cloud-native/ingress-nginx.md).
2. **Standards beat products.** OTel, Gateway API and Prometheus 3 standardized interfaces. Competition moved to backends and implementations: Chronosphere, Grafana and SigNoz on telemetry, and Envoy Gateway, Cilium and Istio on the [Gateway API](/projects/cloud-native/gateway-api.md)[^cncf-otel-grad][^google-oss].
3. **AI agents as the new cloud-native workload.** DRA for GPUs[^k8s-134], durable execution ([Temporal](/projects/cloud-native/temporal.md))[^temporal-e], agent sandboxes ([Dagger](/projects/cloud-native/dagger.md))[^dagger-blog], MCP-aware meshes and GenAI semantic conventions in OTel.
4. **Soft open core.** Vendors gate builds and extensions instead of relicensing: [Linkerd](/projects/cloud-native/linkerd.md) and [Crossplane](/projects/cloud-native/crossplane.md)[^linkerd-forever][^uxp2-clarify]. Docker inverted this with free hardened images[^dhi].
5. **Observability consolidation and security convergence.** Security vendors buy telemetry (PANW and Chronosphere)[^panw-chrono], and Cisco folds Cilium/Isovalent into AI networking[^cisco-blog-26]. Incumbents that once resisted OTel now ship their own OTel distributions (Datadog's DDOT)[^dd-otel-news].
6. **Exit from VMware and hyperscaler PaaS.** [Proxmox](/projects/cloud-native/proxmox-ve.md), [KubeVirt](/projects/cloud-native/kubevirt.md), OpenStack, [Talos](/projects/cloud-native/talos-linux.md) and [Coolify](/projects/cloud-native/coolify.md) gained from cost-driven repatriation[^pmx-press][^openinfra-blog][^coolify-gh].
7. **Supply-chain compliance as a product.** Hardened images (Docker, Chainguard), Nix-based SBOMs and EU CRA tooling (Determinate) all target the 2026 regulatory wave[^dhi][^detsys-blog].

# Success patterns
- **Become the neutral standard, then let vendors fund it**: OTel, Envoy and Kubernetes have broad multi-vendor maintainer bases[^cncf-otel-grad].
- **Absorb the new standard instead of fighting it**: Prometheus (OTLP) and Jaeger (Collector-based v2)[^prom3].
- **Permissive license plus cloud service, with a workload tailwind**: Temporal (MIT) and Grafana (AGPL, but with an OSI license)[^temporal-e][^sa-grafana].
- **Foundation before exit**: Cilium (before Cisco), Spin (before Akamai) and Flux (before Weaveworks died) all survived their vendors' fates[^itpro-flux][^nww-fermyon].
- **Capital efficiency**: Buoyant reached profitability, Proxmox and Coolify bootstrapped, and Akuity grew on $20M[^linkerd-forever][^pmx-press][^akuity-2025].

# Failure patterns
- **Critical but unglamorous components without a corporate sponsor** (ingress-nginx, ESO)[^ingn-statement][^eso-issue].
- **Configuration-as-code-injection designs** ("snippets") that small teams cannot secure[^wiz][^google-oss].
- **Monetizing after commoditization**: Docker Hub limits had to be walked back[^hub-policy].
- **Single-vendor gating that alienates upstream users**: Crossplane's providers and Linkerd's stable builds[^uxp2-clarify][^linkerd-forever].
- **Platform-shift bets without distribution**: standalone Wasm PaaS ended in an acqui-hire-style sale[^nww-fermyon].

# Open questions / watchlist for next 6 months
- Does Grafana Labs confirm its round or file for an IPO? (IPO-tracker claims of a May 2026 S-1 are not supported by EDGAR as of 2026-10-03.)[^edgar-fts]
- Sidero under Yardi: does Talos Hypervisor reach GA in Dec 2026, and does the roadmap stay community-driven?
- Kubernetes v1.38 (~Dec 2026): more removals (IPVS, cgroup v1); how many clusters still run archived ingress-nginx?
- Temporal at ~50x ARR: can it sustain 200%+ growth, and will clouds ship competing durable-execution services?
- Chronosphere inside Palo Alto Networks: does it keep contributing upstream?
- Crossplane after provider gating: does crossplane-contrib keep pace, and does Upbound raise money or get acquired?
- Docker: does free DHI convert to paid Enterprise, and does a sale materialize?
- OTel profiling signal GA and GenAI conventions stability; Collector 1.0.
- Another maintainer-crisis retirement (candidate: other SIG-owned add-ons with 1-2 maintainers).

[^k8s-137]: https://kubernetes.io/blog/2026/08/26/kubernetes-v1-37-release/
[^k8s-135]: https://kubernetes.io/blog/2025/12/17/kubernetes-v1-35-release/
[^k8s-134]: https://kubernetes.io/blog/2025/08/27/kubernetes-v1-34-release/
[^ingn-statement]: https://www.kubernetes.io/blog/2026/01/29/ingress-nginx-statement/
[^ingn-retire]: https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/
[^wiz]: https://www.wiz.io/blog/ingress-nginx-kubernetes-vulnerabilities
[^eso-issue]: https://github.com/external-secrets/external-secrets/issues/5084
[^cncf-otel-grad]: https://www.cncf.io/announcements/2026/05/21/cloud-native-computing-foundation-announces-opentelemetrys-graduation-solidifying-status-as-the-de-facto-observability-standard/
[^prom3]: https://prometheus.io/blog/2024/11/14/prometheus-3-0/
[^panw-chrono]: https://www.paloaltonetworks.com/company/press/2025/palo-alto-networks-to-acquire-chronosphere--next-gen-observability-leader--for-the-ai-era
[^sa-grafana]: https://siliconangle.com/2026/02/13/grafana-labs-reportedly-raising-funding-9b-valuation/
[^temporal-d]: https://temporal.io/news/temporal-raises-300M-to-make-agentic-ai-real-for-companies
[^temporal-e]: https://temporal.io/news/temporal-raises-550m-at-a-12-55b-valuation
[^dhi]: https://www.docker.com/blog/docker-hardened-images-for-every-developer/
[^hub-policy]: https://www.docker.com/blog/revisiting-docker-hub-policies-prioritizing-developer-experience/
[^tc-docker-ceo]: https://techcrunch.com/2025/02/13/former-oracle-cloud-exec-don-johnson-takes-over-as-dockers-new-ceo/
[^istio-ga]: https://istio.io/latest/blog/2024/ambient-reaches-ga/
[^linkerd-forever]: https://www.buoyant.io/blog/linkerd-forever
[^xp-grad]: https://www.upbound.io/blog/crossplane-graduates-from-cncf-upbound-redefines-ai-native-infrastructure
[^uxp2-clarify]: https://www.upbound.io/blog/uxp-2-0-and-crossplane
[^akuity-2025]: https://finance.yahoo.com/sectors/technology/articles/gitops-leader-akuity-celebrates-5-153000818.html
[^itpro-flux]: https://www.itpro.com/software/open-source/why-flux-cds-survival-is-another-major-victory-for-the-open-source-community
[^nww-fermyon]: https://www.networkworld.com/article/4099424/akamai-acquires-fermyon-for-edge-computing-as-webassembly-comes-of-age.html
[^pmx-press]: https://www.proxmox.com/en/about/company-details/press-releases
[^openinfra-blog]: https://openinfra.org/blog/
[^grafanacon26]: https://grafana.com/blog/grafanacon-2026-announcements/
[^google-oss]: https://opensource.googleblog.com/2026/02/the-end-of-an-era-transitioning-away-from-ingress-nginx.html
[^podman-cncf]: https://www.cncf.io/projects/podman-container-tools/
[^coolify-gh]: https://github.com/coollabsio/coolify
[^detsys-blog]: https://determinate.systems/blog/
[^pulumi-blog]: https://www.pulumi.com/blog/
[^dagger-blog]: https://dagger.io/blog
[^cisco-blog-26]: https://blogs.cisco.com/?p=486429
[^grafana-pr-2025]: https://grafana.com/press/2025/09/30/grafana-labs-surpasses-400m-arr-and-7000-customers-gains-new-investors-to-accelerate-global-expansion/
[^grafana-pr-2026]: https://grafana.com/press/2026/08/26/grafana-labs-crosses-10000-customer-milestone-as-ai-adoption-accelerates-growth-across-the-platform/
[^edgar-fts]: https://efts.sec.gov/LATEST/search-index?q=%22Grafana%20Labs%22&forms=S-1
[^sidero-yardi]: https://www.siderolabs.com/blog/sidero-labs-joins-yardi
[^port-series-c]: https://www.port.io/blog/port-100m-series-c
[^dbta-flox]: https://www.dbta.com/Editorial/News-Flashes/Flox-Raises-25M-in-Funding-to-Address-Growing-AI-Complexity-for-Engineering-Teams-171643.aspx
[^docker-cloud-sandboxes]: https://www.docker.com/press-release/cloud-sandboxes-extending-secure-ai-agent-isolation-beyond-the-laptop/
[^reg-openinfra]: https://www.theregister.com/software/2025/03/12/openinfra-joins-the-linux-foundation/1008838
[^panw-chrono-close]: https://www.paloaltonetworks.com/company/press/2026/palo-alto-networks-completes-chronosphere-acquisition--unifying-observability-and-security-for-the-ai-era
[^upbound-v3]: https://www.globenewswire.com/news-release/2026/08/19/3347812/0/en/upbound-launches-platform-to-unify-cloud-and-ai-infrastructure-operations.html
[^cg-fork]: https://www.chainguard.dev/unchained/keeping-ingress-nginx-alive
[^linuxiac-coreteam]: https://linuxiac.com/nixpkgs-core-team-dissolves/
[^eso-releases]: https://github.com/external-secrets/external-secrets/releases
[^polar-profiles-alpha]: https://www.polarsignals.com/blog/posts/2026/03/26/opentelemetry-profiling-goes-alpha
[^temporal-secondary]: https://temporal.io/blog/temporal-raises-secondary-funding
[^dd-otel-news]: https://opensource.datadoghq.com/otel-news/2026/01/
