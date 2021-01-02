//dom elements
var home_page_search_button = document.getElementById("home_page_search_button");
var home_page_hotels_search_button = document.getElementById("home_page_hotels_search_button");

//Global Utilities
//today
var todays_date = new Date();
//tomorrow. API works well with this date
todays_date = new Date(todays_date.setDate(todays_date.getDate() + 1))
var this_month = (todays_date.getMonth() + 1);
var this_month_day = todays_date.getDate();

if(this_month_day < 10){
    this_month_day = "0" + this_month_day;
}
if(this_month < 10){
    this_month = "0" + this_month;
}
var formatted_date = todays_date.getFullYear() + "-" + this_month + "-" + this_month_day;

var future_date = new Date(todays_date.setDate(todays_date.getDate() + 5));
var future_date_day = future_date.getDate();
var future_date_month = (future_date.getMonth() + 1);

if(future_date_day < 10){
    future_date_day = "0"+ future_date_day;
}
if(future_date_month < 10){
    future_date_month = "0"+future_date_month;
}
var formatted_future_date = future_date.getFullYear() + "-" + future_date_month + "-" + future_date_day;
var default_adults = 1;

//Global data
//data to be forwarded to server
if(localStorage.getItem("is_multi_city_search")){
    //do nothing
}else{
    localStorage.setItem("is_multi_city_search", "no");
}

var object_to_send = {};
var fligh_search_data = {};
var flight_multi_city_search_data = {};

if(window.localStorage.getItem("flights_post_data")){

    fligh_search_data = JSON.parse(window.localStorage.getItem("flights_post_data"));
    flight_multi_city_search_data = JSON.parse(window.localStorage.getItem("flight_multi_city_search_data"));

    if(fligh_search_data.origin_iata.toLowerCase() !== ""){
        
        let current_origin_airport = AirportsData.filter(each => (each.IATA.toLowerCase().includes(fligh_search_data.origin_iata.toLowerCase())));
        if(current_origin_airport[0]){
            from_where_search_input_fld.value = `(${current_origin_airport[0].IATA}) ${current_origin_airport[0].name} - ${current_origin_airport[0].city}`;
        }else{
            current_origin_airport = AirportsData.filter(each => (each.ICAO.toLowerCase().includes(fligh_search_data.origin_iata.toLowerCase())));
            from_where_search_input_fld.value = `(${current_origin_airport[0].ICAO}) ${current_origin_airport[0].name} - ${current_origin_airport[0].city}`;
        }
    
        let current_destination_airport = AirportsData.filter(each => (each.IATA.toLowerCase().includes(fligh_search_data.destination_iata.toLowerCase())));
        if(current_destination_airport[0]){
            to_where_search_input_fld.value = `(${current_destination_airport[0].IATA}) ${current_destination_airport[0].name} - ${current_destination_airport[0].city}`;
        }else{
            current_destination_airport = AirportsData.filter(each => (each.ICAO.toLowerCase().includes(fligh_search_data.destination_iata.toLowerCase())));
            to_where_search_input_fld.value = `(${current_destination_airport[0].ICAO}) ${current_destination_airport[0].name} - ${current_destination_airport[0].city}`;
        }
    }
    
}else{

    //one origin and destination pair flight search data 
    fligh_search_data = {
        trip_round: "one-way",
        origin_iata: "",
        destination_iata: "",
        departure_date: formatted_date,
        return_date: formatted_future_date,
        number_of_adults: default_adults
      };

    window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));

    //multi city searches data
    flight_multi_city_search_data = {
          trip_round: "multi-city",
          itinerary: {
            originDestinations: [ 
                { 
                    id: 1, 
                    originLocationCode: "MAD", 
                    destinationLocationCode: "PAR", 
                    departureDateTimeRange: { 
                      date: "2021-04-03" 
                    } 
                }, 
                { 
                  id: 2, 
                  originLocationCode: "PAR", 
                  destinationLocationCode: "MUC", 
                  departureDateTimeRange: { 
                    date: "2021-04-05" 
                  } 
                }, 
                { 
                  id: "3", 
                  originLocationCode: "MUC", 
                  destinationLocationCode: "AMS", 
                  departureDateTimeRange: { 
                    date: "2021-04-08" 
                    } 
                }, 
                { 
                    id: 4, 
                    originLocationCode: "AMS", 
                    destinationLocationCode: "MAD", 
                    departureDateTimeRange: { 
                      date: "2021-04-11" 
                    } 
                } 
              ], 
              travelers: [ 
                { 
                  id: 1, 
                  travelerType: "ADULT", 
                  fareOptions: [ 
                    "STANDARD" 
                  ] 
                } 
              ], 
              sources: [ 
                "GDS" 
              ], 
              searchCriteria: { 
                maxFlightOffers: 100 
              } 
            }
        };

        window.localStorage.setItem("flight_multi_city_search_data", JSON.stringify(flight_multi_city_search_data));
}




