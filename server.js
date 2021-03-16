const express = require("express");
const app = express();
const path = require("path");
const Amadeus = require("amadeus");
const axios = require('axios');
const { default: Axios } = require("axios");
const fetch = require("node-fetch");
var https = require('https');
var querystring = require('querystring');
var fs = require('fs');
var mongoose = require("mongoose");
require("dotenv").config();

//stripe connection
const stripe = require("stripe")(process.env.STRIPE_SECRETE_KEY);

//mongo db atlass stuff
var mongo_db_url = process.env.MONGO_DB_URL;
mongoose.connect(mongo_db_url, {useNewUrlParser: true, useUnifiedTopology: true}, ()=>{
  console.log("connected to database successfully")
});

//data models
var cheap_hotel = require("./models/cheap_hotel_model");
var login_user = require("./models/login_user_model");
var signup_user = require("./models/signup_user_model");

//Globals to store endpoint data
var all_events = [];
var all_attractions = [];
var AmaduesOauthTokenExpires = 0;
var AmadeusAccessToken = "";

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


//getting Amadues OAuth2 access token
function Amadues_OAuth(){

  //form data
  let req_data = querystring.stringify({
    grant_type: "client_credentials",
    client_id: "tMUIuRrYAgk0zLfDy1PCC4GXegGg0rYc",
    client_secret: "PAtVLCWxpRGsYPdU"
  });

  // request option
  var options = {
    host: 'test.api.amadeus.com',
    method: 'POST',
    path: '/v1/security/oauth2/token',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Content-Length': req_data.length
    }
  };

  // request object
  var req = https.request(options, function (res) {
    var result = '';
    res.on('data', function (chunk) {
      result += chunk;
    });
    res.on('end', function () {

      let data = JSON.parse(result)
      AmaduesOauthTokenExpires = data.expires_in;
      AmadeusAccessToken = data.access_token;

      setTimeout(()=>{
        Amadues_OAuth();
      },(data.expires_in * 1000));
      
      console.log("Gotten new access token from Amadues")
      //console.log(result);
    });
    res.on('error', function (err) {
      console.log(err);
    })
  });

  // req error
  req.on('error', function (err) {
    console.log(err);
  });
  
  //send request with the req_data form
  req.write(req_data);
  req.end();
}

if(AmaduesOauthTokenExpires === 0){
  Amadues_OAuth();
}


//Endpoints

