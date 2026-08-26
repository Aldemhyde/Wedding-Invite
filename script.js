const landing=document.getElementById("landing");
const app=document.getElementById("app");
const cover=document.getElementById("cover");
const spreads=[...document.querySelectorAll(".spread")];
const next=document.getElementById("next"),prev=document.getElementById("prev"),label=document.getElementById("label");
let state=0;
const names=["COVER","THE BEGINNING","OUR STORY","THE DETAILS"];

function render(){
  cover.classList.toggle("open",state>0);
  spreads.forEach((s,i)=>s.classList.toggle("active",i===state-1));
  label.textContent=names[state];
  prev.disabled=state===0;
  next.textContent=state===3?"↻":"→";
}
document.getElementById("openBtn").addEventListener("click",()=>{
  landing.classList.add("hide");app.classList.add("show");state=0;render();
});
cover.addEventListener("click",()=>{if(state===0){state=1;render()}});
next.addEventListener("click",()=>{state=state<3?state+1:0;render()});
prev.addEventListener("click",()=>{if(state>0){state--;render()}});
spreads.forEach((s,i)=>s.addEventListener("click",()=>{
  if(state===i+1 && state<3){state++;render()}
}));
let sx=null;
app.addEventListener("touchstart",e=>sx=e.touches[0].clientX,{passive:true});
app.addEventListener("touchend",e=>{
  if(sx===null)return;
  const dx=e.changedTouches[0].clientX-sx;
  if(Math.abs(dx)>45){dx<0?next.click():prev.click()}
  sx=null;
},{passive:true});
document.addEventListener("keydown",e=>{
  if(!app.classList.contains("show"))return;
  if(e.key==="ArrowRight"||e.key===" ")next.click();
  if(e.key==="ArrowLeft")prev.click();
});
const dust=document.getElementById("dust");
for(let i=0;i<34;i++){
  const d=document.createElement("span");
  d.className="dust";d.textContent=["✦","✧","·","•"][Math.floor(Math.random()*4)];
  d.style.left=Math.random()*100+"%";d.style.top=(35+Math.random()*65)+"%";
  d.style.fontSize=(5+Math.random()*8)+"px";d.style.animationDelay=(Math.random()*5)+"s";
  dust.appendChild(d);
}
render();
