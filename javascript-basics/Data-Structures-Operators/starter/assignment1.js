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

// Below is the bookData array that contains other arrays.
// Each inner array consists of the property name (first element), and the value (second element).
// For example, in ['title', 'Computer Networking: A Top-Down Approach'],
// 'title' is the property name, and 'Computer Networking: A Top-Down Approach' is meant to be the value assigned to that property name.

// Using computed properties, fill the newBook object with the properties and values from the bookData array.
// The first one is done already.

const bookData = [
  ['title', 'Computer Networking: A Top-Down Approach'],
  ['author', ['James F. Kurose', 'Keith W. Ross']],
  ['publisher', 'Addison Wesley'],
];

// Do the rest
const newBook = {
  [bookData[0][0]]: bookData[0][1],
  // ...
  [bookData[1][0]]: bookData[1][1],
  [bookData[2][0]]: bookData[2][1],
};
console.log(newBook);

// Below is the pages variable. Add it as a property of the newBook2 object. Use the shorter way.

const pages = 880;

const newBook2 = {
  title: 'The C Programming Language',
  author: ['Brian W. Kernighan', 'Dennis M. Ritchie'],
  // ...

  pages,
};
console.log(newBook2);

// Optional Chaining (?.)

// Write a function called getFirstKeyword that takes the book object as an argument.
// This function should return the first keyword from the book's keywords property (array)
// or undefined (if the keywords property doesn't exist).
// It shouldn't throw an error. Use optional chaining for that.

const getFirstKeyword = function (book) {
  // console.log(book.keywords?.[0]);
  return book.keywords?.[0];
};

getFirstKeyword(books[0]);
getFirstKeyword(newBook2);

// Looping Objects: Object Keys, Values and Entries

// Below is the entries variable that stores an empty array.
// Use the for-of loop together with the Object.keys() method
// to loop over the thirdParty.goodreads property (array) of the first book object from the books array.
// For each key, push a new array that contains that key to the entries array.

// In the end, the entries array should be filled with arrays containing keys:

const entries1 = [];

const ratingsKey = Object.keys(books[0].thirdParty.goodreads);

for (const key of ratingsKey) {
  entries1.push([key]); // Create a nested array
}
// console.log(entries);

// Use the for-of loop together with the Object.values() method and Array's entries() method
// to loop over thirdParty.goodreads property of the first book from the books array.

// Push each value to the appropriate inner array in the entries array (use index from entries()).

// NOTE: The Object.values() method returns an array, which means you can call the Array's entries() method on it,
// for example, Object.entries(books[0].thirdParty.goodreads).entries().
// The Array's entries() method returns [index, value] arrays for each element in the array.

const ratingsValue = Object.values(books[0].thirdParty.goodreads);
console.log(ratingsValue);

for (const [i, value] of ratingsValue.entries()) {
  // console.log(value);
  entries1[i].push(value);
}
console.log(entries1);

// Use the Object.entries() method on the thirdParty.goodreads property of the first book from the books array.
// Assign the returned value to the variable called entries2.
//

const entries2 = Object.entries(books[0].thirdParty.goodreads);
console.log(entries2);

// Sets

// Below is the allKeywords variable, which stores an empty array.
// Loop over the books array, and fill the allKeywords array with the keywords coming from the keywords property of each book object.
// The allKeywords array should have just one level (no nested arrays).

// Use whatever loop and methods you want.
// You can also use the spread syntax. In the end,
// the allKeywords array should look more or less like this: ['computer science', 'programming', 'algorithms', 'data structures', ...].

const allKeywords = [];

for (let i = 0; i < books.length; i++) {
  const allBooksKeywords = books[i].keywords;
  allKeywords.push(...allBooksKeywords);
}
console.log(allKeywords);

// The allKeyword array contains duplicates.
// Remove them by creating a Set out of that array.
// Assign the newly created set to the uniqueKeywords variable.
const uniqueKeywords = new Set(allKeywords);

// Add two more keywords to the uniqueKeywords set, for example, 'coding' and 'science'.
uniqueKeywords.add('coding');
uniqueKeywords.add('science');

// Delete 'business' from the uniqueKeywords set.
uniqueKeywords.delete('business');

// Create an array out of the uniqueKeywords set, and assign it to the uniqueKeywordsArr variable.
const uniqueKeywordsArr = [...uniqueKeywords];
console.log(uniqueKeywordsArr);

// Delete all items from the uniqueKeywords set.
uniqueKeywords.clear();

// MAPS -- Fundamentals