//data for client side processes
var flight_search_flight_class = {
    f_class: "Economy"
}

//data for client side processes
var flight_search_trip_round = {
    t_round: "Round-trip"
}

//data for client side processes
var flight_search_number_of_people = {
    types_of_people_added: ["adults"],
    total_number_of_people: 1,
    adults: { 
        number: 1,
        price: 300000,
    },
    students:{
        number: 0,
        price: 290000
    } ,
    seniors: {
       number: 0,
       price: 270000
    },
    youth:{
        number: 0,
        price: 250000
    } ,
    children: {
        number: 0,
        price: 200000
    },
    toddlers: {
        number: 0,
        price: 170000
    },
    infants: {
        number: 0,
        price: 115000
    }
}


//prevents it from being automatically when search page loads. That way it maintains last set value until search results have been rendered
if(localStorage.getItem("is_round_trip")){
    if(localStorage.getItem("is_round_trip") === "no"){
        set_flight_trip_round_for_search('One-way');
        document.getElementById("roundtrip_radio_option").checked = false;
        document.getElementById("oneway_radio_option").checked = true;
    }
}else{
    localStorage.setItem("is_round_trip", "yes");
}

function set_flight_trip_round_for_search(f_trip_round){

    flight_search_trip_round.t_round = f_trip_round;
    document.getElementById("trip_type_param_round_trip_option").innerHTML = `${f_trip_round} 
    <i class="fa fa-caret-down" aria-hidden="true"></i>`;

    if(f_trip_round === "One-way"){
        localStorage.setItem("is_round_trip", "no");
        document.getElementById("airportSearch_date_title_span").innerHTML = "Depature Date";

        $(function() {
            $('#from_when_search_input').daterangepicker({
              opens: 'left'
            }, function(start, end, label) {
                
                fligh_search_data.departure_date = start.format('YYYY-MM-DD');
                fligh_search_data.return_date = end.format('YYYY-MM-DD');

                window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));
                //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
            });
          });

        $(function() {
            $("#from_when_search_input").daterangepicker({
              singleDatePicker: true,
              showDropdowns: true
            }, function(start, end, label) {
                
                setTimeout(()=>{
                    document.getElementById("from_when_search_input").value = start.toString().substring(0,11);
                }, 100);

                fligh_search_data.departure_date = start.format('YYYY-MM-DD');

                window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));

              /*var years = moment().diff(start, 'years');
              alert("You are " + years + " years old!");*/
            });
          });

        /*document.getElementById("to_where_input_fld_tile").style.display = "none";
        document.getElementById("airports_exchange_search_fields_values_icon_container").style.display = "none";
        document.getElementById("to_where_city_input_container").style.display = "none";
        //document.getElementById("to_when_date_input_container").style.display = "none";
        document.getElementById("from_where_city_input_container").style.minWidth = "100%";
        //document.getElementById("from_when_date_input_container").style.minWidth = "100%";
        document.getElementById("from_where_search_input_fld").style.width = "calc(100% - 40px)";
        //document.getElementById("from_when_search_input").style.width = "calc(100% - 40px)";
        //document.getElementById("to_where_search_display_span").innerHTML = "";*/
    }else{

        localStorage.setItem("is_round_trip", "yes");

        document.getElementById("airportSearch_date_title_span").innerHTML = "Depature - Return Dates";
        $(function() {
            $('#from_when_search_input').daterangepicker({
              opens: 'left'
            }, function(start, end, label) {
                
                setTimeout(()=>{
                    document.getElementById("from_when_search_input").value = start.toString().substring(0,11) +" - "+ end.toString().substring(0,11);
                }, 100);

                fligh_search_data.departure_date = start.format('YYYY-MM-DD');
                fligh_search_data.arrival_date = end.format('YYYY-MM-DD');

                window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));

                //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
            });
          });

        /*setTimeout(()=>{
            document.getElementById("to_where_input_fld_tile").style.display = "block";
        },500)
        document.getElementById("airports_exchange_search_fields_values_icon_container").style.display = "block";
        document.getElementById("to_where_city_input_container").style.display = "block";
        //document.getElementById("to_when_date_input_container").style.display = "block";
        document.getElementById("from_where_city_input_container").style.minWidth = "44%";
        //document.getElementById("from_when_date_input_container").style.minWidth = "50%";
        document.getElementById("from_where_search_input_fld").style.width = "calc(100% - 40px)";
        //document.getElementById("from_when_search_input").style.width = "calc(100% - 40px)";
        /*document.getElementById("to_where_search_display_span").innerHTML = `<span style="font-size: 12px;">
                and 
                <span style="font-weight: bolder; font-size: 12px;">destination</span> above
            </span>`;*/
    }
}

