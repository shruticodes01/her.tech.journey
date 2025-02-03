// Select the output container
const output = document.getElementById("output");

// Example: Print a message
output.innerHTML = "Hello! Your JavaScript file is connected.";

// Example assignment function
function addNumbers(a, b) {
  return a + b;
}

// Test the function
const result = addNumbers(5, 3);
output.innerHTML += `<br>5 + 3 = ${result}`;

console.log("JavaScript is working!");

// values and variables

const country = "Germany";
const continent = "Europe";
let population = 25000000;

console.log(country, continent, population);

// Declare a variable called isIsland and set its value according to your country.
// The variable should hold a Boolean value. Also declare a variable language,
// but don't assign it any value yet.

// Log the types of isIsland, population, country and language to the console.

let isIsland = false;
let language = "English";

console.log(isIsland, population, country, language);

if (language == null || language == undefined) {
  //this return true only when language is null OR is undefined
  console.log("language does not exist!");
} else {
  console.log("languge exists!", language);
}

if (language !== null && language !== undefined) {
  //this return true only when language not null AND not undefined
  console.log("languge exists!", language);
} else {
  console.log("language does not exist!");
}

if (!language) {
  // this returns true for : null, undefined, 0, false
  console.log("language does not exist!");
} else {
  console.log("languge exists!", language);
}

console.log(language ?? "default language"); // if language has value, print languages otherwise a default value
// data types

// let, const, var
let splitPopulation = population / 2;
console.log(splitPopulation);

newPopulation = population + 1; //25000001
doublePopulation = population + population++; // 50000000
console.log(newPopulation);
console.log(doublePopulation);

let populationFinland = 6000000;

if (population < populationFinland) {
  console.log("My country has less population than Finland!");
} else {
  console.log("My country is more populated than Finland!");
}

let avgPopulation = 33000000;
if (population < avgPopulation) {
  console.log(
    "My country has less population than a country with average population of 33 million"
  );
} else {
  console.log("My country has more people than 33 million");
}

description = "Germany is in Europe, and its 25 million people speak Deutsch";
console.log(description);

//Correct Solution for Basic Operators
population = 13;
console.log(population / 2);

population++;

console.log(population);
console.log(population > 6);
console.log(population < 33);

const description1 =
  country +
  " is in " +
  continent +
  ", and its " +
  population +
  " million people speak " +
  language;

console.log(description1);

// Basic operators

// strings
const description2 =
  `${country}` +
  "is in" +
  `${continent}` +
  ", and its" +
  `${population}` +
  "million people speak" +
  `${language}`;
console.log(description2);

//string template literal

// my solution
const description = `${country}` + "is in" + `${continent}` + ", and its " +`${population}` + "million people speak" + `${language}`;
console.log(description);

// correct solution

const description3 = `${country} is in ${continent}, and its ${population} million people speak ${language}`;
console.log(description3);

// if/else

if (population < 33) {
  console.log(
    `${country}'s population is ${33 - population} million below average`
  );
} else {
  console.log("Germany's population above average");
}

// type conversion
// 1) 4
// 2) "617"
// 3) 23
// 4) false
// 5) 1143

// equality

const numNeighbours = Number(prompt("How many neighbour countries does your country have"));

if (numNeighbours === 1){
    console.log("Only 1 border");
} else if(numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No Borders");
}

// When we use strict equality operator and answer 1, it logs "No Borders". Because it reads 1 as "1" without Number() function.
// In case of loose equality operator (==) it does type coercion and converts "1" to number 1.
// In case of relational operators such as > / <. It does type coercion before producing the result, meaning converts string "1" to number 1.
// Hence, it works without Number() function.
// Works the same in case of mathematical operators, they converts string to a number, except (+) operator. The addition operator (+) converts number to string.

// logical operators

if (language === "English" && population < 50 && !isIsland) {
  console.log(`You should live in ${country} :)`);
} else {
  console.log(`${country} does not meet your criteria :(`);
}

// Not operator converts the boolean value to the opposite of what is set, so if its set to false, it will convert it to true. 
// Why do I need to use NOT operator for isIsland when it is already set to false ?


// switch

switch (language) {
  case "chinese":
  case "mandarin":
    console.log("MOST number of native speakers!");
    break;
  case "spanish":
    console.log("2nd place in number of native speakers");
    break;
  case "english":
    console.log("3rd place");
    break;
  case "hindi":
    console.log("Number 4");
    break;
  case "arabic":
    console.log("5th most spoke language");
    break;
  default:
    console.log("Great language too :D");
}

// Conditional (Ternary) Operator

population > 33 ? console.log(`${country}'s population is above average`) : 
console.log(`${country}'s population is below average`);

console.log(`${country}'s population is ${population > 33 ? "above" : "below"} average`);

