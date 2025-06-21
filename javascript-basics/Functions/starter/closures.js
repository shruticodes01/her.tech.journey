'use strict';

// A closure is the combination of a function and the lexical environment within which that function was declared.
// This environment consists of any variables that were in-scope at the time the closure was created.

// NOTE: We don't create closures manually, the happen automatically in certain situations.

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

// So, the booker() function has access to the passengerCount variable
// because passengerCount is defined in the scope in which the booker() function was created.

console.dir(booker); // Checks the internal property of the booker function.

// We DON'T need to return a function from another function to create a CLOSURE

// Example 1 -- Reassigning a function creates a Closure even if they are not returning functions

let f;
const g = function () {
  const a = 23;
  f = function () {
    console.log(a * 2);
  };
};

const h = function () {
  const b = 777;
  f = function () {
    console.log(b * 2);
  };
};

g(); // dispersed function -- result of this is a = 23 and f = function()
f(); // 46
// The f function does close-over any variables in the Execution Context in which it was defined.
// Even though technically variable f was declared in the Global scope,
// but as it was assigned a value of function inside the g function, It was defined/created inside g function.
// it was able to access the a variable defined inside g function, even after g function was no longer available.
console.dir(f); // Closure contains the value of a

// Reassigning f function
h();
f(); // 1554
// So, the f function is reassigned a value inside the h function, and so it was redefined/recreated inside the h function
// and so it also closed-over the Variable Environment of h,
// which enables it to access b variable defined inside h function, even after h function was no longer available

console.dir(f);
// After reassigning f to a function inside the h function, Closure contains the value of b.

// Example - 2 -- setting a Timer

const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000); // 1st parameter is a callBack function, 2 parameter is time in milliseconds
  // So, the function inside setTimeout method will get executed/called after 1000ms

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000; // Closures also have priority over the Scope Chain.
// Which can be witnessed on commenting out the perGroup variable inside the boardPassengers function the callBack function logs:
// First:
// -- Will start boarding in 3 seconds
// And 3 seconds later it logs:
// -- We are now boarding 180 passengers
// -- There are 3 groups, each with 1000 passengers

// NOTE: the callBack function inside the setTimeout(callBack, time) method
// is created in the scope of boardPassengers function.

boardPassengers(180, 3);
// First logs : Will start boarding 180 passengers in 3 seconds
// After 3 seconds logs the callBack function :
// We are now boarding 180 passengers
// There are 3 groups, each with 60 passengers

// What happens when boardPassengers() function is executed?

// first it creates perGroup variable,
// Next it runs setTimeout method, and registers the callBack function
// After which, it runs console.log() and logs : Will start boarding 180 passengers in 3 seconds
// Then after 3 seconds the callBack function is executed, which logs to console:
// We are now boarding 180 passengers
// There are 3 groups, each with 60 passengers

// Which means, the callBack function was executed independently, after the boardPassengers function was unavailable.
// Because of Closure, callBack function has access to all the variables inside boardPassengers function.
// which enables the callBack function to execute independently
// NOTE : Closure stores variables defined inside the parent function as well as its arguments.
// Because arguments are the local variables of a function
