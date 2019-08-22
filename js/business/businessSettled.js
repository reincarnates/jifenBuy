$(function() {

  $(window).on('scroll', function () {
    var scrollTop = $(document).scrollTop();
    if(scrollTop >= 672) {
      $('.suspension-box').show();
    }else{
      $('.suspension-box').hide();
    }
  });

  $('#residence').on('click', function() {
    $('body,html').animate({ scrollTop: 1407 }, 500);
  });

  $('#criteria').on('click', function() {
    $('body,html').animate({ scrollTop: 2827 }, 500);
  });

  $('#company').on('click', function() {
    $('body,html').animate({ scrollTop: 3373 }, 500);
  });

  $('#brand').on('click', function() {
    $('body,html').animate({ scrollTop: 5473 }, 500);
  });

  $('#cooperativeBrand').on('click', function() {
    $('body,html').animate({ scrollTop: 6113 }, 500);
  });

})