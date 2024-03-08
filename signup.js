// get user list from usr.json
fetch("/private/usr.json")
//sign up. This took me 1 hour
function signup(){
  let username = document.getElementById("name").value
  let pass = document.getElementById("pass").value
  const users = JSON.parse("{'usrname':" + username + ", 'password':" + pass + "}")
  if (users = "{'usrname':" + username + ", 'password':" + pass + "}"){
    alert("Account Already Exists")
  } else{
    let newuser = {username: username, pass: pass}
    let adduser = JSON.stringify(newuser)
  }
}
//sign in
function signin(){
  let username = document.getElementById("name").value
  let pass = document.getElementById("pass").value
  const user = JSON.parse("{'usrname':" + username + ", 'password':" + pass + "}")
  if (user = "{'usrname':" + username + ", 'password':" + pass + "}"){
    let signedin = "true"
    window.location.replace("talrmain.html")
  } else{
    alert("Account Does Not Exist")
    window.location.replace("index.html")
  }
}
