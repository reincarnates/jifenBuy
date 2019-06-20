$(function () {

  var $step = $("#step");
  var $index = $("#index");
  $step.step({
    index: 0,
    time: 500,
    title: ["在线协议", "入驻申请", "公司信息", "店铺信息", "入驻审核"]
  });
  $index.text($step.getIndex());

  $('#iAgree').on('click', function () {
    if ($('#iAgree').is(':checked')) {
      // do something
      $('#agree').removeAttr('disabled').css('cursor', 'pointer');
    } else {
      $('#agree').attr('disabled', 'disabled').css('cursor', 'default');
    }
  });

  $('#agree').on('click', function () {
    $step.nextStep();
    $('.agree-box').hide().siblings('.agree-box2').show();
  });

  $('#saveAndNext').on('click', function () {
    // if($('.tr2').find('input').val() == '') {
    //   $('.tr2').find('.investment-rule').show();
    //   $('.tr2').find('input').addClass('investment-rule');
    //   $('.tr2').find('textarea').addClass('investment-rule');
    //   return false;
    // }

    if ($('#companyName').val() == '') {
      $('.companyName').show();
      $('#companyName').addClass('investment-rule');
      return false;
    }

    if ($('#submitterName').val() == '') {
      $('.submitterName').show();
      $('#submitterName').addClass('investment-rule');
      return false;
    }

    if ($('#submitterPosition').val() == '') {
      $('.submitterPosition').show();
      $('#submitterPosition').addClass('investment-rule');
      return false;
    }

    if ($('#submitterTel').val() == '') {
      $('.submitterTel').show();
      $('#submitterTel').addClass('investment-rule');
      return false;
    }

    if ($('#submitterEmail').val() == '') {
      $('.submitterEmail').show();
      $('#submitterEmail').addClass('investment-rule');
      return false;
    }

    if ($('#uscc').val() == '') {
      $('.uscc').show();
      $('#uscc').addClass('investment-rule');
      return false;
    }

    if ($('#brandName').val() == '') {
      $('.brandName').show();
      $('#brandName').addClass('investment-rule');
      return false;
    }

    if ($('#brandIntroduction').val() == '') {
      $('.brandIntroduction').show();
      $('#brandIntroduction').addClass('investment-rule');
      return false;
    }
    $step.nextStep();
    $('.agree-box2').hide().siblings('.agree-box3').show();
  });

  $('.tr,.tr2').find('input').on('keyup', function () {
    if ($(this).val() != '') {
      $(this).removeClass('investment-rule');
      $(this).removeClass('shop-rule-color');
      $(this).siblings('.investment-rule').hide();
      $(this).siblings('.invite-rule').hide();
      $(this).siblings('.shop-rule').hide();
    } else {
      $(this).addClass('investment-rule');
      $(this).addClass('shop-rule-color');
      $(this).siblings('.investment-rule').show();
      $(this).siblings('.invite-rule').show();
      $(this).siblings('.shop-rule').show();
    }
  });

  //校验手机号
  var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
  $('#submitterTel,#contactPhone').on('keyup', function () {
    if (!phoneReg.test($(this).val())) {
      $('.submitterTel').show();
      $('.contactPhone').show();
      $(this).addClass('investment-rule');
      $('.submitterTel').text('请输入正确的手机号');
      $('.contactPhone').text('请输入正确的联系人电话');
    } else {
      $('.submitterTel').hide();
      $('.contactPhone').hide();
      $(this).removeClass('investment-rule');
      $('.submitterTel').text('请填写您的电话联系方式');
      $('.contactPhone').text('请填写您的联系人电话');
    }
  });

  //校验邮箱
  var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  $('#submitterEmail,#contactEmail').on('keyup', function() {
    if(!emailReg.test($(this).val())) {
      $('.submitterEmail').show();
      $('.contactEmail').show();
      $(this).addClass('investment-rule');
      $('.submitterEmail').text('请输入正确的邮箱');
      $('.contactEmail').text('请输入正确的邮箱');
    } else {
      $('.submitterEmail').hide();
      $('.contactEmail').hide();
      $(this).removeClass('investment-rule');
      $('.submitterEmail').text('请填写您的邮箱联系方式');
      $('.contactEmail').text('请填写您的邮箱联系方式');
    }
  });

  $('.tr2').find('textarea').on('keyup', function () {
    if ($(this).val() != '') {
      $(this).removeClass('investment-rule');
      $(this).siblings('.investment-rule').hide();
    } else {
      $(this).addClass('investment-rule');
      $(this).siblings('.investment-rule').show();
    }
  });

  $('#saveAndNext2').on('click', function () {
    if($('#companyName2').val() == '') {
      $('.companyName2').show();
      $('#companyName2').addClass('investment-rule');
      return false;
    }

    if($('#submitterNumber').val() == '') {
      $('.submitterNumber').show();
      $('#submitterNumber').addClass('investment-rule');
      return false;
    }

    if($('#submitterRange').val() == '') {
      $('.submitterRange').show();
      $('#submitterRange').addClass('investment-rule');
      return false;
    }

    if($('#legalName').val() == '') {
      $('.legalName').show();
      $('#legalName').addClass('investment-rule');
      return false;
    }

    if($('#legalNameNumber').val() == '') {
      $('.legalNameNumber').show();
      $('#legalNameNumber').addClass('investment-rule');
      return false;
    }

    if($('#licenseAddress').val() == '') {
      $('.licenseAddress').show();
      $('#licenseAddress').addClass('investment-rule');
      return false;
    }

    if($('#foundDate').val() == '') {
      $('.foundDate').show();
      $('#foundDate').addClass('investment-rule');
      return false;
    }

    if($('#licenseValidDate').val() == '') {
      $('.licenseValidDate').show();
      $('#licenseValidDate').addClass('investment-rule');
      return false;
    }

    if($('#urgentLiaison').val() == '') {
      $('.urgentLiaison').show();
      $('#urgentLiaison').addClass('investment-rule');
      return false;
    }

    if($('#urgentLiaisonPhone').val() == '') {
      $('.urgentLiaisonPhone').show();
      $('#urgentLiaisonPhone').addClass('investment-rule');
      return false;
    }

    if($('#accountName').val() == '') {
      $('.accountName').show();
      $('#accountName').addClass('investment-rule');
      return false;
    }

    if($('#accountBranchName').val() == '') {
      $('.accountBranchName').show();
      $('#accountBranchName').addClass('investment-rule');
      return false;
    }

    if($('#accountLocation').val() == '') {
      $('.accountLocation').show();
      $('#accountLocation').addClass('investment-rule');
      return false;
    }
    $step.nextStep();
    $('.agree-box3').hide().siblings('.agree-box4').show();
  });

  $('#saveAndNext3').on('click', function () {
    if($('#shopName').val() == '') {
      $('.shopName').show();
      $('#shopName').addClass('investment-rule');
      return false;
    }

    if($('#shopSuggest').val() == '') {
      $('.shopSuggest').show();
      $('#shopSuggest').addClass('investment-rule');
      return false;
    }

    if($('#categoryName').val() == '') {
      $('.categoryName').show();
      $('#categoryName').addClass('investment-rule');
      return false;
    }

    if($('#naturalName').val() == '') {
      $('.naturalName').show();
      $('#naturalName').addClass('investment-rule');
      return false;
    }

    if($('#startDate').val() == '' && $('#endDate').val() == '') {
      $('.effectiveTime').show().text('请填写有效时间');
      $('#startDate,#endDate').addClass('shop-rule-color');
      return false;
    }else if($('#startDate').val() == '') {
      $('.effectiveTime').show().text('请填写开始时间');
    }else if($('#endDate').val() == '') {
      $('.effectiveTime').show().text('请填写结束时间');
    }

    if($('#contactName').val() == '') {
      $('.contactName').show();
      $('#contactName').addClass('investment-rule');
      return false;
    }

    if($('#contactPhone').val() == '') {
      $('.contactPhone').show();
      $('#contactPhone').addClass('investment-rule');
      return false;
    }

    if($('#contactEmail').val() == '') {
      $('.contactEmail').show();
      $('#contactEmail').addClass('investment-rule');
      return false;
    }
    console.log(123);
    $step.nextStep();
    $('.agree-box4').hide().siblings('.agree-box5').show();
  });

  $('.help-content:eq(0)').show();
  $('.help-title').on('click', function () {
    $(this).siblings('.help-content').show().parent('li').siblings('li').find('.help-content').hide();
  });

  //上传营业执照
  $('.upload_file_btn').on('click', function () {
    return $('#uploadCompanyFile').trigger('click');
  });

  //上传法人身份证电子版
  $('.upload_file_btn2').on('click', function () {
    return $('#uploadCompanyFile2').trigger('click');
  });

  //上传法人身份证电子版
  $('.upload_file_btn3').on('click', function () {
    return $('#uploadCompanyFile3').trigger('click');
  });

  //上传店铺LOGO
  $('.upload_file_btn4').on('click', function () {
    return $('#uploadCompanyFile4').trigger('click');
  });

  //上传合同
  $('.upload_file_btn5').on('click', function () {
    return $('#uploadCompanyFile5').trigger('click');
  });

  //上传资质电子版
  $('.upload_file_btn6').on('click', function () {
    return $('#uploadCompanyFile6').trigger('click');
  });

  //一级品类
  $('.popuplist .hasLeaf').on('mouseover', function () {
    $(".popup_1").eq($(".popuplist .hasLeaf").index(this)).addClass('hasLeafOn').siblings().removeClass('hasLeafOn');
  });

  //二级品类
  $('.popup_1 .popuplist .hasLeaf').on('mouseover', function () {
    $(".popup_2").eq($(".popup_1 .popuplist .hasLeaf").index(this)).addClass('hasLeafOn2').siblings().removeClass('hasLeafOn2');
  });

  //类目
  var cmb = 0;
  $('#cmbDiv').on('click', function () {
    if (cmb == 0) {
      $(this).find('.popup_0').show();
      cmb = 1;
    } else {
      $(this).find('.popup_0').hide();
      cmb = 0;
    }
  });

});