
(function(){
  const nav = document.querySelector('.main-nav');
  const btn = document.querySelector('.menu-toggle');
  if(btn && nav){
    btn.addEventListener('click', () => {
      const expanded = nav.getAttribute('aria-expanded') === 'true';
      nav.setAttribute('aria-expanded', String(!expanded));
      btn.setAttribute('aria-expanded', String(!expanded));
    });
  }
})();
