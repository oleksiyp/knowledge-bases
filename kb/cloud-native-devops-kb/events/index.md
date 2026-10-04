# 2021

* [AWS US-EAST-1 service event](/events/2021-12-07-aws.md) - Availability of recovery APIs deserves separate testing from already-running workloads.
* [Log4j vulnerability response](/events/2021-12-log4j.md) - Dependency exposure must be mapped to deployed artifacts; package inventory is only the start of remediation. Month precision avoids conflating initial discovery, disclosure and successive fixes.

# 2022

* [Atlassian unintended site deletion](/events/2022-04-05-atlassian.md) - The failure concerned both destructive scope and restoration capacity. See the case study for evidence limits.
* [SPIFFE and SPIRE graduate](/events/2022-09-20-spiffe.md) - This is a project-maturity milestone for workload identity, not proof that every federation policy is correct.
* [Kueue introduced](/events/2022-10-04-kueue.md) - Admission and quota management address a different problem from scheduling individual Pods.
* [Sigstore signing infrastructure reaches GA](/events/2022-10-25-sigstore.md) - Mature signing infrastructure makes verification easier to build; signatures still need a consumer policy.
* [Flux graduation announced](/events/2022-11-30-flux.md) - Project maturity and governance are evidence of durability, not a controlled measure of deployment outcomes.
* [Argo graduation announced](/events/2022-12-06-argo.md) - The ecosystem had matured; individual deployments still needed health, scaling and recovery design.

# 2023

* [Spotify Backstage: favorable associations without a randomized counterfactual — account published](/events/2023-03-30-spotify-backstage-account.md) - Spotify measured favorable developer outcomes, with explicit limitations that constrain causal ROI claims.
* [SLSA 1.0 published](/events/2023-04-19-slsa.md) - Build provenance is a defined security capability with a limited scope; it is not a guarantee of benign source.
* [HashiCorp announces BSL transition](/events/2023-08-10-hashicorp.md) - The event changed governance and ecosystem assumptions. It did not show that declarative infrastructure stopped working.
* [Cilium graduates](/events/2023-10-11-cilium.md) - An eBPF-based networking ecosystem reached a maturity milestone; performance remains workload-specific.

# 2024

* [OpenTofu reaches GA](/events/2024-01-10-opentofu.md) - An alternative stewardship path became usable. Compatibility and migration still require testing.
* [Discord: remote development improved after changing the substrate — account published](/events/2024-02-22-discord-coder-account.md) - A successful cloud-workspace migration included rejecting an initially attractive container-based implementation.
* [Falco graduates](/events/2024-02-29-falco.md) - Runtime detection matured as a project; alert quality and response effectiveness require separate evidence.
* [Weaveworks ceases commercial operations](/events/2024-02-weaveworks.md) - This separates sponsor failure from the survival of the open-source project. Month precision reflects the cited account.
* [XZ malicious releases disclosed](/events/2024-03-29-xz.md) - Do not convert package presence into a claim of exploitation everywhere; the trust-chain lesson is broader than the affected versions.
* [ValidatingAdmissionPolicy GA explained](/events/2024-04-24-admission.md) - This date is the explanatory blog publication. Policy availability and effective policy design are distinct.
* [Zalando: stateful autoscaling stalled across overlapping control loops — account published](/events/2024-06-21-zalando-stateful-autoscaling-account.md) - A scheduled scaling failure reveals why declarative state still needs interruptible reconciliation and cleanup.
* [Karpenter 1.0 released](/events/2024-08-14-karpenter.md) - Provisioning maturity does not remove the need for accurate workload requests and disruption constraints.
* [Gitpod explains leaving Kubernetes](/events/2024-10-31-gitpod.md) - This is a counterexample to universal Kubernetes fit, not a conclusion about all application hosting.
* [Istio ambient reaches GA](/events/2024-11-07-ambient.md) - The architecture reduces some proxy coupling while preserving the need for identity and traffic-policy operations.
* [Prometheus 3.0 released](/events/2024-11-14-prometheus.md) - Do not backdate later stability levels: native histograms were experimental at this launch.
* [Lambda SnapStart expands beyond Java](/events/2024-11-18-snapstart.md) - Initialization improvements expand suitability; application compatibility and full latency still need testing.

# 2025

* [tj-actions CI dependency compromised](/events/2025-03-tj-actions.md) - Mutable dependencies inside a trusted pipeline are a real trust boundary. Repository usage counts are not confirmed-compromise counts.
* [Cloud Run GPU general availability](/events/2025-04-07-cloud-run-gpu.md) - The release date differs from a later June explanatory blog; managed GPU execution still has service constraints.
* [Oso: infrastructure migration benefited from code reuse and traffic control — account published](/events/2025-05-05-oso-pulumi-account.md) - A difficult infrastructure migration provides a positive counterexample to category-wide pessimism about language-based IaC.
* [Cloudflare Workers KV dependency outage](/events/2025-06-12-kv.md) - A distributed service can still depend on a concentrated backend.
* [Crossplane 2.0 released](/events/2025-08-12-crossplane.md) - The control-plane abstraction became more capable; internal API lifecycle ownership remained necessary.
* [Gitpod becomes Ona](/events/2025-09-02-ona.md) - Repositioning is a business-strategy event. It does not independently establish user productivity or business failure.
* [Ingress NGINX retirement announced](/events/2025-11-11-ingress.md) - This is the announcement date, not a claim that deployed binaries stopped running that day.
* [Akamai acquires Fermyon](/events/2025-12-01-fermyon.md) - A completed transaction is stronger evidence than an acquisition rumor, but not evidence of category-wide success or failure.
* [CDK for Terraform archived](/events/2025-12-10-cdktf.md) - This is a specific product failure; other general-purpose-language infrastructure approaches need their own evidence.

# 2026

* [METR revises its productivity experiment approach](/events/2026-02-24-metr.md) - The update limits use of both an old slowdown headline and a precise new speedup claim.
* [Ingress NGINX repository archived](/events/2026-03-24-ingress-archived.md) - The upstream repository archive confirms the announced project retirement.
* [Kubernetes 1.36 makes Pod user namespaces stable](/events/2026-04-22-kubernetes-isolation.md) - A concrete isolation capability matured without making all tenancy risks disappear.
* [OpenTelemetry graduates](/events/2026-05-21-otel.md) - Instrumentation standardization reached a maturity milestone; operational and backend portability remain separate questions.
* [Zalando: a routing optimization succeeded while zone affinity remained unresolved — account published](/events/2026-06-23-zalando-routing-account.md) - One production account separates realized routing gains from an unfinished locality-cost hypothesis.
* [Michelin: successful CNI consolidation with a selective mesh strategy — account published](/events/2026-07-14-michelin-cilium-account.md) - A fleet migration supports targeted networking consolidation while a prior mesh deployment had little internal uptake.
* [OpenCost inference accounting: allocation and active usage answer different questions — account published](/events/2026-08-05-opencost-inference-account.md) - A concrete cost-accounting implementation distinguishes model availability cost from active inference work.
