/*//Location One - PS*/
var locationOne = new Object ();
locationOne.name = 'Pioneer Square';
locationOne.id = 'pioneerSquare';
locationOne.listId = 'psTime';
locationOne.min = 17;
locationOne.max = 88;
locationOne.average = 5.2;
locationOne.total = 0;
locationOne.CustPerHour = function () {
  var randomCustomer = Math.floor(Math.random () * (locationOne.max - locationOne.min)) + locationOne.min;
  return randomCustomer
};

locationOne.cookiesSold = [];
locationOne.cookiesPerHour = function () {
  for (var index = 0; index < time.length; index++){
    var cookiesSold = Math.floor(locationOne.CustPerHour () * locationOne.average);
    locationOne.cookiesSold.push (cookiesSold);
    locationOne.total += cookiesSold;
    console.log(cookiesSold)
  }
};

/*Location Two - PA*/
var locationTwo = new Object ();
locationTwo.name = 'Portland Airport';
locationTwo.min = 6;
locationTwo.max = 24;
locationTwo.average = 1.2;
locationTwo.total = 0;
locationTwo.CustPerHour = function () {
  var randomCustomer = Math.floor(Math.random () * (locationTwo.max - locationTwo.min)) + locationTwo.min;
  return randomCustomer
};

locationTwo.cookiesSold = [];
locationTwo.cookiesPerHour = function () {
  for (var index = 0; index < time.length; index++){
    var cookiesSold = Math.floor(locationTwo.CustPerHour () * locationTwo.average);
    locationTwo.cookiesSold.push (cookiesSold);
    locationTwo.total += cookiesSold;
    }

};

/*Location Three - WS*/
var locationThree = new Object ();
locationThree.name = 'Washington Square';
locationThree.min = 11;
locationThree.max = 38;
locationThree.average = 1.9;
locationThree.CustPerHour = function () {
  var randomCustomer = Math.floor(Math.random () * (locationThree.max - locationThree.min)) + locationThree.min;
  return randomCustomer
};

locationThree.cookiesSold = [];
locationThree.cookiesPerHour = function () {
  for (var index = 0; index < time.length; index++){
    var cookiesSold = Math.floor(locationThree.CustPerHour () * locationThree.average);
    locationThree.cookiesSold.push (cookiesSold);
    }

};

/*Location Four - Sellwood*/
var locationFour = new Object ();
locationFour.name = 'Sellwood';
locationFour.min = 20;
locationFour.max = 48;
locationFour.average = 3.3;
locationFour.CustPerHour = function () {
  var randomCustomer = Math.floor(Math.random () * (locationFour.max - locationFour.min)) + locationFour.min;
  return randomCustomer
};

locationFour.cookiesSold = [];
locationFour.cookiesPerHour = function () {
  for (var index = 0; index < time.length; index++){
    var cookiesSold = Math.floor(locationFour.CustPerHour () * locationFour.average);
    locationFour.cookiesSold.push (cookiesSold);
    }

};

/*Location Five - PD*/
var locationFive = new Object ();
locationFive.name = 'Pearl District';
locationFive.min = 3;
locationFive.max = 24;
locationFive.average = 2.6;
locationFive.CustPerHour = function () {
  var randomCustomer = Math.floor(Math.random () * (locationFive.max - locationFive.min)) + locationFive.min;
  return randomCustomer
};

locationFive.cookiesSold = [];
locationFive.cookiesPerHour = function () {
  for (var index = 0; index < time.length; index++){
    var cookiesSold = Math.floor(locationFive.CustPerHour () * locationFive.average);
    locationFive.cookiesSold.push (cookiesSold);
    }

};

var time = [
  '10am: ',
  '11am: ',
  '12pm: ',
  '1pm: ',
  '2pm: ',
  '3pm: ',
  '4pm: ',
  '5pm: ',

];

var locations = [
  locationOne,
  locationTwo,
  locationThree,
  locationFour,
  locationFive,
];

for (var locationIndex = 0; locationIndex < locations.length; locationIndex++) {
  var stand = locations[locationIndex];
  document.getElementById(stand.id).innerHTML = stand.name;
  stand.cookiesPerHour ();
  for (var timeIndex = 0; timeIndex < time.length; timeIndex++){
    document.getElementById(stand.listId).innerHTML += "<li>" + time[timeIndex] +stand.cookiesSold[timeIndex] + "</li>"
  }
  document.getElementById(stand.listId).innerHTML += "<li>Total: " + stand.total + "</li>"
}


//
// document.getElementById('pioneerSquare').innerHTML = locationOne.name;
// locationOne.cookiesPerHour ();
// for (var index = 0; index < time.length; index++){
//   document.getElementById('psTime').innerHTML += "<li>" + time[index] +locationOne.cookiesSold[index] + "</li>"
// }
// // locationOne.writeResults ();
//   document.getElementById('psTime').innerHTML += "<li>Total: " + locationOne.total + "</li>"
//
// document.getElementById('portlandAirport').innerHTML = locationTwo.name;
// locationTwo.cookiesPerHour ();
// for (var index = 0; index < time.length; index++){
//   document.getElementById('paTime').innerHTML += "<li>" + time[index] +locationTwo.cookiesSold[index] + "</li>"
// }
// document.getElementById('paTime').innerHTML += "<li>Total: " + locationTwo.total + "</li>"
//
// document.getElementById('washingtonSquare').innerHTML = locationThree.name;
// locationThree.cookiesPerHour();
// for (var index = 0; index < time.length; index++){
//   document.getElementById('waTime').innerHTML += "<li>" + time[index] +locationThree.cookiesSold[index] + "</li>"
// }
//
// document.getElementById('sellwood').innerHTML = locationFour.name;
// locationFour.cookiesPerHour();
// for (var index = 0; index < time.length; index++){
//   document.getElementById('swTime').innerHTML += "<li>" + time[index] +locationFour.cookiesSold[index] + "</li>"
// }
//
// document.getElementById('pearlDistrict').innerHTML = locationFive.name;
// locationFive.cookiesPerHour();
// for (var index = 0; index < time.length; index++){
//   document.getElementById('pdTime').innerHTML += "<li>" + time[index] +locationFive.cookiesSold[index] + "</li>"
// }
