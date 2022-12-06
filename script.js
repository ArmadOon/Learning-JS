'Use strict';

// ! Object Oriented Programming

//* Constructor function and new operator

const Person = function (firstName, birthYear) {
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
