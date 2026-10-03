"""Check bilingual routes, local links, assets, and document landmarks without dependencies."""
from html.parser import HTMLParser
from pathlib import Path
from urllib.parse import unquote, urlsplit
import sys

ROOT = Path(__file__).resolve().parents[1]

class Page(HTMLParser):
    def __init__(self, path):
        super().__init__()
        self.path, self.ids, self.links, self.h1s, self.main, self.active = path, [], [], 0, 0, 0
        self.feed(path.read_text())

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if attrs.get('id'):
            self.ids.append(attrs['id'])
        self.h1s += tag == 'h1'
        self.main += tag == 'main'
        self.active += attrs.get('aria-current') == 'page'
        if tag in ('a', 'link', 'script', 'img'):
            value = attrs.get('href') if tag in ('a', 'link') else attrs.get('src')
            if value is not None:
                self.links.append(value)

pages = {p.resolve(): Page(p) for p in ROOT.rglob('*.html')}
errors = []
for path, page in pages.items():
    label = str(path.relative_to(ROOT))
    for message, condition in [('exactly one h1', page.h1s == 1), ('exactly one main', page.main == 1), ('one current navigation link', page.active == 1), ('unique IDs', len(page.ids) == len(set(page.ids)))]:
        if not condition:
            errors.append(f'{label}: {message}')
    for value in page.links:
        url = urlsplit(value)
        if url.scheme or url.netloc:
            continue
        if value in ('', '#'):
            errors.append(f'{label}: empty link')
            continue
        target = ROOT / unquote(url.path).lstrip('/') if url.path.startswith('/') else path.parent / unquote(url.path)
        if not url.path:
            target = path
        if target.is_dir():
            target /= 'index.html'
        target = target.resolve()
        if not target.is_file():
            errors.append(f'{label}: missing local target {value}')
        elif url.fragment and target in pages and unquote(url.fragment) not in pages[target].ids:
            errors.append(f'{label}: missing anchor {value}')
assert len(pages) == 10, f'Expected ten bilingual pages, found {len(pages)}'
if errors:
    print('\n'.join(errors))
    sys.exit(1)
print(f'Passed: {len(pages)} pages; local routes, anchors, assets, unique IDs, and landmarks.')
