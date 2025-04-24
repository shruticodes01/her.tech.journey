'use strict';

// this Keyword Concepts

// this Keyword outside of any function - in the global scope : this = Window Object

console.log(this); // In the global scope this Keyword is the Window Object

// this Keyword inside a regular function call : this = undefined (in strict mode)

const calcAge1 = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this); // undefined // In a strict mode, inside a regular function call, this Keyword is undefined.
  // WITHOUT strict mode, it points to the Global Object -- Window Object in case of a browser
};
calcAge1(1991);

// this Keyword inside an Arrow function : this = this Keyword of a surrounding parent function / parent scope.

const calcAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this); // it points to the Global Object -- Window Object in case of a browser.
  // As Arrow function does NOT get its own this Keyword, it simply uses lexical this Keyword.
  // Which means it uses this Keyword from its parent function or from its parent scope.
  // As the calcAgeArrow function is NOT surrounded by any other function, it picks this Keyword from the Global Scope.
  // Therefore, it points to the Global Object, which is the Window Object in case of browsers.
};
calcAgeArrow(1980);

// this Keyword inside a method : this = object that is calling the method.
// Basicallly, object is the OWNER of the method.

// NOTE: this Keyword points to the object that is calling the method.
// And that does NOT mean that this Keyword points to the Object in which we wrote the method.
// In the below example, this Keyword points to the jonas object because it is the jonas object calling the calcAge() method - jonas.calcAge();

// const jonas = {
//   year: 1991,
//   calcAge: function () {
//     console.log(this); // Object { year: 1991, calcAge: calcAge() }
//     console.log(2037 - this.year);
//   },
// };
// jonas.calcAge();

// Example explaining why it is not the object inside which we wrote the method, but the object calling the method.
// function is just a value, therefore we can say that : matilda.calcAge = jonas.calcAge
// Basically we copy calcAge() method from jonas and apply to matilda.

// const matilda = {
//   year: 2017,
// };

// matilda.calcAge = jonas.calcAge; // copying calcAge() method from jonas to matilda. Also, called as method borrowing.
// matilda.calcAge(); // Object { year: 2017, calcAge: calcAge() } script.js:207:13 // 20 script.js:208:13

// After copying/borrowing calcAge() method from jonas object
// matilda.calcAge();
// first logs : console.log(this) = Object { year: 2017, calcAge: calcAge() } script.js:207:13
// Next it logs : console.log(2037 - this.year); = 2037 - 2017 // 20 script.js:208:13
// Even though calcAge method is written inside the jonas object, if matilda object calls the calcAge method - it points to matilda.
// Therefore, based on the above example we can conclude that this Keyword always points to object calling the method.

// Also, this shows that the value of this keyword in NOT static, it changes depending on how the function is called.

// const f = jonas.calcAge; // Now variable f = calcAge() function, which is written inside the jonas object.
// f();
//when we call f()
//first it logs : console.log(this); // undefined
//Next it logs : console.log(2037 - this.year); // Uncaught TypeError: this is undefined
//Because f is now a regular function/simple function, it is not attached to any object and therefore has no OWNER to this function.
//So, in case of a simple function call : this = undefined (in strict mode)

// Pitfalls of this Keyword related to regular functions and arrow functions

// var firstName = 'Steven'; // BAD PRACTICE
// const jonas = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this); // Object { year: 1991, calcAge: calcAge() }
//     console.log(2037 - this.year);
//   },
//   greet: () => {
//     console.log(this); // Window  script1.js:85:13
//     console.log(`Hey ${this.firstName}`); // Hey Steven
//   },
// };
// jonas.greet();

// Hey undefined script1.js:86:13
// So, even though it is the jonas object calling the greet method, it doesn't work because greet() is an arrow function
// And Arrow functions do NOT get its own this Keyword. It uses this Keyword from its surrounding/parent function or parent scope.

