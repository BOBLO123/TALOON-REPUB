//Third time I've completely restarted

function signup(){
  let username = document.getElementById("username")
  let password = document.getElementById("password")
  localStorage.setItem("username-tal", document.getElementById('username'));
  localStorage.setItem("password-tal", document.getElementById('password'));
  alert("Signed Up!")
  }
}
function signin(){
  localStorage.getItem("username-tal")
  localStorage.getItem("password-tal")
  let signedin = ["true", username, password]
  location.replace("talrmain.html")
}
