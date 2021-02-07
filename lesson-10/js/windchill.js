var t = parseFloat(document.getElementById("highTemp").innerHTML);

var s = parseFloat(document.getElementById("windSpeed").innerHTML);

var expVal = Math.pow(s, 0.16);

document.getElementById("windChillValue").innerHTML = "N/A";

var f = 35.74 + (0.6215 * t) - (35.75 * expVal) + (0.4275 * t * expVal);

// Output
if((t <= 50) && (s >= 3.0))
{
    document.getElementById("windChillValue").innerHTML = f.toFixed(0);
} 