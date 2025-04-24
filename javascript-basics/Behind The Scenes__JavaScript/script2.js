'use strict';

// Object References in Practice (Shallow vs Deep Copies)

// Object will be stored in the HEAP inside the JavaScript Engine of our browser.
// The CALL STACK will hold a Reference to the memory address at which the object is stored in the HEAP.

const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';

console.log('Before:', jessica); // Before: Object { firstName: "Jessica", lastName: "Davis", age: 27 } script2.js:17:9
console.log('After:', marriedJessica); // After: Object { firstName: "Jessica", lastName: "Davis", age: 27 }  script2.js:18:9

// In case of objects, when create a new variable and set it equal to another object variable
// We are basically declaring two different variables pointing/referencing to the same object in the HEAP
// So, when we change a property value in marriedJessica object it also gets reflected in the original jessica object.
// Therefore, lastName property in the marriedJessica object, and the lastName property in jessica object are now set to 'Davis'

// NOTE: Both jessica and marriedJessica are declared using const yet we are able to change the property values inside it
// Because we are NOT changing their memory address, that means Reference to the object is stored in the constant which remains the same.

// So, we can change property values inside the object, but what we CANNOT do is assign it a new object.
// jessica = { x: 23 }; // Uncaught TypeError: invalid assignment to const 'jessica'

// Passing an object in to a function

const jessica1 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

// This function will recieve a person object with a new last name.

// NOTE: objects are not copied when we pass them into a function
// Instead we only pass the reference to the object inside the function
// so its the same object in the HEAP inside the function as it is outside the function

function marryPerson(originalPerson, newLastName) {
  //Here, we are passing following arguments: reference to object jessica1, new jessica1.lastName
  originalPerson.lastName = newLastName; // Here, we are actually changing jessica1 object's lastName propery
  return originalPerson;
}
const marriedJessica1 = marryPerson(jessica1, 'Davis');
// As we call this function, we are basically referencing marriedJessica1 to jessica1 object
// which is the same as : const marriedJessica1 = jessica1;

// Replacing these two lines below with marryPerson() function.
// const marriedJessica = jessica;
// marriedJessica.lastName = 'Davis';
console.log('Before:', jessica1); // Before: Object { firstName: "Jessica", lastName: "Davis", age: 27 }  script2.js:57:9
console.log('After:', marriedJessica1); // After: Object { firstName: "Jessica", lastName: "Davis", age: 27 } script2.js:58:9

// Creating a brand new object in the HEAP which looks exactly like the original object

const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessica2Copy = { ...jessica2 }; // the curly braces create a brand new object in the HEAP --- jessica2Copy object is created in the HEAP
// three dots(...) is known as the spread operator, it places all the properties of jessica2 object into a brand new object (jessica2Copy object).
// So, the reference to the newly created object is stored in the variable jessica2Copy in the CALL STACK.

jessica2Copy.lastName = 'Davis'; //the lastName property will only change in jessica2Copy, and not in jessica2
// Because they are two different objects in the HEAP, so their object References are different.
console.log(jessica2); // Object { firstName: "Jessica", lastName: "Williams", age: 27, family: (2) […] } script2.js:75:9
console.log(jessica2Copy); // Object { firstName: "Jessica", lastName: "Davis", age: 27, family: (2) […] } script2.js:76:9
