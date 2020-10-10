function addNumbers()  {

    // Input
    // grab input strings from user and assign them as the value for two declared variables
let number1 = document.getElementById("number1").value;
let number2 = document.getElementById("number2").value;

// Processing
// convert the input strings to numbers by using parseFloat
number1 = parseFloat(number1);
number2 = parseFloat(number2);

// add the two numbers and store in output variable
let sum = number1 + number2;

// Output
document.getElementById("sum").innerHTML = "The sum <strong>is</strong> " + sum + "!";

}