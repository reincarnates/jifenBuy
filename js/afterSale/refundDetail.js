$(function() {


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


  $('.shipped-current-status-right-change-time').on('click', function() {
    $('.express-number-mask-wrapper').show();
    $('.express-number-mask').animate({top:'50%'})
  });

  $('.express-number-mask-head-right img').on('click', function() {
    
  });


})