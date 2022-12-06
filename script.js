'Use strict';

// ! Object Oriented Programming

//* Constructor function and new operator

/* const Person = function (firstName, birthYear) {
	this.firstName = firstName;
	this.birthYear = birthYear;
};
const martin = new Person('Martin', 1993);
console.log(martin);
// ! STEPS :
// * 1. New {} is created
// * 2. function is called, this = {}
// * 3. {} linked to prototype
// * 4. function automatically return {}

// ! Prototypes
console.log(Person.prototype);
Person.prototype.calcAge = function () {
	console.log(2022 - this.birthYear);
};

martin.calcAge();

console.log(martin.__proto__); */

// ! ES6 classes
// * class expression
// const PersonCl = class {

// }

// * class declaration
/* class PersonCl {
	constructor(firstName, birthYear) {
		this.firstName = firstName;
		this.birthYear = birthYear;
	}
	calcAge() {
		console.log(2022 - this.birthYear);
	}
	greet() {
		console.log(`Hey im ${this.firstName}`);
	}
}

const jessica = new PersonCl('jessica', 1993);
console.log(jessica);
jessica.calcAge();
jessica.greet(); */

// ! 1. Classes are NOT hoisted
// ! 2. Class are first-class citizes
// ! 3. Classes are executed in strict mode

// ! SETTERS ANG GETTERS

const account = {
	owner: 'Martin',
	movements: [200, 530, 120, 300],

	get latest() {
		return this.movements.slice(-1).pop();
	},
	set latest(mov) {
		this.movements.push(mov);
	}
};

console.log(account.latest);
account.latest = 50;
console.log(account.movements);
