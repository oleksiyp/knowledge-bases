---
type: Language
title: PHP
description: "PHP still runs about 70% of websites with a known server language. It modernised steadily from 2018 to 2026: types, enums, readonly, property hooks, a pipe operator. It also fixed its bus-factor crisis with the PHP Foundation (2021). Its headline runtime bet, the PHP 8 JIT, mostly failed for web workloads. Generics, the most-requested feature, are still out of reach. Usage shares are slowly shrinking."
tags: [php, web, dynamic, gradual-typing, jit, php-foundation, wordpress, laravel]
paradigms: [imperative, object-oriented, scripting]
typing: gradual
memory_model: rc
first_released: 1995
steward: PHP internals (RFC voting) / The PHP Foundation
governance: community
trajectory: declining
ideas: [ideas/types/gradual-typing-for-dynamic-languages, ideas/runtime-performance/jit-for-dynamic-languages, ideas/types/sum-types-and-pattern-matching]
runtimes: [runtimes/php-zend]
adoption_signals:
  tiobe_rank: { value: 14, as_of: 2026-09 }
  so_survey_usage_pct: { value: 18.9, as_of: 2025 }
  w3techs_server_side_share_pct: { value: 69.8, as_of: 2026-09 }
era_momentum: { E1: flat, E2: up, E3: flat, E4: flat }
status: stable
generated: { by: claude-code/claude-opus-5-5, at: 2026-10-03T00:00:00Z }
stale_after: 2027-04-03T00:00:00Z
sources:
  - id: tiobe-2026-09
    resource: https://www.tiobe.com/tiobe-index/
    title: "TIOBE Index, September 2026"
    author: org:tiobe
  - id: so-2025
    resource: https://survey.stackoverflow.co/2025/technology
    title: "Stack Overflow Developer Survey 2025: Technology"
    author: org:stack-overflow
  - id: w3techs
    resource: https://w3techs.com/technologies/details/pl-php
    title: "W3Techs: Usage statistics of PHP for websites (September 2026)"
  - id: php8-jit-rfc
    resource: https://wiki.php.net/rfc/jit
    title: "PHP RFC: JIT"
    author: org:php
  - id: stitcher-jit
    resource: https://stitcher.io/blog/jit-in-real-life-web-applications
    title: "stitcher.io (Brent Roose): PHP 8 JIT performance in real-life web applications"
  - id: jit-ir-rfc
    resource: https://wiki.php.net/rfc/jit-ir
    title: "PHP RFC: A new JIT implementation based on IR Framework (PHP 8.4)"
    author: org:php
  - id: jit-defaults
    resource: https://wiki.php.net/rfc/jit_config_defaults
    title: "PHP RFC: Change JIT configuration defaults (PHP 8.4)"
    author: org:php
  - id: foundation-slashdot
    resource: https://developers.slashdot.org/story/21/11/27/0225217/addressing-bus-factor-php-gets-a-foundation
    title: "Slashdot: Addressing 'Bus Factor', PHP Gets a Foundation (Nov 2021)"
  - id: generics-2024
    resource: https://thephp.foundation/blog/2024/08/19/state-of-generics-and-collections/
    title: "The PHP Foundation: State of Generics and Collections (2024-08-19)"
    author: org:php-foundation
  - id: frankenphp
    resource: https://thephp.foundation/blog/2025/05/15/frankenphp/
    title: "The PHP Foundation: FrankenPHP Is Now Officially Supported (2025-05-15)"
    author: org:php-foundation
  - id: php85
    resource: https://www.php.net/releases/8.5/en.php
    title: "PHP 8.5 Release Announcement (2025-11-20)"
    author: org:php
  - id: pfa-v2
    resource: https://wiki.php.net/rfc/partial_function_application_v2
    title: "PHP RFC: Partial Function Application (v2), targeted at PHP 8.6"
    author: org:php
  - id: hhvm-4
    resource: https://hhvm.com/blog/2019/02/11/hhvm-4.0.0.html
    title: "HHVM 4.0.0 (2019-02-11): no longer aims for PHP compatibility"
    author: org:meta
  - id: php84
    resource: https://www.php.net/releases/8.4/en.php
    title: "PHP 8.4 Release Announcement (property hooks, asymmetric visibility)"
    author: org:php
  - id: php81
    resource: https://www.php.net/releases/8.1/en.php
    title: "PHP 8.1 Release Announcement (enums, readonly, fibers)"
    author: org:php
  - id: php80
    resource: https://www.php.net/releases/8.0/en.php
    title: "PHP 8.0 Release Announcement (JIT, union types, attributes, match)"
    author: org:php
