$(function() {

  $('.filter-top-tab-item').click(function() {
    $(".filter-top-tab-item").eq($(".filter-top-tab-item").index(this)).addClass("filterCur").siblings().removeClass('filterCur');
  });

  $('.listpage-goods-item-btn-left').on('click',function() {
    alert();
  });

  $('.paging-content-ul a').click(function() {
    $(".paging-content-ul a").eq($(".paging-content-ul a").index(this)).addClass("currPaging").siblings().removeClass('currPaging');
  });

  $('.filter-btn').click(function() {
    $(".filter-btn").eq($(".filter-btn").index(this)).addClass("filter-btn-active").siblings().removeClass('filter-btn-active');
  });

  var priceNum = 0;
  $('#filterprice').on('click', function() {
    if(priceNum == 0) {
      $(this).addClass('filter-btn-bg');
      priceNum = 1;
    }else{
      $(this).removeClass('filter-btn-bg');
      priceNum = 0;
    }
  });


  var retractNum = 0;
  $('.brand-right-btn').on('click', function() {
    if(retractNum == 0) {
      $('.brand-right-btn').text('收起');
      $('.brand-wrapper').css('height', $('.brand-center').height());
      retractNum = 1;
    }else{
      $('.brand-right-btn').text('展开');
      $('.brand-wrapper').css('height', '60px');
      retractNum = 0;
    }
  });


  //全部分类下拉
  $('.left_nav').on('mouseover', function() {
    $('.listPageMenu').show();
  }).on('mouseout', function() {
    $('.listPageMenu').hide();
  });


  //选择品牌
  $('.brand-center ul li').on('click', function() {
    var myDom = `
      <span class='crumbs-wrapper'>
        <span class="crumbs-arrow">></span>
        <a href="javaScript:;" class="crumb-select-item">
          <b>${$(this).parent().parent().siblings('.brand-left').text()}</b>
          <em>${$(this).find('a').text()}</em>
          <i></i>
        </a>
      </span>
    `
    // if($('.crumb-select-item').attr('data-id') == crumbId) {
      $('.crumbs').append(myDom);
    // console.log(crumbId,$('.crumb-select-item').attr('data-id'));
    $('.crumb-select-item').show();
    // }
  });

  $(document).on('click', '.crumb-select-item i', function() {
    $(this).parent().parent('.crumbs-wrapper').remove();
  });

  //选择电商
  $('.retailers-center ul li').on('click',function() {
    var myDom = `
      <span class='crumbs-wrapper'>
        <span class="crumbs-arrow">></span>
        <a href="javaScript:;" class="crumb-select-item">
          <b>${$(this).parent().parent().siblings('.retailers-left').text()}</b>
          <em>${$(this).find('a').text()}</em>
          <i></i>
        </a>
      </span>
    ` 
    $('.crumbs').append(myDom);
    $('.crumb-select-item').show();
  });

  //选择价格
  $('.price-center ul li').on('click',function() {
    var myDom = `
      <span class='crumbs-wrapper'>
        <span class="crumbs-arrow">></span>
        <a href="javaScript:;" class="crumb-select-item">
          <b>${$(this).parent().parent().siblings('.price-left').text()}</b>
          <em>${$(this).find('a').text()}</em>
          <i></i>
        </a>
      </span>
    ` 
    $('.crumbs').append(myDom);
    $('.crumb-select-item').show();
  });

})