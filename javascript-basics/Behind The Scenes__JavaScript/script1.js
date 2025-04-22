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

const jonas = {
  year: 1991,
  calcAge: function () {
    console.log(this); // Object { year: 1991, calcAge: calcAge() }
    console.log(2037 - this.year);
  },
};
jonas.calcAge();

// Example explaining why it is not the object inside which we wrote the method, but the object calling the method.
// function is just a value, therefore we can say that : matilda.calcAge = jonas.calcAge
// Basically we copy calcAge() method from jonas and apply to matilda.

const matilda = {
  year: 2017,
};

matilda.calcAge = jonas.calcAge; // copying calcAge() method from jonas to matilda. Also, called as method borrowing.
matilda.calcAge(); // Object { year: 2017, calcAge: calcAge() } script.js:207:13 // 20 script.js:208:13

// After copying/borrowing calcAge() method from jonas object
// matilda.calcAge();
// first logs : console.log(this) = Object { year: 2017, calcAge: calcAge() } script.js:207:13
// Next it logs : console.log(2037 - this.year); = 2037 - 2017 // 20 script.js:208:13
// Even though calcAge method is written inside the jonas object, if matilda object calls the calcAge method - it points to matilda.
// Therefore, based on the above example we can conclude that this Keyword always points to object calling the method.

// Also, this shows that the value of this keyword in NOT static, it changes depending on how the function is called.

const f = jonas.calcAge; // Now variable f = calcAge() function, which is written inside the jonas object.
f();
// when we call f()
// first it logs : console.log(this); // undefined
// Next it logs : console.log(2037 - this.year); // Uncaught TypeError: this is undefined
// Because f is now a regular function/simple function, it is not attached to any object and therefore has no OWNER to this function.
// So, in case of a simple function call : this = undefined (in strict mode)
