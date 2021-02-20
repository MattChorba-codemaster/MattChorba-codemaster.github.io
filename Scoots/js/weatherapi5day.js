const fiveapiURL = 'https://api.openweathermap.org/data/2.5/forecast?id=3521342&units=imperial&appid=979273bdd8dbadf6f15b8b434db8be39';

var fiveDaysArray = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
                //     0      1       2      3       4      5      6

fetch(fiveapiURL)
  .then((response) => response.json()) //list[35].dt_txt
  .then((jsObjecttwo) => {
        console.table(jsObjecttwo);
  const array = jsObjecttwo.list;

  for (let i = 39; i > 31; i-- ) 
  {
    if(array[i].dt_txt.includes("12:00:00"))
    {
      console.log(array[i].main.temp);
      var date = new Date(array[i].dt_txt);
      console.log(date.getDay());
      console.log(fiveDaysArray[date.getDay()]);

      let card = document.createElement('section');
      let tempInFiveDays = document.createElement('p');

      tempInFiveDays.textContent = "5 Days from Now, at High Noon: " + array[i].main.temp;

      card.appendChild(tempInFiveDays);
      
      document.querySelector('div.weatherSummary').appendChild(card);
    }
  }

  });
 
