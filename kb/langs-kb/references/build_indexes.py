#!/usr/bin/env python3
"""Generate OKF index.md files (spec §8) from concept frontmatter.

Writes: index.md (root), languages/ and runtimes/ (grouped by trajectory), ideas/ and
ideas/<area>/ (grouped by outcome), events/ (grouped by era), areas/, themes/, eras/,
lessons/, references/.

Usage: python3 references/build_indexes.py [bundle_root]
"""
import os
import sys
from collections import defaultdict

import yaml

ERAS = [
    ("E4", "E4 — 2024-10 → 2026-10"),
    ("E3", "E3 — 2022-10 → 2024-10"),
    ("E2", "E2 — 2020-10 → 2022-10"),
    ("E1", "E1 — 2018-10 → 2020-10"),
]
TRAJECTORIES = ["rising", "growing", "stable", "niche", "stalled", "declining", "dead"]
OUTCOMES = ["succeeded", "succeeding", "mixed", "unproven", "stalled", "failed", "abandoned"]
AREAS = [
    ("memory-safety", "Memory safety"),
    ("types", "Types and type systems"),
    ("concurrency", "Concurrency"),
    ("runtime-performance", "Runtime performance"),
    ("platforms-and-portability", "Platforms and portability"),
    ("metaprogramming", "Metaprogramming"),
    ("tooling-and-ecosystem", "Tooling and ecosystem"),
    ("ai-and-languages", "AI and languages"),
]


def frontmatter(path):
    text = open(path, encoding="utf-8").read()
    if not text.startswith("---\n"):
        return {}
    end = text.find("\n---", 4)
    return yaml.safe_load(text[4:end]) or {}


def concepts(directory):
    out = []
    if not os.path.isdir(directory):
        return out
    for name in sorted(os.listdir(directory)):
        if name.endswith(".md") and name not in ("index.md", "log.md"):
            out.append((name, frontmatter(os.path.join(directory, name))))
    return out


def entry(name, fm, prefix=""):
    title = fm.get("title") or name[:-3]
    desc = " ".join(str(fm.get("description", "")).split())
    return f"* [{title}]({prefix}{name}) - {desc}"


def write(path, sections):
    if not any(lines for _, lines in sections):
        if os.path.exists(path):
            os.remove(path)
        return
    with open(path, "w", encoding="utf-8") as f:
        f.write("\n\n".join(f"# {h}\n\n" + "\n".join(lines) for h, lines in sections if lines) + "\n")


def grouped(items, key, order, label):
    groups = defaultdict(list)
    for n, fm in items:
        groups[str(fm.get(key, "unrated")).split()[0]].append(entry(n, fm))
    keys = order + sorted(k for k in groups if k not in order)
    return [(label(k), groups[k]) for k in keys]


def main(root):
    j = lambda *p: os.path.join(root, *p)

    for d in ("languages", "runtimes"):
        write(j(d, "index.md"), grouped(concepts(j(d)), "trajectory", TRAJECTORIES,
                                        lambda k: f"Trajectory: {k}"))

    all_ideas = []
    idea_lines = []
    for area, label in AREAS:
        items = concepts(j("ideas", area))
        if not items:
            continue
        all_ideas += items
        write(j("ideas", area, "index.md"), grouped(items, "outcome", OUTCOMES,
                                                    lambda k: f"Outcome: {k}"))
        counts = defaultdict(int)
        for _, fm in items:
            counts[str(fm.get("outcome", "unrated"))] += 1
        mix = ", ".join(f"{counts[o]} {o}" for o in OUTCOMES if counts[o])
        review = j("areas", f"{area}.md")
        link = f" Review: [{label}](/areas/{area}.md)." if os.path.exists(review) else ""
        idea_lines.append(f"* [{label}]({area}/) - {len(items)} ideas ({mix}).{link}")
    write(j("ideas", "index.md"), [("Ideas by area", idea_lines)])

    by_era = defaultdict(list)
    for n, fm in sorted(concepts(j("events")), key=lambda x: str(x[1].get("date", "")), reverse=True):
        by_era[fm.get("era", "unknown")].append(entry(n, fm))
    write(j("events", "index.md"), [(label, by_era[e]) for e, label in ERAS])

    write(j("areas", "index.md"), [("Area reviews", [entry(n, fm) for n, fm in concepts(j("areas"))])])
    write(j("themes", "index.md"), [("Cross-cutting themes", [entry(n, fm) for n, fm in concepts(j("themes"))])])
    write(j("lessons", "index.md"), [("Lessons: why language ideas win or lose",
                                      [entry(n, fm) for n, fm in concepts(j("lessons"))])])
    eras = sorted(concepts(j("eras")), key=lambda x: str(x[1].get("era", "")), reverse=True)
    write(j("eras", "index.md"), [("Era reviews (newest first)", [entry(n, fm) for n, fm in eras])])

    write(j("references", "index.md"), [("References", [
        entry(n, fm) for n, fm in concepts(j("references"))] + [
        "* [validate_okf.py](validate_okf.py) - OKF v0.2 conformance and link checker.",
        "* [build_indexes.py](build_indexes.py) - Regenerates index.md files from frontmatter.",
    ])])

    n = lambda d: len(concepts(j(d)))
    exec_fm = frontmatter(j("executive-summary.md")) if os.path.exists(j("executive-summary.md")) else {}
    root_sections = [
        ("Start here", [
            entry("executive-summary.md", exec_fm),
            "* [Methodology](references/methodology.md) - Eras, verdict scales, research process and limitations.",
        ]),
        ("Browse", [
            f"* [Lessons](lessons/) - {n('lessons')} patterns that explain why language and runtime ideas win or lose.",
            f"* [Themes](themes/) - {n('themes')} cross-cutting themes of 2018–2026 with evidence tables.",
            f"* [Area reviews](areas/) - {n('areas')} scorecards, one per idea area.",
            f"* [Ideas](ideas/) - {len(all_ideas)} language and runtime ideas with outcomes, by area.",
            f"* [Languages](languages/) - {n('languages')} languages, grouped by trajectory.",
            f"* [Runtimes](runtimes/) - {n('runtimes')} VMs, JS/Wasm runtimes and compiler backends, grouped by trajectory.",
            f"* [Era reviews](eras/) - What happened in each two-year era (E1–E4).",
            f"* [Events](events/) - {n('events')} dated releases, proposal decisions, shutdowns and policy moves, by era.",
            "* [References](references/) - Methodology and tooling.",
        ]),
    ]
    browse = root_sections[1][1]
    keep = {"lessons": n("lessons"), "themes": n("themes"), "areas": n("areas"), "eras": n("eras")}
    root_sections[1] = ("Browse", [l for l in browse if not any(f"]({d}/)" in l and c == 0 for d, c in keep.items())])
    body = "\n\n".join(f"# {h}\n\n" + "\n".join(lines) for h, lines in root_sections)
    with open(j("index.md"), "w", encoding="utf-8") as f:
        f.write('---\nokf_version: "0.2"\n---\n\n' + body + "\n")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else ".")
