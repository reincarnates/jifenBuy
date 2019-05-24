$(function () {

	//显示下拉购物车
	$('.shop_cart').mouseover(function () {
		$(this).addClass('search-bg');
		$(this).find('.search-select-small').css('display', 'block');
		$(this).find('.search-cart-select').addClass('small-bg');
		$(this).find('.search-cart-all-price').css('display', 'block');
		$(this).find('.search-not-cart').css('display', 'block');
	}).mouseout(function () {
		$(this).removeClass('search-bg');
		$(this).find('.search-select-small').css('display', 'none');
		$(this).find('.search-cart-select').removeClass('small-bg');
		$(this).find('.search-cart-all-price').css('display', 'none');
		$(this).find('.search-not-cart').css('display', 'none');
	});

	//显示列表二级菜单
	$('.menu ul li').mouseover(function () {
		$(this).find('.mask').css('display', 'block');
		// $('.adsense-list-select').show();
		$(".listNone").eq($(".menu ul li").index(this)).addClass("listBlock").siblings().removeClass('listBlock');
	}).mouseout(function() {
		$(this).find('.mask').css('display', 'none');
		$(".listNone").eq($(".menu ul li").index(this)).removeClass('listBlock');
	});

	$('.adsense-list-select').mouseover(function() {
		$(this).show();
	}).mouseout(function() {
		$(this).hide();
	});

	//楼层选项卡
	$(".floor_midtitle ul li").mouseover(function () {
		$(".floor_midtitle ul li").eq($(".floor_midtitle ul li").index(this)).addClass("cur").siblings().removeClass('cur');
		$(".ob").eq($(".floor_midtitle ul li").index(this)).addClass("on").siblings().removeClass('on');
	});

	//关闭右侧面板
	$('.tbar-panel-header .close-panel').click(function () {
		$('.toolbar-wrap').removeClass('toolbar-open')
	});

	//当点击跳转链接后，回到页面顶部位置
	$("#toTop").click(function () {
		$('body,html').animate({ scrollTop: 0 }, 500);
		// return false;
	});

	//头部导航下拉显示
	$('.myOrder,.myOrder2').mouseover(function () {
		$(this).css({'background-color': '#fff', });
		$(this).find('.myOrder-item').show();
	}).mouseout(function () {
		$(this).css({ 'background-color': '#f5f5f5',  });
		$(this).find('.myOrder-item').hide();
	});

	//APP
	$('.App').mouseover(function () {
		$(this).find('.App-item').show();
	}).mouseout(function () {
		$(this).find('.App-item').hide();
	});

	//头部输入框获取焦点
	$('.search-input-left').focus(function () {
		$('.fuli-shelper').css('display', 'block');
		$(this).attr('placeholder', "");
	}).blur(function () {
		$('.fuli-shelper').css('display', 'none');
		if ($(this).val() == "") {
			$(this).attr('placeholder', '国际大牌母婴用品');
		}
	});

	//搜索完成显示的列表
	$('.goods-list li').mouseover(function () {
		$(this).css('background', '#eee');
		$(this).find('.history').text('删除').css('color', '#2c7bb4');
	}).mouseout(function () {
		$(this).css('background', 'none');
		$(this).find('.history').text('历史记录').css('color', '#b7b7b7');
	});

	//选择省份
	$('.address').mouseover(function () {
		$(this).css({ 'background': '#fff', 'borderColor': '#d1d1d1' });
		$('.cover').show();
		$('.home-city').show();
	}).mouseout(function () {
		$(this).css({ 'background': 'none', 'borderColor': '#f5f5f5' });
		$('.cover').hide();
		$('.home-city').hide();
	});

	$('.city-select dl dd a').click(function () {
		$('.check-city').text($(this).text());
	});

	//退出登录
	$('.sign-out').click(function () {
		alert();
	});

	//点击搜索按钮
	$('.search-input-right').click(function() {
		console.log($('.search-input-left').val());
		service.post('http://localhost/jifenbuy/data/data.json', {}, function(res) {
      console.log(res);
    })
	});

	//回车搜索
	$('.search-input-left').keydown(function(event) {
		if(event.keyCode == 13) {
			$('.search-input-right').trigger('click');
		}
	});

	//提交反馈
	$('.form-submit').click(function() {
		var reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$");
		if($('.form-content').val() == '') {
			$('.form-content').css('border-color','red');
			$('.form-content').focus();
			return false;
		}
		if($('#email').val() == '') {
			$('#email').css('border-color','red');
			$('#email').focus();
			return false;
		}
		if(!reg.test($('#email').val())){
			alert("邮箱格式不正确，请重新输入！");
			return false;
		}
		if($('#userName').val() == '') {
			$('#userName').css('border-color','red');
			$('#userName').focus();
			return false;
		}
		service.post('http://localhost/jifenbuy/data/data.json', {}, function(res) {
      console.log(res);
    })
	});

	$('.form-content,#email,#userName').keydown(function() {
		$(this).css('border-color','#ddd');
	});

	//验证弹框输入的手机号和验证码
	$('.bind-phone-mask-phone-sure-btn').on('click', function() {
		var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
		if($('.bind-phone-mask-phone-number input').val() == '') {
			$('.bind-phone-position').show();
			$('.bind-phone-mask-phone-number input').focus();
			return false;
		}else{
			$('.bind-phone-position').hide();
		}

		if($('.bind-phone-mask-phone-number input').val()) {
			if (!myreg.test($('.bind-phone-mask-phone-number input').val())) {
				alert('请填写正确的手机号');
				$('.bind-phone-mask-phone-number input').focus();
			}
		}

		if($('.bind-phone-mask-phone-rule-code-left input').val() == '') {
			$('.rule-code').show();
			$('.bind-phone-mask-phone-number input').focus();
			return false;
		}else{
			$('.rule-code').hide();
		}

	});


	/*************/
	$('.tbar-cart-item').hover(function () { $(this).find('.p-del').show(); }, function () { $(this).find('.p-del').hide(); });
	$('.jth-item').hover(function () { $(this).find('.add-cart-button').show(); }, function () { $(this).find('.add-cart-button').hide(); });
	$('.toolbar-tab').hover(function () { $(this).find('.tab-text').addClass("tbar-tab-hover"); $(this).find('.footer-tab-text').addClass("tbar-tab-footer-hover"); $(this).addClass("tbar-tab-selected"); }, function () { $(this).find('.tab-text').removeClass("tbar-tab-hover"); $(this).find('.footer-tab-text').removeClass("tbar-tab-footer-hover"); $(this).removeClass("tbar-tab-selected"); });
	$('.tbar-tab-cart').click(function () {
		if ($('.toolbar-wrap').hasClass('toolbar-open')) {
			if ($(this).find('.tab-text').length > 0) {
				if (!$('.tbar-tab-follow').find('.tab-text').length > 0) {
					var info = "<em class='tab-text '>联系客服</em>";
					$('.tbar-tab-follow').append(info);
					$('.tbar-tab-follow').removeClass('tbar-tab-click-selected');
					$('.tbar-panel-follow').css({ 'visibility': "hidden", "z-index": "-1" });
				}
				if (!$('.tbar-tab-history').find('.tab-text').length > 0) {
					var info = "<em class='tab-text '>我的足迹</em>";
					$('.tbar-tab-history').append(info);
					$('.tbar-tab-history').removeClass('tbar-tab-click-selected');
					$('.tbar-panel-history').css({ 'visibility': "hidden", "z-index": "-1" });
				}
				if (!$('.tbar-tab-back').find('.tab-text').length > 0) {
					var info = "<em class='tab-text '>我的足迹</em>";
					$('.tbar-tab-back').append(info);
					$('.tbar-tab-back').removeClass('tbar-tab-click-selected');
					$('.tbar-panel-back').css({ 'visibility': "hidden", "z-index": "-1" });
				}
				$(this).addClass('tbar-tab-click-selected');
				$(this).find('.tab-text').remove();
				$('.tbar-panel-cart').css({ 'visibility': "visible", "z-index": "1" });

			} else {
				var info = "<em class='tab-text '>联系客服</em>";
				$('.toolbar-wrap').removeClass('toolbar-open');
				$(this).append(info);
				$(this).removeClass('tbar-tab-click-selected');
				$('.tbar-panel-cart').css({ 'visibility': "hidden", "z-index": "-1" });
			}


		} else {
			$(this).addClass('tbar-tab-click-selected');
			$(this).find('.tab-text').remove();
			$('.tbar-panel-cart').css({ 'visibility': "visible", "z-index": "1" });
			$('.tbar-panel-follow').css('visibility', 'hidden');
			$('.tbar-panel-history').css('visibility', 'hidden');
			$('.toolbar-wrap').addClass('toolbar-open');
		}
	});
	$('.tbar-tab-follow').click(function () {
		if ($('.toolbar-wrap').hasClass('toolbar-open')) {
			if ($(this).find('.tab-text').length > 0) {
				if (!$('.tbar-tab-cart').find('.tab-text').length > 0) {
					var info = "<em class='tab-text '>购物车</em>";
					$('.tbar-tab-cart').append(info);
					$('.tbar-tab-cart').removeClass('tbar-tab-click-selected');
					$('.tbar-panel-cart').css({ 'visibility': "hidden", "z-index": "-1" });
				}
				if (!$('.tbar-tab-history').find('.tab-text').length > 0) {
					var info = "<em class='tab-text '>我的足迹</em>";
					$('.tbar-tab-history').append(info);
					$('.tbar-tab-history').removeClass('tbar-tab-click-selected');
					$('.tbar-panel-history').css({ 'visibility': "hidden", "z-index": "-1" });
				}
				if (!$('.tbar-tab-back').find('.tab-text').length > 0) {
					var info = "<em class='tab-text '>我的足迹</em>";
					$('.tbar-tab-back').append(info);
					$('.tbar-tab-back').removeClass('tbar-tab-click-selected');
					$('.tbar-panel-back').css({ 'visibility': "hidden", "z-index": "-1" });
				}
				$(this).addClass('tbar-tab-click-selected');
				$(this).find('.tab-text').remove();
				$('.tbar-panel-follow').css({ 'visibility': "visible", "z-index": "1" });

			} else {
				var info = "<em class='tab-text '>联系客服</em>";
				$('.toolbar-wrap').removeClass('toolbar-open');
				$(this).append(info);
				$(this).removeClass('tbar-tab-click-selected');
				$('.tbar-panel-follow').css({ 'visibility': "hidden", "z-index": "-1" });
			}


		} else {
			$(this).addClass('tbar-tab-click-selected');
			$(this).find('.tab-text').remove();
			$('.tbar-panel-cart').css('visibility', 'hidden');
			$('.tbar-panel-follow').css({ 'visibility': "visible", "z-index": "1" });
			$('.tbar-panel-history').css('visibility', 'hidden');
			$('.toolbar-wrap').addClass('toolbar-open');
		}
	});
	$('.tbar-tab-history').click(function () {
		if ($('.toolbar-wrap').hasClass('toolbar-open')) {
			if ($(this).find('.tab-text').length > 0) {
				if (!$('.tbar-tab-follow').find('.tab-text').length > 0) {
					var info = "<em class='tab-text '>我的关注</em>";
					$('.tbar-tab-follow').append(info);
					$('.tbar-tab-follow').removeClass('tbar-tab-click-selected');
					$('.tbar-panel-follow').css({ 'visibility': "hidden", "z-index": "-1" });
				}
				if (!$('.tbar-tab-cart').find('.tab-text').length > 0) {
					var info = "<em class='tab-text '>购物车</em>";
					$('.tbar-tab-cart').append(info);
					$('.tbar-tab-cart').removeClass('tbar-tab-click-selected');
					$('.tbar-panel-cart').css({ 'visibility': "hidden", "z-index": "-1" });
				}
				if (!$('.tbar-tab-back').find('.tab-text').length > 0) {
					var info = "<em class='tab-text '>我的足迹</em>";
					$('.tbar-tab-back').append(info);
					$('.tbar-tab-back').removeClass('tbar-tab-click-selected');
					$('.tbar-panel-back').css({ 'visibility': "hidden", "z-index": "-1" });
				}
				$(this).addClass('tbar-tab-click-selected');
				$(this).find('.tab-text').remove();
				$('.tbar-panel-history').css({ 'visibility': "visible", "z-index": "1" });

			} else {
				var info = "<em class='tab-text '>我的足迹</em>";
				$('.toolbar-wrap').removeClass('toolbar-open');
				$(this).append(info);
				$(this).removeClass('tbar-tab-click-selected');
				$('.tbar-panel-history').css({ 'visibility': "hidden", "z-index": "-1" });
			}

		} else {
			$(this).addClass('tbar-tab-click-selected');
			$(this).find('.tab-text').remove();
			$('.tbar-panel-cart').css('visibility', 'hidden');
			$('.tbar-panel-follow').css('visibility', 'hidden');
			$('.tbar-panel-history').css({ 'visibility': "visible", "z-index": "1" });
			$('.toolbar-wrap').addClass('toolbar-open');
		}
	});
	$('.tbar-tab-back').click(function () {
		if ($('.toolbar-wrap').hasClass('toolbar-open')) {
			if ($(this).find('.tab-text').length > 0) {
				if (!$('.tbar-tab-follow').find('.tab-text').length > 0) {
					var info = "<em class='tab-text '>我的关注</em>";
					$('.tbar-tab-follow').append(info);
					$('.tbar-tab-follow').removeClass('tbar-tab-click-selected');
					$('.tbar-panel-follow').css({ 'visibility': "hidden", "z-index": "-1" });
				}
				if (!$('.tbar-tab-cart').find('.tab-text').length > 0) {
					var info = "<em class='tab-text '>购物车</em>";
					$('.tbar-tab-cart').append(info);
					$('.tbar-tab-cart').removeClass('tbar-tab-click-selected');
					$('.tbar-panel-cart').css({ 'visibility': "hidden", "z-index": "-1" });
				}

				if (!$('.tbar-tab-history').find('.tab-text').length > 0) {
					var info = "<em class='tab-text '>我的足迹</em>";
					$('.tbar-tab-history').append(info);
					$('.tbar-tab-history').removeClass('tbar-tab-click-selected');
					$('.tbar-panel-history').css({ 'visibility': "hidden", "z-index": "-1" });
				}
				$(this).addClass('tbar-tab-click-selected');
				$(this).find('.tab-text').remove();
				$('.tbar-panel-back').css({ 'visibility': "visible", "z-index": "1" });

			} else {
				var info = "<em class='tab-text '>反馈</em>";
				$('.toolbar-wrap').removeClass('toolbar-open');
				$(this).append(info);
				$(this).removeClass('tbar-tab-click-selected');
				$('.tbar-panel-back').css({ 'visibility': "hidden", "z-index": "-1" });
			}

		} else {
			$(this).addClass('tbar-tab-click-selected');
			$(this).find('.tab-text').remove();
			$('.tbar-panel-cart').css('visibility', 'hidden');
			$('.tbar-panel-follow').css('visibility', 'hidden');
			$('.tbar-panel-back').css({ 'visibility': "visible", "z-index": "1" });
			$('.toolbar-wrap').addClass('toolbar-open');
		}
	});

});