// Create a new book, but this time, as a Map. Assign it to the bookMap variable. Use this array as initial data:
const bookMap = new Map();
bookMap.set('title', 'Clean Code').set('author', 'Robert C. Martin');
console.log(bookMap);

const bookMapJonas = new Map([
  ['title', 'Clean Code'],
  ['author', 'Robert C. Martin'],
]);
console.log(bookMapJonas);

// Set a new key in bookMap called pages, and assign it with a number 464.
bookMap.set('pages', 464);

// Get the title and author values from bookMap, and log to the console a string formatted like that: "${title} by ${author}".
console.log(`${bookMap.get('title')} by ${bookMap.get('author')}`); // Clean Code by Robert C. Martin

// Get the size of bookMap, and log it to the console.
console.log(bookMap.size); // 3

// Check if bookMap has the author key. and if so, log "The author of the book is known" to the console.
bookMap.has('author')
  ? console.log('The author of the book is known')
  : undefined;

// Convert the first book object from the books array into a Map, and assign it to a firstBookMap variable.

const firstBookMap = new Map(Object.entries(books[0]));
console.log(firstBookMap);

// Use the for-of loop to iterate over firstBookMap, and log to the console keys that have numbers as values.

for (const [key, value] of firstBookMap) {
  if (typeof value === 'number') {
    console.log(key);
  }
}

/// WORKING WITH STRINGS -- 1

// Take the ISBN property of the first book from the books array, and log to the console characters at index 6, 4, 9 and 8.
// Use bracket notation to access individual characters.

console.log(
  books[0].ISBN[6],
  books[0].ISBN[4],
  books[0].ISBN[9],
  books[0].ISBN[8]
); // 1337

// Below is the quote variable that stores a string. Find the index of the word 'chess', and log it to the console.
const quote =
  'A computer once beat me at chess, but it was no match for me at kick boxing';
console.log(quote.indexOf('chess')); // 27

// Extract the word "boxing" from the same quote string, and log it to the console.
console.log(quote.slice(quote.lastIndexOf(' ') + 1));

// Some authors are noted as "(Contributor)", for example "Julie Sussman (Contributor)".
// Create a function called isContributor that takes an author's name as an argument,
// and returns either true (if he's a contributor) of false (if he's not a contributor).
// The string "(Contributor)" is always the last part of the author's name string.

// const isContributor = function (name) {
//   const c = name.slice(name.lastIndexOf(' ') + 1);
//   if (c === '(Contributor)') {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// };

function isContributor(author) {
  console.log(author.lastIndexOf('(Contributor)') !== -1);
  // return author.lastIndexOf('(Contributor)') !== -1;
}

isContributor('Robert Sedgewick');
isContributor('Julie Sussman (Contributor)');

/// WORKING WITH STRINGS -- 2

// Write a function called normalizeAuthorName that takes an author's name (string) as an argument,
// and returns the same string, but the first name and last name are capitalized, and the "(Contributor)" part is removed (if exists).

// You can be sure that the author's name always consists of two words separated by a space,
// and possibly ends with "(Contributor)". The string may also contain trailing spaces.

// Shruti -- Solution -1
// const normalizeAuthorName1 = function (author) {
//   const name = author.slice(0, author.lastIndexOf(' ')).toLowerCase().trim();
//   console.log(name);

//   const splitName = name.split(' ');
//   console.log(splitName);

//   console.log(
//     splitName[0][0].toUpperCase() +
//       splitName[0].slice(1) +
//       ' ' +
//       splitName[1][0].toUpperCase() +
//       splitName[1].slice(1)
//   );
// };

// normalizeAuthorName1('  JuliE sussMan (Contributor)');
// normalizeAuthorName('Robert sedgewick'); // -- My solution - 1, doesn't work in this case

// Solution ---2
const normalizeAuthorName = function (author) {
  author = author.trim();
  let firstName;
  let lastName;
  if (!author.endsWith('(Contributor)')) {
    author = author.split(' ');
    firstName = author[0].toLowerCase();
    lastName = author[1].toLowerCase();
    firstName = firstName[0].toUpperCase() + firstName.slice(1);
    lastName = lastName[0].toUpperCase() + lastName.slice(1);
    return firstName + ' ' + lastName;
  } else {
    author = author.slice(0, author.lastIndexOf(' ')).split(' ');
    firstName = author[0].toLowerCase();
    lastName = author[1].toLowerCase();
    firstName = firstName[0].toUpperCase() + firstName.slice(1);
    lastName = lastName[0].toUpperCase() + lastName.slice(1);
    return firstName + ' ' + lastName;
  }
};

