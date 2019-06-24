$(function() {

  $('#txtAccount').focus(function() {
    $('.msg-error').hide();
    // $(this).keyup(function() {
      // if($(this).val() < 10) {
      //   $('.msg-error').show();
      // }
    // });
  }).blur(function() {
    if($(this).val() < 10) {
      $('.msg-error').show();
    }else{
      $('.msg-error').hide();
    }
  });

  $('.btn-next').click(function() {
    if($('#txtAccount').val() == '') {
      $('.msg-error').show();
      return false;
    }
  });

  $('.recharge-type').on('click', function() {
    $(".recharge-type").eq($(this).index()).addClass("recharge-type-active").siblings().removeClass('recharge-type-active');
  });

});