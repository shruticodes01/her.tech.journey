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
    console.log(`"${books[i].title}" provides online content`); // "Algorithms" provides online content // "Engineering Mathematics" provides online content
}
