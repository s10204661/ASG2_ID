//Posting (sign up) , create a new username ID
$("#signup-btn").click(function(){
  console.log('temp');
    var username = $("#username").val();
    var email = $("#email").val();
    var password = $("#password").val();
    var account = {"username": username,"email": email,"password": password};
    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://interactivedev-69de.restdb.io/rest/login-details",
      "method": "POST",
      "headers": {
        "content-type": "application/json",
        "x-apikey": "62c52e2d03ab3e0c7b0cf11e",
        "cache-control": "no-cache"
      },
      "processData": false,
      "data": JSON.stringify(account)
    }

    $.ajax(settings).done(function (response) {
      $("#response").html("<div class='alert alert-success'>Account successfully created</div>");
      clearField();
    });
})

function clearField(){
    $("#username").val("");
    $("#email").val("");
    $("#password").val("");
}

$("#login-btn").click(function(){
  var username = $("#username").val();
  var password = $("#password").val();
  console.log(username);
  console.log(password);
  var settings = {
    "async": true,
    "crossDomain": true,
    "url": "https://interactivedev-69de.restdb.io/rest/login-details",
    "method": "GET",
    "headers": {
      "content-type": "application/json",
      "x-apikey": "62c52e2d03ab3e0c7b0cf11e",
      "cache-control": "no-cache"
    }
  }
  $.ajax(settings).done(function (response) {
    // console.log("yes");
    // console.log(response);
    // console.log(response.length);
    var logstatus = false;
    for (var i=0; i<response.length ; i++){
      var checkuser = response[i].username;
      var checkpass = response[i].password;
      // console.log(checkuser);
      // console.log(checkpass);
      if (checkuser === username && checkpass === password){
        $("#response").html("<div class='alert alert-success mt-2'>Log In Successful, Click on Account again!</div>");
        clearField();
        logstatus = true;
        window.location = 'account.html';
        alert("You have logged in")
        
      
        // Store data locally , to be accessed using profile
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        
        window.location.href = 'index.html';
        return;
      }
      if (logstatus == false){
        $("#response").html("<div class='alert alert-danger mt-2'>Try again</div>");
        clearField();
      }
    }
  });
})