const express = require("express");
const app = express();
const path = require("path");
const Amadeus = require("amadeus");
const axios = require('axios');

//Globals to store endpoint data
var all_events = [];
var all_attractions = [];

//Middlewares
// For parsing application/json 
app.use(express.json()); 
// For parsing application/x-www-form-urlencoded 
app.use(express.urlencoded({ extended: true }));
//Path to static assets
app.use(express.static(path.join(__dirname, "public")));

//Setting ports
const PORT = process.env.PORT || 5000;



//instantiating Amandues
var amadeus = new Amadeus({
  clientId: 'tMUIuRrYAgk0zLfDy1PCC4GXegGg0rYc',
  clientSecret: 'PAtVLCWxpRGsYPdU'
});


//Endpoints

//Ticket Master - Getting Public Events Data
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

//Ticket Master Getting Public Attractions
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

//Amadeus - Getting Airports and Cities
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

//Amadues - Searching Flight Offers (One-way)
app.post('/searchflight/', (req, res, next)=>{

  //console.log(req.body);

  let origin = req.body.origin_iata;
  let destination = req.body.destination_iata;
  let depart_date = req.body.departure_date;
  let num_of_adults = req.body.number_of_adults;

  amadeus.shopping.flightOffersSearch.get({

      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate: depart_date,
      adults: num_of_adults

  }).then(function(response){
    //console.log(response.data);
    res.send(response.data);

  }).catch(function(responseError){

    console.log(responseError.code);

  });

});

//Amadues - Getting Final Flight Price
app.post('/getfinalflightprice/', async (req, res, next)=>{

    //res.json(req.body);

    let inputFlight = [req.body];

    console.log(inputFlight)

    const responsePricing = await amadeus.shopping.flightOffers.pricing.post(
        JSON.stringify({
          data: {
            type: 'flight-offers-pricing',
            flightOffers: inputFlight
        }})).catch(err=>{
          console.log(err)
        });
          
    try {
      await res.json(JSON.parse(responsePricing.body));
    } catch (err) {
      await res.json(err);
    }

});

//Amadues - Airline Code Lookup
app.get('/getairlinedata/:code', (req, res, next)=>{

  let code = req.params.code;

  amadeus.referenceData.airlines.get({
    airlineCodes : code
  }).then(data =>{
    res.json(data.body);
  })

});

//Amadues - Flight Most Traveled Destinations
app.get('/mosttraveleddestinations/origin/:city/period/:date', (req, res, next)=>{
  //MAD 2021-01
  let _city = req.params.city;
  let _date = req.params.date;

  amadeus.travel.analytics.airTraffic.traveled.get({
    originCityCode : _city,
    period : _date
  }).then(data =>{
    res.json(data.body);
  }).catch(err => {
    console.log(err);
  })
});

//Amadues - Price Flight Analysis
app.get('/flight_price_metric/origin/:o_code/destination/:d_code/date/:date', (req, res, next) =>{

  //'MAD', 'CDG', '2021-03-13'

  let _o_code = req.params.o_code;
  let _d_code = req.params.d_code;
  let _date = req.params.date;

  amadeus.analytics.itineraryPriceMetrics.get({
    originIataCode: _o_code,
    destinationIataCode: _d_code,
    departureDate: _date,
  }).then(data =>{
    res.json(data);
  }).catch(err =>{
      console.log(err);
  });

});


//Spinning the server here
app.listen(PORT, () => {
  console.log("Server started on " + PORT);
});
