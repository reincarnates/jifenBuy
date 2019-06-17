$(function() {

  //点击删除
  $(document).on('click', '.purchase-item-operation-right', function() {
    $(this).parent('.purchase-item-operation').siblings('.delete-purchase-mask-wrapper').show();
  });

  //取消
  $(document).on('click', '.delete-purchase-mask-btn-right', function() {
    $(this).parents('.delete-purchase-mask-wrapper').hide();
  });

  //确定
  $(document).on('click', '.delete-purchase-mask-btn-left', function() {
    $(this).parents('.delete-purchase-mask-wrapper').hide();
  });

});