---

# Summary
PHP is the **quiet survivor** among dynamic languages. W3Techs still finds it on 69.8% of websites whose server-side language is known (September 2026), mainly because of WordPress and Laravel.[^w3techs] Among developers it is mid-table and slipping: 18.9% of Stack Overflow respondents in 2025, #14 on TIOBE in September 2026.[^so-2025][^tiobe-2026-09]

The **language** steadily became a gradually typed, modern object-oriented language:
- typed properties (7.4)
- union types, attributes and `match` (8.0)
- enums, readonly and fibers (8.1)
- property hooks (8.4)
- the pipe operator (8.5)
- partial function application (due in 8.6)

[^php80][^php81][^php84][^php85][^pfa-v2]

The **runtime** bet did not pay off. The 8.0 JIT gave large wins on synthetic benchmarks and little or nothing on WordPress, Laravel or Symfony. It is still off by default in 8.4, even after a full rewrite on an IR framework.[^stitcher-jit][^jit-ir-rfc][^jit-defaults] The biggest **governance** success was the PHP Foundation (November 2021). It was created when Nikita Popov's departure exposed a bus factor of two.[^foundation-slashdot]

# Timeline
| Era | Date | Event | Signal |
|---|---|---|---|
| E1 | 2019-02-11 | HHVM 4.0 drops PHP compatibility; Meta's Hack goes its own way [^hhvm-4] | mixed |
| E2 | 2020-11-26 | PHP 8.0: JIT, union types, attributes, named args, match [^php80][^php8-jit-rfc] | + |
| E2 | 2021-11-22 | The PHP Foundation launched by JetBrains, Automattic, Laravel and others [^foundation-slashdot] | + |
| E2 | 2021-11-25 | PHP 8.1: enums, readonly properties, fibers [^php81] | + |
| E4 | 2024-08-19 | Foundation publishes "State of Generics": reified generics remain unsolved [^generics-2024] | − |
| E4 | 2024-11-21 | PHP 8.4: property hooks, asymmetric visibility, new IR-based JIT (still off by default) [^php84][^jit-ir-rfc][^jit-defaults] | + |
| E4 | 2025-05-15 | FrankenPHP (Go/Caddy app server) moves under the PHP organisation [^frankenphp] | + |
| E4 | 2025-11-20 | PHP 8.5: pipe operator, URI extension, clone-with [^php85] | + |
| E4 | 2025-12 | Partial function application v2 RFC passes for PHP 8.6 [^pfa-v2] | + |

# Ideas it bet on
| Idea | Outcome for PHP |
|---|---|
| [Gradual typing](/ideas/types/gradual-typing-for-dynamic-languages.md) | succeeded: runtime-checked declarations plus PHPStan/Psalm; no generics |
| [JIT for dynamic languages](/ideas/runtime-performance/jit-for-dynamic-languages.md) | failed for web workloads; useful only for CPU-bound code |
| [Sum types and pattern matching](/ideas/types/sum-types-and-pattern-matching.md) | partial: enums and `match`, no ADTs |

# What succeeded
- **Steady modernisation by RFC.** Annual releases with clear deprecation paths moved most of the ecosystem to PHP 8.x.
- **The Foundation model.** About ten companies pooled roughly $300k a year at launch to pay core developers. That replaced dependence on two individuals (Stogov and Popov).[^foundation-slashdot]
- **Runtime-checked gradual types.** Unlike Python's erased hints, PHP type declarations are enforced at runtime. This made them trustworthy even without a static checker.

