/*(() => {
	//setTimeOut不会阻塞后面的代码
	setTimeout(() => {
       alert("completed!")
	}, 3000);
	alert("setTimeOut");
})();*/

(() => {
	/*alert("1");
	sleep(5000);
	alert("2");*/
	b();
})();
//b(); 调用会报错为定义，应用function b(){}这种写法
var b=function()
{
	alert("b");
}
function sleep(millisecond) {
	var now = new Date();
	var exitTime = now.getTime() + millisecond;
	while (true) {
		now = new Date();
		if (now.getTime() > exitTime)
			return;
	}
}


