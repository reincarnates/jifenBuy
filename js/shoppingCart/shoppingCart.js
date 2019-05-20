$(function() {

  //减少商品数量
  // var goodNum = $('.goodsNum').attr('data-num');
  // $('.goodsNum').val(goodNum);
  $('.shop-goods-number-reduce').on('click', function() {
    var goodNum = $(this).siblings('.shop-goods-number-input').find('input').attr('data-num');
    if(goodNum != 0) {
      goodNum--;
    }
    $(this).siblings('.shop-goods-number-input').find('input').attr('data-num',goodNum);
    $(this).siblings('.shop-goods-number-input').find('input').val(goodNum);
    var $count = $(this).siblings('.shop-goods-number-input').find('input').val();
    var $price = $(this).parent().parent().siblings('.shop-goods-price-wrapper').find('.shop-goods-new-price').html(),  //单价
        $priceTotalObj = $(this).parents('.shop-goods-item-right').find('.shop-goods-present-price'),
        $priceTotal = Number($count*$price);
        $priceTotalObj.html($priceTotal);
  });

  //增加商品数量
  $('.shop-goods-number-plus').on('click', function() {
    var goodNum = $(this).siblings('.shop-goods-number-input').find('input').attr('data-num');
    goodNum++;
    $(this).siblings('.shop-goods-number-input').find('input').attr('data-num',goodNum);
    $(this).siblings('.shop-goods-number-input').find('input').val(goodNum);
    var $count = $(this).siblings('.shop-goods-number-input').find('input').val();
    var $price = $(this).parent().parent().siblings('.shop-goods-price-wrapper').find('.shop-goods-new-price').html(),  //单价
        $priceTotalObj = $(this).parents('.shop-goods-item-right').find('.shop-goods-present-price'),
        $priceTotal = Number($count*$price).toFixed(2);
        $priceTotalObj.html($priceTotal);
  });


  //全选反选
  $('#theadInp').on('click', function() {
    $("input:checkbox").prop("checked", $(this).prop('checked'));
  });

  $(".shop .shop-goods-wrapper .shop-goods-item input:checkbox").on('click', function () {
    //当选中的长度等于checkbox的长度的时候,就让控制全选反选的checkbox设置为选中,否则就为未选中
    if ($(".shop .shop-goods-wrapper .shop-goods-item input:checkbox").length === $(".shop .shop-goods-wrapper .shop-goods-item input:checked").length) {
      // $("#theadInp").prop("checked", true);
      // $(".shopName").prop("checked", true);
      $(this).parent().parent().siblings('.shop-name-wrapper').find('.shopName').prop("checked", true);
    } else {
      // $("#theadInp").prop("checked", false);
      // $(".shopName").prop("checked", false);
      $(this).parent().parent().siblings('.shop-name-wrapper').find('.shopName').prop("checked", false);
    }
  })

  //关闭删除模态框
  $('.del-goods-modal-title-right').on('click', function() {
    $('.del-goods-mask').hide();
    $(".del-goods-modal").animate({ top: '-20%' });
  });

  //删除购物车商品
  $('.shop-goods-operate-del').on('click', function() {
    $('.del-goods-mask').show();
    $(".del-goods-modal").animate({ top: '50%' });
  });

});