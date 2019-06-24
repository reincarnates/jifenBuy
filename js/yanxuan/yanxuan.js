$(function() {

  $('.yanxuan_nav_ul li').on('mouseover', function() {
    $(this).find('.yanxuan_nav_select_wrapper').show();
  }).on('mouseout', function() {
    $(this).find('.yanxuan_nav_select_wrapper').hide();
    $(this).find('a').removeClass('yanxuan_nav_ul_color');
  });

  $('.yanxuan_nav_word').on('mouseover', function() {
    $(".yanxuan_nav_word").eq($(".yanxuan_nav_word").index(this)).addClass("yanxuan_nav_ul_color").parent('li').siblings('li').find('.yanxuan_nav_word').removeClass('yanxuan_nav_ul_color');
  });

  $('.yanxuan_nav_select_wrapper').on('mouseover', function() {
    $(this).siblings('.yanxuan_nav_word').addClass('yanxuan_nav_ul_color').parent('li').siblings('li').find('.yanxuan_nav_word').removeClass('yanxuan_nav_ul_color');
  }).on('mouseout', function() {
    $(this).siblings('.yanxuan_nav_word').removeClass('yanxuan_nav_ul_color');
  });

  $('.yanxuan_nav_word2').on('mouseover', function() {
    $(".yanxuan_nav_word").removeClass('yanxuan_nav_ul_color');
  });

  $('.yanxuan_nav_select_wrapper:eq(1)').css('left', '-120px');
  $('.yanxuan_nav_select_wrapper:eq(2)').css('left', '-240px');
  $('.yanxuan_nav_select_wrapper:eq(3)').css('left', '-360px');
  $('.yanxuan_nav_select_wrapper:eq(4)').css('left', '-480px');
  $('.yanxuan_nav_select_wrapper:eq(5)').css('left', '-600px');
  $('.yanxuan_nav_select_wrapper:eq(6)').css('left', '-720px');
  $('.yanxuan_nav_select_wrapper:eq(7)').css('left', '-840px');
  $('.yanxuan_nav_select_wrapper:eq(8)').css('left', '-960px');
  $('.yanxuan_nav_select_wrapper:eq(9)').css('left', '-1080px');
})