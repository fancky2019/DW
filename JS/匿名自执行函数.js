 //JavaScript Document

//
 (function () {
 	alert("sdsdsd");
 })();

 $(function () {
 	alert("$");
 /*	$("#windowHref").click(function () {
 		location.href = "https://www.baidu.com/";
 	});*/
 });


 (function () {
 	alert("3");
 	function createFunctions() {
 		let result = new Array();
 		for (var i = 0; i < 10; i++) {    
 			result[i] = function () {
 				return i;
 			};
 		}
 		return result;
 	}
 	var funcs = createFunctions();
 	debugger;
 	for (var i = 0; i < funcs.length; i++) {  
 		console.log(funcs[i]());
 	}
 	//10
 	//10
 	//10	
 	//10
 })();



 //匿名函数。函数声明包含在一对圆括号中
 //，表示它实际上是一个函数表达式。而紧随其后的另一对圆括号会立即调用这个函数。
 (function () {
 	//这里是块级作用域

 	alert("$匿名自执行函数");
 })();

 (function (x) {
 	alert(x);
 })(5); //5
//匿名自执行函数
(
	function()
	{
		alert("匿名自执行函数");
	}()
);

 $("#windowHref").click(function () {
	 //在原窗口导航到新的链接
 	//location.href = "https://www.baidu.com/";
	// window.location.href="https://www.baidu.com/";
	 //在新的窗口打开链接
	 window.open("https://www.baidu.com/");
 
 });
$("#windowHref").bind("click",function()
					 {
	
});
