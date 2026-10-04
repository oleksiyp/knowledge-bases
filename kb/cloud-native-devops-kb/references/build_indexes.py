#!/usr/bin/env python3
"""Rebuild deterministic OKF navigation from concept frontmatter."""
from pathlib import Path
from collections import defaultdict
import sys
import yaml

TITLES = {'ideas':'Ideas and verdicts','systems':'Systems and standards','events':'Events','research':'Research and case studies','areas':'Area reviews','lessons':'Cross-cutting lessons','years':'Year reviews','references':'Methodology and tooling'}

def fm(p):
    t=p.read_text()
    return yaml.safe_load(t.split('---',2)[1]) or {} if t.startswith('---\n') else {}

def entry(p, root):
    d=fm(p)
    desc=' '.join(str(d.get('description','')).split())
    return f"* [{d.get('title',p.stem)}](/{p.relative_to(root).as_posix()}) - {desc}"

def main(root):
    for directory in sorted((p for p in root.rglob('*') if p.is_dir()),reverse=True):
        files=sorted(p for p in directory.glob('*.md') if p.name not in ('index.md','log.md'))
        children=sorted(p for p in directory.iterdir() if p.is_dir() and (p/'index.md').exists())
        if not files and not children:continue
        groups=defaultdict(list)
        for p in files:
            data=fm(p)
            key=('Verdict: '+str(data['verdict'])) if data.get('type')=='Idea' else str(data.get('year','Pages'))
            groups[key].append(entry(p,root))
        sections=[]
        if children:sections.append('# Browse\n\n'+'\n'.join(f'* [{TITLES.get(p.name,p.name.replace("-"," ").title())}](/{p.relative_to(root).as_posix()}/)' for p in children))
        for key,lines in sorted(groups.items()):sections.append('# '+key+'\n\n'+'\n'.join(lines))
        if directory.name=='references':sections.append('# Tools\n\n* [Validator](/references/validate_okf.py) - Format and citation checks.\n* [Index builder](/references/build_indexes.py) - Rebuilds navigation from metadata.\n* [Citation synchronizer](/references/sync_citations.py) - Keeps Markdown footnote definitions aligned with OKF sources.')
        (directory/'index.md').write_text('\n\n'.join(sections)+'\n')
    top=[p for p in root.glob('*.md') if p.name not in ('index.md','log.md')]
    lines=['---','okf_version: "0.2"','---','','# Start here','']
    lines += [entry(p,root) for p in sorted(top,key=lambda p:(p.name != "executive-summary.md",p.name))]
    lines += ['* [Methodology](/references/methodology.md) - Scope, verdicts, evidence limits and research process.','','# Browse','']
    for dirname,title in TITLES.items():
        d=root/dirname
        count=sum(p.name not in ('index.md','log.md') for p in d.rglob('*.md')) if d.exists() else 0
        if count:lines.append(f'* [{title}](/{dirname}/) - {count} pages.')
    (root/'index.md').write_text('\n'.join(lines)+'\n')

if __name__=='__main__':main(Path(sys.argv[1] if len(sys.argv)>1 else Path(__file__).resolve().parents[1]))
