async function getWeather(){

let city=document.getElementById("city").value

let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=f37ed2c4bda126727462e1be970dfcc2`

let res=await fetch(url)

let data=await res.json()

document.getElementById("result").innerHTML=
"Weather: "+data.weather[0].description+
"<br>Temperature: "+(data.main.temp-273.15).toFixed(2)+" °C"

}