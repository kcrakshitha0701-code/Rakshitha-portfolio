// Custom cursor
const ring = document.getElementById('ring');
const dot  = document.getElementById('dot');
let mx=0,my=0,rx=0,ry=0;
document.addEventListener('mousemove', e => {
  mx=e.clientX; my=e.clientY;
  dot.style.left=mx+'px'; dot.style.top=my+'px';
});
function animCur(){
  rx+=(mx-rx)*.12; ry+=(my-ry)*.12;
  ring.style.left=rx+'px'; ring.style.top=ry+'px';
  requestAnimationFrame(animCur);
}
animCur();
document.querySelectorAll('a,button,.uiux-card,.logo-card,.poster-card,.mag-cover-card').forEach(el=>{
  el.addEventListener('mouseenter',()=>{ring.style.width='54px';ring.style.height='54px';ring.style.borderColor='rgba(192,132,252,0.7)';ring.style.background='rgba(124,58,237,0.06)';});
  el.addEventListener('mouseleave',()=>{ring.style.width='32px';ring.style.height='32px';ring.style.borderColor='rgba(192,132,252,0.4)';ring.style.background='transparent';});
});
// Scroll reveal
const io=new IntersectionObserver((entries)=>{
  entries.forEach((e,i)=>{
    if(e.isIntersecting){
      e.target.style.transitionDelay=(i*0.06)+'s';
      e.target.classList.add('visible');
      io.unobserve(e.target);
    }
  });
},{threshold:0.08});
document.querySelectorAll('.reveal').forEach(el=>io.observe(el));
// Nav highlight
const secs=document.querySelectorAll('section[id]');
const nls=document.querySelectorAll('.nav-links a');
window.addEventListener('scroll',()=>{
  let cur='';
  secs.forEach(s=>{if(window.scrollY>=s.offsetTop-130)cur=s.id;});
  nls.forEach(l=>{l.style.color=l.getAttribute('href')==='#'+cur?'rgba(192,132,252,1)':'';}); 
});
