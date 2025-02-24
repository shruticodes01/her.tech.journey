"use strict";

// Section 7: JavaScript in the browser : DOM and Events

// Project 1 : Guess My Number

// Guess random number between 1 and 20
// Input box with button : check!
// alerts - 1. start guessing... 2. if num is low ---  too low, if num is higher --- num too high, correct number
// the question mark changes to a number, when correct number is guessed.
// Score : starts at 20, Score reduces with every wrong guess
// Highscore: 0, when correct number, highscore = score
// Button Again to restart the game, it resets everything, including score(20) --- except highscore.

// console.log(document.querySelector(".message").textContent);

// document.querySelector(".message").textContent = "Correct Number!";

// document.querySelector(".number").textContent = 13;
// document.querySelector(".score").textContent = 18;
// console.log(document.querySelector(".guess").value); // to get the value of the input field.
// document.querySelector(".guess").value = 23;

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let gameScore = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess, typeof guess);

  // From Udemy Course
  //   if (!guess) { // when there is no input
  //     document.querySelector(".message").textContent = "⛔ No number!";

  //   } else if (guess === secretNumber) {  // when player wins
  //     document.querySelector(".message").textContent = "🎉 Correct Number!";

  //   } else if (guess > secretNumber) { // Guess is high
  //     if (gameScore > 1) {
  //       document.querySelector(".message").textContent = "📈 Too High!";
  //       gameScore--;
  //       document.querySelector(".score").textContent = gameScore;
  //     } else {
  //       document.querySelector(".message").textContent = "🤯 You lost the game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   } else {
  //     if (gameScore > 1) {  // Guess is low
  //       document.querySelector(".message").textContent = "📉 Too Low!";
  //       gameScore--;
  //       document.querySelector(".score").textContent = gameScore;
  //     } else {
  //       document.querySelector(".message").textContent = "🤯 You lost the game!";
  //       document.querySelector(".score").textContent = 0;
  //     }
  //   }

  // Option 2 - Shruti
  // when there is no input
  //   if (!guess) {
  //     document.querySelector(".message").textContent = "⛔ No number!";

  //     // when player wins
  //   } else if (guess === secretNumber) {
  //     document.querySelector(".message").textContent = "🎉 Correct Number!";
  //     document.querySelector("body").style;
  //     highScore = gameScore;
  //     document.querySelector(".highscore").textContent = highScore;

  //     // when the guess is incorrect
  //   } else {

  //     // when guess is high
  //     if (guess > secretNumber && gameScore > 1) {
  //       document.querySelector(".message").textContent = "📈 Too High!";
  //       gameScore--;
  //       document.querySelector(".score").textContent = gameScore;

  //       // when guess is low
  //     } else if (guess < secretNumber && gameScore > 1) {
  //       document.querySelector(".message").textContent = "📉 Too Low!";
  //       gameScore--;
  //       document.querySelector(".score").textContent = gameScore;

  //       // when player loses
  //     } else {
  //       document.querySelector(".message").textContent = "🤯 You lost the game!";
  //       document.querySelector(".score").textContent = 0;
  //     }

  // Option 3 - Shruti
  // When there is no input.
  if (!guess) {
    document.querySelector(".message").textContent = "⛔ No number!";

    // when player wins
  } else if (guess === secretNumber) {
    document.querySelector(".message").textContent = "🎉 Correct Number!";
    document.querySelector(".number").textContent = secretNumber;
    document.querySelector("body").style.backgroundColor = "#60B347";
    document.querySelector(".number").style.width = "30rem";

    // highScore = gameScore;
    // document.querySelector(".highscore").textContent = highScore; // This is a wrong code/ incomplete code because,
    // with this highScore is the same as last gameScore as.

    if (gameScore > highScore) {
      highScore = gameScore;
      document.querySelector(".highscore").textContent = highScore;
    }

    // when the guess is incorrect
  } else {
    // when guess is high or low and score is more than 1
    if (
      (guess > secretNumber && gameScore > 1) ||
      (guess < secretNumber && gameScore > 1)
    ) {
      gameScore--;
      document.querySelector(".score").textContent = gameScore;

      //when guess is high
      if (guess > secretNumber) {
        document.querySelector(".message").textContent = "📈 Too High!";

        //when guess is high
      } else {
        document.querySelector(".message").textContent = "📉 Too Low!";
      }
    } else {
      document.querySelector(".message").textContent = "🤯 You lost the game!";
      document.querySelector(".score").textContent = 0;
    }
  }
});

// document.querySelector(".again").addEventListener("click", function () {
//   location.reload();
//   document.querySelector(".guess").value = null;
// });

document.querySelector(".again").addEventListener("click", function () {
  gameScore = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;

  document.querySelector(".message").textContent = "Start guessing...";
  document.querySelector(".score").textContent = gameScore;
  document.querySelector(".number").textContent = "?";
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#302f2f";
  document.querySelector(".number").style.width = "15rem";
});
