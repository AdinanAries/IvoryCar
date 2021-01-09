var user_current_airport
var GoogleReturnedZipCode;
var GoogleReturnedCity;
var GoogleReturnedTown;
var GoogleReached = false;
           
//USA states and Abbreviations
var StateAbbrev = {
    "AL": "Alabama",
    "AK": "Alaska",
    "AZ": "Arizona",
    "AR": "Arkansas",
    "CA": "California",
    "CO": "Colorado",
    "CT": "Connecticut",
    "DE": "Delaware",
    "FL": "Florida",
    "GA": "Georgia",
    "HI": "Hawaii",
    "ID": "Idaho",
    "IL": "Illinois",
    "IN": "Indiana",
    "IA": "Iowa",
    "KS": "Kansas",
    "KY": "Kentucky",
    "LA": "Louisiana",
    "ME": "Maine",
    "MD": "Maryland",
    "MA": "Massachusetts",
    "MI": "Michigan",
    "MN": "Minnesota",
    "MS": "Mississippi",
    "MO": "Missouri",
    "MT": "Montana",
    "NE": "Nebraska",
    "NV": "Nevada",
    "NH": "New Hampshire",
    "NJ": "New Jersey",
    "NM": "New Mexico",
    "NY": "New York",
    "NC": "North Carolina",
    "ND": "North Dakota",
    "OH": "Ohio",
    "OK": "Oklahoma",
    "OR": "Oregon",
    "PA": "Pennsylvania",
    "RI": "Rhode Island",
    "SC": "South Carolina",
    'SD': "South Dakota",
    "TN": "Tennessee",
    "TX": "Texas",
    "UT": "Utah",
    "VT": "Vermont",
    "VA": "Virginia",
    "WA": "Washington",
    "WV": "West Virginia",
    "WI": "Wisconsin",
    "WY": "Wyoming"
};


function success(position) {

    //use position longitude and latitude coordinates to get the actual addresss information from google...
    $.ajax({
        type: "GET",
        data: 'latlng=' + position.coords.latitude + ',' + position.coords.longitude + '&sensor=true&key=AIzaSyAoltHbe0FsMkNbMCAbY5dRYBjxwkdSVQQ',
        url: 'https://maps.googleapis.com/maps/api/geocode/json',
        success: function(result){

            GoogleReturnedCity = result.results[0].address_components[4].long_name;
            GoogleReturnedTown = result.results[0].address_components[3].long_name;

            let AddressParts = result.results[0].formatted_address.split(",");
            console.log(AddressParts);
            let street = AddressParts[0];
            let GoogleCountry = AddressParts[3];
            let CityZipCodeParts = AddressParts[2].split(" ");
            let city = CityZipCodeParts[1].trim();
            GoogleReturnedTown = AddressParts[1].trim();

            if(GoogleReturnedTown === "The Bronx"){
                GoogleReturnedTown = "Bronx";
            }

            GoogleReturnedCity = StateAbbrev[city].trim();
            
            GoogleReturnedZipCode = CityZipCodeParts[2].trim();
            
            user_current_airport = AirportsData.filter(each => 
                each.city.replaceAll(" ", "").toLowerCase().includes(GoogleReturnedTown.toLowerCase().replaceAll(" ", "")) ||
                (each.lon ===  position.coords.longitude && each.lat === position.coords.latitude) ||
                each.city.replaceAll(" ", "").toLowerCase().includes(GoogleReturnedCity.toLowerCase().replaceAll(" ", "")) ||
                each.country.replaceAll(" ", "").toLowerCase().includes(GoogleCountry.toLowerCase().replaceAll(" ", "")) ||
                (each.city.replaceAll(" ", "").toLowerCase() + each.country.replaceAll(" ","").toLowerCase())
                .includes(GoogleReturnedCity.toLowerCase().replaceAll(" ", "") + GoogleCountry.toLowerCase().replaceAll(" ", "")));

                //now I have an array of airport objects. Need to narrow down to specific needed airport
                let first_airport = user_current_airport[0];
                user_current_airport = `(${first_airport.IATA}) ${first_airport.name} - ${first_airport.city}`;
                
                document.getElementById("from_where_search_input_fld").value = user_current_airport;
                //console.log(user_current_airport);
        }

    });
    
    /*var mapcanvas = document.createElement('div');
    mapcanvas.id = 'mapcontainer';
    mapcanvas.style.height = '400px';
    mapcanvas.style.width = '600px'; 
    document.querySelector('article').appendChild(mapcanvas);    
    var cords = new google.maps.LatLng(position.coords.latitude,position.coords.longitude);    
    var options = {    
       zoom: 15,    
       center: coords,    
       mapTypeControl: false,    
       navigationControlOptions:{    
            style: google.maps.NavigationControlStyle.SMALL    
        },    
        mapTypeId: google.maps.MapTypeId.ROADMAP    
    };*/
}

 /*var map = new google.maps.Map(document.getElementById(“mapcontainer”),options);    
 Var marker = new google.maps.Marker({    
 position: coords,    
 map: map,    
 title: ”you are here”    
});*/    

if(fligh_search_data.origin_iata === ""){

    if (navigator.geolocation) {    
    navigator.geolocation.getCurrentPosition(success);    
    }   
    else {    
        error('Geo Location is not supported');    
    } 

}


