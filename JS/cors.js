$(function () {

    let redirect = function () {

        /*
        success ： 当请求成功时调用的函数。这个函数会得到一个参数：从服务器返回的数据。当请求成功时调用函数，即status==200。
       complete ：当请求完成时调用的函数。这个函数会得到两个参数：XMLHttpRequest对象和一个描述请求成功的类型的字符串。当请求完成时调用函数，即status==404、403、302...。
         */
        $.ajax({
            type: "GET",//向后台请求的方式，有post，get两种方法
            url: "http://localhost:8081/cors/getAuthorization",//url填写的是请求的路径
            cache: false,//缓存是否打开
            data: {//请求的数据，
                // "userIds": userId
            },
            // dataType: 'json',//请求的数据类型
            success: function (data) {//请求的返回成功的方法

            },
            complete: function (XMLHttpRequest, textStatus) {
                debugger;
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

    let corsGetData = function () {
        /*
        success ： 当请求成功时调用的函数。这个函数会得到一个参数：从服务器返回的数据。当请求成功时调用函数，即status==200。
       complete ：当请求完成时调用的函数。这个函数会得到两个参数：XMLHttpRequest对象和一个描述请求成功的类型的字符串。当请求完成时调用函数，即status==404、403、302...。
         */
        $.ajax({
            type: "GET",//向后台请求的方式，有post，get两种方法
            url: "http://localhost:8081/cors/getData",//url填写的是请求的路径
            cache: false,//缓存是否打开
            data: {//请求的数据，
                // "userIds": userId
            },
            // dataType: 'json',//请求的数据类型 如果传的是对象用josn,如果是字符串不用此属性
            success: function (data) {//请求的返回成功的方法
                alert(data);
            },
            complete: function (XMLHttpRequest, textStatus) {
                debugger;
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
    let submitWithToken = function () {
        /*
        success ： 当请求成功时调用的函数。这个函数会得到一个参数：从服务器返回的数据。当请求成功时调用函数，即status==200。
       complete ：当请求完成时调用的函数。这个函数会得到两个参数：XMLHttpRequest对象和一个描述请求成功的类型的字符串。当请求完成时调用函数，即status==404、403、302...。
         */
        let token="eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlIjoiYWRtaW5pc3RyYXRvciIsImV4cCI6MTU3NDQxMjU1MywidXNlck5hbWUiOiJmYW5ja3kiLCJ1c2VySUQiOiIxIn0.SOK_pVliLyIDrlSlIjay-CmjpqZ4vf3QgaA2Cu5h9wc";
        $.ajax({
            type: "get",//向后台请求的方式，有post，get两种方法
            url: "http://localhost:8081/jwt/authorise",//url填写的是请求的路径
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

    $("#redirect").click(redirect);
    $("#corsGetData").click(corsGetData);

    $("#submitWithToken").click(submitWithToken);
    // $("#corsGetData").on("click",corsGetData);
    // $("#corsGetData").
});

//一、
// $(function () {
// });
//二、
// (function () {
//
// })();

let getProductByGet = function (product) {
    $.get("/getProducts?productname=" + product, function (data) {
        // for (let val of data) {
        //    val.imageURL
        // }

        $('#content').empty();
        for (let i = 0; i < data.length; i++) {
            if (i % 2 == 0) {
                $('#content').append("<div class=\"content-section-b\">\n" +
                    "\n" +
                    "    <div class=\"container\">\n" +
                    "\n" +
                    "        <div class=\"row\">\n" +
                    "            <div class=\"col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6\">\n" +
                    "                <hr class=\"section-heading-spacer\">\n" +
                    "                <div class=\"clearfix\"></div>\n" +
                    "                <h2 class=\"section-heading\">" + data[i].productname + "</h2>\n" +
                    "                <p class=\"lead\">Description:" + data[i].description + "</p>\n" +
                    "            </div>\n" +
                    "            <div class=\"col-lg-5 col-sm-pull-6  col-sm-6\">\n" +
                    "                <img class=\"img-responsive\" src=\"" + data[i].imagepath + "\" alt=\"\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "\n" +
                    "    </div>\n" +
                    "    <!-- /.container -->\n" +
                    "\n" +
                    "</div>");
            } else {
                $('#content').append("<div class=\"content-section-a\">\n" +
                    "    <div class=\"container\">\n" +
                    "        <div class=\"row\">\n" +
                    "            <div class=\"col-lg-5 col-lg-offset-1 col-sm-push-6  col-sm-6\">\n" +
                    "                <hr class=\"section-heading-spacer\">\n" +
                    "                <div class=\"clearfix\"></div>\n" +
                    "                <h2 class=\"section-heading\">" + data[i].productname + "</h2>\n" +
                    "                <p class=\"lead\">Description:" + data[i].description + "</p>\n" +
                    "            </div>\n" +
                    "            <div class=\"col-lg-5 col-sm-pull-6  col-sm-6\">\n" +
                    "                <img class=\"img-responsive\" src=\"" + data[i].imagepath + "\" alt=\"\">\n" +
                    "            </div>\n" +
                    "        </div>\n" +
                    "    </div>\n" +
                    "</div>" +
                    "")
            }
        }

        clearHref();
    });


}