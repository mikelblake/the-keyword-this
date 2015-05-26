var tyler = {
	name: 'Tyler',
	age: 25
};

var jacob = {
	name: 'Jacob',
	age: 22
}

var sayName = function(obj) {
	alert(obj.name);
};

sayName(tyler);


//   'this' keyword //

var me = {
	name: 'Tyler',
	sayName: function(){
			alert(this.name);
	}
};
me.sayName();

var Person = function(name, age) {
	
};