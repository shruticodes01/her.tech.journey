'use strict';

// Short-Circuiting --- using the Logical, AND and the OR Operators
// Logical Operators can:
// Use ANY data type, return ANY data type, do short-cicuiting / short-circuit evaluation

// console.log('-----OR(||)-----'); // OR Operator and its Short-Circuit Evaluation

// // OR Operator --- Using non-Boolean values as the operands
// console.log(3 || 'Jonas'); // 3 -- first operand is a truthy value, so second operand is NOT evaluated.
// // The result of the OR Operator does NOT always have to be BOOLEAN

// Short-Circuiting in the OR Operator means that:
// if the first operand in the OR operator has a truthy value, then the second operand will NOT even be evaluated.

// Examples of OR Operator with different data types

console.log('' || 'Jonas'); // Jonas
// first operand '' (empty string) is a falsy value, so the second operand is evaluated which is a truthy value

console.log(true || 0); // true
// first operand true is a truthy value, hence second operand is NOT evaluated (0 is a falsy value).

console.log(undefined || null); // null
// first operand undefined is a falsy value, so the second operand is evaluated which is also a falsy value

console.log(undefined || 0 || '' || 'Hello' || 23 || null); // Hello
// Here, 'Hello' is the first truthy value in the chain of OR operations.
// undefined, 0 and the empty string ('') are all falsy values
// Therefore, 'Hello' will short-circuit the entire evaluation and will be the returned value
// Because the OR operator results in true, if even one operand is true.

// Define a variable based on the numGuests property and set a default value if this doesn't exist.
// First check if numGuests exist. If exists it should be italianEatery.numGuests else it should be 10.
// const guests1 = italianEatery.numGuests ? italianEatery.numGuests : 10;
// console.log(guests1); // 10
// // italianEatery.numGuests does NOT exist, so it is undefined
// // Therefore, 10 is the result of the ternary operator

// // But, If we had set a value on italianEatery.numGuests = 23; then it would log 23.
// // italianEatery.numGuests = 23;
// // const guests1 = italianEatery.numGuests ? italianEatery.numGuests : 10;
// // console.log(guests1); // 23

// // Using short-circuiting and the OR Operator instead of Ternary Operator to set Default Values.
// const guests2 = italianEatery.numGuests || 10;
// console.log(guests2); // 23
// italianEatery.numGuests is undefined -- falsy value
// Therefore, the second value is the result of the OR Operator -- which is the default value, 10

// When numGuest property has been already given a value.

// italianEatery.numGuests = 23;
// const guests2 = italianEatery.numGuests || 10;
// console.log(guests2); // 23
// We have set a value of 23 on italianEater.numGuests which is a truthy value.
// Next we use the OR Operator to evaluate, and then store that value in the variable guests2
// So it looks like, guests2 = 23 || 10.
// Since, 23 is a truthy value, the OR operator will then result in 23.

// console.log('-----AND(&&)-----'); // AND Operator and its Short-Circuit Evaluation

// // Works exact opposite of OR Operator.

// // AND Operator returns the value of FIRST falsy operand.
// // If all values are truthy, the value of the LAST operand is returned

// console.log(0 && 'Jonas'); // 0
// // Value of first operand is 0, which is a falsy value. AND Operator returns the value of FIRST falsy Operand.

// console.log(7 && 'Jonas'); // Jonas
// // If all the values are true, the AND Operator returns the value of the LAST Operand.

// console.log('Hello' && 23 && null && 'Jonas'); // null
// // In this operation, null is the FIRST falsy value.

// // Check if certain property or value exists with the If__Else Statement
// // First we check if the method orderPizza exists
// // And then, we execute it
// if (italianEatery.orderPizza) {
//   italianEatery.orderPizza('Mushrooms', 'Spinach');
// }

// Check if certain property or value exists with the AND Operator and its Short-Circuit Evaluation

// italianEatery.orderPizza && italianEatery.orderPizza('Truffles', 'Parmesan');

// console.log('-----Nullish Coalescing(??)-----'); // NULLISH COALESCING OPERATOR (??) ES 2020

// // When we set Default values with the OR Operator,

// italianEatery.numGuests = 0;
// const guests = italianEatery.numGuests || 10;
// console.log(guests); // 10
// //Here, JavaScript will take the Default value 10 and assign it to guests.
// //Because the OR operator looks for a truthy value, and 0 is a falsy value.
// //Therefore, since the first operand is a falsy value, it will evaluate the second operand.

// // But if we want guests to accept the 0 value on italianEatery.numGuests property
// // Then, we can use the Nullish Coalescing Operator(??).

// const correctGuests = italianEatery.numGuests ?? 10;
// console.log(correctGuests); // 0 // which is the original value on italianEatery.numGuests.
// // But if we remove italianEatery.numGuests = 0; line of code.
// // The correctGuests will then be 10, which is the Default value.
// // Because then the italianEatery.numGuests will be undefined, which is a nullish value.

