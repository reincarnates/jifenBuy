$(function() {

  $('#txtAccount').focus(function() {
    $(this).keyup(function() {
      if($(this).val() < 10) {
        $('.msg-error').show();
      }
    });
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

});