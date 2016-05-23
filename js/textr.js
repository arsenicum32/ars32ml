function rtext(){
  function change(text){
    var artext = text.split('');
    var sym = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~ \t\n\r\x0b\x0c'.split('');
    for(var i in artext){
      if (artext[i] != ' ')
      artext[i] = sym[ Math.floor(Math.random()*sym.length)];
    }
    return artext.join('');
  }
  function mixtext(a,b){
    var x = a.length > b.length ? a:b;
    var y = a.length > b.length ? b:a;
    for (var i in x){
      Math.random()>0.5? x[i] = y[i] : void(0);
    }
    return x;
  }
  $('.rtext').each(function(){
    var el = this;
    !el.hasAttribute("scopestart")?el.setAttribute('scopestart', el.innerHTML ):void(0);
    el.innerHTML = change( el.getAttribute('scopestart') );
    setInterval(function(){
      el.innerHTML =  mixtext( el.innerHTML , el.getAttribute('scopestart'));
    }, 100);
  })
}
