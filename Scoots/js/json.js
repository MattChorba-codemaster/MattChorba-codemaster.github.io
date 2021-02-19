const requestURL = 'https://byui-cit230.github.io/weather/data/towndata.json';

var i = 5;
var j = 1;

fetch(requestURL)
      .then(function (response) {
        return response.json();
      })
      .then(function (jsonObject) {
        console.table(jsonObject);  // temporary checking for valid response and data parsing
        const towns = jsonObject['towns'];
        do {
            let card = document.createElement('section');
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let townPic = document.createElement('img');

            h2.textContent = towns[i].name;
            h3.textContent = towns[i].motto;
            p1.textContent = 'Year Founded: ' + towns[i].yearFounded;
            p2.textContent = 'Population: ' + towns[i].currentPopulation;
            p3.textContent = 'Annual Rain Fall: ' + towns[i].averageRainfall;
            townPic.setAttribute('src', 'images/Weather/' + towns[i].photo);
            townPic.setAttribute('alt', towns[i].name);

            card.appendChild(div);
            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            card.appendChild(townPic);
          

            document.querySelector('div.cards').appendChild(card);
            i++;
          } while(i < 7);

          do {
            let card = document.createElement('section');
            let div = document.createElement('div');
            let h2 = document.createElement('h2');
            let h3 = document.createElement('h3');
            let p1 = document.createElement('p');
            let p2 = document.createElement('p');
            let p3 = document.createElement('p');
            let townPic = document.createElement('img');

            h2.textContent = towns[j].name;
            h3.textContent = towns[j].motto;
            p1.textContent = 'Year Founded: ' + towns[j].yearFounded;
            p2.textContent = 'Population: ' + towns[j].currentPopulation;
            p3.textContent = 'Annual Rain Fall: ' + towns[j].averageRainfall;
            townPic.setAttribute('src', 'images/Weather/' + towns[j].photo);
            townPic.setAttribute('alt', towns[j].name);

            card.appendChild(div);
            div.appendChild(h2);
            div.appendChild(h3);
            div.appendChild(p1);
            div.appendChild(p2);
            div.appendChild(p3);
            card.appendChild(townPic);

            document.querySelector('div.cards').appendChild(card);
            j++;
          } while(j == 1);
      });