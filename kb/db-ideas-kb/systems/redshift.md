---
type: System
title: Amazon Redshift
description: "AWS's cloud warehouse (2012, from ParAccel). It caught up with the separated storage/compute model via RA3 (2019) and Serverless (GA 2022) and pushed 'zero-ETL' from Aurora. It remains large through AWS distribution but lost mindshare to Snowflake and Databricks."
resource: https://aws.amazon.com/redshift/
tags: [data-warehouse, aws, serverless, zero-etl]
kind: cloud-service
first_release: 2012
org: "Amazon Web Services"
outcome: stable
ideas: [ideas/analytics-lakehouse/cloud-data-warehouses, ideas/analytics-lakehouse/lakehouse]
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T12:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: redshift-serverless
    resource: https://www.infoq.com/news/2022/07/amazon-redshift-serverless/
    title: "InfoQ: Amazon Redshift Serverless generally available (July 2022)"
  - id: zero-etl
    resource: https://aws.amazon.com/about-aws/whats-new/2023/11/aws-general-availability-amazon-aurora-mysql-zero-etl-integration-redshift/
    title: "AWS: Aurora MySQL zero-ETL integration with Redshift GA (Nov 2023)"
  - id: s3-tables
    resource: https://siliconangle.com/2024/12/03/aws-expands-amazon-s3-features-support-apache-iceberg-metadata-management/
    title: "SiliconANGLE: AWS S3 Tables (2024-12-03)"
  - id: reg-aws-duck
    resource: https://www.theregister.com/databases/2026/09/01/aws-duckdb-will-provide-connective-tissue-across-the-data-estate/5293304
    title: "The Register: AWS — DuckDB will provide 'connective tissue' across the data estate (2026-09-01)"
---

# Summary

Redshift was the first widely adopted cloud warehouse, but it started as a shared-nothing MPP cluster with storage coupled to nodes. During 2018–2026 AWS rebuilt it toward the Snowflake model. RA3 nodes with Redshift Managed Storage (2019) separated storage and compute. Redshift Serverless went GA on 2022-07-12[^redshift-serverless]. "Zero-ETL" integrations replicate Aurora and RDS data into Redshift automatically (Aurora MySQL GA Nov 2023)[^zero-etl]. AWS's analytics strategy has since spread across Athena, EMR, S3 Tables (Iceberg in S3, Dec 2024)[^s3-tables] and, from 2026, DuckDB after the DuckLabs acquisition[^reg-aws-duck]. Redshift is one engine among several rather than the centre. Its AQUA hardware cache is covered under hardware-engines.

# Timeline

| Year | Event |
|---|---|
| 2019 | RA3 nodes with managed storage; AQUA announced |
| 2022 | Redshift Serverless GA[^redshift-serverless] |
| 2023 | Aurora MySQL zero-ETL to Redshift GA[^zero-etl] |
| 2024 | S3 Tables shifts AWS lakehouse focus to Iceberg in S3[^s3-tables] |
| 2026 | AWS acquires DuckLabs; positions DuckDB across its data services[^reg-aws-duck] |

# What worked

- AWS distribution and integration (IAM, S3, Aurora zero-ETL) kept a large installed base.
- It closed the architectural gap with Snowflake (RA3, Serverless).

# What didn't

- It lagged for years on elasticity and ease of use, which let Snowflake win many AWS customers on AWS's own cloud.
- AWS's sprawl of analytics services (Redshift, Athena, EMR, Glue, S3 Tables) blurs Redshift's role.

# Related

- [Cloud data warehouses](/ideas/analytics-lakehouse/cloud-data-warehouses.md)
- [AWS AQUA](/systems/aws-aqua.md) · [Aurora](/systems/aurora.md) · [Snowflake](/systems/snowflake.md) · [S3](/systems/s3.md)
