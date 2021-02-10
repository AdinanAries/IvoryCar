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

                hotel_search_data.city = "";
                window.localStorage.setItem("hotels_post_data", JSON.stringify(hotel_search_data));
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
                        <p style="margin-bottom: 10px; color:rgb(117, 117, 117); font-size: 12px;">
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
                RR_hotel_address = data.data.hotel.address.cityName + ", " + data.data.hotel.address.countryCode;
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
            

            if(data.data.hotel){
                document.getElementById("order_room_form_hotel_infor_container").innerHTML = `
                    <div style="height: 300px; width: 100%; margin: auto;  
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
                `;
            }

            document.getElementById("order_room_form_hotel_rates_list_container").innerHTML = "";

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

