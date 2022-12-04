'use strict';
const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	}
};

const arr = [2, 3, 6];
//destructuring assigment
const [x, y, z] = arr;

console.log(x, y, z);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);

//*  switch main to secondary and secondary to main
//! we need temporary variable

/* let temp = main;
main = secondary;
secondary = temp;

console.log(main, secondary);
 */

//! destructuring way

[main, secondary] = [secondary, main];
console.log(main, secondary);

const [starterCourse, mainCourse] = restaurant.order(2, 0);
console.log(starterCourse, mainCourse);

// nested array

const nested = [2, 3, [5, 6]];
/* const [i, , j] = nested;
console.log(i, j);
 */
const [i, , [j, k]] = nested;
console.log(i, j, k);
