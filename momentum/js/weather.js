const API_KEY = "79514d9185ff29f697ab3fcf755ae9af"; 

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(URL).then(response => response.json()).then(data =>{
        const weatherContainer = document.querySelector("#weather span:first-child");
        const nameContainer = document.querySelector("#weather span:last-child");
        nameContainer.innerText =  data.name
        weatherContainer.innerText = `${data.weather[0].main}  /  ${data.main.temp}`;
    });
}

function onGeoErr(){
    alert("Cant Find you. No weather for you");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoErr)