# What failed or stalled
- **The JIT.** Web requests spend most of their time in I/O and C extensions, so a bytecode JIT has little to accelerate. The tracing JIT sometimes made real applications slower.[^stitcher-jit] The 8.4 IR rewrite was 5–10% better on benchmarks, did not change real-app speed, and compiled up to 4x more slowly on WordPress.[^jit-ir-rfc]
- **Generics.** A decade of attempts ended in the 2024 conclusion that fully reified generics carry unresolved performance and complexity costs. Erased or static-analysis-only generics remain the practical route.[^generics-2024]
- **Hack/HHVM as PHP's future.** Meta's fork stopped targeting PHP in 2019. PHP 7's own speedups had removed HHVM's reason to exist outside Meta.[^hhvm-4]

# By era
## E1
PHP 7.x consolidated after the large PHP 7.0 speedup. HHVM split away and typed properties arrived.
## E2
The PHP 8 "big bang" (JIT, new syntax) shipped and the Foundation was formed.
## E3
Incremental releases (8.2, 8.3). The Foundation funded about ten developers and the IR JIT was developed.
## E4
Property hooks (8.4) and the pipe operator (8.5). FrankenPHP was adopted officially. Generics were still blocked.

# Lessons
- A JIT only helps when the bottleneck is bytecode execution. Profile the real workload before betting on one.
- Single-maintainer risk can be fixed with a modest, multi-company foundation; PHP is the model case.
- A huge installed base (WordPress) guarantees survival, not growth.

# Related
- [Zend Engine / PHP runtime](/runtimes/php-zend.md) · [PHP Foundation formed](/events/2021-11-php-foundation-formed.md) · [PHP 8.0 with JIT](/events/2020-11-php-8-0-jit.md)
- [Gradual typing for dynamic languages](/ideas/types/gradual-typing-for-dynamic-languages.md)

[^tiobe-2026-09]: TIOBE Index, September 2026 — https://www.tiobe.com/tiobe-index/
[^so-2025]: Stack Overflow Developer Survey 2025 — https://survey.stackoverflow.co/2025/technology
[^w3techs]: W3Techs: Usage statistics of PHP — https://w3techs.com/technologies/details/pl-php
[^php8-jit-rfc]: PHP RFC: JIT — https://wiki.php.net/rfc/jit
[^stitcher-jit]: stitcher.io: PHP 8 JIT performance in real-life web applications — https://stitcher.io/blog/jit-in-real-life-web-applications
[^jit-ir-rfc]: PHP RFC: A new JIT implementation based on IR Framework — https://wiki.php.net/rfc/jit-ir
[^jit-defaults]: PHP RFC: Change JIT configuration defaults — https://wiki.php.net/rfc/jit_config_defaults
[^foundation-slashdot]: Slashdot: Addressing 'Bus Factor', PHP Gets a Foundation — https://developers.slashdot.org/story/21/11/27/0225217/addressing-bus-factor-php-gets-a-foundation
[^generics-2024]: The PHP Foundation: State of Generics and Collections — https://thephp.foundation/blog/2024/08/19/state-of-generics-and-collections/
[^frankenphp]: The PHP Foundation: FrankenPHP Is Now Officially Supported — https://thephp.foundation/blog/2025/05/15/frankenphp/
[^php85]: PHP 8.5 Release Announcement — https://www.php.net/releases/8.5/en.php
[^pfa-v2]: PHP RFC: Partial Function Application (v2) — https://wiki.php.net/rfc/partial_function_application_v2
[^hhvm-4]: HHVM 4.0.0 — https://hhvm.com/blog/2019/02/11/hhvm-4.0.0.html
[^php84]: PHP 8.4 Release Announcement — https://www.php.net/releases/8.4/en.php
[^php81]: PHP 8.1 Release Announcement — https://www.php.net/releases/8.1/en.php
[^php80]: PHP 8.0 Release Announcement — https://www.php.net/releases/8.0/en.php
