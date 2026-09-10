"""Validate the development XML against repository content and built pages."""
import json
from html.parser import HTMLParser
from pathlib import Path
import xml.etree.ElementTree as ET

NAMESPACE = 'https://jasawebsite.co/schema/peta-development/v1'
NS = {'m': NAMESPACE}


def data(name):
    return json.loads(Path(f'src/data/{name}.json').read_text())


class PageMetadata(HTMLParser):
    def __init__(self):
        super().__init__()
        self.in_title = False
        self.title = ''
        self.canonical = None

    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)
        if tag == 'title':
            self.in_title = True
        if tag == 'link' and attrs.get('rel') == 'canonical':
            self.canonical = attrs.get('href')

    def handle_endtag(self, tag):
        if tag == 'title':
            self.in_title = False

    def handle_data(self, text):
        if self.in_title:
            self.title += text


canonical = Path('docs/peta-development.xml').read_bytes()
assert canonical == Path('public/peta-development.xml').read_bytes(), 'Public XML drift'
root = ET.fromstring(canonical)
entries = root.findall('m:core-folios/m:folio', NS) + root.findall('m:niche-directories/m:niche', NS)
folios = data('folios')
niches = {item['slug']: item for item in data('niches')}
services = {item['id']: item for item in data('services')}
expected = {'/'} | {f"/folio/{f['slug']}" for f in folios if f['slug'] != 'cover'} | {f'/folio/niche-{slug}' for slug in niches}
routes = [entry.findtext('m:route', namespaces=NS) for entry in entries]
assert len(routes) == len(set(routes)) == 32 and set(routes) == expected, 'Route inventory drift'
assert root.findtext('m:metadata/m:total-semantic-routes', namespaces=NS) == '33'
for entry in entries:
    text = lambda name: entry.findtext(f'm:{name}', namespaces=NS)
    route, slug = text('route'), entry.attrib['slug']
    assert text('canonical-route') == route, f'{route}: canonical drift'
    expected_output = 'out/index.html' if route == '/' else f'out{route}.html'
    assert text('build-output') == expected_output, f'{route}: output mapping'
    page = PageMetadata()
    page.feed(Path(expected_output).read_text())
    assert text('seo-title') == page.title, f'{route}: title drift'
    assert page.canonical.rstrip('/') == ('https://jasawebsite.co' + route).rstrip('/'), f'{route}: HTML canonical drift'
    for node in entry:
        if node.tag.split('}')[-1] in {'component', 'component-left', 'component-right', 'route-source', 'client-entry', 'metadata-source', 'data-source', 'service-data', 'alias-route-source', 'alias-build-output'}:
            assert Path(node.text.split('#')[0]).is_file(), f'{route}: missing source {node.text}'
    if slug in niches:
        item = niches[slug]
        assert text('starting-price') == item['startingPrice'], f'{route}: price drift'
        assert text('voucher-code') == item['voucherCode'], f'{route}: voucher drift'
        assert 'Service' in text('schema'), f'{route}: wrong service schema'
    elif slug in services:
        item = services[slug]
        assert text('starting-anchor') == item['startingPriceAnchor'], f'{route}: price anchor drift'
        assert text('voucher-code') == item['voucherCode'], f'{route}: voucher drift'
        tiers = entry.findall('m:tiers/m:tier', NS)
        assert len(tiers) == len(item['tiers']), f'{route}: tier count'
        for actual, expected_tier in zip(tiers, item['tiers']):
            for attr, field in [('id', 'id'), ('name', 'name'), ('price', 'investment'), ('sprint', 'timeline'), ('target', 'targetClients')]:
                assert actual.get(attr) == expected_tier[field], f'{route}: tier {attr} drift'
    if route == '/':
        assert text('alias-route') == '/folio/cover', 'Cover alias missing'
        assert text('alias-route-source') == 'src/app/folio/[slug]/page.tsx'
        assert text('alias-build-output') == 'out/folio/cover.html'
assert root.findtext("m:special-endpoints/m:endpoint[@id='sitemap']/m:indexed-urls", namespaces=NS) == '32'
print('PASS: development XML, 32 canonical pages + cover alias, source files, titles, prices, tiers, and compatibility copy.')
