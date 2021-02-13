const apiURLSodaSprings = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&appid=d135288a5a341cde16f7e7dd0c5ed6c3';

fetch(apiURLSodaSprings)
  .then((response) => response.json())
  .then((jsObjectSodaSprings) => {
    console.log(jsObjectSodaSprings);
    document.getElementById('highTemp').textContent = jsObjectSodaSprings.main.temp_max;
    document.getElementById('windSpeed').textContent = jsObjectSodaSprings.wind.speed;
    document.getElementById('humidity').textContent = jsObjectSodaSprings.main.humidity;

  const imagesrc = 'https://openweathermap.org/img/w/' + jsObjectSodaSprings.weather[0].icon + '.png';  // note the concatenation
  const desc = jsObjectSodaSprings.weather[0].description;  // note how we reference the weather array
  document.getElementById('currentWeather').textContent = desc;
  document.getElementById("windChillValue").textContent = "N/A";

  windchill();
  
  });
 
