$(function() {

  $('.recharge-type').each(function(index,item) {
    if($(item).text() == '充值失败') {
      $(this).siblings('.payment-price').addClass('payment-price2');
    }
  });
  

  $(".wallet-introduce ul li").click(function() {
    $(".wallet-introduce ul li").eq($(this).index()).addClass("wallet-cur").siblings().removeClass('wallet-cur');
    $(".wallet-none").eq($(".wallet-introduce ul li").index(this)).addClass("wallet-on").siblings().removeClass('wallet-on'); 
  });

  //选择规定时间段的订单
  $('.fuli-order-left').mouseover(function() {
    $(this).addClass('fuli-order-bg');
    $(this).find('.fuli-order-arrow').addClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item').css('display','block');
  }).mouseout(function() {
    $(this).removeClass('fuli-order-bg');
    $(this).find('.fuli-order-arrow').removeClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item').css('display','none');
  });

  $('.fuli-order-left-item ul li').click(function() {
    $('.fuli-check-time').text($(this).text());
  });

  $('.fuli-order-list-income').mouseover(function() {
    $(this).addClass('fuli-order-bg');
    $(this).find('.fuli-order-arrow').addClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item-width').css('display','block');
  }).mouseout(function() {
    $(this).removeClass('fuli-order-bg');
    $(this).find('.fuli-order-arrow').removeClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item-width').css('display','none');
  });

  var expendArr = [
    {
      orderTime: '2019-01-07 16:07:42',
      expend: '-100.00',
      expendType: '下单支付',
      expendOrderNumber: '200000000000841',
      explain: '下单购买商品，京东男士护肤。。。。。。。'
    }
  ];
  var incomeArr = [
    {
      orderTime: '2019-01-07 16:07:42',
      expend: '+100.00',
      expendType: '单位充值',
      expendOrderNumber: '200000000000841',
      explain: '充值100元，福利类型端午。。。'
    },
    {
      orderTime: '2019-01-07 16:07:42',
      expend: '+500.00',
      expendType: '订单取消',
      expendOrderNumber: '200000000000841',
      explain: ' 取消订单，退款京东男士护肤细化'
    },
    {
      orderTime: '2019-01-07 16:07:42',
      expend: '+600.00',
      expendType: '个人充值',
      expendOrderNumber: '200000000000841',
      explain: '充值1000元，充值方式微信充值'
    },
    {
      orderTime: '2019-01-07 16:07:42',
      expend: '+300.00',
      expendType: '退款完成',
      expendOrderNumber: '200000000000841',
      explain: ' 退款成功，退款京东男士护肤细化'
    }
  ];
  $('.fuli-order-left-item-width ul li').click(function() {
    $('.fuli-check-time-income').text($(this).text());
    if($(this).text() == '支出') {
      $('.fuli-balance-wrapper').find('.fuli-balance-content').remove();
      expendArr.forEach(element => {
        var incomeDom = `
        <div class="fuli-balance-content clearfix" style="display: flex;">
          <div class="fuli-order-left2">
            ${element.orderTime}
          </div>
          <div class="fuli-order-right2">
            <ul class="clearfix fuli-order-list2">
              <li class="expend">${element.expend}</li>
              <li>${element.expendType}</li>
              <li class="fuli-frozen-color">${element.expendOrderNumber}</li>
              <li title="${element.explain}" class="change-notes">${element.explain}</li>
            </ul>
          </div>
        </div>
        `
        $('.fuli-balance-wrapper').append(incomeDom);
      });
    }else{
      $('.fuli-balance-wrapper').find('.fuli-balance-content').remove();
      incomeArr.forEach(element => {
        var incomeDom = `
        <div class="fuli-balance-content clearfix" style="display: flex;">
          <div class="fuli-order-left2">
            ${element.orderTime}
          </div>
          <div class="fuli-order-right2">
            <ul class="clearfix fuli-order-list2">
              <li class="income">${element.expend}</li>
              <li>${element.expendType}</li>
              <li class="fuli-frozen-color">${element.expendOrderNumber}</li>
              <li title="${element.explain}" class="change-notes">${element.explain}</li>
            </ul>
          </div>
        </div>
        `
        $('.fuli-balance-wrapper').append(incomeDom);
      });
    }
  });

  $('.recharge-details-head-left').mouseover(function() {
    $(this).addClass('fuli-order-bg');
    $(this).find('.fuli-order-arrow').addClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item-recharge').css('display','block');
  }).mouseout(function() {
    $(this).removeClass('fuli-order-bg');
    $(this).find('.fuli-order-arrow').removeClass('fuli-hover-order-arrow');
    $(this).find('.fuli-order-left-item-recharge').css('display','none');
  });

  $('.fuli-order-left-item-recharge ul li').click(function() {
    $('.fuli-check-recharge').text($(this).text());
  });

  tabPage({
    pageMain: '.fuli-balance-wrapper',
    pageNav: '#pageNav',
    pagePrev: '#prev',
    pageNext: '#next',
    curNum: 12, /*每页显示的条数*/
    activeClass: 'pageActive', /*高亮显示的class*/
    ini: 0/*初始化显示的页面*/
  });

})


