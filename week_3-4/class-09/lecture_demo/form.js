function showData() {
  var form = document.forms['newStoreForm'];
  var newName = form.elements['storeName'];
  var minCustomers = form.elements['minCustomers'];
  var maxCustomers = form.elements['maxCustomers'];
  var message = "New Store:";
  message += "\n   Name: "+newName.value;
  message += "\n   Min:  "+minCustomers.value;
  message += "\n   Max:  "+maxCustomers.value;
  alert(message);
}
