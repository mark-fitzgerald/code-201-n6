var UserInfo = function(name) {
  this.userName = name;
  this.created = Date.now();
  this.lastLogin = Date.now();
  this.getGreeting = function() {
    return "Welcome, "+this.userName;
  }
}

var currentUser = null;

function getUserName() {
  var userName = prompt("Please tell me your name:");
  currentUser = new UserInfo(userName);
  document.getElementById("greeting").innerHTML = "Welcome, "+userName;
  localStorage.setItem("userInfo", JSON.stringify(currentUser));
}

function showGreeting() {
  if (localStorage.getItem("userInfo") != null) {
    var storedUserInfo = JSON.parse(localStorage.getItem("userInfo"));
    currentUser = new UserInfo(storedUserInfo.userName);
    currentUser.created = storedUserInfo.created;
    currentUser.lastLogin = Date.now();
    document.getElementById("greeting").innerHTML = "Welcome, "+currentUser.userName;
  } else {
    var signInButton = document.createElement("input");
    signInButton.setAttribute("type", "button");
    signInButton.setAttribute("value", "Sign In");
    signInButton.addEventListener("click", getUserName);
    document.getElementById("greeting").appendChild(signInButton);
  }
}

window.addEventListener("load", showGreeting);