function set_flight_class_for_search(f_class_param){
    flight_search_flight_class.f_class = f_class_param;
    document.getElementById("trip_type_param_flight_class_option").innerHTML = `${f_class_param} 
    <i class="fa fa-caret-down" aria-hidden="true"></i>`;
}


function add_person_to_flight_search(person_type){
    if(flight_search_number_of_people.total_number_of_people >= 9){
        document.getElementById("number_of_people_indicator").style.display = "block";
        document.getElementById("number_of_people_indicator").innerHTML = 
        "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> only maximum of 9 people allowed";
    }
    else{
        if(person_type === "Adult"){
            flight_search_number_of_people.adults.number += 1;
            flight_search_number_of_people.total_number_of_people += 1;

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "adults"
            });

            if(!item){
                flight_search_number_of_people.types_of_people_added.push("adults");
            }

            document.getElementById("number_of_adults_count").innerText = flight_search_number_of_people.adults.number;

        }else if(person_type === "Student"){
            flight_search_number_of_people.students.number += 1;
            flight_search_number_of_people.total_number_of_people += 1;

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "students"
            });

            if(!item){
                flight_search_number_of_people.types_of_people_added.push("students");
            }

            document.getElementById("number_of_students_count").innerText = flight_search_number_of_people.students.number;

        }else if(person_type === "Senior"){
            flight_search_number_of_people.seniors.number += 1;
            flight_search_number_of_people.total_number_of_people += 1;

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "seniors"
            });

            if(!item){
                flight_search_number_of_people.types_of_people_added.push("seniors");
            }

            document.getElementById("number_of_seniors_count").innerText = flight_search_number_of_people.seniors.number;

        }else if(person_type === "Youth"){
            flight_search_number_of_people.youth.number += 1;
            flight_search_number_of_people.total_number_of_people += 1;

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "youth"
            });

            if(!item){
                flight_search_number_of_people.types_of_people_added.push("youth");
            }

            document.getElementById("number_of_youth_count").innerText = flight_search_number_of_people.youth.number;

        }else if(person_type === "Child"){
            flight_search_number_of_people.children.number += 1;
            flight_search_number_of_people.total_number_of_people += 1;

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "children"
            });

            if(!item){
                flight_search_number_of_people.types_of_people_added.push("children");
            }

            document.getElementById("number_of_children_count").innerText = flight_search_number_of_people.children.number;

        }else if(person_type === "Toddler"){
            flight_search_number_of_people.toddlers.number += 1;
            flight_search_number_of_people.total_number_of_people += 1;

            if(flight_search_number_of_people.adults.number === 0){
                
                flight_search_number_of_people.adults.number += 1;
                flight_search_number_of_people.total_number_of_people += 1;

                let item = flight_search_number_of_people.types_of_people_added.find( person => {
                    return person === "adults"
                });
    
                if(!item){
                    flight_search_number_of_people.types_of_people_added.push("adults");
                }
    
                document.getElementById("number_of_adults_count").innerText = flight_search_number_of_people.adults.number;
            }

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "toddlers"
            });

            if(!item){
                flight_search_number_of_people.types_of_people_added.push("toddlers");
            }

            document.getElementById("number_of_toddlers_count").innerText = flight_search_number_of_people.toddlers.number;

        }else if(person_type === "Infant"){

            flight_search_number_of_people.infants.number += 1;
            flight_search_number_of_people.total_number_of_people += 1;

            if(flight_search_number_of_people.adults.number === 0){

                flight_search_number_of_people.adults.number += 1;
                flight_search_number_of_people.total_number_of_people += 1;

                let item = flight_search_number_of_people.types_of_people_added.find( person => {
                    return person === "adults"
                });
    
                if(!item){
                    flight_search_number_of_people.types_of_people_added.push("adults");
                }
    
                document.getElementById("number_of_adults_count").innerText = flight_search_number_of_people.adults.number;
            }

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "infants"
            });

            if(!item){
                flight_search_number_of_people.types_of_people_added.push("infants");
            }

            document.getElementById("number_of_infants_count").innerText = flight_search_number_of_people.infants.number;

        }

        document.getElementById("number_of_people_indicator").style.display = "none";
        document.getElementById("number_of_people_indicator").innerHTML = "";

    }

    if(flight_search_number_of_people.types_of_people_added.length > 1){
        trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} people 
        <i class="fa fa-caret-down" aria-hidden="true"></i>`;
    }else if(flight_search_number_of_people.types_of_people_added.length === 1 && flight_search_number_of_people.total_number_of_people > 1){
        trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} ${flight_search_number_of_people.types_of_people_added[0]} 
        <i class="fa fa-caret-down" aria-hidden="true"></i>`;
    }else if(flight_search_number_of_people.types_of_people_added.length === 1 && flight_search_number_of_people.total_number_of_people === 1){
        if(flight_search_number_of_people.types_of_people_added[0] === "adults"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} adult 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "students"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} student 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "seniors"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} senior 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "youth"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} youth 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "children"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} child 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "toddlers"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} toddler 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "infants"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} infant 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
    }
    /*alert("number of people: " + flight_search_number_of_people.total_number_of_people)
    alert("types of people " +  flight_search_number_of_people.types_of_people_added)*/

    fligh_search_data.number_of_adults = flight_search_number_of_people.adults.number + flight_search_number_of_people.seniors.number
                                             + flight_search_number_of_people.students.number + flight_search_number_of_people.youth.number;
    window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));

    flight_multi_city_search_data.itinerary.travelers = [];

    for(let wck = 0; wck < fligh_search_data.number_of_adults; wck++){
        flight_multi_city_search_data.itinerary.travelers.push({ 
          id: (wck+1), 
          travelerType: "ADULT", 
          fareOptions: [ 
            "STANDARD" 
          ] 
        });

    }

}


