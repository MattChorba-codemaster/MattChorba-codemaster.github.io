const requestURLtwo = 'https://byui-cit230.github.io/weather/data/towndata.json';

var i = 5;
var j = 0;

fetch(requestURLtwo) 
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObjectPreston) {
        console.table(jsonObjectPreston);  
        const townEvents = jsonObjectPreston['towns'];
  
            let card = document.createElement('section');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');

            p1.textContent = townEvents[i].events[j];
            p2.textContent = townEvents[i].events[j + 1];
            p3.textContent = townEvents[i].events[j + 2];

            card.appendChild(p1);
            card.appendChild(p2);
            card.appendChild(p3);

            document.querySelector('div.townEventsPreston').appendChild(card);
          
          

      });