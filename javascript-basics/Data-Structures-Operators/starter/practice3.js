'use strict';

// ENHANCED OBJECT LITERALS --- ES6 Feature.

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
// 3) So, inside the Object openingHours, if we had to write the properties based on the weekdays Array.
// We could compute those properties instead of writing them manually.

// So, we start with square brackets, and inside the brackets we can put any expression.
// In the above example, we used weekdays with the correct index num.
// We could even do destructuring inside those brackets.

const openingHours = {
  // On logging openingHours computed properties will show the correct day of the week:
  [weekdays[3]]: {
    // thu:
    open: 12,
    close: 22,
  },
  [weekdays[4]]: {
    // fri:
    open: 11,
    close: 23,
  },
  [weekdays[5]]: {
    // sat:
    open: 0, // Open 24 hours
    close: 24,
  },
};

// If inside the openingHours Object we wanted to write the property names based on the weekdays array
// We could compute them instead of writing manually

const italianEatery = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  // BEFORE ---- ES6 -- BEFORE, ENHANCED OBJECT LITERAL
  // If we wanted to show openingHours Object inside the italianEatery Object.
  // openingHours: openingHours, // It may be confusing because here the property name is exactly same as the variable name

  // AFTER -- ES6 with ENHANCED OBJECT LITERAL --
  // 1) Adding one object variable inside another object variable.
  openingHours,
  // This takes the openingHours object and puts it inside the italianEateryObject
  // And creates a property name that is exactly same as the variable name.
  // NOTE: The property name has to be the same as the variable.

  // BEFORE -- ES6
  // Method to order food -- that accepts two parameters -- index for starterMenu and index for mainMenu
  //   order: function (starterIndex, mainIndex) {
  //     return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  //   },

  // AFTER -- ES6 with ENHANCED OBJECT LITERAL --
  // 2) Writing Methods inside an Object Literal
  // We do NOT need to create a property and then set it to function expression
  order(starterIndex, mainIndex) {
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
    );
  },

  // Method to order Pizza -- one ingredient is must, other optional --- Using REST Parameters
  orderPizza: function (mainIngredient, ...otherIngredients) {
    console.log(mainIngredient);
    console.log(otherIngredients);
  },
};

// OPTIONAL CHAINING (ES 2020): Feature for Objects and Arrays

// Assuming we have collected data from a web API.
// And in their service there could be multiple Restaurants and not all of them would be open on Monday.
// And some of them may not even have openingHours mentioned.

// If wanted to check openingHours of the italianEatery for Monday
console.log(italianEatery.openingHours.mon); // undefined
// On logging .mon we get undefined.

// And if we wanted to check since what time it is open on Monday ?
// console.log(italianEatery.openingHours.mon.open); // Uncaught TypeError: italianEatery.openingHours.mon is undefined
// So, on logging .mon.open we get an error

// Before :  Optional Chaining Feature -- If we wanted to avoid the above error :
// We would have to use if__else statement to check if a certain property exists inside a nested Object.
// Or we could also use a logical operator instead of if__else statement
// Below we use if__else statement and state that only if a property exists -- do this.

// If we checked for Friday: And since it exists it logs at what time it is open : 11.
if (italianEatery.openingHours.fri) {
  console.log(italianEatery.openingHours.fri.open); // 11
}

// Since Monday does NOT exist, it logs NOTHING.
if (italianEatery.openingHours.mon) {
  console.log(italianEatery.openingHours.mon.open);
  // And we avoid this error -- Uncaught TypeError: italianEatery.openingHours.mon is undefined
}

// Now, if we wanted to check whether the italianEatery even has openingHours property ?
// And also check if it is open on Monday
if (italianEatery.openingHours && italianEatery.openingHours.mon) {
  console.log(italianEatery.openingHours.mon.open);
}

// If there are deeply nested objects with lots of optional properties,
// It can get difficult to manage with if__else statement or logical operators.

// AFTER : ES 2020 Optional Chaining Feature (?)

// Optional Chaining : If a certain property does NOT exist, then undefined is returned immediately
// This avoids errors like -- Uncaught TypeError: italianEatery.openingHours.mon is undefined

// Checking if monday exists, log the open Hour.
console.log(italianEatery.openingHours.mon?.open); // undefined

