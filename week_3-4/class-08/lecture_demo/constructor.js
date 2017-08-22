var studentLiteral = {
  name: "John Doe",
  phone: "503-555-1234",
  email: "john.doe@school.edu",
  sayHello: function() {
    alert("Hello! My name is "+studentLiteral.name);
  }
}

var Person = function(personName, personPhone, personEmail) {
  this.name = personName;
  this.phone = personPhone;
  this.email = personEmail;
  this.sayHello = function() {
    alert("Hello! My name is "+this.name+".");
  }
  this.showInfo = function(locationId) {
    var infoHolder = document.getElementById(locationId);
    infoHolder.innerHTML = this.name + "<br>";
    infoHolder.innerHTML += this.phone + "<br>";
    infoHolder.innerHTML += this.email + "<br>";
  }
}
