const fiveapiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=979273bdd8dbadf6f15b8b434db8be39';

fetch(fiveapiURL)
  .then((response) => response.json())
  .then((jsObjecttwo) => {
    console.log(jsObjecttwo);
    document.getElementById('fiveDayOne').textContent = jsObjecttwo.list[5].main.temp;
    document.getElementById('fiveDayTwo').textContent = jsObjecttwo.list[13].main.temp;
    document.getElementById('fiveDayThree').textContent = jsObjecttwo.list[21].main.temp;
    document.getElementById('fiveDayFour').textContent = jsObjecttwo.list[29].main.temp;
    document.getElementById('fiveDayFive').textContent = jsObjecttwo.list[37].main.temp;

  const imagesrcDayOne = 'https://openweathermap.org/img/w/' + jsObjecttwo.list[5].weather[0].icon + '.png';  // note the concatenation
  const descDayOne = jsObjecttwo.list[5].weather[0].description;  
  document.getElementById('dayOneImg').setAttribute('src', imagesrcDayOne); 
  document.getElementById('dayOneImg').setAttribute('alt', descDayOne);

  const imagesrcDayTwo = 'https://openweathermap.org/img/w/' + jsObjecttwo.list[13].weather[0].icon + '.png';  // note the concatenation
  const descDayTwo = jsObjecttwo.list[13].weather[0].description;  
  document.getElementById('dayTwoImg').setAttribute('src', imagesrcDayTwo); 
  document.getElementById('dayTwoImg').setAttribute('alt', descDayTwo);

  const imagesrcDayThree = 'https://openweathermap.org/img/w/' + jsObjecttwo.list[21].weather[0].icon + '.png';  // note the concatenation
  const descDayThree = jsObjecttwo.list[21].weather[0].description;  
  document.getElementById('dayThreeImg').setAttribute('src', imagesrcDayThree); 
  document.getElementById('dayThreeImg').setAttribute('alt', descDayThree);

  const imagesrcDayFour = 'https://openweathermap.org/img/w/' + jsObjecttwo.list[29].weather[0].icon + '.png';  // note the concatenation
  const descDayFour = jsObjecttwo.list[29].weather[0].description;  
  document.getElementById('dayFourImg').setAttribute('src', imagesrcDayFour); 
  document.getElementById('dayFourImg').setAttribute('alt', descDayFour);

  const imagesrcDayFive = 'https://openweathermap.org/img/w/' + jsObjecttwo.list[37].weather[0].icon + '.png';  // note the concatenation
  const descDayFive = jsObjecttwo.list[37].weather[0].description;  
  document.getElementById('dayFiveImg').setAttribute('src', imagesrcDayFive); 
  document.getElementById('dayFiveImg').setAttribute('alt', descDayFive);

  });
 
