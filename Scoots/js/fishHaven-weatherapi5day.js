const fiveapiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=5585010&units=imperial&appid=979273bdd8dbadf6f15b8b434db8be39';

var fiveDaysArray = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
                //     0      1       2      3       4      5      6

fetch(fiveapiURL)
  .then((response) => response.json())
  .then((jsObjecttwo) => {
        console.table(jsObjecttwo);
  const array = jsObjecttwo.list;

  for (let i = 0; i < array.length; i++ ) 
  {
    if(array[i].dt_txt.includes("18:00:00"))
    {
      console.log(array[i].weather[0].icon);
      var date = new Date(array[i].dt_txt);
      console.log(date.getDay());
      console.log(fiveDaysArray[date.getDay()]);
      console.log(array[i].main.temp);

      let card = document.createElement('section');
      let day = document.createElement('p');
      let temp = document.createElement('p');
      let weatherIcon = document.createElement('img');

      var imagesrc = 'https://openweathermap.org/img/wn/' + array[i].weather[0].icon + '@2x.png';
      day.textContent = date;
      temp.textContent = array[i].main.temp;
      weatherIcon.setAttribute('src', imagesrc);
      weatherIcon.setAttribute('alt', array[i].weather[0].description);

      card.appendChild(day);
      card.appendChild(weatherIcon);
      card.appendChild(temp);
      

      document.querySelector('div.cardstwo').appendChild(card);
    }
  }

  });
 
