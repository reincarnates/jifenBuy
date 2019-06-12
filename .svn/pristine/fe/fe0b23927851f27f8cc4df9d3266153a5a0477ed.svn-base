$(function() {

  var $step = $("#step2");
  $step.step({
    index: 0,
    time: 500,
    title: ["身份验证", "修改支付密码", "完成"]
  });
  $(".login-info-btn").on("click", function() {
    if($('#shortInput').val() == '' && $('#verificationCode').val() == '') {
      $('.short-rule-error').show();
      $('.verification-rule-error').show();
      if($('#shortInput').val() == '') {
        $('#shortInput').focus();
        return false;
      }
      if($('#verificationCode').val() == '') {
        $('#verificationCode').focus();
        return false;
      }
    }else{
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

  $('#shortInput,#verificationCode').on('keyup', function() {
    if($('#verificationCode').val() == '') {
      $('.verification-rule-error').show();
    }else{
      $('.verification-rule-error').hide();
    }
    
    if($('#shortInput').val().length < 6) {
      $('.short-rule-error').show();
      $('.short-rule-error').text('请输入6位短信验证码');
    }else{
      $('.short-rule-error').hide();
    }
  });

  $('#newPassWord').on('keyup', function() {
    var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,}$/;
    if(!reg.test($(this).val())) {
      $('.newPassWord').show();
      $('.newPassWord').addClass('newPassWord-pos');
      $('.newPassWord').css('right', '-270px');
      $('.newPassWord').text('请输入至少8位数字和字母组合的密码');
    }else{
      $('.newPassWord').show();
      $('.newPassWord').removeClass('newPassWord-pos');
      $('.newPassWord').css('right', '-40px');
      $('.newPassWord').text('');
    }
  });

  $('#confirmPassWord').on('keyup', function() {
    if($('#confirmPassWord').val() != $('#newPassWord').val()) {
      $('.confirmPassWord').show();
      $('.confirmPassWord').addClass('newPassWord-pos');
      $('.confirmPassWord').css('right', '-250px');
      $('.confirmPassWord').text('两次输入密码不一致，请重新输入');
    }else{
      $('.confirmPassWord').show();
      $('.confirmPassWord').removeClass('newPassWord-pos');
      $('.confirmPassWord').css('right', '-40px');
      $('.confirmPassWord').text('');
      $('.login-new-password-btn').css({'backgroundColor': '#ffb030', 'cursor': 'pointer'});
    }
  });

  var primitiveVal = '123456';
  $('#primitivePassword').on('keyup', function() {
    if($('#primitivePassword').val() != primitiveVal) {
      $('.primitivePassWord').show();
    }else{
      $('.primitivePassWord').removeClass('newPassWord-pos');
    }
  });

  $('.login-new-password-btn').on('click', function() {
    if($('#confirmPassWord').val() != '' && $('#newPassWord').val() != '') {
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