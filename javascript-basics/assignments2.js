"use strict";

// JavaScript Fundamentals - Part 2

// Functions

function describeCountry(country, population, capitalCity) {
  const countryDescription = `${country} has ${population} million people and its capital city is ${capitalCity}.`;
  return countryDescription;
}

const countryEast = describeCountry("Japan", 124, "Tokyo");
console.log(countryEast);

const countryCenter = describeCountry("Norway", 5.5, "Oslo");
console.log(countryCenter);

const countryWest = describeCountry("Canada", 40, "Ottawa");
console.log(countryWest);

// Function Declarations vs Function Expressions
// --Function Declaration :

function percentageOfWorld1(population) {
  const countryPercentage = (population / 7900) * 100;
  return countryPercentage;
}

const percentageJapan = percentageOfWorld1(124);
const percentageNorway = percentageOfWorld1(5.5);
const percentageCanada = percentageOfWorld1(40);

console.log(percentageJapan, percentageNorway, percentageCanada);

// --Function Expression :

const percentageOfWorld2 = function (population) {
  const countryPercentage = (population / 7900) * 100;
  return countryPercentage;
};

const percentageIndia = percentageOfWorld2(1400);
const percentageItaly = percentageOfWorld2(60);
const percentageUS = percentageOfWorld2(335);

console.log(percentageIndia, percentageItaly, percentageUS);

// -- Arrow Functions :

const percentageOfWorld3 = (population) => (population / 7900) * 100;

const percentageSKorea = percentageOfWorld3(52);
const percentagePortugal = percentageOfWorld3(10);
const percentageBrazil = percentageOfWorld3(216);

console.log(percentageSKorea, percentagePortugal, percentageBrazil);

// -- Functions calling other Functions :

const percentageOfWorld = (population) => (population / 7900) * 100;

function describePopulation(country, population) {
  const countryPercentage = percentageOfWorld(population);

  const populationDescription = `${country} has ${population} million people, which is about ${countryPercentage}% of the world`;
  return populationDescription;
}

const describePopulationIndia = describePopulation("India", 1400);
const describePopulationUS = describePopulation("US", 335);
const describePopulationJapan = describePopulation("Japan", 124);

console.log(describePopulationIndia);
console.log(describePopulationUS);
console.log(describePopulationJapan);

// -- Introduction to Arrays

// const populations = [1400, 335, 124, 40];

// if (populations.length <= 4) {
//   console.log(true);
// } else {
//   console.log(false);
// }

// const percentageOfWorld4 = function (population) {
//   return (population / 7900) * 100;
// };

// const percentages = [
//   percentageOfWorld4(populations[0]),
//   percentageOfWorld4(populations[1]),
//   percentageOfWorld4(populations[2]),
//   percentageOfWorld4(populations[3]),
// ];

// console.log(percentages);

// -- Basic Array Operations (Methods)

const neighbours = ["Belgium", "Denmark", "Poland", "Switzerland"];

neighbours.push("Utopia");
console.log(neighbours);
neighbours.pop();
console.log(neighbours);

if (neighbours !== "Germany") {
  console.log("Probably not a central european country :).");
}

neighbours[2] = "Republic of Poland";
// neighbours[neighbours.indexOf('Sweden')] = 'Republic of Sweden;';
console.log(neighbours);

// -- Introduction to Objects

// const myCountry = {
//   country: "Germany",
//   capital: "Berlin",
//   language: "Deutsch",
//   population: 40,
//   neighbours:  ["Belgium", "Denmark", "Poland", "Switzerland"]
// };

// -- dot vs bracket notation

// console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people, ${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}.`);

// myCountry.population = myCountry.population + 2;
// console.log(myCountry.population);

// myCountry["population"] = myCountry.population - 2;
// console.log(myCountry.population);

// -- Object Methods

const myCountry = {
  country: "Germany",
  capital: "Berlin",
  language: "Deutsch",
  population: 40,
  neighbours: ["Belgium", "Denmark", "Poland", "Switzerland"],

  describe: function () {
    console.log(
      `${this.country} has ${this.population} million ${this.language} speaking people, ${this.neighbours.length} neighbouring countries and a capital called ${this.capital}.`
    );
  },

  checkIsland: function () {
    this.isIsland = !this.neighbours ? true : false;
  },
};

myCountry.describe();
myCountry.checkIsland();

console.log(myCountry);

// for__loop

for (let i = 1; i <= 50; i++) {
  console.log(`Voter number ${i} currently voting`);
}

// looping arrays , breaking and continuing

const populations = [1400, 335, 124, 40];

const percentages2 = [];

for (let i = 0; i < populations.length; i++) {
  const percentagesWorld = function (population) {
    return (population / 7900) * 100;
  };

  percentages2.push(percentagesWorld(populations[i]));
}
console.log(percentages2);

// -- Looping backwards and Loops in Loops

const listOfNeighbours = [
  ["Canada", "Mexico"],
  ["Spain"],
  ["Norway", "Sweden", "Russia"],
];

for (let i = 0; i < listOfNeighbours.length; i++) {
  // for(let j = 0; j < listOfNeighbours.length; j++)
  for (let j = 0; j < listOfNeighbours[i].length; j++)
    console.log(`Neighbour: ${listOfNeighbours[i][j]}`);
}

// while___loop

const percentages3 = [];

let i = 0;

while (i < populations.length) {
  const percentagesWorld1 = function (population) {
    return (population / 7900) * 100;
  };
  percentages3.push(percentagesWorld1(populations[i]));
  i++;
}
console.log(percentages3);
// Practicing functions -- (100jsfunctions.com)

