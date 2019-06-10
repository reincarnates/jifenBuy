$(function() {
  $('.order-goodsPrice2').css('height', $('.order-info-content2 .order-goods-all').height());
  $('.order-goods-status2').css('height', $('.order-info-content2 .order-goods-all').height());
  $('.order-goods-setting2').css('height', $('.order-info-content2 .order-goods-all').height());

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

  //选择取消订单原因下拉框
  var selectCauseNum = 0;
  $('#selectCause').on('click', function() {
    if(selectCauseNum == 0) {
      // $(this).addClass('cacel-order-mask-selet-cause-center-bg');
      $('.cacel-order-mask-selet-cause-content').show();
      selectCauseNum = 1;
    }else{
      // $(this).removeClass('cacel-order-mask-selet-cause-center-bg');
      $('.cacel-order-mask-selet-cause-content').hide();
      selectCauseNum = 0;
    }
  });

  //原因下拉框选择的值
  $('.cacel-order-mask-selet-cause-content li').on('click', function() {
    $('#selectCause').val($(this).text());
    // $(this).removeClass('cacel-order-mask-selet-cause-center-bg');
    $('.cacel-order-mask-selet-cause-content').hide();
    selectCauseNum = 0;
    $('.cacel-order-mask-selet-cause-center').css('border-color', '#d1d1d1');
  });


  //确认选择取消原因
  $('.cacel-order-mask-selet-cause-btn').on('click', function() {
    if($('#selectCause').val() == '') {
      $('.cacel-order-mask-selet-cause-center').css('border-color', 'red');
      return false;
    }
    $('.cacel-order-mask-head-img').trigger('click');
  });

  //关闭取消订单弹框
  $('.cacel-order-mask-head-img').on('click', function() {
    $('.cacel-order-mask-wrapper').hide();
    $('.cacel-order-mask').animate({top:"-50%"});
  });

  //取消订单弹出提示
  $('.cancel-order').on('click', function() {
    $('.cacel-order-mask-wrapper').show();
    $('.cacel-order-mask').animate({top:"50%"});
  });

  //删除订单回收站订单提示
  $(document).on('click', '.order-delete', function() {
    $('.delete-order-mask-wrapper').show();
    $('.delete-order-mask').animate({top:'50%'});
  });

  //关闭订单回收站订单提示
  $('.close-order-mask').on('click', function() {
    $('.delete-order-mask-wrapper').hide();
    $('.delete-order-mask').animate({top:'-50%'});
  });

  //取消
  $('.delete-order-mask-btn-right').on('click', function() {
    $('.close-order-mask').trigger('click');
  });

});