---
type: Event
title: Ingress NGINX repository archived
description: The upstream repository archive confirms the announced project retirement.
date: '2026-03-24'
year: 2026
area: networking
kind: retirement
signal: failure
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:19:14Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: repo
  resource: https://github.com/kubernetes/ingress-nginx
  title: Ingress NGINX repository archive banner
---

# Ingress NGINX repository archived

## What happened

GitHub records that the owner archived the community ingress-nginx repository on **March 24, 2026**; the repository is read-only.[^repo]

## Why it matters

This is confirmation of an actual lifecycle transition, separate from the November 2025 announcement. Existing deployed software does not stop executing when its upstream repository is archived, but operators need an explicit maintained path.

## Evidence boundary

The upstream archive does not establish the support status of every downstream fork or commercial distribution. This is not the retirement of all products using the NGINX name.

* [Original announcement](/events/2025-11-11-ingress.md)
* [Gateway lifecycle assessment](/ideas/networking/gateway-lifecycle.md)
* [2026 review](/years/2026.md)

[^repo]: [Ingress NGINX repository archive banner](https://github.com/kubernetes/ingress-nginx)
