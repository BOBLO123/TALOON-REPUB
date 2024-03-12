//Third time I've completely restarted

if(!localStorage.getItem("credentials")) localStorage.setItem("credentials", JSON.stringify([]));

var arr = JSON.parse(localStorage.getItem("credentials"));
console.log(arr)

let user_name = document.getElementById("username");
let user_paswrd = document.getElementById("password");

let store_data = () => {
  credentials.push({username: user_name, password: user_paswrd});
  localStorage.setItem("credentials", JSON.stringify(arr))

};
