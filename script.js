'use strict';

function calcAge(birthYear) {
	const age = 2022 - birthYear;
	function printAge() {
		const output = `You are ${age}, born in ${birthYear}`;
		console.log(output);
		if (birthYear >= 1981 <= 1996) {
			var millenial = true;
			const str = `Oh, and you are a millenial ${firstName}`;
			console.log(str);
			function add(a, b) {
				const result = a + b;
				console.log(result);
				return result;
			}
			add(22, 111);
			const output = 'NEW OUTPUT';
			console.log(output);
		}
		//console.log(str);

		//add(2, 3); //add is not defined
	}
	printAge();
	return age;
}

const firstName = 'Martin';
calcAge(1993);
