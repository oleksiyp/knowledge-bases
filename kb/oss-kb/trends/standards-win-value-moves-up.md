---
type: Trend
title: Standards won, and value moved up a layer
description: "In many categories one neutral, permissively licensed standard won decisively: Postgres, Iceberg, OpenTelemetry, Kafka-as-protocol, vLLM/SGLang, MCP. Competition and money then moved to the next layer up (catalogs, control planes, backends, managed services). Single-vendor contenders in standards wars lost."
tags: [standards, postgres, iceberg, opentelemetry, kafka, vllm, mcp, cross-domain]
strength: strong
first_seen: W24
direction_by_window: { W3: up, W6: up, W9: up, W12: up, W24: up }
domains: [databases, data-engineering, cloud-native, ai-inference, ai-agents]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-01-03T00:00:00Z
sources:
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: technology"
  - id: pg-vllm
    resource: https://pytorch.org/blog/pytorch-foundation-welcomes-vllm/
    title: "PyTorch Foundation welcomes vLLM"
  - id: tgi-gh
    resource: https://github.com/huggingface/text-generation-inference
    title: TGI repository (archived)
  - id: prom3
    resource: https://prometheus.io/blog/2024/11/14/prometheus-3-0/
    title: "Prometheus 3.0 (OTLP support)"
---

# Summary

| Category | Winning standard | Losers or retreats | Where value moved |
|---|---|---|---|
| OLTP database | [PostgreSQL](/projects/databases/postgresql.md), used by 55.6% of developers[^so-2025] | [MySQL](/projects/databases/mysql.md) neglected by its owner; [Gel](/projects/databases/gel.md) | Managed and agent-native Postgres (Supabase, Neon/Lakebase, PlanetScale) |
| Table format | [Apache Iceberg](/projects/data-engineering/apache-iceberg.md) | [Hudi](/projects/data-engineering/apache-hudi.md), [XTable](/projects/data-engineering/apache-xtable.md), Delta as a cross-vendor standard | Catalogs: [Polaris](/projects/data-engineering/apache-polaris.md), [Unity Catalog](/projects/data-engineering/unity-catalog.md), [Gravitino](/projects/data-engineering/apache-gravitino.md) |
| Telemetry | [OpenTelemetry](/projects/cloud-native/opentelemetry.md); Prometheus 3 adopted OTLP[^prom3] | Proprietary agents | Storage backends (Grafana, Chronosphere, SigNoz) |
| Streaming | [Kafka](/projects/data-engineering/apache-kafka.md) as a protocol | Confluent's independence (sold to IBM) | Diskless and object-storage implementations (AutoMQ, WarpStream, KIP-1150) |
| LLM serving | [vLLM](/projects/ai-inference/vllm.md)[^pg-vllm], [SGLang](/projects/ai-inference/sglang.md) | [TGI](/projects/ai-inference/text-generation-inference.md), archived[^tgi-gh] | Control planes ([llm-d](/projects/ai-inference/llm-d.md), [Dynamo](/projects/ai-inference/nvidia-dynamo.md)) and inference clouds (Fireworks, Together) |
| Agent tooling | [MCP](/projects/ai-agents/model-context-protocol.md) | Bespoke plugin APIs | Platforms and observability (LangSmith, Composio) |
| Ingress | [Gateway API](/projects/cloud-native/gateway-api.md) | [ingress-nginx](/projects/cloud-native/ingress-nginx.md), retired | Implementations (Envoy Gateway, Cilium, Istio) |
| Local LLM engine | [llama.cpp](/projects/ai-inference/llama-cpp.md) | — | UX wrappers ([Ollama](/projects/ai-inference/ollama.md), LM Studio) |

# Pattern

1. A neutral, permissively licensed project with many vendors behind it beats single-vendor alternatives, even technically strong ones.
2. Once a standard wins, the engine authors rarely capture most of the value. The operators and the next layer up do: Fireworks was reportedly valued at $17.5B versus Inferact's $800M seed, and Ollama raised $88M while ggml.ai was acqui-hired.
3. Incumbent products that **absorb** the new standard survive: Prometheus adopted OTLP, and Jaeger v2 was rebuilt on the OTel Collector.

# Related

- [Foundations as insurance](/trends/foundations-as-insurance.md)
- [Domain reviews: data engineering](/domains/data-engineering.md), [AI inference](/domains/ai-inference.md), [cloud native](/domains/cloud-native.md)

[^so-2025]: Stack Overflow survey.
[^pg-vllm]: PyTorch blog.
[^tgi-gh]: GitHub.
[^prom3]: Prometheus blog.