console.log(normalizeAuthorName('  JuliE sussMan (Contributor)'));
console.log(normalizeAuthorName('Robert sedgewick'));

// Solution by Jonas
function normalizeAuthorNameJ(author) {
  author = author.trim();
  const firstName = author.slice(0, author.indexOf(' '));

  let lastName = '';
  if (author.indexOf(' ') === author.lastIndexOf(' ')) {
    lastName = author.slice(author.indexOf(' ') + 1, author.length);
  } else {
    lastName = author.slice(author.indexOf(' ') + 1, author.lastIndexOf(' '));
  }

  const capitalizedFirstName =
    firstName[0].toUpperCase() + firstName.slice(1).toLowerCase();
  const capitalizedLastName =
    lastName[0].toUpperCase() + lastName.slice(1).toLowerCase();

  return capitalizedFirstName + ' ' + capitalizedLastName;
}

console.log(normalizeAuthorNameJ('  JuliE sussMan (Contributor)'));
console.log(normalizeAuthorNameJ('Robert sedgewick'));

// Take the title of the second book (books[1]) from the books array, and replace the word "Programs" with "Software".
// Assign the new string to the newBookTitle variable.

const newBookTitle = books[1].title.replace('Programs', 'Software');
console.log(newBookTitle);

// Write a function called logBookTheme that takes book's title (string), and logs to the console:

// "This book is about computers" if the title starts with the word "computer",

// "This book is about algorithms and data structures" if the title includes both the "algorithms" and "structures" words,

// and, "This book is about some systems, but definitely not about operating systems"
// if the title ends with the word "system" or "systems", but doesn't include the word "operating".

const logBookTheme = function (title) {
  title = title.toLowerCase();
  for (const book of books) {
    if (book.title.startsWith('computer')) {
      console.log('This book is about computers');
    } else if (
      book.title.includes('algorithms') &&
      book.title.includes('structures')
    ) {
      console.log('This book is about algorithms and data structures');
    } else if (
      (book.title.endsWith('system') || book.title.endsWith('systems')) &&
      !book.title.includes('operating')
    ) {
      console.log(
        'This book is about some systems, but definitely not about operating systems'
      );
    }
  }
};

// WORKING WITH STRINGS --- 3

// Below is the bookCategories variable that stores a string of categories.
// Each category is separated with a semicolon, for example, in a string "science;computing", 'science' and 'computing' are separate categories.

// Write a function called logBookCategories that takes a string of categories separated with semicolons,
// and logs each category to the console (as separate strings).

const bookCategories =
  'science;computing;computer science;algorithms;business;operating systems;networking;electronics';

const logBookCategories = function (str) {
  const categories = str.split(';');
  for (let category of categories) {
    console.log(category);
  }
};
logBookCategories(bookCategories);

// Now, the opposite. Each book from the books array has the keywords property.

// Write a function called getKeywordsAsString that takes the books array as an argument,
// collects keywords from each book, removes duplicates, and then joins them to create a single string where keywords are separated by a semicolon.

const allBooksKeywords = [];
const getKeywordsAsString = function (books) {
  for (const book of books) {
    allBooksKeywords.push(...book.keywords);
  }
  const uniqueBooksKeywords = [...new Set(allBooksKeywords)];
  return uniqueBooksKeywords.join(';');
};

console.log(getKeywordsAsString(books));

// Below is the bookChapters array that contains inner arrays.
// Each inner array consists of a chapter's title, and the number of a page, for example, in ['The Basics', 14],
// 'The Basics' is the chapter's title, and 14 is the number of a page.

// Write a function called logBookChapters that takes an array of arrays (like bookChapters) as an argument,
// and logs each chapter's name to the console together with the page number.
// The page number should be separated from the chapter's name with underscores (take a look at the example below).

// Use the padEnd method.

const bookChapters = [
  ['The Basics', 14],
  ['Sorting', 254],
  ['Searching', 372],
  ['Graphs', 526],
  ['Strings', 706],
];

// const logBookChapters = function () {
//   for (const chapter of bookChapters) {
//     const chapterStr = chapter.toString().replace(',', '___ ___ ___ ');
//     console.log(chapterStr);
//   }
// };

// using padEnd

const logBookChapters = function () {
  for (const [chapter, pages] of bookChapters) {
    console.log(chapter.padEnd(20, '_') + ' ' + pages);
  }
};

logBookChapters(bookChapters);
