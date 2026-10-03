#!/usr/bin/env python3
"""Generate OKF index.md files (spec §8) from concept frontmatter.

Writes: index.md (root), ideas/ (by verdict) and ideas/<area>/, systems/ (by outcome),
events/ and papers/ (by year), areas/, lessons/, years/, references/.

Usage: python3 references/build_indexes.py [bundle_root]
"""
import os
import sys
from collections import defaultdict

import yaml

VERDICTS = ["won", "winning", "mixed", "niche", "fading", "failed", "too-early"]
OUTCOMES = ["thriving", "growing", "stable", "acquired", "pivoted", "struggling", "dead"]


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


def grouped(items, key, order):
    groups = defaultdict(list)
    for item in items:
        groups[str(item[-1].get(key, "unrated")).split()[0]].append(item)
    return [k for k in order if k in groups] + sorted(k for k in groups if k not in order), groups


def main(root):
    j = lambda *p: os.path.join(root, *p)

    areas = sorted(d for d in os.listdir(j("ideas")) if os.path.isdir(j("ideas", d)))
    all_ideas = []
    for area in areas:
        items = concepts(j("ideas", area))
        all_ideas += [(area, n, fm) for n, fm in items]
        keys, groups = grouped([(n, fm) for n, fm in items], "verdict", VERDICTS)
        review = frontmatter(j("areas", f"{area}.md")) if os.path.exists(j("areas", f"{area}.md")) else {}
        head = [f"* [Area review: {review.get('title', area)}](/areas/{area}.md)"] if review else []
        write(j("ideas", area, "index.md"),
              [(f"{area}", head)] + [(f"Verdict: {k}", [entry(n, fm) for n, fm in groups[k]]) for k in keys])
    keys, groups = grouped(all_ideas, "verdict", VERDICTS)
    area_lines = [f"* [{a}]({a}/) - {len(concepts(j('ideas', a)))} ideas" for a in areas]
    write(j("ideas", "index.md"), [("Ideas by area", area_lines)] + [
        (f"Verdict: {k}", [entry(n, fm, f"{a}/") for a, n, fm in groups[k]]) for k in keys])

    keys, groups = grouped(concepts(j("systems")), "outcome", OUTCOMES)
    write(j("systems", "index.md"), [(f"Outcome: {k}", [entry(n, fm) for n, fm in groups[k]]) for k in keys])

    for d, title in [("events", "Events"), ("papers", "Papers")]:
        by_year = defaultdict(list)
        items = sorted(concepts(j(d)), key=lambda x: str(x[1].get("date", x[1].get("year", ""))), reverse=True)
        for n, fm in items:
            by_year[str(fm.get("year", str(fm.get("date", "unknown"))[:4]))].append(entry(n, fm))
        write(j(d, "index.md"), [(f"{title}: {y}", by_year[y]) for y in sorted(by_year, reverse=True)])

    write(j("areas", "index.md"), [("Area reviews", [entry(n, fm) for n, fm in concepts(j("areas"))])])
    write(j("lessons", "index.md"), [("Cross-cutting lessons", [entry(n, fm) for n, fm in concepts(j("lessons"))])])
    write(j("years", "index.md"), [("Year reviews", [entry(n, fm) for n, fm in concepts(j("years"))])])
    write(j("references", "index.md"), [("References", [entry(n, fm) for n, fm in concepts(j("references"))] + [
        "* [validate_okf.py](validate_okf.py) - OKF v0.2 conformance and link checker.",
        "* [build_indexes.py](build_indexes.py) - Regenerates index.md files from frontmatter.",
    ])])

    exec_fm = frontmatter(j("executive-summary.md")) if os.path.exists(j("executive-summary.md")) else {}
    n = lambda d: len(concepts(j(d)))
    root_sections = [
        ("Start here", ([entry("executive-summary.md", exec_fm)] if exec_fm else []) + [
            "* [Methodology](references/methodology.md) - Scope, verdict scales, research process and limitations.",
        ]),
        ("Browse", [
            f"* [Lessons](lessons/) - {n('lessons')} cross-cutting patterns: why database ideas win or fail.",
            f"* [Area reviews](areas/) - {n('areas')} area scorecards.",
            f"* [Ideas](ideas/) - {len(all_ideas)} ideas with verdicts (won, winning, mixed, niche, fading, failed, too-early).",
            f"* [Year reviews](years/) - {n('years')} years, 2018–2026.",
            f"* [Systems](systems/) - {n('systems')} products, projects and research systems, grouped by outcome.",
            f"* [Events](events/) - {n('events')} dated launches, deals, license changes, shutdowns.",
            f"* [Papers](papers/) - {n('papers')} landmark papers and what became of them.",
            "* [References](references/) - Methodology and tooling.",
        ]),
    ]
    root_sections = [(h, [l for l in lines if " - 0 " not in l]) for h, lines in root_sections]
    body = "\n\n".join(f"# {h}\n\n" + "\n".join(lines) for h, lines in root_sections)
    with open(j("index.md"), "w", encoding="utf-8") as f:
        f.write('---\nokf_version: "0.2"\n---\n\n' + body + "\n")


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else ".")
