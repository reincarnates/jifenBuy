$(function () {
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

  //上传文件
  $('#upladFile').on('click', function () {
    return $('.webuploader-element-invisible').trigger('click');
  });

  //校验手机号
  var phoneReg = /^[1][3,4,5,7,8][0-9]{9}$/;
  $('#submitterTel,#contactPhone,#urgentLiaisonPhone').on('keyup', function () {
    if (!phoneReg.test($(this).val())) {
      $('.submitterTel').show();
      $('.contactPhone').show();
      $('.urgentLiaisonPhone').show();
      $(this).addClass('investment-rule');
      $('.submitterTel').text('请输入正确的手机号');
      $('.contactPhone').text('请输入正确的联系人电话');
      $('.urgentLiaisonPhone').text('请输入正确的手机号');
    } else {
      $('.submitterTel').hide();
      $('.contactPhone').hide();
      $('.urgentLiaisonPhone').hide();
      $(this).removeClass('investment-rule');
      $('.submitterTel').text('请填写您的电话联系方式');
      $('.contactPhone').text('请填写您的联系人电话');
      $('.urgentLiaisonPhone').text('请填写公司紧急联系人');
    }
  });

  //校验邮箱
  var emailReg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
  $('#submitterEmail,#contactEmail').on('keyup', function () {
    if (!emailReg.test($(this).val())) {
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

  $('#uploadCompanyFile4').on('change', function () {
    var _URL = window.URL || window.webkitURL;
    var file, img;
    if ((file = this.files[0])) {
      img = new Image();
      img.onload = function () {
        if (this.width > 200 && this.height > 100) {
          alert('请确认上传图片的宽高');
        }
      };
      img.src = _URL.createObjectURL(file);
    }
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

  //公司名称
  var companyReg = /[^\.\`\·\~\!\！\@\#\$\￥\%\^\&\*\-\——\_\=\+\{\}\[\]\【\】\;\:\；\：\'\“\”\,\，\.\。\<\>\《\》\?\？\、|]+$/;
  $('#companyName').on('keyup', function () {
    if (!companyReg.test($(this).val())) {
      $('.companyName').show().text('不能输入特殊字符');
      $('#companyName').addClass('investment-rule');
      return false;
    } else {
      $('.companyName').hide().text('请填写公司名称');
      $('#companyName').removeClass('investment-rule');
    }
  });

  //姓名
  $('#submitterName').on('keyup', function () {
    if (!companyReg.test($(this).val())) {
      $('.submitterName').show().text('姓名只能输入中文');
      $('#submitterName').addClass('investment-rule');
      return false;
    } else {
      $('.submitterName').hide().text('请填写您的姓名');
      $('#submitterName').removeClass('investment-rule');
    }
  });

  //职位
  $('#submitterPosition').on('keyup', function () {
    if (!companyReg.test($(this).val())) {
      $('.submitterPosition').show().text('职位只能输入中文');
      $('#submitterPosition').addClass('investment-rule');
      return false;
    } else {
      $('.submitterPosition').hide().text('请填写您的职位');
      $('#submitterPosition').removeClass('investment-rule');
    }
  });

  //统一社会信用代码
  var usccReg = /^[0-9A-Z]{18}$/;
  $('#uscc').on('keyup', function () {
    if (!usccReg.test($(this).val())) {
      $('.uscc').show().text('请填写正确的统一社会信用代码');
      $('#uscc').addClass('investment-rule');
      return false;
    } else {
      $('.uscc').hide().text('请填写统一社会信用代码（或税号）');
      $('#uscc').removeClass('investment-rule');
    }
  });

  //公司名称2
  $('#companyName2').on('keyup', function () {
    if (!companyReg.test($(this).val())) {
      $('.companyName2').show().text('公司名称只能输入中文');
      $('#companyName2').addClass('investment-rule');
      return false;
    } else {
      $('.companyName2').hide().text('请填写公司名称');
      $('#companyName2').removeClass('investment-rule');
    }
  });

  //营业执照
  var businessReg = /(^(?:(?![IOZSV])[\dA-Z]){2}\d{6}(?:(?![IOZSV])[\dA-Z]){10}$)|(^\d{15}$)/;
  $('#submitterNumber').on('keyup', function () {
    if (!businessReg.test($(this).val())) {
      $('.submitterNumber').show().text('请填写正确的营业执照/公司证件号');
      $('#submitterNumber').addClass('investment-rule');
      return false;
    } else {
      $('.submitterNumber').hide().text('请填写您的营业执照/公司证件号');
      $('#submitterNumber').removeClass('investment-rule');
    }
  });

  //法定代表人姓名
  $('#legalName').on('keyup', function () {
    if (!companyReg.test($(this).val())) {
      $('.legalName').show().text('不能输入特殊字符');
      $('#legalName').addClass('investment-rule');
      return false;
    } else {
      $('.legalName').hide().text('请填写您的法定代表人姓名');
      $('#legalName').removeClass('investment-rule');
    }
  });

  //验证身份证号
  let IDnumber = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)/;
  $('#legalNameNumber').on('keyup', function () {
    if (!IDnumber.test($(this).val())) {
      $('.legalNameNumber').show().text('请输入正确的身份证号').css('right', '-150px');
      $('#legalNameNumber').addClass('investment-rule');
      return false;
    } else {
      $('.legalNameNumber').hide().text('请填写法定代表人身份证号').css('right', '-187px');
      $('#legalNameNumber').removeClass('investment-rule');
    }
  });

  //开户名
  $('#accountName').on('keyup', function () {
    if (!companyReg.test($(this).val())) {
      $('.accountName').show().text('不能输入特殊字符').css('right', '-135px');
      $('#accountName').addClass('investment-rule');
      return false;
    } else {
      $('.accountName').hide().text('请填写开户名').css('right', '-110px');
      $('#accountName').removeClass('investment-rule');
    }
  });

  //支行
  $('#accountBranchName').on('keyup', function () {
    if (!companyReg.test($(this).val())) {
      $('.accountBranchName').show().text('支行只能输入中文').css('right', '-125px');
      $('#accountBranchName').addClass('investment-rule');
      return false;
    } else {
      $('.accountBranchName').hide().text('请填写您的开户行支行名称').css('right', '-194px');
      $('#accountBranchName').removeClass('investment-rule');
    }
  });

  //银行账号
  $('#accountLocation').on('keyup', function () {
    var bankno = $(this).val().replace(/\s/g, '');
    if (bankno.length < 16 || bankno.length > 19) {
      $('.accountLocation').show().text('银行卡号长度必须在16到19之间').css('right', '-210px');
      $('#accountLocation').addClass('investment-rule');
      return false;
    } else {
      $('.accountLocation').hide().text('请填写银行账号').css('right', '-194px');
      $('#accountLocation').removeClass('investment-rule');
    }
    var num = /^\d*$/;//全数字
    if (!num.exec(bankno)) {
      $('.accountLocation').show().text('银行卡号必须全为数字');
      $('#accountLocation').addClass('investment-rule');
      return false;
    } else {
      $('.accountLocation').hide().text('请填写银行账号');
      $('#accountLocation').removeClass('investment-rule');
    }
    //开头6位
    var strBin = "10,18,30,35,37,40,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,58,60,62,65,68,69,84,87,88,94,95,98,99";
    if (strBin.indexOf(bankno.substring(0, 2)) == -1) {
      $('.accountLocation').show().text('银行卡号开头6位不符合规范');
      $('#accountLocation').addClass('investment-rule');
      return false;
    } else {
      $('.accountLocation').hide().text('请填写银行账号');
      $('#accountLocation').removeClass('investment-rule');
    }
    

  });

  $('#shopName').on('keyup', function () {
    if (!companyReg.test($(this).val())) {
      $('.shopName').show().text('不能输入特殊字符').css('right', '-120px');
      $('#shopName').addClass('investment-rule');
      return false;
    } else {
      $('.shopName').hide().text('请填写店铺名称').css('right', '-130px');
      $('#shopName').removeClass('investment-rule');
    }
  });

  //联系人姓名
  var contactReg = /^[a-zA-Z\u4e00-\u9fa5]+$/
  $('#contactName').on('keyup', function () {
    if (!companyReg.test($(this).val())) {
      $('.contactName').show().text('不能输入特殊字符').css('right', '-120px');
      $('#contactName').addClass('investment-rule');
      return false;
    } else {
      $('.contactName').hide().text('请填写联系人姓名').css('right', '-130px');
      $('#contactName').removeClass('investment-rule');
    }
  });

  //银行支行联行号
  var linkNumber = /^[0-9]*$/;
  $('#accountLinkNumber').on('keyup', function () {
    if ($(this).val() == '') {
      $('.accountLinkNumber').show();
      return false;
    }
    if (!linkNumber.test($(this).val())) {
      $('.accountLinkNumber').show().text('请输入正确的银行联行号');
      $('#accountLinkNumber').addClass('investment-rule');
      return false;
    } else {
      $('.accountLinkNumber').hide().text('请填写银行支行联行号');
      $('#accountLinkNumber').removeClass('investment-rule');
    }
  });

  var longNum = 1;
  $('.long-term').on('click', function () {
    if (longNum == 1) {
      $('.long').removeClass('long').addClass('long2').siblings('.starOrend').hide();
      longNum = 2;
    } else {
      $('.long2').addClass('long').siblings('.starOrend').show();
      longNum = 1;
    }
  });

  //弹出添加品牌弹框
  $('.add-brand').on('click', function () {
    $('.brand-mask-bg').show();
  });

  //关闭添加品牌弹框
  $('.el-dialog__headerbtn').on('click', function () {
    $('.brand-mask-bg').hide();
  });

  var DATAPICKERAPI = {
    // 默认input显示当前月,自己获取后填充
    activeMonthRange: function () {
      return {
        begin: moment().set({ 'date': 1, 'hour': 0, 'minute': 0, 'second': 0 }).format('YYYY-MM-DD HH:mm:ss'),
        end: moment().set({ 'hour': 23, 'minute': 59, 'second': 59 }).format('YYYY-MM-DD HH:mm:ss')
      }
    },
    shortcutMonth: function () {
      // 当月
      var nowDay = moment().get('date');
      var prevMonthFirstDay = moment().subtract(1, 'months').set({ 'date': 1 });
      var prevMonthDay = moment().diff(prevMonthFirstDay, 'days');
      return {
        now: '-' + nowDay + ',0',
        prev: '-' + prevMonthDay + ',-' + nowDay
      }
    },
    // 近n小时计算返回
    shortcutPrevHours: function (hour) {
      var nowDay = moment().get('date');
      var prevHours = moment().subtract(hour, 'hours');
      var prevDate = prevHours.get('date') - nowDay;
      var nowTime = moment().format('HH:mm:ss');
      var prevTime = prevHours.format('HH:mm:ss');
      return {
        day: prevDate + ',0',
        time: prevTime + ',' + nowTime,
        name: '近' + hour + '小时'
      }
    },
  };

  //点击申请品牌
  var brandState = -1;
  $('.apply-brand').on('click', function () {
    $('.brand-mask-bg, #noCheckBrand').hide();
    $('#addBrand').show();
    brandState++;
    brandIndex++;
    var dom = `
      <div class="el-tab-pane">
      <form class="el-form demo-ruleForm brand-category-form">
        <div>
          <h2 class="pop-brand-base-infor-main-title">经营品牌</h2>
          <h3 class="pop-brand-base-infor-sub-title">品牌信息</h3>
        </div>
        <div>
          <div class="el-form-item"><label for="brandZhName" class="el-form-item__label"
              style="width: 130px;">品牌中文名</label>
            <div class="el-form-item__content" style="margin-left: 130px;">
              <div class="el-input el-input--small is-disabled">
                <input type="text" disabled="disabled" autocomplete="off"
                  class="el-input__inner el-input-width">
              </div>
            </div>
          </div>
          <div class="form-describe-text-new">请按品牌商标填写中文名称，没有中文名称的请留空</div>
          <div class="el-form-item"><label for="brandEnName" class="el-form-item__label"
              style="width: 130px;">品牌英文名</label>
            <div class="el-form-item__content" style="margin-left: 130px;">
              <div class="el-input el-input--small is-disabled">
                <input type="text" disabled="disabled" autocomplete="off"
                  class="el-input__inner el-input-width">
              </div>
            </div>
          </div>
          <div class="form-describe-text-new">请按品牌商标填写英文名称，没有英文名称的请留空</div>
          <div class="el-form-item is-required"><label for="brandFirstChar" class="el-form-item__label"
              style="width: 130px;">中文名首字母</label>
            <div class="el-form-item__content" style="margin-left: 130px;">
              <div class="el-input el-input--small is-disabled">
                <input type="text" disabled="disabled" autocomplete="off"
                  onkeyup="value=value.replace(/[^A-Za-z]/g,'');" class="el-input__inner el-input-width">
              </div>
            </div>
          </div>
          <div class="el-form-item is-required"><label for="trademarkRegistrant"
              class="el-form-item__label" style="width: 130px;">品牌商标注册人</label>
            <div class="el-form-item__content" style="margin-left: 130px;">
              <div class="el-input el-input--small is-disabled">
                <input type="text" disabled="disabled" autocomplete="off"
                  class="el-input__inner el-input-width">
              </div>
            </div>
          </div>
          <div class="el-form-item"><label for="brandLogo" class="el-form-item__label"
              style="width: 130px;">品牌LOGO</label>
            <div class="el-form-item__content" style="margin-left: 130px;">
              <div class="pop-logo-img-simple-upload">
                <div>
                  <ul class="el-upload-list el-upload-list--picture-card">
                    <li tabindex="0" class="el-upload-list__item is-success"><img
                        src="http://img30.360buyimg.com/popshop/jfs/t1/24896/16/8140/31300/5c735583Efcb8ab1c/3b7f0af806826e4a.jpg"
                        alt="" class="el-upload-list__item-thumbnail"><a
                        class="el-upload-list__item-name"><i class="el-icon-document"></i>
                      </a><label class="el-upload-list__item-status-label"><i
                          class="el-icon-upload-success el-icon-check"></i></label><i
                        class="el-icon-close"></i><i class="el-icon-close-tip">按 delete 键可删除</i>
                      <!----><span class="el-upload-list__item-actions"><span
                          class="el-upload-list__item-preview"><i class="el-icon-zoom-in"></i></span><span
                          class="el-upload-list__item-delete"><i class="el-icon-delete"></i></span></span>
                    </li>
                  </ul>
                  <div tabindex="0" class="el-upload el-upload--picture-card" style="display: none;"><i
                      class="el-icon-plus"></i><input type="file" name="fileData"
                      accept="image/png,image/jpeg,image/gif" class="el-upload__input"></div>
                </div>
              </div>
              <div class="upload-brand-logo-pic-describe-text">必须与商标图文一致</div>
              <!---->
            </div>
          </div>
          <div class="el-form-item"><label for="brandId" class="el-form-item__label"
              style="width: 130px;">品牌ID</label>
            <div class="el-form-item__content" style="margin-left: 130px;"></div>
          </div>
          <div class="el-form-item"><label for="trademarkRegistrationNumber" class="el-form-item__label"
              style="width: 130px;">品牌商标注册号</label>
            <div class="el-form-item__content" style="margin-left: 130px;">
              <div class="el-input el-input--small">
                <input type="text" autocomplete="off" placeholder="请输入品牌商标注册号"
                  class="el-input__inner el-input-width">
              </div>
            </div>
          </div>
          <div class="el-form-item"><label for="trademarkCategory" class="el-form-item__label"
              style="width: 130px;">品牌商标类别</label>
            <div class="el-form-item__content" style="margin-left: 130px;">
              <div class="el-select">
                <div class="el-input el-input--suffix" style="position: relative;">
                  <!-- 品牌商标类别 -->
                  <div class="el-select-dropdown el-popper checkTrademark2"
                    style="min-width: 178px; transform-origin: center top; z-index: 2009; position: absolute; top: 35px; left: 0; display: none;"
                    x-placement="bottom-start">
                    <div class="el-scrollbar" style="">
                      <div class="el-select-dropdown__wrap el-scrollbar__wrap"
                        style="margin-bottom: -17px; margin-right: -17px;">
                        <ul class="el-scrollbar__view el-select-dropdown__list">
                          <!---->
                          <li class="el-select-dropdown__item"><span>请选择</span></li>
                          <li class="el-select-dropdown__item"><span>第01类-化学原料</span></li>
                          <li class="el-select-dropdown__item"><span>第02类-颜料油漆</span></li>
                          <li class="el-select-dropdown__item"><span>第03类-日化用品</span></li>
                          <li class="el-select-dropdown__item"><span>第04类-燃料油脂</span></li>
                          <li class="el-select-dropdown__item"><span>第05类-医药</span></li>
                          <li class="el-select-dropdown__item"><span>第06类-金属材料</span></li>
                          <li class="el-select-dropdown__item"><span>第07类-机械设备</span></li>
                          <li class="el-select-dropdown__item"><span>第08类-手工器械</span></li>
                          <li class="el-select-dropdown__item"><span>第09类-科学仪器</span></li>
                          <li class="el-select-dropdown__item"><span>第10类-医疗器械</span></li>
                          <li class="el-select-dropdown__item"><span>第11类-灯具空调</span></li>
                          <li class="el-select-dropdown__item"><span>第12类-运输工具</span></li>
                          <li class="el-select-dropdown__item"><span>第13类-军火烟</span></li>
                          <li class="el-select-dropdown__item"><span>第14类-珠宝钟表</span></li>
                          <li class="el-select-dropdown__item"><span>第15类-乐器</span></li>
                          <li class="el-select-dropdown__item"><span>第16类-办公用品</span></li>
                          <li class="el-select-dropdown__item"><span>第17类-橡胶制品</span></li>
                          <li class="el-select-dropdown__item"><span>第18类-皮革皮具</span></li>
                          <li class="el-select-dropdown__item"><span>第19类-建筑材料</span></li>
                          <li class="el-select-dropdown__item"><span>第20类-家具</span></li>
                          <li class="el-select-dropdown__item"><span>第21类-厨房洁具</span></li>
                          <li class="el-select-dropdown__item"><span>第22类-绳网袋篷</span></li>
                          <li class="el-select-dropdown__item"><span>第23类-纱线丝</span></li>
                          <li class="el-select-dropdown__item"><span>第24类-布料床单</span></li>
                          <li class="el-select-dropdown__item"><span>第25类-服装鞋帽</span></li>
                          <li class="el-select-dropdown__item"><span>第26类-钮扣拉链</span></li>
                          <li class="el-select-dropdown__item"><span>第27类-地毯席垫</span></li>
                          <li class="el-select-dropdown__item"><span>第28类-健身器材</span></li>
                          <li class="el-select-dropdown__item"><span>第29类-食品</span></li>
                          <li class="el-select-dropdown__item"><span>第30类-方便食品</span></li>
                          <li class="el-select-dropdown__item"><span>第31类-饲料种籽</span></li>
                          <li class="el-select-dropdown__item"><span>第32类-啤酒饮料</span></li>
                          <li class="el-select-dropdown__item"><span>第33类-酒</span></li>
                          <li class="el-select-dropdown__item"><span>第34类-烟草烟具</span></li>
                          <li class="el-select-dropdown__item"><span>第35类-广告销售</span></li>
                          <li class="el-select-dropdown__item"><span>第36类-金融物管</span></li>
                          <li class="el-select-dropdown__item"><span>第37类-建筑修理</span></li>
                          <li class="el-select-dropdown__item"><span>第38类-通讯服务</span></li>
                          <li class="el-select-dropdown__item"><span>第39类-运输贮藏</span></li>
                          <li class="el-select-dropdown__item"><span>第40类-材料加工</span></li>
                          <li class="el-select-dropdown__item"><span>第41类-教育娱乐</span></li>
                          <li class="el-select-dropdown__item"><span>第42类-网站服务</span></li>
                          <li class="el-select-dropdown__item"><span>第43类-餐饮住宿</span></li>
                          <li class="el-select-dropdown__item"><span>第44类-医疗园艺</span></li>
                          <li class="el-select-dropdown__item"><span>第45类-社会服务</span></li>
                        </ul>
                      </div>
                      <div class="el-scrollbar__bar is-horizontal">
                        <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                      </div>
                      <div class="el-scrollbar__bar is-vertical">
                        <div class="el-scrollbar__thumb"
                          style="transform: translateY(0%); height: 16.3071%;"></div>
                      </div>
                    </div>
                    <!---->
                    <div x-arrow="" class="popper__arrow" style="left: 35px;"></div>
                  </div>
                  <!-- 品牌商标类别end -->
                  <input type="text" autocomplete="off" placeholder="请选择" readonly="readonly"
                    class="el-input__inner checkTrademark" style="width: 178px;">
                  <span class="el-input__suffix"><span class="el-input__suffix-inner"><i
                        class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                    </span>
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div class="el-form-item is-required"><label for="brandType" class="el-form-item__label"
              style="width: 130px;">品牌类型</label>
            <div class="el-form-item__content" style="margin-left: 130px;">
              <div role="radiogroup" class="el-radio-group">
                <label role="radio" tabindex="0" class="el-radio checkBrandType">
                  <span class="el-radio__input">
                    <span class="el-radio__inner"></span>
                    <input type="radio" aria-hidden="true" tabindex="-1" class="el-radio__original"
                      value="1" checked>
                  </span>
                  <span class="el-radio__label">国内品牌</span>
                </label>
                <label role="radio" tabindex="-1" class="el-radio checkBrandType"
                  style="margin-left: 15px;">
                  <span class="el-radio__input">
                    <span class="el-radio__inner"></span>
                    <input type="radio" aria-hidden="true" tabindex="-1" class="el-radio__original"
                      value="2">
                  </span>
                  <span class="el-radio__label">国际品牌</span>
                </label>
              </div>
            </div>
          </div>
          <div class="el-form-item is-success is-required"><label for="operateType"
              class="el-form-item__label" style="width: 130px;">经营类型</label>
            <div class="el-form-item__content" style="margin-left: 130px;">
              <div role="radiogroup" class="el-radio-group">
                <label role="radio" tabindex="-1" class="el-radio checkManageType">
                  <span class="el-radio__input">
                    <span class="el-radio__inner"></span>
                    <input type="radio" aria-hidden="true" tabindex="-1" class="el-radio__original"
                      value="1">
                  </span>
                  <span class="el-radio__label">自有品牌</span>
                </label>
                <label role="radio" tabindex="0" class="el-radio checkManageType"
                  style="margin-left: 15px;">
                  <span class="el-radio__input">
                    <span class="el-radio__inner"></span>
                    <input type="radio" aria-hidden="true" tabindex="-1" class="el-radio__original"
                      value="2">
                  </span>
                  <span class="el-radio__label">代理品牌</span>
                </label>
              </div>
            </div>
          </div>
          <div class="el-form-item"><label for="" class="el-form-item__label"
              style="width: 130px;">产品外包装图片</label>
            <div class="el-form-item__content" style="margin-left: 130px;">
              <div class="pop-qua-img-simple-upload">
                <div>
                  <ul class="el-upload-list el-upload-list--picture-card"></ul>
                  <div tabindex="0" class="el-upload el-upload--picture-card flex-center uploadImg">
                    <img src="../../images/static/upload_btn.png" alt="">
                  </div>
                  <input type="file" accept="image/png,image/jpeg,image/gif" class="el-upload__input uploadInput">
                  <div class="el-upload__tip">图片尺寸请确保800px*800px以上，文件大小在5MB以内，支持png、jpeg、gif格式，最多可上传1张
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style="display: none;" class="brandNatural">
          <h3 class="pop-brand-base-infor-sub-title">品牌资质</h3>
          <div class="clearfix">
            <div>
              <ul class="pop-brand-quaslist">
                <li>
                  <h2>1.商标注册证/商品注册申请书</h2>
                  <p>
                    请上传商标注册证书（如商标类目页在背面或第二页请同时上传），未获得注册证的请上传商标注册受理通知书，装饰字画类目无需提供。若商标有变更，请去商标网下载最新的商标流程和商标详情，打印并加盖入驻公司公章
                  </p>
                  <div class="el-form-item mt-brand-quas"><label for="" class="el-form-item__label"
                      style="width: 130px;">有效期至</label>
                    <div class="el-form-item__content" style="margin-left: 130px;">
                      <div
                        class="c-datepicker-date-editor c-datepicker-single-editor J-datepicker-day mt10">
                        <!-- <i class="c-datepicker-range__icon kxiconfont icon-clock"></i> -->
                        <input type="text" autocomplete="off" name="foundDate" id="foundDate"
                          placeholder="选择日期" class=" c-datepicker-data-input only-date" value="">
                      </div>
                    </div>
                  </div>
                  <div class="el-form-item"><label for="" class="el-form-item__label"
                      style="width: 130px;">资质图片</label>
                    <div class="el-form-item__content" style="margin-left: 130px;">
                      <div class="img-upload-box">
                        <div>
                          <ul class="el-upload-list el-upload-list--picture-card"></ul>
                          <div tabindex="0" class="el-upload el-upload--picture-card flex-center naturalImg">
                            <img src="../../images/static/upload_btn.png" alt="">
                          </div>
                          <input type="file" name="fileData" accept="image/png,image/jpeg,image/gif"
                            class="el-upload__input naturalInput">
                          <div class="el-upload__tip">
                            图片尺寸请确保800px*800px以上，文件大小在5MB以内，支持格式PNG、JPG、JPEG、GIF，最多可上传20张
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <h2>2.销售授权书</h2>
                  <p>
                    请上传品牌方提供的品牌授权证书。
                  </p>
                  <div class="el-form-item mt-brand-quas"><label for="" class="el-form-item__label"
                      style="width: 130px;">有效期至</label>
                    <div class="el-form-item__content" style="margin-left: 130px;">
                      <div
                        class="c-datepicker-date-editor c-datepicker-single-editor J-datepicker-day mt10">
                        <!-- <i class="c-datepicker-range__icon kxiconfont icon-clock"></i> -->
                        <input type="text" autocomplete="off" name="foundDate" id="foundDate"
                          placeholder="选择日期" class=" c-datepicker-data-input only-date" value="">
                      </div>
                    </div>
                  </div>
                  <div class="el-form-item"><label for="" class="el-form-item__label"
                      style="width: 130px;">资质图片</label>
                    <div class="el-form-item__content" style="margin-left: 130px;">
                      <div class="img-upload-box">
                        <div>
                          <ul class="el-upload-list el-upload-list--picture-card"></ul>
                          <div tabindex="0" class="el-upload el-upload--picture-card flex-center naturalImg2">
                            <img src="../../images/static/upload_btn.png" alt="">
                          </div>
                          <input type="file" name="fileData" accept="image/png,image/jpeg,image/gif"
                            class="el-upload__input naturalInput2">
                          <div class="el-upload__tip">
                            图片尺寸请确保800px*800px以上，文件大小在5MB以内，支持格式PNG、JPG、JPEG、GIF，最多可上传20张
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <h2>3.报关单类</h2>
                  <p>
                    进口品牌商品请上传报关单证书。
                  </p>
                  <div class="el-form-item mt-brand-quas"><label for="" class="el-form-item__label"
                      style="width: 130px;">有效期至</label>
                    <div class="el-form-item__content" style="margin-left: 130px;">
                      <div
                        class="c-datepicker-date-editor c-datepicker-single-editor J-datepicker-day mt10">
                        <!-- <i class="c-datepicker-range__icon kxiconfont icon-clock"></i> -->
                        <input type="text" autocomplete="off" name="foundDate" id="foundDate"
                          placeholder="选择日期" class=" c-datepicker-data-input only-date" value="">
                      </div>
                    </div>
                  </div>
                  <div class="el-form-item"><label for="" class="el-form-item__label"
                      style="width: 130px;">资质图片</label>
                    <div class="el-form-item__content" style="margin-left: 130px;">
                      <div class="img-upload-box">
                        <div>
                          <ul class="el-upload-list el-upload-list--picture-card"></ul>
                          <div tabindex="0" class="el-upload el-upload--picture-card flex-center naturalImg3">
                            <img src="../../images/static/upload_btn.png" alt="">
                          </div>
                          <input type="file" name="fileData" accept="image/png,image/jpeg,image/gif"
                            class="el-upload__input naturalInput3">
                          <div class="el-upload__tip">
                            图片尺寸请确保800px*800px以上，文件大小在5MB以内，支持格式PNG、JPG、JPEG、GIF，最多可上传20张
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <h2>4.进货发票</h2>
                  <p>
                    进口品牌商品请提供上传日期六个月以内的进货凭证。
                  </p>
                  <div class="el-form-item mt-brand-quas"><label for="" class="el-form-item__label"
                      style="width: 130px;">有效期至</label>
                    <div class="el-form-item__content" style="margin-left: 130px;">
                      <div
                        class="c-datepicker-date-editor c-datepicker-single-editor J-datepicker-day mt10">
                        <!-- <i class="c-datepicker-range__icon kxiconfont icon-clock"></i> -->
                        <input type="text" autocomplete="off" name="foundDate" id="foundDate"
                          placeholder="选择日期" class=" c-datepicker-data-input only-date" value="">
                      </div>
                    </div>
                  </div>
                  <div class="el-form-item"><label for="" class="el-form-item__label"
                      style="width: 130px;">资质图片</label>
                    <div class="el-form-item__content" style="margin-left: 130px;">
                      <div class="img-upload-box">
                        <div>
                          <ul class="el-upload-list el-upload-list--picture-card"></ul>
                          <div tabindex="0" class="el-upload el-upload--picture-card flex-center naturalImg4">
                            <img src="../../images/static/upload_btn.png" alt="">
                          </div>
                          <input type="file" name="fileData" accept="image/png,image/jpeg,image/gif"
                            class="el-upload__input naturalInput4">
                          <div class="el-upload__tip">
                            图片尺寸请确保800px*800px以上，文件大小在5MB以内，支持格式PNG、JPG、JPEG、GIF，最多可上传20张
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <h2>5.质检、检疫、检验报告</h2>
                  <p>
                    请上传正规部门提供的质检检疫报告。
                  </p>
                  <div class="el-form-item mt-brand-quas"><label for="" class="el-form-item__label"
                      style="width: 130px;">有效期至</label>
                    <div class="el-form-item__content" style="margin-left: 130px;">
                      <div
                        class="c-datepicker-date-editor c-datepicker-single-editor J-datepicker-day mt10 fiveDate">
                        <!-- <i class="c-datepicker-range__icon kxiconfont icon-clock"></i> -->
                        <input type="text" autocomplete="off" name="foundDate" id="fiveDate"
                          placeholder="选择日期" class=" c-datepicker-data-input only-date" value="">
                      </div>
                      &nbsp;&nbsp;
                      <label role="checkbox" class="el-checkbox checkPermanentLabel flex-center">
                        <span aria-checked="mixed" class="el-checkbox__input">
                          <span class="el-checkbox__inner"></span>
                          <input type="checkbox" class="el-checkbox__original checkPermanent" value="永久">
                        </span>
                        <span class="el-checkbox__label">永久</span>
                      </label>
                    </div>
                  </div>
                  <div class="el-form-item"><label for="" class="el-form-item__label"
                      style="width: 130px;">资质图片</label>
                    <div class="el-form-item__content" style="margin-left: 130px;">
                      <div class="img-upload-box">
                        <div>
                          <ul class="el-upload-list el-upload-list--picture-card"></ul>
                          <div tabindex="0" class="el-upload el-upload--picture-card flex-center naturalImg5">
                            <img src="../../images/static/upload_btn.png" alt="">
                          </div>
                          <input type="file" name="fileData" accept="image/png,image/jpeg,image/gif"
                            class="el-upload__input naturalInput5">
                          <div class="el-upload__tip">
                            图片尺寸请确保800px*800px以上，文件大小在5MB以内，支持格式PNG、JPG、JPEG、GIF，最多可上传20张
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <h2>6.卫生/生产许可证</h2>
                  <p>
                    请提供品牌方持有的卫生/生产许可证证书。
                  </p>
                  <div class="el-form-item mt-brand-quas"><label for="" class="el-form-item__label"
                      style="width: 130px;">有效期至</label>
                    <div class="el-form-item__content" style="margin-left: 130px;">
                      <div
                        class="c-datepicker-date-editor c-datepicker-single-editor J-datepicker-day mt10">
                        <!-- <i class="c-datepicker-range__icon kxiconfont icon-clock"></i> -->
                        <input type="text" autocomplete="off" name="foundDate" id="foundDate"
                          placeholder="选择日期" class=" c-datepicker-data-input only-date" value="">
                      </div>
                    </div>
                  </div>
                  <div class="el-form-item"><label for="" class="el-form-item__label"
                      style="width: 130px;">资质图片</label>
                    <div class="el-form-item__content" style="margin-left: 130px;">
                      <div class="img-upload-box">
                        <div>
                          <ul class="el-upload-list el-upload-list--picture-card"></ul>
                          <div tabindex="0" class="el-upload el-upload--picture-card flex-center naturalImg6">
                            <img src="../../images/static/upload_btn.png" alt="">
                          </div>
                          <input type="file" name="fileData" accept="image/png,image/jpeg,image/gif"
                            class="el-upload__input naturalInput6">
                          <div class="el-upload__tip">
                            图片尺寸请确保800px*800px以上，文件大小在5MB以内，支持格式PNG、JPG、JPEG、GIF，最多可上传20张
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
                <li>
                  <h2>7.其他资质</h2>
                  <p>
                    需提交特殊产品资质的类目请将资质上传在此处，包括全国工业生产许可证、3C、医疗器械生产许可证、化妆品生产企业卫生许可证等，根据具体类目资质要求提交
                  </p>
                  <div class="el-form-item mt-brand-quas"><label for="" class="el-form-item__label"
                      style="width: 130px;">有效期至</label>
                    <div class="el-form-item__content" style="margin-left: 130px;">
                      <div
                        class="c-datepicker-date-editor c-datepicker-single-editor J-datepicker-day mt10">
                        <!-- <i class="c-datepicker-range__icon kxiconfont icon-clock"></i> -->
                        <input type="text" autocomplete="off" name="foundDate" id="foundDate"
                          placeholder="选择日期" class=" c-datepicker-data-input only-date" value="">
                      </div>
                    </div>
                  </div>
                  <div class="el-form-item"><label for="" class="el-form-item__label"
                      style="width: 130px;">资质图片</label>
                    <div class="el-form-item__content" style="margin-left: 130px;">
                      <div class="img-upload-box">
                        <div>
                          <ul class="el-upload-list el-upload-list--picture-card"></ul>
                          <div tabindex="0" class="el-upload el-upload--picture-card flex-center naturalImg7">
                            <img src="../../images/static/upload_btn.png" alt="">
                          </div>
                          <input type="file" name="fileData" accept="image/png,image/jpeg,image/gif"
                            class="el-upload__input naturalInput7">
                          <div class="el-upload__tip">
                            图片尺寸请确保800px*800px以上，文件大小在5MB以内，支持格式PNG、JPG、JPEG、GIF，最多可上传20张
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="brand-category-box">
          <h2 class="pop-brand-base-infor-main-title">经营类目</h2>
          <div class="clearfix2 flex-center" style="width: 100%;">
            <h3 class="pop-brand-base-infor-sub-title fl" style="margin: 0; margin-top: 10px;">类目信息</h3>
            <button type="button"
              class="el-button fr btn-bg-style el-button--default el-button--small checkThick">
              <span>选择类目</span>
            </button>
          </div>
          <div class="brand-border-box">
            <div class="cate" style="text-align: center;">请选择您要经营的类目</div>
          </div>
        </div>
        <div class="pop-brand-main-save-button">
          <button type="button" class="el-button el-button--default el-button--small delBrand">
            <span>删除品牌</span>
          </button>
          <button type="button" class="el-button btn-bg-style el-button--primary el-button--small">
            <span>保存</span>
          </button>
        </div>
      </form>
    </div>`;
    var nav = `
    <div aria-selected="true" tabindex="0" class="el-tabs__item is-left is-active">
      <div class="brand-tab-content">京字 </div>
    </div>
    `;
    $('#brandCont').append(dom);
    $('.el-tabs__nav').append(nav);

    if($('.el-tabs__item').length == 0) {
      $('#brandCont').find(`.el-tab-pane:eq(${brandState})`).show().siblings().hide();
      $('.el-tabs__nav').find(`.el-tabs__item:eq(${brandState})`).addClass('is-active').siblings().removeClass('is-active');
    }else{
      $('.el-tabs__item').trigger('click');
    }

    //年月日单个
    $('.J-datepicker-day').datePicker({
      hasShortcut: true,
      format: 'YYYY-MM-DD',
    });

    //年月日范围
    $('.J-datepicker-range-day').datePicker({
      hasShortcut: true,
      format: 'YYYY-MM-DD',
      isRange: true,
      shortcutOptions: DATAPICKERAPI.rangeShortcutOption1
    });
  });

  //选择品牌类型
  $(document).on('click', '.checkBrandType', function () {
    $(this).addClass('is-checked').find('.el-radio__inner').addClass('is-checked2').parents('.checkBrandType').siblings('.checkBrandType').removeClass('is-checked').find('.el-radio__inner').removeClass('is-checked2');
    //选择品牌类型展示品牌资质
    $('.brandNatural').show();
  });

  //选择品牌类型
  $(document).on('click', '.checkBrandType2', function () {
    $(this).addClass('is-checked').find('.el-radio__inner').addClass('is-checked2').parents('.checkBrandType2').siblings('.checkBrandType2').removeClass('is-checked').find('.el-radio__inner').removeClass('is-checked2');
    //选择品牌类型展示品牌资质
    $('.brandNatural2').show();
  });

  //选择经营类型
  $(document).on('click', '.checkManageType', function () {
    $(this).addClass('is-checked').find('.el-radio__inner').addClass('is-checked2').parents('.checkManageType').siblings('.checkManageType').removeClass('is-checked').find('.el-radio__inner').removeClass('is-checked2');
  });

  //时间选择是否永久
  $(document).on('click', '.checkPermanent', function () {
    if ($(this).parents('.checkPermanentLabel').hasClass('checkbox-check')) {
      $(this).parents('.checkPermanentLabel').removeClass('checkbox-check').find('.el-checkbox__inner').removeClass('checkbox-check2');
      $('.fiveDate').css({ 'cursor': 'pointer', 'opacity': '1' });
      $('#fiveDate').removeAttr('disabled').css('cursor', 'pointer');
    } else {
      $(this).parents('.checkPermanentLabel').addClass('checkbox-check').find('.el-checkbox__inner').addClass('checkbox-check2');
      $('.fiveDate').css({ 'cursor': 'no-drop', 'opacity': '.3' });
      $('#fiveDate').attr('disabled', 'true').css('cursor', 'no-drop');
    }
  });

  //选择品牌商标类别
  var markState = 1;
  $(document).on('click', '.checkTrademark', function () {
    if (markState == 1) {
      $('.checkTrademark2').show();
      markState = 2;
    } else {
      $('.checkTrademark2').hide();
      markState = 1;
    }
  });

  //选择品牌商标类别列表
  $(document).on('click', '.el-select-dropdown__list li', function () {
    $(this).parents('.checkTrademark2').siblings('.checkTrademark').val($(this).text());
    // $('.checkTrademark').val($(this).text());
    $(this).addClass('hover').siblings().removeClass('hover');
    $('.checkTrademark2').hide();
    markState = 1;
  });

  //选择类目
  $(document).on('click', '.checkThick', function () {
    $('.thickdiv, .thickbox').show();
  });

  //关闭选择类目弹框
  $('.thickclose').on('click', function () {
    $('.thickdiv, .thickbox').hide();
  });

  //选择类目
  $('.has-child, .has-child2').on('click', function () {
    $(this).addClass('curr').siblings().removeClass('curr');
    if($(this).find('.my-class').hasClass('none')) {
      $(this).find('.my-class').removeClass('none').addClass('check');
    }else{
      $(this).removeClass('curr');
      $(this).find('.my-class').removeClass('check').addClass('none');
    }
  });

  //选择三级类目
  var levVal = [];
  $('.lev3-area ul li').on('click', function () {
    $(this).addClass('curr').siblings().removeClass('curr');
    if($(this).find('a span').hasClass('none')) {
      $(this).find('a span').removeClass('none').addClass('all');
      levVal.push($(this).find('a label').attr('title'));
    }else{
      $(this).find('a span').removeClass('all').addClass('none');
      var index = levVal.indexOf($(this).find('a label').attr('title'));
      levVal.splice(index, 1);
    }
  });

  //全选三级类目
  var allNum = 1;
  $('#all-limit-lev3').on('click', function () {
    if (allNum == 1) {
      $(this).removeClass('none').addClass('all');
      $('.lev3-area ul li').find('a span').removeClass('none').addClass('all');
      allNum = 2;
    } else {
      $(this).removeClass('all').addClass('none');
      $('.lev3-area ul li').find('a span').removeClass('all').addClass('none');
      allNum = 1;
    }
  });

  //取消选择类目
  $('.button_cancel').on('click', function () {
    $('.thickclose').trigger('click');
  });

  //选择品牌信息类型
  var brandIndex = -1;
  // $('.el-tabs__item:eq(0)').addClass('is-active');
  $(document).on('click', '.el-tabs__item', function () {
    $(this).addClass('is-active').siblings().removeClass('is-active');
    $('.el-tab-pane').eq($(".el-tabs__item").index(this)).show().siblings().hide();
    brandIndex = $(".el-tabs__item").index(this);
  });

  //添加新品牌
  $('.addNewBrand').on('click', function () {
    $('.brand-mask-bg, #noCheckBrand').hide();
    $('#addBrand').show();
    brandState++;
    brandIndex++;
    var dom = `
      <div class="el-tab-pane" style="display: none;">
        <form class="el-form demo-ruleForm brand-category-form">
          <div>
            <h2 class="pop-brand-base-infor-main-title">经营品牌</h2>
            <h3 class="pop-brand-base-infor-sub-title">品牌信息</h3>
            <p class="b-alert b-alert-s01" style="margin: 10px 20px 20px 41px;">温馨提示：您当前申请的品牌未被阳光福利商城收录，提交入驻申请后需先进行品牌评估，评估后进行入驻资质审核。</p>
          </div>
          <div>
            <div class="el-form-item"><label for="brandZhName" class="el-form-item__label"
                style="width: 130px;">品牌中文名</label>
              <div class="el-form-item__content" style="margin-left: 130px;">
                <div class="el-input el-input--small">
                  <input type="text" autocomplete="off" class="el-input__inner el-input-width brandChineseName">
                </div>
              </div>
            </div>
            <div class="form-describe-text-new">请按品牌商标填写中文名称，没有中文名称的请留空</div>
            <div class="el-form-item"><label for="brandEnName" class="el-form-item__label"
                style="width: 130px;">品牌英文名</label>
              <div class="el-form-item__content" style="margin-left: 130px;">
                <div class="el-input el-input--small">
                  <input type="text" autocomplete="off" class="el-input__inner el-input-width">
                </div>
              </div>
            </div>
            <div class="form-describe-text-new">请按品牌商标填写英文名称，没有英文名称的请留空</div>
            <div class="el-form-item is-required"><label for="brandFirstChar" class="el-form-item__label"
                style="width: 130px;">中文名首字母</label>
              <div class="el-form-item__content" style="margin-left: 130px;">
                <div class="el-input el-input--small">
                  <input type="text" autocomplete="off" onkeyup="value=value.replace(/[^A-Za-z]/g,'');"
                    class="el-input__inner el-input-width">
                </div>
              </div>
            </div>
            <div class="el-form-item is-required"><label for="trademarkRegistrant"
                class="el-form-item__label" style="width: 130px;">品牌商标注册人</label>
              <div class="el-form-item__content" style="margin-left: 130px;">
                <div class="el-input el-input--small">
                  <input type="text" autocomplete="off" class="el-input__inner el-input-width">
                </div>
              </div>
            </div>
            <div class="el-form-item"><label for="brandLogo" class="el-form-item__label"
                style="width: 130px;">品牌LOGO</label>
              <div class="el-form-item__content" style="margin-left: 130px;">
                <div class="pop-logo-img-simple-upload">
                  <div>
                    <ul class="el-upload-list el-upload-list--picture-card"></ul>
                    <div tabindex="0" class="el-upload el-upload--picture-card flex-center brandImg">
                      <img src="../../images/static/upload_btn.png" alt="">
                    </div>
                    <input type="file" name="fileData" accept="image/png,image/jpeg,image/gif"
                      class="el-upload__input brandInput">
                  </div>
                </div>
                <div class="upload-brand-logo-pic-describe-text">必须与商标图文一致</div>
                <!---->
              </div>
            </div>
            <div class="el-form-item"><label for="brandId" class="el-form-item__label"
                style="width: 130px;">品牌ID</label>
              <div class="el-form-item__content" style="margin-left: 130px;"></div>
            </div>
            <div class="el-form-item"><label for="trademarkRegistrationNumber" class="el-form-item__label"
                style="width: 130px;">品牌商标注册号</label>
              <div class="el-form-item__content" style="margin-left: 130px;">
                <div class="el-input el-input--small">
                  <input type="text" autocomplete="off" placeholder="请输入品牌商标注册号"
                    class="el-input__inner el-input-width">
                </div>
              </div>
            </div>
            <div class="el-form-item"><label for="trademarkCategory" class="el-form-item__label"
                style="width: 130px;">品牌商标类别</label>
              <div class="el-form-item__content" style="margin-left: 130px;">
                <div class="el-select">
                  <div class="el-input el-input--suffix" style="position: relative;">
                    <!-- 品牌商标类别 -->
                    <div class="el-select-dropdown el-popper checkTrademark2"
                      style="min-width: 178px; transform-origin: center top; z-index: 2009; position: absolute; top: 35px; left: 0; display: none;"
                      x-placement="bottom-start">
                      <div class="el-scrollbar" style="">
                        <div class="el-select-dropdown__wrap el-scrollbar__wrap"
                          style="margin-bottom: -17px; margin-right: -17px;">
                          <ul class="el-scrollbar__view el-select-dropdown__list">
                            <!---->
                            <li class="el-select-dropdown__item"><span>请选择</span></li>
                            <li class="el-select-dropdown__item"><span>第01类-化学原料</span></li>
                            <li class="el-select-dropdown__item"><span>第02类-颜料油漆</span></li>
                            <li class="el-select-dropdown__item"><span>第03类-日化用品</span></li>
                            <li class="el-select-dropdown__item"><span>第04类-燃料油脂</span></li>
                            <li class="el-select-dropdown__item"><span>第05类-医药</span></li>
                            <li class="el-select-dropdown__item"><span>第06类-金属材料</span></li>
                            <li class="el-select-dropdown__item"><span>第07类-机械设备</span></li>
                            <li class="el-select-dropdown__item"><span>第08类-手工器械</span></li>
                            <li class="el-select-dropdown__item"><span>第09类-科学仪器</span></li>
                            <li class="el-select-dropdown__item"><span>第10类-医疗器械</span></li>
                            <li class="el-select-dropdown__item"><span>第11类-灯具空调</span></li>
                            <li class="el-select-dropdown__item"><span>第12类-运输工具</span></li>
                            <li class="el-select-dropdown__item"><span>第13类-军火烟</span></li>
                            <li class="el-select-dropdown__item"><span>第14类-珠宝钟表</span></li>
                            <li class="el-select-dropdown__item"><span>第15类-乐器</span></li>
                            <li class="el-select-dropdown__item"><span>第16类-办公用品</span></li>
                            <li class="el-select-dropdown__item"><span>第17类-橡胶制品</span></li>
                            <li class="el-select-dropdown__item"><span>第18类-皮革皮具</span></li>
                            <li class="el-select-dropdown__item"><span>第19类-建筑材料</span></li>
                            <li class="el-select-dropdown__item"><span>第20类-家具</span></li>
                            <li class="el-select-dropdown__item"><span>第21类-厨房洁具</span></li>
                            <li class="el-select-dropdown__item"><span>第22类-绳网袋篷</span></li>
                            <li class="el-select-dropdown__item"><span>第23类-纱线丝</span></li>
                            <li class="el-select-dropdown__item"><span>第24类-布料床单</span></li>
                            <li class="el-select-dropdown__item"><span>第25类-服装鞋帽</span></li>
                            <li class="el-select-dropdown__item"><span>第26类-钮扣拉链</span></li>
                            <li class="el-select-dropdown__item"><span>第27类-地毯席垫</span></li>
                            <li class="el-select-dropdown__item"><span>第28类-健身器材</span></li>
                            <li class="el-select-dropdown__item"><span>第29类-食品</span></li>
                            <li class="el-select-dropdown__item"><span>第30类-方便食品</span></li>
                            <li class="el-select-dropdown__item"><span>第31类-饲料种籽</span></li>
                            <li class="el-select-dropdown__item"><span>第32类-啤酒饮料</span></li>
                            <li class="el-select-dropdown__item"><span>第33类-酒</span></li>
                            <li class="el-select-dropdown__item"><span>第34类-烟草烟具</span></li>
                            <li class="el-select-dropdown__item"><span>第35类-广告销售</span></li>
                            <li class="el-select-dropdown__item"><span>第36类-金融物管</span></li>
                            <li class="el-select-dropdown__item"><span>第37类-建筑修理</span></li>
                            <li class="el-select-dropdown__item"><span>第38类-通讯服务</span></li>
                            <li class="el-select-dropdown__item"><span>第39类-运输贮藏</span></li>
                            <li class="el-select-dropdown__item"><span>第40类-材料加工</span></li>
                            <li class="el-select-dropdown__item"><span>第41类-教育娱乐</span></li>
                            <li class="el-select-dropdown__item"><span>第42类-网站服务</span></li>
                            <li class="el-select-dropdown__item"><span>第43类-餐饮住宿</span></li>
                            <li class="el-select-dropdown__item"><span>第44类-医疗园艺</span></li>
                            <li class="el-select-dropdown__item"><span>第45类-社会服务</span></li>
                          </ul>
                        </div>
                        <div class="el-scrollbar__bar is-horizontal">
                          <div class="el-scrollbar__thumb" style="transform: translateX(0%);"></div>
                        </div>
                        <div class="el-scrollbar__bar is-vertical">
                          <div class="el-scrollbar__thumb"
                            style="transform: translateY(0%); height: 16.3071%;"></div>
                        </div>
                      </div>
                      <!---->
                      <div x-arrow="" class="popper__arrow" style="left: 35px;"></div>
                    </div>
                    <!-- 品牌商标类别end -->
                    <input type="text" autocomplete="off" placeholder="请选择" readonly="readonly"
                      class="el-input__inner checkTrademark" style="width: 178px;">
                    <span class="el-input__suffix"><span class="el-input__suffix-inner"><i
                          class="el-select__caret el-input__icon el-icon-arrow-up"></i>
                      </span>
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div class="el-form-item is-required"><label for="brandType" class="el-form-item__label"
                style="width: 130px;">品牌类型</label>
              <div class="el-form-item__content" style="margin-left: 130px;">
                <div role="radiogroup" class="el-radio-group">
                  <label role="radio" tabindex="0" class="el-radio checkBrandType2 is-checked">
                    <span class="el-radio__input">
                      <span class="el-radio__inner is-checked2"></span>
                      <input type="radio" aria-hidden="true" tabindex="-1" class="el-radio__original"
                        value="1" checked>
                    </span>
                    <span class="el-radio__label">国内品牌</span>
                  </label>
                  <label role="radio" tabindex="-1" class="el-radio checkBrandType2"
                    style="margin-left: 15px;">
                    <span class="el-radio__input">
                      <span class="el-radio__inner"></span>
                      <input type="radio" aria-hidden="true" tabindex="-1" class="el-radio__original"
                        value="2">
                    </span>
                    <span class="el-radio__label">国际品牌</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="el-form-item is-success is-required"><label for="operateType"
                class="el-form-item__label" style="width: 130px;">经营类型</label>
              <div class="el-form-item__content" style="margin-left: 130px;">
                <div role="radiogroup" class="el-radio-group">
                  <label role="radio" tabindex="-1" class="el-radio checkManageType">
                    <span class="el-radio__input">
                      <span class="el-radio__inner"></span>
                      <input type="radio" aria-hidden="true" tabindex="-1" class="el-radio__original"
                        value="1">
                    </span>
                    <span class="el-radio__label">自有品牌</span>
                  </label>
                  <label role="radio" tabindex="0" class="el-radio checkManageType"
                    style="margin-left: 15px;">
                    <span class="el-radio__input">
                      <span class="el-radio__inner"></span>
                      <input type="radio" aria-hidden="true" tabindex="-1" class="el-radio__original"
                        value="2">
                    </span>
                    <span class="el-radio__label">代理品牌</span>
                  </label>
                </div>
              </div>
            </div>
            <div class="el-form-item"><label for="" class="el-form-item__label"
                style="width: 130px;">产品外包装图片</label>
              <div class="el-form-item__content" style="margin-left: 130px;">
                <div class="pop-qua-img-simple-upload">
                  <div>
                    <ul class="el-upload-list el-upload-list--picture-card"></ul>
                    <div tabindex="0" class="el-upload el-upload--picture-card flex-center goodsImg">
                      <img src="../../images/static/upload_btn.png" alt="">
                    </div>
                    <input type="file" name="fileData" accept="image/png,image/jpeg,image/gif"
                      class="el-upload__input goodsInput">
                    <div class="el-upload__tip">图片尺寸请确保800px*800px以上，文件大小在5MB以内，支持png、jpeg、gif格式，最多可上传1张
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="brandNatural2">
            <h3 class="pop-brand-base-infor-sub-title">品牌资质</h3>
            <div class="clearfix">
              <div>
                <ul class="pop-brand-quaslist">
                  <li>
                    <h2>1.商标注册证/商品注册申请书</h2>
                    <p>
                      请上传商标注册证书（如商标类目页在背面或第二页请同时上传），未获得注册证的请上传商标注册受理通知书，装饰字画类目无需提供。若商标有变更，请去商标网下载最新的商标流程和商标详情，打印并加盖入驻公司公章
                    </p>
                    <div class="el-form-item mt-brand-quas"><label for="" class="el-form-item__label"
                        style="width: 130px;">有效期至</label>
                      <div class="el-form-item__content" style="margin-left: 130px;">
                        <div
                          class="c-datepicker-date-editor c-datepicker-single-editor J-datepicker-day mt10">
                          <!-- <i class="c-datepicker-range__icon kxiconfont icon-clock"></i> -->
                          <input type="text" autocomplete="off" name="foundDate" id="foundDate"
                            placeholder="选择日期" class=" c-datepicker-data-input only-date" value="">
                        </div>
                      </div>
                    </div>
                    <div class="el-form-item"><label for="" class="el-form-item__label"
                        style="width: 130px;">资质图片</label>
                      <div class="el-form-item__content" style="margin-left: 130px;">
                        <div class="img-upload-box">
                          <div>
                            <ul class="el-upload-list el-upload-list--picture-card"></ul>
                            <div tabindex="0" class="el-upload el-upload--picture-card flex-center uploadImgs">
                              <img src="../../images/static/upload_btn.png" alt="">
                            </div>
                            <input type="file" name="fileData" accept="image/png,image/jpeg,image/gif"
                              class="el-upload__input uploadInputs">
                            <div class="el-upload__tip">
                              图片尺寸请确保800px*800px以上，文件大小在5MB以内，支持格式PNG、JPG、JPEG、GIF，最多可上传20张
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h2>2.销售授权书</h2>
                    <p>
                      请上传品牌方提供的品牌授权证书。
                    </p>
                    <div class="el-form-item mt-brand-quas"><label for="" class="el-form-item__label"
                        style="width: 130px;">有效期至</label>
                      <div class="el-form-item__content" style="margin-left: 130px;">
                        <div
                          class="c-datepicker-date-editor c-datepicker-single-editor J-datepicker-day mt10">
                          <!-- <i class="c-datepicker-range__icon kxiconfont icon-clock"></i> -->
                          <input type="text" autocomplete="off" name="foundDate" id="foundDate"
                            placeholder="选择日期" class=" c-datepicker-data-input only-date" value="">
                        </div>
                      </div>
                    </div>
                    <div class="el-form-item"><label for="" class="el-form-item__label"
                        style="width: 130px;">资质图片</label>
                      <div class="el-form-item__content" style="margin-left: 130px;">
                        <div class="img-upload-box">
                          <div>
                            <ul class="el-upload-list el-upload-list--picture-card"></ul>
                            <div tabindex="0" class="el-upload el-upload--picture-card flex-center uploadImgs2">
                              <img src="../../images/static/upload_btn.png" alt="">
                            </div>
                            <input type="file" name="fileData" accept="image/png,image/jpeg,image/gif"
                              class="el-upload__input uploadInputs2">
                            <div class="el-upload__tip">
                              图片尺寸请确保800px*800px以上，文件大小在5MB以内，支持格式PNG、JPG、JPEG、GIF，最多可上传20张
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h2>3.报关单类</h2>
                    <p>
                      进口品牌商品请上传报关单证书。
                    </p>
                    <div class="el-form-item mt-brand-quas"><label for="" class="el-form-item__label"
                        style="width: 130px;">有效期至</label>
                      <div class="el-form-item__content" style="margin-left: 130px;">
                        <div
                          class="c-datepicker-date-editor c-datepicker-single-editor J-datepicker-day mt10">
                          <!-- <i class="c-datepicker-range__icon kxiconfont icon-clock"></i> -->
                          <input type="text" autocomplete="off" name="foundDate" id="foundDate"
                            placeholder="选择日期" class=" c-datepicker-data-input only-date" value="">
                        </div>
                      </div>
                    </div>
                    <div class="el-form-item"><label for="" class="el-form-item__label"
                        style="width: 130px;">资质图片</label>
                      <div class="el-form-item__content" style="margin-left: 130px;">
                        <div class="img-upload-box">
                          <div>
                            <ul class="el-upload-list el-upload-list--picture-card"></ul>
                            <div tabindex="0" class="el-upload el-upload--picture-card flex-center uploadImgs3">
                              <img src="../../images/static/upload_btn.png" alt="">
                            </div>
                            <input type="file" name="fileData" accept="image/png,image/jpeg,image/gif"
                              class="el-upload__input uploadInputs3">
                            <div class="el-upload__tip">
                              图片尺寸请确保800px*800px以上，文件大小在5MB以内，支持格式PNG、JPG、JPEG、GIF，最多可上传20张
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h2>4.进货发票</h2>
                    <p>
                      进口品牌商品请提供上传日期六个月以内的进货凭证。
                    </p>
                    <div class="el-form-item mt-brand-quas"><label for="" class="el-form-item__label"
                        style="width: 130px;">有效期至</label>
                      <div class="el-form-item__content" style="margin-left: 130px;">
                        <div
                          class="c-datepicker-date-editor c-datepicker-single-editor J-datepicker-day mt10">
                          <!-- <i class="c-datepicker-range__icon kxiconfont icon-clock"></i> -->
                          <input type="text" autocomplete="off" name="foundDate" id="foundDate"
                            placeholder="选择日期" class=" c-datepicker-data-input only-date" value="">
                        </div>
                      </div>
                    </div>
                    <div class="el-form-item"><label for="" class="el-form-item__label"
                        style="width: 130px;">资质图片</label>
                      <div class="el-form-item__content" style="margin-left: 130px;">
                        <div class="img-upload-box">
                          <div>
                            <ul class="el-upload-list el-upload-list--picture-card"></ul>
                            <div tabindex="0" class="el-upload el-upload--picture-card flex-center uploadImgs4">
                              <img src="../../images/static/upload_btn.png" alt="">
                            </div>
                            <input type="file" name="fileData" accept="image/png,image/jpeg,image/gif"
                              class="el-upload__input uploadInputs4">
                            <div class="el-upload__tip">
                              图片尺寸请确保800px*800px以上，文件大小在5MB以内，支持格式PNG、JPG、JPEG、GIF，最多可上传20张
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h2>5.质检、检疫、检验报告</h2>
                    <p>
                      请上传正规部门提供的质检检疫报告。
                    </p>
                    <div class="el-form-item mt-brand-quas"><label for="" class="el-form-item__label"
                        style="width: 130px;">有效期至</label>
                      <div class="el-form-item__content" style="margin-left: 130px;">
                        <div
                          class="c-datepicker-date-editor c-datepicker-single-editor J-datepicker-day mt10 fiveDate">
                          <!-- <i class="c-datepicker-range__icon kxiconfont icon-clock"></i> -->
                          <input type="text" autocomplete="off" name="foundDate" id="fiveDate"
                            placeholder="选择日期" class=" c-datepicker-data-input only-date" value="">
                        </div>
                        &nbsp;&nbsp;
                        <label role="checkbox" class="el-checkbox checkPermanentLabel flex-center">
                          <span aria-checked="mixed" class="el-checkbox__input">
                            <span class="el-checkbox__inner"></span>
                            <input type="checkbox" class="el-checkbox__original checkPermanent" value="永久">
                          </span>
                          <span class="el-checkbox__label">永久</span>
                        </label>
                      </div>
                    </div>
                    <div class="el-form-item"><label for="" class="el-form-item__label"
                        style="width: 130px;">资质图片</label>
                      <div class="el-form-item__content" style="margin-left: 130px;">
                        <div class="img-upload-box">
                          <div>
                            <ul class="el-upload-list el-upload-list--picture-card"></ul>
                            <div tabindex="0" class="el-upload el-upload--picture-card flex-center uploadImgs5">
                              <img src="../../images/static/upload_btn.png" alt="">
                            </div>
                            <input type="file" name="fileData" accept="image/png,image/jpeg,image/gif"
                              class="el-upload__input uploadInputs5">
                            <div class="el-upload__tip">
                              图片尺寸请确保800px*800px以上，文件大小在5MB以内，支持格式PNG、JPG、JPEG、GIF，最多可上传20张
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h2>6.卫生/生产许可证</h2>
                    <p>
                      请提供品牌方持有的卫生/生产许可证证书。
                    </p>
                    <div class="el-form-item mt-brand-quas"><label for="" class="el-form-item__label"
                        style="width: 130px;">有效期至</label>
                      <div class="el-form-item__content" style="margin-left: 130px;">
                        <div
                          class="c-datepicker-date-editor c-datepicker-single-editor J-datepicker-day mt10">
                          <!-- <i class="c-datepicker-range__icon kxiconfont icon-clock"></i> -->
                          <input type="text" autocomplete="off" name="foundDate" id="foundDate"
                            placeholder="选择日期" class=" c-datepicker-data-input only-date" value="">
                        </div>
                      </div>
                    </div>
                    <div class="el-form-item"><label for="" class="el-form-item__label"
                        style="width: 130px;">资质图片</label>
                      <div class="el-form-item__content" style="margin-left: 130px;">
                        <div class="img-upload-box">
                          <div>
                            <ul class="el-upload-list el-upload-list--picture-card"></ul>
                            <div tabindex="0" class="el-upload el-upload--picture-card flex-center uploadImgs6">
                              <img src="../../images/static/upload_btn.png" alt="">
                            </div>
                            <input type="file" name="fileData" accept="image/png,image/jpeg,image/gif"
                              class="el-upload__input uploadInputs6">
                            <div class="el-upload__tip">
                              图片尺寸请确保800px*800px以上，文件大小在5MB以内，支持格式PNG、JPG、JPEG、GIF，最多可上传20张
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li>
                    <h2>7.其他资质</h2>
                    <p>
                      需提交特殊产品资质的类目请将资质上传在此处，包括全国工业生产许可证、3C、医疗器械生产许可证、化妆品生产企业卫生许可证等，根据具体类目资质要求提交
                    </p>
                    <div class="el-form-item mt-brand-quas"><label for="" class="el-form-item__label"
                        style="width: 130px;">有效期至</label>
                      <div class="el-form-item__content" style="margin-left: 130px;">
                        <div
                          class="c-datepicker-date-editor c-datepicker-single-editor J-datepicker-day mt10">
                          <!-- <i class="c-datepicker-range__icon kxiconfont icon-clock"></i> -->
                          <input type="text" autocomplete="off" name="foundDate" id="foundDate"
                            placeholder="选择日期" class=" c-datepicker-data-input only-date" value="">
                        </div>
                      </div>
                    </div>
                    <div class="el-form-item"><label for="" class="el-form-item__label"
                        style="width: 130px;">资质图片</label>
                      <div class="el-form-item__content" style="margin-left: 130px;">
                        <div class="img-upload-box">
                          <div>
                            <ul class="el-upload-list el-upload-list--picture-card"></ul>
                            <div tabindex="0" class="el-upload el-upload--picture-card flex-center uploadImgs7">
                              <img src="../../images/static/upload_btn.png" alt="">
                            </div>
                            <input type="file" name="fileData" accept="image/png,image/jpeg,image/gif"
                              class="el-upload__input uploadInputs7">
                            <div class="el-upload__tip">
                              图片尺寸请确保800px*800px以上，文件大小在5MB以内，支持格式PNG、JPG、JPEG、GIF，最多可上传20张
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div class="brand-category-box">
            <h2 class="pop-brand-base-infor-main-title">经营类目</h2>
            <div class="clearfix2 flex-center" style="width: 100%;">
              <h3 class="pop-brand-base-infor-sub-title fl" style="margin: 0; margin-top: 10px;">类目信息</h3>
              <button type="button"
                class="el-button fr btn-bg-style el-button--default el-button--small checkThick">
                <span>选择类目</span>
              </button>
            </div>
            <div class="brand-border-box">
              <div class="cate" style="text-align: center;">请选择您要经营的类目</div>
            </div>
          </div>
          <div class="pop-brand-main-save-button">
            <button type="button" class="el-button el-button--default el-button--small delBrand">
              <span>删除品牌</span>
            </button>
            <button type="button" class="el-button btn-bg-style el-button--primary el-button--small">
              <span>保存</span>
            </button>
          </div>
        </form>
      </div>
    `;
    var nav2 = `
      <div tabindex="0" class="el-tabs__item is-left is-active">
        <div class="brand-tab-content">未填写 </div>
      </div>
    `;

    $('#brandCont').append(dom);
    $('.el-tabs__nav').append(nav2);

    if($('.el-tabs__item').length == 0) {
      $('#brandCont').find(`.el-tab-pane:eq(${brandState})`).show().siblings().hide();
      $('.el-tabs__nav').find(`.el-tabs__item:eq(${brandState})`).addClass('is-active').siblings().removeClass('is-active');
    }else{
      $('.el-tabs__item').trigger('click');
    }

    
    
    //年月日单个
    $('.J-datepicker-day').datePicker({
      hasShortcut: true,
      format: 'YYYY-MM-DD',
    });

    //年月日范围
    $('.J-datepicker-range-day').datePicker({
      hasShortcut: true,
      format: 'YYYY-MM-DD',
      isRange: true,
      shortcutOptions: DATAPICKERAPI.rangeShortcutOption1
    });
  });

  //删除品牌
  $(document).on('click', '.delBrand', function() {
    var index = $(".delBrand").index(this);
    if($('.el-tabs__item').length == 1) {
      $(`.el-tabs__item:eq(${index})`).remove();
      $(`.el-tab-pane:eq(${index})`).remove();
      $('#addBrand').hide();
      $('#noCheckBrand').show();
      brandState = -1;
    }else{
      $(`.el-tabs__item:eq(${index})`).remove();
      $(`.el-tab-pane:eq(${index})`).remove();
      brandState--;
      $('.el-tabs__item').trigger('click');
    }
  });

  //上传品牌logo
  $(document).on('click', '.brandImg', function() {
    $('.brandInput').click();
  });
  $(document).on('click', '.goodsImg', function() {
    $('.goodsInput').click();
  });

  $(document).on('click', '.uploadImgs', function() {
    $('.uploadInputs').click();
  });
  $(document).on('click', '.uploadImgs2', function() {
    $('.uploadInputs2').click();
  });
  $(document).on('click', '.uploadImgs3', function() {
    $('.uploadInputs3').click();
  });
  $(document).on('click', '.uploadImgs4', function() {
    $('.uploadInputs4').click();
  });
  $(document).on('click', '.uploadImgs5', function() {
    $('.uploadInputs5').click();
  });
  $(document).on('click', '.uploadImgs6', function() {
    $('.uploadInputs6').click();
  });
  $(document).on('click', '.uploadImgs7', function() {
    $('.uploadInputs7').click();
  });

  //添加新品牌的中文名称
  $(document).on('input', '.brandChineseName', function () {
    $(`.brand-tab-content:eq(${brandIndex})`).text($(this).val());
  });

  //是否有人员对接
  $('.yesOrno').on('change', function () {
    if ($(this).val() == '是') {
      $('.personNameLi').show();
    } else {
      $('.personNameLi').hide();
    }
  });

  //添加无品牌类目
  $('.add-not-brand').on('click', function () {
    brandState++;
    $('#noCheckBrand').hide();
    $('#addBrand, .noBrand, .noBrandCont').show();
    // $('.noBrand').addClass('is-active').siblings().removeClass('is-active');
    var dom = `
      <div class="el-tab-pane noBrandCont">
        <form class="el-form demo-ruleForm brand-category-form">
          <div class="brand-category-box">
            <h2 class="pop-brand-base-infor-main-title">经营类目</h2>
            <div class="clearfix2 flex-center" style="width: 100%;">
              <h3 class="pop-brand-base-infor-sub-title fl" style="margin: 0; margin-top: 10px;">类目信息</h3>
              <button type="button"
                class="el-button fr btn-bg-style el-button--default el-button--small checkThick">
                <span>选择类目</span>
              </button>
            </div>
            <div class="brand-border-box">
              <div class="cate" style="text-align: center;">请选择您要经营的类目</div>
            </div>
          </div>
          <div class="pop-brand-main-save-button">
            <button type="button" class="el-button el-button--default el-button--small delBrand">
              <span>删除品牌</span>
            </button>
            <button type="button" class="el-button btn-bg-style el-button--primary el-button--small">
              <span>保存</span>
            </button>
          </div>
        </form>
      </div>
    `;
    var nav = `
      <div tabindex="0" class="el-tabs__item noBrand is-left is-active">
        <div class="brand-tab-content">无品牌（noBrand） </div>
      </div>
    `;
    $('#brandCont').append(dom);
    $('.el-tabs__nav').append(nav);
    
    if($('.el-tabs__item').length == 0) {
      $('#brandCont').find(`.el-tab-pane:eq(${brandState})`).show().siblings().hide();
      $('.el-tabs__nav').find(`.el-tabs__item:eq(${brandState})`).addClass('is-active').siblings().removeClass('is-active');
    }else{
      $('.el-tabs__item').trigger('click');
    }
  });

  //保存类目
  $(document).on('click', '.submitLimitButton', function() {
    var one = $('.lev1-area').find('.curr').find('label').attr('title');
    var two = $('.lev2-area').find('.curr').find('label').attr('title');
    var dom = `
      <div style="margin-top: 5px;">${one}-&gt;${two}-&gt;${levVal.join('|')}</div>
    `;
    
    $(`.brand-border-box:eq(${brandIndex})`).append(dom);
    // $('.brand-border-box').append(dom);
    $(`.cate:eq(${brandIndex})`).hide();
    $('.thickclose').trigger('click');
  });

  
  //上传产品外包装图片
  $(document).on('click', '.uploadImg', function() {
    // $('.uploadInput').click();
    $(this).siblings('.uploadInput').click();
  });

  $(document).on('change', '.uploadInput', function(e) {
    console.log(e.target.files[0]);
  });

  //上传资质图片
  $(document).on('click', '.naturalImg', function() {
    $('.naturalInput').click();
  });
  //上传资质图片
  $(document).on('click', '.naturalImg2', function() {
    $('.naturalInput2').click();
  });
  //上传资质图片
  $(document).on('click', '.naturalImg3', function() {
    $('.naturalInput3').click();
  });
  //上传资质图片
  $(document).on('click', '.naturalImg4', function() {
    $('.naturalInput4').click();
  });
  //上传资质图片
  $(document).on('click', '.naturalImg5', function() {
    $('.naturalInput5').click();
  });
  //上传资质图片
  $(document).on('click', '.naturalImg6', function() {
    $('.naturalInput6').click();
  });
  //上传资质图片
  $(document).on('click', '.naturalImg7', function() {
    $('.naturalInput7').click();
  });



 
 
});

