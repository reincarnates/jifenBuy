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

})