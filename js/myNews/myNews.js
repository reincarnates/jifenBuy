$(function() {

  $(".mynews-head-item").click(function() {
    $(".mynews-head-item").eq($(this).index()).addClass("mynews-head-item-active").siblings().removeClass('mynews-head-item-active');
    $(".mynews-hide").eq($(".mynews-head-item").index(this)).addClass("mynews-show").siblings().removeClass('mynews-show'); 
  });

  $('.activity').text($('.mynews-content-item').length);

  $('.trade').text($('.mynews-trade-logistics-item').length);

  $('.notice').text($('.mynews-trade-logistics-item2').length);

})