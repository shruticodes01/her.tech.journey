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

let isIsland = true;
let language = "English";

console.log(isIsland, population, country, language);

if (language == null || language == undefined) { //this return true only when language is null OR is undefined
    console.log("language does not exist!");
} else {
    console.log("languge exists!", language);
}

if (language !== null && language !== undefined) { //this return true only when language not null AND not undefined
    console.log("languge exists!", language);
} else {
    console.log("language does not exist!");
}

if (!language) { // this returns true for : null, undefined, 0, false
    console.log("language does not exist!");
} else {
    console.log("languge exists!", language);
}


console.log(language ?? "default language") // if language has value, print languages otherwise a default value
// data types

// let, const, var
let splitPopulation = population/2;
console.log(splitPopulation);

newPopulation = population + 1; //25000001
doublePopulation = population + population++; // 50000000
console.log(newPopulation);
console.log(doublePopulation);

let populationFinland = 6000000;

if (population < populationFinland){
    console.log("My country has less population than Finland!")
} else {
    console.log("My country is more populated than Finland!")
}

let avgPopulation = 33000000;
if(population < avgPopulation){
    console.log("My country has less population than a country with average population of 33 million");
} else {
    console.log("My country has more people than 33 million");
}

description = "Germany is in Europe, and its 25 million people speak Deutsch";
console.log(description);

// Basic operators

// strings

// if/else

// type conversion

// equality

// logical operators

// switch 
