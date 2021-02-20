const requestURL = 'https://mattchorba-codemaster.github.io/Scoots/data/rentals.json';

fetch(requestURL)
  .then((response) => response.json())
  .then((jsObjectThree) => {
    console.log(jsObjectThree);
    document.getElementById('maxPersonsMetro').textContent = jsObjectThree.Rentals[0].maxpersons;
    document.getElementById('reservationHalfDayMetro').textContent = jsObjectThree.Rentals[0].reservationhalfday;
    document.getElementById('reservationFullDayMetro').textContent = jsObjectThree.Rentals[0].reservationfullday;
    document.getElementById('walkInHalfDayMetro').textContent = jsObjectThree.Rentals[0].walkinhalfday;
    document.getElementById('walkInFullDayMetro').textContent = jsObjectThree.Rentals[0].walkinfullday;

    document.getElementById('maxPersonsDio').textContent = jsObjectThree.Rentals[1].maxpersons;
    document.getElementById('reservationHalfDayDio').textContent = jsObjectThree.Rentals[1].reservationhalfday;
    document.getElementById('reservationFullDayDio').textContent = jsObjectThree.Rentals[1].reservationfullday;
    document.getElementById('walkInHalfDayDio').textContent = jsObjectThree.Rentals[1].walkinhalfday;
    document.getElementById('walkInFullDayDio').textContent = jsObjectThree.Rentals[1].walkinfullday;

    document.getElementById('maxPersonsPCX').textContent = jsObjectThree.Rentals[2].maxpersons;
    document.getElementById('reservationHalfDayPCX').textContent = jsObjectThree.Rentals[2].reservationhalfday;
    document.getElementById('reservationFullDayPCX').textContent = jsObjectThree.Rentals[2].reservationfullday;
    document.getElementById('walkInHalfDayPCX').textContent = jsObjectThree.Rentals[2].walkinhalfday;
    document.getElementById('walkInFullDayPCX').textContent = jsObjectThree.Rentals[2].walkinfullday;

    document.getElementById('maxPersonsATV').textContent = jsObjectThree.Rentals[3].maxpersons;
    document.getElementById('reservationHalfDayATV').textContent = jsObjectThree.Rentals[3].reservationhalfday;
    document.getElementById('reservationFullDayATV').textContent = jsObjectThree.Rentals[3].reservationfullday;
    document.getElementById('walkInHalfDayATV').textContent = jsObjectThree.Rentals[3].walkinhalfday;
    document.getElementById('walkInFullDayATV').textContent = jsObjectThree.Rentals[3].walkinfullday;

    document.getElementById('maxPersonsJeepFourDoor').textContent = jsObjectThree.Rentals[4].maxpersons;
    document.getElementById('reservationHalfDayJeepFourDoor').textContent = jsObjectThree.Rentals[4].reservationhalfday;
    document.getElementById('reservationFullDayJeepFourDoor').textContent = jsObjectThree.Rentals[4].reservationfullday;
    document.getElementById('walkInHalfDayJeepFourDoor').textContent = jsObjectThree.Rentals[4].walkinhalfday;
    document.getElementById('walkInFullDayJeepFourDoor').textContent = jsObjectThree.Rentals[4].walkinfullday;

    document.getElementById('maxPersonsJeepTwoDoor').textContent = jsObjectThree.Rentals[5].maxpersons;
    document.getElementById('reservationHalfDayJeepTwoDoor').textContent = jsObjectThree.Rentals[5].reservationhalfday;
    document.getElementById('reservationFullDayJeepTwoDoor').textContent = jsObjectThree.Rentals[5].reservationfullday;
    document.getElementById('walkInHalfDayJeepTwoDoor').textContent = jsObjectThree.Rentals[5].walkinhalfday;
    document.getElementById('walkInFullDayJeepTwoDoor').textContent = jsObjectThree.Rentals[5].walkinfullday;
  });