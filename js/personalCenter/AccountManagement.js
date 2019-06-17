$(function() {

  // $('.mysize_head_item_wrapper:first').addClass('mysizShow');

  $(document).on('click', '.mysize_head_item_wrapper', function() {
    $(".mysize_head_item_wrapper").eq($(".mysize_head_item_wrapper").index(this)).addClass("mysizShow").siblings().removeClass('mysizShow');
    if($(this).hasClass('newRole')) {
      $('#saveSize').show();
      $('#editSize').hide();
      $('.mysize_infomation_item_word_strong').hide();
      $('.mysize_infomation_item_input_wrap').show();
      $('.mysize_infomation_item_sex').show();
      $('.figure_height').hide();
      $('.figure_weight').hide();
      $('.figure_height2').show();
    }
  });

  $(document).on('mouseover','.mysize_head_item_wrapper', function() {
    $(this).find('.mysize_head_item').find('.del_mysize').show();
    $(this).find('.mysize_head_item2').find('.del_mysize').show();
  }).on('mouseout', function() {
    $(this).find('.mysize_head_item').find('.del_mysize').hide();
    $(this).find('.mysize_head_item2').find('.del_mysize').hide();
  });


  // var hobbyId = 0;
  $('.hobby-btn-item').on('click', function() {
    // $(".hobby-btn-item").eq($(".hobby-btn-item").index(this)).addClass("hobby-btn-item-active").siblings().removeClass('hobby-btn-item-active');
    // if(hobbyId == 0) {
    //   $(".hobby-btn-item").eq($(".hobby-btn-item").index(this)).addClass("hobby-btn-item-active");
    //   hobbyId = 1;
    // }else{
    //   $(".hobby-btn-item").eq($(".hobby-btn-item").index(this)).removeClass("hobby-btn-item-active");
    //   hobbyId = 0;
    // }
    // console.log(hobbyId);
    if($(this).hasClass('hobby-btn-item-active')) {
      $(".hobby-btn-item").eq($(".hobby-btn-item").index(this)).removeClass("hobby-btn-item-active");
    }else{
      $(".hobby-btn-item").eq($(".hobby-btn-item").index(this)).addClass("hobby-btn-item-active");
    }
  });

  $('.mysize_figure_content_left_item').on('mouseover', function() {
    $(".mysize_figure_content_right_img").eq($(".mysize_figure_content_left_item").index(this)).addClass("mysize_figure_content_right_img_show").siblings().removeClass('mysize_figure_content_right_img_show');
  });

  var sexVal = '';
  $('.mysize_infomation_item_sex_s').on('click', function() {
    $(".mysize_infomation_item_sex_s").eq($(".mysize_infomation_item_sex_s").index(this)).addClass("mysize_infomation_item_sex_s_cur").siblings().removeClass('mysize_infomation_item_sex_s_cur');
    sexVal = $(this).text();
  });

  //修改尺寸
  $('#editSize').on('click', function() {
    $('#saveSize').show();
    $('#editSize').hide();
    $('.mysize_infomation_item_word_strong').hide();
    $('.mysize_infomation_item_input_wrap').show();
    $('.mysize_infomation_item_sex').show();
    $('.figure_height').hide();
    $('.figure_weight').hide();
    $('.figure_height2').show();
  });

  //保存尺寸
  $('#saveSize').on('click', function() {
    if(sexVal == '男') {
      var roleDom = `
        <div class="mysize_head_item_wrapper">
          <div class="mysize_head_item">
            <div class="del_mysize">
              <img src="../../images/static/del_mysize.png" alt="">
            </div>
          </div>
          <div class="mysize_head_name">李易峰</div>
          <div class="mysize_head_select">
            <img src="../../images/static/mysize_select.png" alt="">
          </div>
        </div>
      `;
      $('.newRole').before(roleDom);
    }else{
      var roleDom = `
        <div class="mysize_head_item_wrapper">
          <div class="mysize_head_item mysize_head_item2">
            <div class="del_mysize">
              <img src="../../images/static/del_mysize.png" alt="">
            </div>
          </div>
          <div class="mysize_head_name">李易峰</div>
          <div class="mysize_head_select">
            <img src="../../images/static/mysize_select.png" alt="">
          </div>
        </div>
      `;
      $('.newRole').before(roleDom);
    }
  });

});