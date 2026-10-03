---
type: Idea
title: Programmable, typed configuration languages
description: "Purpose-built languages (CUE, Dhall, Nickel, Pkl, KCL, Jsonnet, Starlark, HCL) to replace hand-written or text-templated YAML/JSON. 2018–2026 verdict: mixed. Starlark and HCL won inside their host tools, Pkl and CUE gained real traction and funding, Dhall stalled and Jsonnet faded, and YAML plus Helm templating stayed the de facto standard; Kubernetes itself chose a stricter YAML subset (KYAML) over a new language."
area: tooling-and-ecosystem
tags: [configuration, cue, dhall, nickel, pkl, kcl, jsonnet, starlark, hcl, yaml, kubernetes, infrastructure-as-code]
outcome: mixed
maturity_2026: adopted
origin_year: 2014
mainstream_year: null
languages: [languages/go, languages/kotlin, languages/swift, languages/haskell, languages/nix-language]
runtimes: []
related_ideas: [ideas/tooling-and-ecosystem/reproducible-builds-and-nix, ideas/tooling-and-ecosystem/integrated-toolchains, ideas/types/dependent-types-and-proof-assistants]
era_momentum: { E1: up, E2: flat, E3: up, E4: flat }
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
status: stable
sources:
  - id: pkl-intro
    resource: https://pkl-lang.org/blog/introducing-pkl.html
    title: "Pkl blog: Introducing Pkl, a programming language for configuration (2024-02-01)"
  - id: pkl-030
    resource: https://pkl-lang.org/main/current/release-notes/0.30.html
    title: "Pkl docs: Pkl 0.30 release notes (Nov 2025)"
  - id: nickel-10
    resource: https://www.tweag.io/blog/2023-05-17-nickel-1.0-release/
    title: "Tweag: Announcing Nickel 1.0 (2023-05-17)"
  - id: cue-014
    resource: https://github.com/cue-lang/cue/releases/tag/v0.14.0
    title: "GitHub: cue-lang/cue v0.14.0 release"
  - id: cue-labs
    resource: https://www.finsmes.com/2025/10/cue-labs-raises-over-10m-in-early-funding.html
    title: "FinSMEs: CUE Labs raises over $10M in early funding (Oct 2025)"
  - id: kcl-cncf
    resource: https://www.kcl-lang.io/blog/2023-09-19-kcl-joining-cncf-sandbox
    title: "KCL blog: KCL joining CNCF as a Sandbox project (2023-09)"
  - id: dhall-hackage
    resource: https://hackage.haskell.org/package/dhall
    title: "Hackage: dhall package (maintainers, upload history)"
  - id: dhall-discourse
    resource: https://discourse.haskell.org/t/config-languages-and-dhall/13948
    title: "Haskell Discourse: Config languages (and Dhall)"
  - id: jsonnet-rel
    resource: https://github.com/google/jsonnet/releases
    title: "GitHub: google/jsonnet releases (v0.21.0 May 2025, v0.22.0 Mar 2026)"
  - id: buck2
    resource: https://engineering.fb.com/2023/04/06/open-source/buck2-open-source-large-scale-build-system/
    title: "Meta Engineering: Build faster with Buck2 (2023-04-06)"
  - id: tc-ibm-hashi
    resource: https://techcrunch.com/2025/02/27/ibm-closes-6-4b-hashicorp-acquisition/
    title: "TechCrunch: IBM closes $6.4B HashiCorp acquisition (2025-02-27)"
  - id: spacelift-bsl
    resource: https://spacelift.io/blog/terraform-license-change
    title: "Spacelift: Terraform License Change (BSL) — impact"
  - id: k8s-134
    resource: https://kubernetes.io/blog/2025/08/27/kubernetes-v1-34-release/
    title: "Kubernetes blog: Kubernetes v1.34 release (KYAML alpha)"
  - id: kyaml-ref
    resource: https://www.kubernetes.io/docs/reference/encodings/kyaml/
    title: "Kubernetes docs: KYAML reference"
  - id: hn-helm
    resource: https://news.ycombinator.com/item?id=38642638
    title: "Hacker News: Pitfalls of Helm (discussion of text-templated YAML)"
  - id: gh-stars
    resource: https://github.com/apple/pkl
    title: "GitHub API star counts 2026-10-03: apple/pkl 11.5k, google/jsonnet 7.6k, cue-lang/cue 6.3k, nickel 3.0k, kcl 2.4k, dhall-haskell 1.0k"
