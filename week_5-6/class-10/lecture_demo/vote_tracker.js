var imageNames = ["bag.jpg", "banana.jpg", "boots.jpg", "chair.jpg", "cthulhu.jpg", "dragon.jpg", "pen.jpg", "scissors.jpg", "shark.jpg", "sweep.jpg", "unicorn.jpg", "usb.jpg", "water_can.jpg", "wine_glass.jpg"];

function addImage(imageFileName) {
  var container = document.getElementById("image-container");
  var image = document.createElement("img");
  image.src = imageFileName;
  image.addEventListener("click", recordClick);
  container.appendChild(image);
}

function showImages() {
  var index = Math.floor(Math.random() * 14)
  addImage("images/"+imageNames[index]);
  index = Math.floor(Math.random() * 14)
  addImage("images/"+imageNames[index]);
  index = Math.floor(Math.random() * 14)
  addImage("images/"+imageNames[index]);
}

function recordClick(event) {
  var imageSource = event.target.src;
  console.log("Image Clicked: "+imageSource);
}

window.addEventListener("load", showImages);