// The optional chaining question mark (?) is placed before the dot
// Only if the property before the question mark (?) exists the next property is read.
// So, only if Monday property exists, only then the open property is read.
// If Monday property doesn't exists, it then immediately returns undefined.

// NOTE: Here, exists means the nullish concept --
// Meaning, property exists as long as it is NOT null or undefined.
// So, if it is a falsy value like 0 or an empty string(" ") then the property exists.

// Checking multiple properties with the optional chaining feature (?)
console.log(italianEatery.openingHours?.mon?.open);
// First checks whether openingHours exists on italianEatery.
// And only if openingHours exists, it then checks if Monday (mon) exists.

// Example: OPTIONAL CHAINING OBJECTS

// In this example, we want to loop over the days ARRAY
// And then, log to the console whether italianEatery is open or closed on each of those days

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  //   console.log(day);
  // NOTE: If we want to use variable name as the property name, we need to use brackets notation []
  const open = italianEatery.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
}
// Instead of || we use ??, because on sat it opens at 0,
// || operator takes 0 as a falsy value. Therefore, it assigns string 'closed' to sat.
// But the ?? operator works with the concept of nullish values. Therefore, accepts 0 as a value.
// NOTE: Optional Chaining (?) and the Nullish Coalescing Operator work together, because both work with the Nullish concept.

// ES 2020 --- OPTIONAL CHAINING on Methods

console.log(italianEatery.order?.(0, 1) ?? 'Method does not exist');
// Here, first we check whether the order method exists on the italianEatery.
// If the method exists, we call it with arguments (0, 1).
// If it does NOT exist, we a log a string 'Method does not exist'

// And since the method exists, on executing we log an Array ["Focaccia", "Pasta"]

// When we try to call a method that DOES NOT exist
console.log(italianEatery.orderRisotto?.(0, 1) ?? 'Method does not exist');
//Logs : Method does not exist

// ES 2020 --- OPTIONAL CHAINING ON ARRAYS --- We can use it to check if an Array is empty []

// In this example we create users Array, which has some user Objects.
// Checking whether users Array is empty or not using Optional Chaining Feature.

const users = [{ name: 'Jonas', email: 'hello@jonas.io' }];
console.log(users[0]?.name ?? 'User array is empty');

// First we check, whether an element exists at index 0 of users Array -- users[0]?
// If it does, only then we ask it to log the name property
// If it does NOT we ask it to log a string 'User array is empty'

// And since it exists, it logs Jonas

// If we had to check whether an array exists or not, WITHOUT Optional Chaining

if (users.length > 0) {
  console.log(users[0].name);
} else {
  console.log('User array is empty');
}

// Looping over Objects : Object Keys, Values, And Entries.
// NOTE: Objects are NOT iterable -- so we loop over them indirectly

// Looping Objects : KEYS (PROPERTY NAMES)
// To loop over Objects property names :
// We use for__of loop that actually loops over an array.

const properties = Object.keys(openingHours);
console.log(properties); // Array(3) [ "thu", "fri", "sat" ]

// If we wanted to check for how many days the italianEatery is open per week.
// console.log(Object.keys(openingHours).length); === console.log(properties.length);

// for (const day of Object.keys(openingHours)) { ===  for (const day of properties) {
//   console.log(day); // This logs one at a time : thu fri sat
// }

// If we wanted to check the number of days the italianEatery is open per week.
// And also log those days:
let openStr = `We are open on ${properties.length} days: `;

for (const day of properties) {
  openStr += `${day}, `;
}
console.log(openStr); // We are open on 3 days: thu, fri, sat,

// Looping Objects :  VALUES

const values = Object.values(openingHours);
console.log(values);

// Looping Objects : ENTRIES = (KEYS + VALUES) --- TO LOOP OVER AN ENTIRE OBJECT.
// We use .entries() method -- we used it on Arrays before.
// .entries() method on an array returns index number of an element, and the element itself.
// But on Objects .entries() works differently.
// And we won't be calling the .entries() method on the Object itself.

// LOOPING OVER ENTIRE OBJECT : EXAMPLE

const entries = Object.entries(openingHours);

// console.log(entries);

// for (const [key, value] of entries) {
//   console.log(`On ${key} we open at ${value.open} and close at ${value.close}`);
// }

// On further destructuring the above code
for (const [key, { open, close }] of entries) {
  console.log(`On ${key} we open at ${open} and close at ${close}`);
}
