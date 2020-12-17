console.log(fligh_search_data)

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

            document.getElementById("main_tickets_section_list_container").innerHTML +=
                `<div class="each_ticket_item">
                <div class="share_each_ticket_item_btn">
                <p>
                    <i style="font-size: 20px; color:rgb(78, 78, 78);" class="fa fa-share-square-o" aria-hidden="true"></i>
                </p>
                <p class="share_each_ticket_item_btn_txt">share</p>
                </div>
                <div class="each_ticket_item_top">
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
                    <span style="font-size: 14px; padding-right: 15px; color: white; border-radius: 50px; background-color:rgb(235, 86, 0); font-weight: bolder;">
                        <i class="fa fa-smile-o" aria-hidden="true"></i> 5
                    </span>
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
                        

                        </div>

                        <div style="flex-direction: row !important;" class="flight_ticket_item_details_section_content_title">
                            <p>
                                <input id="flight_ticket_item_details_section_content_Depature_check${w}" type="checkbox" />
                                <label style="cursor: pointer;" for="flight_ticket_item_details_section_content_Depature_check${w}">
                                    Depart <span>JAX - BDL</span>
                                </label>
                            </p>
                            <div>
                                <span>
                                16h 07m
                                </span>
                            </div>
                        </div>
                        <div class="flight_ticket_item_details_section_content">

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
                                                    7:40 pm — 10:39 pm
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

                        <div style="flex-direction: row !important;" class="flight_ticket_item_details_section_content_title">
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
                        <div style="margin-bottom: 20px;" class="flight_ticket_item_details_section_content">

                            <div style="display: flex; width: 100%;">

                                <div>
                                    <div style="min-width: 80px; padding: 20px;">
                                        <p style="font-weight: bolder; text-align: right; font-size: 14px; opacity: 0.8;">Sun, Dec 20</p>
                                    </div>
                                </div>

                                <div style="width: 85%;">

                                    <div style="display: flex; justify-content: space-between; margin: 20px;">
                                        <div>
                                            <div style="margin-bottom: 10px; display: flex;  flex-direction: row !important; justify-content: space-between;">
                                                <p style="font-size: 13px; font-weight: bolder; opacity: 0.7;">
                                                    <img src="" style="width: 15px; height: 15px; margin-right: 10px;" />
                                                    7:40 pm — 10:39 pm
                                                </p>
                                                <p style="font-size: 13px; opacity: 0.5;">
                                                    Economy
                                                </p>
                                            </div>
                                            <p style="margin-bottom: 5px; font-size: 12px; opacity: 0.5;">
                                                Hartford (BDL) - Tampa (TPA)
                                            </p>
                                            <p style="margin-bottom: 5px; font-size: 12px; opacity: 0.5;">Spirit Airlines 2679 · Narrow-body jet · Airbus A320 (sharklets)</p>
                                            <p style="font-size: 12px; font-weight: bolder; color: #e25a00;">Carry-on baggage fees may apply to one or more segments of this trip</p>
                                        </div>
                                        <div style="min-width: 60px; margin-left: 10px;">
                                            <p style="font-size: 13px; font-weight: bolder; text-align: right; opacity: 0.8;">2h 59m</p>
                                            <p style="font-size: 12px; opacity: 0.7; margin-top: 10px; text-align: right;">
                                                <i class="fa fa-cutlery" aria-hidden="true"></i>
                                            </p>
                                        </div>
                                    </div>

                                    <div style="display: flex;  flex-direction: row !important; justify-content: space-between; border-top: 1px solid rgb(0, 0, 0, 0.1); border-bottom: 1px solid rgb(0, 0, 0, 0.1); padding: 10px 0; margin: 0 20px;">
                                        <div>
                                            <span style="opacity: 0.5; font-size: 12px;">Change planes in Tampa (TPA)</span>
                                            <br/>
                                            <span style="font-size: 12px; font-weight: bolder; color: #e25a00;">
                                                Self-transfer - Bag re-check may be required </span>
                                        </div>
                                        <div style="min-width: 60px; margin-left: 10px;">
                                            <p style="font-size: 13px; font-weight: bolder; text-align: right; opacity: 0.8;">13h 06m</p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                            <div style="display: flex; width: 100%;">

                                <div>
                                    <div style="min-width: 80px; padding: 20px;">
                                        <p style="font-weight: bolder; text-align: right; font-size: 14px; opacity: 0.8;">Sun, Dec 20</p>
                                    </div>
                                </div>

                                <div style="width: 85%;">

                                    <div style="display: flex; justify-content: space-between; margin: 20px;">
                                        <div>
                                            <div style="margin-bottom: 10px; display: flex;  flex-direction: row !important; justify-content: space-between;">
                                                <p style="font-size: 13px; font-weight: bolder; opacity: 0.7;">
                                                    <img src="" style="width: 15px; height: 15px; margin-right: 10px;" />
                                                    7:40 pm — 10:39 pm
                                                </p>
                                                <p style="font-size: 13px; opacity: 0.5;">
                                                    Economy
                                                </p>
                                            </div>
                                            <p style="margin-bottom: 5px; font-size: 12px; opacity: 0.5;">
                                                Hartford (BDL) - Tampa (TPA)
                                            </p>
                                            <p style="margin-bottom: 5px; font-size: 12px; opacity: 0.5;">Spirit Airlines 2679 · Narrow-body jet · Airbus A320 (sharklets)</p>
                                            <p style="font-size: 12px; font-weight: bolder; color: #e25a00;">Carry-on baggage fees may apply to one or more segments of this trip</p>
                                        </div>
                                        <div style="min-width: 60px; margin-left: 10px;">
                                            <p style="font-size: 13px; font-weight: bolder; text-align: right; opacity: 0.8;">2h 59m</p>
                                            <p style="font-size: 12px; opacity: 0.7; margin-top: 10px; text-align: right;">
                                                <i class="fa fa-cutlery" aria-hidden="true"></i>
                                            </p>
                                        </div>
                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                    <div style="display: none;" id="flight_ticket_item_fairs_details_section_content_set${w}">
                        <p>fairs</p>
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
                            5:58 pm – 11:18 pm</p>
                            <p style="color:rgb(148, 148, 148); font-size: 13px;">
                            American Airlines</p>
                        </div>
                        <div>
                            <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px;">1 stop</p>
                            <p style="color:rgb(148, 148, 148); font-size: 13px;">PHL</p>
                        </div>
                        <div>
                            <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px;">5h 00m</p>
                            <p style="color:rgb(148, 148, 148); font-size: 13px;">
                            BDL ‐ JAX</p>
                        </div>
                        </div>
                    </div>
                    <div class="main_ticket_info_area_bottom">
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



