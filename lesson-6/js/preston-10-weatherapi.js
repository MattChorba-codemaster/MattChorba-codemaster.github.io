const apiURL = 'https://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=d135288a5a341cde16f7e7dd0c5ed6c3';

fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('highTemp').textContent = jsObject.main.temp_max;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;
    document.getElementById('humidity').textContent = jsObject.main.humidity;

  const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png';  // note the concatenation
  const desc = jsObject.weather[0].description;  // note how we reference the weather array
  document.getElementById('currentWeather').textContent = desc;
  document.getElementById("windChillValue").textContent = "N/A";

  windchill();
  
  });
 
