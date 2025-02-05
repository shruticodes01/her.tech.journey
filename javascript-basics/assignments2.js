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

// Practicing functions -- (100jsfunctions.com / learn-js.org )

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

const totalMonths = ["Jan", "Feb", "Mar", "April", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec",];

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


const getGasolineAmount = function(kilometers, litre){

return (kilometers*litre/100)*2;
}
console.log(getGasolineAmount(300, 5.8));

// Write a function named lastNRevert that receives 2 parameters:

//a string named text
//a number - n

//and returns the last n characters of text but in reverse order.

const lastNRevert = (text, n) => {
 const numChar = text.slice(-n);

  return numChar.split("").reverse().join(""); // to reverse a string 
}

console.log(lastNRevert("Happiness", 4));

