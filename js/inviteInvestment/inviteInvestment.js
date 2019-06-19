$(function() {

  var $step = $("#step");
  var $index = $("#index");
  $step.step({
    index: 0,
    time: 500,
    title: ["在线协议", "入驻申请", "招商分配", "补全信息", "入驻审核"]
  });
  $index.text($step.getIndex());
  
  $('#iAgree').on('click', function() {
    if($('#iAgree').is(':checked')) {
      // do something
      $('#agree').removeAttr('disabled').css('cursor', 'pointer');
    }else{
      $('#agree').attr('disabled', 'disabled').css('cursor', 'default');
    }
  });

  $('#agree').on('click', function() {
    $step.nextStep();
    $('.agree-box').hide().siblings('.agree-box2').show();
  });

  $('.help-content:eq(0)').show();
  $('.help-title').on('click', function() {
    $(this).siblings('.help-content').show().parent('li').siblings('li').find('.help-content').hide();
  });

});