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
  $('.rtext').each(function(){
    var el = this;
    !el.hasAttribute("scopestart")?el.setAttribute('scopestart', el.innerHTML ):void(0);
    el.innerHTML = change( el.getAttribute('scopestart') );
    setTimeout(function(){
      el.innerHTML =  el.getAttribute('scopestart');
    }, 100);
  })
}
