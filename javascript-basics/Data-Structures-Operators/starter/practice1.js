'use strict';

// ES6 : SPREAD OPERATOR --- ARRAY
// Useful to expand an ARRAY
// Useful when we pass arguments into functions

// NOTE: We can use SPREAD OPERATOR only to:
// --- build an Array
// --- pass values/arguments into a function

//Creating a new ARRAY based on a certain ARRAY, with new Elements in the beginning of the ARRAY.
//To do so, either we would need to loop or write manually.
const arr = [7, 8, 9];

// new Array created manually:
const badNewArr = [1, 2, arr[0], arr[1], arr[2]];
console.log(badNewArr); //Array(5) [ 1, 2, 7, 8, 9 ]

// new Array with ES6 SPREAD OPERATOR
const newArr = [1, 2, ...arr];
console.log(newArr); // Array(5) [ 1, 2, 7, 8, 9 ]

// Shows the the SPREAD OPERATOR on ARRAY -- expands by unpacking individual elements.
console.log(...newArr); // 1 2 7 8 9

const newArr1 = [1, 2, arr];
console.log(newArr1); // Array(3) [ 1, 2, (3) […] ]
// ​0: 1, 1: 2, 2: Array(3) [ 7, 8, 9 ] length: 3

// Create a new Array with more Food Items in the mainMenu Array

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu); //Array(4) [ "Pizza", "Pasta", "Risotto", "Gnocci" ]
console.log(restaurant.mainMenu); // Array(3) [ "Pizza", "Pasta", "Risotto" ]
// NOTE:
// When we are creating a new ARRAY called, newMenu.
// We are not in any way manipulating the restaurant.mainMenu.

// NOTE: ON SPREAD OPERATOR
// SPREAD OPERATOR is similar to destructuring because it helps us get individual elements out of ARRAYs.
// BUT, the big difference is that the SPREAD OPERATOR takes all the elements from an array,
// and it also doesn’t create NEW Variables.

// Therefore, we can use it only in places where we would otherwise write values separated by commas.

// SPREAD OPERATOR -- TWO IMPORTANT USE CASES
// --- Create shallow copies of an array
// --- Merge two arrays together.

// Copy Array
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);

// Join 2 Arrays together.

const fullMenu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(fullMenu); // Array(7) [ "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad", "Pizza", "Pasta", "Risotto" ]

// Iterables : arrays, strings, maps, sets. NOT Objects.

const str = 'Jonas';

const letters = [...str, '', 'S.'];
console.log(letters); // Array(7) [ "J", "o", "n", "a", "s", "", "S." ]

// SPREAD OPERATOR cannot be used to expand a string inside a template literal
// console.log(`${...str} Schmedtmann`); // Uncaught SyntaxError: expected expression, got '...'
// Because ${...str} doesn't expect multiple values separated by commas.

// Write a function that accepts multiple arguments, and then use SPREAD OPERATOR to pass those arguments.

const italianEatery = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  // method to order food -- that accepts two parameters -- index for starterMenu and index for mainMenu
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  // Below we have passed only one argument -- it is a destructured Object that we passed into the orderDelivery method.
  orderDelivery: function ({
    starterIndex,
    mainIndex = 0,
    time = '20.00',
    address,
  }) {
    console.log(
      `Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },

  // Method to order just Pasta, which will always have exactly 3 ingredients

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3} `
    ); // Here is your delicious pasta with Truffles, Garlic and Parmesan
  },

  // Method to order Pizza -- one ingredient is must, other optional --- Using REST Parameters

  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient); // Buffala
    console.log(otherIngredients); // Array(3) [ "Cherry Tomatoes", "Basil", "Chilli Oil" ]
  },
};

// Get the ingredients from a prompt window

// const ingredients = [
//   prompt("Let's make pasta! Ingredient 1?"),
//   prompt('Ingredient 2?'),
//   prompt('Ingredient 3?'),
// ];
// console.log(ingredients); // Array(3) [ "Truffles", "Garlic", "Parmesan" ]

