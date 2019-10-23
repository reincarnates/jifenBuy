$(function() {


  $('.registration-input-rule').on('mouseover', function() {
    $(this).find('.registration-code-word').show();
  }).on('mouseout', function() {
    $(this).find('.registration-code-word').hide();
  });

  
  $('#phoneRule').on('keyup', function() {
    var val = $(this).val();
    if(!(/^1[34578]\d{9}$/.test(val))) {
      $('.phoneRules').show().text('请输入正确的手机号码').css('right', '-145px');
    }else{
      $('.phoneRules').hide();
    }
  });

  $('.register-btn').on('click', function() {

    if($('#phoneRule').val() == '') {
      $('.phoneRules').show().text('请输入手机号').css('right', '-95px');
      return false;
    }else if(!(/^1[34578]\d{9}$/.test($('#phoneRule').val()))) {
      $('.phoneRules').show().text('请输入正确的手机号码').css('right', '-145px');
      return false;
    }else{
      $('.phoneRules').hide();
    }

    if($('#phoneRuleCode').val() == '') {
      $('.phoneRuleCode').show();
      return false;
    }else{
      $('.phoneRuleCode').hide();
    }

    if($('#imgRuleCode').val() == '') {
      $('.imgRuleCode').show();
      return false;
    }else{
      $('.imgRuleCode').hide();
    }
  });


  var reg = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,24}$/;
  $('#newPassWord').on('keyup', function() {
    if(!reg.test($(this).val())) {
      $('.newPassWord').show();
    }else{
      $('.newPassWord').hide();
    }
  });

  $('#confirmPassWord').on('keyup', function() {
    if($('#confirmPassWord').val() != $('#newPassWord').val()) {
      $('.confirmPassWord').show();
    }else{
      $('.confirmPassWord').hide();
    }
  });

  $('#nextForget').on('click', function() {
    if(!reg.test($('#newPassWord').val())) {
      $('.newPassWord').show();
      return false;
    }else{
      $('.newPassWord').hide();
    }

    if($('#confirmPassWord').val() != $('#newPassWord').val()) {
      $('.confirmPassWord').show();
      return false;
    }else{
      $('.confirmPassWord').hide();
    }

  });

});