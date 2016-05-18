atext.g('about',function(data){
  $('.about1').text(data.h1);
  $('.about2').text(data.p);
});

atext.g('works',function(data){
  $('.macbook').append('<p style="display: inline-block" >'+data.p+'</p>');
  for(var n in data.works){
    $('.macbook').append('<a href="'+data.works[n].link+'" style="display: inline-block">'+data.works[n].name+'</a>');
  }
});

atext.g('coffee',function(data){
  $('.coffee').text(data.p);
});

atext.g('gitar',function(data){
  $('.gitar').text(data.p);
  $('.gitar').attr('href',data.link);
});

atext.g('chess',function(data){
  $('.chess').text(data.h2);
  $('.chess').attr('href', data.link);
});




atext.g('me',function(data){
  $('.Impage').text(data.p);
  for(var n in data.links){
    $('.Impagelinks').append('<a href="'+data.links[n]+'">'+n+'</a><br>');
  }
});

// atext.dthelp.gdata( atext.dtjson[0], function(data){
//   console.log(data);
// }, function(){});
