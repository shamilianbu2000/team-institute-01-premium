(function(){
  var b=document.querySelector('.burger'),m=document.getElementById('menu');
  if(b&&m){
    b.addEventListener('click',function(){
      var o=m.classList.toggle('open');b.setAttribute('aria-expanded',o);
    });
    m.addEventListener('click',function(e){
      if(e.target.tagName==='A'){m.classList.remove('open');b.setAttribute('aria-expanded','false');}
    });
  }
  var els=document.querySelectorAll('.reveal');
  if(!('IntersectionObserver' in window)){els.forEach(function(e){e.classList.add('in')});return;}
  var io=new IntersectionObserver(function(es){
    es.forEach(function(x){if(x.isIntersecting){x.target.classList.add('in');io.unobserve(x.target);}});
  },{threshold:.12});
  els.forEach(function(e){io.observe(e)});
})();
