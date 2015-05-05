var firstNumber = '';
var operator = '';


// Store the user's first and second input numbers
var getNumber = document.getElementsByClassName("number");

for(var i=0; i<getNumber.length; i++) {
  getNumber[i].addEventListener('click', function(event) {
    if (firstNumber === '') {
      console.log(this.value);
      firstNumber = parseInt(this.value);
    } else {
      console.log(this.value);
      secondNumber = parseInt(this.value);
    }
  });
}


// Store user's operator
var getOperator = document.getElementsByClassName("operator");

for(var i=0; i<getOperator.length; i++) {
  getOperator[i].addEventListener('click', function(event) {
  console.log(this.value);
  operator = this.value;
  });
}


// Run a function when the user clicks equals
var equalsButton = document.getElementsByClassName("eq");

equalsButton[0].addEventListener('click', function(event) {
  console.log(firstNumber + secondNumber);
  finalAnswer = firstNumber + secondNumber;
});














// Mathematical Functions

// var subtract = function(usernum1, usernum2) {
//   console.log(usernum1 - usernum2);
//   return usernum1 - usernum2;
// };

// var multiply = function(usernum1, usernum2) {
//   console.log(usernum1 * usernum2);
//   return usernum1 * usernum2;
// };

// var divide = function(usernum1, usernum2) {
//   console.log(usernum1 / usernum2);
//   return usernum1 / usernum2;
// };

// var add = function(usernum1, usernum2) {
//   console.log(usernum1 + usernum2);
//   return usernum1 + usernum2;
// };









// - Listen for the `click` event on the `<ul>` element.
// - Use `event.target` to see which `<li>` was clicked.
//     - `alert()` the specific vegetable that was selected.
// - Make sure you only use one event listener instead of adding an event
//   handler to each `<li>`.


// ## Part 5 Answer
// var vegetables= document.getElementById('vegetables');

// vegetables.addEventListener('click', function(event) {
//   alert(event.target.firstChild.nodeValue);
// });