// // The Nullish Coalescing Operator accepts nullish values instead of falsy values.
// // Nullish values are null and undefined.
// // It does NOT include 0 or an empty string (""). Which means, it will return 0 or an empty string ("")
// // If the first operand has a nullish value, it will continue to evaluate the second operand.

// italianEatery.numGuests = null;
// const correctGuestsNull = italianEatery.numGuests ?? 10;
// console.log(correctGuestsNull); // 10
// // Since, italianEatery.numGuests = null; It Short - Circuits the evaluation here
// // And returns the value of the second operand, which is the Default Value -- 10.
// // But in the previous example, it returned 0, because 0 is NOT a nullish value

// // LOGICAL ASSIGNMENT OPERATOR -- ES 2021

const rest1 = {
  name: 'Capri',
  // numGuests: 20,
  numGuests: 0, // falsy value
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// Assuming we got these restaurant infos from some APIs
// 1) Set Default number of guests for all the restaurant objects -- rest1 and rest2

// using the OR Logical Operator (||)

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;
// console.log(rest1.numGuests); // 20
// console.log(rest2.numGuests); // 10

// console.log('-----OR ASSIGNMENT OPERATOR (||=)-----');
// using the OR Assignment Operator (||=) --- LOGICAL ASSIGNMENT OPERATOR --
// Only if first operand is falsy, it evaluates second operand and assigns it to the first operand.

// rest1.numGuests ||= 10;
// rest2.numGuests ||= 10;

// console.log(rest1.numGuests); // 20 // when, numGuests : 20
// // If we assign 0 on the numGuests property in the rest1 object.
// // It will return Default Value -- 10.
// // Because 0 is a falsy value.
// console.log(rest2.numGuests); // 10

// console.log('-----NULLISH ASSIGNMENT OPERATOR (??=)-----');
// // using the Nullish Assignment Operator (??=) -- only assigns the default value if the first operand is either null or undefined.
// // When numGuests property on rest1 object is 0 ---- numGuests : 0
// rest1.numGuests ??= 10;
// rest2.numGuests ??= 10;
// console.log(rest1.numGuests); // 0
// console.log(rest2.numGuests); // 10

// console.log('-----AND ASSIGNMENT OPERATOR (&&=)-----');

// We need to anonymize the names of the Restaurant owners
// Basically, if the owner property exists, we want to replace the value of owner proper --- 'Giovanni Rossi' with 'Anonymous'

//AND Logical Operator (&&) -- Returns the first falsy value. If both values are truthy it returns the second (right) operand
// rest1.owner = rest1.owner && 'Anonymous';
// rest2.owner = rest2.owner && 'Anonymous';
// console.log(rest1); // Object { name: "Capri", numGuests: 0, owner: undefined } // undefined
// console.log(rest2); // Object { name: "La Piazza", owner: "Anonymous", numGuests: 10 } // "Anonymous"

//AND Assignment Operator (&&=) -- works only if the left/first operand is truthy.
// rest1.owner &&= 'Anonymous';
// rest2.owner &&= 'Anonymous';
// console.log(rest1); // Object { name: "Capri", numGuests: 0 }
// console.log(rest2); // Object { name: "La Piazza", owner: "Anonymous", numGuests: 10 } // Anonymous

// If the left/first operand is truthy,
// the AND Assignment Operator will assign it a value of right/second operand
// In the above example, the owner property on the rest2 object exists.
// Therefore, the owner property on the rest2 object is assigned string 'Anonymous'.

// For__of Loop -- Looping over arrays

const menu = [...italianEatery.starterMenu, ...italianEatery.mainMenu];
console.log(menu);

for (const item of menu) console.log(item);

// This loops over an entire menu array, and in each iteration
// It gives us access to the current array element (meaning, current item of the menu array)
// So, when we log item to console, it logs each element / item of the menu array one by one
// Because this item variable is always the current element in each iteration.

// we can use continue and break keyword in the for__of loop

// If you want to get current index along with current element --- we apply method on menu -- menu.entries()
for (const item of menu.entries()) {
  console.log(item); // Creates an array for each item with item index and item name
  // Array [ 0, "Focaccia" ] Array [ 1, "Bruschetta" ] Array [ 2, "Garlic Bread" ] Array [ 3, "Caprese Salad" ] Array [ 4, "Pizza" ] Array [ 5, "Pasta" ] Array [ 6, "Risotto" ]
}
console.log(...menu.entries());

// For printing menu --- Ex: 1: Focaccia 2: Bruschetta ....
// for (const item of menu.entries()) {
//   // console.log(`${item[0] + 1}: ${item[1]}`);
// }
// console.log(...menu.entries());

// Using destructuring assignment in place of item variable for the printing menu
for (const [i, el] of menu.entries()) {
  console.log(`${i + 1}: ${el}`);
}
