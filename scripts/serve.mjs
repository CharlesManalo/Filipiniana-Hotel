import http from 'node:http';
import fs from 'node:fs/promises';
import path from 'node:path';
const root=path.resolve('out');
const mime={'.html':'text/html; charset=utf-8','.css':'text/css; charset=utf-8','.js':'text/javascript; charset=utf-8','.json':'application/json','.webp':'image/webp','.svg':'image/svg+xml','.txt':'text/plain; charset=utf-8','.woff2':'font/woff2','.ico':'image/x-icon'};
http.createServer(async(req,res)=>{try{const url=new URL(req.url,'http://localhost');const requested=decodeURIComponent(url.pathname);let file=path.resolve(root,'.'+requested);if(file!==root&&!file.startsWith(root+path.sep)){res.writeHead(403);return res.end('Forbidden')}let stat;try{stat=await fs.stat(file)}catch{file+= '.html';stat=await fs.stat(file)}if(stat.isDirectory())file=path.join(file,'index.html');const bytes=await fs.readFile(file);res.writeHead(200,{'Content-Type':mime[path.extname(file)]||'application/octet-stream','X-Content-Type-Options':'nosniff'});res.end(bytes)}catch{res.writeHead(404,{'Content-Type':'text/plain'});res.end('Not found')}}).listen(Number(process.env.PORT||3001),'127.0.0.1',()=>console.log(`Filipiniana preview: http://127.0.0.1:${process.env.PORT||3001}`));
