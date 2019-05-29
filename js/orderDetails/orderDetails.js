$(function() {

  $('.order-goods-status2').css('height', $('.order-goods-all').height());
  $('.order-goods-setting2').css('height', $('.order-goods-all').height());

  $(".tab2 li").click(function() {
    $(".tab2 li").eq($(this).index()).addClass("cur2").siblings().removeClass('cur2');
    $(".ob3").eq($(".tab2 li").index(this)).addClass("on3").siblings().removeClass('on3'); 
  });

  //选择规定时间段的订单
  $('.fuli-order-left').mouseover(function() {
    $(this).addClass('fuli-order-bg');
    $(this).find('.fuli-order-arrow').addClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item').css('display','block');
  }).mouseout(function() {
    $(this).removeClass('fuli-order-bg');
    $(this).find('.fuli-order-arrow').removeClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item').css('display','none');
  });

  $('.fuli-order-left-item ul li').click(function() {
    $('.fuli-check-time').text($(this).text());
  });

  $('.fuli-order-left-item2 ul li').click(function() {
    $('.check-list').text($(this).text());
  });

  //选择订单状态
  $('.all-status').mouseover(function() {
    $(this).addClass('fuli-order-bg');
    $(this).find('.fuli-order-list-arrow').addClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item2').css('display','block');
  }).mouseout(function() {
    $(this).removeClass('fuli-order-bg');
    $(this).find('.fuli-order-list-arrow').removeClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item2').css('display','none');
  });


  //收起
  var retractNum = 0;
  $('.retract').on('click', function() {
    if(retractNum == 0) {
      $('.track-rcol').css('height', '138px');
      $(this).text('展开');
      retractNum = 1;
    }else{
      $('.track-rcol').css('height', $('.track-list').height()+10)
      $(this).text('收起');
      retractNum = 0;
    }
  });
  
  $('.all-order').text($('.all-order-info .fuli-order-info').length);
  
  $('.pending').text($('.pending-wrapper .fuli-order-info').length);

  $('.shipped').text($('.shipped-wrapper .fuli-order-info').length);

  $('.received').text($('.received-wrapper .fuli-order-info').length);

  $('.comment').text($('.comment-wrapper .fuli-order-info').length);

});