---
type: System
title: BigQuery ML
description: "Google BigQuery's SQL extensions for training and running ML models (CREATE MODEL, ML.PREDICT), announced in July 2018. The most durable example of in-database ML: it found a lasting niche with SQL analysts for regression, classification, clustering and forecasting, and since 2023 also fronts Vertex AI/Gemini models from SQL."
resource: https://cloud.google.com/bigquery/docs/bqml-introduction
tags: [in-database-ml, bigquery, sql, google-cloud]
kind: cloud-service
first_release: 2018
org: "Google Cloud"
license: proprietary
outcome: stable
ideas: [ideas/ml-for-db/in-database-ml]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: blog
    resource: https://research.google/blog/machine-learning-in-google-bigquery/
    title: "Google Research blog: Machine Learning in Google BigQuery (2018-07-25)"
  - id: docs
    resource: https://cloud.google.com/bigquery/docs/bqml-introduction
    title: "Google Cloud: Introduction to ML in BigQuery"
  - id: tf-import
    resource: https://docs.cloud.google.com/bigquery/docs/reference/standard-sql/bigqueryml-syntax-create-tensorflow
    title: "Google Cloud: CREATE MODEL statement for importing TensorFlow models"
  - id: inference-engine
    resource: https://cloud.google.com/blog/products/data-analytics/introducing-bigquery-ml-inference-engine
    title: "Google Cloud blog: Introducing BigQuery ML inference engine"
---

# Summary

Google announced BigQuery ML on 25 July 2018 as "a set of simple SQL language extensions" so analysts could build and deploy models where the data already lives.[^blog] It reached GA in 2019. It grew from linear and logistic regression to k-means, boosted trees, deep neural networks, ARIMA-based time-series forecasting, contribution analysis, and import of TensorFlow, TensorFlow Lite, XGBoost and ONNX models.[^docs][^tf-import] The "inference engine" lets BigQuery call remote Vertex AI models, including LLMs, from SQL.[^inference-engine] Google publishes no usage numbers (unconfirmed adoption).

# Timeline

| Date | Event |
|---|---|
| 2018-07-25 | Announced (beta) |
| 2019 | General availability |
| 2019–2022 | More model types: clustering, boosted trees, DNNs, time series, model import |
| 2023 | Inference engine: remote models and imported models from SQL; LLM functions follow |

# What worked

- It met analysts where they work. One `CREATE MODEL` statement, with no data export and no infrastructure.
- Delegation: heavier training runs on Vertex AI behind the SQL surface. This kept BigQuery from having to be an ML framework.
- It survived and grew for eight years, unlike most in-database ML efforts.

# What didn't

- It did not move serious ML teams off Python/notebook workflows. Model choice, feature engineering and debugging are limited compared with scikit-learn or PyTorch.
- Since 2023 much of its visibility goes to generative-AI SQL functions, which competes with its original mission.

# Related

- Idea: [In-database ML](/ideas/ml-for-db/in-database-ml.md)
- Systems: [BigQuery](/systems/bigquery.md), [MADlib](/systems/madlib.md), [Snowflake Cortex](/systems/snowflake-cortex.md)
- Event: [BigQuery ML announced](/events/2018-07-bigquery-ml-announced.md)

[^blog]: Google Research blog.
[^docs]: Google Cloud docs.
[^tf-import]: Google Cloud docs.
[^inference-engine]: Google Cloud blog.
