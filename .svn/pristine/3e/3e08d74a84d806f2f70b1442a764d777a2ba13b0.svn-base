$(function () {

  //评价上传弹出上传头像对话框
  $('.goods-comment-item-right-upload-btn').click(function () {
    return $('#evaluateUpload').click(); //注意这句，主要是需要return点击事件返回值
  });

  //上传头像
  $('#evaluateUpload').on('change', function (event) {
    const files = event.target.files[0];
    var type = files.type.split("/")[1];
    console.log(files, type);
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
  $(document).on('click','.goods-comment-item-right-comment-btn', function () {
    var textareaVal = $(this).parent('.goods-comment-item-right-comment-wrapper').siblings('.goods-comment-item-right-input').find('textarea').val();
    if(textareaVal == '') {
      $('.goods-comment-item-right-not-comment').show();
      return false;
    }else{
      $('.goods-comment-item-right-not-comment').hide();
    }
  });

  //textarea字数变化
  $(document).on('keyup','.wordNumber', function() {
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
  var oComment = document.querySelector('.comments');
  var CommentLi = oComment.getElementsByTagName("li");
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
      //关闭浮动层
      CommentP.style.display = "none"
    };

    //点击后进行评分处理
    CommentLi[i - 1].onclick = function () {
      iStar = this.index;
      CommentP.style.display = "none";
      CommentSpan.innerHTML = "<strong>" + (this.index) + " 分</strong>";
      console.log(this.index);
    }
  }


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

  //商品评分处理
  function fnPoint4(iArg) {
    //分数赋值
    iScore = iArg || iStar;
    for (i = 0; i < CommentLi.length; i++) CommentLi[i].className = i < iScore ? "on" : "";
  }

})