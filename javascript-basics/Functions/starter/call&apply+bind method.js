'use strict';

// The Call and Apply methods

// How to set this Keyword manually, and why do we need to do that?

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],

  // writing methods using enhanced object literal syntax,
  // instead of ---- book: function(){}
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    // book method adds a new object into the bookings array[]
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Jonas Schmedtmann'); // Jonas Schmedtmann booked a seat on Lufthansa flight LH239
lufthansa.book(635, 'John Smith'); // John Smith booked a seat on Lufthansa flight LH635

console.log(lufthansa.bookings); // Array [ {…}, {…} ]
// 0: Object { flight: "LH239", name: "Jonas Schmedtmann" },  1: Object { flight: "LH635", name: "John Smith" }

// If Lufthansa Group created a new airline:

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

// Instead of copy-pasting book method from lufthansa object to eurowings object,
// we can take the book() method from lufthansa object and store it in an external function:

const book = lufthansa.book;

// Here, book is NOT a method anymore.
// It is only a copy of the book() method from the lufthansa object, which makes it a regular function.
// And in a regular function call this Keyword points to undefined in strict mode.

// book(23, 'Sarah Williams'); // Uncaught TypeError: this is undefined

// To make the this Keyword point correctly either to lufthansa object or the eurowings object:
// We have to do it explicitly or manually using function methods
// There are three function methods --- call, apply and bind.
// We can use either one to make this Keyword point correctly:

// Call method
// first argument is what we want the this Keyword to point to.

book.call(eurowings, 23, 'Sarah Williams'); // Sarah Williams booked a seat on Eurowings flight EW23
console.log(eurowings); // ​bookings: Array [ {…} ] 0: Object { flight: "EW23", name: "Sarah Williams" }

book.call(lufthansa, 239, 'Mary Cooper'); // Mary Cooper booked a seat on Lufthansa flight LH239
console.log(lufthansa); // bookings: Array(3) [ {…}, {…}, {…} ] 0: Object { flight: "LH239", name: "Jonas Schmedtmann" }
// 1: Object { flight: "LH635", name: "John Smith" } 2: Object { flight: "LH239", name: "Mary Cooper" }

const swiss = {
  airline: 'Swiss Airlines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Jane Goodall'); // Jane Goodall booked a seat on Swiss Airlines flight LX583
console.log(swiss); // bookings: Array [ {…} ] 0: Object { flight: "LX583", name: "Jane Goodall" }

// Apply method - (Not used so much)
// First argument is the this Keyword
// Does not receive list of arguments after the this Keyword, instead it take arguments provided as an array!.

const flightData = [583, 'Mary Goodall'];
book.apply(swiss, flightData);
console.log(swiss);

// Instead of apply method, we could do call method along with the spread operator:
book.call(swiss, ...flightData);

// bind() Method

// just like the call() method, bind() method also allows us to manually set this Keywords for any function call.
// The difference is that bind() method does not immediately call the function,
// instead it returns a new function where this Keyword is bound.
// It basically sets whatever value we pass into the bind() method

// From the last lecture using call() Method:
// book.call(eurowings, 23, 'Sarah Williams');

// Using bind() Method:
// use bind() Method to create a new function with the this Keyword also set to Eurowings
// IMP: bind() method DOES NOT call the function instead returns a new function

//// Creating booking function for each of the airlines

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

console.log(eurowings);

// Just like in the call() method we can pass in multiple arguments in the bind() method as well.
// So, all the arguments will be defined, and the function will always be called with these same arguments.

// booking function for eurowings flight no. 23 --- EW23

const bookEW23 = book.bind(eurowings, 23); // We already passed in an argument for the flightNum parameter
// Now we only need to give an argument for the name parameter
bookEW23('Jonas Schmedtmann');
bookEW23('Martha Cooper');
console.log(eurowings);

// So, with bookEW23() function we already applied part of the arguments of the original function.
// This is a common pattern and is called partial application

// With Event Listeners

lufthansa.planes = 300;
lufthansa.buyPlane = function () {
  console.log(this);

  this.planes++;
  console.log(this.planes);
};

// <button class="buy">
// NaN
// If we called the function without the event handler like:
// lufthansa.buyPlane(); // Adds 1 to the planes -- making it 301
// it will then correctly point towards the lufthansa object

// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane);
// In an event handler function the this Keyword always points to the element that it is attached to.
// Therefore, the this Keyword here is pointing to the button element with class="buy".
// Proving that the this Keyword is set dynamically

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Here we need define this Keyword manually for it point correctly to the lufthansa object.
// Since we need to pass in a function here. we need to use bind() method.

// Partial Application use case for bind() method.

// General function for adding Tax
const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200)); // 220

// Creating a function for adding one predefined tax rate
const addVAT = addTax.bind(null, 0.23);
// Equal to writing:
// const addVAT = value => value + value * 0.23;

// Since we don't have any this Keyword here, we set it to null, and then we predefine value of rate by setting it to 23%.
// NOTE: order of the argument is important when we want to predefine parameters.
console.log(addVAT(100)); // 123
console.log(addVAT(23)); // 28.29

// NOTE: here we creating a new function for a specific argument based on a general function,
// It is different than setting default parameters.

// function returning a function

const calcTax = function (rate) {
  return function (value) {
    console.log(value + value * rate);
  };
};
calcTax(0.23)(200);
calcTax(0.23)(100);

const purchaseValue = calcTax(0.23);
purchaseValue(500);
purchaseValue(300);

const calcTaxes = value => rate => console.log(value + value * rate);
calcTaxes(200)(0.23);
calcTaxes(100)(0.23);
