$(function() {

  $(".store-collection-head-item").on('click', function () {
		$(".store-collection-head-item").eq($(".store-collection-head-item").index(this)).addClass("store-collection-head-item-active").siblings().removeClass('store-collection-head-item-active');
		$(".store-collection-show").eq($(".store-collection-head-item").index(this)).addClass("store-collection-hide").siblings().removeClass('store-collection-hide');
  });
  
  $(document).on('mouseover', '.store-collection-item-left-word', function() {
    $(this).siblings('.cancel-collection').show();
  }).on('mouseout', '.store-collection-item-left-word', function() {
    $(this).siblings('.cancel-collection').hide();
  });

  $(document).on('mouseover', '.cancel-collection', function() {
    $(this).show();
  }).on('mouseout', '.cancel-collection', function() {
    $(this).hide();
  });

  $(document).on('click','.cancel-collection', function() {
    alert();
  });

})