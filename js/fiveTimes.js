function timesTable()  {

    // Input
    // declare variables
    var text = "";
    var number = 5;
    var i;
    var result = 0;

    // Processing and Output
    // use a for loop to do the math, store the values and
    // display the resulting table
    for (i = 1; i < 13; i++) {
        result = number * i;
        text += "5 x " + i + "= " + result + "</br>";
        document.getElementById("timesTable").innerHTML = text;
        }
}