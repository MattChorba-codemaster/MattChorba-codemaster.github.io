function windChill() {
    var s = parseFloat(document.getElementById("windSpeed").innerHTML);
    var t = parseFloat(document.getElementById("highTemp").innerHTML);
    var f = 35.74 + (0.6215 * t) - (35.75 * (pow(s, 0.16))) + (0.4275 * t * (pow(s, 0.16)));

    // Output
    document.getElementById("windChillValue").innerHTML = "N/A";

    if((t <= 50) && (s >= 3.0))
    {
    document.getElementById("windChillValue").innerHTML = f;
    } 

}