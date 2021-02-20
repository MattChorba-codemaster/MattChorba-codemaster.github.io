const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=3521342&units=imperial&appid=d135288a5a341cde16f7e7dd0c5ed6c3';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currentTemp').textContent = jsObject.main.temp;
    document.getElementById('currentWeather').textContent = jsObject.weather[0].description;
    document.getElementById('humidity').textContent = jsObject.main.humidity;

  });