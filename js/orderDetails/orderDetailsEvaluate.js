$(function () {

  //快递包裹
  var expressNum = 1;
  if (expressNum == 1) {
    $('#star ul li').slice(0, 1).addClass('on');
    $('.goods-evaluate-span').html('<strong>1分</strong>');
    $('#star').find('li').css('pointer-events','none');
  } else if (expressNum == 2) {
    $('#star ul li').slice(0, 2).addClass('on');
    $('.goods-evaluate-span').html('<strong>2分</strong>');
    $('#star').find('li').css('pointer-events','none');
  } else if (expressNum == 3) {
    $('#star ul li').slice(0, 3).addClass('on');
    $('.goods-evaluate-span').html('<strong>3分</strong>');
    $('#star').find('li').css('pointer-events','none');
  } else if (expressNum == 4) {
    $('#star ul li').slice(0, 4).addClass('on');
    $('.goods-evaluate-span').html('<strong>4分</strong>');
    $('#star').find('li').css('pointer-events','none');
  } else if (expressNum == 5) {
    $('#star ul li').slice(0).addClass('on');
    $('.goods-evaluate-span').html('<strong>5分</strong>');
    $('#star').find('li').css('pointer-events','none');
  }

  //送货速度
  var deliveryNum = 0;
  if (deliveryNum == 1) {
    $('#logistics ul li').eq(0).addClass('on');
    $('.logistics-evaluate-span').html('<strong>1分</strong>');
  } else if (deliveryNum == 2) {
    $('#logistics ul li').eq(0).addClass('on');
    $('#logistics ul li').eq(1).addClass('on');
    $('.logistics-evaluate-span').html('<strong>2分</strong>');
  } else if (deliveryNum == 3) {
    $('#logistics ul li').eq(0).addClass('on');
    $('#logistics ul li').eq(1).addClass('on');
    $('#logistics ul li').eq(2).addClass('on');
    $('.logistics-evaluate-span').html('<strong>3分</strong>');
  } else if (deliveryNum == 4) {
    $('#logistics ul li').eq(0).addClass('on');
    $('#logistics ul li').eq(1).addClass('on');
    $('#logistics ul li').eq(2).addClass('on');
    $('#logistics ul li').eq(3).addClass('on');
    $('.logistics-evaluate-span').html('<strong>4分</strong>');
  } else if (deliveryNum == 5) {
    $('#logistics ul li').eq(0).addClass('on');
    $('#logistics ul li').eq(1).addClass('on');
    $('#logistics ul li').eq(2).addClass('on');
    $('#logistics ul li').eq(3).addClass('on');
    $('#logistics ul li').eq(4).addClass('on');
    $('.logistics-evaluate-span').html('<strong>5分</strong>');
  }

  //配送员
  var clerkNum = 0;
  if (clerkNum == 1) {
    $('#DeliveryService ul li').eq(0).addClass('on');
    $('.Delivery-evaluate-span').html('<strong>1分</strong>');
  } else if (clerkNum == 2) {
    $('#DeliveryService ul li').eq(0).addClass('on');
    $('#DeliveryService ul li').eq(1).addClass('on');
    $('.Delivery-evaluate-span').html('<strong>2分</strong>');
  } else if (clerkNum == 3) {
    $('#DeliveryService ul li').eq(0).addClass('on');
    $('#DeliveryService ul li').eq(1).addClass('on');
    $('#DeliveryService ul li').eq(2).addClass('on');
    $('.Delivery-evaluate-span').html('<strong>3分</strong>');
  } else if (clerkNum == 4) {
    $('#DeliveryService ul li').eq(0).addClass('on');
    $('#DeliveryService ul li').eq(1).addClass('on');
    $('#DeliveryService ul li').eq(2).addClass('on');
    $('#DeliveryService ul li').eq(3).addClass('on');
    $('.Delivery-evaluate-span').html('<strong>4分</strong>');
  } else if (clerkNum == 5) {
    $('#DeliveryService ul li').eq(0).addClass('on');
    $('#DeliveryService ul li').eq(1).addClass('on');
    $('#DeliveryService ul li').eq(2).addClass('on');
    $('#DeliveryService ul li').eq(3).addClass('on');
    $('#DeliveryService ul li').eq(4).addClass('on');
    $('.Delivery-evaluate-span').html('<strong>5分</strong>');
  }

  //商品评分
  var commentsNum = 0;
  if (commentsNum == 1) {
    $('.comments ul li').eq(0).addClass('on');
    $('.comments .Delivery-evaluate-span').html('<strong>1分</strong>');
  } else if (commentsNum == 2) {
    $('.comments ul li').eq(0).addClass('on');
    $('.comments ul li').eq(1).addClass('on');
    $('.comments .Delivery-evaluate-span').html('<strong>2分</strong>');
  } else if (commentsNum == 3) {
    $('.comments ul li').eq(0).addClass('on');
    $('.comments ul li').eq(1).addClass('on');
    $('.comments ul li').eq(2).addClass('on');
    $('.comments .Delivery-evaluate-span').html('<strong>3分</strong>');
  } else if (commentsNum == 4) {
    $('.comments ul li').eq(0).addClass('on');
    $('.comments ul li').eq(1).addClass('on');
    $('.comments ul li').eq(2).addClass('on');
    $('.comments ul li').eq(3).addClass('on');
    $('.comments .Delivery-evaluate-span').html('<strong>4分</strong>');
  } else if (commentsNum == 5) {
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
  $(document).on('click', '.goods-comment-item-content-img-item-size', function () {
    $('.goods-comment-item-content-img-item-mask').show();
    $('.goods-comment-item-content-img-item-mask').find('.comment-img').attr('src', $(this).attr('src'));
    $('.goods-comment-item-content-img-item-mask').find('.comment-img').css({ 'margin-left': -$('.goods-comment-item-content-img-item-mask .comment-img').width() / 2, 'margin-top': -$('.goods-comment-item-content-img-item-mask .comment-img').height() / 2 });
    $(".goods-comment-item-content-img-item-size").each(function (index, item) {
      commentArr.push($(this).attr('src'));
    });
    commentIndex = $('.goods-comment-item-content-img-item-size').index(this);
  });

  $('.goods-comment-item-content-img-item-mask-close').on('click', function () {
    // $('.goods-comment-item-content-img-item-mask').css('transform', 'scale(0)');
    $('.goods-comment-item-content-img-item-mask').hide();
  });

  //下一张
  $('.comment-btn-next').on('click', function () {
    if (commentIndex == 4) {
      return false;
    }
    commentIndex++;
    $('.comment-img').attr('src', commentArr[commentIndex]);
    $('.goods-comment-item-content-img-item-mask').find('.comment-img').css({ 'margin-left': -$('.goods-comment-item-content-img-item-mask .comment-img').width() / 2, 'margin-top': -$('.goods-comment-item-content-img-item-mask .comment-img').height() / 2 });
  });

  //上一张
  $('.comment-btn-prev').on('click', function () {
    if (commentIndex == 0) {
      return false;
    }
    commentIndex--;
    $('.comment-img').attr('src', commentArr[commentIndex]);
    $('.goods-comment-item-content-img-item-mask').find('.comment-img').css({ 'margin-left': -$('.goods-comment-item-content-img-item-mask .comment-img').width() / 2, 'margin-top': -$('.goods-comment-item-content-img-item-mask .comment-img').height() / 2 });
  });

  //评价图片移入显示删除
  $(document).on('mouseover', '.goods-comment-item-content-img-item', function () {
    $(this).find('.goods-comment-img-mask').show();
  }).on('mouseout', '.goods-comment-item-content-img-item', function () {
    $(this).find('.goods-comment-img-mask').hide();
  });

  //删除评价图片
  $(document).on('click', '.goods-comment-img-mask', function () {

    alert();

  });










  //评价上传弹出上传头像对话框
  $('.goods-comment-item-right-upload-btn').click(function () {
    return $('#evaluateUpload').click(); //注意这句，主要是需要return点击事件返回值
  });

  //上传头像
  $('#evaluateUpload').on('change', function (event) {
    const files = event.target.files[0];
    var type = files.type.split("/")[1];
    var fq = $('#evaluateUpload');
    // console.log(fq[0].files.length);
    if (fq[0].files.length > 5) {
      $('.goods-comment-item-tips').show();
      return false;
    }
    if (type == 'jpg' || type == 'png' || type == 'jpeg' || type == 'bmp') {
      if (files.size < 1024 * 1024 * 5) {
        alert('成功');
      } else {
        alert('请上传小于5MB的头像！！！');
      }
    } else {
      alert('请上传jpg或png或jpeg格式的图片！');
    }
  });

  //发表评价
  $(document).on('click', '.goods-comment-item-right-comment-btn', function () {
    var textareaVal = $(this).parent('.goods-comment-item-right-comment-wrapper').siblings('.goods-comment-item-right-input').find('textarea').val();
    if (textareaVal == '') {
      $('.goods-comment-item-right-not-comment').show();
      return false;
    } else {
      $('.goods-comment-item-right-not-comment').hide();
    }

    if ($('.goods-comment-item').length == 1) {
      $('.comment-mask-warpper').show();
    } else {
      $('.comment-mask-warpper2').show();
    }

  });

  //关闭评分成功弹出框
  $('.comment-mask-head-img').on('click', function () {
    $('.comment-mask-warpper').hide();
  });

  //textarea字数变化
  $(document).on('keyup', '.wordNumber', function () {
    $(this).siblings('.goods-comment-word-number').find('.goods-comment-word-numbers').text($(this).val().length)
  });

  /**
   * 快递包装评分
   */
  var oStar = document.getElementById("star");
  var aLi = oStar.getElementsByTagName("li");
  var oUl = oStar.getElementsByTagName("ul")[0];
  var oSpan = document.querySelector('.goods-evaluate-span');
  var oP = oStar.getElementsByTagName("p")[0];
  var i = iScore = iStar = 0;
  var aMsg = [

    "很不满意|差得太离谱，与卖家描述的严重不符，非常不满",

    "不满意|部分有破损，与卖家描述的不符，不满意",

    "一般|质量一般，没有卖家描述的那么好",

    "满意|质量不错，与卖家描述的基本一致，还是挺满意的",

    "非常满意|质量非常好，与卖家描述的完全一致，非常满意"

  ]
  for (i = 1; i <= aLi.length; i++) {
    aLi[i - 1].index = i;
    //鼠标移过显示分数
    aLi[i - 1].onmouseover = function () {
      fnPoint(this.index);
      // //浮动层显示
      // oP.style.display = "block";
      // //计算浮动层位置
      // oP.style.left = oUl.offsetLeft + this.index * this.offsetWidth - 104 + "px";
      // //匹配浮动层文字内容
      // oP.innerHTML = "<em><b>" + this.index + "</b> 分 " + aMsg[this.index - 1].match(/(.+)\|/)[1] + "</em>" + aMsg[this.index - 1].match(/\|(.+)/)[1]
    };

    //鼠标离开后恢复上次评分
    aLi[i - 1].onmouseout = function () {
      fnPoint();
      //关闭浮动层
      oP.style.display = "none"
    };

    //点击后进行评分处理
    aLi[i - 1].onclick = function () {
      iStar = this.index;
      oP.style.display = "none";
      oSpan.innerHTML = "<strong>" + (this.index) + " 分</strong>";
    }
  }


  /**
   * 送货速度评分
   */
  var oLogistics = document.getElementById("logistics");
  var LogLi = oLogistics.getElementsByTagName("li");
  var LogSpan = document.querySelector('.logistics-evaluate-span');
  var LogP = oLogistics.querySelector(".logisticsP");
  for (i = 1; i <= LogLi.length; i++) {
    LogLi[i - 1].index = i;
    //鼠标移过显示分数
    LogLi[i - 1].onmouseover = function () {
      fnPoint2(this.index);
    };

    //鼠标离开后恢复上次评分
    LogLi[i - 1].onmouseout = function () {
      fnPoint2();
      //关闭浮动层
      LogP.style.display = "none"
    };

    //点击后进行评分处理
    LogLi[i - 1].onclick = function () {
      iStar = this.index;
      LogP.style.display = "none";
      LogSpan.innerHTML = "<strong>" + (this.index) + " 分</strong>";
    }
  }

  /**
   * 配送服务员评分
   */
  var oDeliveryistics = document.getElementById("DeliveryService");
  var DeliveryLi = oDeliveryistics.getElementsByTagName("li");
  var DeliverySpan = document.querySelector('.Delivery-evaluate-span');
  var DeliveryP = oDeliveryistics.querySelector(".DeliveryServiceP");
  for (i = 1; i <= DeliveryLi.length; i++) {
    DeliveryLi[i - 1].index = i;
    //鼠标移过显示分数
    DeliveryLi[i - 1].onmouseover = function () {
      fnPoint3(this.index);
    };

    //鼠标离开后恢复上次评分
    DeliveryLi[i - 1].onmouseout = function () {
      fnPoint3();
      //关闭浮动层
      DeliveryP.style.display = "none"
    };

    //点击后进行评分处理
    DeliveryLi[i - 1].onclick = function () {
      iStar = this.index;
      DeliveryP.style.display = "none";
      DeliverySpan.innerHTML = "<strong>" + (this.index) + " 分</strong>";
    }
  }


  /**
   * 商品评分
   */
  var arrs = [1, 2, 3];
  arrs.forEach((item, index) => {
    var dom = `
    <div class="goods-comment-item clearfix">
    <div class="goods-comment-item-left">
      <div class="goods-comment-item-left-img">
        <img src="../../images/static/naifen.png" alt="">
      </div>
      <div class="goods-comment-item-left-suggest">
        <a href="#">Aptamil 爱他美（德国） 白金版3段幼儿配方奶粉 900克 4罐装 12-36个月</a>
      </div>
      <div class="goods-comment-item-left-info">净含量：900克 系列：白金</div>
      <div class="goods-comment-item-left-info">适用阶段：三段</div>
    </div>
    <div class="goods-comment-item-right">
      <div class="goods-comment-item-right-top clearfix">
        <div class="goods-comment-item-right-word">
          <span>*</span>
          评分：
        </div>
        <div class="goods-comment-item-right-comment">
          <div class="goods-evaluate-right">
            <div class="comments" id="comments${index}">
              <ul>
                <li><a href="javascript:;">1</a></li>
                <li><a href="javascript:;">2</a></li>
                <li><a href="javascript:;">3</a></li>
                <li><a href="javascript:;">4</a></li>
                <li><a href="javascript:;">5</a></li>
              </ul>
              <span class="Delivery-evaluate-span"></span>
              <p class="DeliveryServiceP"></p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div class="goods-comment-item-right-input">
          <textarea style="resize: none" placeholder="填写高质量的评价与他人分享" maxlength="300"
            onchange="this.value=this.value.substring(0, 300)" onkeydown="this.value=this.value.substring(0, 300)"
            onkeyup="this.value=this.value.substring(0, 300)" class="wordNumber"></textarea>
          <span class="goods-comment-word-number">
            <span class="goods-comment-word-numbers">0</span>
            /300
          </span>
        </div>
        <div class="goods-comment-item-right-upload-wrapper clearfix">
          <div class="goods-comment-item-right-upload-btn">
            <img src="../../images/static/upload_btn.png" alt="">
          </div>
          <input type="file" name="evaluateUpload" id="evaluateUpload${index}"
            accept="image/png,image/gif,image/jpg,image/jpeg" multiple style="display:none">
          <div class="goods-comment-item-right-upload-img clearfix">
            <div class="goods-comment-item-right-upload-img-item">
              <img src="../../images/static/naifen.png" alt="">
            </div>
          </div>
          <span class="goods-comment-item-right-upload-number">0/5</span>
          <span class="goods-comment-item-right-upload-suggest">每张不超过5M，支持格式jpg，jpeg，bmp，png</span>
          <div class="goods-comment-item-tips">
            最多上传五张图片
          </div>
        </div>
        <div class="goods-comment-item-right-comment-wrapper">
          <div class="goods-comment-item-right-comment-btn">提交</div>
          <div class="goods-comment-item-right-not-comment">
            请填写评价
          </div>
        </div>
      </div>

      <div class="goods-comment-item-content">
            <span>质量很好，还会继续购买</span>
            <div class="goods-comment-item-content-img-wrapper clearfix">
              <div class="goods-comment-item-content-img-item">
                <img src="../../images/static/comment_img.png" class="goods-comment-item-content-img-item-size" alt="">
                <div class="goods-comment-img-mask">删除</div>
              </div>
              <div class="goods-comment-item-content-img-item">
                <img src="../../images/static/01.jpg" class="goods-comment-item-content-img-item-size" alt="">
                <div class="goods-comment-img-mask">删除</div>
              </div>
              <div class="goods-comment-item-content-img-item">
                <img src="../../images/static/microsoft.jpg" class="goods-comment-item-content-img-item-size" alt="">
                <div class="goods-comment-img-mask">删除</div>
              </div>
              <div class="goods-comment-item-content-img-item">
                <img src="../../images/static/Lipstick.png" class="goods-comment-item-content-img-item-size" alt="">
                <div class="goods-comment-img-mask">删除</div>
              </div>
              <div class="goods-comment-item-content-img-item">
                <img src="../../images/static/hot01.png" class="goods-comment-item-content-img-item-size" alt="">
                <div class="goods-comment-img-mask">删除</div>
              </div>
              <div class="goods-comment-item-content-img-item-mask">
                <img src="../../images/static/comment_close.png" class="goods-comment-item-content-img-item-mask-close" alt="">
                <img src="" class="comment-img" alt="">
                <div class="comment-btn comment-btn-prev"><</div>
                <div class="comment-btn comment-btn-next">></div>
              </div>
            </div>
            <div class="goods-comment-item-content-time">2019-05-24 16:28:06</div>
            <div class="goods-comment-item-content-btn">追评</div>
            <div class="chase-comment-content">
              <div class="chase-comment-name">
                追评：
              </div>
              <div class="chase-comment-word">
                真的非常好用！！！
              </div>
              <div class="clearfix">
                <div class="goods-comment-item-content-img-item">
                  <img src="../../images/static/comment_img.png" class="goods-comment-item-content-img-item-size" alt="">
                  <div class="goods-comment-img-mask">删除</div>
                </div>
                <div class="goods-comment-item-content-img-item">
                  <img src="../../images/static/comment_img.png" class="goods-comment-item-content-img-item-size" alt="">
                  <div class="goods-comment-img-mask">删除</div>
                </div>
                <div class="goods-comment-item-content-img-item">
                  <img src="../../images/static/comment_img.png" class="goods-comment-item-content-img-item-size" alt="">
                  <div class="goods-comment-img-mask">删除</div>
                </div>
              </div>
              <div class="goods-comment-item-content-time">2019-05-24 16:28:06</div>
            </div>
          </div>
        </div>

    </div>
  </div>
    `
    $('.goods-comment-wrapper').append(dom);


    var oComment = document.getElementById('comments' + index);
    // var kkkk = oComment.getElementsByTagName("ul")
    var CommentLi = document.getElementById('comments' + index).getElementsByTagName("li");
    var CommentSpan = oComment.querySelector('.Delivery-evaluate-span');
    var CommentP = oComment.querySelector(".DeliveryServiceP");
    for (i = 1; i <= CommentLi.length; i++) {
      CommentLi[i - 1].index = i;
      //鼠标移过显示分数
      CommentLi[i - 1].onmouseover = function () {
        fnPoint4(this.index);
      };

      //鼠标离开后恢复上次评分
      CommentLi[i - 1].onmouseout = function () {
        fnPoint4();
      };

      //点击后进行评分处理
      CommentLi[i - 1].onclick = function () {
        iStar = this.index;
        CommentSpan.innerHTML = "<strong>" + (this.index) + " 分</strong>";
      }
    }

    //商品评分处理
    function fnPoint4(iArg) {
      //分数赋值
      iScore = iArg || iStar;
      for (i = 0; i < CommentLi.length; i++) CommentLi[i].className = i < iScore ? "on" : "";
    }

  });



  //快递包装评分处理
  function fnPoint(iArg) {
    //分数赋值
    iScore = iArg || iStar;
    for (i = 0; i < aLi.length; i++) aLi[i].className = i < iScore ? "on" : "";
  }

  //送货速度评分处理
  function fnPoint2(iArg) {
    //分数赋值
    iScore = iArg || iStar;
    for (i = 0; i < LogLi.length; i++) LogLi[i].className = i < iScore ? "on" : "";
  }

  //配送服务员评分处理
  function fnPoint3(iArg) {
    //分数赋值
    iScore = iArg || iStar;
    for (i = 0; i < DeliveryLi.length; i++) DeliveryLi[i].className = i < iScore ? "on" : "";
  }

})