function tabPage(tabPage) {
  var pageMain = $(tabPage.pageMain);
  /*获取内容列表*/
  var pageNav = $(tabPage.pageNav);
  /*获取分页*/
  var pagePrev = $(tabPage.pagePrev);
  /*上一页*/
  var pageNext = $(tabPage.pageNext);
  /*下一页*/


  var curNum = tabPage.curNum;
  /*每页显示数*/
  var len = Math.ceil(pageMain.find(".fuli-balance-content").length / curNum);
  /*计算总页数*/
  var pageList = '';
  /*生成页码*/
  var iNum = 0;
  /*当前的索引值*/

  for (var i = 0; i < len; i++) {
      pageList += '<a href="javascript:;">' + (i + 1) + '</a>';
  }
  pageNav.html(pageList);
  /*头一页加高亮显示*/
  pageNav.find("a:first").addClass(tabPage.activeClass);

  /*******标签页的点击事件*******/
      pageNav.find("a").each(function(){
        $(this).click(function () {
            pageNav.find("a").removeClass(tabPage.activeClass);
            $(this).addClass(tabPage.activeClass);
            iNum = $(this).index();
            $(pageMain).find(".fuli-balance-content").hide();
            for (var i = ($(this).html() - 1) * curNum; i < ($(this).html()) * curNum; i++) {
                $(pageMain).find(".fuli-balance-content").eq(i).show()
            }

        });
  })


  $(pageMain).find(".fuli-balance-content").hide();
  /************首页的显示*********/
  for (var i = 0; i < curNum; i++) {
      $(pageMain).find(".fuli-balance-content").eq(i).show()
  }


  /*下一页*/
  pageNext.click(function () {
      $(pageMain).find(".fuli-balance-content").hide();
      if (iNum == len - 1) {
          alert('已经是最后一页');
          for (var i = (len - 1) * curNum; i < len * curNum; i++) {
              $(pageMain).find(".fuli-balance-content").eq(i).show()
          }
          return false;
      } else {
          pageNav.find("a").removeClass(tabPage.activeClass);
          iNum++;
          pageNav.find("a").eq(iNum).addClass(tabPage.activeClass);
//                    ini(iNum);
      }
      for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
          $(pageMain).find(".fuli-balance-content").eq(i).show()
      }
  });
  /*上一页*/
  pagePrev.click(function () {
      $(pageMain).find(".fuli-balance-content").hide();
      if (iNum == 0) {
          alert('当前是第一页');
          for (var i = 0; i < curNum; i++) {
              $(pageMain).find(".fuli-balance-content").eq(i).show()
          }
          return false;
      } else {
          pageNav.find("a").removeClass(tabPage.activeClass);
          iNum--;
          pageNav.find("a").eq(iNum).addClass(tabPage.activeClass);
      }
      for (var i = iNum * curNum; i < (iNum + 1) * curNum; i++) {
          $(pageMain).find(".fuli-balance-content").eq(i).show()
      }
  })
}