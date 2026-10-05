#!/usr/bin/env python3
"""Check this bundle's OKF structure, provenance, navigation, and citation joins.

Requires PyYAML. Run from any directory; optionally pass a different bundle root.
This is structural validation, not verification of research claims.
"""
from collections import Counter
from pathlib import Path
import re
import sys

import yaml


def validate(root):
    errors = []
    counts = Counter()
    for path in sorted(root.rglob('*.md')):
        rel = path.relative_to(root).as_posix()
        text = path.read_text()
        body = text
        data = {}
        if text.startswith('---\n'):
            parts = text.split('---\n', 2)
            if len(parts) != 3:
                errors.append(f'{rel}: unclosed frontmatter')
                continue
            try:
                data = yaml.safe_load(parts[1]) or {}
                body = parts[2]
            except yaml.YAMLError as exc:
                errors.append(f'{rel}: invalid YAML: {exc}')
                continue
        if path.name in {'index.md', 'log.md'}:
            if rel == 'index.md':
                if str(data.get('okf_version')) != '0.2':
                    errors.append('index.md: expected okf_version 0.2')
            elif data:
                errors.append(f'{rel}: reserved file has frontmatter')
        else:
            for key in ('type', 'title', 'description', 'generated', 'status', 'sources'):
                if key not in data:
                    errors.append(f'{rel}: missing {key}')
            counts[data.get('type', 'MISSING')] += 1
            if not data.get('generated', {}).get('by'):
                errors.append(f'{rel}: missing generation actor')
            sources = data.get('sources', [])
            ids = [s.get('id') for s in sources]
            if len(ids) != len(set(ids)):
                errors.append(f'{rel}: duplicate source IDs')
            refs = set(re.findall(r'\[\^([^\]]+)\](?!:)', body))
            defs = set(re.findall(r'^\[\^([^\]]+)\]:', body, re.M))
            for ref in refs:
                if ref not in ids or ref not in defs:
                    errors.append(f'{rel}: citation {ref} missing source or definition')
            for s in sources:
                resource = s.get('resource', '')
                if resource.startswith('/'):
                    if not (root / resource.lstrip('/')).is_file():
                        errors.append(f'{rel}: missing concept source {resource}')
                elif not resource.startswith('https://'):
                    errors.append(f'{rel}: invalid source resource {resource}')
                elif s.get('id') not in refs:
                    errors.append(f'{rel}: external source {s.get("id")} is not cited')
        for target in re.findall(r'\]\((/[^)#\s]*)(?:#[^)]*)?\)', body):
            dest = root / target.lstrip('/')
            if not dest.exists():
                errors.append(f'{rel}: broken link {target}')
            elif dest.is_dir() and not (dest / 'index.md').is_file():
                errors.append(f'{rel}: folder missing index {target}')
    print(f'Concepts: {sum(counts.values())}; types: {dict(counts)}')
    for error in errors:
        print('ERROR', error)
    print(f'Errors: {len(errors)}')
    return bool(errors)


if __name__ == '__main__':
    root = Path(sys.argv[1]).resolve() if len(sys.argv) > 1 else Path(__file__).resolve().parents[1]
    sys.exit(validate(root))
