// var listToUse = document.getElementById("example-list");
// var cookieStandItem = document.createElement("li");
// cookieStandItem.innerText = "Cookie Stand Name Goes Here";
// listToUse.appendChild(cookieStandItem);
//
// cookieStandItem = document.createElement("li");
// cookieStandItem.innerText = "- more information goes here -";
// listToUse.appendChild(cookieStandItem);

function addListItem(contentToAdd, itemName = "li") {
  var listToUse = document.getElementById("example-list");
  var cookieStandItem = document.createElement(itemName);
  cookieStandItem.innerText = contentToAdd;
  listToUse.appendChild(cookieStandItem);
}

var cookieStores = [];
cookieStores.push();

for (storeIndex = 0; storeIndex < cookieStores.length; storeIndex++) {
  addListItem("Cookie Store #1 Name");
  addListItem("- more data here -");
  addListItem("Total: ###");
}

// The for loop above would replace the following lines, once the array is populated with stores
addListItem("Cookie Store #1 Name", "h4");
addListItem("- more data here -");
addListItem("Total: ###");

addListItem("Cookie Store #2 Name", "h4");
addListItem("- more data here -");
addListItem("Total: ###");

addListItem("Cookie Store #3 Name", "h4");
addListItem("- more data here -");
addListItem("Total: ###");
