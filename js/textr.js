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
    !this.hasAttribute("scopestart")?this.setAttribute('scopestart', this.innerHTML ):void(0);
    this.innerHTML = change( this.getAttribute('scopestart') );
    setTimeout(function(){
      this.innerHTML =  this.getAttribute('scopestart');
    }, 100);
  })
}
