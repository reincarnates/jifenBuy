$(function() {
  //快递包裹
  var expressNum = 3;
  if(expressNum == 1) {
    $('#star ul li').eq(0).addClass('on');
    $('.goods-evaluate-span').html('<strong>1分</strong>');
  }else if(expressNum == 2) {
    $('#star ul li').eq(0).addClass('on');
    $('#star ul li').eq(1).addClass('on');
    $('.goods-evaluate-span').html('<strong>2分</strong>');
  }else if(expressNum == 3) {
    $('#star ul li').eq(0).addClass('on');
    $('#star ul li').eq(1).addClass('on');
    $('#star ul li').eq(2).addClass('on');
    $('.goods-evaluate-span').html('<strong>3分</strong>');
  }else if(expressNum == 4) {
    $('#star ul li').eq(0).addClass('on');
    $('#star ul li').eq(1).addClass('on');
    $('#star ul li').eq(2).addClass('on');
    $('#star ul li').eq(3).addClass('on');
    $('.goods-evaluate-span').html('<strong>4分</strong>');
  }else if(expressNum == 5) {
    $('#star ul li').eq(0).addClass('on');
    $('#star ul li').eq(1).addClass('on');
    $('#star ul li').eq(2).addClass('on');
    $('#star ul li').eq(3).addClass('on');
    $('#star ul li').eq(4).addClass('on');
    $('.goods-evaluate-span').html('<strong>5分</strong>');
  }

  //送货速度
  var deliveryNum = 5;
  if(deliveryNum == 1) {
    $('#logistics ul li').eq(0).addClass('on');
    $('.logistics-evaluate-span').html('<strong>1分</strong>');
  }else if(deliveryNum == 2) {
    $('#logistics ul li').eq(0).addClass('on');
    $('#logistics ul li').eq(1).addClass('on');
    $('.logistics-evaluate-span').html('<strong>2分</strong>');
  }else if(deliveryNum == 3) {
    $('#logistics ul li').eq(0).addClass('on');
    $('#logistics ul li').eq(1).addClass('on');
    $('#logistics ul li').eq(2).addClass('on');
    $('.logistics-evaluate-span').html('<strong>3分</strong>');
  }else if(deliveryNum == 4) {
    $('#logistics ul li').eq(0).addClass('on');
    $('#logistics ul li').eq(1).addClass('on');
    $('#logistics ul li').eq(2).addClass('on');
    $('#logistics ul li').eq(3).addClass('on');
    $('.logistics-evaluate-span').html('<strong>4分</strong>');
  }else if(deliveryNum == 5) {
    $('#logistics ul li').eq(0).addClass('on');
    $('#logistics ul li').eq(1).addClass('on');
    $('#logistics ul li').eq(2).addClass('on');
    $('#logistics ul li').eq(3).addClass('on');
    $('#logistics ul li').eq(4).addClass('on');
    $('.logistics-evaluate-span').html('<strong>5分</strong>');
  }

  //配送员
  var clerkNum = 4;
  if(clerkNum == 1) {
    $('#DeliveryService ul li').eq(0).addClass('on');
    $('.Delivery-evaluate-span').html('<strong>1分</strong>');
  }else if(clerkNum == 2) {
    $('#DeliveryService ul li').eq(0).addClass('on');
    $('#DeliveryService ul li').eq(1).addClass('on');
    $('.Delivery-evaluate-span').html('<strong>2分</strong>');
  }else if(clerkNum == 3) {
    $('#DeliveryService ul li').eq(0).addClass('on');
    $('#DeliveryService ul li').eq(1).addClass('on');
    $('#DeliveryService ul li').eq(2).addClass('on');
    $('.Delivery-evaluate-span').html('<strong>3分</strong>');
  }else if(clerkNum == 4) {
    $('#DeliveryService ul li').eq(0).addClass('on');
    $('#DeliveryService ul li').eq(1).addClass('on');
    $('#DeliveryService ul li').eq(2).addClass('on');
    $('#DeliveryService ul li').eq(3).addClass('on');
    $('.Delivery-evaluate-span').html('<strong>4分</strong>');
  }else if(clerkNum == 5) {
    $('#DeliveryService ul li').eq(0).addClass('on');
    $('#DeliveryService ul li').eq(1).addClass('on');
    $('#DeliveryService ul li').eq(2).addClass('on');
    $('#DeliveryService ul li').eq(3).addClass('on');
    $('#DeliveryService ul li').eq(4).addClass('on');
    $('.Delivery-evaluate-span').html('<strong>5分</strong>');
  }

  //商品评分
  var commentsNum = 4;
  if(commentsNum == 1) {
    $('.comments ul li').eq(0).addClass('on');
    $('.comments .Delivery-evaluate-span').html('<strong>1分</strong>');
  }else if(commentsNum == 2) {
    $('.comments ul li').eq(0).addClass('on');
    $('.comments ul li').eq(1).addClass('on');
    $('.comments .Delivery-evaluate-span').html('<strong>2分</strong>');
  }else if(commentsNum == 3) {
    $('.comments ul li').eq(0).addClass('on');
    $('.comments ul li').eq(1).addClass('on');
    $('.comments ul li').eq(2).addClass('on');
    $('.comments .Delivery-evaluate-span').html('<strong>3分</strong>');
  }else if(commentsNum == 4) {
    $('.comments ul li').eq(0).addClass('on');
    $('.comments ul li').eq(1).addClass('on');
    $('.comments ul li').eq(2).addClass('on');
    $('.comments ul li').eq(3).addClass('on');
    $('.comments .Delivery-evaluate-span').html('<strong>4分</strong>');
  }else if(commentsNum == 5) {
    $('.comments ul li').eq(0).addClass('on');
    $('.comments ul li').eq(1).addClass('on');
    $('.comments ul li').eq(2).addClass('on');
    $('.comments ul li').eq(3).addClass('on');
    $('.comments ul li').eq(4).addClass('on');
    $('.comments .Delivery-evaluate-span').html('<strong>5分</strong>');
  }

  //
  var commentIndex;
  var commentArr = [];
  $(document).on('click','.goods-comment-item-content-img-item-size', function() {
    $('.goods-comment-item-content-img-item-mask').css('transform', 'scale(1)');
    $('.goods-comment-item-content-img-item-mask').find('.comment-img').attr('src', $(this).attr('src'));
    $('.goods-comment-item-content-img-item-mask').find('.comment-img').css({'margin-left': -$('.goods-comment-item-content-img-item-mask .comment-img').width()/2,'margin-top': -$('.goods-comment-item-content-img-item-mask .comment-img').height()/2});
    $(".goods-comment-item-content-img-item-size").each(function(index,item){
      commentArr.push($(this).attr('src'));
    });
    commentIndex = $('.goods-comment-item-content-img-item-size').index(this);
  });

  $('.goods-comment-item-content-img-item-mask-close').on('click', function () {
    $('.goods-comment-item-content-img-item-mask').css('transform', 'scale(0)');
  });

  //下一张
  $('.comment-btn-next').on('click', function() {
    if(commentIndex == 4) {
      return false;
    }
    commentIndex++;
    $('.comment-img').attr('src', commentArr[commentIndex]);
    $('.goods-comment-item-content-img-item-mask').find('.comment-img').css({'margin-left': -$('.goods-comment-item-content-img-item-mask .comment-img').width()/2,'margin-top': -$('.goods-comment-item-content-img-item-mask .comment-img').height()/2});
  });

  //上一张
  $('.comment-btn-prev').on('click', function() {
    if(commentIndex == 0) {
      return false;
    }
    commentIndex--;
    $('.comment-img').attr('src', commentArr[commentIndex]);
    $('.goods-comment-item-content-img-item-mask').find('.comment-img').css({'margin-left': -$('.goods-comment-item-content-img-item-mask .comment-img').width()/2,'margin-top': -$('.goods-comment-item-content-img-item-mask .comment-img').height()/2});
  });

  

});