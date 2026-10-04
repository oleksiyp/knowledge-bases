---
type: System
title: Ingress NGINX
description: A community ingress controller archived upstream in March 2026 after a retirement notice.
area: networking
kind: ingress-controller
outcome: retired
as_of: '2026-10-04'
status: stable
generated:
  by: codex/gpt-6
  at: '2026-10-04T10:11:46Z'
stale_after: '2027-01-04T00:00:00Z'
sources:
- id: source
  resource: https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/
  title: Ingress NGINX retirement announcement
- id: archive
  resource: https://github.com/kubernetes/ingress-nginx
  title: Ingress NGINX repository archive
---

# Ingress NGINX

A community ingress controller whose announced maintenance endpoint required migration planning.[^source]

## Role and outcome

The project notice specified maintenance ending in March 2026. GitHub records archival on March 24, 2026.[^archive]

## Operating boundary

This profile records the upstream lifecycle, not an independent audit of every downstream distribution. It is distinct from other NGINX-branded controllers.

The outcome label describes the reviewed project or product position, not a market-share ranking or an independent commercial audit.

## Related

* [Idea or case assessment](/ideas/networking/gateway-lifecycle.md)
* [Area review](/areas/networking.md)

[^source]: [Ingress NGINX retirement announcement](https://kubernetes.io/blog/2025/11/11/ingress-nginx-retirement/)
[^archive]: [Ingress NGINX repository archive](https://github.com/kubernetes/ingress-nginx)
