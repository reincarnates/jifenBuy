$(function() {


  $('.registration-input-rule').on('mouseover', function() {
    $(this).find('.registration-code-word').show();
  }).on('mouseout', function() {
    $(this).find('.registration-code-word').hide();
  });

  var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
  $('#phoneRule').on('keyup', function() {
    if(!phoneReg.test($(this).val())) {
      $('.phoneRules').show();
    }else{
      $('.phoneRules').hide();
    }
  });

  $('.register-btn').on('click', function() {
    if($('#userName').val() == '') {
      $('.userName').show();
      return false;
    }else{
      $('.userName').hide();
    }

    if($('#passWord').val() == '') {
      $('.passWord').show();
      return false;
    }else{
      $('.passWord').hide();
    }
    
    if($('#imgRuleCode').val() == '') {
      $('.imgRuleCode').show();
      return false;
    }else{
      $('.imgRuleCode').hide();
    }

    if($('#phoneRule').val() == '') {
      $('.phoneRules').show();
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
  });

  $('#userName,#passWord,#imgRuleCode,#phoneRule,#phoneRuleCode').on('keyup', function() {
    $(this).parent('.registration-input-right').siblings('.registrationRules').hide();
  });

});