//Ticket Master - Getting Public Events Data
app.get('/publicevents/', function(request, response, next){

    if(all_events.length === 0){
      
      const getEvents = async () => {
        try {
            const res = await axios.get('https://app.ticketmaster.com/discovery/v2/events.json?apikey=3zYxdvHT8NJzOWY01URK1nF5ltjjqB6b&size=100&sort=relevance,asc');
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
app.get("/publicattractions/", (request, response, next)=>{

if(all_attractions.length === 0){

      const getAttractions = async () => {

          try {
              const res = await axios.get('https://app.ticketmaster.com/discovery/v2/attractions.json?apikey=F7RYAvaz0LtW0I55jTJibyZy3SaEnzw1');
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
      res.json([]); 
      console.log("error"); 
      console.log(error.response); 
    }); 
  });

//Amadues - Searching Flight Offers (One-way)
app.post('/searchflight/', (req, res, next)=>{

  //console.log(req.body);
  console.log(req.query);
  
  let search_obj = {};

  //console.log(req.body);
  if(req.body.trip_round === "one-way"){

    let origin = req.body.origin_iata;
    let destination = req.body.destination_iata;
    let depart_date = req.body.departure_date;
    let num_of_adults = req.body.number_of_adults;
    let num_of_children = req.body.number_of_children;
    let num_of_infants = req.body.number_of_infants;
    let flight_class = req.body.flight_class;
    
    search_obj = {

      originLocationCode: origin,
      destinationLocationCode: destination,
      departureDate: depart_date,
      adults: num_of_adults,
      children: num_of_children,
      infants: num_of_infants,
      travelClass: flight_class

    }

    amadeus.shopping.flightOffersSearch.get(search_obj).then(function(response){
      //console.log(response.data);
      res.send(response.data);
  
    }).catch(function(responseError){
      res.json([]);
      console.log(responseError);
  
    });

  }else if(req.body.trip_round === "multi-city"){

    search_obj = req.body.itinerary;

      amadeus.shopping.flightOffersSearch.post(JSON.stringify(search_obj)).then(function(response){
        //console.log(response.data);
        res.send(response.data);
    
      }).catch(function(responseError){
        res.json([]);
        console.log(responseError);
    
      });
  }

  
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

//Getting Flight Price Analysis
app.post('/flightpriceanalysis/', (req, res, next)=>{

  let origin = req.body.origin_iata;
  let destination = req.body.destination_iata;
  let depart_date = req.body.departure_date;
  let num_of_adults = req.body.number_of_adults;

  /*origin = "MAD";
  destination = "CDG";*/

  //console.log(req.body);

  axios.get(
    "https://test.api.amadeus.com/v1/analytics/itinerary-price-metrics?originIataCode="+origin+"&destinationIataCode="+destination+"&departureDate="+depart_date+"&currencyCode=USD&oneWay=true",
    {
      headers: {
        "Authorization": ("Bearer "+ AmadeusAccessToken)
      }
  }).then(result =>{

    res.send(result.data);
    //console.log(result.data);

  }).catch(err =>{
    res.send([]);
    console.log(err);

  }).then(()=>{
    //defaults
  });

});

//Hotel Sentiments End Points
app.get('/get_hotel_sentiments/:hotelId', (req, res, next)=>{

  let hotel_id = req.params.hotelId;

  axios.get(
    "https://test.api.amadeus.com/v2/e-reputation/hotel-sentiments?hotelIds="+hotel_id, 
    {

      headers: {
        "Authorization": ("Bearer " + AmadeusAccessToken),
        "Accept": "application/vnd.amadeus+json"
      }
  }).then(data => {
    //console.log(data.data);
    res.send(data.data);
  }).catch(err =>{
    console.log(err);
  }).then(()=>{
    //defaults
  });
});

//Hotel Search End Points
app.post("/get_hotels/", (req, res, next)=>{

  console.log(req.query);

  let city = req.body.city;
  let checkinDate = req.body.checkin;
  let checkoutDate = req.body.checkout;
  let roomQuantity = req.body.roomQuantity;
  let adults = req.body.adults;
  let ratings = req.body.ratings;

  axios.get(
    "https://test.api.amadeus.com/v2/shopping/hotel-offers?cityCode="+city+"&checkInDate="+checkinDate+"&checkOutDate="+checkoutDate+"&roomQuantity="+roomQuantity+"&adults="+adults,//+"&radius=40&ratings="+ratings+"&view=FULL&sort=PRICE",
    {
      headers: {
        "Authorization": ("Bearer "+ AmadeusAccessToken)
      }
  }).then(data => {
    //console.log(data);
    res.send(data.data);
  }).catch(err => {
    console.log(err);
    res.send({data:[]});
  }).then(()=>{
    //defaults
  });
  
})

app.post("/get_hotel_rates/", (req, res, next)=>{

  let all_params = req.body.all_params;
  console.log(all_params);
  //all_params = all_params.toString().replaceAll("^^and", "&").replaceAll("^^equal", "=").replaceAll("^^quo","'").replaceAll("^^quo2", '"');
  
  axios.get("https://test.api.amadeus.com/v2/shopping/hotel-offers/by-hotel?"+all_params,
  {
    headers: {
      "Authorization": ("Bearer "+ AmadeusAccessToken)
    }
}).then(data => {
  console.log(data.data);
  res.send(data.data);
}).catch(err =>{
  console.log(err)
  res.send({data: []});
}).then(()=>{
  //defaults
});

})

app.post("/get_room_final_price/", (req, res, next)=>{

  let url = req.body.url;
  console.log(url);
  //all_params = all_params.toString().replaceAll("^^and", "&").replaceAll("^^equal", "=").replaceAll("^^quo","'").replaceAll("^^quo2", '"');
  
  axios.get(url,
  {
    headers: {
      "Authorization": ("Bearer "+ AmadeusAccessToken)
    }
}).then(data => {
  console.log(data.data);
  res.send(data.data);
}).catch(err =>{
  console.log(err)
  res.send({data: []});
}).then(()=>{
  //defaults
});

})

app.post('/finish_room_booking/', (req, res, next)=> {

  res.send(req.body);

  /*axios.post("test.api.amadeus.com/v1/booking/hotel-bookings",
  {
    data: req.body
  },{
    headers: {
      "Authorization": ("Bearer "+ AmadeusAccessToken)
    }
}).then(data=>{
    console.log(data);
  }).catch(err=>{
    console.log(err);
  }).then(()=>{
    //defaults
  });*/

});


//login and signup routes
app.get("/login/", (req, res, next)=>{
  res.sendFile(path.join(__dirname + "/public/index.html"))
})
app.get("/signup/", (req, res, next)=>{
  res.sendFile(path.join(__dirname + "/public/index.html"))
})

app.post("/login/", (req, res, next)=>{

  let user = new login_user({
    email: req.body.email,
    password: req.body.password
  });

  //res.send(req.body);
  //reach database with credentials here
  //I might need some library to provide for session managemet
});

app.post("/signup/", (req, res, next)=> {

  let user = new signup_user({
    first_name: req.body.firstname,
    last_name: req.body.lastname,
    email: req.body.email,
    password: req.body.password
  });

  user.save().then( result =>{
    res.send(result)
  });
  //res.send(req.body);

})

//user info routes
app.get("/user/:id", (req, res, next) =>{
  res.send(req.params.id);
});


//book cheap/book direct routes
//getting cheap hotels by city or name
app.post("/cheap_hotels/", (req, res, next) =>{

  let search_type = req.body.search_type; //values = ["by_city", "by_name", "by_city_and_name"]
  let city = req.body.city;
  let country = req.body.country;
  let hotel_name = req.body.hotel_name;

  if(search_type === "by_city"){
    let gotit = "got it";
    //search by city and country
  }else if(search_type === "by_name"){
    //search by name
  }
  else{
    //search by name, city and country
  }

  //this code should be replaced with that to read data from DB
  fs.readFile('./book_cheap_hotels_data.json', 'utf8', function (err,data) {
    if (err) {
      return console.log(err);
    }
    //this line of code is important
    res.send(data);
    //console.log(data);
  });

});

//validating cheap hotels
app.post('/validate_cheap_hotel_data/', (req, res, next) => {

  console.log(req.body)

  try{

    let new_cheap_hotel = new cheap_hotel({
      name: req.body.name,
      location: req.body.location,
      url: req.body.url,
      price: req.body.price,
      currency: req.body.currency,
      photos: req.body.photos,
      cities_operating: req.body.cities_operating,
      email: req.body.email,
      mobile: req.body.mobile,
      description: req.body.description,
      rating: req.body.rating,
      reviews: req.body.reviews,
    });

    res.send({success: true, data: new_cheap_hotel, msg: "input data validation succeeded"});

  }catch(e){
    res.status(400).send({success: false, data: e, msg: "input data validation failed"});
  }
  //res.send(req.body);
});

// Set your secret key. Remember to switch to your live secret key in production!
// See your keys here: https://dashboard.stripe.com/account/apikeys
app.post('/stripe-webhook/', async (req, res) => {

    // Retrieve the event by verifying the signature using the raw body and secret.    let event;
    try {
      event = stripe.webhooks.constructEvent(
        req.body,
        req.headers['stripe-signature'],
        process.env.STRIPE_WEBHOOK_SECRET
      );
    } catch (err) {
      console.log(err);
      console.log(`⚠️  Webhook signature verification failed.`);
      console.log(
        `⚠️  Check the env file and enter the correct webhook secret.`
      );
      return res.sendStatus(400);
    }
    // Extract the object from the event.
    const dataObject = event.data.object;

    // Handle the event
    // Review important events for Billing webhooks
    // https://stripe.com/docs/billing/webhooks
    // Remove comment to see the various objects sent for this sample
    switch (event.type) {
      case 'invoice.paid':
        // Used to provision services after the trial has ended.
        // The status of the invoice will show up as paid. Store the status in your
        // database to reference when a user accesses your service to avoid hitting rate limits.
        break;
      case 'invoice.payment_failed':
        // If the payment fails or the customer does not have a valid payment method,
        //  an invoice.payment_failed event is sent, the subscription becomes past_due.
        // Use this webhook to notify your user that their payment has
        // failed and to retrieve new card details.
        break;
      case 'customer.subscription.deleted':
        if (event.request != null) {
          // handle a subscription cancelled by your request
          // from above.
        } else {
          // handle subscription cancelled automatically based
          // upon your subscription settings.
        }
        break;
      default:
      // Unexpected event type
    }
    res.sendStatus(200);
  }
);

app.post('/register_cheap_hotel_create_subscription/', async (req, res) => {
  // Attach the payment method to the customer
  try {
    await stripe.paymentMethods.attach(req.body.paymentMethodId, {
      customer: req.body.customerId,
    });
  } catch (error) {
    return res.status('402').send({ error: { message: error.message } });
  }

  // Change the default invoice settings on the customer to the new payment method
  await stripe.customers.update(
    req.body.customerId,
    {
      invoice_settings: {
        default_payment_method: req.body.paymentMethodId,
      },
    }
  );

  // Create the subscription
  const subscription = await stripe.subscriptions.create({
    customer: req.body.customerId,
    items: [{ price: 'price_HGd7M3DV3IMXkC' }],
    expand: ['latest_invoice.payment_intent'],
  });

  res.send(subscription);
});

app.post('/register_cheap_hotel_retry_invoice/', async (req, res) => {
  // Set the default payment method on the customer

  try {
    await stripe.paymentMethods.attach(req.body.paymentMethodId, {
      customer: req.body.customerId,
    });
    await stripe.customers.update(req.body.customerId, {
      invoice_settings: {
        default_payment_method: req.body.paymentMethodId,
      },
    });
  } catch (error) {
    // in case card_decline error
    return res
      .status('402')
      .send({ result: { error: { message: error.message } } });
  }

  const invoice = await stripe.invoices.retrieve(req.body.invoiceId, {
    expand: ['payment_intent'],
  });
  res.send(invoice);
});

app.post('/register_cheap_hotel_cancel_subscription/', async (req, res) => {
  // Delete the subscription
  const deletedSubscription = await stripe.subscriptions.del(
    req.body.subscriptionId
  );
  res.send(deletedSubscription);
});

app.post("/register_cheap_hotel_payment", (req, res, next)=> {
  //1. this route takes care of payments
  //some payment info has to be sent back to server for further check before allowing hotel information be saved
});

//uploading cheap hotels photos here
app.post("/register_cheap_hotel_upload_photo/", (req, res, next)=> {
    //2. upload photos and get urls for each upload
    //this endpoint should return the photo url from aws s3 buckets to be collected on the clientside
});

//registering new cheap hotel
app.post('/register_cheap_hotel/', async (req, res, next) =>{
  
  let cheap_hotel_post_data = req.body;
  
  try{

    let new_cheap_hotel = new cheap_hotel(cheap_hotel_post_data);
    await new_cheap_hotel.save();

  }catch(e){
    res.status(400).send({success: false, data: e, msg: "input data validation failed"});
  }

});

//Spinning the server here
app.listen(PORT, () => {
  console.log("Server started on " + PORT);
});
