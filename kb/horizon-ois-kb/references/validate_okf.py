#!/usr/bin/env python3
"""OKF v0.2 conformance check for this bundle (spec §11) plus soft link checks.

Usage: python3 references/validate_okf.py [bundle_root]
"""
import os
import re
import sys
from collections import Counter

import yaml

RESERVED = {"index.md", "log.md"}
LINK_RE = re.compile(r"\]\((/[^)#\s]+\.md)(?:#[^)]*)?\)")
FOOTNOTE_REF_RE = re.compile(r"\[\^([^\]]+)\](?!:)")


def split_frontmatter(text):
    if not text.startswith("---\n"):
        return None, text
    end = text.find("\n---", 4)
    if end == -1:
        return None, text
    return text[4:end], text[end + 4 :]


def main(root):
    errors, warnings = [], []
    types = Counter()
    concepts = 0
    for dirpath, dirnames, filenames in os.walk(root):
        dirnames[:] = [d for d in dirnames if not d.startswith(".")]
        for name in filenames:
            if not name.endswith(".md"):
                continue
            path = os.path.join(dirpath, name)
            rel = os.path.relpath(path, root)
            text = open(path, encoding="utf-8").read()
            fm_text, body = split_frontmatter(text)
            if name in RESERVED:
                if fm_text is not None and not (rel == "index.md"):
                    errors.append(f"{rel}: reserved file must not carry frontmatter")
                continue
            concepts += 1
            if fm_text is None:
                errors.append(f"{rel}: missing frontmatter")
                continue
            try:
                fm = yaml.safe_load(fm_text) or {}
            except yaml.YAMLError as e:
                errors.append(f"{rel}: YAML error: {str(e).splitlines()[0]}")
                continue
            if not isinstance(fm, dict) or not fm.get("type"):
                errors.append(f"{rel}: missing non-empty `type`")
                continue
            types[fm["type"]] += 1
            source_ids = {s.get("id") for s in fm.get("sources") or [] if isinstance(s, dict)}
            for ref in set(FOOTNOTE_REF_RE.findall(body)):
                if ref not in source_ids:
                    warnings.append(f"{rel}: footnote [^{ref}] has no matching sources[].id")
            for link in LINK_RE.findall(body):
                if not os.path.exists(os.path.join(root, link.lstrip("/"))):
                    warnings.append(f"{rel}: broken link {link}")
    print(f"concepts: {concepts}")
    for t, n in types.most_common():
        print(f"  {t}: {n}")
    print(f"errors: {len(errors)}  warnings: {len(warnings)}")
    for e in errors:
        print("ERROR", e)
    for w in warnings[:200]:
        print("WARN ", w)
    return 1 if errors else 0


if __name__ == "__main__":
    sys.exit(main(sys.argv[1] if len(sys.argv) > 1 else "."))
