const welcome=document.getElementById("welcome");
const exp=document.getElementById("experience");
const cover=document.getElementById("cover");
const page=document.getElementById("pageTurn");
const open=document.getElementById("open");
const next=document.getElementById("next");
const prev=document.getElementById("prev");
const label=document.getElementById("label");
const stars=document.getElementById("stars");
let state=0; // 0 cover closed, 1 pop-up scene, 2 photos, 3 wedding details

function render(){
  const details=document.getElementById("detailsPage");
  if(state===0){
    cover.classList.remove("open");
    page.classList.remove("show","turn");
    details.classList.remove("show");
    label.textContent="COVER"; prev.disabled=true; next.textContent="→";
  } else if(state===1){
    cover.classList.add("open");
    page.classList.remove("show","turn");
    details.classList.remove("show");
    label.textContent="OUR STORY"; prev.disabled=false; next.textContent="→";
  } else if(state===2){
    cover.classList.add("open");
    page.classList.add("show");
    requestAnimationFrame(()=>page.classList.add("turn"));
    details.classList.remove("show");
    label.textContent="OUR PHOTOS"; prev.disabled=false; next.textContent="→";
  } else {
    cover.classList.add("open");
    page.classList.add("show","turn");
    details.classList.add("show");
    label.textContent="THE DETAILS"; prev.disabled=false; next.textContent="↻";
  }
}
open.addEventListener("click",()=>{welcome.classList.add("hide");exp.classList.add("show");state=0;render()});
next.addEventListener("click",()=>{if(state<3)state++;else state=0;render()});
prev.addEventListener("click",()=>{if(state>0)state--;render()});
cover.addEventListener("click",()=>{if(state===0){state=1;render()}});
page.addEventListener("click",()=>{if(state===1){state=2;render()}});
let sx=null;
exp.addEventListener("touchstart",e=>sx=e.touches[0].clientX,{passive:true});
exp.addEventListener("touchend",e=>{if(sx===null)return;let dx=e.changedTouches[0].clientX-sx;if(Math.abs(dx)>45)dx<0?next.click():prev.click();sx=null},{passive:true});
document.addEventListener("keydown",e=>{if(!exp.classList.contains("show"))return;if(e.key==="ArrowRight"||e.key===" ")next.click();if(e.key==="ArrowLeft")prev.click()});

// magical floating dust
["✦","✧","·","•"].forEach(()=>{});
for(let i=0;i<36;i++){
  const d=document.createElement("span");d.className="dust";d.textContent=["✦","✧","·","•"][Math.floor(Math.random()*4)];
  d.style.left=Math.random()*100+"%";d.style.top=(30+Math.random()*65)+"%";
  d.style.fontSize=(5+Math.random()*8)+"px";d.style.animationDelay=Math.random()*5+"s";
  stars.appendChild(d);
}
render();
