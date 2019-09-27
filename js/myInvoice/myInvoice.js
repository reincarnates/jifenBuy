$(function() {

  $('.myInvoice-price2, .myInvoice-status2, .myInvoice-setting2').css('height', $('.price-height').height());

  $('.apply-myInvoice-item-btn2 img:eq(0), .apply-myInvoice-item-btn3 img:eq(0)').css('display', 'block');


  //头部选项卡
  $('.myInvoice-head-word').on('click', function() {
    $(".myInvoice-head-word").eq($(".myInvoice-head-word").index(this)).addClass("myInvoice-head-word-cur").siblings().removeClass('myInvoice-head-word-cur');
		$(".invoiceOff").eq($(".myInvoice-head-word").index(this)).addClass("invoiceOn").siblings().removeClass('invoiceOn');
  });

  //弹出申请开票
  $('.myInvoice-setting-btn').on('click', function() {
    $('.apply-myInvoice-bg').show();
  });

  //选择发票抬头
  $('.apply-myInvoice-item-btn2').on('click', function() {
    $(this).find('img').show().parent().siblings().find('img').hide();
    $(".applyOff").eq($(".apply-myInvoice-item-btn2").index(this)).addClass("applyOn").siblings().removeClass('applyOn');
  });

  //关闭申请开票
  $('.apply-myInvoice-close').on('click', function() {
    $('.apply-myInvoice-bg').hide();
  });
  $('.apply-myInvoice-btn-cancel').on('click', function() {
    $('.apply-myInvoice-close').trigger('click');
  });

  //选择发票内容
  $('.apply-myInvoice-item-btn3').on('click', function() {
    $(this).find('img').show().parent().siblings().find('img').hide();
  });

  //检验手机号
  var phoneReg=/^[1][3,4,5,7,8][0-9]{9}$/;
  $('#personPhone').on('input', function() {
    if(!phoneReg.test($(this).val())) {
      $('.personPhoneRule').show();
      $(this).css('border-color', 'red');
    }else{
      $('.personPhoneRule').hide();
      $(this).css('border-color', '#d5d5d5');
    }
  });

  //校验邮箱
  var emailReg = /^[0-9a-zA-Z_.-]+[@][0-9a-zA-Z_.-]+([.][a-zA-Z]+){1,2}$/;
  $('#personEmail').on('input', function() {
    if(!emailReg.test($(this).val())) {
      $('.personEmailRule').show();
      $(this).css('border-color', 'red');
    }else{
      $('.personEmailRule').hide();
      $(this).css('border-color', '#d5d5d5');
    }
  });

  //校验纳税人识别号
  $('#taxpayerNumber').on('input', function() {
    if(checkTaxId($(this).val())) {
      $('.taxpayerNumberRule').show();
      $(this).css('border-color', 'red');
    }else{
      $('.taxpayerNumberRule').hide();
      $(this).css('border-color', '#d5d5d5');
    }
  });

})



/**
 * javascript验证纳税人识别号格式
 * @param  taxId [纳税人识别号]
 * @return true格式正确，false格式错误
 */
function checkTaxId(taxId) {
  var regArr = [/^[\da-z]{10,15}$/i, /^\d{6}[\da-z]{10,12}$/i, /^[a-z]\d{6}[\da-z]{9,11}$/i, /^[a-z]{2}\d{6}[\da-z]{8,10}$/i, /^\d{14}[\dx][\da-z]{4,5}$/i, /^\d{17}[\dx][\da-z]{1,2}$/i, /^[a-z]\d{14}[\dx][\da-z]{3,4}$/i, /^[a-z]\d{17}[\dx][\da-z]{0,1}$/i, /^[\d]{6}[\da-z]{13,14}$/i],
      i, j = regArr.length;
  for (var i = 0; i < j; i++) {
      if (regArr[i].test(taxId)) {
          return true;
      }
  }
  //纳税人识别号格式错误
  return false;
}