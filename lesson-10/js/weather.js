var d = new Date();
var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" ];
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

document.getElementById("year").innerHTML = '&copy;' + d.getFullYear() + '&#124; Matthew Anthony Chorba &#124; Ohio &#124; <a id="byuiLink" href="https://www.byui.edu/online">BYUI Online Learning</a>';

let oLastModif = new Date(document.todayDate);
document.getElementById("todayDate").innerHTML = days[d.getDay()] + ', ' + d.getDate() +' ' + months[d.getMonth()] + ' ' + d.getFullYear();

document.getElementById("today").innerHTML = days[d.getDay() + 1];
document.getElementById("todayPlusOne").innerHTML = days[d.getDay() + 2];
document.getElementById("todayPlusTwo").innerHTML = days[d.getDay() + 3];
document.getElementById("todayPlusThree").innerHTML = days[d.getDay() + 4];
document.getElementById("todayPlusFour").innerHTML = days[d.getDay() + 5];

function toggleMenu() {
    document
        .getElementsByClassName("navigation")[0]
        .classList.toggle("responsive");
}