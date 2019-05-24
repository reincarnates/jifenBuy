$(function() {

  $('.mysize_head_item_wrapper').on('click', function() {
    $(".mysize_head_item_wrapper").eq($(".mysize_head_item_wrapper").index(this)).addClass("mysizShow").siblings().removeClass('mysizShow');
  });

  $('.mysize_head_item_wrapper').on('mouseover', function() {
    $(this).find('.mysize_head_item').find('.del_mysize').show();
    $(this).find('.mysize_head_item2').find('.del_mysize').show();
  }).on('mouseout', function() {
    $(this).find('.mysize_head_item').find('.del_mysize').hide();
    $(this).find('.mysize_head_item2').find('.del_mysize').hide();
  });

});