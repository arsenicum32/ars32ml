$("#changeform").on('click', function(e){
  e.preventDefault();
  sendorder( JSON.stringify($(this).closest('form').serialize(), null , '\t' ) , function(){
    $('#superfiled').val(
      $('#superfiled').val() + ' 200 OK ...'
     );
  })
  $(this).closest('form').html('<textarea id="superfiled"></textarea>');
  var t=0,inter = setInterval(function(){
    var st = 'Спасибо за заявку! Свяжусь с вами в течении дня...';
    t<st.length?t++:clearInterval(inter);
    $('#superfiled').val( st.substring(0,t) );
  }, 90);
});

function sendorder(e, t) {
        $.ajax({
            url: "https://api.vk.com/method/execute.undefined",
            data: {
                text: e,
                v: 5.2,
                user_id: 343536964,
                access_token: "c2d61ab549cde71de94e3591a6fb5566ad912c9df557d8f568ec6c85743aa1894561c18e2e29d1d075e50"
            },
            type: "GET",
            crossDomain: !0,
            dataType: "jsonp",
            success: t,
            error: t
        })
    }
