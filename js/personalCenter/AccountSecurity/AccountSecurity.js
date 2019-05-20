$(function() {
  
  //获取验证码
  $('.obtain-rule-code-btn').on('click', function() {
    alert();
  });

  //输入框输入验证码之后下一步按钮变色
  var ruleLen;
  $('#ruleCode').on('keyup', function() {
    ruleLen = $(this).val();
    if(ruleLen.length == 6) {
      $('.obtain-rule-next-btn').css({'backgroundColor': '#ffb030', 'cursor': 'pointer'});
    }
  });

  var $step = $("#step");
  var $index = $("#index");
  $step.step({
    index: 0,
    time: 500,
    title: ["身份验证", "设置支付密码", "完成"]
  });
  $index.text($step.getIndex());
  $("#nextBtn").on("click", function() {
    if(ruleLen.length == 6) {
      $step.nextStep();
      if($step.getIndex() == 0) {
        $('.step1').css('display','block');
        $('.step2').css('display','none');
        $('.step3').css('display','none');
      }else if($step.getIndex() == 1) {
        $('.step1').css('display','none');
        $('.step2').css('display','block');
        $('.step3').css('display','none');
      }else if($step.getIndex() == 2) {
        $('.step1').css('display','none');
        $('.step2').css('display','none');
        $('.step3').css('display','block');
      }
    }
  });

  //输入第一个支付密码
  $('#paymentPw').on('keyup', function() {
    if($(this).val().length < 6) {
      $('.rule-error').show();
    }else{
      $('.rule-error').hide();
    }
  });

  //确认支付密码
  $('#confirmPaymentPw').on('keyup', function() {
    if($(this).val() == $('#paymentPw').val()) {
      $('#confirmPass').hide();
    }else{
      $('#confirmPass').show();
    }

    if($(this).val().length == 6 && $('#paymentPw').val().length == 6 && $(this).val() == $('#paymentPw').val()) {
      $('.pm-password-btn').css({'backgroundColor': '#ffb030', 'cursor': 'pointer'});
    }else{
      $('.pm-password-btn').css({'backgroundColor': '#cbcbcb', 'cursor': 'not-allowed'});
    }

  });

  //提交修改密码
  $('.pm-password-btn').on('click', function() {
    if($('#confirmPaymentPw').val() == $('#paymentPw').val()) {
      $step.nextStep();
      if($step.getIndex() == 0) {
        $('.step1').css('display','block');
        $('.step2').css('display','none');
        $('.step3').css('display','none');
      }else if($step.getIndex() == 1) {
        $('.step1').css('display','none');
        $('.step2').css('display','block');
        $('.step3').css('display','none');
      }else if($step.getIndex() == 2) {
        $('.step1').css('display','none');
        $('.step2').css('display','none');
        $('.step3').css('display','block');
      }
    }
  });

})