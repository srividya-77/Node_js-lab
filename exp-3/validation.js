document.getElementById("form").onsubmit=function(e){

e.preventDefault()

let u=document.getElementById("username").value
let p=document.getElementById("password").value

if(u.length<4){
document.getElementById("uerror").innerHTML="Min 4 chars"
return
}

if(p.length<6){
document.getElementById("perror").innerHTML="Min 6 chars"
return
}

alert("Login Successful")

}