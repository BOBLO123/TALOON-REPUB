// x is the id of the form, y is the requirements for a name.
function check(x){
  // id should have quotes around it
  value = document.getElementById(x).value
  if (value > 6){
    signup(x)
  
  } else {
    alert("Password must be at least 6 characters long")
}
function signup(x){
  //add user to sign in json
  let signin = document.getElementById(x).value
  let users = JSON.parse(fs.readFileSync("private/usr.json")); 
  users.newData = signin;
  fs.writeFileSync("private/usr.json", JSON.stringify(users));
}
