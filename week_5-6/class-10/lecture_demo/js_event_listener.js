function sayHello(event) {
  alert("Hello World!");
  var idOfItem = event.target.id;
  var buttonText = event.target.value;
  alert("You clicked the button that reads: "+buttonText);
}

function sayGoodbye() {
  alert("Goodbye, cruel world!");
}

// window.addEventListener("load", sayHello);

function addHello() {
  document.getElementById("buttonToClick").addEventListener("click", sayHello);
}

window.addEventListener("load", addHello);
