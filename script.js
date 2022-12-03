'use strict';
console.log(this);
const calcAge = function (birthdate) {
	console.log(2037 - birthdate);
	console.log(this);
};
calcAge(1993);

const calcAgeArrow = (birthdate) => {
	console.log(2037 - birthdate);
	console.log(this);
};
calcAgeArrow(1993);

const martin = {
	year: 1993,
	calcAge: function () {
		console.log(this);
		console.log(2017 - this.year);
	}
};
martin.calcAge();
const matilda = {
	year: 2017
};
matilda.calcAge = martin.calcAge;
matilda.calcAge();

const f = martin.calcAge;
f();
