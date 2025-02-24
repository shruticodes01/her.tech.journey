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

// Video 59
// Given an array of temperatures of one day, calculate the temperature amplitude. Keep in mind that sometimes there might be a sensor error.

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];
const temperatures1 = [
  "error",
  -5,
  8,
  -3,
  1,
  0,
  4,
  6,
  11,
  16,
  14,
  -6,
  11,
  25,
  5,
  "error",
  0,
  -6,
  9,
];
const temperatures2 = [0, 0, 0, 0, 0, -2, 0, 0];
const temperatures3 = [0, 0, 15, 0, 0, 0, 0];
const temperatures4 = [0, 0, "error", 15, 2, -6, 0];
const temperatures5 = [15, 15, 15, 15, 15, 15, 15];
const temperatures6 = [-8, -8, -8, -8, -8, -8, -8, -8, -8];
const temperatures7 = [
  "error",
  "error",
  "error",
  "error",
  "error",
  "error",
  "error",
];

// formula to calculate ---- amplitude = max-min

const calcAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) {
      max = currentTemp;
    }

    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

const amp = calcAmplitude(temperatures);
console.log(amp);
console.log(calcAmplitude(temperatures1));
console.log(calcAmplitude(temperatures2));
console.log(calcAmplitude(temperatures3));
console.log(calcAmplitude(temperatures4));
console.log(calcAmplitude(temperatures5));
console.log(calcAmplitude(temperatures6));
console.log(calcAmplitude(temperatures7));

const calcAmplitudeNew = function (t1, t2) {
  // function should receive two arrays of temperatures
  const temps = t1.concat(t2);
  console.log(temps);

  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== "number") continue;

    if (currentTemp > max) {
      max = currentTemp;
    }

    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(max, min);
  return max - min;
};
const ampNew = calcAmplitudeNew([3, 5, 1], [9, 0, 5]);
console.log(ampNew);

// Create another function that measures absolute temperature in Kelvin (K):

// const measureKelvin = function () {
//   const measurement = {
//     type: "temp",
//     unit: "celsius",
//     value: Number(prompt("Degree celsius")),
//   };

//   console.table(measurement);

//   const kelvin = measurement.value + 273;
//   return kelvin;
// };

// console.log(measureKelvin());

// Using a debugger
// const calcAmplitudeBug = function (t1, t2) {
//   const temps = t1.concat(t2);
//   console.log(temps);

//   let max = 0;
//   let min = 0;
//   for (let i = 0; i < temps.length; i++) {
//     const currentTemp = temps[i];

//     if (typeof currentTemp !== "number") continue;

//     if (currentTemp > max) {
//       max = currentTemp;
//     }

//     if (currentTemp < min) {
//       min = currentTemp;
//     }
//   }
//   console.log(max, min);
//   return max - min;
// };
// const ampBug = calcAmplitudeBug([3, 5, 1], [9, 4, 5]);
// console.log(ampBug);

// Solution Method 2
const tempAmplitude = function (temps) {
  let minTemp = Number.MAX_VALUE;
  let maxTemp = Number.MIN_VALUE;

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;

    minTemp = Math.min(minTemp, temps[i]); // does not work with multiple negative values; temperatures6 array returns 8 instead of 0;
    maxTemp = Math.max(maxTemp, temps[i]);
  }

  console.log(maxTemp, minTemp);
  return maxTemp - minTemp;
};

const amplitude = tempAmplitude(temperatures);
console.log(amplitude);
console.log(tempAmplitude(temperatures1));
console.log(tempAmplitude(temperatures2));
console.log(tempAmplitude(temperatures3));
console.log(tempAmplitude(temperatures4));
console.log(tempAmplitude(temperatures5));
console.log(tempAmplitude(temperatures6));
console.log(tempAmplitude(temperatures7));

// Solution Method 3

const calcTempAmplitude = function (temp) {
  let max;
  let min;
  let errorCounter = 0;

  for (let i = 0; i < temp.length; i++) {
    const currentValue = temp[i];
    // This works, able to ignore "error" in the beginning of the string
    // How can we write this without hard-coding "error"
    if (currentValue === "error") {
      errorCounter++;
      continue;
    }

    if (max === undefined) {
      (max = currentValue), (min = currentValue);
    }

    if (currentValue > max) {
      max = currentValue;
    }

    if (currentValue < min) {
      min = currentValue;
    }

    if (errorCounter === temp.length) {
      return "Cannot calculate amplitude without numbers!";
    }
    // doesn't work, returns undefined and NaN.
  }
  console.log(max, min);
  return max - min;
};

console.log(calcTempAmplitude(temperatures));
console.log(calcTempAmplitude(temperatures1));
console.log(calcTempAmplitude(temperatures2));
console.log(calcTempAmplitude(temperatures3));
console.log(calcTempAmplitude(temperatures4));
console.log(calcTempAmplitude(temperatures5));
console.log(calcTempAmplitude(temperatures6));
console.log(calcTempAmplitude(temperatures7));

// Solution Method 4

const calcAmplitude1 = function (temps) {
  let max = temps[0];
  let min = temps[0];

  for (let i = 0; i < temps.length; i++) {
    if (typeof temps[i] !== "number") continue;
    if (typeof temps[i] === "number") {
      max = temps[i];
      min = temps[i];
      break;
    }
  }

  for (let i = 0; i < temps.length; i++) {
    const currentTemp = temps[i];

    if (typeof currentTemp !== "number") continue;
    if (currentTemp > max) {
      max = currentTemp;
    }
    if (currentTemp < min) {
      min = currentTemp;
    }
  }
  console.log(max, min);
  return max - min;
};

console.log(calcAmplitude1(temperatures));
console.log(calcAmplitude1(temperatures1));
console.log(calcAmplitude1(temperatures2));
console.log(calcAmplitude1(temperatures3));
console.log(calcAmplitude1(temperatures4));
console.log(calcAmplitude1(temperatures5));
console.log(calcAmplitude1(temperatures6));
console.log(calcAmplitude1(temperatures7));
