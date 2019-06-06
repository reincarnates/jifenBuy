$(function () {
  var acount = 1;
  var afterSaletype = '';//售后类型
  var returnMode = '';//返回方式

  //最多可提交的数量
  $('.apply-after-sale-upper-limit span').text($('.apply-after-sale-goods-info-shop-number').text());

  $('.apply-after-sale-btn').on('click', function () {
    $(".apply-after-sale-btn").eq($(".apply-after-sale-btn").index(this)).addClass("apply-after-sale-btn-active").siblings().removeClass('apply-after-sale-btn-active');
    afterSaletype = $(this).text();
    $('.after-sale-type').hide();
  });

  $('.apply-after-sale-btn2').on('click', function () {
    $(".apply-after-sale-btn2").eq($(".apply-after-sale-btn2").index(this)).addClass("apply-after-sale-btn-active").siblings().removeClass('apply-after-sale-btn-active');
    $(".apply-after-hide").eq($(".apply-after-sale-btn2").index(this)).addClass("apply-after-show").siblings().removeClass('apply-after-show');
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
  $('.apply-after-sale-select').on('click', function () {
    if (applyNum == 0) {
      $('.apply-after-sale-select-input').addClass('apply-after-sale-select-bg');
      $('.apply-after-sale-select-content').show();
      applyNum = 1;
    } else {
      $('.apply-after-sale-select-input').removeClass('apply-after-sale-select-bg');
      $('.apply-after-sale-select-content').hide();
      applyNum = 0;
    }
  });

  //下拉框赋值
  $('.apply-after-sale-select-content ul li').on('click', function () {
    $('.apply-after-sale-select-input').val($(this).text());
    $('.submit-cause').hide();
  })

  //上传图片
  $('.apply-after-sale-upload').on('click', function () {
    return $('#applyUpload').trigger('click');
  });

  $('#applyUpload').on('change', function() {
    const files = event.target.files;
    var type = files.type;
    var fq = $('#applyUpload');
    // for(var i in files) {
    //   console.log(files[i]);
    // }
    console.log(files,type);
    // if(fq[0].files.length > 5) {
    //   alert('上传图片的张数不能大于5张！');
    //   return false;
    // }
    // if (type == 'jpg' || type == 'png' || type == 'jpeg') {
    //   if (files.size < 1024 * 1024 * 5) {
    //     alert('成功');
    //   } else {
    //     alert('请上传小于5MB的头像！！！');
    //   }
    // } else {
    //   alert('请上传jpg或png或jpeg格式的图片！');
    // }
  });

  //快递寄回确认提交
  $('.confirm-info-content-type-btn').on('click', function () {
    if (afterSaletype == '') {
      $('.after-sale-type').show();
      return false;
    }

    if ($('#checkCause').val() == '') {
      $('.submit-cause').show();
      return false;
    }

    if ($('#problemDescription').val() == '') {
      $('.problem-description').show();
      $('#problemDescription').focus();
      return false;
    }

    if (returnMode == '') {
      $('.return-mode').show();
      return false;
    }

    if ($('#receiver').val() == '') {
      $('.after-receiver').show();
      return false;
    }

    if ($('#phoneNumber').val() == '') {
      $('.phone-number').show();
      return false;
    }

    $('.apply-submit-mask').animate({top:"50%"});
    $('.apply-submit-mask-wrapper').show();

  })

  //上门取件确认提交
  $('.confirm-info-content-type-btn2').on('click', function () {
    if (afterSaletype == '') {
      $('.after-sale-type').show();
      return false;
    }

    if ($('#checkCause').val() == '') {
      $('.submit-cause').show();
      return false;
    }

    if ($('#problemDescription').val() == '') {
      $('.problem-description').show();
      $('#problemDescription').focus();
      return false;
    }

    if (returnMode == '') {
      $('.return-mode').show();
      return false;
    }

    if($('#detailAddress').val() == '') {
      $('.info-address').show();
      return false;
    }

    if($('#pickTime').val() == '') {
      $('.select-pick-time').show();
      return false;
    }

    $('.apply-submit-mask2').animate({top:"50%"});
    $('.apply-submit-mask-wrapper2').show();

  })

  //键盘抬起隐藏提示
  $('#problemDescription,#receiver,#phoneNumber,#detailAddress').on('keyup', function () {
    $('.problem-description').hide();
    $('.after-receiver').hide();
    $('.phone-number').hide();
    $('.info-address').hide();
  });

  //获取当前时间
  var year3 = new Date().getFullYear();
  var month3 = (new Date().getMonth() + 1);
  var day3 = new Date().getDate();
  if (month3 < 10) {
    month3 = '0' + month3;
  } else {
    month3 == month3;
  }

  if (day3 < 10) {
    day3 = '0' + day3;
  } else {
    day3 == day3;
  }

  //取件时间
  var pickTimeVal = '';
  $(document).on('click', '.pick-date-optional', function () {
    //判断点击的这个时间段是否有class
    if ($(this).hasClass('disabled')) {
      $('#pickTime').val(pickTimeVal);
    } else {
      if ($(this).siblings('.pick-date-right-date').find('.pickDate').text() == '今日') {
        var myDate3 = year3 + '-' + month3 + '-' + day3;

        pickTimeVal = myDate3 + ' ' + '(' + $(this).siblings('.pick-date-right-date').find('.pick-week').text() + ')' + ' ' + '09:00-15:00';

        $('#pickTime').val(myDate3 + ' ' + '(' + $(this).siblings('.pick-date-right-date').find('.pick-week').text() + ')' + ' ' + '09:00-15:00');

        if($(this).siblings('.pick-date-optional').hasClass('disabled')) {
          $(this).text('已选').parents('.pick-date-right-item').siblings('.pick-date-right-item').find('.pick-date-optional,.pick-date-optional2').text('可选').siblings('.disabled').text('');
        }else {
          $(this).text('已选').siblings('.pick-date-optional2').text('可选').parents('.pick-date-right-item').siblings('.pick-date-right-item').find('.pick-date-optional,.pick-date-optional2').text('可选').siblings('.disabled').text('');
        }

        $(this).parents('.pick-date-right-item').siblings('.pick-date-right-item').find('.pick-date-optional,.pick-date-optional2').removeClass('apply-after-bg');

        $(this).addClass("apply-after-bg").siblings('.pick-date-optional2').removeClass('apply-after-bg');

        $('.select-pick-time').hide();
      } else {
        pickTimeVal = $(this).siblings('.pick-date-right-date').find('.pickDate').text() + ' ' + '(' + $(this).siblings('.pick-date-right-date').find('.pick-week').text() + ')' + ' ' + '09:00-15:00'

        $('#pickTime').val($(this).siblings('.pick-date-right-date').find('.pickDate').text() + ' ' + '(' + $(this).siblings('.pick-date-right-date').find('.pick-week').text() + ')' + ' ' + '09:00-15:00');

        if($(this).siblings('.pick-date-optional').hasClass('disabled')) {
          $(this).text('已选').parents('.pick-date-right-item').siblings('.pick-date-right-item').find('.pick-date-optional,.pick-date-optional2').text('可选').siblings('.disabled').text('');
        }else {
          $(this).text('已选').siblings('.pick-date-optional2').text('可选').parents('.pick-date-right-item').siblings('.pick-date-right-item').find('.pick-date-optional,.pick-date-optional2').text('可选').siblings('.disabled').text('');
        }

        $(this).parents('.pick-date-right-item').siblings('.pick-date-right-item').find('.pick-date-optional,.pick-date-optional2').removeClass('apply-after-bg');

        $(this).addClass("apply-after-bg").siblings('.pick-date-optional2').removeClass('apply-after-bg');

        $('.select-pick-time').hide();
      }
    }
  });

  $(document).on('click', '.pick-date-optional2', function () {
    if ($(this).hasClass('disabled') && $(this).siblings('.pick-date-optional').hasClass('disabled')) {
      $('#pickTime').val(pickTimeVal);
    } else {
      if ($(this).siblings('.pick-date-right-date').find('.pickDate').text() == '今日') {
        var myDate3 = year3 + '-' + month3 + '-' + day3;
        
        pickTimeVal = myDate3 + ' ' + '(' + $(this).siblings('.pick-date-right-date').find('.pick-week').text() + ')' + ' ' + '15:00-21:00'

        $('#pickTime').val(myDate3 + ' ' + '(' + $(this).siblings('.pick-date-right-date').find('.pick-week').text() + ')' + ' ' + '15:00-21:00');

        if($(this).siblings('.pick-date-optional').hasClass('disabled')) {
          $(this).text('已选').parents('.pick-date-right-item').siblings('.pick-date-right-item').find('.pick-date-optional,.pick-date-optional2').text('可选').siblings('.disabled').text('');
        }else {
          $(this).text('已选').siblings('.pick-date-optional').text('可选').parents('.pick-date-right-item').siblings('.pick-date-right-item').find('.pick-date-optional,.pick-date-optional2').text('可选').siblings('.disabled').text('');
        }

        $(this).parents('.pick-date-right-item').siblings('.pick-date-right-item').find('.pick-date-optional2,.pick-date-optional').removeClass('apply-after-bg');

        $(this).addClass("apply-after-bg").siblings('.pick-date-optional').removeClass('apply-after-bg');

        $('.select-pick-time').hide();
      } else {
        pickTimeVal = $(this).siblings('.pick-date-right-date').find('.pickDate').text() + ' ' + '(' + $(this).siblings('.pick-date-right-date').find('.pick-week').text() + ')' + ' ' + '15:00-21:00'

        $('#pickTime').val($(this).siblings('.pick-date-right-date').find('.pickDate').text() + ' ' + '(' + $(this).siblings('.pick-date-right-date').find('.pick-week').text() + ')' + ' ' + '15:00-21:00');

        if($(this).siblings('.pick-date-optional').hasClass('disabled')) {
          $(this).text('已选').parents('.pick-date-right-item').siblings('.pick-date-right-item').find('.pick-date-optional,.pick-date-optional2').text('可选').siblings('.disabled').text('');
        }else {
          $(this).text('已选').siblings('.pick-date-optional').text('可选').parents('.pick-date-right-item').siblings('.pick-date-right-item').find('.pick-date-optional,.pick-date-optional2').text('可选').siblings('.disabled').text('');
        }

        $(this).parents('.pick-date-right-item').siblings('.pick-date-right-item').find('.pick-date-optional2,.pick-date-optional').removeClass('apply-after-bg');

        $(this).addClass("apply-after-bg").siblings('.pick-date-optional').removeClass('apply-after-bg');

        $('.select-pick-time').hide();
      }
    }
  });


  //关闭模态框
  $('.apply-submit-mask-head-right').on('click', function() {
    $('.apply-submit-mask').animate({top:"-50%"});
    $('.apply-submit-mask-wrapper').hide();
    $('.apply-submit-mask2').animate({top:"-50%"});
    $('.apply-submit-mask-wrapper2').hide();
  });

})

var intDiff = parseInt(60);//倒计时总秒数量

function timer(intDiff) {
  window.setInterval(function () {
    var day = 0,
      hour = 0,
      minute = 0,
      second = 0;//时间默认值		
    if (intDiff > 0) {
      day = Math.floor(intDiff / (60 * 60 * 24));
      hour = Math.floor(intDiff / (60 * 60)) - (day * 24);
      minute = Math.floor(intDiff / 60) - (day * 24 * 60) - (hour * 60);
      second = Math.floor(intDiff) - (day * 24 * 60 * 60) - (hour * 60 * 60) - (minute * 60);
    }
    if (minute <= 9) minute = '0' + minute;
    if (second <= 9) second = '0' + second;
    $('#day_show').html(day + "天");
    $('#hour_show').html('<s id="h"></s>' + hour + '时');
    $('#minute_show').html('<s></s>' + minute + '分');
    $('#second_show').html('<s></s>' + second + '秒');
    intDiff--;
  }, 1000);
} 