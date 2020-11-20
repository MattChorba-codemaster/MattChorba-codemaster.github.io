function doInputOutput()  {

    // Input
    // get a temperature from the first text field and store the value into a variable named temperature
    // get a wind speed from the second text field and store the value into a variable named windspeed
    var temperature = parseFloat(document.getElementById("temperature").value);
    var windspeed = parseFloat(document.getElementById("windSpeed").value);

    // Processing
    // use an if statement to determine that temp is 50 or below and speed is 3 or above
    // call windChill if both arguments meet spec
    // store output of windchill in a variable named windChill
    let windchill;
    if (temperature <= 50 && windspeed >= 3)
        windchill = windChill(temperature, windspeed);
console.log(windchill);
    // Output
    // output the value of windChill to the output div
    document.getElementById("output").innerHTML = windchill.toFixed(2);
}

function windChill(tempF, speed)  {

    // Input
    // accept values from doInputOutput as parameters tempF in Fahrenheit 
    // and speed in miles per hour

    // Processing
    // calculate the wind chill factor as a temperature in Fahrenheit
    //The formula for computing the wind chill factor is    f = 35.74 + 0.6215 t - 35.75 s^0.16 + 0.4275 t s^0.16
    // where f is the wind chill factor in Fahrenheit, t is the air temperature in Fahrenheit, and s is the 
    // wind speed in miles per hour at five feet above the ground.
    let windChillCalcF = 35.74 + (0.6215 * tempF) - (35.75 * Math.pow(speed, 0.16)) + (0.4275 * (tempF * Math.pow(speed, 0.16)))
console.log(windChillCalcF);
    // Output
    // return the wind chill factor in Fahrenheit
    return windChillCalcF;
}