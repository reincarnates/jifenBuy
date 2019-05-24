$(function() {

  $('.payment_method_item').click(function() {
    $(".payment_method_item").eq($(".payment_method_item").index(this)).addClass("payment_method_item_checked").siblings().removeClass('payment_method_item_checked');
    $(".payment_method_item_ob").eq($(".payment_method_item").index(this)).addClass("payment_method_item_on").siblings().removeClass('payment_method_item_on');
  });


  var checkNum = 0;
  $('.check_order').on('click', function() {
    if(checkNum == 0) {
      $(this).addClass('check_order2');
      $(this).text('收起详情');
      $('.payment_cashier_order_detail').show();
      checkNum = 1;
    }else{
      $(this).removeClass('check_order2');
      $(this).text('订单详情');
      $('.payment_cashier_order_detail').hide();
      checkNum = 0;
    }
  });

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