'use strict';
// Building a football betting app

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// CHALLENGE ---- 01

// 1) Create one player array for each team (variables 'players1' and 'players2')

const [players1, players2] = game.players;
console.log(players1); //Array(11) [ "Neuer", "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", … ]
console.log(players2); //Array(11) [ "Burki", "Schulz", "Hummels", "Akanji", "Hakimi", "Weigl", "Witsel", "Hazard", "Brandt", "Sancho", … ]

// 2) The first player in any player array is the goalkeeper and the others are field players.
// For Bayern Munich (team 1) create one variable ('gk') with thegoalkeeper's name,
// and one array ('fieldPlayers') with all the remaining 10 field players

const [gk, ...fieldPlayers] = players1;
console.log(gk, fieldPlayers);
// Neuer Array(10) [ "Pavard", "Martinez", "Alaba", "Davies", "Kimmich", "Goretzka", "Coman", "Muller", "Gnarby", "Lewandowski" ]

// 3) Create an array 'allPlayers' containing all players of both teams (22 players)

const allPlayers = [...players1, ...players2];
console.log(allPlayers);

// 4) During the game, Bayern Munich (team 1) used 3 substitute players.
// So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'

const players1Final = [...players1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

// 5) Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')

const { team1, x: draw, team2 } = game.odds;
console.log(team1, team2, draw);

// 6) Write a function ('printGoals') that receives an arbitrary number of player names (not an array)
// and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)

function printGoals(...players) {
  const goal = players.length;
  console.log(...players, goal);
}

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich'); // Davies Muller Lewandowski Kimmich 4
printGoals(...game.scored); // Lewandowski Gnarby Lewandowski Hummels 4

// 7) The team with the lower odd is more likely to win. Print to the console which team is more likely to win,
// without using an if/else statement or the ternary operator.
team1 < team2 && console.log('Team1 is more likely to win');
team1 > team2 && console.log('Team2 is more likely to win');
// First, we check whether the odds of team1 < team2 or team1 > team2
// Whichever team has lower odds than the other is more likely to win

// CHALLENGE ---- 02

// 1) Loop over the game.scored array and print each player name to the console,
// along with the goal number (Example: "Goal 1: Lewandowski")

const goalies = game.scored;
for (const [i, goal] of goalies.entries()) {
  console.log(`Goal ${i + 1}: ${goal}`);
}

// 2) Use a loop to calculate the average odd and log it to the console (We already
// studied how to calculate averages, you can go check if you don't remember)

let oddsSum = 0;
const oddsValue = Object.values(game.odds);
for (const value of oddsValue) {
  oddsSum += value;
}
const oddsAvg = oddsSum / oddsValue.length;
console.log(oddsAvg);

// 3) Print the 3 odds to the console, but in a nice formatted way, exactly like this:
// Odd of victory Bayern Munich: 1.33
// Odd of draw: 3.25
// Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them(except for "draw").
// Hint: Note how the odds and the game objects have the same property names

// const gameOdds = Object.entries(game.odds);

const oddEntries = Object.entries(game.odds);
oddEntries[0][0] = ['victory' + ' ' + game.team1];
oddEntries[1][0] = ['draw'];
oddEntries[2][0] = ['victory' + ' ' + game.team2];
console.log(oddEntries);

for (const [key, value] of oddEntries) {
  console.log(`Odd of ${key}: ${value}`);
}

// SOLUTION by Jonas :

for (const [team, odd] of Object.entries(game.odds)) {
  const teamStr = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`Odd of ${teamStr}: ${odd}`);
}

// So, in the loop we have created variable team, which is equal to team1 or team2 of the game.odds
// Next, with the ternary operator we check whether team is x, if yes we call it 'draw'
// else we call it `victory ${game[team]}`.
// And ${game[team]} code selects the same property name on the game object

// 4) Bonus: Create an object called 'scorers' which contains the names of the
// players who scored as properties, and the number of goals as the value. In this
// game, it will look like this:

// {
// Gnarby: 1,
// Hummels: 1,
// Lewandowski: 2
// }

const scorers = {};

game.scored.forEach(value => {
  if (!scorers[value]) {
    scorers[value] = 1;
  } else {
    scorers[value]++;
  }
});

console.log(scorers);

// CHALLENGE ---- 03

// gameEvents Map displays a log of the events that happened during the game.
// The values are the events themselves, and the keys are the minutes in which
// each event happened (a football game has 90 minutes plus some extra time).

const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '🔁 Substitution'],
  [47, '⚽ GOAL'],
  [61, '🔁 Substitution'],
  [64, '🔶 Yellow card'],
  [69, '🔴 Red card'],
  [70, '🔁 Substitution'],
  [72, '🔁 Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '🔶 Yellow card'],
]);

// 1) Create an array 'events' of the different game events that happened (no duplicates)
const events = [...new Set(gameEvents.values())];
console.log(events);

// 2) After the game has finished, is was found that the yellow card from minute 64
// was unfair. So remove this event from the game events log.
gameEvents.delete(64);
console.log(gameEvents);

// 3) Compute and log the following string to the console: "An event happened, on
// average, every 9 minutes" (keep in mind that a game has 90 minutes)

console.log(
  `An event happend, on average, every ${90 / gameEvents.size} minutes`
);

const time = [...gameEvents.keys()].pop();
console.log(time);
console.log(
  `An event happend, on average, every ${time / gameEvents.size} minutes`
);

// 4) Loop over 'gameEvents' and log each element to the console, marking
// whether it's in the first half or second half (after 45 min) of the game, like this:
// [FIRST HALF] 17: ⚽ GOAL

for (const [key, value] of gameEvents) {
  if (key <= 45) {
    console.log(`[FIRST HALF] ${key}: ${value}`);
  } else {
    console.log(`[SECOND HALF] ${key}: ${value}`);
  }
}

// Solution by Jonas
for (const [min, event] of gameEvents) {
  const half = min <= 45 ? 'FIRST' : 'SECOND';
  console.log(`[${half} HALF] ${min}: ${event}`);
}
