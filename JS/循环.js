// JavaScript Document
$(function () {
	var arr = new Array();
	for (var i = 0; i < 10; i++) {
		arr.push(i + 1);
	}
	debugger;
	var str = '';
	//lamda表达式跟C#有点不一样，这个大括号去掉报错。
	arr.forEach(v => {
		str += v.toString();
	});
	var str1 = '';
	//arr.forEach(function (item, index, array) {
	arr.forEach(function (v, i, a) {
		str1 += v;
	});
	debugger;
	console.log('let  in ');
	//let  in  i是索引
	for (let i in arr) {
		console.log(i, arr[i]);
	}
	console.log('let  of ');
	//let  of val  是 item
	for (let val of arr) {
		console.log(val);
	}
	var str2 = '';
	$.each(arr, function (i, v) {
		console.log(i, v);
	});
	debugger;
	//清空数组
	arr.splice(0, arr.length);
	console.log(arr.length);

	//JavaScript for...in 语句循环遍历对象的属性。
	var person = {
		fname: "Bill",
		lname: "Gates",
		age: 56
	};
	var txt = '';
	for (x in person) {
		txt += '' + person[x];
	}
	console.log(txt);
	debugger;
	var jsonStr=JSON.stringify(person);
	var personObj=JSON.parse(jsonStr);
	var name=personObj.fname;
	//unfefined
	var nameUn=personObj.lfname;
	
});
