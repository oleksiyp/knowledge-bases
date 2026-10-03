#!/usr/bin/env python3
"""Generate OKF index.md files (spec §8) from concept frontmatter.

Writes: index.md (root), domains/, trends/, periods/, events/ (grouped by window),
organizations/ (grouped by business verdict), projects/ (domain listing).
Per-domain projects/<domain>/index.md files are left as authored.

Usage: python3 references/build_indexes.py [bundle_root]
"""
import os
import sys
from collections import defaultdict

import yaml

WINDOWS = [
    ("W3", "W3 — last 3 months (2026-07-03 → 2026-10-03)"),
    ("W6", "W6 — 3–6 months ago (2026-04-03 → 2026-07-03)"),
    ("W9", "W9 — 6–9 months ago (2026-01-03 → 2026-04-03)"),
    ("W12", "W12 — 9–12 months ago (2025-10-03 → 2026-01-03)"),
    ("W24", "W24 — 1–2 years ago (2024-10-03 → 2025-10-03)"),
]


def frontmatter(path):
    text = open(path, encoding="utf-8").read()
    if not text.startswith("---\n"):
        return {}
    end = text.find("\n---", 4)
    return yaml.safe_load(text[4:end]) or {}


def concepts(directory):
    out = []
    for name in sorted(os.listdir(directory)):
        if name.endswith(".md") and name not in ("index.md", "log.md"):
            out.append((name, frontmatter(os.path.join(directory, name))))
    return out


def entry(name, fm):
    title = fm.get("title") or name[:-3]
    desc = " ".join(str(fm.get("description", "")).split())
    return f"* [{title}]({name}) - {desc}"


def write(path, sections):
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n\n".join(f"# {h}\n\n" + "\n".join(lines) for h, lines in sections if lines) + "\n")


def main(root):
    j = lambda *p: os.path.join(root, *p)

    for d, heading in [("domains", "Domain reviews"), ("trends", "Cross-domain trends")]:
        write(j(d, "index.md"), [(heading, [entry(n, fm) for n, fm in concepts(j(d))])])

    periods = sorted(concepts(j("periods")), key=lambda x: [w for w, _ in WINDOWS].index(x[1].get("window", "W24")))
    write(j("periods", "index.md"), [("Period reviews (newest first)", [entry(n, fm) for n, fm in periods])])

    by_window = defaultdict(list)
    for n, fm in sorted(concepts(j("events")), key=lambda x: str(x[1].get("date", "")), reverse=True):
        by_window[fm.get("window", "unknown")].append(entry(n, fm))
    write(j("events", "index.md"), [(label, by_window[w]) for w, label in WINDOWS])

    by_verdict = defaultdict(list)
    for n, fm in concepts(j("organizations")):
        by_verdict[str(fm.get("business_verdict", "unrated")).split()[0]].append(entry(n, fm))
    order = ["thriving", "growing", "stable", "acquired", "struggling", "failed"]
    keys = order + sorted(k for k in by_verdict if k not in order)
    write(j("organizations", "index.md"), [(f"Business verdict: {k}", by_verdict[k]) for k in keys])

    proj_lines = []
    for d in sorted(os.listdir(j("projects"))):
        if os.path.isdir(j("projects", d)):
            n = len(concepts(j("projects", d)))
            review = j("domains", f"{d}.md")
            desc = " ".join(str(frontmatter(review).get("description", "")).split()) if os.path.exists(review) else ""
            proj_lines.append(f"* [{d}]({d}/) - {n} concepts. {desc}")
    write(j("projects", "index.md"), [("Projects by domain", proj_lines)])

    write(j("references", "index.md"), [("References", [
        entry(n, fm) for n, fm in concepts(j("references"))] + [
        "* [validate_okf.py](validate_okf.py) - OKF v0.2 conformance and link checker.",
        "* [build_indexes.py](build_indexes.py) - Regenerates index.md files from frontmatter.",
    ])])

    exec_fm = frontmatter(j("executive-summary.md"))
    root_sections = [
        ("Start here", [
            entry("executive-summary.md", exec_fm),
            "* [Methodology](references/methodology.md) - Time windows, verdict scales, research process and limitations.",
        ]),
        ("Browse", [
            f"* [Domain reviews](domains/) - {len(concepts(j('domains')))} domain scorecards with by-window successes/failures and trends.",
            f"* [Trends](trends/) - {len(concepts(j('trends')))} cross-domain trends with evidence tables.",
            "* [Period reviews](periods/) - What happened in each window (W3, W6, W9, W12, W24) across all domains.",
            "* [Projects](projects/) - OSS project concepts with OSS and business verdicts, by domain.",
            "* [Organizations](organizations/) - Companies, foundations and labs, grouped by business verdict.",
            "* [Events](events/) - Dated events (deals, license changes, forks, incidents), grouped by window.",
            "* [References](references/) - Methodology and tooling.",
        ]),
    ]
    body = "\n\n".join(f"# {h}\n\n" + "\n".join(lines) for h, lines in root_sections)
    with open(j("index.md"), "w", encoding="utf-8") as f:
        f.write('---\nokf_version: "0.2"\n---\n\n' + body + "\n")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else ".")