function remove_person_from_flight_search(person_type){
    let adult_subract_clicked = false;

    if(flight_search_number_of_people.total_number_of_people <= 1){
        if(person_type === "Adult" && flight_search_number_of_people.adults.number === 1){
            document.getElementById("number_of_people_indicator").style.display = "block";
            document.getElementById("number_of_people_indicator").innerHTML = 
            "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> minimum of 1 person allowed";
        }
        if(person_type === "Student" && flight_search_number_of_people.students.number === 1){
            document.getElementById("number_of_people_indicator").style.display = "block";
            document.getElementById("number_of_people_indicator").innerHTML = 
            "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> minimum of 1 person allowed";
        }
        if(person_type === "Senior" && flight_search_number_of_people.seniors.number === 1){
            document.getElementById("number_of_people_indicator").style.display = "block";
            document.getElementById("number_of_people_indicator").innerHTML = 
            "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> minimum of 1 person allowed";
        }
        if(person_type === "Youth" && flight_search_number_of_people.youth.number === 1){
            document.getElementById("number_of_people_indicator").style.display = "block";
            document.getElementById("number_of_people_indicator").innerHTML = 
            "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> minimum of 1 person allowed";
        }
        if(person_type === "Child" && flight_search_number_of_people.children.number === 1){
            document.getElementById("number_of_people_indicator").style.display = "block";
            document.getElementById("number_of_people_indicator").innerHTML = 
            "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> minimum of 1 person allowed";
        }
    }
    else{
        if(person_type === "Adult"){
            adult_subract_clicked = true;
            if( (flight_search_number_of_people.infants.number > 0 ||
                flight_search_number_of_people.toddlers.number > 0) &&
                flight_search_number_of_people.adults.number <= 1){
                    //do nothing
                }else{

                    if(flight_search_number_of_people.adults.number > 0){
                        flight_search_number_of_people.adults.number -= 1;
                        flight_search_number_of_people.total_number_of_people -= 1;
                    }
        
                    let item = flight_search_number_of_people.types_of_people_added.find( person => {
                        return person === "adults"
                    });
        
                    if(item){
                        if(flight_search_number_of_people.adults.number === 0)
                            flight_search_number_of_people.types_of_people_added.splice (
                                flight_search_number_of_people.types_of_people_added.indexOf("adults"), 1);
                    }
        
                    document.getElementById("number_of_adults_count").innerText = flight_search_number_of_people.adults.number;
                }

        }else if(person_type === "Student"){

            if(flight_search_number_of_people.students.number > 0){
                flight_search_number_of_people.students.number -= 1;
                flight_search_number_of_people.total_number_of_people -= 1;
            }

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "students"
            });

            if(item){
                if(flight_search_number_of_people.students.number === 0)
                    flight_search_number_of_people.types_of_people_added.splice (
                        flight_search_number_of_people.types_of_people_added.indexOf("students"), 1);
            }

            document.getElementById("number_of_students_count").innerText = flight_search_number_of_people.students.number;

        }else if(person_type === "Senior"){

            if(flight_search_number_of_people.seniors.number > 0){
                flight_search_number_of_people.seniors.number -= 1;
                flight_search_number_of_people.total_number_of_people -= 1;
            }

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "seniors"
            });

            if(item){
                if(flight_search_number_of_people.seniors.number === 0)
                    flight_search_number_of_people.types_of_people_added.splice (
                        flight_search_number_of_people.types_of_people_added.indexOf("seniors"), 1);
            }

            document.getElementById("number_of_seniors_count").innerText = flight_search_number_of_people.seniors.number;

        }else if(person_type === "Youth"){

            if(flight_search_number_of_people.youth.number > 0){
                flight_search_number_of_people.youth.number -= 1;
                flight_search_number_of_people.total_number_of_people -= 1;
            }

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "youth"
            });

            if(item){
                if(flight_search_number_of_people.youth.number === 0)
                    flight_search_number_of_people.types_of_people_added.splice (
                        flight_search_number_of_people.types_of_people_added.indexOf("youth"), 1);
            }

            document.getElementById("number_of_youth_count").innerText = flight_search_number_of_people.youth.number;

        }else if(person_type === "Child"){

            if(flight_search_number_of_people.children.number > 0){
                flight_search_number_of_people.children.number -= 1;
                flight_search_number_of_people.total_number_of_people -= 1;
            }

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "children"
            });

            if(item){
                if(flight_search_number_of_people.children.number === 0)
                    flight_search_number_of_people.types_of_people_added.splice (
                        flight_search_number_of_people.types_of_people_added.indexOf("children"), 1);
            }

            document.getElementById("number_of_children_count").innerText = flight_search_number_of_people.children.number;

        }else if(person_type === "Toddler"){

            if(flight_search_number_of_people.toddlers.number > 0){
                flight_search_number_of_people.toddlers.number -= 1;
                flight_search_number_of_people.total_number_of_people -= 1;
            }

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "toddlers"
            });

            if(item){
                if(flight_search_number_of_people.toddlers.number === 0)
                    flight_search_number_of_people.types_of_people_added.splice (
                        flight_search_number_of_people.types_of_people_added.indexOf("toddlers"), 1);
            }

            document.getElementById("number_of_toddlers_count").innerText = flight_search_number_of_people.toddlers.number;

        }else if(person_type === "Infant"){

            if(flight_search_number_of_people.infants.number > 0){
                flight_search_number_of_people.infants.number -= 1;
                flight_search_number_of_people.total_number_of_people -= 1;
            }

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "infants"
            });

            if(item){
                if(flight_search_number_of_people.infants.number === 0)
                    flight_search_number_of_people.types_of_people_added.splice (
                        flight_search_number_of_people.types_of_people_added.indexOf("infants"), 1);
            }

            document.getElementById("number_of_infants_count").innerText = flight_search_number_of_people.infants.number;

        }

        
        document.getElementById("number_of_people_indicator").style.display = "none";
        document.getElementById("number_of_people_indicator").innerHTML = "";

        if( (flight_search_number_of_people.infants.number > 0 ||
            flight_search_number_of_people.toddlers.number > 0) &&
            flight_search_number_of_people.adults.number <= 1 &&
            adult_subract_clicked ){
                
                document.getElementById("number_of_people_indicator").style.display = "block";
                document.getElementById("number_of_people_indicator").innerHTML = 
                "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> a toddler or infant search must include at least one adult";
            }

    }

    if(flight_search_number_of_people.types_of_people_added.length > 1){
        trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} people 
        <i class="fa fa-caret-down" aria-hidden="true"></i>`;
    }else if(flight_search_number_of_people.types_of_people_added.length === 1 && flight_search_number_of_people.total_number_of_people > 1){
        trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} ${flight_search_number_of_people.types_of_people_added[0]} 
        <i class="fa fa-caret-down" aria-hidden="true"></i>`;
    }else if(flight_search_number_of_people.types_of_people_added.length === 1 && flight_search_number_of_people.total_number_of_people === 1){
        if(flight_search_number_of_people.types_of_people_added[0] === "adults"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} adult 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "students"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} student 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "seniors"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} senior 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "youth"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} youth 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "children"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} child 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "toddlers"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} toddler 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "infants"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} infant 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
    }
    /*alert("number of people: " + flight_search_number_of_people.total_number_of_people)
    alert("types of people " +  flight_search_number_of_people.types_of_people_added)*/

    fligh_search_data.number_of_adults = flight_search_number_of_people.adults.number + flight_search_number_of_people.seniors.number
                                             + flight_search_number_of_people.students.number + flight_search_number_of_people.youth.number;
    window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));
    
    flight_multi_city_search_data.itinerary.travelers = [];

    for(let wck = 0; wck < fligh_search_data.number_of_adults; wck++){
        flight_multi_city_search_data.itinerary.travelers.push({ 
          id: (wck+1), 
          travelerType: "ADULT", 
          fareOptions: [ 
            "STANDARD" 
          ] 
        });

    }

}

