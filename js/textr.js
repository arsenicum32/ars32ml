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
    !$(this).hasAttr('scopestart')?$(this).attr('scopestart', $(this).html()):void(0);
    var changer = change( $(this).attr('scopestart') );
    $(this).html(changer);

    setTimeout(function(){
      $(this).html( $(this).attr('scopestart') );
    }, 100);
  })
}
