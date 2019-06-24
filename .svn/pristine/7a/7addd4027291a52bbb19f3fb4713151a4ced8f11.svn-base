$(function () {

  //选择规定时间段的订单
  $('.fuli-order-left').mouseover(function () {
    $(this).addClass('fuli-order-bg');
    $(this).find('.fuli-order-arrow').addClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item').css('display', 'block');
  }).mouseout(function () {
    $(this).removeClass('fuli-order-bg');
    $(this).find('.fuli-order-arrow').removeClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item').css('display', 'none');
  });

  $('.fuli-order-left-item ul li').click(function () {
    $('.fuli-check-time').text($(this).text());
  });

  $('.fuli-order-left-item2 ul li').click(function () {
    $('.check-list').text($(this).text());
  });

  //选择订单状态
  $('.all-status').mouseover(function () {
    $(this).addClass('fuli-order-bg');
    $(this).find('.fuli-order-list-arrow').addClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item2').css('display', 'block');
  }).mouseout(function () {
    $(this).removeClass('fuli-order-bg');
    $(this).find('.fuli-order-list-arrow').removeClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item2').css('display', 'none');
  });

})