var collection_multi_city_inputs = async ()=>{
    if(flight_search_trip_round.t_round === "Round-trip" && document.getElementById("multiple_city_search_option").checked === false){

        let originIata = from_where_search_input_fld.value;
        originIata = originIata.split(")")[0];
        originIata = originIata.substring(1,originIata.length);

        let destIata = to_where_search_input_fld.value;
        destIata = destIata.split(")")[0];
        destIata = destIata.substring(1,destIata.length);

        flight_multi_city_search_data.itinerary.originDestinations = [];
        
        flight_multi_city_search_data.itinerary.originDestinations.push({
          id: 1, 
          originLocationCode: originIata, 
          destinationLocationCode: destIata, 
          departureDateTimeRange: { 
            date: fligh_search_data.departure_date 
          }
        });
        
        flight_multi_city_search_data.itinerary.originDestinations.push({
            id: 2, 
            originLocationCode: destIata, 
            destinationLocationCode: originIata, 
            departureDateTimeRange: { 
              date: fligh_search_data.return_date
            }
          });

    }else{

        flight_search_data.itinerary = flight_search_data.itinerary.map((each, index) => {

            each.id = (index+1);
            return each;

        })

        flight_multi_city_search_data.itinerary.originDestinations = flight_search_data.itinerary;

        //collecting final itinerary from main form inputs

        let originIata = from_where_search_input_fld.value;
        originIata = originIata.split(")")[0];
        originIata = originIata.substring(1,originIata.length);

        let destIata = to_where_search_input_fld.value;
        destIata = destIata.split(")")[0];
        destIata = destIata.substring(1,destIata.length);

        flight_multi_city_search_data.itinerary.originDestinations.push({
            id: (flight_multi_city_search_data.itinerary.originDestinations.length+1), 
          originLocationCode: originIata, 
          destinationLocationCode: destIata, 
          departureDateTimeRange: { 
            date: fligh_search_data.departure_date 
          }
        });
    }

}

