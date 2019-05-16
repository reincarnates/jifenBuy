$(function() {

  $('.filter-top-tab-item').click(function() {
    $(".filter-top-tab-item").eq($(".filter-top-tab-item").index(this)).addClass("filterCur").siblings().removeClass('filterCur');
  });

  $('.listpage-goods-item-btn-left').on('click',function() {
    alert();
  });

  $('.paging-content-ul a').click(function() {
    $(".paging-content-ul a").eq($(".paging-content-ul a").index(this)).addClass("currPaging").siblings().removeClass('currPaging');
  });

  $('.filter-btn').click(function() {
    $(".filter-btn").eq($(".filter-btn").index(this)).addClass("filter-btn-active").siblings().removeClass('filter-btn-active');
  });

  var priceNum = 0;
  $('#filterprice').on('click', function() {
    if(priceNum == 0) {
      $(this).addClass('filter-btn-bg');
      priceNum = 1;
    }else{
      $(this).removeClass('filter-btn-bg');
      priceNum = 0;
    }
  });


  var retractNum = 0;
  $('.brand-right-btn').on('click', function() {
    if(retractNum == 0) {
      $('.brand-right-btn').text('收起');
      $('.brand-wrapper').css('height', $('.brand-center').height());
      retractNum = 1;
    }else{
      $('.brand-right-btn').text('展开');
      $('.brand-wrapper').css('height', '60px');
      retractNum = 0;
    }
  });

})