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

/* scroll-spy: highlight the nav link of the section in view */
(function(){
  var links=[].slice.call(document.querySelectorAll('#menu a')).filter(function(a){return /^#.+/.test(a.getAttribute('href'))&&!a.classList.contains('nav-cta')});
  var pairs=links.map(function(a){return {a:a,s:document.getElementById(a.getAttribute('href').slice(1))}}).filter(function(p){return p.s});
  function update(){
    var y=window.scrollY+120,cur=pairs[0];
    pairs.forEach(function(p){if(p.s.offsetTop<=y)cur=p});
    if(window.innerHeight+window.scrollY>=document.documentElement.scrollHeight-4)cur=pairs[pairs.length-1];
    pairs.forEach(function(p){var on=p===cur;p.a.classList.toggle('active',on);if(on)p.a.setAttribute('aria-current','true');else p.a.removeAttribute('aria-current')});
  }
  window.addEventListener('scroll',update,{passive:true});window.addEventListener('resize',update);update();
})();
