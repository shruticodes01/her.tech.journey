'use strict';

// SCOPING CONCEPTS

// Defined in the global scope. Each function creates its own scope which is equivalent to the variable environment of its Execution Context.
// function calcAge(birthYear) {
//   const age = 2037 - birthYear;

//   function printAge() {
//     let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//     console.log(output);

//     //block scope inside the printAge()
//     if (birthYear >= 1981 && birthYear <= 1996) {
//       var millenial = true;

//       //Declaring the same variable that is in the Global Scope
//       //We can have same name for different/multiple variables as long as they are defined in DIFFERENT SCOPES.
//       //This works the same as different functions having same parameter names.
//       //Because each parameter is defined in the scope of that particular function.

//       //Creating NEW variable with the same name as parent/outer scope's variable.
//       const firstName = 'Steven'; // logging the str after this will result as: Oh, and you are a millenial, Steven.
//       //Because JavaScript first looks for the variable name in the same/current/local scope before performing variable lookup in the scope chain
//       //Only if it cannot find the variable in the same/local scope, it looks up the scope chain, one parent scope at a time
//       //NOTE: Outside of this Block Scope, the firstName has a value - 'Jonas'

//       // const output = 'NEW OUTPUT!'; // Logging results as: Jonas, you are 46, born in 1991 script.js:51:13

//       //Reassigning value to the variable defined in its parent/outer scope.
//       output = 'NEW OUTPUT!'; // Logging results as : NEW OUTPUT! script.js:51:13

//       const str = `Oh, and you are a millenial, ${firstName}`;
//       console.log(str); // JavaScript will look up the scope chain and will find the variable in the Global Scope which is the Outermost scope.

//       // Starting ES6, functions are also Block Scoped.
//       function add(a, b) {
//         return a + b;
//       }
//     }
//     // console.log(str); // Uncaught ReferenceError: str is not defined
//     //Because let and const are block scoped. That means they are available only inside the block in which they were created/defined.

//     console.log(millenial); // This will work. Because var is pre ES6 variable. It is function scoped.
//     //Its define inside the printAge() function, and we are trying to access it in the printAge() itself.
//     //Therefore, the scope of the variable millenial is the entire printAge function.

//     //add(2, 3);// Uncaught ReferenceError: add is not defined
//     //Because the scope of add() in STRICT MODE is only the block in which it was defined.
//     //As it is inside the if statement, its scope is limited to the if statements's block scope
//     //If we remove the STRICT MODE, it will be function scoped and will accessible inside the scope of printAge().

//     console.log(output); //Reassigning a new value to the variable that was already defined in the parent scope stores new assigned value.
//     //But creating a new variable with the same name as parent/outer scopes variable will log the old value that assigned in the parent scope.
//   }

//   printAge();
//   //On executing the printAge(), JavaScript engine is unable to find variable age and the parameter birthYear in its local scope
//   //Hence, it does the Variable Lookup, and looks up in the scope chain to find the variable age and the parameter birthYear in its parent's scope
//   //Parameter of a function works just like normal variables.
//   //Scope of a variable is the entire region of the code in which that variable is accessible.
//   //So, scope of the age variable is the entire region of the calcAge() function, From //const age = 2037 - birthYear;//  until  //return age;//
//   //This includes in all the child scopes, which includes inside the printAge() function as well.
//   return age;
// }

//Global Variable
// const firstName = 'Jonas';

//Calling calcAge()
//NOTE: function calcAge() is able to access firstName from outside of its local scope
//because the parent scope of the calcAge function is the Global scope. firstName is in the global scope and is accessible everywhere.
//Eventhough the variable is defined after the calcAge function,
//it works because the code in the function is executed only when we call the function.
//And we call the calcAge function after declaring the firstName variable.
// calcAge(1991);

//But the variable age is NOT accessible outside the calcAge()scope.
//Because according scope chain - child scope/inner scopes have access to the variables declared in the parent scope/outer scopes.
//But the parent scope/outer scope has NO ACCESS to the variables declared in the child scope/inner scope.
// console.log(age); //Uncaught ReferenceError: age is not defined
//And for the same reason we cannot call the printAge(), as it can be accessed only in its local scope or its parent scope - calcAge() scope.
// printAge(); //Uncaught ReferenceError: printAge is not defined

//In the Global Scope we DO NOT have access to the variables defined in any other scopes.

// HOISTING CONCEPTS

// HOISTING with Variables

// console.log(personName); // undefined
// console.log(job); // Uncaught ReferenceError: can't access lexical declaration 'job' before initialization // Its in the Temporal Dead Zone.
// console.log(year); // Uncaught ReferenceError: can't access lexical declaration 'year' before initialization // Its in the Temporal Dead Zone.

// var personName = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// HOISTING with Functions

console.log(addDecl(2, 5)); // 7
// Only function Declarations are accessible even before it is actually declared due to JavaScript's mechanism called Hoisting.

// Whereas, fucntion Expression and Arrow function are simply variables.
// And as we know variables declared with let and const are not Hoisted in practice.
// If called before its actually declared it gives the following error:

// console.log(addExpr(2, 5)); // Uncaught ReferenceError: can't access lexical declaration 'addExpr' before initialization.
// Because we are calling the function expression addExpr, declared with const from the Temporal Dead Zone(Meaning before its actually declared).

// console.log(addArrow(2, 5)); // Uncaught ReferenceError: can't access lexical declaration 'addArrow' before initialization
// Because we are calling the arrow function addArrow, declared with const from the Temporal Dead Zone(Meaning before its actually declared).

function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

const addArrow = (a, b) => a + b;

// If we declare function expression and arrow function with var

//LOGGING function Expression addExpr and arrow function addArrow when declared with var

// console.log(addExpr(2, 5)); // Uncaught TypeError: addExpr is not a function
// console.log(addArrow(2, 5)); // Uncaught TypeError: addArrow is not a function

// This is because any variable declared with var, if we call it before its actually declared, has an initial value of undefined.
// Therefore, we calling something undefined, that is why it gives an error that addExpr and addArrow are not functions.
// Because, it basically looks like : undefined(2,5) // TypeError: undefined is not a function

// var addExpr = function (a, b) {
//   return a + b;
// };

// var addArrow = (a, b) => a + b;

// Example to demonstrate a pitfall of HOISTING
// when number of products is 0 i.e; !numProducts, we call the function declaration deleteShoppingCart.
// But it logs: All products deleted!
// Because variables declared with var when called before its actual declaration are undefined.
// And undefined is a falsy value, so even though numProducts = 10, it is undefined, as its being accessed before its actual declaration.
if (!numProducts) {
  deleteShoppingCart();
}

var numProducts = 10;

function deleteShoppingCart() {
  console.log('All products deleted!');
}

// Example to understand difference between var, let and const

var x = 1;
let y = 2;
const z = 3;

// In the window object we can see a property x = 1. Because variables declared with var create a property on the global window object.
// But we can't see y = 2 or z = 3. This is because variables created with let and const do not create properties on the window object.

// To check if x, y and z are window property
// console.log(x === window.x); // true
// console.log(y === window.y); // false
// console.log(z === window.z); // false
