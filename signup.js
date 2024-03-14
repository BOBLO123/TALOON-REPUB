//Third time I've completely restarted

function signup(){
  let exist = localStorage.getItem("username-tal")
  let exist2 = localStorage.getItem("password-tal")
  if (exist != null){
    alert("User Already Exists")
  } else if (exist2 != null){
    alert("User Already Exists")
  } else{
  localStorage.setItem("username-tal", document.getElementById('username'));
  localStorage.setItem("password-tal", document.getElementById('password'));
  }
}
function signin(){
  localStorage.getItem("username-tal")
  localStorage.getItem("password-tal")
  let signedin = ["true", exist, exist2]
  location.replace("talrmain.html")
}