---

# Summary
**Mixed: many good languages, no consensus winner, and YAML survived.** The 2018–2026 period produced or matured a full set of configuration languages: CUE (constraint unification, from Borg/GCL veteran Marcel van Lohuizen), Dhall (total, typed, guaranteed to terminate), Nickel 1.0 (May 2023, gradual typing plus contracts),[^nickel-10] KCL (CNCF Sandbox, Sept 2023),[^kcl-cncf] and Apple's **Pkl** (open-sourced 2024-02-01).[^pkl-intro] The winners were **languages attached to a tool people already had to use**: Starlark in Bazel and Meta's Buck2[^buck2] and HCL in Terraform. Among standalone languages, Pkl grew fastest (~11.5k GitHub stars, Swift/Go/Java/Kotlin bindings, a formatter in 0.30)[^pkl-030][^gh-stars] and CUE got a commercial backer (CUE Labs, $10M+ led by Sequoia, Oct 2025).[^cue-labs] Dhall stalled: its last release was January 2025 and community members call its maintenance "life support".[^dhall-hackage][^dhall-discourse] Jsonnet slowed to roughly one release every 1–2 years.[^jsonnet-rel] Kubernetes, the biggest YAML consumer, answered the "YAML problem" with **KYAML**, a stricter YAML subset (alpha in 1.34, beta in 1.35), not with a new language.[^k8s-134][^kyaml-ref]

