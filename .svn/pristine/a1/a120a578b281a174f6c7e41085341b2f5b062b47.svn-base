$(function() {
  var phone = /^[1][3,4,5,7,8][0-9]{9}$/;
  var email = /^([a-zA-Z]|[0-9])(\w|\-)+@[a-zA-Z0-9]+\.([a-zA-Z]{2,4})$/;
  $('.save_new_address').on('click', function() {
    if($('#cityPicker').val() == '') {
      $('.address-rule').show();
      return false;
    }else{
      $('.address-rule').hide();
    }

    if($('#infoAddress').val() == '') {
      $('.info-address-rule').show();
      return false;
    }else{
      $('.info-address-rule').hide();
    }

    if($('#receiver').val() == '') {
      $('.info-address-rule2').show();
      return false;
    }else{
      $('.info-address-rule2').hide();
    }

    if($('#phoneNumber').val() == '') {
      $('.info-address-rule3').show();
      return false;
    }else{
      $('.info-address-rule3').hide();
    }

    if(!phone.test($('#phoneNumber').val())) {
      $('.info-address-rule3').show();
      $('.info-address-rule3').text('请输入正确的手机号码');
      return false;
    }else{
      $('.info-address-rule3').hide();
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
      <div class="fuli-take-goods-wrapper pointer">
        <div class="fuli-take-goods-head clearfix">
          <div class="fuli-take-name">
            <span>${$('#receiver').val()}</span> 收
          </div>
          <div class="fuli-take-default-address">
            默认地址
          </div>
          <div class="fuli-take-setdefault-address">
            设为默认
          </div>
        </div>
        <p class="prefecture">${$('#cityPicker').val()}</p>
        <p class="detailed-address">${$('#infoAddress').val()}</p>
        <p class="myphone">${$('#phoneNumber').val() == '' ? $('#areaCode').val()+$('#landlineNumber').val()+$('#extensionNumber').val() : $('#phoneNumber').val()}</p>
        <p class="fuli-take-email">${$('#modalEmail').val()}</p>
        <div class="fuli-take-setting">
          <a href="javaScript:;" class="edit-take">修改</a>
          <a href="javaScript:;" class="delete-take">删除</a>
        </div>
        <img src="../../images/static/selected.png" class="selected" alt="">
      </div>
    `

    if ($('.fuli-select-content').children().length <= 19) {
      $('.fuli-select-content').append(addressDom);
      alert('保存成功');
      $('.modal-head-img').trigger('click');
    } else {
      alert('地址最多可以创建20个。');
      $('.modal-head-img').trigger('click');
      return false;
    }

    //勾选设为默认地址
    if($('#set_default').is(':checked')) {
      // $('.fuli-take-default-address').show();
      // $('.fuli-take-default-address').parents('.fuli-take-goods-wrapper').siblings('.fuli-take-goods-wrapper').find('.fuli-take-goods-head').find('.fuli-take-default-address').hide();
      // $('.fuli-take-setdefault-address').hide();
      $('.fuli-select-content').find('.fuli-take-goods-wrapper:last').find('.fuli-take-goods-head').find('.fuli-take-default-address').addClass('showDefault');
      $('.fuli-select-content').find('.fuli-take-goods-wrapper:last').siblings('.fuli-take-goods-wrapper').find('.fuli-take-goods-head').find('.fuli-take-default-address').removeClass('showDefault');
    }

    $('#receiver').val('');
    $('#region').val('');
    $('#address').val('');
    $('#mobileNumber').val('');
    $('#fixedNumber').val('');
    $('#modalEmail').val('');

  });


  $(".fuli-take-goods-wrapper").first().addClass('take-border');
  $(".fuli-take-goods-wrapper img").first().addClass('take-block');
  $(document).on("click", ".fuli-take-goods-wrapper", function() {
    $(this).addClass('take-border').siblings().removeClass('take-border');
    $(this).siblings().find("img").removeClass('take-block');
    $(this).find("img").addClass('take-block');
  });


  //显示全部地址
  var addressNum = 0;
  if($('.fuli-take-goods-wrapper').length > 4) {
    $('.show-all-address').css('display', 'block');
  }else{
    $('.show-all-address').css('display', 'none');
  }
  $('.show-all-address').on('click', function() {
    if(addressNum == 0) {
      var num = $('.fuli-select-content').find('.fuli-take-goods-wrapper').length/4+1.1;
      var itemHeight = $('.fuli-select-content').find('.fuli-take-goods-wrapper').outerHeight();
      $('.fuli-select-content').css('height', itemHeight*num+'px');
      $('.show-all-address').text('收起全部地址');
      addressNum = 1;
    }else{
      $('.show-all-address').text('显示全部地址');
      $('.fuli-select-content').css('height', '190px');
      addressNum = 0;
    }
    
  })

  //删除地址
  $(document).on('click', '.delete-take', function() {
    $('.order-del-mask').show();
    $(".order-del-mask-wrapper").animate({ top: '50%' });
  });

  //关闭删除模态框
  $('.order-del-mask-head-right').on('click', function() {
    $('.order-del-mask').hide();
    $(".order-del-mask-wrapper").animate({ top: '-21%' });
  });

  //取消
  $('.order-del-mask-setting-right').on('click', function() {
    $('.order-del-mask-head-right').trigger('click');
  });

  //模态框里边的输入框非空验证
  $('#addReceivingAddress').on('click', function () {
    var phone = /^[1][3,4,5,7,8][0-9]{9}$/;

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

    if(!email.test($('#modalEmail').val())){
      alert('请输入正确的邮箱');
      $('#modalEmail').css('border-color', 'red');
      $('#modalEmail').focus();
      return false;
    }

    var addressDom = `
      <div class="fuli-take-goods-wrapper pointer">
        <div class="fuli-take-goods-head clearfix">
          <div class="fuli-take-name">
            <span>${$('#receiver').val()}</span> 收
          </div>
          <div class="fuli-take-default-address">
            设为默认
          </div>
        </div>
        <p class="prefecture">${$('#region').val()}</p>
        <p class="detailed-address">${$('#address').val()}</p>
        <p class="myphone">${$('#mobileNumber').val() == '' ? $('#fixedNumber').val() : $('#mobileNumber').val()}</p>
        <p class="fuli-take-email">${$('#modalEmail').val()}</p>
        <div class="fuli-take-setting">
          <a href="javaScript:;">修改</a>
          <a href="javaScript:;" class="delete-take">删除</a>
        </div>
        <img src="../../images/static/selected.png" class="selected" alt="">
      </div>
    `

    if ($('.fuli-select-content').children().length <= 19) {
      $('.fuli-select-content').append(addressDom);
      alert('保存成功');
      $('.modal-head-img').trigger('click');
    } else {
      alert('地址最多可以创建20个。');
      $('.modal-head-img').trigger('click');
      return false;
    }

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

  //关闭新增收货地址模态框
  $('.modal-head-img').on('click', function () {
    $(".modal").animate({ top: '-50%' });
    $('.order-add-mask').hide();
    $('.order-edit-mask').hide();
  });

  //新增收货地址
  $('.fuli-new-address').on('click', function() {
    $(".modal").animate({ top: '50%' });
    $('.order-add-mask').show();
  });

  //编辑收货地址
  var addressIndex;
  $(document).on('click', '.edit-take', function () {
    $('.order-edit-mask').show();
    $(".modal").animate({ top: '50%' });
    // $(".edit-take").eq($(this).index())
    addressIndex = $(this).index();
    //收货人
    $('#editReceiver').val($(this).parent().siblings('.fuli-take-goods-head').find('.fuli-take-name').find('span').text());
    //当前点击地址的所在地区
    var selectedVal = $(this).parent().siblings('.prefecture').text();
    // optionValue($('#editRegion'), selectedVal);
    $('.placeholder').hide();
    $('.title').text(selectedVal).show();

    //当前点击地址的详细地址
    $('#editAddress').val($(this).parent().siblings('.detailed-address').text());

    //当前点击地址的手机号
    $('#editMobileNumber').val($(this).parent().siblings('.myphone').text());
    
    //当前点击地址的固定电话
    $('#editFixedNumber').val($(this).parent().siblings('.myphone').text());

    //当前点击地址的邮箱
    $('#editModalEmail').val($(this).parent().siblings('.fuli-take-email').text());
  });

  $(document).on('mouseover', '.fuli-take-goods-wrapper', function() {
    if($(this).find('.fuli-take-goods-head').find('.fuli-take-default-address').hasClass('showDefault')) {
      $(this).find('.fuli-take-goods-head').find('.fuli-take-setdefault-address').hide();
    }else{
      $(this).find('.fuli-take-goods-head').find('.fuli-take-setdefault-address').show();
    }
    // $(this).find('.fuli-take-goods-head').find('.fuli-take-setdefault-address').show();
    $(this).find('.fuli-take-setting').show();
  }).on('mouseout', function() {
    $(this).find('.fuli-take-goods-head').find('.fuli-take-setdefault-address').hide();
    $(this).find('.fuli-take-setting').hide();
  });

  $(document).on('click', '.fuli-take-setdefault-address', function() {
    $(this).siblings('.fuli-take-default-address').addClass('showDefault');
    $(this).parents('.fuli-take-goods-wrapper').siblings('.fuli-take-goods-wrapper').find('.fuli-take-goods-head').find('.fuli-take-default-address').removeClass('showDefault');
    $(this).hide();
  });

  //修改地址
  $('#edit_save_address').on('click', function() {
    if($('#editRegion').val() == '') {
      $('.address-rule').show();
      return false;
    }else{
      $('.address-rule').hide();
    }

    if($('#editAddress').val() == '') {
      $('.info-address-rule').show();
      return false;
    }else{
      $('.info-address-rule').hide();
    }

    if($('#editReceiver').val() == '') {
      $('.info-address-rule2').show();
      return false;
    }else{
      $('.info-address-rule2').hide();
    }

    if($('#editMobileNumber').val() == '') {
      $('.info-address-rule3').show();
      return false;
    }else{
      $('.info-address-rule3').hide();
    }

    if(!phone.test($('#editMobileNumber').val())) {
      $('.info-address-rule3').show();
      $('.info-address-rule3').text('请输入正确的手机号码');
      return false;
    }else{
      $('.info-address-rule3').hide();
    }

    //勾选设为默认地址
    if($('#set_default_address').is(':checked')) {
      $('.fuli-select-content').find('.fuli-take-goods-wrapper').eq(addressIndex).find('.fuli-take-goods-head').find('.fuli-take-default-address').addClass('showDefault');
      $('.fuli-select-content').find('.fuli-take-goods-wrapper').eq(addressIndex).siblings('.fuli-take-goods-wrapper').find('.fuli-take-goods-head').find('.fuli-take-default-address').removeClass('showDefault');
      $('.modal-head-img').trigger('click');
    }
    
  });



})

function optionValue(id, value) {
  var numbers = id.find("option"); //获取select下拉框的所有值
  for (var j = 1; j < numbers.length; j++) {
    if ($(numbers[j]).val() == value) {
      $(numbers[j]).attr("selected", "selected");
    }
  }
}