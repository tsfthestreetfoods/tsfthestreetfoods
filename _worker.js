const allowedOrigins = new Set(['https://reviews.tsfthestreetfoods.com', 'https://bhaji-pav-reviews.pages.dev', 'https://tsfthestreetfoods.com', 'https://www.tsfthestreetfoods.com']);
const schema = `CREATE TABLE IF NOT EXISTS feedback (
 id TEXT PRIMARY KEY, created_at TEXT NOT NULL DEFAULT (strftime('%Y-%m-%dT%H:%M:%fZ','now')),
 outlet TEXT NOT NULL, name TEXT, phone TEXT, review TEXT NOT NULL,
 dishes TEXT NOT NULL, language TEXT NOT NULL, published INTEGER NOT NULL DEFAULT 0
); CREATE INDEX IF NOT EXISTS feedback_public_date ON feedback(published,created_at DESC);`;
let initialized;
function reply(request, data, status = 200) {
 const origin = request.headers.get('Origin');
 const headers = {'Content-Type':'application/json; charset=utf-8','Cache-Control':'no-store','Vary':'Origin','X-Content-Type-Options':'nosniff'};
 if (allowedOrigins.has(origin)) Object.assign(headers, {'Access-Control-Allow-Origin':origin,'Access-Control-Allow-Methods':'GET, POST, OPTIONS','Access-Control-Allow-Headers':'Content-Type'});
 return new Response(JSON.stringify(data), {status,headers});
}
export default {
 async fetch(request, env) {
  const path = new URL(request.url).pathname;
  if (!['/api/feedback','/api/testimonials'].includes(path)) return env.ASSETS.fetch(request);
  const origin=request.headers.get('Origin');
  if(origin && !allowedOrigins.has(origin))return reply(request,{error:'Origin not allowed.'},403);
  if(request.method==='OPTIONS')return reply(request,{ok:true});
  if(!env.FEEDBACK_DB)return reply(request,{error:'Feedback storage is not ready.'},503);
  try {
   if(!initialized)initialized=env.FEEDBACK_DB.exec(schema).catch(error=>{initialized=null;throw error});
   await initialized;
   if(path==='/api/testimonials' && request.method==='GET'){
    const {results}=await env.FEEDBACK_DB.prepare('SELECT name, review, outlet, created_at FROM feedback WHERE published = 1 ORDER BY created_at DESC LIMIT 6').all();
    return reply(request,{testimonials:results});
   }
   if(path!=='/api/feedback'||request.method!=='POST')return reply(request,{error:'Method not allowed.'},405);
   if(!request.headers.get('Content-Type')?.toLowerCase().includes('application/json'))return reply(request,{error:'JSON required.'},415);
   if(Number(request.headers.get('Content-Length'))>16000)return reply(request,{error:'Feedback is too long.'},413);
   const raw=await request.text();if(raw.length>16000)return reply(request,{error:'Feedback is too long.'},413);
   let body;try{body=JSON.parse(raw)}catch{return reply(request,{error:'Invalid feedback.'},400)}
   if(!body||typeof body!=='object')return reply(request,{error:'Invalid feedback.'},400);
   const clean=value=>typeof value==='string'?value.trim():'';
   const id=clean(body.id),name=clean(body.name),phone=clean(body.phone),review=clean(body.review),outlet=clean(body.outlet),language=clean(body.language);
   if(!/^[a-f0-9-]{36}$/i.test(id)||outlet!=='bhaji-pav'||!['en','hi','hinglish'].includes(language)||review.length<3||review.length>6000||name.length>80||phone.length>30)return reply(request,{error:'Please check your feedback and optional details.'},400);
   if(phone&&!/^\+?[\d\s()-]+$/.test(phone))return reply(request,{error:'Please enter a valid phone number, or leave it blank.'},400);
   if(phone&&(phone.replace(/\D/g,'').length<7||phone.replace(/\D/g,'').length>15))return reply(request,{error:'Please enter a valid phone number, or leave it blank.'},400);
   const dishes=Array.isArray(body.dishes)?body.dishes.filter(d=>typeof d==='string'&&d.length<=120).slice(0,40):[];
   // A missing/false publication consent stores private feedback only; used for smoke checks too.
   const published=body.publicConsent===true?1:0;
   await env.FEEDBACK_DB.prepare('INSERT INTO feedback (id,outlet,name,phone,review,dishes,language,published) VALUES (?1,?2,?3,?4,?5,?6,?7,?8) ON CONFLICT(id) DO NOTHING').bind(id,outlet,name||null,phone||null,review,JSON.stringify(dishes),language,published).run();
   return reply(request,{ok:true,id},201);
  }catch{return reply(request,{error:'Feedback could not be saved. Please try again.'},503)}
 }
};