// italianEatery.orderPasta(...ingredients);

// ES 2018 --- SPREAD OPERATOR ON OBJECTS
// SPREAD OPERATOR works on Objects as well
// Even though Objects are NOT iterables.

// Create new italianEatery object with all data from original one, and some additional data.

const newItalianEatery = {
  foundedIn: 1998,
  ...italianEatery,
  founder: 'Guiseppe',
};

console.log(newItalianEatery);

// Create another Shallow Copy of Object italianEatery
// Then, change value of the name property on italianEateryCopy object.

const italianEateryCopy = { ...italianEatery };
italianEateryCopy.name = 'Ristorante Roma';
console.log(italianEateryCopy.name); // Ristorante Roma  practice1.js:149:9
console.log(italianEatery.name); // Classico Italiano  practice1.js:150:9

// REST PATTERNS AND PARAMETERS

// 1) REST Pattern ---- Destructuring
//
// SPREAD OPERATOR, because on RIGHT side of the assignment operator (=)
const arr2 = [1, 2, ...[3, 4]];
console.log(arr2); // Array(4) [ 1, 2, 3, 4 ]

// REST, because on the LEFT side of the assignment operator (=) together with destructuring.
const [g, h, ...others] = [1, 2, 3, 4, 5];
console.log(g, h, others); // 1 2 Array(3) [ 3, 4, 5 ]
// REST Pattern basically collects the elements that are unused in the destructuring assignment.

// We can use the three dots on both sides of the assignment operator
// So, we can use the REST Pattern when we are destructuring

const [pizza, , risotto, ...otherFood] = [
  ...italianEatery.mainMenu,
  ...italianEatery.starterMenu,
];

console.log(pizza, risotto, otherFood);
// Pizza Risotto Array(4) [ "Focaccia", "Bruschetta", "Garlic Bread", "Caprese Salad" ]

// NOTE: REST syntax collects all the array elements after the last variable
// In the above example, after risotto, it doesn't inlcude skipped elements.
// Therefore, the REST Pattern should always be the last in the destructuring assignment.

// REST Pattern --- Objects.

// We separate weekend from weekdays on the openingHours object.

const { sat, ...weekDays } = { ...italianEatery.openingHours };
console.log(weekDays); // Object { thu: {…}, fri: {…} }

// Here, we took saturday into its own variable by mentioning the exact property name-- sat.
// Next, with REST Pattern we then selected the remaining days of the openingHours object, i.e; Thursday and Friday,
// And grouped them together as a NEW Object called weekDays.

//
// 2) REST Parameters ---- Functions
//

const add = function (...numbers) {
  // Using REST Parameter
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum); // 5, 17, 25, 35
  console.log(numbers); // Logged as Arrays --- Array [ 2, 3 ], Array(4) [ 5, 3, 7, 2 ], Array(7) [ 8, 2, 5, 3, 2, 1, 4 ], Array(3) [ 23, 5, 7 ]
};

add(2, 3); // 5
add(5, 3, 7, 2); // 17
add(8, 2, 5, 3, 2, 1, 4); // 25

const j = [23, 5, 7];
// Calling add function with array values stored in variable j
// and unpacking individual array elements of j using the SPREAD Operator..
add(...j); // 35

// REST Parameters -- add a method to order Pizza at the italianEatery
// Needs to have atlease 1 ingredient and other ingredients are optional.

italianEatery.orderPizza('Buffala', 'Cherry Tomatoes', 'Basil', 'Chilli Oil');
// Buffala is stored as mainIngredient
// Cherry Tomatoes, Basil and Chilli Oil are stored as an array called otherIngredients
// This is because we apply REST Parameter on the otherIngredients,
// which then groups together the remaining 3 ingredients in an array.

italianEatery.orderPizza('Truffles');
// mainIngredient // Truffles -- If we pass only 1 ingredient as an argument it will be stored as the mainIngredient,
// otherIngredients  // Array [] -- Whereas, the otherIngredients would be logged as an empty array.
