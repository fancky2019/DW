$(function () {
    debugger;
    let url="http://localhost:9090/user/getuer";
    ///DW/gateway.html
    var path = document.location.pathname;
    function activeNav(prefix) {
        var path = document.location.pathname;
        if (prefix) {
            path = path.replace(prefix, '');
            console.log(path);
        }
        var urlArray = path.split("/");
        var app = urlArray[1];
        var resource = urlArray[2];
        if (app === '') {
            $('#index').addClass('active');
        } else if (app === 'xpack' && resource === 'cloud') {
            var item = urlArray[3];
            $("#" + app).addClass('active');
            $('#' + app + ' #' + resource).addClass('active');
            $('#' + app + ' #' + resource + ' #' + item + ' a').css('color', '#ffffff');
        } else if (app === 'settings') {
            $("#" + app).addClass('active');
        } else {
            $("#" + app).addClass('active');
            $('#' + app + ' #' + resource).addClass('active');
            $('#' + app + ' #' + resource.replace(/-/g, '_')).addClass('active');
        }
    }

    let submitWithToken = function () {
        /*
        success ： 当请求成功时调用的函数。这个函数会得到一个参数：从服务器返回的数据。当请求成功时调用函数，即status==200。
       complete ：当请求完成时调用的函数。这个函数会得到两个参数：XMLHttpRequest对象和一个描述请求成功的类型的字符串。当请求完成时调用函数，即status==404、403、302...。
         */
        let token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImV4cCI6MTU3NDQxMjU1MywidXNlck5hbWUiOiJmYW5ja3kiLCJ1c2VySUQiOiIxIn0.SOK_pVliLyIDrlSlIjay-CmjpqZ4vf3QgaA2Cu5h9wc";
        $.ajax({
            type: "get",//向后台请求的方式，有post，get两种方法
            url: "http://localhost:8080/gateway/springBootProject/jwt/authorise",//url填写的是请求的路径
            cache: false,//缓存是否打开
            data: {//请求的数据，
                // "userIds": userId
            },
            beforeSend:function(XMLHttpRequest)
            {
                XMLHttpRequest.setRequestHeader("token",token)
            },
            // dataType: 'json',//请求的数据类型 如果传的是对象用josn,如果是字符串不用此属性
            success: function (data) {//请求的返回成功的方法
                alert(data);
            },
            complete: function (XMLHttpRequest, textStatus) {
                // debugger;
                if (XMLHttpRequest.status === 302) {
                    let location = XMLHttpRequest.getResponseHeader("RedirectUrl");
                    if (location) {
                        window.location.href = location;
                        //  win.location.href效果与location.href相当。
                        // location.assign(location);
                    }
                }
            },
            error: function (XMLHttpRequest, textStatus, errorThrown) {//请求的失败的返回的方法
                // alert("删除失败，请稍后再次尝试删除！");
            }


        });
    };

    $("#submitWithToken").click(submitWithToken);
});