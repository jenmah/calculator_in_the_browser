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
  if (operator === '+') {
  console.log(firstNumber + secondNumber);
  finalAnswer = firstNumber + secondNumber;
  } else if (operator === '-') {
  console.log(firstNumber - secondNumber);
  finalAnswer = firstNumber - secondNumber;
  } else if (operator === '/') {
  console.log(firstNumber / secondNumber);
  finalAnswer = firstNumber / secondNumber;
  } else if (operator === 'x') {
  console.log(firstNumber * secondNumber);
  finalAnswer = firstNumber * secondNumber;
  }
});



// Make the answer appear on the display
// var display = document.getElementsByClassName('display');

// display.addEventListener('submit', function(event) {
//   alert(finalAnswer);
// });


