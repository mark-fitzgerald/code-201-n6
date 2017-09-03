function no_parameters() {
  // Do something - independent of context of parent code
  var random = Math.floor(Math.random * 10) + 1;
  var guess = prompt("Pick a number between 1 and 10:");
  if (parseInt(guess) == random) {
    alert("Great! You got it.");
  } else {
    alert("Nope. It was "+random+". Try again.");
  }
}

function with_parameters(min, max) {
  // Do something dependent upon the context of the calling code
  var random = Math.floor(Math.random *(max - min)) + min;
  var guess = prompt("Pick a number between "+min+" and "+max+":");
  if (parseInt(guess) == random) {
    alert("Great! You got it.");
  } else {
    alert("Nope. It was "+random+". Try again.");
  }
  return parseInt(guess); // Not required when using parameters.
}

function with_object(numberContainer) { // Object must contain 'min' and 'max' properties
  // Do something dependent upon the context of the calling code
  if (numberContainer.min == null || numberContainer.max == null) {
    console.error("Invalid object passed to function. Needs a MIN and MAX property.");
    return;
  }
  var random = Math.floor(Math.random *(numberContainer.max - numberContainer.min)) + numberContainer.min;
  var guess = prompt("Pick a number between "+numberContainer.min+" and "+numberContainer.max+":");
  if (parseInt(guess) == random) {
    alert("Great! You got it.");
  } else {
    alert("Nope. It was "+random+". Try again.");
  }
  return parseInt(guess); // Not required when using parameters.
}

var globalMin = 10;
var globalMax = 20;
var userGuess = 0;
function global_vars() {
  // Do something dependent upon the values of global variables
  var random = Math.floor(Math.random *(globalMax - globalMin)) + globalMin;
  var guess = prompt("Pick a number between "+globalMin+" and "+globalMax+":");
  if (parseInt(guess) == random) {
    alert("Great! You got it.");
  } else {
    alert("Nope. It was "+random+". Try again.");
  }
  userGuess = parseInt(guess);
}


var ExampleObject = function(min, max) {
  this.min = min;
  this.max = max;
  this.getUserGuess = function() {
    var random = Math.floor(Math.random *(this.max - this.min)) + this.min;
    var guess = prompt("Pick a number between "+this.min+" and "+this.max+":");
    if (parseInt(guess) == random) {
      alert("Great! You got it.");
    } else {
      alert("Nope. Try again.");
    }
  }
}

var example = new ExampleObject(10, 30);
console.log("Object MIN: "+example.min);
console.log("Object MAX: "+example.max);
// example.getUserGuess();
example.min += 10;
example.max += 20;
// example.getUserGuess();
// with_parameters(example.min, example.max);
with_object(example);
with_object({min:0});
