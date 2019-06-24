$(function() {

  //评价上传弹出上传头像对话框
  $('.goods-comment-item-right-upload-btn').click(function () {
    return $('#evaluateUpload').click(); //注意这句，主要是需要return点击事件返回值
  });

  //上传头像
  $('#evaluateUpload').on('change', function (event) {
    const files = event.target.files[0];
    var type = files.type.split("/")[1];
    console.log(files, type);
    if (type == 'jpg' || type == 'png' || type == 'jpeg' || type == 'bmp') {
      if (files.size < 1024 * 1024 * 5) {
        alert('成功');
      } else {
        alert('请上传小于5MB的头像！！！');
      }
    } else {
      alert('请上传jpg或png或jpeg格式的图片！');
    }
  });

  //发表评价
  $(document).on('click','.goods-comment-item-right-comment-btn', function () {
    var textareaVal = $(this).parent('.goods-comment-item-right-comment-wrapper').siblings('.goods-comment-item-right-input').find('textarea').val();
    if(textareaVal == '') {
      $('.goods-comment-item-right-not-comment').show();
      return false;
    }else{
      $('.goods-comment-item-right-not-comment').hide();
    }
    $('.comment-mask-warpper').show();
  });

  //textarea字数变化
  $(document).on('keyup','.wordNumber', function() {
    $(this).siblings('.goods-comment-word-number').find('.goods-comment-word-numbers').text($(this).val().length)
  });

  //关闭弹出框
  $('.comment-mask-head-img').on('click', function() {
    $('.comment-mask-warpper').hide();
  });

})