/**
 * Created by Administrator on 2017/5/24.
 */

$(function () {

    $('.sum_price').each(function(index, item) {
        var num = $(item).text().indexOf('.');
        if(num == -1) {
            $(item).text($(item).text()+'.00')
        }
    });

    //全局的checkbox选中和未选中的样式
    var $allCheckbox = $('input[type="checkbox"]'),     //全局的全部checkbox
        $wholeChexbox = $('.whole_check'),
        $cartBox = $('.cartBox'),                       //每个商铺盒子
        $shopCheckbox = $('.shopChoice'),               //每个商铺的checkbox
        $sonCheckBox = $('.son_check');                 //每个商铺下的商品的checkbox
    $allCheckbox.click(function () {
        if ($(this).is(':checked')) {
            $(this).next('label').addClass('mark');
        } else {
            $(this).next('label').removeClass('mark')
        }
    });

    //===============================================全局全选与单个商品的关系================================
    $wholeChexbox.click(function () {
        var $checkboxs = $cartBox.find('input[type="checkbox"]');
        if ($(this).is(':checked')) {
            $checkboxs.prop("checked", true);
            $checkboxs.next('label').addClass('mark');
            $wholeChexbox.prop("checked", true);
            console.log($sonCheckBox.attr('value'));
        } else {
            $checkboxs.prop("checked", false);
            $checkboxs.next('label').removeClass('mark');
            $wholeChexbox.prop("checked", false);
        }
        totalMoney();
    });

    // $('#settlement').on('click', function() {
    //   $wholeChexbox.trigger('click');
    // });

    var sonCheckBoxId = [];
    $sonCheckBox.each(function () {
        $(this).click(function () {
            if ($(this).is(':checked')) {
                //判断：所有单个商品是否勾选
                var len = $sonCheckBox.length;
                var num = 0;
                $sonCheckBox.each(function () {
                    if ($(this).is(':checked')) {
                        num++;
                    }
                });
                if (num == len) {
                    $wholeChexbox.prop("checked", true);
                    $wholeChexbox.next('label').addClass('mark');
                }
                $(this).parents('.order_lists').addClass('checkBg');
                sonCheckBoxId.push($(this).attr('value'))
                console.log(sonCheckBoxId);
            } else {
                //单个商品取消勾选，全局全选取消勾选
                $wholeChexbox.prop("checked", false);
                $wholeChexbox.next('label').removeClass('mark');
                $(this).parents('.order_lists').removeClass('checkBg');
            }
        })
    })

    //=======================================每个店铺checkbox与全选checkbox的关系/每个店铺与其下商品样式的变化===================================================

    //店铺有一个未选中，全局全选按钮取消对勾，若店铺全选中，则全局全选按钮打对勾。
    $shopCheckbox.each(function () {
        $(this).click(function () {
            if ($(this).is(':checked')) {
                //判断：店铺全选中，则全局全选按钮打对勾。
                var len = $shopCheckbox.length;
                var num = 0;
                $shopCheckbox.each(function () {
                    if ($(this).is(':checked')) {
                        num++;
                    }
                });
                if (num == len) {
                    $wholeChexbox.prop("checked", true);
                    $wholeChexbox.next('label').addClass('mark');
                }

                //店铺下的checkbox选中状态
                $(this).parents('.cartBox').find('.son_check').prop("checked", true);
                $(this).parents('.cartBox').find('.son_check').next('label').addClass('mark');
            } else {
                //否则，全局全选按钮取消对勾
                $wholeChexbox.prop("checked", false);
                $wholeChexbox.next('label').removeClass('mark');

                //店铺下的checkbox选中状态
                $(this).parents('.cartBox').find('.son_check').prop("checked", false);
                $(this).parents('.cartBox').find('.son_check').next('label').removeClass('mark');
            }
            totalMoney();
        });
    });


    //========================================每个店铺checkbox与其下商品的checkbox的关系======================================================

    //店铺$sonChecks有一个未选中，店铺全选按钮取消选中，若全都选中，则全选打对勾
    $cartBox.each(function () {
        var $this = $(this);
        var $sonChecks = $this.find('.son_check');
        $sonChecks.each(function () {
            $(this).click(function () {
                if ($(this).is(':checked')) {
                    //判断：如果所有的$sonChecks都选中则店铺全选打对勾！
                    var len = $sonChecks.length;
                    var num = 0;
                    $sonChecks.each(function () {
                        if ($(this).is(':checked')) {
                            num++;
                        }
                    });
                    if (num == len) {
                        $(this).parents('.cartBox').find('.shopChoice').prop("checked", true);
                        $(this).parents('.cartBox').find('.shopChoice').next('label').addClass('mark');
                    }

                } else {
                    //否则，店铺全选取消
                    $(this).parents('.cartBox').find('.shopChoice').prop("checked", false);
                    $(this).parents('.cartBox').find('.shopChoice').next('label').removeClass('mark');
                }
                totalMoney();
            });
        });
    });


    //=================================================商品数量==============================================
    var $plus = $('.plus'),
        $reduce = $('.reduce'),
        $all_sum = $('.sum');
    var numMax = 8;
    $plus.click(function () {
        var $inputVal = $(this).prev('input'),
            $count = Number($inputVal.val()) + 1,
            $obj = $(this).parents('.amount_box').find('.reduce'),
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.order_lists').find('.newPrice').html(),  //单价
            $priceTotal = $count * Number($price).toFixed(2);
        if($inputVal.val() < numMax) {
            $inputVal.val($count);
            $priceTotalObj.html($priceTotal.toFixed(2));
        }
        if ($inputVal.val() > 1 && $obj.hasClass('reSty')) {
            $obj.removeClass('reSty');
        }
        var a = $(this).parents('.list_amount').siblings('.list_chk').find('.son_check');
        //   console.log(a.attr('value'));
        totalMoney();
    });

    $reduce.click(function () {
        var $inputVal = $(this).next('input'),
            $count = Number($inputVal.val()) - 1,
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.order_lists').find('.newPrice').html(),  //单价
            $priceTotal = $count * Number($price);
        if ($inputVal.val() > 1) {
            $inputVal.val($count);
            $priceTotalObj.html($priceTotal.toFixed(2));
        }
        if ($inputVal.val() == 1 && !$(this).hasClass('reSty')) {
            $(this).addClass('reSty');
        }
        totalMoney();
    });

    $all_sum.keyup(function () {
        var $count = 0,
            $priceTotalObj = $(this).parents('.order_lists').find('.sum_price'),
            $price = $(this).parents('.order_lists').find('.newPrice').html(),  //单价
            $priceTotal = 0;
        if ($(this).val() == '') {
            $(this).val('1');
        }
        if($(this).val() > numMax) {
            alert('最大');
            $(this).val(numMax);
        }
        $(this).val($(this).val().replace(/\D|^0/g, ''));
        $count = $(this).val();
        $priceTotal = $count * Number($price);
        $(this).attr('value', $count);
        $priceTotalObj.html($priceTotal.toFixed(2));
        totalMoney();
    })

    //======================================移除商品========================================

    var $order_lists = null;
    var $order_content = '';
    $('.delBtn').click(function () {
        $order_lists = $(this).parents('.order_lists');
        $order_content = $order_lists.parents('.order_content');
        $('.del-goods-mask').show();
        $(".del-goods-modal").animate({ top: '50%' });
    });

    //关闭模态框
    $('.del-goods-modal-title-right').on('click', function () {
        $('.del-goods-mask').hide();
        $(".del-goods-modal").animate({ top: '-20%' });
    });
    //确定按钮，移除商品
    $(document).on('click', '#sure', function () {
        $order_lists.remove();
        if ($order_content.html().trim() == null || $order_content.html().trim().length == 0) {
            $order_content.parents('.cartBox').remove();
        }
        $('.del-goods-modal-title-right').trigger('click');
        $sonCheckBox = $('.son_check');
        totalMoney();
    })


    $('.calBtn button').on('click', function () {
        $sonCheckBox.each(function () {
            if ($(this).prop('checked')) {
                console.log($(this).attr('value'));
            }
        });
    })

    //======================================总计==========================================

    function totalMoney() {
        var total_money = 0;
        var total_count = 0;
        var calBtn = $('.calBtn button');
        $sonCheckBox.each(function () {
            if ($(this).is(':checked')) {
                var goods = Number($(this).parents('.order_lists').find('.sum_price').html());
                var num = Number($(this).parents('.order_lists').find('.sum').val());
                total_money += goods;
                total_count += num;
            }
        });
        $('.total_text').html('￥' + total_money.toFixed(2));
        $('.piece_num').html(total_count);

        // console.log(total_money,total_count);

        if (total_money != 0 && total_count != 0) {
            if (!calBtn.hasClass('btn_sty')) {
                calBtn.addClass('btn_sty');
            }
        } else {
            if (calBtn.hasClass('btn_sty')) {
                calBtn.removeClass('btn_sty');
            }
        }
    }


});