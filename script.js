const envelope=document.getElementById('openInvite');
const invitation=document.getElementById('invitation');
let opened=false;

envelope.addEventListener('click',()=>{
  if(opened) return;
  opened=true;
  envelope.classList.add('open');
  setTimeout(()=> invitation.scrollIntoView({behavior:'smooth'}), 950);
});

document.getElementById('continue').addEventListener('click',()=>{
  document.getElementById('details').scrollIntoView({behavior:'smooth'});
});
