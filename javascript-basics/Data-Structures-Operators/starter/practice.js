'use strict';

// Simulating foot delivery application.

// Array Destructuring --- Earlier (Pre ES6)

// const arr1 = [2, 3, 4];
// const a = arr1[0];
// const b = arr1[1];
// const c = arr1[2];

// // Array Destructuring --- with ES6 Destructuring feature.
// // So, here we declare all 3 variables in a square bracket and set it equal to the original array
// const [x, y, z] = arr1;
// console.log(x, y, z);
// console.log(arr1); // Original array is not affected/destroyed by destructuring.

// // When destructuring we dont have to retrieve all the elements out if an array.

// const bistro = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
// };

// // const [first, second] = bistro.categories; // It retrieves elements in order from left-to-right.
// // console.log(first, second); // Italian Pizzeria

// // If we wanted to retrieve 1st element and the 3rd element from the categories array
// // leave an empty space for the 2nd element, so that variable third is associated correctly with 3rd element in the categories array.

// // const [first, , third] = bistro.categories;
// // console.log(first, third); // Italian Vegetarian

// // If we wanted to switch two variables without destructuring --- Earlier -- Pre ES6
// // Basically, associating variable main to 3rd element and variable secondary to 1st element

// // let [main, , secondary] = bistro.categories;
// // first we create a temporary variable and set it equal to main
// // We need a temporary variable temp, so that we dont overwrite variable main
// // const temp = main;
// // main = secondary;
// // secondary = temp;

// // console.log(main, secondary); // Vegetarian Italian

// // Switching two variables with ES6 destructuring feature :
// // we create a new array with two variable inverted and then destruct them
// let [main, , secondary] = bistro.categories;

// [main, secondary] = [secondary, main];
// console.log(main, secondary); // Vegetarian Italian

// // Using destructuring feature to have a function return an array -- Immediately associating destructuring results to variables
// // This allows to return multiple values from a function

// const italianBistro = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   // method to order food -- that accepts two parameters -- index for starterMenu and index for mainMenu
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },
// };

// console.log(italianBistro.order(2, 0));

// // Receive two return values from a function and then immediately create variables out of one function call.
// const [starter, mainCourse] = italianBistro.order(2, 0);
// console.log(starter, mainCourse);

// // When we have a nested array
// const nested = [2, 4, [5, 6]];
// const [num1, , num3] = nested;
// console.log(num1, num3); // 2 Array [ 5, 6 ]

// // destructuring the nested array immediately -- destructuring inside of destructuring
// const nestedArr = [2, 4, [5, 6]];
// const [nr1, , [nr3, nr4]] = nestedArr;
// console.log(nr1, nr3, nr4); // 2 5 6

// // Setting default values for the variables when we are extracting them
// // Useful when we don't know the length of an array -- Ex: When we get data from an API
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r); // 8 9 1

// // Without default values, variable r would be undefined.
// // Because the array that is being destructured holds only two values [8, 9]

// // Destructuring Objects

// const italianRestaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],

//   openingHours: {
//     thu: {
//       open: 12,
//       close: 22,
//     },
//     fri: {
//       open: 11,
//       close: 23,
//     },
//     sat: {
//       open: 0, // Open 24 hours
//       close: 24,
//     },
//   },

//   // method to order food -- that accepts two parameters -- index for starterMenu and index for mainMenu
//   order: function (starterIndex, mainIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
//   },

//   //   orderDelivery: function (obj) {
//   //     console.log(obj); // Object { time: "22.30", address: "Via del Sole, 21", mainIndex: 2, starterIndex: 2 }
//   //   },

//   // Below we have passed only one argument -- it is a destructured Object that we passed into the orderDelivery method.
//   orderDelivery: function ({
//     starterIndex,
//     mainIndex = 0,
//     time = '20.00',
//     address,
//   }) {
//     // We can do destructuring right here-- by writing property names of an object as an argument.Property names need NOT be in order when destructuring.
//     // We can also set default values to these.
//     console.log(
//       `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
//     ); // Order received! Garlic Bread and Risotto will be delivered to Via del Sole, 21 at 22.30
//     // Order received! Bruschetta and Pizza will be delivered to Via del Sole, 21 at 20.00 --- Default Values
//   },
// };

// // Here, we call the orderDelivery() function and passed in an Object of options
// italianRestaurant.orderDelivery({
//   time: '22.30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// });

// // Default values --- on calling orderDelivery() function, it will take default values when an Object doesnt have a certain property name.

// italianRestaurant.orderDelivery({
//   address: 'Via del Sole, 21',
//   starterIndex: 1,
// });

// // To destructure Objects we use curly braces to destructure.
// // Provide variable names that exactly match the property names we want to retrieve from the Object.
// // Order of the elements does not matter because we are destructuring using property names.
// const { name, categories, openingHours } = italianRestaurant; // This creates 3 brand new variables based on italianRestaurant Object.
// console.log(name, categories, openingHours);
// //Classico Italiano Array(4) [ "Italian", "Pizzeria", "Vegetarian", "Organic" ] Object { thu: {…}, fri: {…}, sat: {…} }

// // If we wanted variable names to be different from property names

// const {
//   name: restaurantName,
//   categories: menuVariety,
//   openingHours: hours,
// } = italianRestaurant;

// console.log(restaurantName, menuVariety, hours);
// // Classico Italiano  Array(4) [ "Italian", "Pizzeria", "Vegetarian", "Organic" ] Object { thu: {…}, fri: {…}, sat: {…} }

// // Another useful feature for when we are dealing with third-party data -- to have Default Values
// // Useful when we trying to read a property that does NOT exist on the Object.

// const { menu = [], starterMenu: starters = [] } = italianRestaurant;
// console.log(menu, starters); // Array [] Array(4) [ "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad" ]
// // menu would be undefined, if we did NOT give it a default value of empty array.
// // Because menu property does NOT exist on the italianRestaurant Object.

// // Mutating Variables when destructuring Objects.

// let l = 111;
// let m = 999;

// const obj = { l: 23, m: 7, n: 14 };

// // { l, m } = obj;  // When we start a line with curly braces, JavaScript expects a code Block -- declaration or a statement
// // console.log(l, m); // Uncaught SyntaxError: expected expression, got '='

// ({ l, m } = obj); // Requires to wrap destructuring assignment into parentheses -- with this it overrides the initial variables declared with let.
// console.log(l, m); // 23 7

// // Destructuring Nested Objects
// // openingHours Object has fri Object inside it, while the openingHours Object is inside the italianRestaurant Object

// // Destructuring openingHours Object

// // const { fri } = openingHours; // works the same with hours, as thats the variable name given to the property name openingHours
// // console.log(fri); // Object { open: 11, close: 23 }

// // But we want to destructure the fri Object which is inside the openingHours Object
// const {
//   fri: { open: openingHour, close: closingHour }, // Assigning different variable names to property names
// } = openingHours;

// console.log(openingHour, closingHour); // 11 23

// // When a function has a lot of parameters, it can be hard to remember the order of those parameters
// // Instead of defining parameters manually, we pass an object into a function as an argument
// // And the function will then immediately destructure that object.
