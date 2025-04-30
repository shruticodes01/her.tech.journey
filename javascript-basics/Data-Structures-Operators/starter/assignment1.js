'use strict';

// REST PATTERN AND PARAMETERS

// Destructure the keywords property (array) of the first book from the books array into variables called mainKeyword and rest.
// The first keyword should be assigned to mainKeyword, and the rest of the keywords should be assigned to the rest variable (it should be an array).

const [mainKeyword, ...rest] = books[0].keywords;
console.log(mainKeyword, rest); // computer science Array(7) [ "programming", "algorithms", "data structures", "java", "math", "software", "engineering" ]

// Destructure the second book from the books array into a variable called bookPublisher.
// The bookPublisher variable should be assigned with the value of the publisher property of the book object.
// Assign the rest of the properties to the restOfTheBook variable.

const { publisher: bookPublisher, ...restOfTheBook } = books[1];
console.log(bookPublisher, restOfTheBook);
// The MIT Press Object { title: "Structure and Interpretation of Computer Programs", author: (3) […], publicationDate: "2022-04-12", edition: 2, keywords: (5) […], pages: 640, format: "paperback", ISBN: "9780262543231", language: "English", programmingLanguage: "JavaScript", … }

// Write a function called printBookAuthorsCount that has two parameters called title and authors.
// The authors parameter should accept any number of arguments.
// This function should log to the console a string formatted like that: "The book "${title}" has ${authors.length} authors".

function printBookAuthorsCount(title, ...authors) {
  console.log(`The book "${title}" has ${authors.length} authors`);
}

printBookAuthorsCount('Algorithms', 'Robert Sedgewick', 'Kevin Wayne');

// Short-Circuiting (&& and ||)

//Some of the book objects have the programmingLanguage property, which specifies what programming language is used in the book
//Write a function called hasExamplesInJava that takes a book object from the books array as an argument.
//This function should return true if the book uses Java,
//or a string 'no data available' if it uses other language or no programming language at all.

function hasExamplesInJava(book) {
  console.log(book.programmingLanguage === 'Java' || 'no data available');
  //   return book.programmingLanguage === 'Java' || 'no data available';
}

hasExamplesInJava(books[0]); // true
hasExamplesInJava(books[2]); // no data available

// Some of the book objects have the onlineContent property, which is either true or false.
// Loop over the books array, and for the books that provide online content,
// log to the console a string in this format: "${title}" provides online content. Use short-circuiting.

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent &&
    console.log(`"${books[i].title}" provides online content`);
  // "Algorithms" provides online content // "Engineering Mathematics" provides online content
}

// Nullish Coalescing Operator (??)
// There are objects in the books array that don't have the onlineContent property at all.
// Loop over the books array, and log a string to the console in this format: "${title}" provides no data about its online content.

for (let i = 0; i < books.length; i++) {
  books[i].onlineContent ??
    console.log(
      `"${books[i].title}" provides no data about its online content`
    );
}
// if books[i].onlineContent = undefined,
// the nullish coalescing operator returns the second operand -- console.log(`"${books[i].title}" provides no data about its online content`);

// LOGICAL ASSIGNMENT OPERATORS
// Some of the book objects from the books array are missing the edition property.
// Loop over the books array, and assign this property with a number 1 (if it doesn't already exist).
// Use logical assignment operators.

for (let i = 0; i < books.length; i++) {
  books[i].edition ||= 1;
  // books[i].edition ??= 1; will also give the same result. Can we use it interchangeably ?
  console.log(books[i].edition);
}

// Some of the book objects from the books array have the highlighted property,
// which by default is set to true. Iterate over the books array,
// and if the thirdParty.goodreads.rating property is less than 4.2, reassign it with false.

for (let i = 0; i < books.length; i++) {
  // books[i].highlighted &&= !(books[i].thirdParty.goodreads.rating < 4.2);
  books[i].highlighted =
    books[i].highlighted && books[i].thirdParty.goodreads.rating >= 4.2;

  console.log(
    books[i].title,
    books[i].thirdParty.goodreads.rating,
    books[i].highlighted
  );
}

// Looping Arrays: The for-of Loop

// 1) Use the for-of loop to loop over the books array and sum the pages of all books.
// Use the pageSum variable below, and the pages property of the book objects.

let pageSum = 0;

for (const book of books) {
  pageSum += book.pages;
}
console.log(pageSum);

// Below is the allAuthors variable which stores an empty array.
// Use the for-of loop to fill allAuthors with the authors of each book from the books array.
// Remember that each book object has the author property,
// which can be a string (if there is only a single author) or an array (if there are multiple authors).
// You may need to use the typeof operator. You can also use multiple loops if needed.
// The allAuthors array should have just one level (no nested arrays).

const allAuthors = [];

for (const book of books) {
  if (typeof book.author === 'string') {
    allAuthors.push(book.author);
  } else if (Array.isArray(book.author)) {
    allAuthors.push(...book.author);
  }
}
console.log(allAuthors);

// Solution by Jonas

// for (const book of books) {
//   if (typeof book.author === 'string') {
//     allAuthors.push(book.author);
//   } else {
//     for (const author of book.author) {
//       allAuthors.push(author);
//     }
//   }
// }
// console.log(allAuthors);

// Use the for-of loop together with Array's entries() method to log each author from allAuthors to the console together with its index.
// Make the index start from 1, instead of 0.

for (const [i, author] of allAuthors.entries()) {
  console.log(`${i + 1}: ${author}`);
}
