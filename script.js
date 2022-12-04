'use strict';
const restaurant = {
	name: 'Classico Italiano',
	location: 'Via Angelo Tavanti 23, Firenze, Italy',
	categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
	starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
	mainMenu: ['Pizza', 'Pasta', 'Risotto'],

	order: function (starterIndex, mainIndex) {
		return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
	},
	orderDelivery: function ({ starterIndex, mainIndex, time, adress }) {
		console.log(
			`Order recieved! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${adress} at ${time}`
		);
	},
	openingHours: {
		thu: {
			open: 12,
			close: 22
		},
		fri: {
			open: 11,
			close: 23
		},
		sat: {
			open: 0, // Open 24 hours
			close: 24
		}
	}
};
// Spread operator
const arr = [7, 8, 9];
const newArr = [1, 2, 3, 4, 5, 6, ...arr]; //* if spread op. is not included, whole new arr is added [1,2,[1,2]]
console.log(newArr);
const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

// Copy array
const mainMenuCopy = [...restaurant.mainMenu];

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);
/*Destructing Object
///////////////////////////////////// 
restaurant.orderDelivery({
	time: '22:30',
	adress: 'Via del Sole, 21',
	mainIndex: 2,
	starterIndex: 2
});
const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);

const {
	name: restaurantName,
	openingHours: hours,
	categories: tags
} = restaurant;
console.log(restaurantName, hours, tags);

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);
// Mutating variables

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
// ! {a,b} = obj, if start with curly brackets expected code block need to wrap it with parentheses

({ a, b } = obj);
console.log(a, b);

//* Nested Objects

const {
	fri: { open, close }
} = openingHours;
console.log(open, close);
 */
// const arr = [2, 3, 6];
// //destructuring assigment
// const [x, y, z] = arr;

// console.log(x, y, z);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// //*  switch main to secondary and secondary to main
// //! we need temporary variable

// /* let temp = main;
// main = secondary;
// secondary = temp;

// console.log(main, secondary);
//  */

// //! destructuring way

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starterCourse, mainCourse] = restaurant.order(2, 0);
// console.log(starterCourse, mainCourse);

// // nested array

// const nested = [2, 3, [5, 6]];
// /* const [i, , j] = nested;
// console.log(i, j);
//  */
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p, q, r] = [8, 9];
// console.log(p, q, r); // r is undefined

// const [o = 1, l = 2, m = 5] = [8, 9]; //default values
// console.log(o, l, m);
