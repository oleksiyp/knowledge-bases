---
type: Event
title: "Google announces BigQuery ML: train models with SQL"
description: "On 25 July 2018 Google announced BigQuery ML, SQL extensions (CREATE MODEL, ML.PREDICT) to train and run models inside the BigQuery warehouse, the highest-profile in-database ML launch of the period."
date: 2018-07-25
year: 2018
kind: launch
signal: positive
ideas: [ideas/ml-for-db/in-database-ml]
systems: [systems/bigquery-ml, systems/bigquery]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: blog
    resource: https://research.google/blog/machine-learning-in-google-bigquery/
    title: "Google Research blog: Machine Learning in Google BigQuery (2018-07-25)"
  - id: redshift-ml
    resource: https://aws.amazon.com/about-aws/whats-new/2021/05/aws-announces-general-availability-of-amazon-redshift-ml
    title: "AWS: General availability of Amazon Redshift ML (2021-05-27)"
---

# What happened

Google introduced BigQuery ML as "a set of simple SQL language extensions" so that analysts could build models such as sales forecasts and customer segmentations "right at the source, where they already store their data".[^blog] It launched in beta with linear and logistic regression and reached GA in 2019.

# Why it matters

It set the template for warehouse-native ML. Amazon followed with Redshift ML (GA May 2021), which hands training to SageMaker Autopilot behind SQL.[^redshift-ml] Unlike library-style in-database ML (MADlib), it survived because it targets analysts and delegates heavy training to managed ML services. It did not replace Python for ML engineers.

# Related

- [BigQuery ML](/systems/bigquery-ml.md), [BigQuery](/systems/bigquery.md)
- [In-database ML](/ideas/ml-for-db/in-database-ml.md)

[^blog]: Google Research blog.
[^redshift-ml]: AWS What's New.
