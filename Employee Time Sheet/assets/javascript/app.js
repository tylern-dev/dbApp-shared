$(document).ready(function() {
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyD246s71FrmI-m4SqFFp6F54AuEEuasJFg",
    authDomain: "test-users-4f26e.firebaseapp.com",
    databaseURL: "https://test-users-4f26e.firebaseio.com",
    projectId: "test-users-4f26e",
    storageBucket: "test-users-4f26e.appspot.com",
    messagingSenderId: "528421473452"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var tableData = $("#employee-table");
  var tdOpen = "<td>";
  var tdClose = "</td>";

  database.ref().on("child_added", function(snapshot) {
    var result = snapshot.val();
    //   console.log(result[prop].name)
    //   var data = result[prop]
    $("#employee-table").append(
      "<tr>" +
        tdOpen +
        result.name +
        tdClose +
        tdOpen +
        result.role +
        tdClose +
        tdOpen +
        result.startDate +
        tdOpen +
        tdClose +
        tdOpen +
        result.monthlyRate +
        tdClose +
        " </tr>"
    );
  });

  $("#add-user").on("click", function(e) {
    e.preventDefault();

    var name = $("#employee-name").val().trim();
    var role = $("#employee-role").val().trim();
    var startDate = $("#employee-date").val().trim();
    var monthlyRate = $("#employee-rate").val().trim();

    console.log("submitted clicked");
    console.log(database);

    database.ref().push({
      name: name,
      role: role,
      startDate: startDate,
      monthlyRate: monthlyRate,
      dateAdded: firebase.database.ServerValue.TIMESTAMP
    });
  });
});
