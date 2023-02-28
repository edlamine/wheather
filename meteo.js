
let cityname = document.getElementById('city_name');
let windespped = document.getElementById('vitesse du vent');
let temp = document.getElementById('temp');
let icon = document.getElementById('icon');
let field = document.getElementById('ville');


function getCityName(){
    let inputcity = field.value;
    let link = `http://api.weatherstack.com/current?access_key=696a69fa850aa5d8fd9c50df4c693478&query=${inputcity}`;
    console.log(link);
    
    fetch(link)
    .then(res => res.json())
    .then(data => {
        console.log(data);
        const {name} = data.location;
        cityname.innerText = name;
        const {wind_speed,temperature,weather_icons} = data.current;
        windespped.innerText = "vitesse du vent :"+wind_speed;
        temp.innerText = "temperature :"+ temperature;
        icon.src = weather_icons;
    })
}


    
