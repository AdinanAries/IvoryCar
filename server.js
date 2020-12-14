const express = require("express");
const path = require("path");
const Amadeus = require("amadeus");
const axios = require('axios');

var all_events = [];
var all_attractions = [];

var amadeus = new Amadeus({
  clientId: 'tMUIuRrYAgk0zLfDy1PCC4GXegGg0rYc',
  clientSecret: 'PAtVLCWxpRGsYPdU'
});

const app = express();

// For parsing application/json 
app.use(express.json()); 
  
// For parsing application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }));

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

app.use(express.static(path.join(__dirname, "public")));

const PORT = process.env.PORT || 5000;


//console.log(amadeus);




//Getting Events Data
app.get('/publicevents/', function(request, response, next){

    if(all_events.length === 0){
      
      const getEvents = async () => {
        try {
            const res = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json?countryCode=US&apikey=3zYxdvHT8NJzOWY01URK1nF5ltjjqB6b');
            //console.log(res.data._embedded.events);
            console.log("called api");
            all_events = [...all_events, ...res.data._embedded.events];

            response.send(all_events);
        } catch (err) {
            console.error(err);
        }
    }

    getEvents();
    
    
  }else{
    console.log("returning cached data");
    response.send(all_events);
  }

});

app.get("/publicattractions", (request, response, next)=>{

if(all_attractions.length === 0){

      const getAttractions = async () => {

          try {
              const res = await axios.get('https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=3zYxdvHT8NJzOWY01URK1nF5ltjjqB6b');
              //console.log(res.data._embedded.events);
              console.log("called api");
              all_attractions = [...all_attractions, ...res.data._embedded.attractions];
              //console.log(res);
              response.send(all_attractions);

          } catch (err) {
              console.error(err);
          }

      }
      
      getAttractions();

  }else{
      console.log("returning cached data");
      response.send(all_attractions);
  }

});

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

app.post('/searchflight/', (req, res, next)=>{

  console.log(req.body);
  let origin = req.body.origin_iata;
  let destination = req.body.destination_iata;

  amadeus.shopping.flightOffersSearch.get({
      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate: '2021-04-01',
      adults: '2'
  }).then(function(response){
    //console.log(response.data);
    res.send(response.data);
  }).catch(function(responseError){
    console.log(responseError.code);
  });

});




app.listen(PORT, () => {
  console.log("Server started on " + PORT);
});
