//Third time I've completely restarted

function signup(){
  let exist = localStorage.getItem("username")
  let exist2 = localStorage.getItem("password")
  if (exist != null){
    alert("User Already Exists")
  } else if (exist2 != null){
    alert("User Already Exists")
  } else{
  localStorage.setItem("username", document.getElementById('username'));
  localStorage.setItem("password", document.getElementById('password'));
  }
}
function signin(){
  localStorage.getItem("username")
  localStorage.getItem("password")
  let signedin = ["true", exist, exist2]
  location.replace("talrmain.html")
}
