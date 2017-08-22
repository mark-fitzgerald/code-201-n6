var Student = function(name, phone, email) {
  this.name = name;
  this.phone = phone;
  this.email = email;
  this.getTableRowInfo = function() {
    var row = document.createElement("tr");
    var nameCell = document.createElement("td");
    nameCell.innerText = this.name;
    row.appendChild(nameCell);
    var phoneCell = document.createElement("td");
    phoneCell.innerText = this.phone;
    row.appendChild(phoneCell);
    var emailCell = document.createElement("td");
    emailCell.innerText = this.email;
    row.appendChild(emailCell);
    return row;
  }
}

var roster = [];
roster.push(new Student("John Doe", "503-555-1234", "john@class.edu"));
roster.push(new Student("Jane Citizen", "503-555-9876", "jane@class.edu"));
roster.push(new Student("Julie Person", "503-555-5555", "julie543@hotmail.com"));
roster.push(new Student("Jimmy Student", "503-555-1111", "jimmy@test.com"));

function buildRosterTable() {
  var tableBody = document.getElementById("roster-table");
  tableBody.innerHTML = "<tr><th>Name</th><th>Phone</th><th>E-Mail</th></tr>";
  for (var index = 0; index < roster.length; index++) {
    tableBody.appendChild(roster[index].getTableRowInfo());
  }
}

function addStudent() {
  var name = prompt("Student Name:");
  var phone = prompt("Student Phone:");
  var email = prompt("Student E-Mail:");
  var newStudent = new Student(name, phone, email);
  roster.push(newStudent);
  buildRosterTable();
}

buildRosterTable();
