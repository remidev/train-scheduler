// Initialize Firebase
var config = {

  apiKey: "AIzaSyBJJgaO64VngQxQoozmewDchK9hrBzDxTM",
  authDomain: "train-scheduler-746cd.firebaseapp.com",
  databaseURL: "https://train-scheduler-746cd.firebaseio.com",
  projectId: "train-scheduler-746cd",
  storageBucket: "",
  messagingSenderId: "787476538218"

};

firebase.initializeApp(config);

// Store Database
var database = firebase.database();

// Add Train Button
$("#add-train-btn").on("click", function (event) {
  event.preventDefault();

  // User Input Variables
  var trainName = $("#train-name-input").val().trim();
  var trainDestination = $("#destination-input").val().trim();
  var trainTime = $("#time-input").val().trim();
  var trainFrequency = $("#frequency-input").val().trim();

  // Temp Local Train Object
  var newTrain = {
    name: trainName,
    destination: trainDestination,
    time: trainTime,
    frequency: trainFrequency
  };

  // Push Object
  database.ref().push(newTrain);

  // Logs Object Data
  console.log(newTrain.name);
  console.log(newTrain.destination);
  console.log(newTrain.time);
  console.log(newTrain.frequency);

  alert("Train successfully added");

  // Clear Form
  $("#train-name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");

});

// Firebase New Entry Event
database.ref().on("child_added", function (childSnapshot) {
  console.log(childSnapshot.val());

  // New Entry Data 
  var trainName = childSnapshot.val().name;
  var trainDestination = childSnapshot.val().destination;
  var trainTime = childSnapshot.val().time;
  var trainFrequency = childSnapshot.val().frequency;

  // Log New Entry Data
  console.log(trainName);
  console.log(trainDestination);
  console.log(trainTime);
  console.log(trainFrequency);

  // Update Table Data
  var newRow = $("<tr>").append(
    $("<td>").text(trainName),
    $("<td>").text(trainDestination),
    $("<td>").text(trainTime),
    $("<td>").text(trainFrequency)
  );

  // Append New Data
  $("#train-table > tbody").append(newRow);

});

  //FOR REFERENCE

  // var empStart = moment($("#start-input").val().trim(), "MM/DD/YYYY").format("X");

  // -----------

  // Prettify the employee start
  // var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");

  // Calculate the months worked using hardcore math
  // To calculate the months worked
  // var empMonths = moment().diff(moment(empStart, "X"), "months");
  // console.log(empMonths);

  // Calculate the total billed rate
  // var empBilled = empMonths * empRate;
  // console.log(empBilled);

  //--------------