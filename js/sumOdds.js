function addOddNumbers()  {

    // Input
    // Have the user input an integer
    let topNumber = parseInt(document.getElementById("number").value);
    let sum = 0;

    // Processing
    // Loop through range from 1 to topNumber.  Add all the odd numbers and store in sum 
    for (i = 1; i <= topNumber; i++)
    {
        if ((i % 2) != 0)
        sum += i;
    }

    // Output
    // Display the sum
    document.getElementById("sum").innerHTML = sum;

}