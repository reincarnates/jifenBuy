$(function() {
  
  //店铺收藏的数量
  $('#shopCollection').find('span').text($('.store-collection-item').length);

  //商品收藏的数量
  $('#goodsCollection').find('span').text($('.goods-collection-item').length);

  $(".store-collection-head-item").on('click', function () {
		$(".store-collection-head-item").eq($(".store-collection-head-item").index(this)).addClass("store-collection-head-item-active").siblings().removeClass('store-collection-head-item-active');
		$(".store-collection-show").eq($(".store-collection-head-item").index(this)).addClass("store-collection-hide").siblings().removeClass('store-collection-hide');
  });
  //显示取消收藏店铺按钮
  $(document).on('mouseover', '.store-collection-item-left-word', function() {
    $(this).siblings('.cancel-collection').show();
  }).on('mouseout', '.store-collection-item-left-word', function() {
    $(this).siblings('.cancel-collection').hide();
  });

  $(document).on('mouseover', '.cancel-collection', function() {
    $(this).show();
  }).on('mouseout', '.cancel-collection', function() {
    $(this).hide();
  });
  //点击取消收藏按钮
  $(document).on('click','.cancel-collection', function() {
    $('.cancel-collection-mask-wrapper').show();
    $('.cancel-collection-mask').animate({'top': '50%'});
  });

  //关闭模态框
  $('.cancel-collection-mask-head img').on('click', function() {
    $('.cancel-collection-mask-wrapper').hide();
    $('.cancel-collection-mask').animate({'top': '-3%'});
  });

  //确定删除
  $('.cancel-collection-mask-btn-left,.cancel-collection-mask-btn-right').on('click', function() {
    $('.cancel-collection-mask-head img').trigger('click');
  });




  //删除收藏商品
  $(document).on('click', '.goods-collection-item-btn-left', function() {
    $(this).parent('.goods-collection-item-btn').siblings('.goods-collection-item-delete-mask').show();
  });

  //确定删除收藏商品
  $(document).on('click', '.goods-collection-item-delete-mask-btn-left', function() {
    $(this).parents('.goods-collection-item').remove();
  });

  //取消删除商品
  $(document).on('click', '.goods-collection-item-delete-mask-btn-right', function() {
    $(this).parents('.goods-collection-item-delete-mask').hide();
  });

  //显示该商品已下架和暂无库存的提示
  $(document).on('click', '.goods-collection-item-btn-right', function() {
    $(this).parent('.goods-collection-item-btn').siblings('.goods-collection-item-notgoods-mask').show().delay(2000).hide(200);
  });

  //有货商品点击立即购买
  $(document).on('click', '.goods-collection-item-btn-right2', function() {
    alert()
  });

})