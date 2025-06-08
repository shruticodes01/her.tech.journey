'use strict';

// Default Parameters
const bookings = [];

const createBooking = function (
  // Default values of parameters can contain any expression --- price = 199 * 1.2
  // We can also use values of the other parameters that were set BEFORE it --- price = 199 * numPassengers
  // NOTE: we cannot set default value of a parameter based on the parameters mentioned AFTER it,
  // because JavaScript specifies parameters in order as it reaches.
  // Therefore, we cannot set numPassengers based on price as it isn't aware of the parameter price.
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  // ES5
  //  numPassengers = numPassengers || 1;
  //  price = price || 199;

  //create an object to push the data to bookingsArray
  const booking = {
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};
console.log(bookings);

createBooking('LH123'); // Object { flightNum: "LH123", numPassengers: 1, price: 199 }
createBooking('LH123', 2, 800); // Object { flightNum: "LH123", numPassengers: 2, price: 800 }
createBooking('LH123', 2); // Object { flightNum: "LH123", numPassengers: 2, price: 398 }
createBooking('LH123', 5); // Object { flightNum: "LH123", numPassengers: 5, price: 995 }

// We cannot skip arguments when we call a function
// createBooking('LH123', , 400)
// Uncaught SyntaxError: expected expression, got ','

// arguments are mapped according to the parameters,
// if skipped a value, it will give a wrong result
// createBooking('LH123', 1000);
// Object { flightNum: "LH123", numPassengers: 1000, price: 199000 }

createBooking('LH123', undefined, 1000);
//Object { flightNum: "LH123", numPassengers: 1, price: 1000 }

//Lecture 2 -- How Passing Arguments Works: Value vs Reference
// Primitive Types and Objects (Reference Types) working in the context of functions

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 24739479284,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr.' + passenger.name;
  // if (passenger.passport === 24739479284) {
  //   alert('Checked in');
  // } else {
  //   alert('Wrong Passport!');
  // }
};

checkIn(flight, jonas); // alerts -- Checked in
console.log(flight); // LH234
// Even though we redefined the 'flight' number by setting flightNum parameter to a new number inside the function, it did not change.
// flight is a primitive type, hence when we pass flight into the function as an argument
// The parameter flightNum stores only a copy of the value of flight variable. So, flightNum = flight
// Which also means that flightNum is a completely different variable
// Hence, when we set a new value to flightNum it doesn't change the value of variable flight.

console.log(jonas); // Object { name: "Mr.Jonas Schmedtmann", passport: 24739479284 }
// But the passenger name changed correctly by adding 'Mr.' to the passenger.name
// Because when we pass reference type to the function, what is copied is the reference to the object in the Memory HEAP
// Therefore, passenger = jonas. Which means both passenger and jonas are the same object in the Memory HEAP

// is the same as...
const flightNum = flight;
// Here, flightNum is the copy of the value of flight variable.
// Changing value of flightNum won't affect the value of flight.
const passenger = jonas;
// Here, we are copying the reference to a particular object.
// In this case both passenger and jonas are pointing to the same object in the Memory HEAP.
// Meaning passenger and jonas are the same object. So, if we change passenger, it will change jonas too -- IMP!!!

// Unforeseeable consequences of passing an object into a function in case of large code bases.

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000000);
};

newPassport(jonas);
checkIn(flight, jonas); // alerts -- Wrong Passport!

// Higher Order function --- Functions Accepting Callback functions

// Two functions that do simple string transformations
// function that removes spaces between words
const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

// function that changes the first word to an upperCase
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

// A function that takes a str (string) and fn (function) as an argument.
// This is a Higher order function because it takes in a function as an argument.
const transformer = function (str, fn) {
  console.log(`Original string: ${str}`);
  // Original string: JavaScript is the best!

  console.log(`Transformed string: ${fn(str)}`);

  // Transformed string: JAVASCRIPT is the best!
  // Transformed string: javascriptisthebest!

  // functions can have methods and also properties, one of them is name property.
  console.log(`Transformed by: ${fn.name}`);
  // Transformed by: upperFirstWord
  // Transformed by: oneWord
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

// addEventlistener is the Higher Order function.
const high5 = function () {
  console.log('👋');
};

// document.body.addEventListener('click', high5);
// // Here, in the addEventListener we are passing the high5 function
// // So, on every click on the body, the addEventlistener function calls high5 function
// // which then logs a waving hand in the console.

// Array Method --- forEach() as a Higher Order function

['Jonas', 'Martha', 'Adam'].forEach(high5);

// Higher Order function --- Functions return from functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
// console.log(greet('Hey'));
const greeterHey = greet('Hey');

greeterHey('Jonas'); // Hey Jonas
greeterHey('Martha'); // Hey Martha

greet('Hello')('Jonas'); // Hello Jonas

// Not a returning function, instead an arrow function taking two parameters.
const greetArr = (greeting, name) => console.log(`${greeting} ${name}`);
greetArr('Hey', 'Shruti');

// What was expected: One arrow function returning another arrow function.
// Solution by Jonas:

const greetArrow = greeting => name => console.log(`${greeting} ${name}`);

greetArrow('Hi')('Shruti'); // Hi Shruti
