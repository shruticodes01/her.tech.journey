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
