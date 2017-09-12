var Student = function(name, picture) {
  this.name = name;
  this.github = "";
  this.picture = picture;
  this.history = null;
}

var students = [];

students.push(new Student("John Doe", "images/General.png"));
students.push(new Student("Jane Student", "images/General.png"));
students.push(new Student("Jack Public", "images/General.png"));
students.push(new Student("Julie Private", "images/General.png"));
students.push(new Student("Jimmy Person", "images/General.png"));

function buildList() {
  var list = document.getElementById("student-list");
  for (index = 0; index < students.length; index++) {
    var student = students[index];
    var studentItem = document.createElement("li");
    studentItem.innerText = student.name;
    studentItem.addEventListener("click", showStudentInfo);
    studentItem.dataset.index = index;
    list.appendChild(studentItem);
  }
}

function showStudentInfo(event) {
  var clickedItem = event.target;
  var studentIndex = parseInt(clickedItem.dataset.index);
  var student = students[studentIndex];
  document.getElementById('student-name').innerText = student.name;
  if (student.github == "") {
    var accountName = prompt("GitHub Account Name: ");
    student.github = accountName;
  }
  var githubURL = "http://www.github.com/"+student.github;
  document.getElementById('repo-name').innerText = githubURL;
  document.getElementById('repo-name').href = githubURL;
}

window.addEventListener("load", buildList);
