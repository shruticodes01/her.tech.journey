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

// Passing an object into a function: A reusable way of declaring two or more variables pointing/referencing to the same object in the HEAP.

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
// const marriedJessica1 = jessica1;
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
// On logging to the console we can see that the original object jessica2 remains unchanged.
// We have only updated/changed lastName on the jessica2copy
// Proving that jessica2copy is a new object in the HEAP and has a different memory address than jessica2 object.

// Problems of creating a brand NEW object in the HEAP which looks exactly like the original object
// SHALLOW COPY
const jessica3 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

// Shallow Copy
const jessica3Copy = { ...jessica3 };
// the curly braces create a brand new object in the HEAP --- jessica3Copy object is created in the HEAP
// three dots(...) is known as the spread operator
// The spread operator places all the properties of jessica3 object into a brand new object (jessica3Copy object).
jessica3Copy.lastName = 'Davis';

// Below we are pushing two new string values on the family property, which is an array. And arrays are also, objects.
jessica3Copy.family.push('Mary');
jessica3Copy.family.push('John');
// Since arrays are objects, we can say that the array inside an object literal is a nested object.
// This array object is allocated its own different memory address in the HEAP.
// And family property is just like a variable inside the object literals jessica3 and jessica3Copy
// So, the family property holds/creates its own Refernce to the memory address of the array object.

// The spread operator copies all the properties of jessica3 object to jessica3Copy object
// Which means it also copies the reference to this array object which is stored in the family property.
// So, the family property on both jessica3 and jessica3Copy point to the exact same array object in the HEAP.

// Eventhough jessica3Copy and jessica3 are two different objects in the HEAP
// When we push two new strings on the family property of jessica3Copy
// It also get reflected on the family property of the original jessica3.
console.log(jessica3); // Object { firstName: "Jessica", lastName: "Williams", age: 27, family: (4) […] }  script2.js:100:9
console.log(jessica3Copy); // Object { firstName: "Jessica", lastName: "Davis", age: 27, family: (4) […] }  script2.js:101:9

// So, when we made the jessica3Copy, we copied only the first level of the object but NOT the nested object
// Basically we only copied the primitive values.
// So, when we copy only the first level of the object, it called a shallow copy.

// DEEP COPY / DEEP CLONE --- may not work on all the browsers
// Using structuredClone() function to create a brand NEW object in the HEAP which looks exactly like the original object
// The structuredClone() function copies both primitives as well as the nested object.
const steven = {
  firstName: 'Steven',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const stevenClone = structuredClone(steven);
stevenClone.family.push('Mary');
stevenClone.family.push('John');

console.log('Original:', steven); // Original: Object { firstName: "Steven", lastName: "Williams", age: 27, family: (2) […] } script2.js:132:9
console.log('Clone:', stevenClone); // Clone: Object { firstName: "Steven", lastName: "Williams", age: 27, family: (4) […] } script2.js:133:9
