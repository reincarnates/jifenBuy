$(function () {

  //查看物流状态
  // $('.personal-operation-item').find('.personal-operation-img').addClass('daifukuan');
  // $('.personal-operation-item').click(function () {
  //   var dataName = $(this).attr('data-name');
  //   if (dataName == '待付款') {
  //     $('.personal-operation-item').find('.personal-operation-img').addClass('daifukuan');
  //   } else {
  //     $('.personal-operation-item').find('.personal-operation-img').removeClass('daifukuan');
  //   }

  //   if (dataName == '待发货') {
  //     $('.personal-operation-item').find('.personal-operation-img2').addClass('daifahuo');
  //   } else {
  //     $('.personal-operation-item').find('.personal-operation-img2').removeClass('daifahuo');
  //   }

  //   if (dataName == '待收货') {
  //     $('.personal-operation-item').find('.personal-operation-img3').addClass('daishouhuo');
  //   } else {
  //     $('.personal-operation-item').find('.personal-operation-img3').removeClass('daishouhuo');
  //   }

  //   if (dataName == '已完成') {
  //     $('.personal-operation-item').find('.personal-operation-img4').addClass('yiwancheng');
  //   } else {
  //     $('.personal-operation-item').find('.personal-operation-img4').removeClass('yiwancheng');
  //   }

  //   if (dataName == '待评价') {
  //     $('.personal-operation-item').find('.personal-operation-img5').addClass('daipingjia');
  //   } else {
  //     $('.personal-operation-item').find('.personal-operation-img5').removeClass('daipingjia');
  //   }

  //   if (dataName == '退款退货') {
  //     $('.personal-operation-item').find('.personal-operation-img6').addClass('tuikuan');
  //   } else {
  //     $('.personal-operation-item').find('.personal-operation-img6').removeClass('tuikuan');
  //   }

  //   $(".personal-operation-item").eq($(".personal-operation-item").index(this)).addClass("curr").siblings().removeClass('curr');
  //   $(".ob").eq($(".personal-operation-item").index(this)).addClass("on").siblings().removeClass('on');
  // });

  //收藏选项卡
  $('.collection-tab-head-wrods').click(function () {
    $(".collection-tab-head-wrods").eq($(".collection-tab-head-wrods").index(this)).addClass("collection_active").siblings().removeClass('collection_active');
    $(".ob2").eq($(".collection-tab-head-wrods").index(this)).addClass("on2").siblings().removeClass('on2');
  });

  //账户信息选项卡
  $('.account-info-head-item').click(function () {
    $(".account-info-head-item").eq($(".account-info-head-item").index(this)).addClass("account_active").siblings().removeClass('account_active');
    $(".ob").eq($(".account-info-head-item").index(this)).addClass("on").siblings().removeClass('on');
  });

  //账户信息弹出上传头像对话框
  $('.account-portrait-right').click(function () {
    return $('#upload').click(); //注意这句，主要是需要return点击事件返回值
  });

  //上传头像
  $('#upload').on('change', function (event) {
    const files = event.target.files[0];
    var type = files.type.split("/")[1];
    // var fq = $('#upload');
    // console.log(fq[0].files.length);
    // if(fq[0].files.length > 3) {
    //   alert();
    // }
    if (type == 'jpg' || type == 'png' || type == 'jpeg') {
      if (files.size < 1024 * 1024 * 3) {
        alert('成功');
      } else {
        alert('请上传小于3MB的头像！！！');
      }
    } else {
      alert('请上传jpg或png或jpeg格式的图片！');
    }
  });

  //获取有几个地址
  $('#creatAddressNum').text($('.receiving-address').children().length);

  //设置默认地址
  $(document).on('click', '.set_default', function () {
    $(this).hide().parent().parent().parent().parent().siblings('.receiving-address-item').find('.receiving-address-item-info').find('.receiving-address-item-info-consignee').find('.receiving-address-item-info-setting').find('.set_default').show();

    $(this).parent().parent().parent().siblings('.receiving-address-item-head').find('.receiving-address-item-left').find('.receiving-address-item-default').show().parent().parent().parent().siblings('.receiving-address-item').find('.receiving-address-item-head').find('.receiving-address-item-left').find('.receiving-address-item-default').hide();

  });

  //新增收获地址
  $('.receiving-head-btn').on('click', function () {
    $('.modal-frame').show();
    $(".modal").animate({ top: '50%' });
  });

  //关闭新增收货地址模态框
  $('.modal-head-img').on('click', function () {
    $(".modal").animate({ top: '-50%' });
    $('.modal-frame').hide();
    $('.modal-frame2').hide();
  });

  //点击背景关闭模态框
  // $('.modal-frame').on('click', function(e) {
  //   e.stopPropagation(); 
  //   $(".modal").animate({top:'-50%'});
  //   $('.modal-frame').hide();
  // });

  //模态框里边的输入框非空验证
  $('#addReceivingAddress').on('click', function () {
    var phone = /^[1][3,4,5,7,8][0-9]{9}$/;
    var email = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;

    if ($('#receiver').val() == '') {
      $('#receiver').css('border-color', 'red');
      $('#receiver').focus();
      return false;
    }

    if ($('#region').val() == '') {
      $('#region').css('border-color', 'red');
      $('#region').focus();
      return false;
    }

    if ($('#address').val() == '') {
      $('#address').css('border-color', 'red');
      $('#address').focus();
      return false;
    }

    if ($('#mobileNumber').val() == '') {
      $('#mobileNumber').css('border-color', 'red');
      $('#mobileNumber').focus();
      return false;
    }

    if (!phone.test($('#mobileNumber').val())) {
      alert('请输入正确的手机号码');
      $('#mobileNumber').focus();
      return false;
    }

    if($('#modalEmail').val() != '') {
      if(!email.test($('#modalEmail').val())){
        alert('请输入正确的邮箱');
        $('#modalEmail').css('border-color', 'red');
        $('#modalEmail').focus();
        return false;
      }
    }

    var addressDom = `
        <div class="receiving-address-item">
        <div class="receiving-address-item-head">
          <div class="receiving-address-item-left">
            <div class="receiving-address-item-name addressName">${$('#receiver').val()}</div>
            <div class="receiving-address-item-default">默认地址</div>
          </div>
          <div class="receiving-address-item-right delAddress pointer">
            <img src="../../images/static/del_address.png" alt="">
          </div>
        </div>
        <div class="receiving-address-item-info">
          <div class="receiving-address-item-info-consignee clearfix">
            <div class="receiving-address-item-info-consignee-left">收货人：</div>
            <div class="receiving-address-item-info-consignee-right">${$('#receiver').val()}</div>
          </div>
          <div class="receiving-address-item-info-consignee clearfix">
            <div class="receiving-address-item-info-consignee-left">所在地区：</div>
            <div class="receiving-address-item-info-consignee-right whereAddress">${$('#region').val()}</div>
          </div>
          <div class="receiving-address-item-info-consignee clearfix">
            <div class="receiving-address-item-info-consignee-left">地址：</div>
            <div class="receiving-address-item-info-consignee-right editAddress">${$('#address').val()}</div>
          </div>
          <div class="receiving-address-item-info-consignee clearfix">
            <div class="receiving-address-item-info-consignee-left">手机：</div>
            <div class="receiving-address-item-info-consignee-right editMobileNumber">${$('#mobileNumber').val()}</div>
          </div>
          <div class="receiving-address-item-info-consignee clearfix">
            <div class="receiving-address-item-info-consignee-left">固定电话：</div>
            <div class="receiving-address-item-info-consignee-right editFixedNumber">${$('#fixedNumber').val()}</div>
          </div>
          <div class="receiving-address-item-info-consignee clearfix">
            <div class="receiving-address-item-info-consignee-left">电子邮箱：</div>
            <div class="receiving-address-item-info-consignee-right editModalEmail">${$('#modalEmail').val()}</div>
            <div class="receiving-address-item-info-setting">
              <span class="edit_address pointer">编辑</span>
              <span class="set_default pointer">设为默认</span>
            </div>
          </div>
        </div>
      </div>
    `

    if ($('.receiving-address').children().length <= 19) {
      $('.receiving-address').append(addressDom);
      alert('保存成功');
      $('.modal-head-img').trigger('click');
    } else {
      alert('地址最多可以创建20个。');
      $('.modal-head-img').trigger('click');
      return false;
    }

    $('#creatAddressNum').text($('.receiving-address').children().length);

    $('#receiver').val('');
    $('#region').val('');
    $('#address').val('');
    $('#mobileNumber').val('');
    $('#fixedNumber').val('');
    $('#modalEmail').val('');

  });

  $('#receiver,#mobileNumber,#address,#modalEmail').keydown(function () {
    $(this).css('border-color', '#ddd');
  });

  $('#region').on('change', function () {
    $(this).css('border-color', '#ddd');
  });

  //编辑收货地址
  $(document).on('click', '.edit_address', function () {
    $('.modal-frame2').show();
    $(".modal").animate({ top: '50%' });
    //收货人
    $('#editReceiver').val($(this).parent().parent().parent().siblings('.receiving-address-item-head').find('.receiving-address-item-left').find('.addressName').text());
    //当前点击地址的所在地区
    var selectedVal = $(this).parent().parent().siblings('.receiving-address-item-info-consignee').find('.whereAddress').text();
    // optionValue($('#editRegion'), selectedVal);
    $('.placeholder').hide();
    $('.title').text(selectedVal).show();

    //当前点击地址的详细地址
    $('#editAddress').val($(this).parent().parent().siblings('.receiving-address-item-info-consignee').find('.editAddress').text());

    //当前点击地址的手机号
    $('#editMobileNumber').val($(this).parent().parent().siblings('.receiving-address-item-info-consignee').find('.editMobileNumber').text());
    
    //当前点击地址的固定电话
    $('#editFixedNumber').val($(this).parent().parent().siblings('.receiving-address-item-info-consignee').find('.editFixedNumber').text());

    //当前点击地址的邮箱
    $('#editModalEmail').val($(this).parent().siblings('.editModalEmail').text());
  });

  //修改保存收货地址按钮
  $('#editReceivingAddress').on('click', function() {
    alert()
  });

  //删除收货地址
  $(document).on('click', '.delAddress', function() {
    alert();
  });

  $('.personal-order-list-content-status,.personal-order-list-content-center,.personal-order-list-content-operation').css('height', $('.personal-order-list-all').height());
});

function optionValue(id, value) {
  var numbers = id.find("option"); //获取select下拉框的所有值
  for (var j = 1; j < numbers.length; j++) {
    if ($(numbers[j]).val() == value) {
      $(numbers[j]).attr("selected", "selected");
    }
  }
}