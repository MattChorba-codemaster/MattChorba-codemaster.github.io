function conditionalSale()  {

    // Input
    // Grab today's day of week from the computer and have the user input the subtotal 
    let d = new Date();
    let dayOfWeek = d.getDay();
    let discountDayCheck = false;
    let subTotal = parseFloat(document.getElementById("subTotal").value);
    let totalWithTax;
    let totalMoneyFormat;
  

    // Processing
    // Check if it's Tuesday or Wednesday and if the subtotal is greater than $50.
    // If so, discount the subtotal by 10%.  Finally, add 6% sales tax for the total. 
    if ((dayOfWeek == 2 || dayOfWeek == 3) && (subTotal > 50.00)) {
        discountDayCheck = true;
    }

    if (discountDayCheck == true) {
        subTotal *= .90;
    } 
    
    totalWithTax = ((subTotal * .06) + subTotal);

    totalMoneyFormat = totalWithTax.toFixed(2);

    // Output
    // Show total amount due
    // DEBUG --> document.getElementById("debug").innerHTML = dayOfWeek + "<br>" + discountDayCheck + "<br>" + subTotal + "<br>" + totalWithTax;
    document.getElementById("total").innerHTML = "Grand Total: $" + totalMoneyFormat;
}