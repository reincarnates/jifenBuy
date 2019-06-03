$(function() {
  var acount = 1;
  var afterSaletype = '';//售后类型
  var returnMode = '';//返回方式

  //最多可提交的数量
  $('.apply-after-sale-upper-limit span').text($('.apply-after-sale-goods-info-shop-number').text());

  $('.apply-after-sale-btn').on('click', function() {
    $(".apply-after-sale-btn").eq($(".apply-after-sale-btn").index(this)).addClass("apply-after-sale-btn-active").siblings().removeClass('apply-after-sale-btn-active');
    afterSaletype = $(this).text();
    $('.after-sale-type').hide();
  });

  $('.apply-after-sale-btn2').on('click', function() {
    $(".apply-after-sale-btn2").eq($(".apply-after-sale-btn2").index(this)).addClass("apply-after-sale-btn-active").siblings().removeClass('apply-after-sale-btn-active');
    returnMode = $(this).text();
    $('.return-mode').hide();
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
    $('.submit-cause').hide();
  })

  //上传图片
  $('.apply-after-sale-upload').on('click', function() {
    return $('#applyUpload').trigger('click');
  });

  //确认提交
  $('.confirm-info-content-type-btn').on('click', function() {
    if(afterSaletype == '') {
      $('.after-sale-type').show();
      return false;
    }

    if($('#checkCause').val() == '') {
      $('.submit-cause').show();
      return false;
    }

    if($('#problemDescription').val() == '') {
      $('.problem-description').show();
      $('#problemDescription').focus();
      return false;
    }

    if(returnMode == '') {
      $('.return-mode').show();
      return false;
    }
    
    if($('#receiver').val() == '') {
      $('.after-receiver').show();
      return false;
    }
    
    if($('#phoneNumber').val() == '') {
      $('.phone-number').show();
      return false;
    }

    alert('成功');

  })

  //键盘抬起隐藏提示
  $('#problemDescription,#receiver,#phoneNumber').on('keyup', function() {
    $('.problem-description').hide();
    $('.after-receiver').hide();
    $('.phone-number').hide();
  });

})

