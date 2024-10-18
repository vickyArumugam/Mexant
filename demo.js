let userObject= JSON.parse(localStorage.getItem('userdata'));
console.log(userObject[0].name);

let name1 = document.getElementById('name');
let email=document.getElementsByClassName('email');
let sub=document.getElementsByClassName('sub');
let reson=document.getElementsByClassName('reson');

if (userObject && userObject.length > 0) {
  let uname =userObject[0].name;
  name1.innerText=uname;
}
else{
    console.log("no data");
}


