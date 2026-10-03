---
type: Runtime
title: Zend Engine (PHP runtime)
description: "PHP's reference runtime spent 2018–2026 refining the large PHP 7 speedup rather than repeating it. OPcache preloading, fibers and a JIT arrived. The JIT, rewritten on a new IR framework in 8.4, still has negligible effect on typical web requests and stays off by default. The most consequential runtime change was architectural: persistent application servers (FrankenPHP worker mode, Swoole, RoadRunner) challenging the shared-nothing request model."
tags: [zend-engine, php, opcache, jit, ir-framework, fibers, frankenphp, hhvm]
runtime_kind: interpreter
languages: [languages/php]
ideas: [ideas/runtime-performance/jit-for-dynamic-languages, ideas/concurrency/async-await-and-function-coloring, ideas/runtime-performance/startup-snapshotting]
trajectory: stable
steward: PHP internals / The PHP Foundation (Zend by Perforce a sponsor)
governance: community
era_momentum: { E1: flat, E2: up, E3: flat, E4: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: preload-rfc
    resource: https://wiki.php.net/rfc/preload
    title: "PHP RFC: Preloading (PHP 7.4)"
    author: org:php
  - id: jit-rfc
    resource: https://wiki.php.net/rfc/jit
    title: "PHP RFC: JIT (PHP 8.0)"
    author: org:php
  - id: phpwatch-jit
    resource: https://php.watch/articles/jit-in-depth
    title: "PHP.Watch: PHP JIT in Depth (tracing vs function JIT)"
  - id: stitcher-jit
    resource: https://stitcher.io/blog/jit-in-real-life-web-applications
    title: "stitcher.io: PHP 8 JIT performance in real-life web applications"
  - id: fibers-rfc
    resource: https://wiki.php.net/rfc/fibers
    title: "PHP RFC: Fibers (PHP 8.1)"
    author: org:php
  - id: jit-ir-rfc
    resource: https://wiki.php.net/rfc/jit-ir
    title: "PHP RFC: A new JIT implementation based on IR Framework"
    author: org:php
  - id: jit-defaults
    resource: https://php.watch/versions/8.4/opcache-jit-ini-default-changes
    title: "PHP.Watch: Opcache INI changes on how JIT is enabled (PHP 8.4)"
  - id: frankenphp
    resource: https://thephp.foundation/blog/2025/05/15/frankenphp/
    title: "The PHP Foundation: FrankenPHP Is Now Officially Supported (2025-05-15)"
    author: org:php-foundation
  - id: hhvm-end-php
    resource: https://hhvm.com/blog/2018/09/12/end-of-php-support-future-of-hack.html
    title: "HHVM blog: Ending PHP Support, and The Future Of Hack (2018-09-12)"
    author: org:meta
  - id: foundation-slashdot
    resource: https://developers.slashdot.org/story/21/11/27/0225217/addressing-bus-factor-php-gets-a-foundation
    title: "Slashdot: Addressing 'Bus Factor', PHP Gets a Foundation"
---

# Summary
The Zend Engine's defining performance event, PHP 7's "phpng" rewrite (2015), predates this period. The 2018–2026 story is about **what to do after the easy win**. In September 2018 Meta announced that HHVM would stop supporting PHP, which left Zend as the only serious PHP runtime.[^hhvm-end-php]

The major runtime additions:
- **OPcache preloading** (7.4, 2019).[^preload-rfc]
- **A JIT** (8.0, 2020), built by Dmitry Stogov with tracing and function modes on DynASM.[^jit-rfc][^phpwatch-jit]
- **Fibers** (8.1, 2021): stackful coroutines that let async libraries avoid colouring the call stack.[^fibers-rfc]
- **An IR-based JIT rewrite** (8.4, 2024), described as "a real optimizing compiler with IR similar to Java HotSpot's server compiler". It produced code 5–10% faster on benchmarks, did not change real-application speed, and compiled up to 4x more slowly on WordPress.[^jit-ir-rfc] JIT remains disabled by default; 8.4 only changed *how* it is disabled (`opcache.jit=disable`).[^jit-defaults]

The bigger shift is to **persistent workers**. FrankenPHP (Go + Caddy, with worker mode) moved into the PHP organisation with Foundation support in May 2025.[^frankenphp]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| pre-E1 | 2018-09-12 | HHVM announces end of PHP support; Hack goes its own way [^hhvm-end-php] | mixed |
| E1 | 2019-11 | PHP 7.4: OPcache preloading [^preload-rfc] | + |
| E2 | 2020-11-26 | PHP 8.0: tracing and function JIT [^jit-rfc] | mixed |
| E2 | 2021-11 | PHP 8.1: Fibers; PHP Foundation formed to fund core devs [^fibers-rfc][^foundation-slashdot] | + |
| E4 | 2024-11 | PHP 8.4: IR-framework JIT; JIT still off by default [^jit-ir-rfc][^jit-defaults] | mixed |
| E4 | 2025-05-15 | FrankenPHP officially supported by the PHP Foundation [^frankenphp] | + |

# Ideas it bet on
| Idea | Outcome |
|---|---|
| [JIT for dynamic languages](/ideas/runtime-performance/jit-for-dynamic-languages.md) | failed for web; useful for CPU-bound PHP (image processing, maths) |
| [Async/await vs coloring](/ideas/concurrency/async-await-and-function-coloring.md) | Fibers avoid colouring; adopted by async frameworks, not mainstream apps |
| [Startup snapshotting](/ideas/runtime-performance/startup-snapshotting.md) | preloading is a form of warm start; modest gains |

# What succeeded
- **OPcache and the PHP 7 legacy.** Bytecode caching plus PHP 7's data-structure redesign remain the reason PHP is "fast enough".
- **Fibers.** A minimal primitive that let libraries (AMPHP, ReactPHP, Revolt) build async without new syntax.[^fibers-rfc]
- **Persistent workers.** FrankenPHP's worker mode removes per-request bootstrap cost, which is where web PHP actually spends time.[^frankenphp]

# What failed or stalled
- **The JIT for web workloads.** Real Laravel and Symfony requests saw negligible or negative changes.[^stitcher-jit] The IR rewrite traded compile time for code quality that web requests barely use.[^jit-ir-rfc]
- **Maintainer concentration.** The runtime's deep internals depended on a few people, which is what triggered the Foundation.[^foundation-slashdot]

# By era
## E1
Preloading; HHVM 4.0 (Feb 2019) completes the split from PHP.
## E2
JIT and Fibers; the Foundation.
## E3
Foundation-funded maintenance; IR JIT development.
## E4
IR JIT ships (off by default); FrankenPHP adopted.

# Lessons
- In a shared-nothing, I/O-bound runtime, request bootstrap and data-structure layout matter more than a JIT.
- A JIT that stays off by default for six years has, in effect, failed its original goal, however good its engineering.

# Related
- [PHP](/languages/php.md) · [CRuby YJIT](/runtimes/cruby-yjit.md) · [CPython](/runtimes/cpython.md)
- [PHP 8.0 with JIT](/events/2020-11-php-8-0-jit.md) · [PHP Foundation formed](/events/2021-11-php-foundation-formed.md)

[^preload-rfc]: PHP RFC: Preloading — https://wiki.php.net/rfc/preload
[^jit-rfc]: PHP RFC: JIT — https://wiki.php.net/rfc/jit
[^phpwatch-jit]: PHP.Watch: PHP JIT in Depth — https://php.watch/articles/jit-in-depth
[^stitcher-jit]: stitcher.io: PHP 8 JIT performance in real-life web applications — https://stitcher.io/blog/jit-in-real-life-web-applications
[^fibers-rfc]: PHP RFC: Fibers — https://wiki.php.net/rfc/fibers
[^jit-ir-rfc]: PHP RFC: A new JIT implementation based on IR Framework — https://wiki.php.net/rfc/jit-ir
[^jit-defaults]: PHP.Watch: Opcache INI changes (PHP 8.4) — https://php.watch/versions/8.4/opcache-jit-ini-default-changes
[^frankenphp]: The PHP Foundation: FrankenPHP Is Now Officially Supported — https://thephp.foundation/blog/2025/05/15/frankenphp/
[^hhvm-end-php]: HHVM blog: Ending PHP Support, and The Future Of Hack — https://hhvm.com/blog/2018/09/12/end-of-php-support-future-of-hack.html
[^foundation-slashdot]: Slashdot: Addressing 'Bus Factor', PHP Gets a Foundation — https://developers.slashdot.org/story/21/11/27/0225217/addressing-bus-factor-php-gets-a-foundation
