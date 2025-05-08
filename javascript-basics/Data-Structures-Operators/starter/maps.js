'use strict';
// Maps -- ES6 -- new Map()

// Create a Restaurant Map
// So, create an empty map
const restMap = new Map();
console.log(restMap); // Map(0)

// 1) Use set() Method, to fill up the Map -- set() method returns updated Map
restMap.set('name', 'Classico Italiano');
restMap.set(1, 'Firenze, Italy');
restMap.set(2, 'Lisbon, Portugal');
console.log(restMap);
// Map(3) { name → "Classico Italiano", 1 → "Firenze, Italy", 2 → "Lisbon, Portugal" }

// And we can keep updating the map by chaining the set() method

restMap
  .set('categories', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('open', 11)
  .set('close', 23)
  .set(true, 'We are open :D')
  .set(false, 'We are closed :(');
console.log(restMap);
// Map(8) { name → "Classico Italiano", 1 → "Firenze, Italy", 2 → "Lisbon, Portugal", categories → (4) […], open → 11, close → 23, true → "We are open :D", false → "We are closed :(" }

// 2) Use get() Method, to read data from a Map. It is available on all the Maps
// We need to pass in the name of the key -- Data type of the key matters!
console.log(restMap.get('name')); // Classico Italiano
console.log(restMap.get(true)); // We are open :D

const time = 21;
console.log(
  restMap.get(time > restMap.get('open') && time < restMap.get('close')) // is the current time between 11 and 23
); // We are open :D

// time > restMap.get('open') &&  time < restMap.get('close') –  will return a boolean value
// Therefore, the result of the end operation will be either true/false
// Which will then map to either key true or key false.

// 3) Use has() Method, to check if a Map contains a certain key.
// Returns a boolean value.
console.log(restMap.has('categories')); // true

// 4) delete() Method -- Delete elements from the Map, deletes based on key
restMap.delete(2);
console.log(restMap);
// Map(7) { name → "Classico Italiano", 1 → "Firenze, Italy", categories → (4) […], open → 11, close → 23, true → "We are open :D", false → "We are closed :(" }

// 5) size property
console.log(restMap.size); // 7

// 6) clear() Method
// restMap.clear();
// console.log(restMap); // Map(0)

// Use Arrays or Objects as Map keys
restMap.set([1, 2], 'Test');
console.log(restMap.get([1, 2])); // undefined
// restMap.get([1, 2]) ---
// So, the array [1, 2] called by get()Method is NOT the same as the key set on the restMap
// They are NOT the same Object in the HEAP

// To make Array work as a Map key:
const mapArr = [1, 2];
restMap.set(mapArr, 'Test');
console.log(restMap.get(mapArr)); // Test

// We can do the same with DOM elements
restMap.set(document.querySelector('h1'), 'Heading');
console.log(restMap);

// MAPS -- Iterations

// 1) Creating a new Map() by passing in an Array -- instead of set() Method.
// -- This Array can contain multiple Arrays.
// -- The first position in each of these Arrays will be the ---  Key

// Example : Implementing a quiz

const question = new Map([
  ['question', 'What is the best programming language in the world?'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'Correct 🎉'],
  [false, 'Try again!'],
]);
console.log(question);
// Map(7) { question → "What is the best programming language in the world?", 1 → "C", 2 → "Java", 3 → "JavaScript", correct → 3, true → "Correct 🎉", false → "Try again!" }

// NOTE: The above ARRAY structure is the same as the ARRAY structure returned on Object.entries().
// --- An Array of Arrays
console.log(Object.entries(openingHours)); // Array(3) [ (2) […], (2) […], (2) […] ]

// ​0: Array [ "thu", {…} ] -- 0: "thu" 1: Object { open: 12, close: 22 }
// 1: Array [ "fri", {…} ] -- 0: "fri" 1: Object { open: 11, close: 23 }
// 2: Array [ "sat", {…} ] -- 0: "sat" 1: Object { open: 0, close: 24 }
// So, here Array values on position 1 are the Keys --- "thu" "fri" and "sat"
// And on position 2 are the Values of those Keys.

// 2) Convert Object to Map
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap); // Map(3) { thu → {…}, fri → {…}, sat → {…} }
// 0: thu → Object { open: 12, close: 22 }
// 1: fri → Object { open: 11, close: 23 }
// 2: sat → Object { open: 0, close: 24 }

// 3) Maps are Iterables

// Print the question
console.log(question.get('question'));

// Using for__loop to print the Answer Options from the question Map
for (const [key, value] of question) {
  if (typeof key === 'number') {
    console.log(`Answer ${key}: ${value}`);
  }
}

// Converting user response to a number
// const answer = Number(prompt('Your Answer'));

//Generate boolean value, answer === 3 is true
//question.get(true); true is key whose value is 'Correct 🎉'
// console.log(question.get(answer === question.get('correct')));

// Converting Map to an Array -- using the SPREAD Operator

const questionArr = [...question];
console.log(questionArr); // -- An Array of Arrays
// Array(7) [ (2) […], (2) […], (2) […], (2) […], (2) […], (2) […], (2) […] ]

// Method on Maps that are on both Objects and Arrays
//question.keys() //question.values() //question.entries()

//To be able to use elements on applying method on Maps
//We convert them into an Array and use SPREAD Operator to get individual elements
console.log([...question.keys()]);
console.log([...question.values()]);