//Going to search page
let search_trigger_func = () =>{
    
    if(document.getElementById("multiple_city_search_option").checked || flight_search_trip_round.t_round === "Round-trip"){

        if(flight_search_trip_round.t_round === "Round-trip" && document.getElementById("multiple_city_search_option").checked === false){
            localStorage.setItem("is_multi_city_search", "no");
            localStorage.setItem("is_round_trip", "yes")
        }else{
            localStorage.setItem("is_round_trip", "no")
            localStorage.setItem("is_multi_city_search", "yes");
        }

        collection_multi_city_inputs().then(()=> {
            window.localStorage.setItem("flight_multi_city_search_data", JSON.stringify(flight_multi_city_search_data));
            window.location.href = "./search_results_page.html";
        }).catch(err => console.log(err))
        
    }else{
        localStorage.setItem("is_multi_city_search", "no");
        window.location.href = "./search_results_page.html";
    }

}

home_page_search_button.addEventListener("click", () =>{

    if(from_where_search_input_fld.value === ""){

        from_where_search_input_fld.placeholder = "please enter origin city/airport";
        from_where_search_input_fld.focus();

    }else if(to_where_search_input_fld.value === ""){

        to_where_search_input_fld.placeholder = "please enter destination city/airport";
        to_where_search_input_fld.focus();

    }else{
        search_trigger_func();
    }
    
});

