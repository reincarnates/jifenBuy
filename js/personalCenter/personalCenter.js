$(function() {

  //查看物流状态
  $('.personal-operation-item').find('.personal-operation-img').addClass('daifukuan');
  $('.personal-operation-item').click(function() {
    var dataName = $(this).attr('data-name');
    if(dataName == '待付款') {
      $('.personal-operation-item').find('.personal-operation-img').addClass('daifukuan');
    }else{
      $('.personal-operation-item').find('.personal-operation-img').removeClass('daifukuan');
    }
    
    if(dataName == '待发货') {
      $('.personal-operation-item').find('.personal-operation-img2').addClass('daifahuo');
    }else{
      $('.personal-operation-item').find('.personal-operation-img2').removeClass('daifahuo');
    }

    if(dataName == '待收货') {
      $('.personal-operation-item').find('.personal-operation-img3').addClass('daishouhuo');
    }else{
      $('.personal-operation-item').find('.personal-operation-img3').removeClass('daishouhuo');
    }

    if(dataName == '已完成') {
      $('.personal-operation-item').find('.personal-operation-img4').addClass('yiwancheng');
    }else{
      $('.personal-operation-item').find('.personal-operation-img4').removeClass('yiwancheng');
    }

    if(dataName == '待评价') {
      $('.personal-operation-item').find('.personal-operation-img5').addClass('daipingjia');
    }else{
      $('.personal-operation-item').find('.personal-operation-img5').removeClass('daipingjia');
    }

    if(dataName == '退款退货') {
      $('.personal-operation-item').find('.personal-operation-img6').addClass('tuikuan');
    }else{
      $('.personal-operation-item').find('.personal-operation-img6').removeClass('tuikuan');
    }

		$(".personal-operation-item").eq($(".personal-operation-item").index(this)).addClass("curr").siblings().removeClass('curr');
		$(".ob").eq($(".personal-operation-item").index(this)).addClass("on").siblings().removeClass('on');
  });

  //收藏选项卡
  $('.collection-tab-head-wrods').click(function() {
    $(".collection-tab-head-wrods").eq($(".collection-tab-head-wrods").index(this)).addClass("collection_active").siblings().removeClass('collection_active');
		$(".ob2").eq($(".collection-tab-head-wrods").index(this)).addClass("on2").siblings().removeClass('on2');
  });

  //账户信息选项卡
  $('.account-info-head-item').click(function() {
    $(".account-info-head-item").eq($(".account-info-head-item").index(this)).addClass("account_active").siblings().removeClass('account_active');
		$(".ob").eq($(".account-info-head-item").index(this)).addClass("on").siblings().removeClass('on');
  });

  //账户信息弹出上传头像对话框
  $('.account-portrait-right').click(function () {
    return $('#upload').click(); //注意这句，主要是需要return点击事件返回值
  });

  
});