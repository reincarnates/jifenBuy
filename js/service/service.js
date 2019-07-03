    /**
     * ajax封装
     * url 发送请求的地址
     * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
     * async 默认值: true。默认设置下，所有请求均为异步请求。如果需要发送同步请求，请将此选项设置为 false。
     *       注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
     * type 请求方式("POST" 或 "GET")， 默认为 "GET"
     * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
     * successfn 成功回调函数
     * errorfn 失败回调函数
     */
    var service = {};
   // var headers = {
        // "Content-Type": "application/json",
        // "Access-Token": window.localStorage.getItem('token') ? window.localStorage.getItem('token') : "",
        // "access_token": "a07bf79ee653e2a9264aa7ccda516300",
        // "appid": "kj234nfygfl"
    //}
    service.get = function(url, data,successfn){
    	$.ajax({
         	type: "get",
            data: data,
            url: url,
            //headers: headers,
            dataType: "json",
            success: function(d){
                successfn(d);
            }
        });
    }
    service.post = function(url, data,successfn){
    	$.ajax({
         	type: "post",
            data: data,
            url: url,
            //headers: headers,
            dataType: "json",
            success: function(d){
                successfn(d);
            }
        });
    }