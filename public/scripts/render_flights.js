console.log(fligh_search_data);

//One way trips
function render_flights(){

    $.ajax({
        type: "POST",
        url: "/searchflight",
        data: JSON.stringify(fligh_search_data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (data)=>{
            console.log(fligh_search_data);
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

            for(var w = 0; w < 5; w++){

                let flight_price = "unknown";
                if(data[w].price){
                    flight_price = site_currency_coverter(data[w].price.currency, current_currency.currency, data[w].price.total);
                }

                let departure_segments = "trip departure stops not available";
                let return_segments = "trip return stops not available";
                let total_departure_duration = "";
                let total_return_duration = "";
                let total_trip_start_and_end_time = "";
                let trip_departure_from_and_airports = "";
                let trip_departure_total_stops = 0;
                let trip_departure_stops_airports = "";

                if(data[w].itineraries){
                    
                    departure_segments = "";
                    
                    console.log(data[w].itineraries);

                    for(var k = 0; k < data[w].itineraries.length; k++){

                        total_departure_duration = data[w].itineraries[k].duration.substring(2, data[w].itineraries[k].duration.length);
                        total_departure_duration = total_departure_duration.split("H");
                        total_departure_duration = total_departure_duration[0].toLowerCase() + "h " + total_departure_duration[1].toLowerCase();
                        
                        trip_departure_total_stops = data[w].itineraries[k].segments.length - 1;
                        trip_departure_total_stops = trip_departure_total_stops > 1 ? (trip_departure_total_stops + " stops") : (trip_departure_total_stops + " stop");

                        let change_flights_section = "";

                        let isfirstSegment = true;
                        let isArrivalSegmentTime = "";
                        let isDepartueSegmentTime = "";
                        let transfer_duration = "";
                        
                        for(var j = 0; j < data[w].itineraries[k].segments.length; j++){

                            if(isfirstSegment){
                                isArrivalSegmentTime = data[w].itineraries[k].segments[j].arrival.at;
                                isfirstSegment = false;
                            }else{
                                isDepartueSegmentTime = data[w].itineraries[k].segments[j].departure.at;
                                transfer_duration = get_transfer_duration(isArrivalSegmentTime, isDepartueSegmentTime);
                                isArrivalSegmentTime = data[w].itineraries[k].segments[j].arrival.at;
                            }

                            change_flights_section = "";

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
                            travel_duration = travel_duration[0].toLowerCase() + "h " + travel_duration[1].toLowerCase();

                            if(j > 0){

                                change_flights_section = `

                                            <div style="display: flex;  flex-direction: row !important; justify-content: space-between; border-top: 1px solid rgb(0, 0, 0, 0.1); border-bottom: 1px solid rgb(0, 0, 0, 0.1); padding: 10px 0; margin: 0 20px;">
                                                <div>
                                                    <span style="opacity: 0.6; font-size: 13px; letter-spacing: 0.5px;">Change planes in ${departure_airport}</span>
                                                    <br/>
                                                    <span style="font-size: 13px; font-weight: bolder; opacity: 0.9; color: #e25a00; letter-spacing: 0.5px;">
                                                        Self-transfer - Bag re-check may be required </span>
                                                </div>
                                                <div style="min-width: 60px; margin-left: 10px;">
                                                    <p style="font-size: 13px; font-weight: bolder; text-align: right; opacity: 0.9; letter-spacing: 0.5px;">${transfer_duration}</p>
                                                </div>
                                            </div>
                                `;
                            }

                            departure_segments += `
                                <div style="display: flex; width: 100%;">

                                    ${change_flights_section}

                                    <div>
                                        <div style="min-width: 80px; padding: 20px;">
                                            <p style="font-weight: bolder; text-align: right; font-size: 14px; letter-spacing: 0.5px; opacity: 0.9;">${departure_string_date.substring(0, 10)}</p>
                                        </div>
                                    </div>

                                    <div style="width: 85%;">

                                        <div style="display: flex; justify-content: space-between; margin: 20px;">
                                            <div>
                                                <div style="margin-bottom: 10px; display: flex;  flex-direction: row !important; justify-content: space-between;">
                                                    <p style="font-size: 14px;  letter-spacing: 0.5px; font-weight: bolder; opacity: 0.8;">
                                                        <img src="" style="width: 15px; height: 15px; margin-right: 10px;" />
                                                        ${departure_time} — ${arrival_time}
                                                    </p>
                                                    <p style="font-size: 14px;  letter-spacing: 0.6px; opacity: 0.5;">
                                                        Economy
                                                    </p>
                                                </div>
                                                <p style="margin-bottom: 7px; font-size: 13px; opacity: 0.6; letter-spacing: 0.5px;">
                                                    ${departure_airport} - ${arrival_airport}
                                                </p>
                                                <p style="letter-spacing: 0.5px; opacity: 0.9; margin-bottom: 7px; font-size: 13px; font-weight: bolder; color: #003f7a;">Limited seats remaining at this price</p>
                                                <p style="margin-bottom: 7px; font-size: 13px; opacity: 0.6; letter-spacing: 0.5px;">Spirit Airlines 2679 · Narrow-body jet · Airbus A320 (sharklets)</p>
                                                <p style="font-size: 13px; font-weight: bolder; color: #e25a00; opacity: 0.9; letter-spacing: 0.5px;">Carry-on baggage fees may apply to one or more segments of this trip</p>
                                            </div>
                                            <div style="min-width: 60px; margin-left: 10px;">
                                                <p style="font-size: 13px; font-weight: bolder; text-align: right; opacity: 0.9; letter-spacing: 0.5px;">${travel_duration}</p>
                                                <p style="font-size: 13px; opacity: 0.6; margin-top: 10px; text-align: right; letter-spacing: 0.5px;">
                                                    <i class="fa fa-cutlery" aria-hidden="true"></i>
                                                </p>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                        `;
                        }
                    }

                    total_trip_start_and_end_time = total_trip_start_and_end_time.split(" ");
                    total_trip_start_and_end_time = covert_time_to_12_hour(total_trip_start_and_end_time[0]) + " - " + covert_time_to_12_hour(total_trip_start_and_end_time[(total_trip_start_and_end_time.length - 2)]);

                    trip_departure_from_and_airports = trip_departure_from_and_airports.split(" ");
                    trip_departure_stops_airports = trip_departure_from_and_airports[1];
                    if(trip_departure_from_and_airports.length > 5){
                        trip_departure_stops_airports = trip_departure_from_and_airports[1] + ", " + trip_departure_from_and_airports[(trip_departure_from_and_airports.length - 3)];
                    }
                    if(trip_departure_from_and_airports.length > 7){
                        trip_departure_stops_airports = trip_departure_from_and_airports[1] + ", .., " + trip_departure_from_and_airports[(trip_departure_from_and_airports.length - 3)];
                    }
                    trip_departure_from_and_airports = trip_departure_from_and_airports[0] + " - " + trip_departure_from_and_airports[(trip_departure_from_and_airports.length - 2)];
                    
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
                        <span style="background-color: #37a0f5;">Cheapest</span>
                        <span style="background-color: teal;">Flight + train</span>
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
                            Price/Travel Time
                        </p>
                        <p>
                            <span style="font-size: 14px; padding-right: 15px; color: white; border-radius: 50px; background-color:rgb(235, 86, 0); text-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.3),
                            0px 0px 2.9px rgba(0, 0, 0, 0.23); font-weight: bolder;">
                                &#9733; &#9733; &#9733; &#9733; &#9734;
                            </span>
                        </p>
                        
                        <div class="bubble_popup arrow_on_right_side"></div>
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

                            <div style="display: none !important; flex-direction: row !important; margin-top: 20px;" class="flight_ticket_item_details_section_content_title">
                                <p>
                                    <input id="flight_ticket_item_details_section_content_Return_check${w}" type="checkbox" />
                                    <label style="cursor: pointer;" for="flight_ticket_item_details_section_content_Return_check${w}">
                                        Return <span>BDL - JAX</span>
                                    </label>
                                </p>
                                <div>
                                    <span>
                                    19h 57m
                                    </span>
                                </div>
                            </div>
                            <div style="display: none !important; margin-bottom: 20px;" class="flight_ticket_item_details_section_content">

                                <div style="display: flex; width: 100%;">

                                    <div>
                                        <div style="min-width: 80px; padding: 20px;">
                                            <p style="font-weight: bolder; text-align: right; font-size: 14px; letter-spacing: 0.5px; opacity: 0.9;">Sun, Dec 20</p>
                                        </div>
                                    </div>

                                    <div style="width: 85%;">

                                        <div style="display: flex; justify-content: space-between; margin: 20px;">
                                            <div>
                                                <div style="margin-bottom: 10px; display: flex;  flex-direction: row !important; justify-content: space-between;">
                                                    <p style="font-size: 14px;  letter-spacing: 0.5px; font-weight: bolder; opacity: 0.8;">
                                                        <img src="" style="width: 15px; height: 15px; margin-right: 10px;" />
                                                        5:58 pm – 11:18 pm
                                                    </p>
                                                    <p style="font-size: 14px;  letter-spacing: 0.6px; opacity: 0.5;">
                                                        Economy
                                                    </p>
                                                </div>
                                                <p style="margin-bottom: 7px; font-size: 13px; opacity: 0.6; letter-spacing: 0.5px;">
                                                    Hartford (BDL) - Tampa (TPA)
                                                </p>
                                                <p style="letter-spacing: 0.5px; opacity: 0.9; margin-bottom: 7px; font-size: 13px; font-weight: bolder; color: #003f7a;">Limited seats remaining at this price</p>
                                                <p style="margin-bottom: 7px; font-size: 13px; opacity: 0.6; letter-spacing: 0.5px;">Spirit Airlines 2679 · Narrow-body jet · Airbus A320 (sharklets)</p>
                                                <p style="font-size: 13px; font-weight: bolder; color: #e25a00; opacity: 0.9; letter-spacing: 0.5px;">Carry-on baggage fees may apply to one or more segments of this trip</p>
                                            </div>
                                            <div style="min-width: 60px; margin-left: 10px;">
                                                <p style="font-size: 13px; font-weight: bolder; text-align: right; opacity: 0.9; letter-spacing: 0.5px;">2h 59m</p>
                                                <p style="font-size: 13px; opacity: 0.6; margin-top: 10px; text-align: right; letter-spacing: 0.5px;">
                                                    <i class="fa fa-cutlery" aria-hidden="true"></i>
                                                </p>
                                            </div>
                                        </div>

                                        <div style="display: flex;  flex-direction: row !important; justify-content: space-between; border-top: 1px solid rgb(0, 0, 0, 0.1); border-bottom: 1px solid rgb(0, 0, 0, 0.1); padding: 10px 0; margin: 0 20px;">
                                            <div>
                                                <span style="opacity: 0.6; font-size: 13px; letter-spacing: 0.5px;">Change planes in Tampa (TPA)</span>
                                                <br/>
                                                <span style="font-size: 13px; font-weight: bolder; opacity: 0.9; color: #e25a00; letter-spacing: 0.5px;">
                                                    Self-transfer - Bag re-check may be required </span>
                                            </div>
                                            <div style="min-width: 60px; margin-left: 10px;">
                                                <p style="font-size: 13px; font-weight: bolder; text-align: right; opacity: 0.9; letter-spacing: 0.5px;">13h 06m</p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

                                <div style="display: flex; width: 100%;">

                                    <div>
                                        <div style="min-width: 80px; padding: 20px;">
                                            <p style="font-weight: bolder; text-align: right; font-size: 14px; letter-spacing: 0.5px; opacity: 0.9;">Sun, Dec 20</p>
                                        </div>
                                    </div>

                                    <div style="width: 85%;">

                                        <div style="display: flex; justify-content: space-between; margin: 20px;">
                                            <div>
                                                <div style="margin-bottom: 10px; display: flex;  flex-direction: row !important; justify-content: space-between;">
                                                    <p style="font-size: 14px; letter-spacing: 0.5px; font-weight: bolder; opacity: 0.9;">
                                                        <img src="" style="width: 15px; height: 15px; margin-right: 10px;" />
                                                        7:40 pm — 10:39 pm
                                                    </p>
                                                    <p style="font-size: 14px; opacity: 0.6; letter-spacing: 0.5px;">
                                                        Economy
                                                    </p>
                                                </div>
                                                <p style="margin-bottom: 7px; font-size: 13px; letter-spacing: 0.5px; opacity: 0.6;">
                                                    Hartford (BDL) - Tampa (TPA)
                                                </p>
                                                <p style="letter-spacing: 0.5px; opacity: 0.9; font-size: 13px; margin-bottom: 7px; font-weight: bolder; color: #003f7a;">Limited seats remaining at this price</p>
                                                <p style="margin-bottom: 7px; font-size: 13px; opacity: 0.6; letter-spacing: 0.5px;">Spirit Airlines 2679 · Narrow-body jet · Airbus A320 (sharklets)</p>
                                                <p style="font-size: 13px; font-weight: bolder; color: #e25a00; opacity: 0.9; letter-spacing: 0.5px;">Carry-on baggage fees may apply to one or more segments of this trip</p>
                                            </div>
                                            <div style="min-width: 60px; margin-left: 10px;">
                                                <p style="font-size: 13px; letter-spacing: 0.5px; font-weight: bolder; text-align: right; opacity: 0.9;">2h 59m</p>
                                                <p style="font-size: 13px; letter-spacing: 0.5px; opacity: 0.6; margin-top: 10px; text-align: right;">
                                                    <i class="fa fa-cutlery" aria-hidden="true"></i>
                                                </p>
                                            </div>
                                        </div>

                                    </div>

                                </div>

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
                                        Booking site</p>
                                        <p style="opacity: 0.7; font-size: 14px; margin-top: 5px;">American Airline</p>
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
                                        <p style="opacity: 0.7; font-size: 14px; margin-top: 5px;">$403</p>
                                        <div style="min-width: 60px; text-align: center; margin: 10px 0; padding: 10px; font-size: 14px; font-weight: bolder; background-color: #184e80; color: white; border-radius: 4px;">
                                            view deal
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
                            <div style="flex-direction: row !important;">
                            <div><input type="checkbox" /></div>
                            <div style="padding-left: 10px;"><img src="images/american-airlines-logo-vector-1.jpg" alt=""/></div>
                            </div>
                            <div style="flex-direction: row !important; width: 100%; justify-content: space-between;">
                            <div>
                                <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px;">
                                ${total_trip_start_and_end_time}</p>
                                <p style="color:rgb(148, 148, 148); font-size: 13px;">
                                American Airlines</p>
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
                        <div style="display: none !important;" class="main_ticket_info_area_bottom">
                            <div style="flex-direction: row !important;">
                            <div><input type="checkbox" /></div>
                            <div style="padding-left: 10px;"><img src="images/american-airlines-logo-vector-1.jpg" alt=""/></div>
                            </div>
                            <div style="flex-direction: row !important; width: 100%; justify-content: space-between;">
                            <div>
                                <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px;">
                                5:58 pm – 11:18 pm</p>
                                <p style="color:rgb(148, 148, 148); font-size: 13px;">
                                American Airlines</p>
                            </div>
                            <div>
                                <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px;">1 stop</p>
                                <p style="color:rgb(148, 148, 148); font-size: 13px;">CLT</p>
                            </div>
                            <div>
                                <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px;">5h 15m</p>
                                <p style="color:rgb(148, 148, 148); font-size: 13px;">
                                JAX ‐ BDL</p>
                            </div>
                            </div>
                        </div>
                        </div>
                        <p class="tickets_main_additional_text">Operated by Psa Airlines AS American Eagle, Republic Airways AS American Eagle</p>
                    </div>
                    <div class="each_ticket_item_main_right">
                        <p class="ticket_item_price_display">${current_currency.sign} ${flight_price}</p>
                        <p style="color:rgb(104, 104, 104); font-size: 12px; margin-bottom: 5px; font-weight: bolder;">
                        American Airlines</p>
                        <div class="ticket_item_entitlements_display">
                        Main Cabin
                        <div class="ticket_item_entitlements_content_display"></div>
                        </div>
                        <div class="view_deal_button">View deal</div>
                    </div>
                    </div>
                </div>`;
            }

        }

    });

}

render_flights();


