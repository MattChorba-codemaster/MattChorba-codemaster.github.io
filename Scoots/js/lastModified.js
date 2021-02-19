var d = new Date();
document.getElementById("year").innerHTML = '&copy;' + d.getFullYear();

let oLastModif = new Date(document.lastModified);
document.getElementById("lastModified").innerHTML = "Last Updated: " + oLastModif;