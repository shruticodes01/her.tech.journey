'use strict';

// Working with strings : 1

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

const airline = 'TAP Air Portugal';
const plane = 'A320';

// Character of a string at a certain position:
console.log(plane[0]); // A
console.log(plane[1]); // 3 - string
console.log(plane[2]); // 2 - string

// We can check the character directly on the string
console.log('B737'[0]); // B

// Check the length of the string
console.log(airline.length); // 16
//  Can be checked directly on the string.
console.log('B737'.length); // 4

// String Methods -- 1

// Gives the first occurrence of 'r';
console.log(airline.indexOf('r')); // 6

// To check the last occurrence of 'r'
console.log(airline.lastIndexOf('r')); // 10

// Check occurrence of entire word -- note its case sensitive
console.log(airline.indexOf('Portugal')); // 8
console.log(airline.indexOf('portugal')); // -1 -- because it cannot be found

// USE CASE -- 1
// Extract part of the string using slice method.
// Slice method needs indexes as arguments to be able to extract certain part of the string
console.log(airline.slice(4)); // Air Portugal
// Here,.slice(4) is the starting parameter,
// so it extracts an entire string starting from indexOf -- 4
// NOTE: This is a substring, it does not change the original string.
// To be able to use this string we have to give it a variable or some data structure.
// Strings are primitives, hence impossible to mutate.

// When you give two values to slice(indexStart, indexEnd)
console.log(airline.slice(4, 7)); // Air
// End value is not included in the string.
// Extracting stops before indexOf 7
// Length of the extracted string is always indexEnd - indexStart -- 7-4 = 3

// Extracting without hard-coding -- indexOf and lastIndexOf are useful
// Extracting first word -- not knowing how long it is
console.log(airline.slice(0, airline.indexOf(' '))); // TAP

// Extracting last word
console.log(airline.slice(airline.lastIndexOf(' ') + 1)); // Portugal
// airline.lastIndexOf(' ') + 1, because with indexStart, it includes the starting character.
// We add +1 to get rid of the space.

// Negative begin argument will start extracting characters from the end of the string
console.log(airline.slice(-1)); // l
console.log(airline.slice(-3)); // gal

// Negative end parameter
console.log(airline.slice(1, -1)); // AP Air Portuga

// Write a function that receives an airplane seat
// Check whether its a middle seat or not?

// In small planes there are 6 seats in row
const checkMiddleSeat = function (seat) {
  // B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') {
    console.log('You got the middle seat 😬');
  } else {
    console.log('You got lucky 😎');
  }
};

// So, if a string contains either B or E then its a middle seat
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

// JavaScript behind scenes converts String Primitives into String Objects
// Example :
console.log(new String('dandelion')); // String { "dandelion" }
console.log(typeof new String('dandelion')); // object
// NOTE: After the operation is done with string methods returns string primitives

// Change case of a string -- doesn't take an argument
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

// Fix capitalization in passenger name

const passenger = 'jOnAS';
// 1) convert everything to toLowerCase()
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

// Comparing user input email

const email = 'hello@jonas.io';
const loginEmail = 'Hello@Jonas.Io \n';

//1) convert to lower case
const lowerCaseEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerCaseEmail.trim();
console.log(trimmedEmail); // hello@jonas.io

// All in one step
const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail); // hello@jonas.io

// replace parts of the string

const priceGB = '288,97£';
const priceUS = priceGB.replace('£', '$').replace(',', '.');
console.log(priceUS); // 288.97$

// replace entire words -- replace is case sensitive
const announcement =
  'All passengers come to the boarding door 23. Boarding door 23!';

console.log(announcement.replace('door', 'gate'));
// All passengers come to the boarding gate 23. Boarding door 23!
// Replaces only the first occurence of the string

// To replace all the occurrences of the string, replaceAll() method
// Solution -- 1
console.log(announcement.replaceAll('door', 'gate'));
// All passengers come to the boarding gate 23. Boarding gate 23!

// Solution -- 2 -- WITHOUT the replaceAll() method
// to create regular expression, we need to write string between slashes /''/
// And then write g, g stands for global
console.log(announcement.replace(/door/g, 'gate'));

// BOOLEANS

// includes()
const plane1 = 'Airbus A320neo';
console.log(plane1.includes('A320')); // true
console.log(plane1.includes('Boeing')); // false

// startsWith()
console.log(plane1.startsWith('Air')); // true

// if current plane is part of the new Airbus family
// startsWith() and endsWith()
if (plane1.startsWith('Airbus') && plane1.endsWith('neo')) {
  console.log('Part of the new Airbus family');
}

// If the baggage of a certain passenger is allowed to be checked-in

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};

checkBaggage('I have a laptop, some Food and a pocket Knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

// Working with string -- 3

// split() -- creates an array
console.log('a+very+nice+string'.split('+')); // Array(4) [ "a", "very", "nice", "string" ]
// separates strings based on the divider string
// And then stores results into an array.
console.log('Jonas Schmedtmann'.split(' '));
const [personFirstName, personLastName] = 'Jonas Schmedtmann'.split(' ');

// join() -- joins elements from an array and returns a string
const newName = ['Mr.', personFirstName, personLastName.toUpperCase()].join(
  ' '
);
console.log(newName);

const capitalizeName = function (name) {
  const names = name.split(' ');
  const namesUpper = [];
  for (const n of names) {
    // Method-- 1
    // namesUpper.push(n[0].toUpperCase() + n.slice(1));

    // Method-- 2 using replace()
    namesUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(namesUpper.join(' '));
};
capitalizeName('jessica ann smith davis');
capitalizeName('jonas schmedtmann');

// padding a string -- adding no. of characters until string has a certain desired length

const boardingMessage = 'Go to gate 23!';
// the length of the entire string to be 25 characters long
console.log(boardingMessage.padStart(25, '+')); // +++++++++++Go to gate 23!
//
// total length of entire string 30. Adds 5 '+'
console.log(boardingMessage.padStart(25, '+').padEnd(30, '+')); // +++++++++++Go to gate 23!+++++

// padding example :

const maskCreditCard = function (number) {
  // Method 1 -- convert number to a string
  // const str = String(number);
  //
  // Method 2 -- convert number to a string
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(4337846868695004)); // ************5004
console.log(maskCreditCard('4337846868695004961')); // ***************4961

// repeat() -- repeat same string multiple times

const msg = 'Bad Weather... All Departures Delayed... ';
console.log(msg.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};

planesInLine(5); // There are 5 planes in line ✈️✈️✈️✈️✈️
planesInLine(3); // There are 3 planes in line ✈️✈️✈️
planesInLine(12); // There are 12 planes in line ✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️✈️
