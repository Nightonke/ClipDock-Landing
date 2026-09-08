// Run: node tests/fixtures/video-range-server.mjs; open http://localhost:4324/.
// Expected: old configuration fails to follow a range redirect; CORS plays to ended.
import http from 'node:http';
import fs from 'node:fs';
const bytes = fs.readFileSync(new URL('../../public/assets/demos/copy-background.mp4', import.meta.url));
const page = `<!doctype html><meta charset="utf-8"><title>ClipDock 分段跨域回归</title>
<h1>同一个视频：分段后跨域跳转对比</h1><button id="start">开始对比</button>
<div style="display:flex;gap:20px"><section><h2>旧配置：no-cors</h2><video id="old" muted playsinline style="height:240px"></video><pre id="old-result">未开始</pre></section><section><h2>修复：anonymous CORS</h2><video id="fixed" crossorigin="anonymous" muted playsinline style="height:240px"></video><pre id="fixed-result">未开始</pre></section></div>
<script>
start.onclick=()=>{for(const id of ['old','fixed']){const v=document.getElementById(id),out=document.getElementById(id+'-result');let errors=0;const render=()=>out.textContent=JSON.stringify({time:v.currentTime,duration:v.duration,ended:v.ended,error:v.error?.message??null,errors});v.onended=render;v.ontimeupdate=render;v.onerror=()=>{errors++;render()};v.src='/'+id+'.mp4';v.play().catch(render)}};
</script>`;
function handle(req,res,final=false){
 if(req.url==='/favicon.ico'){res.writeHead(204);res.end();return;}
 if(req.url==='/'){res.writeHead(200,{'Content-Type':'text/html'});res.end(page);return;}
 const m=/bytes=(\d+)-(\d*)/.exec(req.headers.range||'');const start=m?+m[1]:0;
 if(!final&&start>0){console.log('redirect',req.url,'start',start,'mode',req.headers['sec-fetch-mode']);res.writeHead(307,{'Location':'http://localhost:4325'+req.url,'Access-Control-Allow-Origin':'*','Cache-Control':'no-store'});res.end();return;}
 const end=Math.min(m?.[2]?+m[2]:bytes.length-1, final?bytes.length-1:2097151);
 console.log(final?'final':'initial',req.url,start,end,'mode',req.headers['sec-fetch-mode']);
 res.writeHead(206,{'Content-Type':'video/mp4','Content-Length':end-start+1,'Content-Range':`bytes ${start}-${end}/${bytes.length}`,'Accept-Ranges':'bytes','Access-Control-Allow-Origin':'*','Cache-Control':'no-store'});res.end(bytes.subarray(start,end+1));
}
http.createServer((q,s)=>handle(q,s)).listen(4324,'127.0.0.1');
http.createServer((q,s)=>handle(q,s,true)).listen(4325,'127.0.0.1');
