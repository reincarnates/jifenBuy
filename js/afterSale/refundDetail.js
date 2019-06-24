$(function() {

  //展开地址
  var retractNum = 0;
  $('.retract').on('click', function() {
    if(retractNum == 0) {
      $('.track-rcol2').css('height', '180px');
      $(this).text('展开');
      retractNum = 1;
    }else{
      $('.track-rcol2').css('height', $('.track-list2').height()+10)
      $(this).text('收起');
      retractNum = 0;
    }
  });

  //弹出填写快递单号模态框
  $('.shipped-current-status-right-change-time2').on('click', function() {
    $('.express-number-mask-wrapper').show();
    $('.express-number-mask').animate({top:'50%'})
  });

  //关闭填写快递单号模态框
  $('.express-number-mask-head-right img').on('click', function() {
    $('.express-number-mask-wrapper').hide();
    $('.express-number-mask').animate({top:'-50%'})
  });

  //模态框点击确定提交快递运单信息
  $('.express-confirm-submit-btn').on('click', function() {
    // if($('#LogisticsCompanyInput').val() == '' && $('#LogisticsOrderInput').val() == '' && $('#LogisticsNumberInput').val() == '') {
    //   $('.express-fill-message-rule').show();
    //   return false;
    // }
    if($('#LogisticsCompanyInput').val() == '') {
      $('.express-fill-message-rule').show();
      $('#LogisticsCompanyInput').focus();
      return false;
    }

    if($('#LogisticsOrderInput').val() == '') {
      $('.express-fill-message-rule2').show();
      $('#LogisticsOrderInput').focus();
      return false;
    }

    if($('#LogisticsNumberInput').val() == '') {
      $('.express-fill-message-rule3').show();
      $('#LogisticsNumberInput').focus();
      return false;
    }

    $('.express-number-mask-head-right img').trigger('click');
    $('#LogisticsCompanyInput,#LogisticsOrderInput,#LogisticsNumberInput').val('');
    $('.shipped-current-status-right-change-time2').hide();

  });

  $('#LogisticsCompanyInput,#LogisticsOrderInput,#LogisticsNumberInput').on('keyup', function() {
    $('.express-fill-message-rule').hide();
    $('.express-fill-message-rule2').hide();
    $('.express-fill-message-rule3').hide();
  });

  //问号图标鼠标移入出现文案
  $('.change-time-img').on('mouseover', function() {
    $('.prompt-text').show();
  }).on('mouseout', function() {
    $('.prompt-text').hide();
  });

  //修改时间弹框
  $('.shipped-current-status-right-change-time').on('click', function() {
    $('.reset-refund-mask-wrapper').show();
    $('.reset-refund-mask').animate({'top': '50%'});
  });

  //关闭弹框
  $('.reset-refund-mask-head-right').on('click', function() {
    $('.reset-refund-mask-wrapper').hide();
    $('.reset-refund-mask').animate({'top': '-50%'});
  });

  //确认提交
  $('.reset-refund-mask-bottom').on('click', function() {
    $('.reset-refund-mask-head-right').trigger('click');
  });

})