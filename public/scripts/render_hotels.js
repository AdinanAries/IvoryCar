if(localStorage.getItem("hotels_last_search_city")){
    //do nothing
}else{
    localStorage.setItem("hotels_last_search_city", "");
}

var book_room_final_post_data = {
    data: {
      offerId: "NRPQNQBOJM",
      guests: [
        {
          name: {
            title: "MR",
            firstName: "BOB",
            lastName: "SMITH"
          },
          contact: {
            phone: "+33679278416",
            email: "bob.smith@email.com"
          }
        },
        {
            name: {
              title: "MR",
              firstName: "BOB",
              lastName: "SMITH"
            },
            contact: {
              phone: "+33679278416",
              email: "bob.smith@email.com"
            }
          },
          {
            name: {
              title: "MR",
              firstName: "BOB",
              lastName: "SMITH"
            },
            contact: {
              phone: "+33679278416",
              email: "bob.smith@email.com"
            }
          }
      ],
      payments: [
        {
          method: "creditCard",
          card: {
            vendorCode: "VI",
            cardNumber: "4111111111111111",
            expiryDate: "2023-01"
          }
        }
      ]
    }
  }

function render_hotels(){

    if(JSON.parse(localStorage.getItem("hotels_post_data")).city !== ""){
        localStorage.setItem("hotels_last_search_city", JSON.parse(localStorage.getItem("hotels_post_data")).city);
    }

    if(JSON.parse(localStorage.getItem("hotels_post_data")).city === ""){
        if(localStorage.getItem("hotels_last_search_city") !== ""){
            let hotels_item = JSON.parse(localStorage.getItem("hotels_post_data"));
            hotels_item.city = localStorage.getItem("hotels_last_search_city");
            localStorage.setItem("hotels_post_data", JSON.stringify(hotels_item));
        }
    }

    $.ajax({
        beforeSend: xhrObj =>{
            xhrObj.setRequestHeader("Accept", "application/json");
            xhrObj.setRequestHeader("Content-Type", "application/json");
        },
        type: "POST",
        url: "./get_hotels"+localStorage.getItem("hotels_trivials"),
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
            let hotel_display_pic = "./images/HotelPic2.jpg";
            let hotel_description = `
                <p style="color:rgb(0, 127, 177); margin-top: 15px; margin-bottom: 50px; font-size: 13px;">
                    <i class="fa fa-exclamation-triangle" style="margin-right: 5px; color: orangered;"></i>No description information found for this property.    
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

                hotel_search_data.city = "";
                window.localStorage.setItem("hotels_post_data", JSON.stringify(hotel_search_data));
                return null;
            }

            document.getElementById("hotels_tickets_section_list_container").innerHTML = "";

            if(data.data){

                for(let p = 0; p < data.data.length; p++){

                    hotel_name = data.data[p].hotel.name;
                    hotel_location = data.data[p].hotel.address.cityName + ", " + data.data[p].hotel.address.countryCode

                    if(data.data[p].hotel.contact){

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
                            <p style="margin-bottom: 10px; color:rgb(117, 117, 117); font-size: 12px;">
                                <i style="color:rgb(212, 78, 0); margin-right: 5px;" aria-hidden="true" class="fa fa-envelope"></i>${data.data[p].hotel.contact.email}
                            </p>
                            `;
                        }

                    }
                    /*if(data.data[p].hotel.media){
                        hotel_display_pic = data.data[p].hotel.media[0].uri;
                    }*/

                    if(data.data[p].hotel.rating){

                        if(data.data[p].hotel.rating === "5"){
                            hotel_rating = `
                            &#9733; &#9733; &#9733; &#9733; &#9733;
                            <span style='margin-left: 10px; color: orange;font-size: 11px; letter-spacing: 1px; font-weight: bolder; text-shadow: none;'>
                            - Excellent<span>`;
                        }else if(data.data[p].hotel.rating === "4"){
                            hotel_rating = `
                            &#9733; &#9733; &#9733; &#9733; &#9734;
                            <span style='margin-left: 10px; color: orange;font-size: 11px; letter-spacing: 1px; font-weight: bolder; text-shadow: none;'>
                            - Very Good<span>`;
                        }else if(data.data[p].hotel.rating === "3"){
                            hotel_rating = `
                            &#9733; &#9733; &#9733; &#9734; &#9734;
                            <span style='margin-left: 10px; color: orange;font-size: 11px; letter-spacing: 1px; font-weight: bolder; text-shadow: none;'>
                            - Average<span>`;
                        }else if(data.data[p].hotel.rating === "2"){
                            hotel_rating = `
                            &#9733; &#9733; &#9734; &#9734; &#9734;
                            <span style='margin-left: 10px; color: orange;font-size: 11px; letter-spacing: 1px; font-weight: bolder; text-shadow: none;'>
                            - Not Good<span>`;
                        }else {
                            hotel_rating = `&#9733; &#9734; &#9734; &#9734; &#9734;
                            <span style='margin-left: 10px; color: orange;font-size: 11px; letter-spacing: 1px; font-weight: bolder; text-shadow: none;'>
                            - Very Bad<span>`;
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
                                            <p style="color: white; font-weight: bolder; font-size: 13px; letter-spacing: 1px;">${hotel_name}</p>
                                            <p style="color: white; font-size: 11px; font-size: 12px; letter-spacing: 1px; margin-top: 5px;">
                                            ${hotel_location}
                                            </p>
                                            <p style="color:rgb(0, 188, 235); font-size: 17px;">${hotel_rating}</p>
                                        </div>
                                        <div onclick="show_full_hotel_list_pic(${p});" class="hotels_card_pic_show_full_pic">
                                            <i id="hotels_card_pic_show_full_pic_icon${p}" class="fa fa-chevron-right" aria-hidden="true"></i>
                                        </div>
                                        <!--div class="hotels_card_pic_items_points">
                                            <div class="hotels_card_pic_each_item_point selected"><p>1</p></div>
                                            <div class="hotels_card_pic_each_item_point"><p>2</p></div>
                                            <div class="hotels_card_pic_each_item_point"><p>3</p></div>
                                        </div-->
                                    </div>
                                    <div id="hotels_card_booking_desc${p}" style="margin-right: 0 !important; justify-content: flex-start; transition: all 0.5s ease-out;">
                                    <div style="margin-right: 0 !important;">
                                        <h1 style="font-size: 13px; color:rgba(30, 63, 65, 0.9); letter-spacing: 1px; margin-bottom: 5px; padding: 10px; background-color:rgb(27, 18, 123); color: white; 
                                            margin-bottom: 0; border-top-left-radius: 10px; border-top-right-radius: 10px;">
                                            ${hotel_name}</h1>
                                        <p style="font-size: 11px; color: rgb(196, 95, 0); font weight: bolder; padding: 10px; padding-left: 5px; border-left: 5px solid rgb(27, 18, 123);
                                        font-weight: bolder; letter-spacing: 1px;">${hotel_location}</p>
                                        
                                        <p style="margin-top: 0;">
                                            <span style="font-size: 14px; padding: 5px 10px; color: white; border-bottom-right-radius: 10px; border-bottom-left-radius: 10px; background-color:rgb(27, 18, 123); text-shadow: 0px 1.6px 3.6px rgba(0, 0, 0, 0.3),
                                            0px 0px 2.9px rgba(0, 0, 0, 0.23);">
                                            ${hotel_rating}
                                            </span>
                                        </p>
                                    </div>
                                    <div style="flex-direction: row !important; width: 100%; justify-content: space-between; padding-top: 20px; margin-right: 0 !important;">
                                        <div>
                                        <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px;">
                                            Quantity:</p>
                                        <p style="font-size: 13px;">
                                            ${booking_number_of_rooms}</p>
                                        </div>
                                        <div style="margin-right: 0 !important;">
                                        <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px;">Checkin</p>
                                        <p style="font-size: 13px;">${checkin_date}</p>
                                        </div>
                                        <div>
                                        <p style="font-weight: bolder; font-size: 14px; margin-bottom: 5px;">Checkout</p>
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
                                        <ul style="list-style-type: none; padding: 10px; margin-bottom: 10px; background-color: #140028; position: relative; z-index: 1;">
                                            ${hotel_amenities}
                                        </ul>
                                    </div>
                                </div>
                                <div onclick="get_hotel_rates('${url_rates}', false)" style="font-size: 14px;" class="view_deal_button">View Rates</div>
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

            hotel_search_data.city = "";
            window.localStorage.setItem("hotels_post_data", JSON.stringify(hotel_search_data));
        },
        error: err =>{
            console.log(err);
            hotel_search_data.city = "";
            window.localStorage.setItem("hotels_post_data", JSON.stringify(hotel_search_data));
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

function get_hotel_rates(url, is_going_back_from_final_price){

    document.getElementById("view_rooms_and_rates_main_title").style.display = "block";

    //this shows the default div for displaying rates
    show_hotels_booking_form_hotel_rates_fieldset();

    document.getElementById("order_room_form_hotel_infor_container").innerHTML = `
                <div style="padding: 40px;">
                <div style="width: 100%; text-align: center;" class="loader2 loader--style2" title="1">
                <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                    <animateTransform attributeType="xml"
                    attributeName="transform"
                    type="rotate"
                    from="0 25 25"
                    to="360 25 25"
                    dur="0.6s"
                    repeatCount="indefinite"/>
                    </path>
                </svg>
                <p style="text-align: center; font-size: 14px; color:rgb(0, 60, 83);">
                    <i style="color: orangered; margin-right: 5px;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    getting hotel information
                </p>
                </div>
            </div>
    `;

    document.getElementById("order_room_form_hotel_rates_list_container").innerHTML = `
            <div style="padding: 40px;">
            <div style="width: 100%; text-align: center;" class="loader2 loader--style2" title="1">
            <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                <animateTransform attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"/>
                </path>
            </svg>
            <p style="text-align: center; font-size: 14px; color:rgb(0, 60, 83);">
                <i style="color: orangered; margin-right: 5px;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                getting rooms and rates
            </p>
            </div>
        </div>
    `;

    if(!is_going_back_from_final_price){
        toggle_show_hotel_booking_form();
    }
    
    //alert(url);
    let all_params = url.split("?")[1];
    //console.log(all_params);
    //let temp_params = all_params.replaceAll("&", "^^and").replaceAll("=", "^^equal").replaceAll("'", "^^quo").replaceAll('"', "^^quo2");
    console.log(all_params);

    $.ajax({
        beforeSend: xhrObj => {
            xhrObj.setRequestHeader("Accept", "application/json");
            xhrObj.setRequestHeader("Content-Type", "application/json");
        },
        type: "POST",
        url: "./get_hotel_rates?all_params",
        data: JSON.stringify({all_params: all_params}),
        success: (data)=>{
            console.log(data);

            let RR_hotel_name = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_hotel_phone = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_hotel_email = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_hotel_fax = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_hotel_rating = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_hotel_address = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_hotel_amenities = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;

            if(data.data.hotel.rating){
                if(data.data.hotel.rating === "5"){
                    RR_hotel_rating = "&#9733; &#9733; &#9733; &#9733; &#9733;";
                }else if(data.data.hotel.rating === "4"){
                    RR_hotel_rating = "&#9733; &#9733; &#9733; &#9733; &#9734;";
                }else if(data.data.hotel.rating === "3"){
                    RR_hotel_rating = "&#9733; &#9733; &#9733; &#9734; &#9734;";
                }else if(data.data.hotel.rating === "2"){
                    RR_hotel_rating = "&#9733; &#9733; &#9734; &#9734; &#9734;";
                }else {
                    RR_hotel_rating = "&#9733; &#9734; &#9734; &#9734; &#9734;";
                }
            }
            if(data.data.hotel.name){
                RR_hotel_name = data.data.hotel.name;
            }
            if(data.data.hotel.address){

                let country = return_country_from_code(data.data.hotel.address.countryCode)[0].country;

                RR_hotel_address = data.data.hotel.address.cityName + ", " + country.toUpperCase();
                if(data.data.hotel.address.lines[0]){
                    RR_hotel_address = data.data.hotel.address.lines[0] + ", " + RR_hotel_address;
                }
            }

            if(data.data.hotel.contact){
                if(data.data.hotel.contact.phone){
                    RR_hotel_phone = data.data.hotel.contact.phone;
                }
                if(data.data.hotel.contact.email){
                    RR_hotel_email = data.data.hotel.contact.email;
                }
                if(data.data.hotel.contact.fax){
                    RR_hotel_fax = data.data.hotel.contact.fax;
                }
            }

            if(data.data.hotel.amenities){
                RR_hotel_amenities = data.data.hotel.amenities.toString().replaceAll("_", " ").toLowerCase().replaceAll(",", ", ");
                if(RR_hotel_amenities.length > 250){
                    RR_hotel_amenities = RR_hotel_amenities.substring(0, 250) + " ...";
                }
            }
            
            let view_full_profile_hotel_info_json = {"nothing":"nothing"};
            if(data.data){
                if(data.data.hotel){
                    view_full_profile_hotel_info_json = JSON.stringify(data.data.hotel);
                    view_full_profile_hotel_info_json = view_full_profile_hotel_info_json.replaceAll('\'', '%^%^%').replaceAll('"', '#$#$#').replaceAll(',', '&*&*&*');
                }
            }

            if(data.data.hotel){
                document.getElementById("order_room_form_hotel_infor_container").innerHTML = `
                    <div style="height: 300px; width: 100%; margin: auto; position: relative;
                    background-image: url('./images/HotelPic2.jpg'); background-size: cover; background-repeat: no-repeat; ">
                        <div style="background-color: rgba(0, 0, 0, 0.575); padding: 20px;">
                            <h1 style="font-weight: bolder; letter-spacing: 1px; color: white;">
                            ${RR_hotel_name}
                            </h1>
                            <p style="color: white; font-size: 11px; letter-spacing: 0.7px;">
                                ${RR_hotel_address}
                            </p>
                            <p style="color:rgb(0, 188, 235);">${RR_hotel_rating}</p>
                        </div>
                        <div class="hotels_card_pic_items_points">
                            <div class="hotels_card_pic_each_item_point selected"><p>1</p></div>
                            <div class="hotels_card_pic_each_item_point"><p>2</p></div>
                            <div class="hotels_card_pic_each_item_point"><p>3</p></div>
                        </div>
                    </div>
                    <div>
                        <p style="font-size: 14px; color:rgb(0, 127, 177); font-weight: bolder; margin-bottom: 10px; margin-top: 20px;">Contacts:</p>
                        <p style="margin-top: 10px; color:rgb(117, 117, 117); font-size: 14px;">
                        <i style="color:rgb(212, 78, 0); margin-right: 5px;" aria-hidden="true" class="fa fa-phone"></i>
                        ${RR_hotel_phone}
                        </p>
                        <p style="margin-bottom: 10px; margin-top: 5px; color:rgb(117, 117, 117); font-size: 14px;">
                        <i style="color:rgb(212, 78, 0); margin-right: 5px;" aria-hidden="true" class="fa fa-fax"></i>
                        ${RR_hotel_fax}
                        </p>
                        <p style="margin-bottom: 10px; color:rgb(117, 117, 117); font-size: 12px;">
                        <i style="color:rgb(212, 78, 0); margin-right: 5px;" aria-hidden="true" class="fa fa-envelope"></i>
                        ${RR_hotel_email}
                        </p>
                    </div>
                    <div>
                        <p style="font-size: 14px; color:rgb(0, 127, 177); font-weight: bolder; margin-bottom: 10px; margin-top: 20px;">Amenities</p>
                        <p style="margin-top: 10px; color:rgb(117, 117, 117); font-size: 14px;">
                            ${RR_hotel_amenities}
                        </p>
                    </div>
                    <div onclick="view_hotels_full_profile_info('${view_full_profile_hotel_info_json}');" style="font-size: 14px; color: white; background-color: rgb(76, 127, 237); border-radius: 4px; cursor: pointer; padding: 10px; width: 150px; text-align: center; margin: auto; margin-top: 20px;">
                        View Full Hotel Profile
                    </div>
                `;
            }

            document.getElementById("order_room_form_hotel_rates_list_container").innerHTML = "";

            let RR_room_type = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_bed_type = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_room_desc = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_checkin_date = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_checkout_date = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_guest_num = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_rooms_num = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unknown`;
            let RR_policy_type = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_cancel_deadline = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_cancl_amount = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_booking_price = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_booking_self = "";

            for(let rr = 0; rr < data.data.offers.length; rr++){

                if(data.data.offers[rr].self){
                    RR_booking_self = data.data.offers[rr].self;
                }

                if(data.data.offers[rr].guests){
                    if(data.data.offers[rr].guests.adults){
                        RR_guest_num = data.data.offers[rr].guests.adults > 1 ?
                             `${data.data.offers[rr].guests.adults} adults` :`${data.data.offers[rr].guests.adults} adult`;
                    }
                }

                if(data.data.offers[rr].checkInDate){
                    RR_checkin_date = data.data.offers[rr].checkInDate;
                }
                if(data.data.offers[rr].checkOutDate){
                    RR_checkout_date = data.data.offers[rr].checkOutDate;
                }
                if(data.data.offers[rr].price){
                    RR_booking_price = site_currency_coverter(data.data.offers[rr].price.currency, current_currency.currency, data.data.offers[rr].price.total);
                    RR_booking_price = current_currency.sign + " " + RR_booking_price
                }
                if(data.data.offers[rr].policies){
                    if(data.data.offers[rr].policies.cancellation){
                        RR_policy_type = "Cancellation"
                        if(data.data.offers[rr].policies.cancellation.deadline){
                            RR_cancel_deadline = data.data.offers[rr].policies.cancellation.deadline.split("T")[0] + ", ";
                            RR_cancel_deadline += data.data.offers[rr].policies.cancellation.deadline.split("T")[1].substring(0,5);
                        }
                        if(data.data.offers[rr].policies.cancellation.amount){
                            RR_cancl_amount = site_currency_coverter(data.data.offers[rr].price.currency, current_currency.currency, data.data.offers[rr].policies.cancellation.amount);
                            RR_cancl_amount = current_currency.sign + " " + RR_cancl_amount;
                        }
                    }
                }
                if(data.data.offers[rr].room.typeEstimated){
                    if(data.data.offers[rr].room.typeEstimated.category){
                        RR_room_type = data.data.offers[rr].room.typeEstimated.category.toString().replaceAll("_", " ").toLowerCase();
                    }
                    if(data.data.offers[rr].room.typeEstimated.bedType){
                        RR_bed_type = data.data.offers[rr].room.typeEstimated.bedType.toString().replaceAll("_", " ").toLowerCase();
                    }
                }
                if(data.data.offers[rr].room.description){
                    RR_room_desc = data.data.offers[rr].room.description.text;
                }

                if(data.data.offers[rr].roomQuantity){
                    RR_rooms_num = data.data.offers[rr].roomQuantity > 1 ?
                        `${data.data.offers[rr].roomQuantity} rooms` : `${data.data.offers[rr].roomQuantity} room`
                }

                document.getElementById("order_room_form_hotel_rates_list_container").innerHTML += `
                    <div class="order_room_form_hotel_each_rate_content">
                    <div>
                    <p style="font-size: 14px; color:rgb(0, 127, 177); font-weight: bolder; margin-bottom: 10px;">Room Details</p>
                    <div style="display: flex; flex-direction: row !important;">
                        <div style="margin-right: 20px;">
                        <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Room Type:</p>
                        <p style="opacity: 0.8; font-size: 13px; margin-top: 5px">
                            ${RR_room_type}
                        </p>
                        </div>
                        <div>
                        <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Bed Type:</p>
                        <p style="opacity: 0.8; font-size: 13px; margin-top: 5px">${RR_bed_type}</p>
                        </div>
                    </div>
                    <div style="margin-top: 10px;">
                        <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Description:</p>
                        <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">
                        ${RR_room_desc}
                        </p>
                    </div>
                    </div>
                    <div style="margin-top: 20px;">
                    <p style="font-size: 14px; color:rgb(0, 127, 177); font-weight: bolder; margin-bottom: 10px;">Booking Details</p>
                    <div style="display: flex; flex-direction: row !important;">
                        <div style="margin-right: 20px;">
                        <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Checkin:</p>
                        <p style="opacity: 0.8; font-size: 13px; margin-top: 5px">${RR_checkin_date}</p>
                        </div>
                        <div style="margin-right: 20px;">
                        <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Checout:</p>
                        <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">${RR_checkout_date}</p>
                        </div>
                        <div style="margin-right: 20px;">
                        <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Guests:</p>
                        <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">${RR_guest_num}</p>
                        </div>
                        <div>
                        <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Rooms:</p>
                        <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">${RR_rooms_num}</p>
                        </div>
                    </div>
                    </div>
                    <div style="margin-top: 20px;">
                    <p style="font-size: 14px; color:rgb(0, 127, 177); font-weight: bolder; margin-bottom: 10px;">Hotel Policies</p>
                    <div style="display: flex; flex-direction: row !important;">
                        <div style="margin-right: 20px;">
                        <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Type:</p>
                        <p style="opacity: 0.8; font-size: 13px; margin-top: 5px">${RR_policy_type}</p>
                        </div>
                        <div style="margin-right: 20px;">
                        <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Deadline:</p>
                        <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">${RR_cancel_deadline}</p>
                        </div>
                        <div style="margin-right: 20px;">
                        <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Amount: </p>
                        <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">${RR_cancl_amount}</p>
                        </div>
                    </div>
                    </div>
                    <div style="margin-top: 20px;">
                    <p style="font-size: 14px; color:rgb(0, 127, 177); font-weight: bolder; margin-bottom: 10px;">Room Price</p>
                    <div style="display: flex; flex-direction: row !important;">
                        <div style="margin-right: 50px;">
                        <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Total:</p>
                        <p style="color: rgb(17, 95, 126); font-size: 17px; font-weight: bolder; margin-top: 10px; margin-left: 10px;">
                            ${RR_booking_price}
                        </p>
                        </div>
                        <div onclick="get_final_price('${RR_booking_self}', '${url}');" style="cursor: pointer; background-color: rgb(0, 127, 177); padding: 20px;">
                        <p style="font-size: 13px; font-weight: bolder; color: white;">Choose</p>
                        </div>
                    </div>
                    </div>
                </div>
                `;
            }

            //book_hotel_forms_scroll_helper();
            if($(document).width() > 700){
                $("#order_room_form_inputs_container").scrollTop(0);
             }else{
                $("#order_room_form_content_container").stop().animate({scrollTop:0}, 500, 'swing');
             }

        },
        err: (err)=>{
            console.log(err);
        }

    });
}

function get_final_price(url, first_url){

    document.getElementById("view_rooms_and_rates_main_title").style.display = "none";

    document.getElementById("order_room_form_final_price_container").innerHTML = 
    `
            <div style="padding: 40px;">
            <div style="width: 100%; text-align: center;" class="loader2 loader--style2" title="1">
            <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
            <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                <animateTransform attributeType="xml"
                attributeName="transform"
                type="rotate"
                from="0 25 25"
                to="360 25 25"
                dur="0.6s"
                repeatCount="indefinite"/>
                </path>
            </svg>
            <p style="text-align: center; font-size: 14px; color:rgb(0, 60, 83);">
                <i style="color: orangered; margin-right: 5px;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                getting room and price information
            </p>
            </div>
        </div>
    `;

    show_hotels_booking_form_final_price_fieldset();
    
    //console.log(all_params);
    //let temp_params = all_params.replaceAll("&", "^^and").replaceAll("=", "^^equal").replaceAll("'", "^^quo").replaceAll('"', "^^quo2");
    console.log(url);

    $.ajax({
        beforeSend: xhrObj =>{
            xhrObj.setRequestHeader("Accept", "application/json");
            xhrObj.setRequestHeader("Content-Type", "application/json");
        },
        type: "POST",
        url: "./get_room_final_price",
        data: JSON.stringify({url: url}),
        success: data => {

            console.log(data);

            document.getElementById("order_room_form_final_price_container").innerHTML = `
                <div onclick="get_hotel_rates('${first_url}', true);" style="cursor: pointer; background-color: darkslateblue; padding: 20px; margin-bottom: 20px; margin-top: 30px; font-size: 14px; color: white; font-weight: bolder;">
                    <i style="margin-right: 10px; color: skyblue;" aria-hidden="true" class="fa fa-chevron-left"></i>Back To Rates
                </div>
            `;

            let RR_room_availability = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_room_type = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_bed_type = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_room_desc = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_checkin_date = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_checkout_date = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_guest_num = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_rooms_num = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_policy_type = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_cancel_deadline = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_cancl_amount = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_booking_price = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_booking_base_price = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
            let RR_booking_self = "";
            let all_taxes = `
                    <div style="display: flex; flex-direction: row !important;">
                        <div style="margin-right: 20px;">
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Type of tax:</p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px">
                                <i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable
                            </p>
                        </div>
                        <div style="margin-right: 20px;">
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Frequency:</p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">
                                <i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable
                            </p>
                        </div>
                        <div style="margin-right: 20px;">
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Mode:</p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">
                                <i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable
                            </p>
                        </div>
                        <div>
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Amount:</p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">
                                <i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable
                            </p>
                        </div>
                    </div>
            `;
            let all_changes = `
                    <div style="display: flex; flex-direction: row !important;">
                        <div style="margin-right: 20px;">
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Start Date:</p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px">
                                <i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable
                            </p>
                        </div>
                        <div style="margin-right: 20px;">
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">End Date:</p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">
                                <i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable
                            </p>
                        </div>
                        <div style="margin-right: 20px;">
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Base Price:</p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">
                                <i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable
                            </p>
                        </div>
                    </div>
            `;

            if(data.data.available){
                RR_room_availability = 
                    `
                        <span style="font-weight: initial; margin-left: 10px; font-size: 13px; color:rgb(148, 148, 148);">
                            <i style="color:rgb(0, 177, 139); margin-right: 5px;" class="fa fa-check" aria-hidden="true"></i>
                            Available to book
                        </span>
                    `;
            }else{
                RR_room_availability = 
                    `
                        <span style="font-weight: initial; margin-left: 10px; font-size: 13px; color:rgb(148, 148, 148);">
                            <i style="color: crimson; margin-right: 5px;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                            Unavailable (can't be booked)
                        </span>
                    `;
            }

            for(let rr = 0; rr < data.data.offers.length; rr++){

                if(data.data.offers[rr].self){
                    RR_booking_self = data.data.offers[rr].self;
                }

                if(data.data.offers[rr].guests){
                    if(data.data.offers[rr].guests.adults){
                        RR_guest_num = data.data.offers[rr].guests.adults > 1 ?
                             `${data.data.offers[rr].guests.adults} adults` :`${data.data.offers[rr].guests.adults} adult`;
                    }
                }

                if(data.data.offers[rr].checkInDate){
                    RR_checkin_date = data.data.offers[rr].checkInDate;
                }
                if(data.data.offers[rr].checkOutDate){
                    RR_checkout_date = data.data.offers[rr].checkOutDate;
                }
                if(data.data.offers[rr].price){
                    RR_booking_price = site_currency_coverter(data.data.offers[rr].price.currency, current_currency.currency, data.data.offers[rr].price.total);
                    RR_booking_price = current_currency.sign + " " + RR_booking_price
                }
                if(data.data.offers[rr].policies){
                    if(data.data.offers[rr].policies.cancellation){
                        RR_policy_type = "Cancellation"
                        if(data.data.offers[rr].policies.cancellation.deadline){
                            RR_cancel_deadline = data.data.offers[rr].policies.cancellation.deadline.split("T")[0] + ", ";
                            RR_cancel_deadline += data.data.offers[rr].policies.cancellation.deadline.split("T")[1].substring(0,5);
                        }
                        if(data.data.offers[rr].policies.cancellation.amount){
                            RR_cancl_amount = site_currency_coverter(data.data.offers[rr].price.currency, current_currency.currency, data.data.offers[rr].policies.cancellation.amount);
                            RR_cancl_amount = current_currency.sign + " " + RR_cancl_amount;
                        }
                    }
                }
                if(data.data.offers[rr].room.typeEstimated){
                    if(data.data.offers[rr].room.typeEstimated.category){
                        RR_room_type = data.data.offers[rr].room.typeEstimated.category.toString().replaceAll("_", " ").toLowerCase();
                    }
                    if(data.data.offers[rr].room.typeEstimated.bedType){
                        RR_bed_type = data.data.offers[rr].room.typeEstimated.bedType.toString().replaceAll("_", " ").toLowerCase();
                    }
                }
                if(data.data.offers[rr].room.description){
                    RR_room_desc = data.data.offers[rr].room.description.text;
                }

                if(data.data.offers[rr].roomQuantity){
                    RR_rooms_num = data.data.offers[rr].roomQuantity > 1 ?
                        `${data.data.offers[rr].roomQuantity} rooms` : `${data.data.offers[rr].roomQuantity} room`
                }

                if(data.data.offers[rr].price.base){
                    RR_booking_base_price = site_currency_coverter(data.data.offers[rr].price.currency, current_currency.currency, data.data.offers[rr].price.base);
                    RR_booking_base_price = current_currency.sign + " " + RR_booking_base_price;
                }

                if(data.data.offers[rr].price.taxes){

                    all_taxes = '';

                    for(let txes = 0; txes < data.data.offers[rr].price.taxes.length; txes++){

                        let margin_top = "20px";

                        if(txes < 1){
                            margin_top = "0"
                        }

                        let tax_price = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
                        let taxCode = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
                        let pricingFrequency = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
                        let pricingMode = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;

                        if(data.data.offers[rr].price.taxes[txes].amount){
                            tax_price = site_currency_coverter(data.data.offers[rr].price.taxes[txes].currency, current_currency.currency, data.data.offers[rr].price.taxes[txes].amount);
                            tax_price = current_currency.sign + " " + tax_price;
                        }
                        if(data.data.offers[rr].price.taxes[txes].code){
                            taxCode = data.data.offers[rr].price.taxes[txes].code.toString().replaceAll("_", " ").toLowerCase();
                        }
                        if(data.data.offers[rr].price.taxes[txes].pricingFrequency){
                            pricingFrequency = data.data.offers[rr].price.taxes[txes].pricingFrequency.toString().replaceAll("_", " ").toLowerCase();
                        }
                        if(data.data.offers[rr].price.taxes[txes].pricingMode){
                            pricingMode = data.data.offers[rr].price.taxes[txes].pricingMode.toString().replaceAll("_", " ").toLowerCase()
                        }

                        all_taxes += `
                            <div style="display: flex; flex-direction: row !important; margin-top: ${margin_top};">
                                <div style="margin-right: 20px;">
                                    <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Type of tax:</p>
                                    <p style="opacity: 0.8; font-size: 13px; margin-top: 5px">
                                        ${taxCode}
                                    </p>
                                </div>
                                <div style="margin-right: 20px;">
                                    <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Frequency:</p>
                                    <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">
                                        ${pricingFrequency}
                                    </p>
                                </div>
                                <div style="margin-right: 20px;">
                                    <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Mode:</p>
                                    <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">
                                        ${pricingMode}
                                    </p>
                                </div>
                                <div>
                                    <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Amount:</p>
                                    <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">
                                        ${tax_price}
                                    </p>
                                </div>
                            </div>
                        `;
                    }
                }

                if(data.data.offers[rr].price.variations.changes){

                    all_changes = '';

                    for(let chnes = 0; chnes < data.data.offers[rr].price.variations.changes.length; chnes++){

                        let margin_top = "20px";

                        if(chnes < 1){
                            margin_top = "0"
                        }

                        let change_price = site_currency_coverter(data.data.offers[rr].price.currency, current_currency.currency, data.data.offers[rr].price.variations.changes[chnes].base);
                        change_price = current_currency.sign + " " + change_price;

                        all_changes += `
                            <div style="display: flex; flex-direction: row !important; margin-top: ${margin_top}">
                                <div style="margin-right: 20px;">
                                    <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Start Date:</p>
                                    <p style="opacity: 0.8; font-size: 13px; margin-top: 5px">
                                        ${data.data.offers[rr].price.variations.changes[chnes].startDate}
                                    </p>
                                </div>
                                <div style="margin-right: 20px;">
                                    <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">End Date:</p>
                                    <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">
                                        ${data.data.offers[rr].price.variations.changes[chnes].endDate}
                                    </p>
                                </div>
                                <div style="margin-right: 20px;">
                                    <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Base Price:</p>
                                    <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">
                                        ${change_price}
                                    </p>
                                </div>
                            </div>
                        `;
                    }
                }

                document.getElementById("order_room_form_final_price_container").innerHTML += `
                        <div>
                        <p style="font-size: 14px; color:rgb(0, 127, 177); font-weight: bolder; margin-bottom: 20px;">Room Status:
                            ${RR_room_availability}
                        </p>

                        <div>
                        <p style="font-size: 14px; color:rgb(0, 127, 177); font-weight: bolder; margin-bottom: 10px;">Room Details</p>
                        <div style="display: flex; flex-direction: row !important;">
                            <div style="margin-right: 20px;">
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Room Type:</p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px">
                                ${RR_room_type}
                            </p>
                            </div>
                            <div>
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Bed Type:</p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px">${RR_bed_type}</p>
                            </div>
                        </div>
                        <div style="margin-top: 10px;">
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Description:</p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">
                            ${RR_room_desc}
                            </p>
                        </div>
                        </div>

                        <div style="margin-top: 20px;">
                        <p style="font-size: 14px; color:rgb(0, 127, 177); font-weight: bolder; margin-bottom: 10px;">Booking Details</p>
                        <div style="display: flex; flex-direction: row !important;">
                            <div style="margin-right: 20px;">
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Checkin:</p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px">${RR_checkin_date}</p>
                            </div>
                            <div style="margin-right: 20px;">
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Checout:</p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">${RR_checkout_date}</p>
                            </div>
                            <div style="margin-right: 20px;">
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Guests:</p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">${RR_guest_num}</p>
                            </div>
                            <div>
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Rooms</p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">${RR_rooms_num}</p>
                            </div>
                        </div>
                        </div>

                        <div style="margin-top: 20px;">
                        <p style="font-size: 14px; color:rgb(0, 127, 177); font-weight: bolder; margin-bottom: 10px;">Hotel Policies</p>
                        <div style="display: flex; flex-direction: row !important;">
                            <div style="margin-right: 20px;">
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Type:</p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px">${RR_policy_type}</p>
                            </div>
                            <div style="margin-right: 20px;">
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Deadline:</p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">${RR_cancel_deadline}</p>
                            </div>
                            <div style="margin-right: 20px;">
                            <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Amount: </p>
                            <p style="opacity: 0.8; font-size: 13px; margin-top: 5px;">${RR_cancl_amount}</p>
                            </div>
                        </div>
                        </div>

                        <div style="margin-top: 20px;">
                            <p style="font-size: 14px; color:rgb(0, 127, 177); font-weight: bolder; margin-bottom: 10px;">Booking Changes</p>
                            ${all_changes}
                        </div>

                        <div style="margin-top: 20px; padding: 10px; background-color: #d1d1d1; border-top: 1px solid #d3d2d2;">
                            <p style="font-size: 12px; margin-bottom: 20px; font-weight: bolder; color:rgb(0, 60, 83);">
                                Room Price And Taxes</p>

                            <p style="font-size: 14px; color:rgb(0, 127, 177); font-weight: bolder; margin-bottom: 10px;">Base Price</p>
                            <span style="opacity: 0.8; font-size: 14px;">${RR_booking_base_price}</span>

                            <p style="font-size: 14px; color:rgb(0, 127, 177); font-weight: bolder; margin-bottom: 10px; margin-top: 20px;">Taxes</p>
                            ${all_taxes}

                            <div style="display: flex; flex-direction: row !important; margin-top: 20px;">
                                <div style="margin-right: 50px;">
                                <p style="opacity: 0.8; font-size: 13px; font-weight: bolder;">Total:</p>
                                <p style="color: rgb(17, 95, 126); font-size: 17px; font-weight: bolder; margin-top: 10px; margin-left: 10px;">
                                    ${RR_booking_price}
                                </p>
                                </div>
                                <div onclick="room_booking_get_user_information('${url}', '${first_url}');" style="cursor: pointer; background-color: rgb(0, 127, 177); padding: 20px;">
                                <p style="font-size: 13px; font-weight: bolder; color: white;">Book Room</p>
                                </div>
                            </div>
                        </div>
                        </div>

                    </div>
                `;

            }

            book_hotel_forms_scroll_helper();

        },
        error: err => {
            console.log(err);
        }
    });
}

function room_booking_get_user_information(url, first_url){

    document.getElementById("view_rooms_and_rates_main_title").style.display = "none";

    let user_info_forms = "";
    let form_input_counter = 40;

    for(let inputnum = 0; inputnum < book_room_final_post_data.data.guests.length; inputnum++){

        user_info_forms += `
                <div style="border-radius: 4px; background-color: rgb(221, 221, 221); padding: 10px; margin-bottom: 10px;">

                <p style="color:rgb(0, 127, 177); font-weight: bolder; font-size: 14px;">Guest ${inputnum+1}</p>
                <div style="padding: 20px 0;">

                <div style="max-width: 100px !important; margin-bottom: 20px;" id="login_fld_container_${form_input_counter}" class="login_fld_container">
                    <p id="login_fld_title_${form_input_counter}" class="login_fld_title">
                    Title</p>
                    <select id="login_fld_${form_input_counter}" class="login_fld">
                    <option value="MALE">Mr</option>
                    <option value="FEMALE">Mrs</option>
                    </select>
                </div>
                <div style="display: flex; flex-direction: row !important; justify-content: space-between; max-width: 395px !important;">
                    <div id="login_fld_container_${(form_input_counter + 1)}" style="width: calc(100% - 10px); margin-right: 10px;" class="login_fld_container">
                    <p id="login_fld_title_${(form_input_counter + 1)}" class="login_fld_title">
                    First Name</p>
                    <input onblur="de_activate_login_fld(${(form_input_counter + 1)});" onclick="activate_login_fld(${(form_input_counter + 1)});" id="login_fld_${(form_input_counter + 1)}" class="login_fld" type="text" />
                    </div>

                    <div style="width: calc(100% - 10px);" id="login_fld_container_${(form_input_counter + 2)}" class="login_fld_container">
                    <p id="login_fld_title_${(form_input_counter + 2)}" class="login_fld_title">
                    Last Name</p>
                    <input onblur="de_activate_login_fld(${(form_input_counter + 2)});" onclick="activate_login_fld(${(form_input_counter + 2)});" id="login_fld_${(form_input_counter + 2)}" class="login_fld" type="text" />
                    </div>
                </div>
                
                <div style="margin-top: 20px; justify-content: space-between; max-width: 395px !important;">
                    <div id="login_fld_container_${(form_input_counter + 3)}" class="login_fld_container">
                    <p id="login_fld_title_${(form_input_counter + 3)}" class="login_fld_title">
                    Email</p>
                    <input onblur="de_activate_login_fld(${(form_input_counter + 3)});" onclick="activate_login_fld(${(form_input_counter + 3)});" id="login_fld_${(form_input_counter + 3)}" class="login_fld" type="email" />
                    </div>
                </div>

                <div style="margin-top: 20px; display: flex; flex-direction: row !important; justify-content: space-between; max-width: 395px !important;">
                    
                    <div style="width: 170px !important;" id="login_fld_container_${(form_input_counter + 4)}" class="login_fld_container">
                    <p id="login_fld_title_${(form_input_counter + 4)}" class="login_fld_title">
                    Country Code</p>
                    <select id="login_fld_${(form_input_counter + 4)}" class="login_fld">
                        <option>+1</option>
                        <option>+233</option>
                    </select>
                    </div>
                    <div id="login_fld_container_${(form_input_counter + 5)}" style="width: 100%;" class="login_fld_container">
                    <p id="login_fld_title_${(form_input_counter + 5)}" class="login_fld_title">
                        Mobile Number</p>
                    <input onblur="de_activate_login_fld(${(form_input_counter + 5)});" onclick="activate_login_fld(${(form_input_counter + 5)});" id="login_fld_${(form_input_counter + 5)}" class="login_fld" type="text" />
                    </div>
                </div>

                </div>
                
            </div>
        `;

        form_input_counter += 6;

    }

    show_hotels_booking_user_info_forms();

    document.getElementById("order_room_form_step_three_container").innerHTML = `
            <div>
                <p style="font-size: 12px; letter-spacing: 1px; font-weight: bolder; margin-bottom: 20px; color:rgb(112, 41, 0);">Guests Information</p>
                
                <div id="finish_hotel_booking_guests_list">

                    ${user_info_forms}

                </div>

            </div>

            <div style="margin-top: 30px;">
                <p style="font-size: 12px; letter-spacing: 1px; font-weight: bolder; margin-bottom: 20px; color:rgb(112, 41, 0);">Payments</p>
                <div style="background-color: rgb(220, 238, 245); padding: 20px; border-radius: 4px;">
                <div style="max-width: 250px !important; margin-bottom: 20px;" id="login_fld_container_30" class="login_fld_container">
                    <p id="login_fld_title_300" class="login_fld_title">
                    Method</p>
                    <select id="login_fld_300" class="login_fld">
                    <option value="MALE">Credit Card</option>
                    <option value="FEMALE">Debit Card</option>
                    </select>
                </div>
                <div style="display: flex; flex-direction: row !important; justify-content: space-between; max-width: 395px !important;">
                    <div id="login_fld_container_301" style="width: calc(100% - 10px); margin-right: 10px;" class="login_fld_container">
                    <p id="login_fld_title_301" class="login_fld_title">
                    Vendor Code</p>
                    <input onblur="de_activate_login_fld(301);" onclick="activate_login_fld(301);" id="login_fld_301" class="login_fld" type="text" />
                    </div>

                    <div style="width: calc(100% - 10px);" id="login_fld_container_302" class="login_fld_container">
                    <p id="login_fld_title_302" class="login_fld_title">
                    Expiration Date</p>
                    <input onblur="de_activate_login_fld(302);" onclick="activate_login_fld(302);" id="login_fld_302" class="login_fld" type="text" />
                    </div>
                </div>
                <div style="margin-top: 20px; justify-content: space-between; max-width: 395px !important;">
                    <div id="login_fld_container_303" class="login_fld_container">
                    <p id="login_fld_title_303" class="login_fld_title">
                    Card Number</p>
                    <input onblur="de_activate_login_fld(303);" onclick="activate_login_fld(303);" id="login_fld_303" class="login_fld" type="number" />
                    </div>
                </div>

                </div>
            </div>

            <div style="margin-top: 20px; display: flex; flex-direction: row !important; justify-content: space-between;">
                <div onclick="get_final_price('${url}', '${first_url}');" style="cursor: pointer; padding: 20px; background-color: #571a02; color: white; font-size: 14px;">
                    <i style="margin-right: 10px" class="fa fa-chevron-left" aria-hidden="true"></i>Back
                </div>
                <div onclick="submit_hotel_room_booking('offer_id');" style="cursor: pointer; padding: 20px; background-color: #023057; color: white; font-size: 14px;">
                    Submit Booking<i style="margin-left: 10px" class="fa fa-ticket" aria-hidden="true"></i>
                </div>
            </div>
    `;

    book_hotel_forms_scroll_helper();
}

function submit_hotel_room_booking(offer_id){
    //show_hotels_review_booking_detials();
    book_room_final_post_data.data.offerId = offer_id;

    $.ajax({
        beforeSend: xhrObj =>{
            xhrObj.setRequestHeader('Accept', 'application/json');
            xhrObj.setRequestHeader('Content-Type', 'application/json');
        },
        type: "POST",
        url: "./finish_room_booking",
        data: JSON.stringify(book_room_final_post_data),
        success: data => {
            console.log(data);
            show_hotels_review_booking_detials();
            book_hotel_forms_scroll_helper();
        },
        error: err => {
            console.log(err)
        }
    });

}

function book_hotel_forms_scroll_helper(){
    
 if($(document).width() > 700){
    $("#order_room_form_inputs_container").scrollTop(0);
 }else{
    $("#order_room_form_content_container").stop().animate({scrollTop:450}, 500, 'swing');
 }
}
//all code below needs replicated to homepage
function view_hotels_full_profile_info(hotel_info){

    toggle_show_hide_book_hotel_view_full_profile_info();
    show_loading_card_on_book_hotel_view_full_profile_infor_row_set_item();

    let hotel_info_obj = hotel_info.replaceAll('%^%^%', '\'').replaceAll('#$#$#', '"').replaceAll('&*&*&*', ',');
    hotel_info_obj = JSON.parse(hotel_info_obj);
    console.log(hotel_info_obj);

    let RR_hotel_name = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
    let RR_hotel_phone = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
    let RR_hotel_email = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
    let RR_hotel_fax = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
    let RR_hotel_rating = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
    let RR_hotel_address = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
    let RR_hotel_amenities = `<i aria-hidden="true" class="fa fa-exclamation-triangle" style="color: orangered; margin-right: 5px;"></i>unavailable`;
    let nearest_airports = `<div style="display: flex; flex-direction: row !important; justify-content: space-between;">
            <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
            <i style="color: orangered;" class="fa fa-exclamation-triangle" aria-hidden="true"></i></p>
            <p style="color: rgb(250, 187, 187); font-size: 14px;">no airports found</p>
        </div>`;
    //initially render airports with unavailable status
    show_book_hotel_view_full_profile_public_transit_infor(nearest_airports);

    if(hotel_info_obj.rating){
        if(hotel_info_obj.rating === "5"){
            RR_hotel_rating = "&#9733; &#9733; &#9733; &#9733; &#9733;";
        }else if(hotel_info_obj.rating === "4"){
            RR_hotel_rating = "&#9733; &#9733; &#9733; &#9733; &#9734;";
        }else if(hotel_info_obj.rating === "3"){
            RR_hotel_rating = "&#9733; &#9733; &#9733; &#9734; &#9734;";
        }else if(hotel_info_obj.rating === "2"){
            RR_hotel_rating = "&#9733; &#9733; &#9734; &#9734; &#9734;";
        }else {
            RR_hotel_rating = "&#9733; &#9734; &#9734; &#9734; &#9734;";
        }
    }
    if(hotel_info_obj.name){
        RR_hotel_name = hotel_info_obj.name;
        document.getElementById("book_hotel_view_full_profile_hotel_name").innerText = RR_hotel_name;
    }
    if(hotel_info_obj.address){

        let country = return_country_from_code(hotel_info_obj.address.countryCode)[0].country;

        RR_hotel_address = hotel_info_obj.address.cityName + ", " + country;
        if(hotel_info_obj.address.lines[0]){
            RR_hotel_address = hotel_info_obj.address.lines[0] + ", " + RR_hotel_address;
            document.getElementById("book_hotel_view_full_profile_hotel_location").innerText = RR_hotel_address;
        }

        nearest_airports = filter_airports_array_based_input_value(hotel_info_obj.address.cityName+country);
        
        if(nearest_airports.length > 0){
            return_nearest_airports_to_hotel_markup(nearest_airports).then(airports_markup_array =>{
            let markup = airports_markup_array.toString().replaceAll(",", " ");
            show_book_hotel_view_full_profile_public_transit_infor(markup);
            });
        }
        
    }
    
    if(hotel_info_obj.contact){
        if(hotel_info_obj.contact.phone){
            RR_hotel_phone = hotel_info_obj.contact.phone;
        }
        if(hotel_info_obj.contact.email){
            RR_hotel_email = hotel_info_obj.contact.email;
        }
        if(hotel_info_obj.contact.fax){
            RR_hotel_fax = hotel_info_obj.contact.fax;
        }
    }

    if(hotel_info_obj.amenities){
        //hotel_info_obj.amenities.toString().replaceAll("_", " ").toLowerCase().replaceAll(",", ", ");
        RR_hotel_amenities = hotel_info_obj.amenities.map(each => {
            if(each.toLowerCase().includes("internet") || each.toLowerCase().includes("wi-fi") || each.toLowerCase().includes("wifi")){
                return `<div style="display: flex; flex-direction: row !important; justify-content: space-between;">
                    <p style="color: rgb(155, 238, 220); font-size: 14px;"><i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
                    <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${each.replaceAll("_", " ")}<i  style="margin-left: 5px;" class="fa fa-wifi" aria-hidden="true"></i></p>
                </div>`
            }else if(each.toLowerCase().includes("direct dial phone") || each.toLowerCase().includes("dial phone") || each.toLowerCase().includes("phone") || each.toLowerCase().includes("calls")){
                return `<div style="display: flex; flex-direction: row !important; justify-content: space-between;">
                    <p style="color: rgb(155, 238, 220); font-size: 14px;"><i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
                    <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${each.replaceAll("_", " ")}<i  style="margin-left: 5px;" class="fa fa-phone" aria-hidden="true"></i></p>
                </div>`
            }else if(each.toLowerCase().includes("coffee") || each.toLowerCase().includes("coffee shop")){
                return `<div style="display: flex; flex-direction: row !important; justify-content: space-between;">
                    <p style="color: rgb(155, 238, 220); font-size: 14px;"><i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
                    <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${each.replaceAll("_", " ")}<i  style="margin-left: 5px;" class="fa fa-coffee" aria-hidden="true"></i></p>
                </div>`
            }else if(each.toLowerCase().includes("television")){
                return `<div style="display: flex; flex-direction: row !important; justify-content: space-between;">
                    <p style="color: rgb(155, 238, 220); font-size: 14px;"><i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
                    <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${each.replaceAll("_", " ")}<i  style="margin-left: 5px;" class="fa fa-television" aria-hidden="true"></i></p>
                </div>`
            }else if(each.toLowerCase().includes("video")){
                return `<div style="display: flex; flex-direction: row !important; justify-content: space-between;">
                    <p style="color: rgb(155, 238, 220); font-size: 14px;"><i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
                    <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${each.replaceAll("_", " ")}<i  style="margin-left: 5px;" class="fa fa-video-camera" aria-hidden="true"></i></p>
                </div>`
            }else if(each.toLowerCase().includes("business")){
                return `<div style="display: flex; flex-direction: row !important; justify-content: space-between;">
                    <p style="color: rgb(155, 238, 220); font-size: 14px;"><i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
                    <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${each.replaceAll("_", " ")}<i  style="margin-left: 5px;" class="fa fa-briefcase" aria-hidden="true"></i></p>
                </div>`
            }else{
                return `<div style="display: flex; flex-direction: row !important; justify-content: space-between;">
                <p style="color: rgb(155, 238, 220); font-size: 14px;"><i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
                <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${each.replaceAll("_", " ")}</p>
                </div>`;
            }
        });

        RR_hotel_amenities = RR_hotel_amenities.toString().toLowerCase().replaceAll(",", "")
        
    }

    //getting hotel sentiments
    let hotel_id = hotel_info_obj.hotelId
    $.ajax({
        type: "GET",
        url: "/get_hotel_sentiments/SJNYCAJA",//+hotel_id
        success: data => {
            let not_found = `
                    <i style="margin-right, 5px; color: orangered;" class="fa fa-exclamation-triangle"></i>
                    unavailable
            `;
            let ratings_reccomendation = "Perfect for a 1-week stay";
            ratings_reccomendation = ratings_reccomendation.replaceAll( "'", "#$#$#").replaceAll(",", "&*&*&*");

            let location_msg = "Located in the heart of New York, this hotel has an excellent location score of 9.5";
            location_msg = location_msg.replaceAll( "'", "#$#$#").replaceAll(",", "&*&*&*");

            let highest_rating_factor_msg = "Want a great night's sleep? This hotel was highly-rated for its very comfy beds.";
            highest_rating_factor_msg = highest_rating_factor_msg.replaceAll( "'", "#$#$#").replaceAll(",", "&*&*&*");
            
            console.log(data);
            if(data.data){
                if(data.data.length > 0){
                    show_book_hotel_view_full_profile_ratings_infor(data.data[0].overallRating, RR_hotel_rating, `${data.data[0].numberOfRatings} Ratings`, `${data.data[0].numberOfReviews} Reviews`, ratings_reccomendation, location_msg, highest_rating_factor_msg, RR_hotel_phone, RR_hotel_fax, RR_hotel_email);
                    show_book_hotel_view_full_profile_sentiments_infor(`${data.data[0].sentiments.sleepQuality}%`, `${data.data[0].sentiments.service}%`, `${data.data[0].sentiments.facilities}%`, `${data.data[0].sentiments.staff}%`, `${data.data[0].sentiments.internet}%`, `${data.data[0].sentiments.valueForMoney}%`, `${data.data[0].sentiments.catering}%`, `${data.data[0].sentiments.pointsOfInterest}%`, `${data.data[0].sentiments.roomComforts}%`);
                }else{
                    show_book_hotel_view_full_profile_ratings_infor(not_found, RR_hotel_rating, not_found, not_found, ratings_reccomendation, location_msg, highest_rating_factor_msg, RR_hotel_phone, RR_hotel_fax, RR_hotel_email);
                    show_book_hotel_view_full_profile_sentiments_infor(not_found, not_found, not_found, not_found, not_found, not_found, not_found, not_found, not_found);
                }
            }else{
                show_book_hotel_view_full_profile_ratings_infor(not_found, RR_hotel_rating, not_found, not_found, ratings_reccomendation, location_msg, highest_rating_factor_msg, RR_hotel_phone, RR_hotel_fax, RR_hotel_email);
                show_book_hotel_view_full_profile_sentiments_infor(not_found, not_found, not_found, not_found, not_found, not_found, not_found, not_found, not_found);
            }

        },
        error: err => {
            console.log(err);
        }

    });

    setTimeout(()=>{
        
        show_book_hotel_view_full_profile_amenities_infor(RR_hotel_amenities);
        show_book_hotel_view_full_profile_contacts_infor();
        show_book_hotel_view_full_profile_photos();
        show_book_hotel_view_full_profile_child_policies_infor();
        show_book_hotel_view_full_profile_whats_nearby_infor();
        show_book_hotel_view_full_profile_other_infor();
        show_view_full_hotel_profile_reviews_list();
    }, 1000);
    
}

async function return_nearest_airports_to_hotel_markup(nearest_airports){

    return nearest_airports.map(each => {
        return  `<div style="display: flex; flex-direction: row !important; justify-content: space-between;">
                <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
                <i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
                <p style="color: rgb(250, 187, 187); font-size: 14px;">${each.name}</p>
            </div>`;
    });

}

function show_book_hotel_view_full_profile_ratings_infor(overall_rating, rating, number_of_ratings, number_of_reviews, ratings_reccommendation, location_msg, highest_rating_factor_msg, telephone, fax, email){

    let the_overall_rating = (parseFloat(overall_rating)/10).toFixed(2);

    let rec_mn_dtion = ratings_reccommendation.replaceAll("#$#$#", "'").replaceAll("&*&*&*", ",");
    let loc_msg = location_msg.replaceAll("#$#$#", "'").replaceAll("&*&*&*", ",");
    let the_highest_rating_factor_msg = highest_rating_factor_msg.replaceAll("#$#$#", "'").replaceAll("&*&*&*", ",");

    document.getElementById("book_hotel_view_full_profile_ratings_infor").innerHTML = `
        <p style="color: white; font-size: 14px; text-align: center; margin-bottom: 20px; font-weight: bolder; letter-spacing: 1px;;">
        Rating/Reviews</p>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
            <p style="color: rgb(155, 238, 220); font-size: 14px;">Rating:</p>
            <p style="color: rgb(250, 187, 187);">${rating}</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
            <p style="color: rgb(155, 238, 220); font-size: 14px;">Number of ratings:</p>
            <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${number_of_ratings}</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
            <p style="color: rgb(155, 238, 220); font-size: 14px;">Number of reviews:</p>
            <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${number_of_reviews}</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
            <p style="color: rgb(155, 238, 220); font-size: 14px;">Overall Rating:</p>
            <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${the_overall_rating} out of 10</p>
        </div>

        <p style="color: white; font-size: 14px; text-align: center; margin-top: 25px; margin-bottom: 20px; font-weight: bolder; letter-spacing: 1px;">
        Contact</p>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px;">
            <i  style="margin-right: 5px;" class="fa fa-phone" aria-hidden="true"></i>Phone:</p>
        <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${telephone}</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px;">
            <i  style="margin-right: 5px;" class="fa fa-fax" aria-hidden="true"></i>Fax:</p>
        <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${fax}</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px;">
            <i  style="margin-right: 5px;" class="fa fa-envelope" aria-hidden="true"></i>Email:</p>
        <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${email}</p>
        </div>

        <div style="padding: 10px; border-radius: 4px; margin-top: 25px; border:rgb(250, 187, 187) 1px solid;">
            <p style="font-size: 14px; margin-bottom: 10px; color:rgb(152, 197, 214); font-weight: bolder; letter-spacing: 1px;">
            ${rec_mn_dtion}</p>
            <div style="display: flex; flex-direction: row !important; margin-bottom: 5px;">
            <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
                <i style="color:rgb(86, 223, 193);" class="fa fa-map-marker" aria-hidden="true"></i></p>
            <p style="color: rgb(250, 187, 187); font-size: 14px;">${loc_msg}</p>
            </div>
            <div style="display: flex; flex-direction: row !important;">
            <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
                <i style="color:rgb(86, 223, 193);" class="fa fa-bed" aria-hidden="true"></i></p>
            <p style="color: rgb(250, 187, 187); font-size: 14px;">${the_highest_rating_factor_msg}</p>
            </div>
        </div>

    `;
}

function show_book_hotel_view_full_profile_amenities_infor(amenities){
    document.getElementById("book_hotel_view_full_profile_amenities_infor").innerHTML = `
        <p style="color: white; font-size: 14px; text-align: center; margin-bottom: 20px; font-weight: bolder; letter-spacing: 1px;;">
        Amenities</p>
    `;
    document.getElementById("book_hotel_view_full_profile_amenities_infor").innerHTML += `${amenities}`;
}

function show_book_hotel_view_full_profile_sentiments_infor(sleep_qlt, service_qlt, facilities_qlt, staff_qlt, internet_qlt, value_for_money_qlt, catering_qlt, points_of_interest_qlt, room_comforts_qlt){
    document.getElementById("book_hotel_view_full_profile_sentiments_infor").innerHTML = `
        <p style="color: white; font-size: 14px; text-align: center; margin-bottom: 20px; font-weight: bolder; letter-spacing: 1px;;">
        Sentiments</p>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px;">Sleep Quality:</p>
        <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${sleep_qlt}</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px;">Service:</p>
        <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${service_qlt}</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px;">Facilities:</p>
        <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${facilities_qlt}</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px;">Staff:</p>
        <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${staff_qlt}</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px;">Internet:</p>
        <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${internet_qlt}</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px;">Value for money:</p>
        <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${value_for_money_qlt}</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px;">Catering:</p>
        <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${catering_qlt}</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px;">Points of Interest:</p>
        <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${points_of_interest_qlt}</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px;">Room Conforts:</p>
        <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">${room_comforts_qlt}</p>
        </div>
    `;
}
function show_book_hotel_view_full_profile_contacts_infor(){
    document.getElementById("book_hotel_view_full_profile_contacts_infor").innerHTML = `
        
    `;
}
function show_book_hotel_view_full_profile_photos(){
    document.getElementById("book_hotel_view_full_profile_photos").innerHTML = `
        <div class="book_hotel_view_full_profile_each_photo">
            <img src="images/hotelsBackground.jpg" alt="" />
        </div>
        <div class="book_hotel_view_full_profile_each_photo">
            <img src="images/HotelPic3.jpg" alt="" />
        </div>
        <div class="book_hotel_view_full_profile_each_photo">
            <img src="images/hotelsBackground2.jpg" alt="" />
        </div>
        <div class="book_hotel_view_full_profile_each_photo">
            <img src="images/HotelPic2.jpg" alt="" />
        </div>
        <div class="book_hotel_view_full_profile_each_photo">
            <img src="images/HotelPic.jpg" alt="" />
        </div>
        <div class="book_hotel_view_full_profile_each_photo">
            <img src="images/lHotelPic2.jpg" alt="" />
        </div>
    `;

    document.getElementById("book_hotel_view_full_profile_photos").innerHTML += `
        <div id="book_hotel_view_full_profile_photos_load_more_btn">
            <p style="font-weight: bolder; letter-spacing: 1px; font-size: 14px; text-align: center; color: white;">
            load more photos</p>
        </div>
    `;
}
function show_book_hotel_view_full_profile_child_policies_infor(){
    document.getElementById("book_hotel_view_full_profile_child_policies_infor").innerHTML = `
        <p style="color: white; font-size: 14px; text-align: center; margin-bottom: 20px; font-weight: bolder; letter-spacing: 1px;;">
        Child policies</p>
        <div style="display: flex; flex-direction: row !important;">
        <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
            <i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
        <p style="color: rgb(250, 187, 187); font-size: 14px;">Children of all ages are welcome.</p>
        </div>
        <div style="display: flex; flex-direction: row !important;">
        <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
            <i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
        <p style="color: rgb(250, 187, 187); font-size: 14px;">Children 13 and above are considered adults at this property.</p>
        </div>
        <div style="display: flex; flex-direction: row !important;">
        <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
            <i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
        <p style="color: rgb(250, 187, 187); font-size: 14px;">To see correct prices and occupancy info, add the number and ages of children in your group to your search.</p>
        </div>
        <div style="display: flex; flex-direction: row !important;">
        <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
            <i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
        <p style="color: rgb(250, 187, 187); font-size: 14px;">This property doesn't offer extra beds</p>
        </div>
    `;
}
function show_book_hotel_view_full_profile_whats_nearby_infor(){
    document.getElementById("book_hotel_view_full_profile_whats_nearby_infor").innerHTML = `
        <p style="color: white; font-size: 14px; text-align: center; margin-bottom: 20px; font-weight: bolder; letter-spacing: 1px;;">
        What's nearby</p>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
            <i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
        <p style="color: rgb(250, 187, 187); font-size: 14px;">Restaurant Row</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
            <i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
        <p style="color: rgb(250, 187, 187); font-size: 14px;">Richard Rodgers Theatre</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
            <i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
        <p style="color: rgb(250, 187, 187); font-size: 14px;">The Majestic Theatre</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
            <i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
        <p style="color: rgb(250, 187, 187); font-size: 14px;">Minskoff Theatre</p>
        </div>
    `;
}
function show_book_hotel_view_full_profile_public_transit_infor(closest_airports){
    
    document.getElementById("book_hotel_view_full_profile_public_transit_infor").innerHTML = `
        <p style="color: white; font-size: 14px; text-align: center; margin-bottom: 20px; font-weight: bolder; letter-spacing: 1px;;">
        Public transit</p>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
            <i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
        <p style="color: rgb(250, 187, 187); font-size: 14px;">Subway - 50th Street Station</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
            <i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
        <p style="color: rgb(250, 187, 187); font-size: 14px;">Subway - 42nd Street – Port Authority Bus Terminal</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
            <i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
        <p style="color: rgb(250, 187, 187); font-size: 14px;">Subway - 50th Street Seventh Avenue Line</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
        <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
            <i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
        <p style="color: rgb(250, 187, 187); font-size: 14px;">Subway - 49th Street Station</p>
        </div>
        <p style="color: white; font-size: 14px; text-align: center; margin-bottom: 20px; font-weight: bolder; letter-spacing: 1px; margin-top: 20px;">
        Airports in the city</p>
        ${closest_airports}
    `;
}
function show_book_hotel_view_full_profile_other_infor(){
    document.getElementById("book_hotel_view_full_profile_other_infor").innerHTML = `
        <p style="color: white; font-size: 14px; text-align: center; margin-bottom: 20px; font-weight: bolder; letter-spacing: 1px;;">
        Other</p>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between; margin-bottom: 5px;">
        <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px; min-width: fit-content;">
            <i style="color:rgb(86, 223, 193); margin-right: 5px;" class="fa fa-user" aria-hidden="true"></i>Age restrictions:</p>
        <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">The minimum age for check-in is 21.</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between; margin-bottom: 5px;">
        <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px; min-width: fit-content;">
            <i style="color:rgb(86, 223, 193); margin-right: 5px;" class="fa fa-paw" aria-hidden="true"></i>Pets:</p>
        <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">Pets are not allowed.</p>
        </div>
        <div style="display: flex; flex-direction: row !important; justify-content: space-between; margin-bottom: 5px;">
        <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px; min-width: fit-content;">
            <i style="color:rgb(86, 223, 193); margin-right: 5px;" class="fa fa-users" aria-hidden="true"></i>Groups:</p>
        <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">When booking more than 10 rooms, different policies and additional supplements may apply.</p>
        </div>
    `;
}
function show_view_full_hotel_profile_reviews_list(){
    document.getElementById("view_full_hotel_profile_reviews_list").innerHTML = `
        <div class="view_full_hotel_profile_reviews_list_item">
        <div style="border-radius: 100%; width: 75px; height: 75px; overflow: hidden !important; margin: auto; border: 2px solid white;">
        <img src="./images/Anonymous_person4.jpg" alt=""  style="width: 75px; min-height: 75px; height: aut;"/>
        </div>
        <p style="text-align: center; font-weight: bolder; font-size: 14px; letter-spacing: 1px; margin-top: 10px; color:rgb(255, 173, 73);">
        Person Name Here</p>
        <p style="text-align: center; color: white; font-size: 18px">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
        <p style="text-align: center; font-size: 14px; color: white; letter-spacing: 1px; max-width: 600px; margin: auto; margin-top: 20px;">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quos impedit debitis dolorum fuga fugiat est ipsum doloribus non rem repudiandae, vero fugit reiciendis facere. Possimus similique laudantium provident illum.
        </p>
    </div>
    <div class="view_full_hotel_profile_reviews_list_item">
        <div style="border-radius: 100%; width: 75px; height: 75px; overflow: hidden !important; margin: auto; border: 2px solid white;">
        <img src="./images/Anonymous_person4.jpg" alt=""  style="width: 75px; min-height: 75px; height: aut;"/>
        </div>
        <p style="text-align: center; font-weight: bolder; font-size: 14px; letter-spacing: 1px; margin-top: 10px; color:rgb(255, 173, 73);">
        Person Name Here</p>
        <p style="text-align: center; color: white; font-size: 18px">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
        <p style="text-align: center; font-size: 14px; color: white; letter-spacing: 1px; max-width: 600px; margin: auto; margin-top: 20px;">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iure quos impedit debitis dolorum fuga fugiat est ipsum doloribus non rem repudiandae, vero fugit reiciendis facere. Possimus similique laudantium provident illum.
        </p>
    </div>
    `;
}

function show_loading_card_on_book_hotel_view_full_profile_infor_row_set_item(){
    Array.from(document.getElementsByClassName("book_hotel_view_full_profile_infor_row_set_item"))
    .forEach(elem=>{
        elem.innerHTML = `
            <div style="padding: 40px;">
                <div style="width: 100%; text-align: center;" class="loader2 loader--style2" title="1">
                    <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                        width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                        <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                            <animateTransform attributeType="xml"
                            attributeName="transform"
                            type="rotate"
                            from="0 25 25"
                            to="360 25 25"
                            dur="0.6s"
                            repeatCount="indefinite"/>
                        </path>
                    </svg>
                    <p style="text-align: center; font-size: 14px; color: white;">
                        <i style="color: orangered; margin-right: 5px;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                        getting section information
                    </p>
                </div>
            </div>
        `;
    });
    document.getElementById("book_hotel_view_full_profile_photos").innerHTML = `
        <div style="padding: 40px;">
            <div style="width: 100%; text-align: center;" class="loader2 loader--style2" title="1">
                <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                    <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                        <animateTransform attributeType="xml"
                        attributeName="transform"
                        type="rotate"
                        from="0 25 25"
                        to="360 25 25"
                        dur="0.6s"
                        repeatCount="indefinite"/>
                    </path>
                </svg>
                <p style="text-align: center; font-size: 14px; color: white;">
                    <i style="color: orangered; margin-right: 5px;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    getting section information
                </p>
            </div>
        </div>
    `;
    document.getElementById("view_full_hotel_profile_reviews_list").innerHTML = `
        <div style="padding: 40px;">
            <div style="width: 100%; text-align: center;" class="loader2 loader--style2" title="1">
                <svg version="1.1" id="loader-1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                    width="40px" height="40px" viewBox="0 0 50 50" style="enable-background:new 0 0 50 50;" xml:space="preserve">
                    <path fill="#000" d="M25.251,6.461c-10.318,0-18.683,8.365-18.683,18.683h4.068c0-8.071,6.543-14.615,14.615-14.615V6.461z">
                        <animateTransform attributeType="xml"
                        attributeName="transform"
                        type="rotate"
                        from="0 25 25"
                        to="360 25 25"
                        dur="0.6s"
                        repeatCount="indefinite"/>
                    </path>
                </svg>
                <p style="text-align: center; font-size: 14px; color: #00284e;">
                    <i style="color: orangered; margin-right: 5px;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    getting section information
                </p>
            </div>
        </div>
    `;
}

//show_loading_card_on_book_hotel_view_full_profile_infor_row_set_item();