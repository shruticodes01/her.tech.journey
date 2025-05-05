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
