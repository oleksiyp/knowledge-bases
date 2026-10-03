#!/usr/bin/env python3
"""Regenerate guides/deadlines.md from Funding Call and Grant Program frontmatter.

Usage: python3 references/build_deadlines.py [bundle_root] [--today YYYY-MM-DD]
"""
import datetime
import os
import sys

import yaml


def frontmatter(path):
    text = open(path, encoding="utf-8").read()
    if not text.startswith("---"):
        return {}
    end = text.find("\n---", 4)
    return yaml.safe_load(text[4:end]) or {}


def concepts(root, sub):
    out = []
    for d, _, files in os.walk(os.path.join(root, sub)):
        for f in sorted(files):
            if f.endswith(".md") and f not in ("index.md", "log.md"):
                p = os.path.join(d, f)
                out.append(("/" + os.path.relpath(p, root), frontmatter(p)))
    return out


def regions(v):
    if isinstance(v, list):
        return ", ".join(str(x) for x in v)
    return str(v or "")


def cell(s, n=90):
    s = " ".join(str(s or "").split()).replace("|", "/")
    return s if len(s) <= n else s[: n - 1] + "…"


def main():
    args = [a for a in sys.argv[1:] if not a.startswith("--")]
    root = args[0] if args else "."
    today = datetime.date.today().isoformat()
    if "--today" in sys.argv:
        today = sys.argv[sys.argv.index("--today") + 1]

    calls = [(p, m) for p, m in concepts(root, "calls") if m.get("type") == "Funding Call"]
    upcoming = sorted((str(m.get("date")), p, m) for p, m in calls if str(m.get("date")) >= today)
    programs = [(p, m) for p, m in concepts(root, "programs") if m.get("type") == "Grant Program"]
    rolling = sorted(
        ((str(m.get("category")), str(m.get("title")), p, m) for p, m in programs if m.get("program_status") in ("rolling", "open")),
    )

    lines = [
        "---",
        "type: Guide",
        "title: Deadline calendar",
        f'description: "Every known upcoming deadline for software grants after {today}, plus programs that accept applications at any time."',
        "tags: [guide, deadlines, calendar]",
        "status: stable",
        f"generated: {{ by: process:build_deadlines, at: {today}T00:00:00Z }}",
        "stale_after: 2026-11-03T00:00:00Z",
        "---",
        "",
        "# How to read this",
        "",
        "This page is generated from the `calls/` and `programs/` concepts by `references/build_deadlines.py`.",
        "The Timeline view shows the same calls on a calendar. Confirm the details on the funder's page before you apply.",
        "",
        f"# Upcoming deadlines ({len(upcoming)})",
        "",
        "| Deadline | Call | Amount | Who (region) |",
        "|---|---|---|---|",
    ]
    for d, p, m in upcoming:
        lines.append(f"| {d} | [{cell(m.get('title'), 80)}]({p}) | {cell(m.get('amount_text'), 60)} | {cell(regions(m.get('region')), 30)} |")

    lines += ["", f"# Apply any time: rolling and open programs ({len(rolling)})", ""]
    current = None
    for cat, title, p, m in rolling:
        if cat != current:
            current = cat
            lines += ["", f"## {cat}", "", "| Program | Amount | Who | Status |", "|---|---|---|---|"]
        lines.append(
            f"| [{cell(title, 70)}]({p}) | {cell(m.get('amount_text'), 50)} | {cell(', '.join(m.get('applicant_types') or []), 40)} | {m.get('program_status')} |"
        )
    lines.append("")
    out = os.path.join(root, "guides", "deadlines.md")
    os.makedirs(os.path.dirname(out), exist_ok=True)
    open(out, "w", encoding="utf-8").write("\n".join(lines))
    print(f"wrote {out}: {len(upcoming)} upcoming calls, {len(rolling)} rolling/open programs")


if __name__ == "__main__":
    main()
