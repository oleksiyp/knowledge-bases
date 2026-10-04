#!/usr/bin/env python3
"""Validate this OKF bundle's metadata, citations, navigation and local references.

Usage: python3 references/validate_okf.py [bundle_root]
Requires PyYAML. This is structural validation, not independent fact verification.
"""
from collections import Counter
from pathlib import Path
import re
import sys
from urllib.parse import unquote, urlsplit
import yaml

RESERVED = {'index.md', 'log.md'}
LINK = re.compile(r'\]\(([^)\s]+)(?:\s+"[^"]*")?\)')
CITE = re.compile(r'\[\^([^\]]+)\](?!:)')

def split(text):
    if not text.startswith('---\n'):
        return None, text
    pieces = text.split('---', 2)
    if len(pieces) != 3:
        raise ValueError('unterminated frontmatter')
    return yaml.safe_load(pieces[1]), pieces[2]

def main(root):
    root = Path(root).resolve()
    errors = []
    types = Counter()
    pages = {}
    incoming = Counter()
    externals = set()

    def fail(rel, message):
        errors.append(f'{rel}: {message}')

    def check_link(p, target):
        url = urlsplit(target)
        if url.scheme or url.netloc:
            if url.scheme in ('http', 'https'):
                externals.add(target)
            return
        if not url.path:
            return
        raw = unquote(url.path)
        dest = root / raw.lstrip('/') if raw.startswith('/') else p.parent / raw
        dest = dest.resolve()
        if not dest.is_relative_to(root):
            fail(p.relative_to(root), f'reference escapes bundle: {target}')
        elif not dest.exists():
            fail(p.relative_to(root), f'broken local reference: {target}')
        elif dest.suffix == '.md' and p.name not in RESERVED:
            incoming[dest] += 1

    for p in sorted(root.rglob('*.md')):
        rel = p.relative_to(root)
        try:
            fm, body = split(p.read_text())
        except (yaml.YAMLError, ValueError) as e:
            fail(rel, str(e).splitlines()[0])
            continue
        for target in LINK.findall(body):
            check_link(p, target)
        if p.name in RESERVED:
            if fm is not None and rel.as_posix() != 'index.md':
                fail(rel, 'reserved page carries frontmatter')
            continue
        if not isinstance(fm, dict):
            fail(rel, 'missing mapping frontmatter')
            continue
        pages[p] = fm
        for key in ('type','title','description','as_of','generated','sources'):
            if not fm.get(key):
                fail(rel, f'missing {key}')
        types[fm.get('type', '(missing)')] += 1
        if CITE.search(str(fm.get('description', ''))):
            fail(rel, 'description contains a citation')
        if not isinstance(fm.get('generated'), dict) or not all(fm['generated'].get(k) for k in ('by','at')):
            fail(rel, 'incomplete generated provenance')
        sources = fm.get('sources', [])
        ids = []
        for s in sources:
            if not isinstance(s, dict) or not s.get('id') or not s.get('resource'):
                fail(rel, 'source needs id and resource')
                continue
            ids.append(s['id'])
            check_link(p, s['resource'])
        if len(ids) != len(set(ids)):
            fail(rel, 'duplicate source IDs')
        refs = set(CITE.findall(body))
        definitions = set(re.findall(r'^\[\^([^\]]+)\]:', body, re.M))
        for key in sorted(refs - definitions):
            fail(rel, f'missing Markdown definition required by this viewer: {key}')
        for key in sorted(refs - set(ids)):
            fail(rel, f'citation has no source: {key}')
        for key in sorted(set(ids) - refs):
            fail(rel, f'uncited source: {key}')
        if fm.get('type') == 'Idea':
            for key in ('area','verdict','confidence'):
                if not fm.get(key): fail(rel, f'idea lacks {key}')
        if fm.get('type') == 'Event':
            date = str(fm.get('date',''))
            if not re.fullmatch(r'20\d\d-\d\d(?:-\d\d)?', date):
                fail(rel, 'event date must have explicit month or day precision')
            if date[:4] != str(fm.get('year')):
                fail(rel, 'event year disagrees with date')
    # Concept links, not only generated indexes, should make the corpus navigable.
    for p in pages:
        if not incoming[p]:
            fail(p.relative_to(root), 'no incoming concept reference')
    print(f'concepts: {len(pages)}')
    for kind, count in types.most_common(): print(f'  {kind}: {count}')
    print(f'unique external URLs: {len(externals)}')
    print(f'errors: {len(errors)}')
    for error in errors: print('ERROR', error)
    return bool(errors)

if __name__ == '__main__':
    sys.exit(main(sys.argv[1] if len(sys.argv)>1 else Path(__file__).resolve().parents[1]))
