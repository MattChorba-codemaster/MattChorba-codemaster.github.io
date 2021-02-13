const apiURLFishHaven = 'https://api.openweathermap.org/data/2.5/weather?id=5585010&units=imperial&appid=d135288a5a341cde16f7e7dd0c5ed6c3';

fetch(apiURLFishHaven)
  .then((response) => response.json())
  .then((jsObjectFishHaven) => {
    console.log(jsObjectFishHaven);
    document.getElementById('highTemp').textContent = jsObjectFishHaven.main.temp_max;
    document.getElementById('windSpeed').textContent = jsObjectFishHaven.wind.speed;
    document.getElementById('humidity').textContent = jsObjectFishHaven.main.humidity;

  const imagesrc = 'https://openweathermap.org/img/w/' + jsObjectFishHaven.weather[0].icon + '.png';  // note the concatenation
  const desc = jsObjectFishHaven.weather[0].description;  // note how we reference the weather array
  document.getElementById('currentWeather').textContent = desc;
  document.getElementById("windChillValue").textContent = "N/A";

  windchill();
  
  });
 
