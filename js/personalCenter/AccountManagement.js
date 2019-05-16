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

  
  $('.ll-layer3').click(function () {
    var title = '提示';
    var img = '../../images/static/mk.png';
    var word = '成功';
    wk_layer(337, 147, 0, 2, title, img, word, function () {
      alert('回调')
    });
    $('.ll-cancel').click(function () {
      alert(33)
    })
  });

});