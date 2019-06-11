$(function() {

  $('.shipped-current-status-right').on('click', function() {
    $('.modal-frame').show();
    $(".modal").animate({ top: '50%' });
  });

  //关闭新增收货地址模态框
  $('.modal-head-img').on('click', function () {
    $(".modal").animate({ top: '-50%' });
    $('.modal-frame').hide();
  });

})