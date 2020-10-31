function canISleepIn()  {

    // Input
    // grab today's date, month, day of month index and day of week index 
    // from the computer and assign them as the respective value for our 
    // four declared variables
    let d                = new Date();
    let month            = d.getMonth();
    let dayOfMonthIndex  = d.getDate();
    let dayOfWeekIndex   = d.getDay();
    let mondayThroughFridayCheck = true;
    let holidaycheck = false;

    // Processing
    // check if it's Monday through Friday or the weekend.  Check if it's one of the dedicated holidays.
    // Verify compound conditions. 
    // The three holidays the program checks for are: 
    // January 1 (New Year’s Day), July 4 (U.S. Independence Day), and December 25 (Christmas). 
    if ((month == 0 && dayOfMonthIndex == 1) || (month == 3 && dayOfMonthIndex == 4) || (month == 11 && dayOfMonthIndex == 25)) {
        holidaycheck = true;
    }

    if (dayOfWeekIndex == 0 || dayOfWeekIndex == 6 ) {
        mondayThroughFridayCheck = false;
    }

    // Output
    // On all weekdays (Monday through Friday) that are not holidays, program will output “Get up!” 
    // On all other days (weekends and holidays) program will output “Sleep in.” 
    // debugger code --> document.getElementById("debug").innerHTML = month  + "<br>" + dayOfMonthIndex+ "<br>" + dayOfWeekIndex + "<br>"
    // + mondayThroughFridayCheck + "<br>" + holidaycheck;
    if (mondayThroughFridayCheck == true && holidaycheck == false) {
        document.getElementById("answer").innerHTML = "Get up!";
    } else {
        document.getElementById("answer").innerHTML = "Sleep in.";
    }

}