home_page_hotels_search_button.addEventListener("click", () =>{
    search_trigger_func();
});


//exchange flights inputs values
let rotated = false;
document.getElementById("airports_exchange_search_fields_values_icon").addEventListener('click', (evnt)=>{

    let exchbtn = document.getElementById("airports_exchange_search_fields_values_icon");
    
    if(!rotated){
        exchbtn.style.transform = "rotate(360deg)";
        rotated = true;
    }else{
        exchbtn.style.transform = "rotate(0deg)";
        rotated = false;
    }

    let tempValue = from_where_search_input_fld.value;
    from_where_search_input_fld.value = to_where_search_input_fld.value;
    to_where_search_input_fld.value = tempValue;

    let tempIata = fligh_search_data.destination_iata;
    fligh_search_data.destination_iata = fligh_search_data.origin_iata;
    fligh_search_data.origin_iata = tempIata;

    window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));

});

function add_all_airlines(){
    airline_codes.forEach(each => {
      document.getElementById("book_flights_filter_airlines_list").innerHTML +=
      `
        <option value="${each.code}">${each.name}</option>
      `
    })
    
 }
 add_all_airlines();

/*from_where_search_input_fld.addEventListener('focus', ()=>{

    if($(window).width() < 700){
        flights_search_tickets_form_container.style.position = "fixed";
        flights_search_tickets_form_container.style.top = 0;
        flights_search_tickets_form_container.style.left = 0;
        flights_search_tickets_form_container.style.zIndex = 100;
        flights_search_tickets_form_container.style.minWidth = "calc(100vw - 20px)";
        flights_search_tickets_form_container.style.minHeight = "100vh";

        home_page_search_button.style.display = "none";
        date_search_fieldset.style.display = "none";
    }

})

from_where_search_input_fld.addEventListener('focusout', ()=>{

    if($(window).width() < 700){
        flights_search_tickets_form_container.style.position = "initial";
        flights_search_tickets_form_container.style.top = 0;
        flights_search_tickets_form_container.style.left = 0;
        flights_search_tickets_form_container.style.zIndex = "initial";
        flights_search_tickets_form_container.style.minWidth = "initial";
        flights_search_tickets_form_container.style.minHeight = "initial";
        home_page_search_button.style.display = "flex";
        date_search_fieldset.style.display = "block";
    }

})

to_where_search_input_fld.addEventListener('focus', ()=>{

    if($(window).width() < 700){
        flights_search_tickets_form_container.style.position = "fixed";
        flights_search_tickets_form_container.style.top = 0;
        flights_search_tickets_form_container.style.left = 0;
        flights_search_tickets_form_container.style.zIndex = 100;
        flights_search_tickets_form_container.style.minWidth = "calc(100vw - 20px)";
        flights_search_tickets_form_container.style.minHeight = "100vh";

        home_page_search_button.style.display = "none";
        date_search_fieldset.style.display = "none";
    }

})

to_where_search_input_fld.addEventListener('focusout', ()=>{
    
    if($(window).width() < 700){
        flights_search_tickets_form_container.style.position = "initial";
        flights_search_tickets_form_container.style.top = 0;
        flights_search_tickets_form_container.style.left = 0;
        flights_search_tickets_form_container.style.zIndex = "initial";
        flights_search_tickets_form_container.style.minWidth = "initial";
        flights_search_tickets_form_container.style.minHeight = "initial";
        home_page_search_button.style.display = "flex";
        date_search_fieldset.style.display = "block";
    }

})


/*
$("#clickable a").click(function(e) {
  //do something
  e.stopPropagation();
})*/