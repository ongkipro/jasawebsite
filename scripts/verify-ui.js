import puppeteer from 'puppeteer-core';
import assert from 'node:assert/strict';
import fs from 'node:fs';
import path from 'node:path';
import {serveExport} from './serve-export.js';
const server=await serveExport();
const base=`http://127.0.0.1:${server.address().port}`;
const evidence=process.env.QA_OUTPUT || '/tmp/jasawebsite-qa';
fs.mkdirSync(evidence,{recursive:true});
const browser=await puppeteer.launch({executablePath:process.env.CHROME_PATH||'/usr/bin/google-chrome',headless:true,args:['--no-sandbox','--disable-dev-shm-usage']});
const page=await browser.newPage();
const errors=[];
page.on('pageerror',e=>errors.push(e.message));
page.on('console',m=>{if(m.type()==='error' && !m.text().includes('404')) errors.push(m.text());});
const folios=JSON.parse(fs.readFileSync('src/data/folios.json','utf8'));
const niches=JSON.parse(fs.readFileSync('src/data/niches.json','utf8'));
const results=[];
async function open(route) {
 const response=await page.goto(base+route,{waitUntil:'networkidle0'});
 assert.equal(response.status(),200,route);
 await page.waitForSelector('main');
}
async function layout(route,width) {
 const info=await page.evaluate(()=>({width:document.documentElement.clientWidth,scroll:document.documentElement.scrollWidth,h1:[...document.querySelectorAll('h1')].filter(e=>e.getBoundingClientRect().width>0).map(e=>e.textContent),blank:[...document.querySelectorAll('main article')].filter(e=>e.getBoundingClientRect().width>0).some(e=>{for(let el=e;el;el=el.parentElement)if(getComputedStyle(el).opacity==='0')return true;return false;}),canonical:document.querySelector('link[rel=canonical]')?.href}));
 assert.ok(info.scroll-info.width<=1,`${route} overflow at ${width}: ${info.scroll-info.width}`);
 assert.equal(info.h1.length,1,`${route}: visible heading at ${width}`);
 assert.ok(!info.blank,`${route}: content visible at ${width}`);
 assert.equal(info.canonical,new URL(route==='/'||route==='/folio/cover'?'/':route,'https://jasawebsite.co').href);
 if (route.startsWith('/folio/niche-')) {
   const header = await page.evaluate(() => {
     const trigger = document.querySelector('[aria-controls="industry-selector"]').getBoundingClientRect();
     const status = document.querySelector('main > header > div:last-child').getBoundingClientRect();
     return {left:trigger.left,right:trigger.right,statusLeft:status.left,statusWidth:status.width,width:document.documentElement.clientWidth};
   });
   assert.ok(header.left >= 0 && header.right <= header.width, `${route}: selector contained at ${width}`);
   assert.ok(!header.statusWidth || header.right <= header.statusLeft, `${route}: header controls do not overlap at ${width}`);
 }
 results.push({route,width,...info});
}
try {
 for(const width of [390,1440]) {
  await page.setViewport({width,height:900,isMobile:width<768,hasTouch:width<768});
  for(const route of ['/',...folios.map(f=>`/folio/${f.slug}`),...niches.map(n=>`/folio/niche-${n.slug}`)]) {await open(route);await layout(route,width);}
 }
 for(const width of [320,768,1024]) {
  await page.setViewport({width,height:900,isMobile:width<768,hasTouch:width<768});
  for(const route of ['/','/folio/company-profile','/folio/portfolio','/folio/colophon','/folio/niche-dealer-otomotif']) {await open(route);await layout(route,width);}
 }
 await page.setViewport({width:720,height:450});
 await open('/');
 await layout('/',720);
 await page.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
 await open('/');
 await page.click('[data-testid="subsheet-dropdown-trigger"]');
 await page.click('[data-testid="subsheet-item-1"]');
 await page.waitForFunction(()=>[...document.querySelectorAll('article')].some(e=>e.getBoundingClientRect().width>0 && e.innerText.includes('INDEX OF SERVICES') && getComputedStyle(e.parentElement).opacity==='1'));
 assert.equal(await page.evaluate(()=>document.activeElement?.getAttribute('data-testid')),'subsheet-dropdown-trigger','Selection restores focus to trigger');
 await page.click('[data-testid="subsheet-dropdown-trigger"]');
 await page.keyboard.press('Escape');
 assert.equal(await page.$('[role="group"][aria-label="Select page"]'),null);
 await page.screenshot({path:path.join(evidence,'home-mobile-contents.png')});
 await open('/');
 await page.screenshot({path:path.join(evidence,'home-mobile.png')});
 await page.click('[aria-label="Open Folio 2"]');
 await page.waitForFunction(()=>document.querySelector('link[rel=canonical]')?.href.endsWith('/folio/company-profile'));
 await page.goBack();
 await page.waitForFunction(()=>document.querySelector('link[rel=canonical]')?.href==='https://jasawebsite.co/');
 await page.goForward();
 await page.waitForFunction(()=>document.title.includes('Company Profile'));
 assert.equal(await page.$eval('link[hreflang="id-ID"]',e=>e.href),'https://jasawebsite.co/folio/company-profile');
 await open('/folio/niche-dealer-otomotif');
 await page.click('[aria-controls="industry-selector"]');
 await page.type('input[aria-label="Cari sektor industri"]','klinik');
 assert.ok(await page.$eval('#industry-selector',e=>e.innerText.includes('Klinik')));
 await page.keyboard.press('Escape');
 assert.equal(await page.$('#industry-selector'),null);
 assert.equal(await page.evaluate(()=>document.activeElement?.getAttribute('aria-controls')),'industry-selector');
 await page.screenshot({path:path.join(evidence,'niche-mobile.png')});
 await page.setViewport({width:1440,height:900});
 await open('/folio/portfolio');
 await page.screenshot({path:path.join(evidence,'portfolio-desktop.png')});
 // Click the visible screenshot preview, then exercise modal isolation and focus recovery.
 const preview=await page.$('[role="button"][aria-label^="Buka galeri"]');
 assert.ok(preview,'Desktop portfolio preview');
 await preview.click();
 await page.waitForSelector('dialog[open]');
 assert.ok(await page.$eval('dialog[open]',e=>e.contains(document.activeElement)),'Modal receives focus');
 await page.screenshot({path:path.join(evidence,'portfolio-dialog-initial.png')});
 const before=page.url();
 await page.keyboard.press('ArrowRight');
 assert.equal(page.url(),before,'Shell does not navigate behind modal');
 for(let i=0;i<12;i++) {await page.keyboard.press('Tab');assert.ok(await page.$eval('dialog[open]',e=>e.contains(document.activeElement)),'Focus stays inside modal');}
 await page.screenshot({path:path.join(evidence,'portfolio-dialog.png')});
 await page.keyboard.press('Escape');
 assert.equal(await page.$('dialog[open]'),null);
 assert.ok(await preview.evaluate(e=>e===document.activeElement),'Focus returns to portfolio preview');
 await page.emulateMediaFeatures([{name:'prefers-reduced-motion',value:'reduce'}]);
 await page.setViewport({width:390,height:844,isMobile:true,hasTouch:true});
 await open('/folio/company-profile');
 await page.click('[data-testid="subsheet-dropdown-trigger"]');
 await page.click('[data-testid="subsheet-item-1"]');
 await page.waitForFunction(()=>document.body.innerText.includes('HALAMAN 2/2'));
 assert.ok(await page.evaluate(()=>document.getAnimations().every(a=>a.playState!=='running')),'Reduced motion leaves no running animations');
 await page.setJavaScriptEnabled(false);
 await open('/');
 await layout('/',390);
 await page.screenshot({path:path.join(evidence,'home-no-javascript.png')});
 assert.deepEqual(errors,[],'No browser runtime or hydration errors');
 fs.writeFileSync(path.join(evidence,'ui-results.json'),JSON.stringify({status:'PASS',checks:results,interactions:['mobile subsheets','dropdown Escape and focus','niche search','history back/forward','canonical and hreflang','portfolio modal focus trap and Escape','reduced motion','no JavaScript']},null,2));
 console.log(`PASS: ${results.length} route/viewport checks plus critical interactions; evidence ${evidence}`);
} finally {await browser.close();await new Promise(resolve=>server.close(resolve));}
