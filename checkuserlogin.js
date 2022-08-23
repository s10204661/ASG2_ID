function checkuserlogin(){
    var currentUser = localStorage.getItem('username');
    if(currentUser == null){
      window.location.href = 'login.html';
    }
    else{
      console.log(currentUser)
      window.location.href = 'account.html';
    }
  }

function logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    window.location.href = 'index.html'
    alert("You have logged out")
}


var button = document.getElementById('profile')
button.addEventListener('click', checkuserlogin)

var button = document.getElementById('log-out')
button.addEventListener('click', logout)