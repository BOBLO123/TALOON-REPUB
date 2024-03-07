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
  //add user to sign in objects
  username = document.getElementById('name').value
  pass = document.getElementById('pass').value
  let user = object.create(username)
  user.name = username
  user.pass = pass
  alert('${user.name} ${user.pass}')
}
const test = {name: 'test', pass: '1234')
