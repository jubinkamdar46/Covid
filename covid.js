
var world = document.querySelector(".world");
var totaldeaths = document.querySelector(".world-deaths");
var totalrecovered = document.querySelector(".world-recovered");


var country = document.querySelector(".country");
var countryrecovered = document.querySelector(".country-recovered");
var countrydeaths = document.querySelector(".country-deaths");





function fetchdata(){
    fetch('https://api.covid19api.com/summary')

    .then(response => response.json())
    .then(data => 
         {
        var worlValue = data["Global"]["TotalConfirmed"]
        var worlddeaths = data["Global"]["TotalDeaths"]
        var worldrecovered = data["Global"]["TotalRecovered"]
        world.innerHTML = worlValue.toLocaleString();
        totaldeaths.innerHTML = worlddeaths.toLocaleString();
        totalrecovered.innerHTML = worldrecovered.toLocaleString();
    }
    )
}

function countrycase(name) {
    console.log("called")

    var countryname = name;
    console.log(countryname);
    

    fetch('https://api.covid19api.com/total/country/'+countryname+'')

    .then(response => response.json())

    .then(data => {
        var countrytot = data[data.length-1]["Confirmed"];
        var countryrec = data[data.length-1]["Active"];
        var countrydet = data[data.length-1]["Deaths"];
        country.innerHTML = countrytot.toLocaleString();
        countryrecovered.innerHTML = countryrec.toLocaleString();
        countrydeaths.innerHTML = countrydet.toLocaleString();
    })
    
    console.log(fetch('https://api.covid19api.com/total/country/'+countryname+''))
    
}



