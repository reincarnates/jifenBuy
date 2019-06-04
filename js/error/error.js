$(function() {
  console.log($('.cashier-error-reload').position().top);
  $('.cashier-error-reload').on('click', function() {
    window.location.href = '../../index.html';
  });

})