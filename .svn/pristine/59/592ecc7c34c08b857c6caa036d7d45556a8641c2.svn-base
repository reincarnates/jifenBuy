$(function () {

  $('.help-left').css('height', $('.help-right').height());

  $(".list_dt").on("click", function () {
    $('.list_dd').stop();
    $(this).siblings("dt").removeAttr("id");
    if ($(this).attr("id") == "open") {
      $(this).removeAttr("id").siblings("dd").slideUp();
    } else {
      $(this).attr("id", "open").next().slideDown().siblings("dd").slideUp();
    }

    $(".help-hide").eq($(".list_dt").index(this)).addClass("help-show").siblings().removeClass('help-show');

    $('.help-left').css('height', $('.help-right').height());
  });

  $('.list_li a').on('click', function() {
    $(this).addClass("list_li_color").parent('.list_li').siblings('.list_li').find('a').removeClass('list_li_color').parents('.list_dd').siblings('.list_dd').find('ul li a').removeClass('list_li_color');
  });

})