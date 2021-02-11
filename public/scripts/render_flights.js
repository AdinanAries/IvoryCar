/*console.log(fligh_search_data);
console.log(airline_codes);*/

var previous_search_adults = 1;
var no_fastest_travel_times = true;
var no_fastest_travel_times_on_one_trip = true;
var no_fastest_tavel_times_on_two_or_more_stops = true;
var no_fastest_travel_times_on_one_plus = true;
var no_fastest_travel_times_on_zero_and_two_plus = true;
var no_fastest_travel_times_on_zero_to_one = true;

var no_custom_travels = true;

var price_metrics_min = 0;
var price_metrics_max = 0;
var price_metrics_first = 0;
var price_metrics_medium = 0;
var price_metrics_third = 0;
var price_metrices_currency = 0;

//One way trips
function render_flights(){
    
    if(localStorage.getItem("is_multi_city_search") === "yes" || localStorage.getItem("is_round_trip") === "yes"){
        object_to_send = flight_multi_city_search_data;
    }else{
        object_to_send = fligh_search_data;
    }
    console.log("multi-city", localStorage.getItem("is_multi_city_search"));
    console.log("round trip", localStorage.getItem("is_round_trip"))
    console.log(object_to_send);
    if(show_fastest_travel_times_clicked && done_skipping){
        show_fastest_travel_times_clicked = false
        done_skipping = false;
    }

    $.ajax({
        type: "POST",
        url: "/searchflight"+localStorage.getItem("flights_trivials"),
        data: JSON.stringify(object_to_send),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (data)=>{

            let custom_price = "";
            if(data[0]){
                custom_price = site_currency_coverter(data[0].price.currency, current_currency.currency, data[0].price.total);

                document.getElementById("left_settings_total_number_of_found_flights").innerHTML = `found <span style="font-size: 14px; color: rgb(235, 86, 0);">${data.length}</span> total flights`;
            }

            if(parseFloat(custom_price.replaceAll(",","")) >= 100000 && (parseFloat(custom_price.replaceAll(",","")) % 10) === 0){
                custom_price = custom_price.substring(0,3) + "k";
            }else
            if(parseFloat(custom_price.replaceAll(",","")) >= 100000 && (parseFloat(custom_price.replaceAll(",","")) % 10) > 0){
                custom_price = custom_price.substring(0,3) + "k+";
            }else
            if(parseFloat(custom_price.replaceAll(",","")) >= 10000 && (parseFloat(custom_price.replaceAll(",","")) % 10) === 0){
                custom_price = custom_price.substring(0,2) + "k";
            }else
            if(parseFloat(custom_price.replaceAll(",","")) >= 10000 && (parseFloat(custom_price.replaceAll(",","")) % 10) > 0){
                custom_price = custom_price.substring(0,2) + "k+";
            }else
            if(parseFloat(custom_price.replaceAll(",","")) >= 1000 && (parseFloat(custom_price.replaceAll(",","")) % 10) === 0){
                custom_price = custom_price.substring(0,1) + "k";
            }else if(parseFloat(custom_price.replaceAll(",","")) >= 1000 && (parseFloat(custom_price.replaceAll(",","")) % 10) > 0){
                custom_price = custom_price.substring(0,1) + "k+";
            }

            let custom_tickets_departure_duration = "";
            if(data[0]){
                /*custom_tickets_departure_duration = data[0].itineraries[0].duration.substring(2, data[0].itineraries[0].duration.length);
                custom_tickets_departure_duration = custom_tickets_departure_duration.split("H");
                custom_tickets_departure_duration = custom_tickets_departure_duration[0].toLowerCase() + "h " + custom_tickets_departure_duration[1].toLowerCase();
                */
                let ahour = 0;
                let aminute = 0;
                
                for(let itn = 0; itn < data[0].itineraries.length; itn++){
                    ahour += parseInt(data[0].itineraries[itn].duration.substring(2, data[0].itineraries[itn].duration.length).split("H")[0]);
                    let tempMin = data[0].itineraries[itn].duration.substring(2, data[0].itineraries[itn].duration.length).split("H")[1];
                    aminute += parseInt(tempMin.substring(0, (tempMin.length - 1)));
                }
                        
                if(!ahour){
                    ahour = 0;
                }
                if(!aminute){
                    aminute = 0;
                }

                document.getElementById("ticks_top_custom_categories_price").innerHTML = current_currency.sign + " " + (custom_price.includes("k") ? 
                custom_price : parseFloat(custom_price.replaceAll(",","")).toFixed(0));
                
                while(aminute > 60){
                    aminute -= 60;
                    ahour += 1;
                }

                custom_tickets_departure_duration = (ahour === 0 ? "" : (ahour + "h ")) + (aminute === 0 ? "" : (aminute + "m"))

                document.getElementById("ticks_top_custom_categories_time").innerHTML = custom_tickets_departure_duration;
            }
            //console.log(fligh_search_data);
            console.log(data);

            document.getElementById("progress_width").value = "100";
        
            $("#bar1").animate({width:"100%"}, 10, function(){

            if(document.getElementById("bar1").style.width=="100%")
            {
                $(".progress").fadeOut("slow");
            }			

            });

            if(data.length === 0){
                document.getElementById("main_tickets_section_list_container").innerHTML =
                    `
                        <div style=" background-color: white; border-radius: 4px; margin: 15px 0;
                            padding: 50px 0; animation: display_anim 1000ms ease-out;">
                            <p style="text-align: center;">
                                <img src="/images/search_not_found.png" style="width: 60px; height: 60px;" alt=""/>
                            </p>
                            <p style="color: #00284e; font-weight: bolder; font-size: 13px; text-align: center;">
                                Oops! nothing found for this search.
                            </p>
                        </div>

                    `;
                return null;
            }

            document.getElementById("main_tickets_section_list_container").innerHTML = "";

            let limit = 0;

            let fastest_price = "";
            let cheapest_price = "";
            let fastest_minutes_number = "";
            let current_cheapest_flights_cost = data[0].price.total;
            let fastest_minutes_h_number = 0;
            let fastest_minutes_m_number = 0;

            for(let itn = 0; itn < data[0].itineraries.length; itn++){
                fastest_minutes_h_number += parseInt(data[0].itineraries[itn].duration.substring(2, data[0].itineraries[itn].duration.length).split("H")[0]);
                let tempMin = data[0].itineraries[itn].duration.substring(2, data[0].itineraries[itn].duration.length).split("H")[1];
                fastest_minutes_m_number += parseInt(tempMin.substring(0, (tempMin.length - 1)));
            }

            fastest_minutes_number = ((fastest_minutes_h_number * 60) + fastest_minutes_m_number);
            
            let left_setting_no_stop_price = 0;
            let left_setting_one_stop_price = 0;
            let left_setting_many_stops_price = 0;

            let fastest_tickets_departure_duration = "";
            let cheapest_tickets_departure_duration = "";

            //first loop to get data filter values
            for(let tp = 0; tp < data.length; tp++){
                
                let ahour = 0;
                let aminute = 0;

                //go through all segments of current data collecting duration values
                for(let stlp = 0; stlp < data[tp].itineraries.length; stlp++){
                    
                    ahour += parseInt(data[tp].itineraries[stlp].duration.substring(2, data[tp].itineraries[stlp].duration.length).split("H")[0]);
                    let tempMin = data[tp].itineraries[stlp].duration.substring(2, data[tp].itineraries[stlp].duration.length).split("H")[1];
                    aminute += parseInt(tempMin.substring(0, (tempMin.length - 1)));
                    
                }

                if(!ahour){
                    ahour = 0;
                }
                if(!aminute){
                    aminute = 0;
                }

                if((parseInt(ahour) * 60) + parseInt(aminute) <= fastest_minutes_number){
                    
                    fastest_minutes_number = (parseInt(ahour) * 60) + parseInt(aminute);
                    console.log(tp);
                    fastest_price = site_currency_coverter(data[tp].price.currency, current_currency.currency, data[tp].price.total);
                    
                    if(parseFloat(fastest_price.replaceAll(",","")) >= 100000 && (parseFloat(fastest_price.replaceAll(",","")) % 10) === 0){
                        fastest_price = fastest_price.substring(0,3) + "k";
                    }else
                    if(parseFloat(fastest_price.replaceAll(",","")) >= 100000 && (parseFloat(fastest_price.replaceAll(",","")) % 10) > 0){
                        fastest_price = fastest_price.substring(0,3) + "k+";
                    }else
                    if(parseFloat(fastest_price.replaceAll(",","")) >= 10000 && (parseFloat(fastest_price.replaceAll(",","")) % 10) === 0){
                        fastest_price = fastest_price.substring(0,2) + "k";
                    }else
                    if(parseFloat(fastest_price.replaceAll(",","")) >= 10000 && (parseFloat(fastest_price.replaceAll(",","")) % 10) > 0){
                        fastest_price = fastest_price.substring(0,2) + "k+";
                    }else
                    if(parseFloat(fastest_price.replaceAll(",","")) >= 1000 && (parseFloat(fastest_price.replaceAll(",","")) % 10) === 0){
                        fastest_price = fastest_price.substring(0,1) + "k";
                    }else if(parseFloat(fastest_price.replaceAll(",","")) >= 1000 && (parseFloat(fastest_price.replaceAll(",","")) % 10) > 0){
                        fastest_price = fastest_price.substring(0,1) + "k+";
                    }
                    
                    while(aminute > 60){
                        aminute -= 60;
                        ahour += 1;
                    }

                    fastest_tickets_departure_duration = (ahour === 0 ? "" : (ahour + "h ")) + (aminute === 0 ? "" : (aminute + "m"))
                    
                }

                let itinery_segments = 0;
                for(let stlp = 0; stlp < data[tp].itineraries.length; stlp++){

                    itinery_segments += data[tp].itineraries[stlp].segments.length;
                    //knowing the segments or stops in each itinerary
                    
                }

                itinery_segments -= data[tp].itineraries.length;
                itinery_segments += 1;
                
                if(itinery_segments === 1){

                    no_fastest_travel_times = false;

                    if(left_setting_no_stop_price === 0){
                        document.getElementById("left_setting_no_stop_price_tag").innerHTML = current_currency.sign + " " + addCommas(parseFloat(site_currency_coverter(data[tp].price.currency, current_currency.currency, data[tp].price.total).replaceAll(",","")).toFixed(0));
                        left_setting_no_stop_price = 1;
                    }

                }else
                if(itinery_segments === 2){

                    no_fastest_travel_times_on_one_trip = false;
                    
                    if(left_setting_one_stop_price === 0){
                        document.getElementById("left_setting_one_stop_price_tag").innerHTML = current_currency.sign + " " + addCommas(parseFloat(site_currency_coverter(data[tp].price.currency, current_currency.currency, data[tp].price.total).replaceAll(",","")).toFixed(0));
                        left_setting_one_stop_price = 1;
                    }

                }else
                if(itinery_segments > 2){

                    no_fastest_tavel_times_on_two_or_more_stops = false;
                    
                    if(left_setting_many_stops_price === 0){
                        document.getElementById("left_setting_many_stops_price_tag").innerHTML = current_currency.sign + " " + addCommas(parseFloat(site_currency_coverter(data[tp].price.currency, current_currency.currency, data[tp].price.total).replaceAll(",","")).toFixed(0));
                        left_setting_many_stops_price = 1;
                    }

                }
                
                //1 is zero stops
                if(itinery_segments > 1){
                    no_fastest_travel_times_on_one_plus = false;
                }
                //3 is two or more stops
                if(itinery_segments < 3){
                    no_fastest_travel_times_on_zero_to_one = false;
                }
                //2 is one stop
                if(itinery_segments !== 2){
                    no_fastest_travel_times_on_zero_and_two_plus = false;
                }


                //save more condition here
                if(parseFloat(data[tp].price.total) <= parseFloat(current_cheapest_flights_cost)){

                    let ahour = 0;
                    let aminute = 0;

                    for(let itn = 0; itn < data[tp].itineraries.length; itn++){
                        ahour += parseInt(data[tp].itineraries[itn].duration.substring(2, data[tp].itineraries[itn].duration.length).split("H")[0]);
                        let tempMin = data[tp].itineraries[itn].duration.substring(2, data[tp].itineraries[itn].duration.length).split("H")[1];
                        aminute += parseInt(tempMin.substring(0, (tempMin.length - 1)));
                    }

                    if(!ahour){
                        ahour = 0;
                    }
                    if(!aminute){
                        aminute = 0;
                    }
                    
                    current_cheapest_flights_cost = data[tp].price.total;

                    cheapest_price = site_currency_coverter(data[tp].price.currency, current_currency.currency, data[tp].price.total);

                            if(parseFloat(cheapest_price.replaceAll(",","")) >= 100000 && (parseFloat(cheapest_price.replaceAll(",","")) % 10) === 0){
                                cheapest_price = cheapest_price.substring(0,3) + "k";
                            }else
                            if(parseFloat(cheapest_price.replaceAll(",","")) >= 100000 && (parseFloat(cheapest_price.replaceAll(",","")) % 10) > 0){
                                cheapest_price = cheapest_price.substring(0,3) + "k+";
                            }else
                            if(parseFloat(cheapest_price.replaceAll(",","")) >= 10000 && (parseFloat(cheapest_price.replaceAll(",","")) % 10) === 0){
                                cheapest_price = cheapest_price.substring(0,2) + "k";
                            }else
                            if(parseFloat(cheapest_price.replaceAll(",","")) >= 10000 && (parseFloat(cheapest_price.replaceAll(",","")) % 10) > 0){
                                cheapest_price = cheapest_price.substring(0,2) + "k+";
                            }else
                            if(parseFloat(cheapest_price.replaceAll(",","")) >= 1000 && (parseFloat(cheapest_price.replaceAll(",","")) % 10) === 0){
                                cheapest_price = cheapest_price.substring(0,1) + "k";
                            }else if(parseFloat(cheapest_price.replaceAll(",","")) >= 1000 && (parseFloat(cheapest_price.replaceAll(",","")) % 10) > 0){
                                cheapest_price = cheapest_price.substring(0,1) + "k+";
                            }
                            
                            /*cheapest_tickets_departure_duration = data[tp].itineraries[0].duration.substring(2, data[tp].itineraries[0].duration.length);
                            cheapest_tickets_departure_duration = cheapest_tickets_departure_duration.split("H");
                            cheapest_tickets_departure_duration = cheapest_tickets_departure_duration[0].toLowerCase() + "h " + cheapest_tickets_departure_duration[1].toLowerCase();*/
                            
                            while(aminute > 60){
                                aminute -= 60;
                                ahour += 1;
                            }

                            cheapest_tickets_departure_duration = (ahour === 0 ? "" : (ahour + "h ")) + (aminute === 0 ? "" : (aminute + "m"))

                }
            }

            //
            if(no_fastest_travel_times && flight_stop === "zero" && show_fastest_travel_times_clicked){

                left_setting_no_stop_option.checked = false;
                left_setting_one_stop_option.checked = true;
                left_setting_twoplus_stop_option.checked = false;

                filter_flights_by_stop();

                
            }else
            if(no_fastest_travel_times && no_fastest_travel_times_on_one_trip && flight_stop === "one" && show_fastest_travel_times_clicked){

                left_setting_no_stop_option.checked = false;
                left_setting_one_stop_option.checked = true;
                left_setting_twoplus_stop_option.checked = true;

                filter_flights_by_stop();

            }else
            if((no_fastest_travel_times && flight_stop === "zero") || (no_fastest_travel_times_on_one_trip && flight_stop === "one" ) ||
                 (no_fastest_tavel_times_on_two_or_more_stops && flight_stop === "two_plus") || (no_fastest_travel_times_on_one_plus && flight_stop === "one_plus")
                 || (no_fastest_travel_times_on_zero_and_two_plus && flight_stop === "zero_and_two_plus") || (no_fastest_travel_times_on_zero_to_one && flight_stop === "zero_to_one")){
                document.getElementById("main_tickets_section_list_container").innerHTML =
                        `
                            <div style=" background-color: white; border-radius: 4px; margin: 15px 0;
                                padding: 50px 0; animation: display_anim 1000ms ease-out;">
                                <p style="text-align: center;">
                                    <img src="/images/search_not_found.png" style="width: 60px; height: 60px;" alt=""/>
                                </p>
                                <p style="color: #00284e; font-weight: bolder; font-size: 13px; text-align: center;">
                                    Oops! nothing found for this search.
                                </p>
                            </div>
        
                        `;
               
            }

            document.getElementById("ticks_top_fastest_categories_price").innerHTML = current_currency.sign + " " + (fastest_price.includes("k") ? 
            fastest_price : parseFloat(fastest_price.replaceAll(",","")).toFixed(0));
            document.getElementById("ticks_top_fastest_categories_time").innerHTML = fastest_tickets_departure_duration;

            document.getElementById("ticks_top_cheapest_categories_price").innerHTML = current_currency.sign + " " + (cheapest_price.includes("k") ? 
            cheapest_price : parseFloat(cheapest_price.replaceAll(",","")).toFixed(0));
            document.getElementById("ticks_top_cheapest_categories_time").innerHTML = cheapest_tickets_departure_duration;

            main_loop:
            for(var w = 0; w < data.length; w++){
                
                let itinery_segments = 0;
                for(let stlp = 0; stlp < data[w].itineraries.length; stlp++){

                    itinery_segments += data[w].itineraries[stlp].segments.length;
                    //knowing the segments or stops in each itinerary
                    
                }

                itinery_segments -= data[w].itineraries.length;
                itinery_segments += 1;

                //air flight stop filters
                if(flight_stop === "zero" && !show_fastest_travel_times_clicked){

                    if(itinery_segments > 1){

                        if(limit > 0){
                            limit--;
                        }

                        continue main_loop
                    }

                }else
                if(flight_stop === "one" && !show_fastest_travel_times_clicked){

                    if(itinery_segments !== 2){

                        if(limit > 0){
                            limit--;
                        }

                        continue main_loop
                    }
                    
                }else
                if(flight_stop === "one_plus" && !show_fastest_travel_times_clicked){

                    if(itinery_segments < 2){

                        if(limit > 0){
                            limit--;
                        }

                        continue main_loop
                    }

                }else
                if(flight_stop === "two_plus" && !show_fastest_travel_times_clicked){

                    if(itinery_segments < 3){

                        if(limit > 0){
                            limit--;
                        }

                        continue main_loop
                    }

                }else
                if(flight_stop === "zero_to_one" && !show_fastest_travel_times_clicked){
                    
                    if(itinery_segments > 2){

                        if(limit > 0){
                            limit--;
                        }

                        continue main_loop
                    }

                }else
                if(flight_stop === "zero_and_two_plus" && !show_fastest_travel_times_clicked){
                   
                    if(itinery_segments === 2){

                            if(limit > 0){
                                limit--;
                            }

                            continue main_loop
                    }
                    
                }
                
                if(show_cheapest_travels_clicked && parseFloat(data[w].price.total) > parseFloat(current_cheapest_flights_cost)){

                    if(limit > 0){
                        limit--;
                    }

                    continue main_loop
                }

                let each_flight_data = JSON.stringify(data[w]);

                if(limit > 20)
                    break;

                let flight_price = "unknown";
                if(data[w].price){
                    flight_price = site_currency_coverter(data[w].price.currency, current_currency.currency, data[w].price.total);
                }

                let validating_airline = "";
                let airline_name = "";
                let return_airline_name = "";
                let depature_airline_iata = "";
                let return_airline_iata = "";

                airline_name = airline_codes.filter(each => each.code.toLowerCase().includes(data[w].validatingAirlineCodes[0].toLowerCase()))
                if(airline_name[0]){
                    airline_name = airline_name[0].name;
                }else{
                    console.log(data[w].validatingAirlineCodes[0]);
                    airline_name = "Airline: " + data[w].validatingAirlineCodes[0];
                }

                validating_airline = airline_codes.filter(each => each.code.toLowerCase().includes(data[w].validatingAirlineCodes[0].toLowerCase()))
                if(validating_airline[0]){
                    validating_airline = validating_airline[0].name;
                }else{
                    console.log(data[w].validatingAirlineCodes[0]);
                    validating_airline = "Airline: " + data[w].validatingAirlineCodes[0];
                }


                let departure_segments = "trip departure stops not available";
                let return_segments = "trip return stops not available";
                let total_departure_duration = "";
                let total_return_duration = "";
                let total_trip_start_and_end_time = "";
                let total_trip_return_start_and_end_time = "";
                let trip_departure_from_and_airports = "";
                let trip_return_from_and_to_airports = "";
                let trip_departure_total_stops = 0;
                let trip_return_total_stops = 0;
                let trip_departure_stops_airports = "";
                let trip_return_stops_airports = "";

                let number_of_travelers = data[w].travelerPricings.length > 1 ? data[w].travelerPricings.length + " travelers" : data[w].travelerPricings.length + " traveler";

                let each_traveler_price = parseFloat((parseFloat(flight_price.replaceAll(",",""))/data[w].travelerPricings.length).toFixed(2));
                
                if(data[w].itineraries.length > 1){
                    each_traveler_price = each_traveler_price/data[w].itineraries.length;
                    //console.log(each_traveler_price);
                }
                
                let current_price_percentage = 0;
                if(price_metrics_max !== 0){
                    current_price_percentage = Math.ceil(find_percentage_against_max_value(price_metrics_max, price_metrics_first,
                        price_metrics_medium, price_metrics_third, price_metrics_min, each_traveler_price));

                    //console.log(current_price_percentage);
                }
                let ticket_rating_starts = "<i aria-hidden='true' class='fa fa-exclamation-triangle' style='margin-right: 5px; color: yellow;'></i> unrated";

                if(each_traveler_price <= price_metrics_min){
                    ticket_rating_starts = "&#9733; &#9733; &#9733; &#9733; &#9733;";
                }else if(each_traveler_price <= price_metrics_first && each_traveler_price > price_metrics_min){
                    ticket_rating_starts = "&#9733; &#9733; &#9733; &#9733; &#9734;";
                }else if(each_traveler_price <= price_metrics_third && each_traveler_price > price_metrics_first){
                    ticket_rating_starts = "&#9733; &#9733; &#9733; &#9734; &#9734;";
                }else if(each_traveler_price <= price_metrics_max && each_traveler_price > price_metrics_third){
                    ticket_rating_starts = "&#9733; &#9733; &#9734; &#9734; &#9734;";
                }else if(each_traveler_price > price_metrics_max && price_metrics_max !== 0){
                    ticket_rating_starts = "&#9733; &#9734; &#9734; &#9734; &#9734;";
                }


                let return_flights_display = "none";
                let main_return_flights_display = "none";
                let all_segment_cabins = "";
                let displayed_cabin = "";

                if(data[w].itineraries){
                    
                    departure_segments = "";
                    return_segments = "";
                    
                    //console.log(data[w].itineraries);
                    let flights_itinerry_lenght = 1;
                    let last_flights_itinerary_index = 0;
                    
                    if(data[w].itineraries.length > 1){
                        flights_itinerry_lenght = (data[w].itineraries.length - 1)
                        last_flights_itinerary_index = (data[w].itineraries.length-1);
                        return_flights_display = "flex";
                        main_return_flights_display = "block";
                    }

                    //these lines of code will be used for overall duration in order to skip flights that exceed fastest flight times
                    let ahour = 0;
                    let aminute = 0;

                    for(let itn = 0; itn < data[w].itineraries.length; itn++){
                        ahour += parseInt(data[w].itineraries[itn].duration.substring(2, data[w].itineraries[itn].duration.length).split("H")[0]);
                        let tempMin = data[w].itineraries[itn].duration.substring(2, data[w].itineraries[itn].duration.length).split("H")[1];
                        aminute += parseInt(tempMin.substring(0, (tempMin.length - 1)));
                    }

                    if(!ahour){
                        ahour = 0;
                    }
                    if(!aminute){
                        aminute = 0;
                    }

                    let bhour = 0;
                    let bminute = 0;

                    //loop for rendering departure flights
                    for(let k = 0; k < flights_itinerry_lenght; k++){

                        /*total_departure_duration = data[w].itineraries[k].duration.substring(2, data[w].itineraries[k].duration.length);
                        total_departure_duration = total_departure_duration.split("H");
                        total_departure_duration = total_departure_duration[0].toLowerCase() + "h " + total_departure_duration[1].toLowerCase();
                        */
                        //this gets the summ for all 
                        
                        bhour += parseInt(data[w].itineraries[k].duration.substring(2, data[w].itineraries[k].duration.length).split("H")[0]);
                        let tempMin = data[w].itineraries[k].duration.substring(2, data[w].itineraries[k].duration.length).split("H")[1];
                        bminute += parseInt(tempMin.substring(0, (tempMin.length - 1)));
                    
                        trip_departure_total_stops = data[w].itineraries[k].segments.length - 1;
                        trip_departure_total_stops = trip_departure_total_stops > 1 ? (trip_departure_total_stops + " stops") : (trip_departure_total_stops + " stop");

                        let change_flights_section = "";

                        let isfirstSegment = true;
                        let isArrivalSegmentTime = "";
                        let isDepartueSegmentTime = "";
                        let transfer_duration = "";
                        
                        for(let j = 0; j < data[w].itineraries[k].segments.length; j++){

                            if(isfirstSegment){
                                isArrivalSegmentTime = data[w].itineraries[k].segments[j].arrival.at;
                                isfirstSegment = false;
                            }else{
                                isDepartueSegmentTime = data[w].itineraries[k].segments[j].departure.at;
                                transfer_duration = get_transfer_duration(isArrivalSegmentTime, isDepartueSegmentTime);
                                isArrivalSegmentTime = data[w].itineraries[k].segments[j].arrival.at;
                            }

                            let segment_aircraft = ""
                            if(data[w].itineraries[k].segments[j]){
                                segment_aircraft = data[w].itineraries[k].segments[j].aircraft.code;
                                segment_aircraft = aircrats.filter(each => each.IATA.toLowerCase() === segment_aircraft.toLowerCase())[0];
                                if(segment_aircraft){
                                    segment_aircraft = segment_aircraft.Manufacturer + " " + segment_aircraft.Type_Model;
                                    //console.log(segment_aircraft);
                                }else{
                                    segment_aircraft = "";
                                    console.log(data[w].itineraries[k].segments[j].aircraft.code);
                                }
                            }
                            let segment_airline = "";
                            if(data[w].itineraries[k].segments[j]){
                                segment_airline = airline_codes.filter(each => each.code.toLowerCase() === data[w].itineraries[k].segments[j].carrierCode.toLowerCase())[0];
                                if(segment_airline){
                                    segment_airline = segment_airline.name;
                                }else{
                                    segment_airline = "airline: " + data[w].itineraries[k].segments[j].carrierCode;
                                }
                            }

                            depature_airline_iata = data[w].itineraries[k].segments[j].carrierCode;
                            airline_name = segment_airline;

                            change_flights_section = "";

                            if(data[w].itineraries.length > 2){
                                change_flights_section = `<div style="padding: 10px; background-color: rgba(0,0,0,0.1);">
                                    <div style="font-weight: bolder; display: flex; flex-direction: row !important;">
                                        <p><i class="fa fa-exclamation" style="margin-right: 10px; color: rgb(0, 177, 139);" aria-hidden="true"></i><p>
                                        <p style="color: rgba(0,0,0,0.6); font-size: 12px;">
                                        everything below this tag (until the next tag) show information for one complete city route of 
                                        your multi-city search (including stops, if any)</p>
                                    </div>
                                </div>`;
                            }

                            let departure_date_parts = data[w].itineraries[k].segments[j].departure.at.split("T")
                            let departure_date = new Date(parseInt(departure_date_parts[0].split("-")[0]), parseInt(departure_date_parts[0].split("-")[1]) - 1,
                                                            parseInt(departure_date_parts[0].split("-")[2]));

                            let departure_string_date = departure_date.toString(); 
                            let departure_time = departure_date_parts[1].substring(0,5);

                            total_trip_start_and_end_time += departure_time + " ";
                            departure_time = covert_time_to_12_hour(departure_time);

                            let departure_airport = AirportsData.filter(each => (each.IATA.toLowerCase().includes(data[w].itineraries[k].segments[j].departure.iataCode.toLowerCase())));
                            let departure_airport_name = departure_airport[0].name;
                            if(departure_airport_name.length > 14){
                                departure_airport_name = departure_airport_name.split(" ")[0];
                            }

                            trip_departure_from_and_airports += (departure_airport[0].IATA + " ");
                            departure_airport = `(${departure_airport[0].IATA}) ${departure_airport_name}`;
                            
                            let arrival_date_parts = data[w].itineraries[k].segments[j].arrival.at.split("T")
                            let arrival_date = new Date(parseInt(arrival_date_parts[0].split("-")[0]), parseInt(arrival_date_parts[0].split("-")[1]) - 1,
                                                            parseInt(arrival_date_parts[0].split("-")[2]));

                            let arrival_string_date = arrival_date.toString(); 
                            let arrival_time = arrival_date_parts[1].substring(0,5);

                            total_trip_start_and_end_time += arrival_time + " "
                            arrival_time = covert_time_to_12_hour(arrival_time);

                            let arrival_airport = AirportsData.filter(each => (each.IATA.toLowerCase().includes(data[w].itineraries[k].segments[j].arrival.iataCode.toLowerCase())));
                            let arrival_airport_name = arrival_airport[0].name;
                            if(arrival_airport_name.length > 14){
                                arrival_airport_name = arrival_airport_name.split(" ")[0];
                            }

                            trip_departure_from_and_airports += (arrival_airport[0].IATA + " ");
                            arrival_airport = `(${arrival_airport[0].IATA}) ${arrival_airport_name}`;
                            
                            let travel_duration = data[w].itineraries[k].segments[j].duration.substring(2, data[w].itineraries[k].segments[j].duration.length);
                            travel_duration = travel_duration.split("H");
                            travel_duration = travel_duration[0].toLowerCase() + (travel_duration[1] ? ("h " + travel_duration[1].toLowerCase()) : "");
                            if(travel_duration[travel_duration.length -1] !== "m" && travel_duration[travel_duration.length -1] !== "h"){
                                travel_duration += "h";
                            }

                            let segment_cabin = "";
                            let a_cabin = "";
                            if(data[w].travelerPricings[0]){
                                segment_cabin = data[w].travelerPricings[0].fareDetailsBySegment.filter( segmentPrice => segmentPrice.segmentId === data[w].itineraries[k].segments[j].id);
                                a_cabin = data[w].travelerPricings[0].fareDetailsBySegment.filter( segmentPrice => segmentPrice.segmentId === data[w].itineraries[k].segments[j].id);
                                
                                if(segment_cabin){
                                    segment_cabin = segment_cabin[0].cabin + " " + segment_cabin[0].class;
                                    displayed_cabin = segment_cabin;
                                    
                                    let airfare = airfare_codes.filter(each => each.code.toLowerCase() === a_cabin[0].class.toLowerCase())[0];
                                    let seg_airfair = airfare ? airfare.fare : "unavailable";
                                    all_segment_cabins += `
                                        <li style="padding: 5px 10px;">
                                            <p style="color: white; font-weight: bolder; letter-spacing: 0.5px; font-size: 10px; margin-bottom: 2px;">
                                            ${data[w].itineraries[last_flights_itinerary_index].segments[j].departure.iataCode} - 
                                            ${data[w].itineraries[last_flights_itinerary_index].segments[j].arrival.iataCode}</p>
                                            <p style="color: rgb(255, 23, 166); font-size: 12px; letter-spacing: 0.5px; font-weight: bolder; margin-left: 5px;">${seg_airfair}</p>
                                        </li>`;
                                }else{
                                    segment_cabin = "";
                                }
                                //console.log(segment_cabin);
                            }

                            if(j > 0){

                                change_flights_section = `

                                            <div style="width: calc(100% - 45px); border-radius: 4px; border: 1px solid rgb(0, 0, 0, 0.1); padding: 10px 0; margin: 0 20px; background-color: #0d3357;">
                                                <p style="font-size: 12px; font-weight: bolder; color: white; margin: 0 10px; margin-bottom: 10px;">
                                                <i class="fa fa-exclamation-triangle" style="margin-right: 5px; color: red;" aria-hidden="true"></i>
                                                Flight Stop</p>
                                                <div style="display: flex;  flex-direction: row !important; justify-content: space-between; margin: 0 10px;">
                                                    <div>
                                                        <span style="opacity: 0.7; color: white; font-size: 13px; letter-spacing: 0.5px;">Change planes in ${departure_airport}</span>
                                                        <br/>
                                                        <span style="display: none; font-size: 13px; font-weight: bolder; opacity: 0.9; color: #e25a00; letter-spacing: 0.5px;">
                                                            Self-transfer - Bag re-check may be required </span>
                                                    </div>
                                                    <div style="min-width: 60px; margin-left: 10px;">
                                                        <p style="font-size: 13px; font-weight: bolder; text-align: right; opacity: 0.9; color: white; letter-spacing: 0.5px;">${transfer_duration}</p>
                                                    </div>
                                                </div>
                                            </div>
                                `;
                            }

                            departure_segments += `
                                <div>
                                    
                                    ${change_flights_section}
                                
                                </div>

                                <div style="width: 100%; display: flex; flex-direction: row !important; justify-content: space-between;">
                                    <div style="padding: 20px; padding-bottom: 0;">
                                        <p style="font-weight: bolder; text-align: right; font-size: 14px; letter-spacing: 0.5px; opacity: 0.9;">${departure_string_date.substring(0, 10)}</p>
                                    </div>
                                    <div style="padding: 20px; padding-bottom: 0;">
                                        <p style="font-size: 13px; font-weight: bolder; text-align: right; opacity: 0.9; letter-spacing: 0.5px;">${travel_duration}</p>
                                    </div>
                                </div>

                                <div style="display: flex; width: 100%;">

                                    <div style="width: 100%;">

                                        <div style="display: flex; justify-content: space-between; margin: 0 20px; margin-bottom: 20px;">
                                            <div>
                                                <div>
                                                    <p>
                                                        <img src="https://daisycon.io/images/airline/?width=950&height=670&color=ffffff&iata=${data[w].itineraries[k].segments[j].carrierCode}" style="width: 70px; height: 50px;" />
                                                    </p>
                                                    <div style="margin-bottom: 10px; display: flex;  flex-direction: row !important; justify-content: space-between;">
                                                        <p style="font-size: 14px;  letter-spacing: 0.5px; font-weight: bolder; opacity: 0.8;">${departure_time} — ${arrival_time}</p>
                                                        <p style="font-size: 12px;  letter-spacing: 0.8px; font-weight: bolder; opacity: 0.5;">
                                                            ${segment_cabin}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p style="margin-bottom: 7px; font-size: 13px; opacity: 0.6; letter-spacing: 0.5px;">
                                                    ${departure_airport} - ${arrival_airport}
                                                </p>
                                                <p style="letter-spacing: 0.5px; opacity: 0.9; margin-bottom: 7px; font-size: 13px; font-weight: bolder; color: #003f7a;">Limited seats remaining at this price</p>
                                                <p style="margin-bottom: 7px; font-size: 13px; opacity: 0.6; letter-spacing: 0.5px;">${segment_airline} · ${segment_aircraft}</p>
                                                <p style="font-size: 13px; font-weight: bolder; color: #e25a00; opacity: 0.9; letter-spacing: 0.5px;">Carry-on baggage fees may apply to one or more segments of this trip</p>
                                            </div>
                                            
                                        </div>

                                    </div>
                                </div>
                        `;
                        }
                    }

                    while(bminute > 60){
                        bminute -= 60;
                        bhour += 1;
                    }
                    
                    total_departure_duration = (bhour === 0 ? "" : (bhour + "h ")) + (bminute === 0 ? "" : (bminute + "m"))

                    if(last_flights_itinerary_index > 0){

                        total_return_duration = data[w].itineraries[last_flights_itinerary_index].duration.substring(2, data[w].itineraries[last_flights_itinerary_index].duration.length);
                        total_return_duration = total_return_duration.split("H");
                        total_return_duration = total_return_duration[0].toLowerCase() + "h " + total_return_duration[1].toLowerCase();
                        
                        let qhour = total_return_duration.split("h")[0];
                        let qminute =  total_return_duration.split("h")[1];
                        qminute = qminute.substring(0, (qminute.length - 1));
                        
                        if(!qhour){
                            qhour = 0;
                        }
                        if(!qminute){
                            qminute = 0;
                        }
                        
                        trip_return_total_stops = data[w].itineraries[flights_itinerry_lenght].segments.length - 1;
                        trip_return_total_stops = trip_return_total_stops > 1 ? (trip_return_total_stops + " stops") : (trip_return_total_stops + " stop");
                        
                        //let change_flights_section = "";
                        let return_flights_change_flights_section = "";
                        
                        let isfirstSegment = true;
                        let isArrivalSegmentTime = "";
                        let isDepartueSegmentTime = "";
                        let transfer_duration = "";
                        
                        for(let j = 0; j < data[w].itineraries[last_flights_itinerary_index].segments.length; j++){

                            if(isfirstSegment){
                                isArrivalSegmentTime = data[w].itineraries[last_flights_itinerary_index].segments[j].arrival.at;
                                isfirstSegment = false;
                            }else{
                                isDepartueSegmentTime = data[w].itineraries[last_flights_itinerary_index].segments[j].departure.at;
                                transfer_duration = get_transfer_duration(isArrivalSegmentTime, isDepartueSegmentTime);
                                isArrivalSegmentTime = data[w].itineraries[last_flights_itinerary_index].segments[j].arrival.at;
                            }

                            let segment_aircraft = ""
                            if(data[w].itineraries[last_flights_itinerary_index].segments[j]){
                                segment_aircraft = data[w].itineraries[last_flights_itinerary_index].segments[j].aircraft.code;
                                segment_aircraft = aircrats.filter(each => each.IATA.toLowerCase() === segment_aircraft.toLowerCase())[0];
                                if(segment_aircraft){
                                    segment_aircraft = segment_aircraft.Manufacturer + " " + segment_aircraft.Type_Model;
                                    //console.log(segment_aircraft);
                                }else{
                                    segment_aircraft = "";
                                    console.log(data[w].itineraries[last_flights_itinerary_index].segments[j].aircraft.code);
                                }
                            }
                            let segment_airline = "";
                            if(data[w].itineraries[last_flights_itinerary_index].segments[j]){
                                segment_airline = airline_codes.filter(each => each.code.toLowerCase() === data[w].itineraries[last_flights_itinerary_index].segments[j].carrierCode.toLowerCase())[0];
                                if(segment_airline){
                                    segment_airline = segment_airline.name;
                                }else{
                                    segment_airline = "airline: " + data[w].itineraries[last_flights_itinerary_index].segments[j].carrierCode;
                                }
                            }

                            return_airline_iata = data[w].itineraries[last_flights_itinerary_index].segments[j].carrierCode;
                            return_airline_name = segment_airline;

                            //change_flights_section = "";

                            let departure_date_parts = data[w].itineraries[last_flights_itinerary_index].segments[j].departure.at.split("T")
                            let departure_date = new Date(parseInt(departure_date_parts[0].split("-")[0]), parseInt(departure_date_parts[0].split("-")[1]) - 1,
                                                            parseInt(departure_date_parts[0].split("-")[2]));

                            let departure_string_date = departure_date.toString(); 
                            let departure_time = departure_date_parts[1].substring(0,5);

                            total_trip_return_start_and_end_time += departure_time + " ";
                            departure_time = covert_time_to_12_hour(departure_time);

                            let departure_airport = AirportsData.filter(each => (each.IATA.toLowerCase().includes(data[w].itineraries[last_flights_itinerary_index].segments[j].departure.iataCode.toLowerCase())));
                            let departure_airport_name = departure_airport[0].name;
                            if(departure_airport_name.length > 14){
                                departure_airport_name = departure_airport_name.split(" ")[0];
                            }

                            trip_return_from_and_to_airports += (departure_airport[0].IATA + " ");
                            departure_airport = `(${departure_airport[0].IATA}) ${departure_airport_name}`;
                            
                            let arrival_date_parts = data[w].itineraries[last_flights_itinerary_index].segments[j].arrival.at.split("T")
                            let arrival_date = new Date(parseInt(arrival_date_parts[0].split("-")[0]), parseInt(arrival_date_parts[0].split("-")[1]) - 1,
                                                            parseInt(arrival_date_parts[0].split("-")[2]));

                            let arrival_string_date = arrival_date.toString(); 
                            let arrival_time = arrival_date_parts[1].substring(0,5);

                            total_trip_return_start_and_end_time += arrival_time + " "
                            arrival_time = covert_time_to_12_hour(arrival_time);

                            let arrival_airport = AirportsData.filter(each => (each.IATA.toLowerCase().includes(data[w].itineraries[last_flights_itinerary_index].segments[j].arrival.iataCode.toLowerCase())));
                            let arrival_airport_name = arrival_airport[0].name;
                            if(arrival_airport_name.length > 14){
                                arrival_airport_name = arrival_airport_name.split(" ")[0];
                            }

                            trip_return_from_and_to_airports += (arrival_airport[0].IATA + " ");
                            arrival_airport = `(${arrival_airport[0].IATA}) ${arrival_airport_name}`;
                            
                            let travel_duration = data[w].itineraries[last_flights_itinerary_index].segments[j].duration.substring(2, data[w].itineraries[last_flights_itinerary_index].segments[j].duration.length);
                            travel_duration = travel_duration.split("H");
                            travel_duration = travel_duration[0].toLowerCase() + (travel_duration[1] ? ("h " + travel_duration[1].toLowerCase()) : "");
                            if(travel_duration[travel_duration.length -1] !== "m" && travel_duration[travel_duration.length -1] !== "h"){
                                travel_duration += "h";
                            }


                            let segment_cabin = "";
                            let a_cabin = "";
                            if(data[w].travelerPricings[0]){
                                segment_cabin = data[w].travelerPricings[0].fareDetailsBySegment.filter( segmentPrice => segmentPrice.segmentId === data[w].itineraries[last_flights_itinerary_index].segments[j].id);
                                 a_cabin = data[w].travelerPricings[0].fareDetailsBySegment.filter( segmentPrice => segmentPrice.segmentId === data[w].itineraries[last_flights_itinerary_index].segments[j].id);
                                
                                if(segment_cabin){

                                    segment_cabin = segment_cabin[(segment_cabin.length - 1)].cabin + " " + segment_cabin[0].class;
                                    
                                    let airfare = airfare_codes.filter(each => each.code.toLowerCase() === a_cabin[0].class.toLowerCase())[0];
                                    all_segment_cabins += `
                                        <li style="padding: 5px 10px;">
                                            <p style="color: white; font-weight: bolder; letter-spacing: 0.5px; font-size: 10px; margin-bottom: 2px;">
                                            ${data[w].itineraries[last_flights_itinerary_index].segments[j].departure.iataCode} - 
                                            ${data[w].itineraries[last_flights_itinerary_index].segments[j].arrival.iataCode}</p>
                                            <p style="color: rgb(255, 23, 166); font-size: 12px; letter-spacing: 0.5px; font-weight: bolder; margin-left: 5px;">${airfare.fare}</p>
                                        </li>`;
                                }else{
                                    segment_cabin = "";
                                }
                                //console.log(segment_cabin);
                            }

                            if(j > 0){

                                return_flights_change_flights_section = `

                                    <div style="width: calc(100% - 45px); border-radius: 4px; border: 1px solid rgb(0, 0, 0, 0.1); padding: 10px 0; margin: 0 20px; background-color: #0d3357;">
                                        <p style="font-size: 12px; font-weight: bolder; color: white; margin: 0 10px; margin-bottom: 10px;">
                                        <i class="fa fa-exclamation-triangle" style="margin-right: 5px; color: red;" aria-hidden="true"></i>
                                        Flight Stop</p>
                                        <div style="display: flex;  flex-direction: row !important; justify-content: space-between; margin: 0 10px;">
                                            <div>
                                                <span style="opacity: 0.7; color: white; font-size: 13px; letter-spacing: 0.5px;">Change planes in ${departure_airport}</span>
                                                <br/>
                                                <span style="display: none; font-size: 13px; font-weight: bolder; opacity: 0.9; color: #e25a00; letter-spacing: 0.5px;">
                                                    Self-transfer - Bag re-check may be required </span>
                                            </div>
                                            <div style="min-width: 60px; margin-left: 10px;">
                                                <p style="font-size: 13px; font-weight: bolder; text-align: right; opacity: 0.9; color: white; letter-spacing: 0.5px;">${transfer_duration}</p>
                                            </div>
                                        </div>
                                    </div>
                                `;
                            }

                            return_segments += `
                                <div>
                                    
                                    ${return_flights_change_flights_section}
                                
                                </div>

                                <div style="width: 100%; display: flex; flex-direction: row !important; justify-content: space-between;">
                                    <div style="padding: 20px; padding-bottom: 0;">
                                        <p style="font-weight: bolder; text-align: right; font-size: 14px; letter-spacing: 0.5px; opacity: 0.9;">${departure_string_date.substring(0, 10)}</p>
                                    </div>
                                    <div style="padding: 20px; padding-bottom: 0;">
                                        <p style="font-size: 13px; font-weight: bolder; text-align: right; opacity: 0.9; letter-spacing: 0.5px;">${travel_duration}</p>
                                    </div>
                                </div>

                                <div style="display: flex; width: 100%;">

                                    <div style="width: 100%;">

                                        <div style="display: flex; justify-content: space-between; margin: 0 20px; margin-bottom: 20px;">
                                            <div>
                                                <div>
                                                    <p>
                                                        <img src="https://daisycon.io/images/airline/?width=950&height=670&color=ffffff&iata=${data[w].itineraries[last_flights_itinerary_index].segments[j].carrierCode}" style="width: 70px; height: 50px;" />
                                                    </p>
                                                    <div style="margin-bottom: 10px; display: flex;  flex-direction: row !important; justify-content: space-between;">
                                                        <p style="font-size: 14px;  letter-spacing: 0.5px; font-weight: bolder; opacity: 0.8;">${departure_time} — ${arrival_time}</p>
                                                        <p style="font-size: 12px;  letter-spacing: 0.8px; font-weight: bolder; opacity: 0.5;">
                                                            ${segment_cabin}
                                                        </p>
                                                    </div>
                                                </div>
                                                <p style="margin-bottom: 7px; font-size: 13px; opacity: 0.6; letter-spacing: 0.5px;">
                                                    ${departure_airport} - ${arrival_airport}
                                                </p>
                                                <p style="letter-spacing: 0.5px; opacity: 0.9; margin-bottom: 7px; font-size: 13px; font-weight: bolder; color: #003f7a;">Limited seats remaining at this price</p>
                                                <p style="margin-bottom: 7px; font-size: 13px; opacity: 0.6; letter-spacing: 0.5px;">${segment_airline} · ${segment_aircraft}</p>
                                                <p style="font-size: 13px; font-weight: bolder; color: #e25a00; opacity: 0.9; letter-spacing: 0.5px;">Carry-on baggage fees may apply to one or more segments of this trip</p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                        `;
                        }
                    }

                    //skip rendering of flights with time greater than fastest times
                    if(show_fastest_travel_times_clicked && (((parseInt(ahour) * 60) + parseInt(aminute)) > fastest_minutes_number)){
                            
                        if(limit > 0){
                            limit--;
                        }
                        
                        done_skipping = true;
                        continue main_loop;
                    }

                    total_trip_start_and_end_time = total_trip_start_and_end_time.split(" ");
                    total_trip_start_and_end_time = covert_time_to_12_hour(total_trip_start_and_end_time[0]) + " - " + covert_time_to_12_hour(total_trip_start_and_end_time[(total_trip_start_and_end_time.length - 2)]);

                    if(total_trip_return_start_and_end_time){
                        total_trip_return_start_and_end_time = total_trip_return_start_and_end_time.split(" ");
                        total_trip_return_start_and_end_time = covert_time_to_12_hour(total_trip_return_start_and_end_time[0]) + " - " + covert_time_to_12_hour(total_trip_return_start_and_end_time[(total_trip_return_start_and_end_time.length - 2)]);
                    }

                    trip_departure_from_and_airports = trip_departure_from_and_airports.split(" ");
                    trip_departure_stops_airports = trip_departure_from_and_airports[1];
                    if(trip_departure_from_and_airports.length > 5){
                        trip_departure_stops_airports = trip_departure_from_and_airports[1] + ", " + trip_departure_from_and_airports[(trip_departure_from_and_airports.length - 3)];
                    }
                    if(trip_departure_from_and_airports.length > 7){
                        trip_departure_stops_airports = trip_departure_from_and_airports[1] + ", .., " + trip_departure_from_and_airports[(trip_departure_from_and_airports.length - 3)];
                    }
                    trip_departure_from_and_airports = trip_departure_from_and_airports[0] + " - " + trip_departure_from_and_airports[(trip_departure_from_and_airports.length - 2)];
                    
                    if(trip_return_from_and_to_airports){
                        trip_return_from_and_to_airports = trip_return_from_and_to_airports.split(" ");
                        trip_return_stops_airports = trip_return_from_and_to_airports[1];
                        if(trip_return_from_and_to_airports.length > 5){
                            trip_return_stops_airports = trip_return_from_and_to_airports[1] + ", " + trip_return_from_and_to_airports[(trip_return_from_and_to_airports.length - 3)];
                        }
                        if(trip_return_from_and_to_airports.length > 7){
                            trip_return_stops_airports = trip_return_from_and_to_airports[1] + ", .., " + trip_return_from_and_to_airports[(trip_return_from_and_to_airports.length - 3)];
                        }
                        trip_return_from_and_to_airports = trip_return_from_and_to_airports[0] + " - " + trip_return_from_and_to_airports[(trip_return_from_and_to_airports.length - 2)];
                    }

                }

                document.getElementById("main_tickets_section_list_container").innerHTML +=
                    `<div class="each_ticket_item">
                    <div class="share_each_ticket_item_btn">
                        <p>
                        <i style="font-size: 20px; color:rgb(78, 78, 78);" class="fa fa-share-square-o" aria-hidden="true"></i>
                        </p>
                        <p class="share_each_ticket_item_btn_txt">share</p>
                    </div>
                    <div style="display: none !important;" class="each_ticket_item_top">
                        <div style="display: flex; flex-direction: row !important;">
                            <div style="margin-right: 15px;">
                            <i style="color:rgb(78, 78, 78); font-size: 19px;" class="fa fa-plane" aria-hidden="true"></i>
                            <i style="color:rgb(78, 78, 78); margin-left: 20px;" class="fa fa-train" aria-hidden="true"></i>
                            </div>
                            <div>
                                <p style="margin-bottom: 2px; color: black; font-weight: bolder;">Interested in flight + train prices?</p>
                                <p>Beat flight costs by including train connections.</p>
                            </div>
                        </div>
                        <div>
                            <div class="each_ticket_item_top_show_more_btn">Show more</div>
                        </div>
                    </div>
                    <div class="each_ticket_item_main_extra_container">
                    <div class="each_ticket_item_main_extra">
                        <div onclick="toggle_show_flight_ticket_item_details(${w})">
                        <span style="background-color: #37a0f5;">${number_of_travelers}</span>
                        <span style="background-color: teal;"><i style="margin-right: 5px; font-size: 12px; color:rgba(255, 255, 255, 0.65);" class="fa fa-suitcase" aria-hidden="true"></i>Only Flight</span>
                        <span class="COVID_policy_desktop" style="color: black;">
                            <i style="color: rgb(182, 54, 182);" class="fa fa-medkit" aria-hidden="true"></i>
                            COVID-19 policies
                        </span>
                        <div style="padding-top: 15px; font-size: 14px; font-weight: bolder; color:rgb(65, 65, 65);">
                            See more details
                            <i id="see_flight_details_angle_down${w}" style="margin-left: 5px;" class="fa fa-angle-down" aria-hidden="true"></i>
                        </div>
                        </div>
                        <div class="each_ticket_item_emogi_and_rating">
                        <p style="font-size: 11px; opacity: 0.8; font-weight: bolder; margin-bottom: 10px; margin-left: 6px;">
                            Deal Price Rating
                        </p>
                        <p>
                            <span style="font-size: 14px; padding-right: 15px; color: white; border-radius: 50px; background-color:rgb(235, 86, 0); text-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.3),
                            0px 0px 2.9px rgba(0, 0, 0, 0.23);">
                                ${ticket_rating_starts}
                            </span>
                        </p>
                        
                        <div class="bubble_popup arrow_on_right_side">
                            <p style="font-size: 12px; text-align: justify; margin: 10px; opacity: 0.8;">
                                Flight ticket prices fluctuate constantly – demand, availability,
                                route, date and even search time all play a role in determining the price offered.<br/><br/>
                                This rating is based on historical flight prices for your chosen route(s) to help
                                you understand if you're getting a good deal
                            </p>
                            <p style="letter-spacing: 0.5px; font-size: 12px; font-weight: bolder; 10px; opacity: 0.8; color: rgb(34, 90, 112); margin: 0 10px; margin-top:15px;  margin-bottom: 5px;">
                                Price stats for each adult
                            </p>
                            <div style=" background-color: rgba(0,0,0,0.08); position: relative; padding: 5px 0; padding-left: 5px; margin: 10px; border-left: 10px solid; border-image-source: linear-gradient(orange, orangered, crimson); border-image-slice: 1;">
                                <p style="font-size: 13px; text-align: left; position: relative; z-index: 1;">
                                    <span style="font-weight: bolder; color: white; font-size: 11px; margin: 0 !important; letter-spacing: 0.5px; padding: 0 !important;">Minimum: <span style="font-size: 11px; color: rgb(255, 23, 166); padding: 0 !important;">${current_currency.sign} ${addCommas(price_metrics_min.toFixed(2))}</span></span>
                                </p>
                                <div style="display: flex; flex-direction: column !important; font-size: 12px; margin: 3px 10px; position: relative; z-index: 1;">
                                    <i style="margin-bottom: 5px; font-size: 10px; margin-left: 20px; opacity: 0;" class="fa fa-arrow-down" aria-hidden="true"></i>
                                    <p style="font-size: 11px; color: rgba(204, 241, 255, 0.603);">${current_currency.sign} ${addCommas(price_metrics_first.toFixed(2))}</p>
                                    <i style="margin-top: 5px; font-size: 10px; margin-left: 20px; opacity: 0;" class="fa fa-arrow-down" aria-hidden="true"></i>
                                </div>
                                <p style="position: relative; z-index: 1;">
                                    <span style="font-weight: bolder; color: white; font-size: 11px; letter-spacing: 0.5px; padding: 0 !important;">Medium: <span style="font-size: 11px; color: rgb(255, 23, 166); padding: 0 !important;">${current_currency.sign} ${addCommas(price_metrics_medium.toFixed(2))}</span></span>
                                </p>
                                <div style="display: flex; flex-direction: column !important; font-size: 12px; margin: 3px 10px; position: relative; z-index: 1;">
                                    <i style="margin-bottom: 5px; font-size: 10px; margin-left: 20px; opacity: 0;" class="fa fa-arrow-down" aria-hidden="true"></i>
                                    <p style="font-size: 11px; color: rgba(204, 241, 255, 0.603);">${current_currency.sign} ${addCommas(price_metrics_third.toFixed(2))}</p>
                                    <i style="margin-top: 5px; font-size: 10px; margin-left: 20px; opacity: 0;" class="fa fa-arrow-down" aria-hidden="true"></i>
                                </div>
                                <p style="position: relative; z-index: 1;">
                                    <span style="font-weight: bolder; color: white; font-size: 11px; letter-spacing: 0.5px; padding: 0 !important;">Maximum: <span style="font-size: 11px; color: rgb(255, 23, 166); padding: 0 !important;">${current_currency.sign} ${addCommas(price_metrics_max.toFixed(2))}</span></span>
                                </p>
                                
                                <div style="position: absolute; left: 0; top: 0; height: 100% !important; width: 100% !important;
                                    background-color: #140028;">
                                    
                                </div>
                                <div style="position: absolute; left: 0; top: 0; height: 50% !important; width: 100% !important; display: flex; flex-direction: column;
                                    justify-content: flex-end; background-color: rgba(255, 255, 255, 0.1);">
                                    
                                </div>
                                <div style="position: absolute; left: -20px; top: 0; width: calc(100% + 30px) !important; height: ${current_price_percentage}% !important; display: flex; flex-direction: column;
                                    justify-content: flex-end; border-bottom: 1px solid rgb(235, 86, 0);">
                                    <p style="text-align: right; font-weight: bolder; font-size: 11px; margin: 3px 10px; letter-spacing: 1; color: white;">
                                    this price: <span style="font-size: 11px; color: rgb(235, 86, 0); padding: 0 !important;">${current_currency.sign} ${addCommas(each_traveler_price.toFixed(2))}</span></p>
                                </div>

                            </div>
                        </div>
                        </div>
                    </div>
                    <div id="flight_ticket_item_details${w}" class="flight_ticket_item_details">

                        <div style="flex-direction: row !important;" class="flight_ticket_item_details_top_options">
                            <div style="display: flex; flex-direction: row !important;">
                                <div id="flight_ticket_item_details_each_top_option_details_btn${w}" onclick="show_flight_ticket_item_main_details_set(${w})" class="flight_ticket_item_details_each_top_option active">
                                    Detials
                                </div>
                                <div id="flight_ticket_item_details_each_top_option_fairs_btn${w}" onclick="show_flight_ticket_item_fair_details_set(${w})" class="flight_ticket_item_details_each_top_option">
                                    Fairs
                                </div>
                            </div>
                            <div onclick="toggle_show_flight_ticket_item_details(${w})">
                                <span style="font-size: 25px; opacity: 0.4">
                                    <i class="fa fa-times-circle-o" aria-hidden="true"></i>
                                </span>
                            </div>
                        </div>

                        <div id="flight_ticket_item_details_section_content_set${w}">
                            <div style="flex-direction: row !important;" class="flight_ticket_item_details_section_content_title">
                                <p>Airline Policy Updates</p>
                            </div>
                            <div class="flight_ticket_item_details_section_content">

                                <div onclick="show_flight_ticket_added_policies_content(${w});" style="display: flex; cursor: pointer; flex-direction: row !important; justify-content: space-between; padding: 20px;">
                                    <div>
                                        <p id="each_flight_ticket_added_policies_content_title${w}" style="display: none; font-size: 14px; opacity: 0.9; font-weight: bolder; margin: 10px 0;">American Airlines policies</p>
                                        <p id="each_flight_ticket_added_policies_content_summary${w}" style="font-size: 13px; opacity: 0.6; letter-spacing: 0.5px;">Flexible cancellation options & additional safety measures</p>
                                        <p id="each_flight_ticket_added_policies_content_read_more_txt${w}" style="margin-top: 7px; color: #00284e; font-size: 13px; opacity: 0.9; letter-spacing: 0.5px; font-weight: bolder;">Read More</p>
                                    </div>
                                    <div style="display: flex; flex-direction: column !important; justify-content: center;">
                                        <p style="opacity: 0.6;">
                                            <i id="each_flight_ticket_added_policies_content_chevron_icon${w}" style="transition: all 0.3s;" class="fa fa-chevron-down"></i>
                                        </p>
                                    </div>
                                </div>
                                <div id="each_flight_ticket_added_policies_content${w}" style="padding: 0 20px; display: none;">

                                    <div style="display: flex; flex-direction: row !important; margin-bottom: 20px;">
                                        <div style="margin-right: 10px;">
                                            <i style="font-size: 22px; opacity: 0.7;" aria-hidden="true" class="fa fa-info"></i>
                                        </div>
                                        <div>
                                            <p style="font-size: 13px; opacity: 0.7;">
                                                American Basic Economy fares booked before December 31 can be changed without a fee once or
                                                exchanged for travel credit. First, Business, Premium Economy and Main Cabin tickets for all
                                                domestic and short-haul international flights are now always eligible for free changes.
                                            </p>
                                        </div>
                                    </div>

                                    <div style="display: flex; flex-direction: row !important; margin-bottom: 20px;">
                                        <div style="margin-right: 10px;">
                                            <i style="font-size: 22px; opacity: 0.7;" aria-hidden="true" class="fa fa-info"></i>
                                        </div>
                                        <div>
                                            <p style="font-size: 13px; opacity: 0.7;">
                                                Pre-flight cleaning, installation of cabin HEPA filters.
                                            </p>
                                        </div>
                                    </div>
                                    
                                    <div style="display: flex; flex-direction: row !important; margin-bottom: 20px;">
                                        <div style="margin-right: 10px;">
                                            <i style="font-size: 22px; opacity: 0.7;" aria-hidden="true" class="fa fa-info"></i>
                                        </div>
                                        <div>
                                            <p style="font-size: 13px; opacity: 0.7;">
                                                Masks required on board.
                                            </p>
                                        </div>
                                    </div>

                                    <div style="display: flex; flex-direction: row !important; margin-bottom: 20px;">
                                        <div style="margin-right: 10px;">
                                            <i style="font-size: 22px; opacity: 0.7;" aria-hidden="true" class="fa fa-thermometer-half"></i>
                                        </div>
                                        <div>
                                            <p style="font-size: 13px; opacity: 0.7;">
                                                Pre-flight health screening questions.
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div style="flex-direction: row !important; margin-top: 20px;" class="flight_ticket_item_details_section_content_title">
                                <p>
                                    <input id="flight_ticket_item_details_section_content_Depature_check${w}" type="checkbox" />
                                    <label style="cursor: pointer;" for="flight_ticket_item_details_section_content_Depature_check${w}">
                                        Depart <span>${trip_departure_from_and_airports}</span>
                                    </label>
                                </p>
                                <div>
                                    <span>
                                        ${total_departure_duration}
                                    </span>
                                </div>
                            </div>
                            <div class="flight_ticket_item_details_section_content">

                                ${departure_segments}

                            </div>

                            <div style="display: ${return_flights_display} !important; flex-direction: row !important; margin-top: 20px;" class="flight_ticket_item_details_section_content_title">
                                <p>
                                    <input id="flight_ticket_item_details_section_content_Return_check${w}" type="checkbox" />
                                    <label style="cursor: pointer;" for="flight_ticket_item_details_section_content_Return_check${w}">
                                        Return <span>${trip_return_from_and_to_airports}</span>
                                    </label>
                                </p>
                                <div>
                                    <span>
                                    ${total_return_duration}
                                    </span>
                                </div>
                            </div>
                            <div style="display: ${main_return_flights_display} !important; margin-bottom: 20px;" class="flight_ticket_item_details_section_content">

                                ${return_segments}

                            </div>
                        </div>

                        <div style="display: none;" id="flight_ticket_item_fairs_details_section_content_set${w}">

                            <div style="display: flex; flex-direction: row !important; justify-content: space-between; padding: 20px;">
                                <div>
                                    <p style="font-weight: bolder; opacity: 0.8; font-size: 15px;">Booking Options</p>
                                </div>
                                <div style="display: flex; display: none; flex-direction: row !important;">
                                    <div style="margin-right: 15px; font-weight: bolder;">
                                        <input style="margin-right: 5px;" type="checkbox" /> <span style="opacity: 0.8; font-size: 14px;">Main Cabin</span>
                                    </div>
                                    <div style="font-weight: bolder;">
                                        <input style="margin-right: 5px;" type="checkbox" /> <span style="opacity: 0.8; font-size: 14px;">First</span>
                                    </div>
                                </div>
                            </div>

                            <div style="margin-bottom: 20px;" class="flight_ticket_item_details_section_content">

                                <div style="display: flex; justify-content: space-between; padding: 20px; padding-top: 0;">
                                    <div style="margin-right: 10px; margin-top: 20px;">
                                        <p style="opacity: 0.8; font-weight: bolder; font-size: 14px;">
                                        <i style="margin-right: 5px;" aria-hidden="true" class="fa fa-ticket"></i>
                                        Sold by</p>
                                        <p style="opacity: 0.7; font-size: 14px; margin-top: 5px;">${airline_name}</p>
                                        <img style="margin: 0; width: 70px; height: 55px;" src="https://daisycon.io/images/airline/?width=950&height=855&color=ffffff&iata=${data[w].validatingAirlineCodes[0]}" alt=""/>
                                    </div>
                                    <div style="margin-right: 10px; margin-top: 20px;">
                                        <p style="opacity: 0.8; font-weight: bolder; font-size: 14px;">
                                        <i style="margin-right: 5px;" aria-hidden="true" class="fa fa-info"></i>
                                        Cancellation</p>
                                        <p style="opacity: 0.7; font-size: 14px; margin-top: 5px;">24hr free cancellation</p>
                                    </div>
                                    <div style="margin-top: 20px;">
                                        <p style="opacity: 0.8; font-weight: bolder; font-size: 14px;">
                                        Total Price</p>
                                        <p style="opacity: 0.7; font-size: 14px; margin-top: 5px;">${current_currency.sign} ${flight_price}</p>
                                        <div onclick="view_flight_deal(true, '${each_flight_data.replaceAll('"', '*#*$#%')}');" style="cursor: pointer; min-width: 60px; text-align: center; margin: 10px 0; padding: 10px; font-size: 12px; background-color: #184e80; color: white; border-radius: 4px;">
                                            Book Flight
                                        </div>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                </div>
                    <div class="each_ticket_item_main">
                    <div class="each_ticket_item_main_left">
                        <div class="main_ticket_info_area">
                        <div class="main_ticket_info_area_top">
                            <div class="each_ticket_aircraft_logo_area" style="flex-direction: row !important;">
                                <div><input type="checkbox" /></div>
                                <div style=""><img src="https://daisycon.io/images/airline/?width=950&height=855&color=ffffff&iata=${depature_airline_iata}" alt=""/></div>
                            </div>
                            <div style="flex-direction: row !important; width: 100%; justify-content: space-between;">
                            <div>
                                <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px;">
                                ${total_trip_start_and_end_time}</p>
                                <p style="color:rgb(148, 148, 148); font-size: 13px;">
                                ${airline_name}</p>
                            </div>
                            <div>
                                <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px;">${trip_departure_total_stops}</p>
                                <p style="color:rgb(148, 148, 148); font-size: 13px; text-align: center;">${trip_departure_stops_airports}</p>
                            </div>
                            <div>
                                <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px;">${total_departure_duration}</p>
                                <p style="color:rgb(148, 148, 148); font-size: 13px;">
                                ${trip_departure_from_and_airports}</p>
                            </div>
                            </div>
                        </div>
                        <div style="display: ${return_flights_display} !important;" class="main_ticket_info_area_bottom">
                            <div class="each_ticket_aircraft_logo_area" style="flex-direction: row !important;">
                                <div><input type="checkbox" /></div>
                                <div style=""><img src="https://daisycon.io/images/airline/?width=950&height=855&color=ffffff&iata=${return_airline_iata}" alt=""/></div>
                            </div>
                            <div style="flex-direction: row !important; width: 100%; justify-content: space-between;">
                            <div>
                                <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px;">
                                ${total_trip_return_start_and_end_time}</p>
                                <p style="color:rgb(148, 148, 148); font-size: 13px;">
                                ${return_airline_name}</p>
                            </div>
                            <div>
                                <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px;">${trip_return_total_stops}</p>
                                <p style="color:rgb(148, 148, 148); font-size: 13px;">${trip_return_stops_airports}</p>
                            </div>
                            <div>
                                <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px;">${total_return_duration}</p>
                                <p style="color:rgb(148, 148, 148); font-size: 13px;">
                                ${trip_return_from_and_to_airports}</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <p class="tickets_main_additional_text">
                            <i class="fa fa-exclamation" style="margin-right: 5px; color: green;" aria-hidden="true"></i> this ticket is sold by ${validating_airline}
                        </p>
                    </div>
                    <div class="each_ticket_item_main_right">
                        <p class="ticket_item_price_display">${current_currency.sign} ${flight_price}</p>
                        <p style="color:rgb(104, 104, 104); font-size: 12px; margin-bottom: 5px; font-weight: bolder;">
                        ${validating_airline}</p>
                        <div class="ticket_item_entitlements_display">
                            ${displayed_cabin}
                            <div class="ticket_item_entitlements_content_display arrow_on_bottom">
                                <p style="opacity: 0.8; font-weight: bolder; font-size: 12px; padding: 10px;">
                                    All segments' airfare classes
                                </p>
                                <ul style="list-style-type: none; padding: 10px; margin-bottom: 10px; background-color: #140028;">
                                    ${all_segment_cabins}
                                </ul>
                            </div>
                        </div>
                        <div  onclick="view_flight_deal(true, '${each_flight_data.replaceAll('"', '*#*$#%')}');" style="font-size: 14px;" class="view_deal_button">Book Flight</div>
                    </div>
                    </div>
                </div>`;

                limit++;
            }

            //resetting adults
            previous_search_adults = fligh_search_data.number_of_adults;
            fligh_search_data.number_of_adults = default_adults;
            window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));
            
        },
        error: (err)=>{

            document.getElementById("main_tickets_section_list_container").innerHTML =
                    `
                        <div style=" background-color: white; border-radius: 4px; margin: 15px 0;
                            padding: 50px 0; animation: display_anim 1000ms ease-out;">
                            <p style="text-align: center;">
                                <img src="/images/search_not_found.png" style="width: 60px; height: 60px;" alt=""/>
                            </p>
                            <p style="color: #00284e; font-weight: bolder; font-size: 13px; text-align: center;">
                                Oops! nothing found for this search.
                            </p>
                        </div>

                    `;

            return null;
        } 

    });

}

