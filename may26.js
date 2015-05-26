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

var sayName = function() {
	alert(this.name);
}

var Person = function(name, age) {
	return {
		name: name,
		age: age
		sayMyName: sayName
	}
};

var me = Person('Tyler', 25);

me //returns object

// explicit binding //
var sayName = function() {
		alert(this.name);
}
var colt = {
	name: 'Colt'
}

// .call 

sayName.call(colt);
