$(function () {
    var acount = 1;
    var shopNum = 200;//购买数量

    //选择商品颜色
    $('.select-items').first().addClass("actives");
    $('.select-items').first().find('.select-item-img').addClass("db");
    $('.select-items').click(function () {
        $(this).addClass("actives").siblings().removeClass("actives");
        $(this).siblings().find(".select-item-img").removeClass('db');
        $(this).find(".select-item-img").addClass('db');
    });

    //选择商品净含量
    $('.net-content-item').first().addClass("actives");
    $('.net-content-item').first().find('.select-item-img2').addClass("db");
    $('.net-content-item').click(function () {
        $(this).addClass("actives").siblings().removeClass("actives");
        $(this).siblings().find(".select-item-img2").removeClass('db');
        $(this).find(".select-item-img2").addClass('db');
    });

    //商品默认数量
    $('.shop-input').val(acount);

    //增加商品数量
    $('.shop-plus').click(function () {
        if($('.shop-input').val() < shopNum) {
            $('.shop-input').val(++acount);
        }
    });

    //减少商品数量
    $('.shop-reduce').click(function () {
        if ($('.shop-input').val() > 1) {
            $('.shop-input').val(--acount);
        }
    });

    //相似推荐
    var currIndex = 0;
    // $("#Barmore-wrapper .Barmore-content").clone().appendTo("#Barmore-wrapper");
    var a = $('#Barmore-wrapper .Barmore-content').outerHeight();
    $('.Barmore-head-right').click(function () {
        if(currIndex == $("#Barmore-wrapper .Barmore-content").length -2){
            currIndex = 0;
            $("#Barmore-wrapper").animate({marginTop:0},500);
        }else{
            currIndex+=2;
        }
        
        $("#Barmore-wrapper").stop().animate({marginTop:a * currIndex * -1},500);
    });

    //商品介绍选项卡
    $(".tab li").click(function() {
        $(".tab li").eq($(this).index()).addClass("curs").siblings().removeClass('curs');
        $(".tab-evaluate").eq($(".tab li").index(this)).addClass("tab-on").siblings().removeClass('tab-on'); 
    });

    //评价选项卡
    $(".tab2 li").click(function() {
        $(".tab2 li").eq($(this).index()).addClass("cur2").siblings().removeClass('cur2');
        $(".ob2").eq($(".tab2 li").index(this)).addClass("on2").siblings().removeClass('on2'); 
    });

    //收藏
    var collect = 1;
    $('.goods-collect').click(function() {
        if(collect == 1) {
            $(this).addClass('goods-collect2');
            $(this).find('span').text('取消收藏');
            $(this).find('span').css('margin-left', '30px');
            collect = 2;
        }else{
            $(this).removeClass('goods-collect2');
            $(this).find('span').text('收藏');
            $(this).find('span').css('margin-left', '10px');
            collect = 1;
        }
    });

    //展开评论
    var commentingNum = 0;
    $('.commenting').click(function() {
        if(commentingNum == 0) {
            $(this).addClass('commenting2');
            $(this).text('收起评论');
            $(this).siblings('.page-content-test-right').css('height',$(this).siblings('.page-content-test-right').find('span').height());
            commentingNum = 1;
        }else{
            $(this).removeClass('commenting2');
            $(this).text('展开评论');
            $(this).siblings('.page-content-test-right').css('height','25px');
            commentingNum = 0;
        }
    })

    //大家觉得
    $('.highest-right-item').click(function() {
        $(".highest-right-item").eq($(this).index()).addClass("highest-right-item-active").siblings().removeClass('highest-right-item-active');
    });

    //购买数量限制
    $('#shopNumLimit').on('keyup', function() {
        if($(this).val() > shopNum) {
            $(this).val(shopNum);
            acount = shopNum;
        }else{
            $(this).val($(this).val());
            acount = $(this).val();
        }
    });

    // 图片上下滚动
    var count = $("#imageMenu li").length; /* 显示 6 个 li标签内容 */
    var interval = $("#imageMenu li:first").width() + 16;
    console.log(interval);
    var curIndex = 0;
    
    // if (curIndex < 4) $('.smallImgDown').addClass('disabled');
    if (count == 1) {
        $('.smallImgDown').addClass('disabled')
    }
    $('.scrollbutton').click(function () {
        if (count == 1) {
            $('.smallImgDown').addClass('disabled')
        }
        if ($(this).hasClass('disabled')) return false;

        if ($(this).hasClass('smallImgUp'))--curIndex;

        else ++curIndex;

        $('.scrollbutton').removeClass('disabled');

        if (curIndex == 0) $('.smallImgUp').addClass('disabled');

        if (curIndex == count - 4) $('.smallImgDown').addClass('disabled');

        $("#imageMenu ul").stop(false, true).animate({ "marginLeft": -curIndex * interval + "px" }, 300);

    });

    // 解决 ie6 select框 问题

    

    //放大镜视窗

    // $("#bigView").decorateIframe();

    //点击到中图

    var midChangeHandler = null;



    $("#imageMenu li img").bind("click", function () {

        if ($(this).attr("id") != "onlickImg") {

            midChange($(this).attr("src").replace("small", "mid"));

            $("#imageMenu li").removeAttr("id");

            $(this).parent().attr("id", "onlickImg");

        }

    });

    function midChange(src) {

        $("#midimg").attr("src", src).load(function () {

            changeViewImg();

        });

    }

    //大视窗看图

    function mouseover(e) {

        if ($("#winSelector").css("display") == "none") {

            $("#winSelector,#bigView").show();

        }

        $("#winSelector").css(fixedPosition(e));

        e.stopPropagation();

    }

    function mouseOut(e) {

        if ($("#winSelector").css("display") != "none") {

            $("#winSelector,#bigView").hide();

        }

        e.stopPropagation();

    }

    $("#midimg").mouseover(mouseover); //中图事件

    $("#midimg,#winSelector").mousemove(mouseover).mouseout(mouseOut); //选择器事件



    var $divWidth = $("#winSelector").width(); //选择器宽度

    var $divHeight = $("#winSelector").height(); //选择器高度

    var $imgWidth = $("#midimg").width(); //中图宽度

    var $imgHeight = $("#midimg").height(); //中图高度

    var $viewImgWidth = $viewImgHeight = $height = null; //IE加载后才能得到 大图宽度 大图高度 大图视窗高度



    function changeViewImg() {

        $("#bigView img").attr("src", $("#midimg").attr("src").replace("mid", "big"));

    }

    changeViewImg();

    $("#bigView").scrollLeft(0).scrollTop(0);

    function fixedPosition(e) {

        if (e == null) {

            return;

        }

        var $imgLeft = $("#midimg").offset().left; //中图左边距

        var $imgTop = $("#midimg").offset().top; //中图上边距

        X = e.pageX - $imgLeft - $divWidth / 2; //selector顶点坐标 X

        Y = e.pageY - $imgTop - $divHeight / 2; //selector顶点坐标 Y

        X = X < 0 ? 0 : X;

        Y = Y < 0 ? 0 : Y;

        X = X + $divWidth > $imgWidth ? $imgWidth - $divWidth : X;

        Y = Y + $divHeight > $imgHeight ? $imgHeight - $divHeight : Y;



        if ($viewImgWidth == null) {

            $viewImgWidth = $("#bigView img").outerWidth();

            $viewImgHeight = $("#bigView img").height();

            if ($viewImgWidth < 200 || $viewImgHeight < 200) {

                $viewImgWidth = $viewImgHeight = 800;

            }

            $height = $divHeight * $viewImgHeight / $imgHeight;

            $("#bigView").width($divWidth * $viewImgWidth / $imgWidth);

            $("#bigView").height($height);

        }

        var scrollX = X * $viewImgWidth / $imgWidth;

        var scrollY = Y * $viewImgHeight / $imgHeight;

        $("#bigView img").css({ "left": scrollX * -1, "top": scrollY * -1 });

        $("#bigView").css({ "top": 245, "left": $(".preview").offset().left + $(".preview").width() + 15 });



        return { left: X, top: Y };

    }
})