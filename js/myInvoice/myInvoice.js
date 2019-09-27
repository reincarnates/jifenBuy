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

  //校验银行账号
  $('#bankNumber').on('input', function() {
    var bankno = $(this).val().replace(/\s/g, '');
    if (bankno.length < 16 || bankno.length > 19) {
      $('.accountLocation').show().text('银行卡号长度必须在16到19之间').css('right', '-210px');
      return false;
    } else {
      $('.accountLocation').hide().text('请填写银行账号').css('right', '-194px');
    }
    var num = /^\d*$/;//全数字
    if (!num.exec(bankno)) {
      $('.accountLocation').show().text('银行卡号必须全为数字');
      return false;
    } else {
      $('.accountLocation').hide().text('请填写银行账号');
    }
    //开头6位
    var strBin = "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
    if (strBin.indexOf(bankno.substring(0, 2)) == -1) {
      $('.accountLocation').show().text('银行卡号开头6位不符合规范');
      return false;
    } else {
      $('.accountLocation').hide().text('请填写银行账号');
    }
  });

  //选择企业校验手机号
  $('#enterprisePhone').on('input', function() {
    if(!phoneReg.test($(this).val())) {
      $('.enterprisePhoneRule').show();
      $(this).css('border-color', 'red');
    }else{
      $('.enterprisePhoneRule').hide();
      $(this).css('border-color', '#d5d5d5');
    }
  });

  //选择企业校验邮箱
  $('#enterpriseEmail').on('input', function() {
    if(!emailReg.test($(this).val())) {
      $('.enterpriseEmailRule').show();
      $(this).css('border-color', 'red');
    }else{
      $('.enterpriseEmailRule').hide();
      $(this).css('border-color', '#d5d5d5');
    }
  });

  //增加资质校验纳税人识别码
  $('#taxpayerID').on('input', function() {
    if(checkTaxId($(this).val())) {
      $('.taxpayerIDRule').show().text('请填写正确的纳税人识别码');
      $(this).css('border-color', 'red');
    }else{
      $('.taxpayerIDRule').hide();
      $(this).css('border-color', '#d5d5d5');
    }
  });

  //增加资质校验银行账号
  $('#intelligenceBack').on('input', function() {
    var bankno = $(this).val().replace(/\s/g, '');
    if (bankno.length < 16 || bankno.length > 19) {
      $('.accountLocation2').show().text('银行卡号长度必须在16到19之间').css('right', '-210px');
      return false;
    } else {
      $('.accountLocation2').hide().text('请填写银行账号').css('right', '-194px');
    }
    var num = /^\d*$/;//全数字
    if (!num.exec(bankno)) {
      $('.accountLocation2').show().text('银行卡号必须全为数字');
      return false;
    } else {
      $('.accountLocation2').hide().text('请填写银行账号');
    }
    //开头6位
    var strBin = "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
    if (strBin.indexOf(bankno.substring(0, 2)) == -1) {
      $('.accountLocation2').show().text('银行卡号开头6位不符合规范');
      return false;
    } else {
      $('.accountLocation2').hide().text('请填写银行账号');
    }
  });

  //增加资质校验手机号
  $('#intelligencePhone').on('input', function() {
    if(!phoneReg.test($(this).val())) {
      $('.intelligencePhoneRule').show().text('请填写正确的手机号');
      $(this).css('border-color', 'red');
    }else{
      $('.intelligencePhoneRule').hide();
      $(this).css('border-color', '#d5d5d5');
    }
  });

  //增加资质校验邮箱
  $('#intelligenceEmail').on('input', function() {
    if(!emailReg.test($(this).val())) {
      $('.intelligenceEmailRule').show().text('请填写正确格式的邮箱');
      $(this).css('border-color', 'red');
    }else{
      $('.intelligenceEmailRule').hide();
      $(this).css('border-color', '#d5d5d5');
    }
  });

  //单位名称
  $('#unitName').on('input', function() {
    $('.unitNameRule').hide();
  });

  //弹出增加资质弹框
  $('.myInvoice-intelligence-btn').on('click', function() {
    $('.add-intelligence-bg').show();
  });

  //关闭增加资质弹框
  $('.closeIntelligence').on('click', function() {
    $('.add-intelligence-bg').hide();
  });

  //修改资质
  $('.edit-intelligence-btn').on('click', function() {
    $('.add-intelligence-bg').show();
  });

  //增加资质保存
  $('.add-intelligence-save').on('click', function() {
    if($('#unitName').val() == '') {
      $('.unitNameRule').show();
      return false;
    }

    if($('#taxpayerID').val() == '') {
      $('.taxpayerID').show().text('请填写纳税人识别码');
      return false;
    }

    if($('#intelligencePhone').val() == '') {
      $('.intelligencePhone').show().text('请填写手机号');
      return false;
    }

    if($('#intelligenceEmail').val() == '') {
      $('.intelligenceEmail').show().text('请填写邮箱');
      return false;
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