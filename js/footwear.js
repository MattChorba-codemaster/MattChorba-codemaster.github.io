function determineShoes()  {

// Input
// grab selected weather from the dropdown list

let weather = document.getElementById("weatherSelect").value;
let recommendedShoe;


// Processing
// match the weather selection to the recommended shoe type
switch (weather) {
    case 'unknown':
        recommendedShoe = "unknown        shoes";
        break;

    case 'hot':
        recommendedShoe = "sandals";
        break;

    case 'rain':
        recommendedShoe = "galoshes";
        break;
        
    case 'snow':
        recommendedShoe = "boots";
        break;    
    }

// Output

document.getElementById("shoes").innerHTML = "<strong>" + recommendedShoe + "</strong>";
}