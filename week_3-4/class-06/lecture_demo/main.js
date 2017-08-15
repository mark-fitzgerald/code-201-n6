var student = {};
student["name"] = "John Doe";
student["phone"] = "503-555-1234";
student["email"] = "john@gmail.com";
student["sayGreeting"] = function() {
  alert("Hello! I'm " + student["name"] + ". Good to meet you.");
}
var newProperty = "lastCourse";
var newValue = "Code 102";
student[newProperty] = newValue;

var student2 = {
  name: "Julie Doe",
  phone: "503-555-1111",
  email: "julie@gmail.com",
  sayGreeting: function() {
    alert("Hello! I'm " + student2.name + ". Good to meet you.");
  },
  writeInfo: function() {
    document.getElementById("student-info").innerHTML = student2.name + "<br>";
    document.getElementById("student-info").innerHTML += student2.phone + "<br>";
    document.getElementById("student-info").innerHTML += student2.email + "<br>";
  },
};

var instructor = new Object();
instructor.name = "Jane Citizen";
instructor.phone = "503-555-9876";
instructor.email = "jane@gmail.com";
instructor.sayGreeting = function() {
  alert("Hello! I'm " + instructor.name + ". Good to meet you.");
}
