
// 执行顺序：匿名自执行--$(document).ready()(多个按加载的顺序)
$(function()
{
    console.log("index-ready");
});

(function () {
    console.log("index-匿名");
    //不能调用外部的函数
    // test('匿名');

})();


$(function () {
    test('ready');
});

let test=function (callMethodName) {
    console.log('test-'+callMethodName);
}
// $(function () {});
// (function () {})();