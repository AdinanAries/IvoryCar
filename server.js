const express = require("express");
const path = require("path");
const Amadeus = require("amadeus");

var amadeus = new Amadeus({
  clientId: 'tMUIuRrYAgk0zLfDy1PCC4GXegGg0rYc',
  clientSecret: 'PAtVLCWxpRGsYPdU'
});

/*amadeus.shopping.flightOffersSearch.get({
    originLocationCode: 'SYD',
    destinationLocationCode: 'BKK',
    departureDate: '2021-04-01',
    adults: '2'
}).then(function(response){
  console.log(response.data);
}).catch(function(responseError){
  console.log(responseError.code);
});*/

const app = express();

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;


console.log(amadeus);

app.get('/airportSearch/', function(req,res,next){ 
    amadeus.referenceData.locations.get({ 
      keyword: req.query.term, 
      subType: 'AIRPORT,CITY' 
    }).then(function(response){ 
      res.json(response.data); 
      console.log(response.data.iataCode); 
    }).catch(function(error){ 
      console.log("error"); 
      console.log(error.response); 
    }); 
  });


app.listen(PORT, () => {
  console.log("Server started on " + PORT);
});