// Note: const jonas = {key-properties : value; inside jonas object} does NOT make a code BLOCK.
// It is an Object Literal - It is how we define objects.
// And, object jonas and all the properties inside it are in the global scope which includes the greet() method.
// As arrow functions picks this Keyword from its parent function / scope
// In the above example, parent of the greet() method is the global scope ==> it points to the Window Object.
// And when we try to access a property that doesn't exist on a certain object we do NOT get an error, it is simply undefined
// In the above example, there is NO firstName property on the Window Object. Hence, it is undefined.

// But if we created a firstName variable with var it would log the value given to it.
// In this case it logs : Hey Steven
// Because variables declared with var create properties on the Window Object because of Hoisting.
// And this Keyword inside the greet() method is the Window Object.

// As a Best Practice never use arrow function as a method, even if you are not using the this keyword.

// But we can use arrow function as a child function inside a method. This will make the method its parent function.
// And that will give arrow function access to the object that is calling the method.

// Pitfall of this Keyword when we have a function inside a method

// const jonas0 = {
//   firstName: 'Jonas',
//   year: 1991,
//   calcAge: function () {
//     console.log(this); // Object { year: 1991, calcAge: calcAge() }
//     console.log(2037 - this.year);

//     const isMillenial = function () {
//       console.log(this); // Undefined // Because inside a regular / simple function call, this = undefined
//       console.log(this.year >= 1981 && this.year <= 1996); // Uncaught TypeError: this is undefined
//     };
//     isMillenial(); // this is a regular function call even though it happens inside of a method.
//   },
// };
// jonas0.calcAge();

// Solution 1 - Pre ES6 solution : creating a variable self or that

const jonas1 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this); // Object { year: 1991, calcAge: calcAge() }
    console.log(2037 - this.year);

    const self = this; // For referencing this Keyword outside of regular function variable names, self or that are often used.
    // Outside of millenial function, we have access to this keyword, which is in this case object jonas1.
    const isMillenial = function () {
      console.log(self); // And now through scope chain, here self = const self which is = this keyword of object jonas1.
      console.log(self.year >= 1981 && self.year <= 1996);
    };
    isMillenial(); //a regular function call, when using self variable for referencing this Keyword results in // true
    // Because through self variable it has an access to the object jonas1.
  },
};

jonas1.calcAge();

// Solution 2 : ES6 Solution : Using arrow function.

const jonas2 = {
  firstName: 'Jonas',
  year: 1991,
  calcAge: function () {
    console.log(this); // Object { year: 1991, calcAge: calcAge() }
    console.log(2037 - this.year);

    // Arrow function uses this keyword of the parent scope, in this case calcAge() method is its parent function.
    // And in the current example, this Keyword inside the calcAge() method is the jonas2 object.
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },
};
jonas2.calcAge();

// arguments Keyword - array like object accessible inside functions that contains the values of the arguments passed to that function.

// Functions also get access to the arguments keyword / arguments object -- Function Declaration and Function Expression
// arguments keyword is only available in regular functions
// It is useful when we need a function to accept more parameters than we actually specified.

const addExpression = function (a, b) {
  console.log(arguments);

  return a + b;
};
addExpression(2, 5); // we have always specified the exact arguments that are specified in the list of parameters.
// In this case : const addExpression function gets two parameters (a, b), we passed two arguments when calling in : addExpression(2, 5)

addExpression(2, 5, 8, 12); // But it is also legal to add more arguments, they will not have a name, but they exist.
// Therefore we can use them in the functions. Ex : we could use loop, and loop over the arguments array and add all the numbers.

function addDeclaration(a, b) {
  console.log(arguments);

  return a + b;
}
addDeclaration(3, 6);
addDeclaration(3, 6, 9, 12);

// NOTE:
// Arrow functions DO NOT get arguments Keyword

const addArrowFunc = (a, b) => {
  console.log(arguments); // Uncaught ReferenceError: arguments is not defined

  return a + b;
};
// addArrowFunc(2, 5); // Uncomment to check the above mentioned error

let temp = 23.7;

temp = temp + 5;
round(temp);
