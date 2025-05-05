'use strict';

// SETS ---- ES6

// Set is a collection of unique values --- Set can never have duplicates.
// Set can have mixed data types

// Example: Creating a Set ----> new Set(iterable)
// NOTE: most common iterable is an Array

const ordersSet = new Set([
  'Pasta',
  'Pizza',
  'Pizza',
  'Risotto',
  'Pasta',
  'Pizza',
]);
console.log(ordersSet); // Set(3) [ "Pasta", "Pizza", "Risotto" ] // All duplicates are removed
// It looks similar to an ARRAY but is still very different because:
// Elements inside a set are unique
// The order of elements in set is irrelevant --- They do NOT have indexes

// Strings are also Iterable, so we can pass in a string as well
console.log(new Set('UNIQUE')); // Set(5) [ "U", "N", "I", "Q", "E" ]
console.log(new Set('Unique')); // Set(6) [ "U", "n", "i", "q", "u", "e" ]
// NOTE: its case-sensitive.

// Set can also be empty
console.log(new Set()); // Set []

// Use Cases of Set

// 1) We can get size of a Set
console.log(ordersSet.size); // 3
// Example: based on italianEatery Object:
// if we have an Array of all orders, then the Set of those orders is basically different unique meals.
// And the size basically tells us how many different meals will be cooked.

// 2) We can check if a certain element is in a Set by applying has() method on the Set
// The has()method is similar to includes() method on an Array
// The has() method on a Set returns a Boolean Value
console.log(ordersSet.has('Pizza')); // true
console.log(ordersSet.has('Bread')); // false

// 3) Add new elements to a Set using add() method
// Example: If italianEatery receives two orders of Garlic Bread
// So, even though we add ‘Garlic Bread’ twice -- the Set still adds 'Garlic Bread' only once.
// Because Set is a collection of unique values
ordersSet.add('Garlic Bread');
ordersSet.add('Garlic Bread');
console.log(ordersSet); // Set(4) [ "Pasta", "Pizza", "Risotto", "Garlic Bread" ]

// 4) We can delete elements from a Set using the delete() method
ordersSet.delete('Risotto');
console.log(ordersSet); // Set(3) [ "Pasta", "Pizza", "Garlic Bread" ]

// 5) We can delete all elements from a Set using the clear() method
// ordersSet.clear();
// console.log(ordersSet); // Set []

// 6) Sets are also Iterable, so we can loop over them
for (const order of ordersSet) {
  console.log(order);
}

// EXAMPLE:

const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];

// If we want to know only the different job positions at the italianEatery
// We use Sets to get only the name of job positions
// const staffUnique = new Set(staff);
// console.log(staffUnique); // Set(3) [ "Waiter", "Chef", "Manager" ]
// console.log(new Set(staff).size); // 3 --- Number of unique positions

// Since Set is just a unique collection of values and we can’t do much with it.
// We can convert a Set into an Array for further computations
// And can do so using the SPREAD Operator.
const staffUnique = [...new Set(staff)];
console.log(staffUnique); // Array(3) [ "Waiter", "Chef", "Manager" ]

// How many different letters there are in a String
console.log(new Set('coconutoctopus').size); // 7

// SETS --- ES 2025 MORE METHODS

const italianFoods = new Set([
  'pasta',
  'gnocchi',
  'tomatoes',
  'olive oil',
  'garlic',
  'basil',
]);

const mexicanFoods = new Set([
  'tortillas',
  'beans',
  'rice',
  'tomatoes',
  'avocado',
  'garlic',
]);

// Application containing italian and mexican food,

// 1) intersection() method -- we want to find out which ingredients are common for both?
// Note: order of Sets does NOT matter ---  mexicanFoods.intersection(italianFoods) -- will work too.
const commonFoods = italianFoods.intersection(mexicanFoods);
console.log('Intersection:', commonFoods); // Intersection: Set [ "tomatoes", "garlic" ]

// Converted to an Array
const commonFoodsArr = [...italianFoods.intersection(mexicanFoods)];
console.log('Intersection:', commonFoodsArr); // Intersection: Array [ "tomatoes", "garlic" ]

// 2) union() Method -- Gives all the elements of both the Sets WITHOUT Duplicates
const mexicanItalianFusion = [...mexicanFoods.union(italianFoods)]; // Already converted to an Array
console.log('Union:', mexicanItalianFusion);
// Union: Array(10) [ "tortillas", "beans", "rice", "tomatoes", "avocado", "garlic", "pasta", "gnocchi", "olive oil", "basil" ]

// Combine two arrays and get their unique value
const mexicanItalianFusionArr = [
  ...new Set([...mexicanFoods, ...italianFoods]),
];
console.log(mexicanItalianFusionArr);

// 3) difference() Method –  gives us all the unique elements that are present only in the first set but not in the second set.
// -- So, the order in which we specify the Sets matter.
const uniqueItalianFoods = italianFoods.difference(mexicanFoods);
console.log(uniqueItalianFoods); // Set(4) [ "pasta", "gnocchi", "olive oil", "basil" ]

const uniqueItalianFoodsArr = [...italianFoods.difference(mexicanFoods)];
console.log(uniqueItalianFoodsArr); // Array(4) [ "pasta", "gnocchi", "olive oil", "basil" ]

const uniqueMexicanFoodsArr = [...mexicanFoods.difference(italianFoods)];
console.log(uniqueMexicanFoodsArr); // Array(4) [ "tortillas", "beans", "rice", "avocado" ]

// 4) symmetricDifference() Method – Gives us elements from either sets, except the ones that are common to both.
const withoutTomatoGarlic = [...italianFoods.symmetricDifference(mexicanFoods)];
console.log(withoutTomatoGarlic);
// Array(8) [ "pasta", "gnocchi", "olive oil", "basil", "tortillas", "beans", "rice", "avocado" ]

// 5) isDisjointFrom() Method – checks whether one set is completely different from the another.
// Meaning there are no common elements – returns a Boolean value

const noCommonFoods = italianFoods.isDisjointFrom(mexicanFoods);
console.log(noCommonFoods); // false
