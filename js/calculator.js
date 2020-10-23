function doMath()  {

    // Input
    // grab input strings from user and assign them as the value for four declared variables
let number1  = parseFloat(document.getElementById("number1").value);
let number2  = parseFloat(document.getElementById("number2").value);
let operator = document.getElementById("operator").value;
let answer   = parseFloat(document.getElementById("answer").value);
let correctAnswer;

// Processing
// match the operator to the correct math and evaluate the correctness of the user answer
switch (operator) {
    case '+':
        correctAnswer = number1 + number2;
        break;

    case '-':
        correctAnswer = number1 - number2;
        break;

    case '*':
        correctAnswer = number1 * number2;
        break;
        
    case '/':
        correctAnswer = number1 / number2;
        break;    

    default:
        alert("Use '+' for addition, '-' for subtraction, '*' for multiplication, and '/' for division.")
        break;
}

// Output
if(answer == correctAnswer)
    {
    document.getElementById("outputEvaluation").innerHTML = "Correct!  Good job.";
    }   else
    document.getElementById("outputEvaluation").innerHTML = "Incorrect.  Try again!" + correctAnswer;

}