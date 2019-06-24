$(function() {

  $(document).on('click', '.tracks-item-close', function() {
    $(this).parents('.tracks-item').remove();
    if($('.tracks-item').length == 0) {
      $('.trancks-not').show();
      $('.tracks-word').hide();
    }else{
      $('.trancks-not').hide();
    }
  });

  // $(document).on('mouseover', '.tracks-item', function() {
  //   $(this).find('.tracks-item-close').show();
  // }).on('mouseout', '.tracks-item', function() {
  //   $(this).find('.tracks-item-close').hide();
  // });

})