# The idea
Configuration grows into programs: environments, overlays, defaults, validation. Text templating of YAML (Helm's Go templates, Jinja) breaks on indentation and has no types.[^hn-helm] General-purpose languages (Pulumi, CDK) give full power but no guarantees such as termination or hermeticity. Configuration languages aim for the middle: declarative, typed or constrained, composable, and side-effect free. Prior art: Google's GCL/BCL, Nix, Jsonnet (2014), HCL (2014).

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2018–2019 | CUE published as open source; Dhall reaches broad Kubernetes interest | + |
| E3 | 2022-06 | KCL open-sourced (Ant Group) [^kcl-cncf] | + |
| E3 | 2023-04-06 | Meta open-sources Buck2; Starlark becomes a standalone Rust crate [^buck2] | + |
| E3 | 2023-05-17 | Nickel 1.0 [^nickel-10] | + |
| E3 | 2023-08-10 | HashiCorp moves Terraform (HCL) to BSL; OpenTofu fork follows [^spacelift-bsl] | − |
| E3 | 2023-09 | KCL accepted into CNCF Sandbox [^kcl-cncf] | + |
| E3 | 2024-02-01 | Apple open-sources Pkl [^pkl-intro] | + |
| E4 | 2025-01 | Last dhall-haskell release to date (1.42.2) [^dhall-hackage] | − |
| E4 | 2025-02-27 | IBM closes HashiCorp acquisition [^tc-ibm-hashi] | mixed |
| E4 | 2025-08 | CUE v0.14: up to 10x faster evaluator in places, Kubernetes CRD support [^cue-014] | + |
| E4 | 2025-08-27 | Kubernetes 1.34 introduces KYAML [^k8s-134] | mixed |
| E4 | 2025-10 | CUE Labs exits stealth with $10M+ (Sequoia, OSS Capital) [^cue-labs] | + |
| E4 | 2025-11 | Pkl 0.30: formatter, pkl-binary for bindings [^pkl-030] | + |
| E4 | 2026-03 | Jsonnet v0.22.0, ~10 months after v0.21 (which came 2 years after v0.20) [^jsonnet-rel] | mixed |

# Where it succeeded
- **Embedded in a mandatory tool.** Starlark (Bazel, Buck2, Tilt) and HCL (Terraform/OpenTofu) are used daily by millions without anyone choosing a configuration language.[^buck2][^spacelift-bsl]
- **Pkl** combined corporate backing, IDE support and code generation for app languages, the best launch of any standalone config language.[^pkl-intro][^pkl-030]
- **CUE** found production users (company claims include Microsoft, Fastly, Elastic) and venture funding to build a control-plane product.[^cue-labs]

# Where it failed or stalled
- **Dhall** was elegant (total, typed, importable by hash) but too strange for operations teams. Development slowed to near-maintenance by 2025.[^dhall-hackage][^dhall-discourse]
- **Jsonnet** lost its momentum after ksonnet was abandoned. It survives through Grafana Tanka and alternative implementations, with infrequent upstream releases.[^jsonnet-rel]
- **No standard for Kubernetes.** Helm's text templating stayed dominant despite widespread complaints.[^hn-helm] The platform's own response was KYAML, a safer YAML.[^kyaml-ref]
- **Fragmentation.** Six or more serious options split a small market, and each needs editor, CI and language bindings to be worth adopting.[^gh-stars]

# Why
1. **Distribution beats design.** The languages that won came with a tool (Bazel, Terraform). Standalone languages must persuade a whole team to add a toolchain dependency for a file format.
2. **YAML is "good enough" plus switching costs.** Every cloud-native tool emits and accepts YAML. A config language must output YAML anyway, so it adds a layer rather than removing one.
3. **Competition from general-purpose languages.** Pulumi and CDK let teams use TypeScript or Python they already know, which squeezed the middle ground from above.
4. **Funding shapes outcomes.** Pkl (Apple) and CUE (CUE Labs) have paid teams. Dhall depended on volunteer time, and Jsonnet on Google's diminishing attention.
5. **Licensing shocks matter.** Terraform's BSL move showed that a config language owned by one vendor carries platform risk.[^spacelift-bsl]

# Lessons
- Ship a config language inside a tool people must use, or with first-class bindings for the application languages that consume its output.
- Strong guarantees (totality, unification) are not enough. Tooling, error messages and YAML round-tripping decide adoption.

# Related
- [Nix language](/languages/nix-language.md), [Reproducible builds and Nix](/ideas/tooling-and-ecosystem/reproducible-builds-and-nix.md)
- [Integrated toolchains](/ideas/tooling-and-ecosystem/integrated-toolchains.md), [Haskell](/languages/haskell.md)
- [Apple open-sources Pkl](/events/2024-02-apple-open-sources-pkl.md)

[^pkl-intro]: Introducing Pkl — https://pkl-lang.org/blog/introducing-pkl.html
[^pkl-030]: Pkl 0.30 release notes — https://pkl-lang.org/main/current/release-notes/0.30.html
[^nickel-10]: Announcing Nickel 1.0 — https://www.tweag.io/blog/2023-05-17-nickel-1.0-release/
[^cue-014]: CUE v0.14.0 — https://github.com/cue-lang/cue/releases/tag/v0.14.0
[^cue-labs]: CUE Labs raises over $10M — https://www.finsmes.com/2025/10/cue-labs-raises-over-10m-in-early-funding.html
[^kcl-cncf]: KCL joining CNCF Sandbox — https://www.kcl-lang.io/blog/2023-09-19-kcl-joining-cncf-sandbox
[^dhall-hackage]: Hackage dhall — https://hackage.haskell.org/package/dhall
[^dhall-discourse]: Config languages (and Dhall) — https://discourse.haskell.org/t/config-languages-and-dhall/13948
[^jsonnet-rel]: google/jsonnet releases — https://github.com/google/jsonnet/releases
[^buck2]: Build faster with Buck2 — https://engineering.fb.com/2023/04/06/open-source/buck2-open-source-large-scale-build-system/
[^tc-ibm-hashi]: IBM closes HashiCorp acquisition — https://techcrunch.com/2025/02/27/ibm-closes-6-4b-hashicorp-acquisition/
[^spacelift-bsl]: Terraform License Change — https://spacelift.io/blog/terraform-license-change
[^k8s-134]: Kubernetes v1.34 — https://kubernetes.io/blog/2025/08/27/kubernetes-v1-34-release/
[^kyaml-ref]: KYAML reference — https://www.kubernetes.io/docs/reference/encodings/kyaml/
[^hn-helm]: HN: Pitfalls of Helm — https://news.ycombinator.com/item?id=38642638
[^gh-stars]: GitHub API star counts, 2026-10-03 — https://github.com/apple/pkl
