var students = new Array();
students.push(new Array("Mark Fitzgerald", "503-555-1234", "mark@alchemycodelab.com"));
students.push(new Array("John Doe", "503-555-9876", "john@alchemycodelab.com"));
students.push(new Array("Jane Citizen", "503-555-9999", "jane@alchemycodelab.com"));
students.push(new Array("Jerry Person", "503-555-1111", "jerry@alchemycodelab.com"));

for (var index = 0; index < students.length; index++) {
  addStudentToTable(students[index]);
}

function addStudentToTable(studentInfo) {
  console.log("Referenced Array: ");
  console.log(studentInfo);
  var studentData = "<tr>";
  studentData += "<td>";
  studentData += studentInfo[0];
  studentData += "</td>";
  studentData += "<td>";
  studentData += studentInfo[1];
  studentData += "</td>";
  studentData += "<td>";
  studentData += studentInfo[2];
  studentData += "</td>";
  studentData += "</tr>";
  document.getElementById("students-table").innerHTML += studentData;
}
