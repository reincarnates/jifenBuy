$(function() {

  $(".login-information-head-item").click(function() {
    $(".login-information-head-item").eq($(this).index()).addClass("cur2").siblings().removeClass('cur2');
    $(".ob2").eq($(".login-information-head-item").index(this)).addClass("on2").siblings().removeClass('on2'); 
  });

  $('.login-send-code2').mouseover(function() {
    $('.makecode').show();
  }).mouseout(function() {
    $('.makecode').hide();
  });

  //登录判断
  $('#loginPass').click(function() {
    if($('#userName').val() == '' && $('#passWord').val() == '' && $('#rule').val() == '') {
      $('.login-proving').show();
      $('.login-proving-right').text('请输入用户名密码验证码。');
      return false;
    }

    if($('#userName').val() == '') {
      $('.login-proving').show();
      $('.login-proving-right').text('请输入用户名。');
      return false;
    }

    if($('#passWord').val() == '') {
      $('.login-proving').show();
      $('.login-proving-right').text('请输入密码。');
      return false;
    }

    if($('#rule').val() == '') {
      $('.login-proving').show();
      $('.login-proving-right').text('请输入验证码。');
      return false;
    }

    alert('登陆成功');

  });

  //短信验证码登录
  $('#ruleLogin').click(function() {
    if($('#userName2').val() == '' && $('#shortRule').val() == '') {
      $('#short').show();
      $('#short .login-proving-right').text('请输入用户名和短信验证码。');
      return false;
    }

    if($('#userName2').val() == '') {
      $('#short').show();
      $('#short .login-proving-right').text('请输入用户名。');
      return false;
    }

    if($('#shortRule').val() == '') {
      $('#short').show();
      $('#short .login-proving-right').text('请输入短信验证码。');
      return false;
    }

  });

  //用户名密码输入框获取焦点隐藏提示
  $('#userName,#passWord,#userName2').focus(function() {
    $('.login-proving').hide();
  });

});