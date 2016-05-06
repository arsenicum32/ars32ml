atext.g('about',function(data){
  console.log(data);
  $('h1 .about').text(data.h1);
  $('p .about').text(data.p);
});

// atext.dthelp.gdata( atext.dtjson[0], function(data){
//   console.log(data);
// }, function(){});
