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
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.
// 5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
// data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
// object! So what should the this keyword look like in this situation?

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
      inputNum < this.answers.length &&
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

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));
// console.log(poll);

poll.answers = testData1;
poll.displayResults();

poll.answers = testData2.toString();
poll.displayResults();

// Jonas Solution Challenge --- 01

const pollJ = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),
  registerNewAnswer() {
    // Shruti's attempt
    // const answer = prompt(
    //   `${this.question}\n${this.options
    //     .toString()
    //     .replaceAll(',', '\n')}\n(Write option number)`
    // );

    // Code by Jonas
    const answer = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n(Write option number)`
      )
    );
    console.log(answer);

    // Register answer -- Short circuiting method
    typeof answer === 'number' &&
      answer < this.answers.length &&
      this.answers[answer]++;

    this.displayResults();
    this.displayResults('string');
  },

  displayResults(type = 'array') {
    if (type === 'array') {
      console.log(this.answers);
    } else if (type === 'string') {
      // Poll results are 13, 2, 4, 1
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

document
  .querySelector('.poll')
  .addEventListener('click', pollJ.registerNewAnswer.bind(pollJ));

console.log(pollJ);

pollJ.displayResults.call({ answers: [5, 2, 3] }, 'string');
pollJ.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
pollJ.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] });

// Test data for bonus:
// § Data 1: [5, 2, 3]
// § Data 2: [1, 5, 3, 9, 6, 1]

// Coding Challenge #2

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
