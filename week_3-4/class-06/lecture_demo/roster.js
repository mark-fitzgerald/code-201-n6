var student = {
  name: "John Doe",
  phone: "503-555-1234",
  email: "john@gmail.com",
  writeInfo: function() {
    var rowData = "<tr><td>" + student.name + "</td>";
    rowData += "<td>" + student.phone + "</td>";
    rowData += "<td>" + student.email + "</td></tr>";
    return rowData;
  }
}

var student2 = {
  name: "Jane Citizen",
  phone: "503-555-9876",
  email: "jane@gmail.com",
  writeInfo: function() {
    var rowData = "<tr><td>" + student2.name + "</td>";
    rowData += "<td>" + student2.phone + "</td>";
    rowData += "<td>" + student2.email + "</td></tr>";
    return rowData;
  }
}

var students = new Array();
students.push({name:"Mark Fitzgerald", phone:"503-555-5555", email:"mark@gmail.com"});
students.push({name:"John Doe", phone:"503-555-1234", email:"john@gmail.com"});
students.push({name:"Jane Citizen", phone:"503-555-9876", email:"jane@gmail.com"});
students.push({name:"Julie Student", phone:"503-555-7777", email:"julie@gmail.com"});

function getStudentInfo(studentObject) {
  var rowData = "<tr><td>" + studentObject.name + "</td>";
  rowData += "<td>" + studentObject.phone + "</td>";
  rowData += "<td>" + studentObject.email + "</td></tr>";
  return rowData;
}
function buildTable() {
  for (var index = 0; index < students.length; index++) {
    var studentRow = getStudentInfo(students[index]);
    document.getElementById('roster').innerHTML += studentRow;
  }

  // document.getElementById('roster').innerHTML += student.writeInfo();
  // document.getElementById('roster').innerHTML += student2.writeInfo();
}

function addStudent() {
  var newName = prompt("Student Name: ");
  var newPhone = prompt("Student Phone: ");
  var newEmail = prompt("Student E-Mail: ");
  var newStudent = {name: newName, phone: newPhone, email: newEmail};
  students.push(newStudent);
  var studentRow = getStudentInfo(newStudent);
  document.getElementById('roster').innerHTML += studentRow;
}

function showNames() {
  var message = "Students Rostered:"
  for (var index = 0; index < students.length; index++) {
    message += "\n   "+students[index].name;
  }
  alert(message);
}

buildTable();
