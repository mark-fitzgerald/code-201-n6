function removeViaInnerHTML(idOfItem) {
  document.getElementById(idOfItem).innerHTML = "";
}

function removeViaRemoveChild(idOfItem) {
  var container = document.getElementById(idOfItem);
  var childNodes = container.childNodes;
  for (index = 0; index < childNodes.length; index++) {
    container.removeChild(childNodes[index]);
  }
}

function hideViaVisibility(idOfItem) {
  var container = document.getElementById(idOfItem);
  container.style.visibility = "hidden";
}

function hideViaDisplayNone(idOfItem) {
  var container = document.getElementById(idOfItem);
  container.setAttribute("class", "hide");
}

function hideViaPosition(idOfItem) {
  var container = document.getElementById(idOfItem);
  container.style.position = "relative";
  container.style.left = "-100em";
}

function hideViaOpacity(idOfItem) {
  var container = document.getElementById(idOfItem);
  container.style.opacity = "0";
}
