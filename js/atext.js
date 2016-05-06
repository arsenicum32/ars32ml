atext.g('about',function(data){
  console.log(data);
  $('h1').text(data.h1);
  $('p').text(data.p);
});

// atext.dthelp.gdata( atext.dtjson[0], function(data){
//   console.log(data);
// }, function(){});
