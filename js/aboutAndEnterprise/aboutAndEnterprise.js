$(function() {
    $('.aboutLi').on('click', function() {
        $(".aboutLi").eq($(".aboutLi").index(this)).addClass("liActive").siblings().removeClass('liActive');
		$(".ob").eq($(".aboutLi").index(this)).addClass("on").siblings().removeClass('on');
    });

    $('.banner_nav li').on('click', function() {
        $(".banner_nav li").eq($(".banner_nav li").index(this)).addClass("navActive").siblings().removeClass('navActive');
		$(".ob2").eq($(".banner_nav li").index(this)).addClass("on").siblings().removeClass('on');
    });

    var time = -1;
    var time2 = -1;
    var time3 = -1;
    function timer() {
        time++;
        if(time < 2) {
            $(".tabInstructions").eq(time).find('img').addClass("tabInstructions-img").parents('.tabInstructions').siblings('.tabInstructions').find('img').removeClass('tabInstructions-img');
            $(".shopping_preview2").eq(time).addClass("shopping_preview_on").siblings().removeClass('shopping_preview_on');
        }else{
            time = -1;
        }
    }

    function timer2() {
        time2++;
        if(time2 < 2) {
            $(".tabInstructions2").eq(time).find('img').addClass("tabInstructions-img").parents('.tabInstructions2').siblings('.tabInstructions2').find('img').removeClass('tabInstructions-img');
            $(".shopping_preview3").eq(time).addClass("shopping_preview_on").siblings().removeClass('shopping_preview_on');
        }else{
            time2 = -1;
        }
    }

    function timer3() {
        time3++;
        if(time3 < 2) {
            $(".tabInstructions3").eq(time).find('img').addClass("tabInstructions-img").parents('.tabInstructions3').siblings('.tabInstructions3').find('img').removeClass('tabInstructions-img');
            $(".shopping_preview4").eq(time).addClass("shopping_preview_on").siblings().removeClass('shopping_preview_on');
        }else{
            time3 = -1;
        }
    }

    setInterval(function() {
        timer();
        timer2();
        timer3();
    }, 1500);
})