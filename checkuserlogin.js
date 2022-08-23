function checkuserlogin(){
    var currentUser = localStorage.getItem('username');
    if(currentUser == null){
      window.location.href = 'login.html';
    }
    else{
      window.location.href = 'account.html';
    }
  }

function logout(){
    localStorage.removeItem('username');
    localStorage.removeItem('email');
    window.location.href = 'index.html'
}


var button = document.getElementById('profile')
button.addEventListener('click', checkuserlogin)

var button = document.getElementById('log-out')
button.addEventListener('click', logout)