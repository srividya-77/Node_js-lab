function register() {

let user = document.getElementById("regUser").value
let pass = document.getElementById("regPass").value

localStorage.setItem("user", user)
localStorage.setItem("pass", pass)

alert("Registered Successfully")
window.location="login.html"
}

function login(){

let u=document.getElementById("loginUser").value
let p=document.getElementById("loginPass").value

if(u==localStorage.getItem("user") && p==localStorage.getItem("pass")){
alert("Login Success")
window.location="catalog.html"
}
else{
alert("Invalid Login")
}
}

function addCart(book){

let cart=JSON.parse(localStorage.getItem("cart"))||[]
cart.push(book)
localStorage.setItem("cart",JSON.stringify(cart))

alert("Book Added to Cart")
}

window.onload=function(){

let list=document.getElementById("cartItems")

if(list){

let cart=JSON.parse(localStorage.getItem("cart"))||[]

cart.forEach(item=>{
let li=document.createElement("li")
li.textContent=item
list.appendChild(li)
})

}
}