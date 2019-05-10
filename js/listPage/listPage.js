$(function() {

  $('.filter-top-tab-item').click(function() {
    $(".filter-top-tab-item").eq($(".filter-top-tab-item").index(this)).addClass("filterCur").siblings().removeClass('filterCur');
  });

  $('.listpage-goods-item-btn-left').on('click',function() {
    alert();
  });
})