"""Prépare une copie de dist/ avec des liens relatifs (pour un aperçu hébergé hors racine, ex. artifact Claude).
Usage : npm run build && python3 scripts/make-preview.py <dossier_sortie>"""
import os, re, shutil, sys, json
out = sys.argv[1]
shutil.rmtree(out, ignore_errors=True); shutil.copytree('dist', out); os.chdir(out)
os.rename('_astro', 'assets')
for f in os.listdir('assets'):
    if any(k in f for k in ('cyrillic', 'greek', 'vietnamese')): os.remove('assets/' + f); continue
    if f.startswith('_'): os.rename('assets/' + f, 'assets/' + f.lstrip('_'))
ren = {f: f for f in os.listdir('assets')}
for f in os.listdir('assets'):
    if f.endswith('.css'):
        p = 'assets/' + f; s = open(p).read().replace('url(/_astro/', 'url('); open(p, 'w').write(s)
def rel(t, depth):
    path, _, frag = t.partition('#'); frag = '#' + frag if frag else ''
    path, _, q = path.partition('?'); q = '?' + q if q else ''
    path = path.lstrip('/')
    if path.startswith('_astro/'): path = 'assets/' + path[7:].lstrip('_')
    elif path == '': path = 'index.html'
    elif '.' not in path.split('/')[-1]: path = path.rstrip('/') + '/index.html'
    return '../' * depth + path + q + frag
files = {}
for d, _, fs in os.walk('.'):
    for f in fs:
        p = os.path.join(d, f)[2:]
        if p.endswith('.html'):
            s = open(p).read()
            s = re.sub(r'(href|src|action|poster)="(/[^"]*)"', lambda m: f'{m.group(1)}="{rel(m.group(2), p.count("/"))}"', s)
            open(p, 'w').write(s)
        if p != 'index.html': files[p] = os.path.abspath(p)
json.dump(files, open(os.path.join('..', os.path.basename(out) + '-files.json'), 'w'), indent=0)
print(len(files), 'files')