// Write a function named minutesToHours that receives a number of minutes as parameter and returns a number representing the same amount of time but in hours.

function minutesToHours(minutes) {
  const convertToHour = minutes / 60;
  return convertToHour;
}
console.log(minutesToHours(300));
console.log(minutesToHours(120));

// Write a function named averageOf4Numbers that receives 4 numbers as parameters and returns the mathematical average between them.

const averageOf4Numbers = function (num1, num2, num3, num4) {
  return (num1 + num2 + num3 + num4) / 4;
};

console.log(averageOf4Numbers(5, 20, 25, 30));
console.log(averageOf4Numbers(8, 16, 64, 126));

// Write a function named concat3 that receives 3 strings as parameters (string1, string2, string3) and an additional string named separator.
// The function should concatenate the three strings using the provided separator and return the result.

const concat3 = (string1, string2, string3, separator) => {
  return `${string1}${separator}${string2}${separator}${string3}`;
};
console.log(concat3("HTML", "CSS", "JavaScript", ","));

// Write a function named max5 that receives 5 numbers as parameters and returns the biggest one between them.

function max5(nr1, nr2, nr3, nr4, nr5) {
  return Math.max(nr1, nr2, nr3, nr4, nr5);
}

console.log(max5(10, 35, 75, 225, 675));

// Write a function name getMonthsNeededToWait that receives 2 numbers as parameters, representing the index of two months.
// The function should return the number of months we have to wait, to get from the first month to the second one.
//                    0      1      2       3       4      5        6      7      8      9     10      11

const totalMonths = [
  "Jan",
  "Feb",
  "Mar",
  "April",
  "May",
  "June",
  "July",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

function getMonthsNeededToWait(index1, index2) {
  if (index1 > index2) {
    return index1 - index2 + 1;
  } else {
    return index2 - index1;
  }
}
console.log(
  getMonthsNeededToWait(totalMonths.indexOf("Mar"), totalMonths.indexOf("June"))
);
console.log(
  getMonthsNeededToWait(totalMonths.indexOf("Aug"), totalMonths.indexOf("Feb"))
);

// correct solution :

function getMonthsNeededToWait(index1, index2) {
  if (index2 >= index1) {
    return index2 - index1;
  }

  const monthsUntillNewYear = 12 - index1;
  return monthsUntillNewYear + index2;
}
console.log(
  getMonthsNeededToWait(totalMonths.indexOf("Mar"), totalMonths.indexOf("June"))
);
console.log(
  getMonthsNeededToWait(totalMonths.indexOf("Aug"), totalMonths.indexOf("Feb"))
);

//You're driving to a new city for a small weekend trip. Write a function named getGasolineAmount that receives 2 numbers as parameters:

//the number of kilometers to your destination
//average consumption of liters per 100km

//The function should return the amount of gasoline needed to complete the entire round-trip.

const getGasolineAmount = function (kilometers, litre) {
  return ((kilometers * litre) / 100) * 2;
};
console.log(getGasolineAmount(300, 5.8));

// Write a function named lastNRevert that receives 2 parameters:

//a string named text
//a number - n

//and returns the last n characters of text but in reverse order.

const lastNRevert = (text, n) => {
  const numChar = text.slice(-n);

  return numChar.split("").reverse().join(""); // to reverse a string
};

console.log(lastNRevert("Happiness", 4));

//Practicing Functions (w3resource.com)

//Reverse Number

const reversedNum = function (num) {
  const convertNum = num.toString();

  return convertNum.split("").reverse().join("");
};

console.log(reversedNum(47890));
console.log(reversedNum(285640));

// Write a JavaScript function that checks whether a passed string is a palindrome or not?
// A palindrome is word, phrase, or sequence that reads the same backward as forward, e.g., madam or nurses run.

function checkPalindrome(str) {
  const halfString = str / 2 + "";
  const halfString2 = halfString.split("").reverse().join("");
  if (halfString === halfString2) {
    return console.log(
      `${str} is a Palindrome. It reads the same backward as forward.`
    );
  } else {
    return console.log(`${str} is NOT a Palindrome.`);
  }
}

checkPalindrome("madam");
checkPalindrome("nurses");

// correct answer :

function check_Palindrome(str_entry) {
  // Change the string into lower case and remove  all non-alphanumeric characters
  var cstr = str_entry.toLowerCase().replace(/[^a-zA-Z0-9]+/g, "");
  var ccount = 0;
  // Check whether the string is empty or not
  if (cstr === "") {
    console.log("Nothing found!");
    return false;
  }
  // Check if the length of the string is even or odd
  if (cstr.length % 2 === 0) {
    ccount = cstr.length / 2;
  } else {
    // If the length of the string is 1 then it becomes a palindrome
    if (cstr.length === 1) {
      console.log("Entry is a palindrome.");
      return true;
    } else {
      // If the length of the string is odd ignore middle character
      ccount = (cstr.length - 1) / 2;
    }
  }
  // Loop through to check the first character to the last character and then move next
  for (var x = 0; x < ccount; x++) {
    // Compare characters and drop them if they do not match
    if (cstr[x] != cstr.slice(-1 - x)[0]) {
      console.log("Entry is not a palindrome.");
      return false;
    }
  }
  console.log("The entry is a palindrome.");
  return true;
}
check_Palindrome("madam");
check_Palindrome("nursesrun");
check_Palindrome("fox");

//Capitalize First Letter of Each Word --- incomplete

const capitalizeFirstLetter = function (str) {
  const splitWords = str.split(" ")[0][0].toUpperCase();
  return splitWords;
};

console.log(capitalizeFirstLetter("lion is the king of the jungle"));
