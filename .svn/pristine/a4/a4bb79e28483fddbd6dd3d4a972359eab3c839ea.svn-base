$(function() {

  var paymentMethod = '';
  $('.payment_method_item').click(function() {
    $(".payment_method_item").eq($(".payment_method_item").index(this)).addClass("payment_method_item_checked").siblings().removeClass('payment_method_item_checked');
    $(".payment_method_item_ob").eq($(".payment_method_item").index(this)).addClass("payment_method_item_on").siblings().removeClass('payment_method_item_on');
    $(this).siblings('.payment_method_item_zfb').css('border-bottom', '1px dashed #ddd');
    if($(this).attr('data-wx') != undefined) {
      paymentMethod = $(this).attr('data-wx');
    }

    if($(this).hasClass('payment_method_item_wx')) {
      $('#hiddenVal').val('wx');
    }

    if($(this).hasClass('payment_method_item_zfb')) {
      $('#hiddenVal').val('zfb');
    }
  });

  $('.payment_method_item_zfb').on('click', function() {
    $(this).siblings('.payment_method_item').eq(0).css('border-bottom', '1px dashed #fff');
  });

  $('.payment_method_item_wx').on('click', function() {
    $(this).siblings('.payment_method_item_zfb').css('border-bottom', '1px dashed #fff');
    $(this).siblings('.payment_method_item').eq(0).css('border-bottom', '1px dashed #ddd');
  });


  var checkNum = 0;
  $('.check_order').on('click', function() {
    if(checkNum == 0) {
      $(this).addClass('check_order2');
      $(this).text('收起详情');
      $('.payment_cashier_order_detail').show();
      $('.payment_cashier_order_detail2').show();
      $('.payment_cashier_order_detail').addClass('payment_cashier_order_info_border');
      $('.payment_cashier_order_detail2').addClass('payment_cashier_order_info_border');
      checkNum = 1;
    }else{
      $(this).removeClass('check_order2');
      $(this).text('订单详情');
      $('.payment_cashier_order_detail').hide();
      $('.payment_cashier_order_detail2').hide();
      $('.payment_cashier_order_detail').removeClass('payment_cashier_order_info_border');
      $('.payment_cashier_order_detail2').removeClass('payment_cashier_order_info_border');
      checkNum = 0;
    }
  });

  //点击立即支付的时候判断是不是微信支付
  // $('.payment_method_item_btn').on('click', function() {
  //   alert();
  // });

})

function focusNextInput(thisInput) {   
    var inputs = document.querySelectorAll('.pay-input');
    var e = event || window.event || arguments.callee.caller.arguments[0];
    var dex;
    for(var i = 0;i<inputs.length;i++){   
      if(i==(inputs.length-1)){   
        inputs[i].blur(); break;   
      }else if(thisInput == inputs[i]){   
        dex = i + 1; 
        inputs[i+1].focus(); break;  
      }
    } 
    if(e.keyCode == 8) {
      $(".pay-input").val("");  
      pay_password = "";
      $(".pay-input").eq(0).focus();
    } 
}