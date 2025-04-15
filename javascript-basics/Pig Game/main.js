"use strict";

const finalScore = 100;

const elDice = document.querySelector(".dice");

const elName0 = document.getElementById("name-0");
const elName1 = document.getElementById("name-1");

const elPlayer0 = document.querySelector(".player-0");
const elPlayer1 = document.querySelector(".player-1");

const elCurrentScore0 = document.getElementById("current-0");
const elCurrentScore1 = document.getElementById("current-1");

// Not associated with Player1 or Player2 but established as DOM element
const elScore0 = document.getElementById("score-0");
const elScore1 = document.getElementById("score-1");

// Change text content to 0: To Establish Starting Conditions
elScore0.textContent = 0;
elScore1.textContent = 0;

const btnNew = document.querySelector(".btn-new");
const btnRoll = document.querySelector(".btn-roll");
const btnHold = document.querySelector(".btn-hold");

// Remove image of dice - create a class of hidden in CSS : manipulate in only through JavaScript
// elDice.classList.add("hidden");

// const scores = [0, 0];

// let rollDice = Math.trunc(Math.random() * 6) + 1;
// let currentScore = 0;
// let activePlayer = 0;
// let playing = true;

// we create a function to initialize the game
// this function will be called when the page loads and when the new game button is clicked

let scores, currentScore, activePlayer, playing;

const init = function () {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  elScore0.textContent = 0;
  elScore1.textContent = 0;
  elCurrentScore0.textContent = 0;
  elCurrentScore1.textContent = 0;

  elDice.classList.add("hidden");
  elPlayer0.classList.remove("player-winner");
  elPlayer1.classList.remove("player-winner");
  // elName0.classList.remove("name"); // we don't need to specify the class name, as player-winner is already removed
  // elName1.classList.remove("name");
  elPlayer0.classList.add("active");
  elPlayer1.classList.remove("active");
};

init();

// Function to switch player
const switchPlayer = function () {
  // previously learnt way of switching player background color

  // if (!activePlayer) {
  //   elPlayer0.classList.remove("active");
  //   elPlayer1.classList.add("active");
  // } else {
  //   elPlayer0.classList.add("active");
  //   elPlayer1.classList.remove("active");
  // }

  document.getElementById(`current-${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;

  //new way of switching player background color

  elPlayer0.classList.toggle("active");
  elPlayer1.classList.toggle("active");
};

// const resetStyle = function () {
//   elPlayer0.style.backgroundColor = "rgba(255, 255, 255, 0.4)";
//   elPlayer1.style.backgroundColor = "unset";
//   elName0.style.color = "unset";
//   elName1.style.color = "unset";
// };

// const resetAllScores = function () {
//   currentScore = 0;
//   scores[0] = 0;
//   scores[1] = 0;
//   elScore0.textContent = 0;
//   elScore1.textContent = 0;
//   elCurrentScore0.textContent = 0;
//   elCurrentScore1.textContent = 0;
// };

// On clicking btnRoll - generate a random number between 1 and 6
btnRoll.addEventListener("click", function () {
  if (playing) {
    // Generate random number on clicking btnRoll
    const rollDice = Math.trunc(Math.random() * 6) + 1;

    // Change dice image, which is same as the random number generated.
    //first we remove class "hidden" from dice image element
    elDice.classList.remove("hidden");

    // Next we set (image element number) dice-num.png = rollDice value
    elDice.src = `images/dice-${rollDice}.png`;

    // Check if rolled-dice is 1
    if (rollDice !== 1) {
      // If rollDice number is not 1, add rollDice value to currentScore
      currentScore += rollDice;

      // select player dynamically to add currentScore to its textContent
      document.getElementById(`current-${activePlayer}`).textContent =
        currentScore;
    } else {
      // If rollDice number is 1, reset currentScore to 0
      // Change activePlayer
      switchPlayer();
    }
    console.log(rollDice, currentScore);
  }
});

// On clicking btnHold - add currentScore to totalScore
// Change activePlayer
// Reset currentScore to 0
// Change activePlayer

btnHold.addEventListener("click", function () {
  if (playing) {
    // scores[1] = scores[1] + currentScore
    scores[activePlayer] += currentScore;
    document.getElementById(`score-${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= finalScore) {
      playing = false;
      // document.getElementById(`name-${activePlayer}`).style.color = "#c7365f";
      // document.querySelector(`.player-${activePlayer}`).style.backgroundColor =
      //   "#2f2f2f";

      // Another way of changing background color and text color when a player wins.
      // first create a player-winner and name class in CSS
      // then add the class to the player who wins
      elDice.classList.add("hidden");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.add("player-winner");
      document
        .querySelector(`.player-${activePlayer}`)
        .classList.remove("active");

      // document.getElementById(`current-${activePlayer}`).textContent =
      //   currentScore; ///// this line is not needed

      // btnRoll.disabled = true; // instead of disabling the buttons, we can set playing to false
      // btnHold.disabled = true;
    } else {
      switchPlayer();
    }
  }
  console.log(scores, currentScore);
});

// On clicking btnNew - reset all values to 0 // code by Shruti

// btnNew.addEventListener("click", function () { // without using boolean playing
//   elDice.classList.add("hidden");
//   btnRoll.disabled = false;
//   btnHold.disabled = false;
//   resetAllScores();
//   resetStyle();
//   console.log(scores, currentScore);
// });

// code from Udemy course
btnNew.addEventListener("click", init);
