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
  $('.shipped-current-status-right-change-time').on('click', function() {
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
    $('.shipped-current-status-right-change-time').hide();

  });

  $('#LogisticsCompanyInput,#LogisticsOrderInput,#LogisticsNumberInput').on('keyup', function() {
    $('.express-fill-message-rule').hide();
    $('.express-fill-message-rule2').hide();
    $('.express-fill-message-rule3').hide();
  });

})