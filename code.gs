function onOpen() {
  var ui = SpreadsheetApp.getUi();
  ui.createMenu('My Custom Menu')
      .addItem('Run My Function', 'addNumber')
  .addToUi();
}

function myFunction() {
  SpreadsheetApp.getUi()
     .alert('Running My Function');
}

//Stored using string and converted into integer using the Google App script.
function addNumber() {
  let string = "40";
  let convertingIntoInteger = Number(string);
  var sheet = SpreadsheetApp.getActiveSheet();
  sheet.appendRow([convertingIntoInteger]);
}
typeofcellvalue("A1")

//Second Column:-- Getting the column value in integer
//Getting the value from spreadsheet in number
function typeofcellvalue(reference) {
  var ss = SpreadsheetApp.getActive();
  var rng = ss.getRange(reference);
  var value = rng.getValue();
  console.log(typeof value);
}

typeofcellvalue("B1")


//Third column:--The calculation is made from the google sheet in number format
//Calculated To Google Sheet
function score(risk, time) {
  let score = risk - (risk * time);
  let number = Number(score);
  return number;
}
typeofcellvalue("C1")
