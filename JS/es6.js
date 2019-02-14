//类定义 JavaScript Document
class Person {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}
	display() {
		alert(this.name + "" + this.age)
	}
	getString() {
		return this.name + "" + this.age;
	}
}

class Student extends Person {
	constructor(name, age, address) {
		super(name, age);
		this.address = address;
	}
	show() {
		alert(this.name + this.age + this.address);
	}

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

function doWork() {
	sleep(2000);
	return "completed";
}
async function work() {
	let result = await doWork();
	return result;
}


function promiseWorker() {
	var p = new Promise(function (resolve, reject) {
		//做一些异步操作
		try {
			sleep(5000);
			throw "fail";
			resolve("success");
		} catch (ex) {
			debugger;
			reject(ex);
		}

	});
	return p;
}

(function () {
	//类
	var person = new Person('li', 31);
	person.display();
	var student = new Student('li', 31, 'anhui');
	student.show();
	student.display();

	debugger;
	alert('student.getString()=' + student.getString());
	//对象直接量
	/*var parentObject = {
		parentName: 'li'
	}
	//__proto__:隐式原型，一个对象的隐式原型指向构造该对象的构造函数的原型
	var childObject = {
		__proto__: parentObject,//继承parentObject
		childName: 'rui'

	}
	alert(childObject.parentName + childObject.childName);*/
	var a = 1;
	var b = 'sss';

	//async
	/*alert("start");
	var result = work();
	result.then((result) => {
		alert(result);
	});*/


	//Promise
	/*var p = promiseWorker();
	p.then((resolve) => {
		alert(resolve);
	}, (reject) => {
		alert(reject);
	});*/


	//字符串换行: 反单引号
	//注意:反单引号是键盘上数字键1左边的按键，而不是单引号哦
	/*	var age=31;
		var str=`fancky  is
	${age} years old! 
	And  no.....
	`;
		alert(str);*/


})();
