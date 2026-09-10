import {createServer} from 'node:http';
import {readFile} from 'node:fs/promises';
import path from 'node:path';
import {gzipSync} from 'node:zlib';
import {pathToFileURL} from 'node:url';

export function serveExport(port = 0, root = path.resolve('out')) {
  const types={'.html':'text/html; charset=utf-8','.css':'text/css','.js':'application/javascript','.json':'application/json','.txt':'text/plain','.xml':'application/xml','.svg':'image/svg+xml','.webp':'image/webp','.jpg':'image/jpeg','.png':'image/png','.ico':'image/x-icon','.woff2':'font/woff2'};
  const server=createServer(async(req,res)=>{
    let pathname;
    try { pathname=decodeURIComponent(new URL(req.url,'http://localhost').pathname); }
    catch { res.writeHead(400).end(); return; }
    const relative=pathname==='/'?'index.html':pathname.slice(1);
    const target=path.resolve(root,relative);
    if(!target.startsWith(`${root}${path.sep}`)) {res.writeHead(400).end();return;}
    for(const file of [target,`${target}.html`]) {
      try {
        const body=await readFile(file);
        const compressed=/\btext\/|javascript|json|xml/.test(types[path.extname(file)]||'') && /\bgzip\b/.test(req.headers['accept-encoding']||'');
        res.writeHead(200,{'Content-Type':types[path.extname(file)]||'application/octet-stream',...(compressed?{'Content-Encoding':'gzip','Vary':'Accept-Encoding'}:{})}).end(compressed?gzipSync(body):body);
        return;
      } catch(error) {if(!['ENOENT','EISDIR','ENOTDIR'].includes(error.code)) {res.writeHead(500).end();return;}}
    }
    res.writeHead(404,{'Content-Type':'text/html; charset=utf-8'}).end(await readFile(path.join(root,'404.html')));
  });
  return new Promise((resolve,reject)=>{
    server.once('error',reject);
    server.listen(port,'127.0.0.1',()=>resolve(server));
  });
}
if(process.argv[1] && import.meta.url===pathToFileURL(process.argv[1]).href) {
 const server=await serveExport(Number(process.env.PORT||4173));
 console.log(`Static export: http://127.0.0.1:${server.address().port}`);
}
