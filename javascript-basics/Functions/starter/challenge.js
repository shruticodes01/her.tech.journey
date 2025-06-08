'use strict';

// Challenge --- 01 (Let's build a simple poll app!)

// A poll has a question, an array of options from which people can choose, and an array
// with the number of replies for each option. This data is stored in the starter 'poll' object below.

// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by
// 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// let inputNum;

// Test data for bonus:
const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];

let inputCount = 1;

const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer(inputNum) {
    inputNum = Number(
      prompt(`What is your favourite programming language?
    0: JavaScript
    1: Python
    2: Rust
    3: C++
    (Write option number)`)
    );

    if (
      inputNum >= 0 &&
      inputNum < 4 &&
      (inputNum !== ' ' || inputNum !== null)
    ) {
      for (let [key, value] of this.answers.entries()) {
        if (key === inputNum) {
          console.log(key);
          value += inputCount;
          this.answers.fill(value, key, key + 1);
        }
      }
      console.log(this.answers);
    }
  },

  displayResults(type) {
    type = this.answers;
    if (typeof type === 'string') {
      console.log(`Poll results are ${this.answers}`);
    } else {
      console.log(this.answers);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));
console.log(poll);

poll.answers = testData1;
poll.displayResults();

poll.answers = testData2.toString();
poll.displayResults();