var get_flight_price_analysis = async ()=>{
    return $.ajax({
        type: "POST",
        url: "/flightpriceanalysis",
        data: JSON.stringify(fligh_search_data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (result)=>{
            return result;
        },
        error: (err)=>{
            return err;
        }
    });
}

if(localStorage.getItem("main_search_type") === "flight_search"){
    get_flight_price_analysis().then(data=>{
        
        if(data.data){
            if(data.data.length > 0){
                price_metrics_min = parseFloat((site_currency_coverter(data.data[0].currencyCode, current_currency.currency, parseFloat(data.data[0].priceMetrics[0].amount))).replaceAll(",", ""));
                price_metrics_first = parseFloat((site_currency_coverter(data.data[0].currencyCode, current_currency.currency, parseFloat(data.data[0].priceMetrics[1].amount))).replaceAll(",", ""));
                price_metrics_medium = parseFloat((site_currency_coverter(data.data[0].currencyCode, current_currency.currency, parseFloat(data.data[0].priceMetrics[2].amount))).replaceAll(",", ""));
                price_metrics_third = parseFloat((site_currency_coverter(data.data[0].currencyCode, current_currency.currency, parseFloat(data.data[0].priceMetrics[3].amount))).replaceAll(",", ""));
                price_metrics_max = parseFloat((site_currency_coverter(data.data[0].currencyCode, current_currency.currency, parseFloat(data.data[0].priceMetrics[4].amount))).replaceAll(",", ""));

                price_metrices_currency = data.data[0].currencyCode;

                /*console.log("min: ", price_metrics_min);
                console.log("first: ", price_metrics_first);
                console.log("median: " + price_metrics_medium);
                console.log("third: " + price_metrics_third);
                console.log("max: ", price_metrics_max);
                console.log("metrics currency: ", price_metrices_currency);
                console.log(data);*/
            }
        }

        render_flights();

    }).catch(err =>{
        console.log(err);
    })
}

function flights_search_co_ordinator_function(){

}

function render_airports_to_left_settings(){
    
}

// https://content.airhex.com/content/logos/airlines_${data[w].validatingAirlineCodes[0]}_50_50_t.png