/*弹出层 wk_layer(a, b, c, d, e, layer_url, layer_word, callback)
  参数a是宽度，
  b是高度，
  c是弹窗定位高度，默认是0，自定义值（0-100）；
  d是按钮配置，默认是0，关闭按钮是1,单按钮是2，双按钮是3；
  e是内容；
  layer_url是图片地址；
  layer_word是成功失败的文字；
  callback是回调函数，默认值为0或者不写，只有点击确定按钮后才执行；
*/
function wk_layer(a, b, c, d, e, layer_url, layer_word, callback) {
  var layer_Width, layer_Height, layer_Top, layer_close, layer_btn, layer_cont;
  //宽度
  if (a == null || a === undefined || a === 0) {
    layer_Width = 500;
    //console.log('默认宽度500px');
  } else {
    layer_Width = a;
    //console.log('自定义宽度'+a);
  }
  //高度
  if (b == null || b === undefined || b === 0) {
    layer_Height = 300;
    //console.log('默认高度300px');
  } else {
    layer_Height = b;
    //console.log('自定义高度'+b);
  }
  //弹窗定位高度
  if (c === undefined || c === 0) {
    layer_Top = '30';

  } else {
    layer_Top = c;

  }
  //弹窗按钮类型
  if (d == null || d === undefined || d === 0) {
    layer_close = '';
    layer_btn = '';

  }
  else if (d === 1) {
    layer_close = '<div class="wk-close">X</div>';
    layer_btn = '';

  }
  else if (d === 2) {
    layer_close = '';
    layer_btn = '<div class="wk-btn wk-submit">关闭</div>';

  }
  else if (d === 3) {
    layer_close = '';
    layer_btn = '<div class="wk-btn " ><div class="wk-symmetry wk-cancel wk-font-gray">取消</div><div class="wk-symmetry wk-submit">确定</div></div>';

  }
  //内容
  if (e == null || e === undefined || e === 0) {
    layer_cont = '';

  } else if (e !== '') {
    layer_cont = e;

  }

  var marLeft = layer_Width / 2;
  var layerTop = `
    <div class=\wk-pop\ style=\width:${layer_Width}px;top:${layer_Top}%;margin-left:-${marLeft}px;\>
    <div class='wk-title'>${layer_cont}</div>
    <div class='wk-content'>
      <img src='${layer_url}' />
      <span>${layer_word}</span>
    </div>${layer_close}</div>
    <div class=\wk-mask\></div>
  `;
  $('body').append(layerTop);
  $('.wk-pop').append(layer_btn);

  $('.wk-mask').click(function () {
    $('.wk-pop').remove();
    $(this).remove();


  });
  $('.wk-close').click(function () {
    $('.wk-pop').remove();
    $('.wk-mask').remove();

  });
  $('.wk-btn').click(function () {
    $('.wk-pop').remove();
    $('.wk-mask').remove();
  });

  $('.wk-submit').click(function () {
    if (callback == null || callback === undefined || callback === 0) {
      callback = null;
    }
    else if (callback != null) {
      callback();
    }

  });

}

//弹出信息提示   ll_msg(content,callback);参数content是内容；callback是回调函数，默认值0或不写；
function wk_msg(content, callback) {
  var msgW = 400;
  var marLeft = msgW / 2;
  var msgTop = `<div class=\ wk-msg\  style=\width:${msgW}px;margin-left:-${marLeft}px;\>${content}</div>`;

  $('body').append(msgTop);
  setTimeout(function () {
    $('.wk-msg').remove();
    if (callback == null || callback === undefined || callback === 0) {
      callback = null;
    }
    else if (callback != null) {
      callback();
    }
  }, 2000);


}
