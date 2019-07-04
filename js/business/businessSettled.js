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
    $('body,html').animate({ scrollTop: 1273 }, 500);
  });

  // $('#criteria').on('click', function() {
  //   $('body,html').animate({ scrollTop: 2468 }, 500);
  // });

  // $('#cooperation').on('click', function() {
  //   $('body,html').animate({ scrollTop: 3893 }, 500);
  // });

  $('#cooperativeBrand').on('click', function() {
    $('body,html').animate({ scrollTop: 2255 }, 500);
  });

  console.log(window);

})