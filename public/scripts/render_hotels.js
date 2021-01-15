
function render_hotels(){
    $.ajax({
        beforeSend: xhrObj =>{
            xhrObj.setRequestHeader("Accept", "application/json");
            xhrObj.setRequestHeader("Content-Type", "application/json");
        },
        type: "POST",
        url: "./get_hotels",
        data: window.localStorage.getItem("hotels_post_data"),
        success: data =>{
            console.log(data);

            let hotel_name = "Hotel Name Here";
            let hotel_location = "bronx New York, USA";
            let hotel_rating = "&#9733; &#9733; &#9733; &#9733; &#9733;";
            let hotel_amenities = `
                <p style="margin: 5px; font-size: 13px; color: white;">
                    <i aria-hidden="true" class="fa fa-exclamation-triangle" style="margin-right: 5px; color: orangered;"></i> nothing found.
                </p>
            `;
            let first_hotel_amenities = `
                    <i aria-hidden="true" class="fa fa-exclamation-triangle" style="margin-right: 5px; color: orangered;"></i> nothing found.
                `;
            let room_category = `
            <i aria-hidden="true" class="fa fa-exclamation-triangle" style="margin-right: 5px; color: orangered;"></i> nothing found.
        `;
            let booking_number_of_rooms = "";
            let url_rates = "";
            let checkin_date = "June 25, 2021";
            let checkout_date = "July 5, 2021";
            let hotel_tel = "";
            let hotel_fax = "";
            let hotel_email = "";
            let hotel_deal_price = "0.00";
            let hotel_display_pic = "./images/lHotelPic2.jpg";
            let hotel_description = `
                <p style="opacity: 0.8; color:rgb(0, 127, 177); margin-top: 15px; margin-bottom: 50px; font-size: 13px;">
                    <i class="fa fa-exclamation-triangle" style="margin-right: 5px; color: orangered;"></i>No description information found.    
                </p>
            `;

            if(data.data.length === 0){
                document.getElementById("hotels_tickets_section_list_container").innerHTML =
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

            document.getElementById("hotels_tickets_section_list_container").innerHTML = "";

            if(data.data){

                for(let p = 0; p < data.data.length; p++){

                    hotel_name = data.data[p].hotel.name;
                    hotel_location = data.data[p].hotel.address.cityName + ", " + data.data[p].hotel.address.countryCode

                    if(data.data[p].hotel.contact.phone){
                        hotel_tel = `
                        <p style="margin-top: 10px; color:rgb(117, 117, 117); font-size: 14px;">
                            <i style="color:rgb(212, 78, 0); margin-right: 5px;" aria-hidden="true" class="fa fa-phone"></i>${data.data[p].hotel.contact.phone}
                        </p>
                        `;
                    }
                    if(data.data[p].hotel.contact.fax){
                        hotel_fax = `
                        <p style="margin-bottom: 10px; margin-top: 5px; color:rgb(117, 117, 117); font-size: 14px;">
                            <i style="color:rgb(212, 78, 0); margin-right: 5px;" aria-hidden="true" class="fa fa-fax"></i>${data.data[p].hotel.contact.fax}
                        </p>
                        `;
                    }
                    if(data.data[p].hotel.contact.email){
                        hotel_email = `
                        <p style="margin-bottom: 10px; margin-top: 5px; color:rgb(117, 117, 117); font-size: 12px;">
                            <i style="color:rgb(212, 78, 0); margin-right: 5px;" aria-hidden="true" class="fa fa-envelope"></i>${data.data[p].hotel.contact.email}
                        </p>
                        `;
                    }
                    /*if(data.data[p].hotel.media){
                        hotel_display_pic = data.data[p].hotel.media[0].uri;
                    }*/

                    if(data.data[p].hotel.rating){

                        if(data.data[p].hotel.rating === "5"){
                            hotel_rating = "&#9733; &#9733; &#9733; &#9733; &#9733;";
                        }else if(data.data[p].hotel.rating === "4"){
                            hotel_rating = "&#9733; &#9733; &#9733; &#9733; &#9734;";
                        }else if(data.data[p].hotel.rating === "3"){
                            hotel_rating = "&#9733; &#9733; &#9733; &#9734; &#9734;";
                        }else if(data.data[p].hotel.rating === "2"){
                            hotel_rating = "&#9733; &#9733; &#9734; &#9734; &#9734;";
                        }else {
                            hotel_rating = "&#9733; &#9734; &#9734; &#9734; &#9734;";
                        }
                    }

                    if(data.data[p].hotel.description){
                        let the_desc = data.data[p].hotel.description.text;
                        if(the_desc.length > 300){
                            the_desc = data.data[p].hotel.description.text.substring(0,300);
                            the_desc += `<br/><br/>
                            <span class="hotel_description_show_all_btn">
                                <span class="hotel_description_show_all_txt">
                                    ${data.data[p].hotel.description.text}
                                </span>
                                Read more...
                            </span>`;
                        }
                        hotel_description = `
                            <p style="color:rgb(0, 127, 177); margin-bottom: 20px; font-size: 13px;">
                                ${the_desc}
                            </p>
                        `;
                    }

                    if(data.data[p].hotel.amenities){
                        first_hotel_amenities = data.data[p].hotel.amenities[0].toString().toLowerCase().replaceAll("_"," ");
                        hotel_amenities = "";

                        for(let amen = 0; amen < data.data[p].hotel.amenities.length; amen++){
                            hotel_amenities += `
                                <li style="padding: 5px; font-size: 13px; color: white;">
                                    ${data.data[p].hotel.amenities[amen].toString().toLowerCase().replaceAll("_"," ")}
                                </li>
                            `;
                            if(amen > 6)
                                break
                        }

                        if(data.data[p].hotel.amenities.length > 6){
                            hotel_amenities += `
                                <li style="padding: 5px; color: white; font-size: 12px; opacity: 0.6">
                                    many more...
                                </li>
                            `;
                        }
                    }

                    if(data.data[p].offers){
                        if(data.data[p].offers[0].price){
                            hotel_deal_price = site_currency_coverter(data.data[p].offers[0].price.currency, current_currency.currency, data.data[p].offers[0].price.total);
                        }
                        if(data.data[p].offers[0].checkInDate){
                            checkin_date = data.data[p].offers[0].checkInDate;
                        }
                        if(data.data[p].offers[0].checkOutDate){
                            checkout_date = data.data[p].offers[0].checkOutDate;
                        }
                        if(data.data[p].offers[0].roomQuantity){
                            booking_number_of_rooms = parseInt(data.data[p].offers[0].roomQuantity) > 1 ? 
                            `${data.data[p].offers[0].roomQuantity} rooms` : `${data.data[p].offers[0].roomQuantity} room`;
                        }
                        if(data.data[p].offers[0].room.typeEstimated){
                            if(data.data[p].offers[0].room.typeEstimated.category){
                                room_category = data.data[p].offers[0].room.typeEstimated.category.toString().toLowerCase().replaceAll("_", " ");
                            }else if(data.data[p].offers[0].room.typeEstimated.bedType){
                                room_category = data.data[p].offers[0].room.typeEstimated.bedType.toString().toLowerCase().replaceAll("_", " ") + " Bed";
                            }
                        }
                    }
                    if(data.data[p].self){
                        url_rates = data.data[p].self;
                    }

                    is_wide_hotels_card_pic.push(false);
                    document.getElementById("hotels_tickets_section_list_container").innerHTML += `
                        <div class="each_ticket_item">
                            <div class="share_each_ticket_item_btn">
                                <p>
                                <i style="font-size: 20px; color:rgb(78, 78, 78);" class="fa fa-share-square-o" aria-hidden="true"></i>
                                </p>
                                <p class="share_each_ticket_item_btn_txt">share</p>
                            </div>
                            <div class="each_ticket_item_main">
                            <div style="min-height: 100%;" class="each_ticket_item_main_left">
                                <div  style="min-height: 100%;" class="main_ticket_info_area">
                                <div style="justify-content: flex-start !important;" class="main_ticket_info_area_top">
                                    <div id="hotels_card_pic${p}" class="hotels_card_pic" style="background-image: url(${hotel_display_pic}); background-size: cover; background-repeat: no-repeat; min-height: 150px;">
                                    <div id="hotels_card_pic_title${p}" style="opacity: 0; transition: 0.5s all; position: absolute; top: 0; left: 0; background-color:rgba(0, 0, 0, 0.6); padding: 10px; width: calc(100% - 20px);">
                                        <p style="color: white; font-weight: bolder; font-size: 12px; letter-spacing: 0.7px;">${hotel_name}</p>
                                        <p style="color: white; font-size: 11px; letter-spacing: 0.7px;">
                                        ${hotel_location}
                                        </p>
                                        <p style="color:rgb(0, 188, 235);">${hotel_rating}</p>
                                    </div>
                                    <div onclick="show_full_hotel_list_pic(${p});" class="hotels_card_pic_show_full_pic">
                                        <i id="hotels_card_pic_show_full_pic_icon${p}" class="fa fa-chevron-right" aria-hidden="true"></i>
                                    </div>
                                    </div>
                                    <div id="hotels_card_booking_desc${p}" style="margin-right: 0 !important; justify-content: flex-start; transition: all 0.5s ease-out;">
                                    <div style="margin-right: 0 !important;">
                                        <h1 style="font-size: 20px; color:rgba(30, 63, 65, 0.9); letter-spacing: 0.5px; margin-bottom: 5px;
                                        font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;">${hotel_name}</h1>
                                        <p style="color:rgba(30, 63, 65, 0.7); font-size: 13px; 
                                        font-weight: bolder; letter-spacing: 0.5px;">${hotel_location}</p>
                                        
                                        <p style="margin-top: 10px;">
                                            <span style="font-size: 14px; padding: 5px 10px; color: white; border-radius: 50px; background-color:rgb(0, 188, 235); text-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.3),
                                            0px 0px 2.9px rgba(0, 0, 0, 0.23);">
                                            ${hotel_rating}
                                            </span>
                                        </p>
                                    </div>
                                    <div style="flex-direction: row !important; width: 100%; justify-content: space-between; padding-top: 20px; margin-right: 0 !important;">
                                        <div>
                                        <p style="font-weight: bolder; opacity: 0.6; font-size: 14px; margin-bottom: 5px;">
                                            Quantity:</p>
                                        <p style="font-size: 13px;">
                                            ${booking_number_of_rooms}</p>
                                        </div>
                                        <div style="margin-right: 0 !important;">
                                        <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px; opacity: 0.6;">Checkin</p>
                                        <p style="font-size: 13px;">${checkin_date}</p>
                                        </div>
                                        <div>
                                        <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px; opacity: 0.6;">Checkout</p>
                                        <p style="font-size: 13px;">
                                            ${checkout_date}</p>
                                        </div>
                                    </div>
                                    <p style="margin-top: 20px; margin-bottom: 5px; font-weight: bolder; font-size: 14px;">Description: </p>
                                    ${hotel_description}
                                    </div>
                                </div>
                                </div>
                            </div>
                            <div style="padding: 0; width: calc(29% + 20px); background-color: white; border: none; justify-content: space-between;" class="each_ticket_item_main_right hotels_each_ticket_item_main_right">
                                <div style="padding: 10px;">

                                    <p style="opacity: 0.7; font-size: 14px; font-weight: bolder;">Contact:</p>
                                    ${hotel_tel}
                                    
                                    ${hotel_fax}
                                    
                                    ${hotel_email}
                                    
                                </div>
                                <div style="background-color: #e2e2e2; border: 1px solid #d1d1d1; padding: 10px; border-bottom-right-radius: 5px;">
                                <p class="ticket_item_price_display">${current_currency.sign} ${hotel_deal_price}</p>
                                <p style="font-size: 12px; margin-bottom: 5px; font-weight: bolder;">
                                    ${room_category}</p>
                                <div class="ticket_item_entitlements_display">
                                    ${first_hotel_amenities}
                                    <div class="ticket_item_entitlements_content_display arrow_on_bottom">
                                        <p style="opacity: 0.8; font-weight: bolder; font-size: 12px; padding: 10px;">
                                            Hotels Amenities
                                        </p>
                                        <ul style="list-style-type: none; padding: 10px; margin-bottom: 10px; background-color: #140028;">
                                            ${hotel_amenities}
                                        </ul>
                                    </div>
                                </div>
                                <div onclick="get_hotel_rates('${url_rates}')" style="font-size: 14px;" class="view_deal_button">View Rates</div>
                                </div>
                            </div>
                            </div>
                        </div>
                    `;
                }

            }else{
                document.getElementById("hotels_tickets_section_list_container").innerHTML =
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
        },
        error: err =>{
            console.log(err);
            document.getElementById("hotels_tickets_section_list_container").innerHTML =
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

    });
}

if(localStorage.getItem("main_search_type") === "hotel_search"){
    render_hotels();
}

function get_hotel_rates(url){
    toggle_show_hotel_booking_form();
    //alert(url);
    let all_params = url.split("?")[1];
    //console.log(all_params);
    //let temp_params = all_params.replaceAll("&", "^^and").replaceAll("=", "^^equal").replaceAll("'", "^^quo").replaceAll('"', "^^quo2");
    console.log(all_params);

    $.ajax({
        beforeSend: xhrObj =>{
            xhrObj.setRequestHeader("Accept", "application/json");
            xhrObj.setRequestHeader("Content-Type", "application/json");
        },
        type: "POST",
        url: "./get_hotel_rates?all_params",
        data: JSON.stringify({all_params: all_params}),
        success: (data)=>{
            console.log(data);
        },
        err: (err)=>{
            console.log(err);
        }

    });
}