// Only switch to a tabbed (single-panel) view once JS has actually run.
  // Until then, all branch content stays visible in the page source.
  document.body.classList.add('js-tabs');

  // Branch tabs
  var tabs = document.querySelectorAll('.tab');
  var panels = document.querySelectorAll('.branch-panel');
  tabs.forEach(function(tab){
    tab.addEventListener('click', function(){
      tabs.forEach(function(t){ t.setAttribute('aria-selected','false'); });
      panels.forEach(function(p){ p.classList.remove('active'); });
      tab.setAttribute('aria-selected','true');
      document.getElementById(tab.getAttribute('aria-controls')).classList.add('active');
    });
  });

  // Mobile nav toggle
  var navToggle = document.getElementById('navToggle');
  var navLinks = document.getElementById('navLinks');
  navToggle.addEventListener('click', function(){
    var open = navLinks.classList.toggle('open');
    navToggle.setAttribute('aria-expanded', open ? 'true' : 'false');
  });
  navLinks.querySelectorAll('a').forEach(function(a){
    a.addEventListener('click', function(){
      navLinks.classList.remove('open');
      navToggle.setAttribute('aria-expanded','false');
    });
  });
