var primitiveArrayToSort=[11, 25, 2, 9, 10, 18, 7, 30];
var textArrayToSort=["Langston", "Danielle", "Sandra", "Allyson", "Jeffrey", "Bryan", "Heather", "Tanya"];
var objectArrayToSort=[];
for (var index = 0; index < primitiveArrayToSort.length; index++) {
  objectArrayToSort.push({name: textArrayToSort[index], number: primitiveArrayToSort[index]});
}
function sortAlpha(left, right) {
  if (left.name < right.name) { return -1 }
  else if (left.name > right.name) { return 1 }
  else { return 0 }
}
function sortNumber(left, right) {
  if (left.number < right.number) { return -1 }
  else if (left.number > right.number) { return 1 }
  else { return 0 }
}
