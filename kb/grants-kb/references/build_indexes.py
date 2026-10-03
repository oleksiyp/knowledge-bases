#!/usr/bin/env python3
"""Generate OKF index.md files (spec §8) for the grants bundle from concept frontmatter.

Writes the root index (with okf_version), and indexes for calls/ (grouped by month),
funders/, categories/, guides/, references/ and programs/ (category list).
Per-category programs/<category>/index.md files are left as authored.

Usage: python3 references/build_indexes.py [bundle_root]
"""
import os
import sys
from collections import defaultdict

import yaml


def frontmatter(path):
    text = open(path, encoding="utf-8").read()
    if not text.startswith("---"):
        return {}
    end = text.find("\n---", 4)
    return yaml.safe_load(text[4:end]) or {}


def concepts(directory):
    out = []
    for name in sorted(os.listdir(directory)):
        p = os.path.join(directory, name)
        if name.endswith(".md") and name not in ("index.md", "log.md") and os.path.isfile(p):
            out.append((name, frontmatter(p)))
    return out


def entry(name, fm):
    desc = " ".join(str(fm.get("description", "")).split())
    return f"* [{fm.get('title') or name[:-3]}]({name}) - {desc}"


def write(path, sections, front=""):
    body = "\n\n".join(f"# {h}\n\n" + "\n".join(lines) for h, lines in sections if lines)
    open(path, "w", encoding="utf-8").write(front + body + "\n")


def main(root):
    j = lambda *p: os.path.join(root, *p)

    by_month = defaultdict(list)
    for n, fm in sorted(concepts(j("calls")), key=lambda x: str(x[1].get("date", "")), reverse=True):
        by_month[str(fm.get("date", ""))[:7] or "undated"].append(entry(n, fm))
    write(j("calls", "index.md"), [(f"Deadlines in {m}", lines) for m, lines in by_month.items()])

    write(j("funders", "index.md"), [("Funders", [entry(n, fm) for n, fm in concepts(j("funders"))])])
    write(j("categories", "index.md"), [("Category guides", [entry(n, fm) for n, fm in concepts(j("categories"))])])
    write(j("guides", "index.md"), [("Guides", [entry(n, fm) for n, fm in concepts(j("guides"))])])
    write(j("references", "index.md"), [("References", [entry(n, fm) for n, fm in concepts(j("references"))] + [
        "* [validate_okf.py](validate_okf.py) - OKF v0.2 conformance and link checker.",
        "* [build_indexes.py](build_indexes.py) - Regenerates index.md files.",
        "* [build_deadlines.py](build_deadlines.py) - Regenerates the deadline calendar guide.",
    ])])

    cats = []
    for d in sorted(os.listdir(j("programs"))):
        if os.path.isdir(j("programs", d)):
            guide = j("categories", f"{d}.md")
            fm = frontmatter(guide) if os.path.exists(guide) else {}
            cats.append(f"* [{fm.get('title', d)}]({d}/) - {len(concepts(j('programs', d)))} programs. {' '.join(str(fm.get('description', '')).split())}")
    write(j("programs", "index.md"), [("Grant programs by category", cats)])

    exec_fm = frontmatter(j("executive-summary.md"))
    write(j("index.md"), [
        ("Start here", [
            entry("executive-summary.md", exec_fm),
            "* [Which grants fit you](guides/start-here.md) - Best options for eight applicant profiles.",
            "* [Deadline calendar](guides/deadlines.md) - Every upcoming deadline, plus programs open at any time.",
            "* [What changed in 2025–26](guides/what-changed-2025-2026.md) - Closed, paused and new programs.",
        ]),
        ("Browse", [
            "* [Grant programs](programs/) - Programs by category, with eligibility, amounts, status and fit.",
            "* [Category guides](categories/) - Landscape and comparison tables per category.",
            "* [Funding calls](calls/) - Concrete deadlines, grouped by month.",
            "* [Funders](funders/) - Organizations behind the programs and their 2025–26 changes.",
            "* [Guides](guides/) - Cross-category guides.",
            "* [References](references/) - Methodology and tooling.",
        ]),
    ], front='---\nokf_version: "0.2"\n---\n\n')


if __name__ == "__main__":
    main(sys.argv[1] if len(sys.argv) > 1 else ".")
