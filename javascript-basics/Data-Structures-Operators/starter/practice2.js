'use strict';

//Questions : Why does it take the value even though the numGuests property does NOT exist.

// Short-Circuiting --- using the Logical, AND and the OR Operators
// Logical Operators can:
// Use ANY data type, return ANY data type, do short-cicuiting / short-circuit evaluation

console.log('-----OR-----'); // OR Operator and its Short-Circuit Evaluation

// OR Operator --- Using non-Boolean values as the operands
console.log(3 || 'Jonas'); // 3 -- first operand is a truthy value, so second operand is NOT evaluated.
// The result of the OR Operator does NOT always have to be BOOLEAN

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
const guests1 = italianEatery.numGuests ? italianEatery.numGuests : 10;
console.log(guests1); // 10
// italianEatery.numGuests does NOT exist, so it is undefined
// Therefore, 10 is the result of the ternary operator

// But, If we had set a value on italianEatery.numGuests = 23; then it would log 23.
// italianEatery.numGuests = 23;
// const guests1 = italianEatery.numGuests ? italianEatery.numGuests : 10;
// console.log(guests1); // 23

// Using short-circuiting and the OR Operator instead of Ternary Operator to set Default Values.
const guests2 = italianEatery.numGuests || 10;
console.log(guests2); // 23
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

console.log('-----AND-----'); // AND Operator and its Short-Circuit Evaluation

// Works exact opposite of OR Operator.

// AND Operator returns the value of FIRST falsy operand.
// If all values are truthy, the value of the LAST operand is returned

console.log(0 && 'Jonas'); // 0
// Value of first operand is 0, which is a falsy value. AND Operator returns the value of FIRST falsy Operand.

console.log(7 && 'Jonas'); // Jonas
// If all the values are true, the AND Operator returns the value of the LAST Operand.

console.log('Hello' && 23 && null && 'Jonas'); // null
// In this operation, null is the FIRST falsy value.

// Check if certain property or value exists with the If__Else Statement
// First we check if the method orderPizza exists
// And then, we execute it
if (italianEatery.orderPizza) {
  italianEatery.orderPizza('Mushrooms', 'Spinach');
}

// Check if certain property or value exists with the AND Operator and its Short-Circuit Evaluation

italianEatery.orderPizza && italianEatery.orderPizza('Truffles', 'Parmesan');
