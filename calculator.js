var firstNumber = '';
var operator = '';

var getNumber = document.getElementsByClassName("number");
    
// getNumber[0].addEventListener('click', function(event) {


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


var getOperator = document.getElementsByClassName("operator");

for(var i=0; i<getOperator.length; i++) {
  getOperator[i].addEventListener('click', function(event) {
  console.log(this.value);
  operator = this.value;
  });
}








// getNumber.addEventListener('click', function(event) {
//   alert("this isn't working!");
// });







// var eventClickButton = document.getElementById('event_click');

// eventClickButton.addEventListener('click', function(){
//    alert('I have been clicked!');
// });




// #5

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

//______________

// #3

// var former = document.getElementById('former');

// former.addEventListener('submit', function(event) {
//   event.preventDefault();
//   alert(this.children[0].value);
// });


// - Listen for the `submit` event on the `<form>`.
// - `alert()` the text that is typed into the text field.







// Instructions

// Create a calculator that takes input from the browser and can do the basic arithmetic operations.

// Tasks

// Must be able to +, -, / and *
// Must update a display
// Must be able to clear the display