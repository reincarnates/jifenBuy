$(function() {
  var acount = 1;
  //售后类型
  var afterSaletype = '';

  //最多可提交的数量
  $('.apply-after-sale-upper-limit span').text($('.apply-after-sale-goods-info-shop-number').text());

  $('.apply-after-sale-btn').on('click', function() {
    $(".apply-after-sale-btn").eq($(".apply-after-sale-btn").index(this)).addClass("apply-after-sale-btn-active").siblings().removeClass('apply-after-sale-btn-active');
    afterSaletype = $(this).text();
  });

  $('.apply-after-sale-btn2').on('click', function() {
    $(".apply-after-sale-btn2").eq($(".apply-after-sale-btn2").index(this)).addClass("apply-after-sale-btn-active").siblings().removeClass('apply-after-sale-btn-active');
  });

  //商品默认数量
  $('.apply-after-sale-input').val(acount);

  //增加商品数量
  $('.apply-after-sale-plus').click(function () {
    if ($('.apply-after-sale-input').val() != Number($('.apply-after-sale-goods-info-shop-number').text())) {
      $('.apply-after-sale-input').val(++acount);
    }
  });

  //减少商品数量
  $('.apply-after-sale-reduce').click(function () {
    if ($('.apply-after-sale-input').val() > 1) {
      $('.apply-after-sale-input').val(--acount);
    }
  });

  //下拉框
  var applyNum = 0;
  $('.apply-after-sale-select').on('click', function() {
    if(applyNum == 0) {
      $('.apply-after-sale-select-input').addClass('apply-after-sale-select-bg');
      $('.apply-after-sale-select-content').show();
      applyNum = 1;
    }else{
      $('.apply-after-sale-select-input').removeClass('apply-after-sale-select-bg');
      $('.apply-after-sale-select-content').hide();
      applyNum = 0;
    }
  });

  //下拉框赋值
  $('.apply-after-sale-select-content ul li').on('click', function() {
    $('.apply-after-sale-select-input').val($(this).text());
  })

  //上传图片
  $('.apply-after-sale-upload').on('click', function() {
    return $('#applyUpload').trigger('click');
  });

})