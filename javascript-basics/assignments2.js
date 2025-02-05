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
