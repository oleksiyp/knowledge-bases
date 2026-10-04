#!/usr/bin/env python3
"""Synchronize single-line Markdown source footnotes with OKF sources metadata.

The viewer's Markdown parser requires definitions to recognize keyed footnotes.
Definitions also make citations useful in ordinary Markdown readers.
Requires PyYAML. Run after changing sources, before validation and static build.
"""
from pathlib import Path
import re
import sys
import yaml

def main(root):
    count = 0
    for p in sorted(Path(root).rglob('*.md')):
        text = p.read_text()
        if p.name in ('index.md','log.md') or not text.startswith('---\n'):
            continue
        _, front, body = text.split('---',2)
        sources = (yaml.safe_load(front) or {}).get('sources', [])
        definitions = []
        for source in sources:
            key = source['id']
            body = re.sub(r'^\[\^'+re.escape(key)+r'\]:[^\n]*(?:\n|$)', '', body, flags=re.M)
            title = source.get('title', key).replace('[',r'\[').replace(']',r'\]')
            definitions.append(f'[^'+key+']: ['+title+']('+source['resource']+')')
        output = '---'+front+'---'+body.rstrip()+'\n\n'+'\n'.join(definitions)+'\n'
        if output != text:
            p.write_text(output)
            count += 1
    print(f'Synchronized citation definitions in {count} pages')

if __name__ == '__main__':
    main(sys.argv[1] if len(sys.argv)>1 else Path(__file__).resolve().parents[1])
