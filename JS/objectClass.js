// JavaScript Document
$(function () {
	var obj = new ClassDemo(3, 5);
	obj.display();
	obj.cheng();
	obj.sub();
	debugger;
	var re=obj instanceof ClassDemo;
	if(obj instanceof ClassDemo)
		{
			alert('obj instanceof ClassDemo');
		}
});

function ClassDemo(index, size) {
	this.index = index;
	this.size = size;
}

ClassDemo.prototype = {
	constructor: ClassDemo,
	display: function () {
		document.writeln(this.index + this.size);
	},
	sub: function () {
		document.write(this.index - this.size);
	}
}

ClassDemo.prototype.cheng = function () {
	document.writeln(this.index * this.size);
}
