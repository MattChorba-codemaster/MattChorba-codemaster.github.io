function poundsToKilograms()  {

    // Input
    // grab input string from user and assign it as the value for the declared variable
    let pounds = document.getElementById("pounds").value;

    // Processing
    // convert the input string to numbers by using parseFloat
    pounds = parseFloat(pounds);

    // convert to Kilograms and store in output variable
    let kilograms = pounds / 2.2046226218;

    // Output
    document.getElementById("kilograms").innerHTML = Math.round(10 * kilograms) / 10 + " kilograms!";

}