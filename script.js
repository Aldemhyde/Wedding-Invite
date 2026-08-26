const welcome=document.getElementById("welcome");
const site=document.getElementById("site");
const spreads=[...document.querySelectorAll(".spread")];
const chapter=document.getElementById("chapter");
const counter=document.getElementById("counter");
const dots=document.getElementById("dots");
const prev=document.getElementById("prev");
const next=document.getElementById("next");
const labels=["Cover","Chapter One","Chapter Two","Chapter Three","The End"];
let index=0;

spreads.forEach((_,i)=>{
  const d=document.createElement("span");
  d.className="dot";
  d.addEventListener("click",()=>{index=i;render()});
  dots.appendChild(d);
});

function render(){
  spreads.forEach((s,i)=>s.classList.toggle("active",i===index));
  [...dots.children].forEach((d,i)=>d.classList.toggle("active",i===index));
  chapter.textContent=labels[index];
  counter.textContent=String(index+1).padStart(2,"0")+" / "+String(spreads.length).padStart(2,"0");
  prev.disabled=index===0;
  next.textContent=index===spreads.length-1?"↻":"→";
}
document.getElementById("begin").addEventListener("click",()=>{
  welcome.classList.add("hide");
  site.classList.add("show");
  index=0;
  render();
});
next.addEventListener("click",()=>{
  index=index<spreads.length-1?index+1:0;
  render();
});
prev.addEventListener("click",()=>{
  if(index>0){index--;render()}
});
document.getElementById("restart").addEventListener("click",()=>{
  index=0;render();
});
let startX=null;
site.addEventListener("touchstart",e=>startX=e.touches[0].clientX,{passive:true});
site.addEventListener("touchend",e=>{
  if(startX===null)return;
  const dx=e.changedTouches[0].clientX-startX;
  if(Math.abs(dx)>45){dx<0?next.click():prev.click()}
  startX=null;
},{passive:true});
document.addEventListener("keydown",e=>{
  if(!site.classList.contains("show"))return;
  if(e.key==="ArrowRight"||e.key===" ")next.click();
  if(e.key==="ArrowLeft")prev.click();
});
render();
