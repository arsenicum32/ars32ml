$("#changeform").on('click', function(){
  $(this).closest('form').html('<textarea id="superfiled"></textarea>');
  var t=0,inter = setInterval(function(){
    var st = 'Спасибо за заявку! Свяжусь с вами в течении дня...';
    t<st.length?t++:clearInterval(inter);
    $('#superfiled').val( st.substring(0,t) );
  }, 90);
});
