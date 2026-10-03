# Verdict: won

* [ARM servers (Graviton) for databases](arm-graviton-databases.md) - Run databases on cloud providers' own ARM CPUs for better price-performance. Won: AWS made Graviton the default recommendation for RDS, Aurora, ElastiCache and other managed databases, claiming 20–35% better price-performance per generation, and more than half of new AWS CPU capacity has been Graviton for three years running.
* [LSM-trees and the RocksDB monoculture](lsm-tree-evolution.md) - Log-structured merge trees became the default storage engine for distributed and write-heavy databases, with RocksDB as the shared component. Won: RocksDB sits under MyRocks, TiKV, YugabyteDB, Kafka Streams, Flink and many more; but the monoculture also produced forks (Pebble in Go for CockroachDB, Speedb, Titan) when users needed control RocksDB's owners would not give.

# Verdict: winning

* [io_uring and kernel-bypass I/O in databases](io-uring-kernel-bypass.md) - Replace synchronous read/write calls and the OS page cache with batched asynchronous I/O (io_uring) or full user-space drivers (SPDK) to keep up with NVMe. Winning: io_uring reached PostgreSQL 18, TigerBeetle and ScyllaDB; full kernel bypass with SPDK stayed niche because it gives up the OS, and io_uring's security record slowed its use in locked-down environments.
* [Rewriting databases in Rust (and Zig)](rust-database-rewrites.md) - Build new database engines, or rewrite existing ones, in memory-safe systems languages instead of C/C++/Go/Java. Winning: most new data systems since 2020 are Rust (InfluxDB 3, DataFusion, Materialize, RisingWave, GreptimeDB, Turso's SQLite rewrite, Neon's storage, Polars), with Zig for TigerBeetle; but full rewrites of existing products proved costly, as InfluxDB's third storage-engine rewrite showed.
* [NVMe-era storage engines: 'SSD is the new RAM' and the return of the buffer manager](ssd-optimized-buffer-managers.md) - Instead of pure in-memory databases, design engines whose buffer manager costs almost nothing when data is cached and which saturate NVMe arrays when it is not. Winning: LeanStore and Umbra proved it in research, CedarDB commercialized it, and PostgreSQL 18 started moving off the OS page cache, but most production engines still leave much of NVMe performance unused.

# Verdict: mixed

* [GPU-accelerated databases](gpu-databases.md) - Run SQL on GPUs for massive parallelism and memory bandwidth. Mostly failed as a standalone database business: MapD/OmniSci/HEAVY.AI was absorbed by Nvidia and abandoned, Voltron Data shut down in 2025, BlazingSQL died, while GPU acceleration survives as a plug-in (Spark RAPIDS, cuDF, Sirius) and in small vendors (Kinetica, SQream).

# Verdict: niche

* [JIT query compilation vs. vectorized execution](query-compilation-vs-vectorization.md) - Two ways to make analytical query execution CPU-efficient: compile each query to machine code (HyPer, Umbra) or interpret it over batches of values with precompiled kernels (MonetDB/X100 lineage: DuckDB, Velox, Photon, ClickHouse). Vectorization won the industry; compilation stayed niche because it is harder to build, debug and profile, and the speed difference is small.
* [RDMA, SmartNIC/DPU and FPGA offload for databases](rdma-smartnic-fpga-offload.md) - Use one-sided RDMA, programmable NICs and FPGAs to move data and filter it without host CPUs. Niche: it works inside hyperscaler and appliance stacks (Alibaba PolarDB, Oracle Exadata, Microsoft FaRM/A1, AWS Nitro) but stays invisible to users, and the most visible user-facing accelerator, Redshift AQUA, was folded away as a configurable feature within about a year of GA.

# Verdict: fading

* [Using mmap instead of a buffer manager](mmap-in-dbms.md) - Let the OS manage database pages via memory-mapped files instead of writing a buffer pool. Fading: easy to start with, but the CIDR 2022 paper by Crotty, Leis and Pavlo documented correctness and performance problems; MongoDB removed MMAPv1 in 2019, InfluxDB dropped mmap in its rewrite, and new engines avoid it, though LMDB-style designs persist for read-mostly workloads.

# Verdict: failed

* [Persistent memory (Optane) as a new tier for databases](persistent-memory-databases.md) - Byte-addressable, non-volatile memory on the DIMM bus would let databases skip the log-to-disk path and blur memory and storage. It failed: Intel wrote off Optane in 2022 after Micron quit 3D XPoint, because it was too slow to replace DRAM and too expensive to beat NAND flash.

# Verdict: too-early

* [CXL memory expansion and disaggregation for databases](cxl-memory-disaggregation.md) - Compute Express Link lets servers attach extra DRAM over PCIe and, eventually, share pooled memory across hosts, promising bigger buffer pools and a rack-scale shared-memory database. Too early: strong research interest since 2022 and first vendor prototypes (Alibaba PolarDB), but no mainstream database depends on CXL in 2026.
