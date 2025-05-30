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
