'use strict';

// Immediately Invoked Function Expressions
// Sometimes we need a function that is executed only once

// ---- Regular function expression
// const runOnce = function () {
//   console.log('This will never run again');
// };

// runOnce();

// To execute a function immediately we simply write a function expression,
// meaning without assigning it to a variable.

// function(){
//      console.log('This will never run again'); // Uncaught SyntaxError: function statement requires a name
// }

// Since we simply started a line of code with the function keyword
// javaScript gives an error: Uncaught SyntaxError: function statement requires a name
// Because javaScript expects a function statement

(function () {
  console.log('This will never run again');
})();

// IIFE written as an Arrow Function

(() => console.log('This will never run again'))();

// Purpose of IIFE ? (We DO NOT use this in modern JavaScript to hide variables anymore)
// Purpose EARLIER :
// Used to hide protect variables from being accidentally overwritten by
// some other parts of the program or even by/with external scripts or libraries.

// But now we can hide/protect data by defining them inside a certain scope -- Function Scope / Block Scope.

// Purpose NOW :
// We use IIFE to execute a function only ONCE.
