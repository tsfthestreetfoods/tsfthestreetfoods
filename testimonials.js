(async()=>{
 const grid=document.getElementById('customer-testimonials');if(!grid)return;
 try{
  const response=await fetch('/api/testimonials');if(!response.ok)return;
  const {testimonials}=await response.json();if(!Array.isArray(testimonials)||!testimonials.length)return;
  grid.replaceChildren();
  for(const item of testimonials){
   const quote=document.createElement('blockquote');
   const text=document.createElement('p');text.textContent=item.review;
   const cite=document.createElement('cite');cite.textContent='— '+(item.name||'A TSF guest')+' · '+({'bhaji-pav':'Bhaji Pav',baithak:'Baithak','china-ka-maal':'China Ka Maal'}[item.outlet]||'TSF');
   quote.append(text,cite);grid.append(quote);
  }
 }catch{}
})();
