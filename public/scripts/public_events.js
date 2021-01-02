var each_events_row_number = 0;
var all_public_events = [];
var each_loop_start = 0;
var each_loop_limit = 4;

function getEvents(){
    $.ajax({
        type: "GET",
        url: "./publicevents",
        success: (data)=>{
            console.log(data);
            all_public_events = data;

            if(all_public_events.length === 0){
                document.getElementById("load_more_public_events_button").innerHTML = '<p style="cursor: pointer; font-size: 16px; margin-top: 20px; text-align: center; color: rgb(228, 190, 190);"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="margin-right: 5px; color: red"></i> no events found at this time</p>';
                return null;
            }

            display_events(each_loop_start, each_loop_limit, 0);
            if($(window).width() > 1000){
                load_more_events();
            }
        }
    });
}

getEvents();

function display_events(start, limit, number){

    if(start === all_public_events.length){
        return null
    }

     each_loop_start = limit;

    for(var i = start; i < limit; i++){

        if(i >= all_public_events.length){
            break;
        }

        each_loop_limit++

        let event_full_name = "Unavailable";
        let event_name = "Unavailable";
        if(all_public_events[i].name){
            event_full_name = all_public_events[i].name
            event_name = all_public_events[i].name;
        }
        

        if(all_public_events[i].name.length > 15){
            event_name = event_name.substring(0, 25) + "...";
        }

        let mydate = new Date(all_public_events[i].dates.start.localDate.split("-")[0], (all_public_events[i].dates.start.localDate.split("-")[1] - 1), all_public_events[i].dates.start.localDate.split("-")[2],0,0,0,0);
        let stringdate = mydate.toString();
        console.log(all_public_events[i].dates.start.localDate + " - " + stringdate);

        let price_range = "Unavailable";
        if(all_public_events[i].priceRanges){
            price_range = (all_public_events[i].priceRanges[0].min + " to " + all_public_events[i].priceRanges[0].max + " " + all_public_events[i].priceRanges[0].currency);
        }

        let event_genre_name = "Unavailable";
        if(all_public_events[i].classifications){
            event_genre_name = all_public_events[i].classifications[0].genre.name
        }

        //this has been changed for actual event venue address
        let event_time_zone = "Unavailable";
        if(all_public_events[i]._embedded.venues[0]){
            let e_address = all_public_events[i]._embedded.venues[0].address.line1;
            let acity = all_public_events[i]._embedded.venues[0].city.name;
            let astate = all_public_events[i].dates.timezone.split("/")[1].replaceAll("_", " ");
            let acountry = all_public_events[i]._embedded.venues[0].country.countryCode;
            event_time_zone = e_address + ", " + acity + ", " + astate + ", " + acountry;
            //event_time_zone = all_public_events[i].dates.timezone.replaceAll("_", " ");
        }

        let event_information = undefined;
        if(all_public_events[i].info){
            event_information = all_public_events[i].info.replaceAll("'",'#$@@#@$#')
        }

        let event_url_address = "Unavailable";
        if(all_public_events[i].url){
            event_url_address = all_public_events[i].url
        }

        let event_venue = "";
        if(all_public_events[i]._embedded.venues){
            if(all_public_events[i]._embedded.venues.length > 0){
                event_venue = all_public_events[i]._embedded.venues[0].name;
            }
        }

        let event_promoters = "";
        if(all_public_events[i].promoter){
            event_promoters = all_public_events[i].promoter.name;
        }

        render_event(number, event_full_name, event_name, all_public_events[i].images[(all_public_events[i].images.length -1)].url, stringdate.substring(0, 15), 
        price_range, event_genre_name, event_time_zone, event_information, event_url_address, event_venue, event_promoters);

    }
}

function render_event(number, evnt_name_in_full, evnt_name, evnt_pic_url, evnt_start_date, priceRanges, evnt_genre, evnt_TZ, evnt_info, evnt_url, evnt_venue, evnt_promoters){

    document.getElementById("events_and_cities_list_container"+number).innerHTML += `
    <div style="background-color: #023057; overflow: visible !important;" class="each_popular_city">
        <div class="each_popular_city_more_info" style="overflow: visible !important;">
        <p
            style="color: white; font-size: 14px; padding: 10px 0; margin: 0 10px;"
        >
        ${evnt_name_in_full}
        </p>
        <div style="margin-top: 10px; padding: 10px; background-color: white;">
            <p style="margin-bottom: 3px; font-size: 12px; color: #023057;">
            <i class="fa fa-map-marker" style="margin-right: 5px; font-size: 13px; color:rgb(74, 101, 112);" aria-hidden="true"></i>
            ${evnt_TZ}
            </p>
            <p style="margin-bottom: 3px; font-size: 12px; color: #023057;">
            <i class="fa fa-calendar" style="margin-right: 5px; font-size: 13px; color:rgb(74, 101, 112);" aria-hidden="true"></i>
            ${evnt_start_date}
            </p>
            <p style="margin-bottom: 3px; font-size: 12px; color: #023057;">
            <i class="fa fa-money" style="margin-right: 5px; font-size: 13px; color:rgb(74, 101, 112);" aria-hidden="true"></i>
            ${priceRanges}
            </p>
            <p style="font-size: 12px; color: orangered; margin-top: 15px; margin-bottom: 5px;">
            Venue: ${evnt_venue}
            </p>
            <p style="margin-bottom: 3px; font-size: 12px; color: orangered;">
            Promoted by ${evnt_promoters}
            </p>
        </div>
        <div style="cursor: pointer; overflow: hidden !important; display: flex; flex-direction: row !important; margin: 0 10px; margin-top: 10px; border-radius: 5px;">
            <div style="padding: 10px; background-color:rgb(247, 140, 0); width: 60%; text-align: center; font-weight: bolder;">
                <a href="${evnt_url}" target="__blank" style="text-decoration: none; font-size: 13px; color: rgb(13, 74, 83);">
                Attend Event</a>
                </div>
            <div onclick="show_all_event_details('eventID', ${number}, '${evnt_pic_url}', '${evnt_name_in_full}', '${evnt_TZ}', '${evnt_start_date}', '${priceRanges}', '${evnt_info}', '${evnt_url}', '${evnt_venue}', '${evnt_promoters}');"  style="border-top-right-radius: 5px; border-bottom-right-radius: 5px; padding: 10px; background-color:rgb(0, 52, 73); width: 40%; text-align: center; font-weight: bolder;">
                <a style="text-decoration: none; font-size: 13px; color: white;">
                Read More</a>
            </div>
        </div>
        </div>
        <img style="border-top-right-radius: 5px; border-top-left-radius: 5px;" src="${evnt_pic_url}" alt="" />
        <div class="each_popular_city_desc">
        <p
            style="font-weight: bolder; color: #ffffff; font-size: 13px; margin: 10px 0; letter-spacing: 1px;"
        >
        <i class="fa fa-calendar-check-o" style="margin-right: 5px; font-size: 13px; color:rgb(255, 102, 0)" aria-hidden="true"></i>
        ${evnt_name}
        </p>
        <p style="color: rgb(233, 128, 0); font-size: 13px; text-align: justify; margin-bottom: 5px;">
            <i class="fa fa-circle" style="margin-right: 5px; opacity: 0.6; font-size: 9px;"></i>${evnt_genre}
        </p>
        <p style="color: rgb(233, 128, 0); font-size: 13px; text-align: justify; margin-bottom: 10px;">
            <i class="fa fa-map-marker" style="margin-right: 5px; opacity: 0.6;"></i>${evnt_TZ}
            <br/><br/>
        </p>
        <p style="color: rgb(233, 128, 0); font-size: 13px; text-align: justify; margin-bottom: 10px;">
            <span style="margin-top: 5px; margin-left: 5px; font-size: 13px; color: #b37400; font-weight: bolder;">
            - ${evnt_start_date} 
            <span class="each_popular_city_see_more_btn" style="cursor: pointer; color: white; font-size: 12px; margin-left: 25px;">See More...</span>
            </span>
        </p>
        </div>
    </div>`;
}

function load_more_events(){

    /*if(each_loop_limit >= all_public_events.length || each_loop_start >= all_public_events.length){
        document.getElementById("load_more_public_events_button").innerHTML = '<p style="cursor: pointer; font-size: 16px; margin-top: 20px; text-align: center; color: rgb(228, 190, 190);"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="margin-right: 5px; color: red"></i> no more events to show</p>';
        return null;
    }*/

    if(each_loop_start >= all_public_events.length){
        document.getElementById("load_more_public_events_button").innerHTML = '<p style="cursor: pointer; font-size: 16px; margin-top: 20px; text-align: center; color: rgb(228, 190, 190);"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="margin-right: 5px; color: red"></i> no more events to show</p>';
        return null;
    }

    each_events_row_number++;

    let div = document.createElement("div");
    div.style.display = "none";

    div.classList.add("events_and_cities_list_container");
    div.id = "events_and_cities_list_container"+each_events_row_number

    div.innerHTML = `
            <div id="main_each_popular_city_all_info${each_events_row_number}" class="each_popular_city_all_info">
                    
            <div class="each_popular_city_all_info_content">
            <div class="image_area" id="show_all_evnt_detail_image_${each_events_row_number}">
                <p id="show_all_evnt_detail_event_name_${each_events_row_number}"
                    style="font-weight: bolder; color: white; font-size: 16px; padding: 10px; background-color: #0000007e;"
                ></p>
            </div>
            <div class="info_area">
                <div class="info_area_section info_area_section_main">
                <h1 style="font-size: 14px; margin-bottom: 15px; color:#667888;">Event Detail</h1>
                <div>
                    <p>
                    <i class="fa fa-map-marker" style="margin-right: 5px; font-size: 13px; color:rgb(74, 101, 112);" aria-hidden="true"></i>
                    <span id="show_all_evnt_detail_event_time_zone_${each_events_row_number}">1212 Brian St. New York, USA</span>
                    </p>
                    <p>
                    <i class="fa fa-calendar" style="margin-right: 5px; font-size: 13px; color:rgb(74, 101, 112);" aria-hidden="true"></i>
                    <span  id="show_all_evnt_detail_event_date_${each_events_row_number}">March 23 2021</span>
                    </p>
                    <p>
                    <i class="fa fa-ticket" style="margin-right: 5px; font-size: 13px; color:rgb(74, 101, 112);" aria-hidden="true"></i>
                    <span   id="show_all_evnt_detail_event_price_range_${each_events_row_number}">$ 99.99</span>
                    </p>
                    <p style="font-size: 12px; color: orangered; margin-top: 15px; margin-bottom: 5px;">
                    This event takes place at <span style="color: orangered;" id="show_all_evnt_detail_venue_${each_events_row_number}">Yankee stadium</span>
                    </p>
                    <p style="color: orangered">
                    This event is being promoted by <span style="color: orangered;" id="show_all_evnt_detail_promoter_${each_events_row_number}">The Reds Ent<span>
                    </p>
                </div>
                </div>
                <div style="display: flex; flex-direction: column; justify-content: space-between;" class="info_area_section">
                <div>
                    <h1 style="font-size: 14px; margin-bottom: 15px; color:#667888;">Event Info</h1>
                    <p class="show_all_evnt_detail_event_info_p" id="show_all_evnt_detail_event_info_${each_events_row_number}" style="font-size: 14px; color: #023057;">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Tempora labore quo pariatur ipsam esse eveniet? Sequi 
                    praesentium repellendus voluptate accusamus laboriosam amet f
                    ugiat ipsam recusandae, perferendis eius sit deserunt alias?
                    </p>
                </div>
                <div style="cursor: pointer; overflow: hidden; display: flex; flex-direction: row !important; margin: 0 10px; margin-top: 10px; border-radius: 4px;">
                    <div style="padding: 10px; background-color:rgb(8, 77, 122); color: white; width: 60% !important; text-align: center; font-weight: bolder;">
                    <a id="show_all_evnt_detail_attend_event_btn_${each_events_row_number}" href="" target="__blank" style="text-decoration: none; color: white; font-size: 13px;">
                    Attend Event</a>
                    </div>
                    <div onclick="hide_all_event_details(${each_events_row_number});" style="padding: 10px; background-color: rgb(187, 8, 44); color: white; width: 40% !important; text-align: center; font-weight: bolder;">
                        <a style="text-decoration: none; font-size: 13px; color: white;">
                        Close</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    `;

    document.getElementById("load_more_events_container_div").appendChild(div);

    display_events(each_loop_start, each_loop_limit, each_events_row_number);

    setTimeout(()=>{
        $("#events_and_cities_list_container"+each_events_row_number).slideDown("fast");
    },200)
}















/*

var all_public_attractions = [];

function getAttractions(){
    $.ajax({
        type: "GET",
        url: "./publicattractions",
        success: (data)=>{
            console.log(data);
            all_public_attractions = data;

            load_Attractions();

            if(all_public_attractions.length === 0){
                document.getElementById("load_more_public_events_button").innerHTML = '<p style="cursor: pointer; font-size: 16px; margin-top: 20px; text-align: center; color: rgb(228, 190, 190);"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="margin-right: 5px; color: red"></i> no events found at this time</p>';
                return null;
            }


        }
    });
}

getAttractions();


function render_attractions(number, evnt_name_in_full, evnt_name, evnt_pic_url, evnt_start_date, priceRanges, evnt_genre, evnt_TZ, evnt_info, evnt_url){
alert("here")
    document.getElementById("events_and_cities_list_container"+number).innerHTML += `
    <div style="background-color: #023057; overflow: visible !important;" class="each_popular_city">
        <div class="each_popular_city_more_info" style="overflow: visible !important;">
        <p
            style="color: white; font-size: 14px; padding: 10px 0; margin: 0 10px;"
        >
        ${evnt_name_in_full}
        </p>
        <div style="margin-top: 10px; padding: 10px; background-color: white;">
            <p style="margin-bottom: 3px; font-size: 12px; color: #023057;">
            <i class="fa fa-map-marker" style="margin-right: 5px; font-size: 13px; color:rgb(74, 101, 112);" aria-hidden="true"></i>
            ${evnt_TZ}
            </p>
            <p style="margin-bottom: 3px; font-size: 12px; color: #023057;">
            <i class="fa fa-calendar" style="margin-right: 5px; font-size: 13px; color:rgb(74, 101, 112);" aria-hidden="true"></i>
            ${evnt_start_date}
            </p>
            <p style="margin-bottom: 3px; font-size: 12px; color: #023057;">
            <i class="fa fa-clock-o" style="margin-right: 5px; font-size: 13px; color:rgb(74, 101, 112);" aria-hidden="true"></i>
            1pm to 4pm GMT
            </p>
            <p style="margin-bottom: 3px; font-size: 12px; color: #023057;">
            <i class="fa fa-users" style="margin-right: 5px; font-size: 13px; color:rgb(74, 101, 112);" aria-hidden="true"></i>
            2000+ people
            </p>
            <p style="margin-bottom: 3px; font-size: 12px; color: #023057;">
            <i class="fa fa-ticket" style="margin-right: 5px; font-size: 13px; color:rgb(74, 101, 112);" aria-hidden="true"></i>
            ${priceRanges}
            </p>
        </div>
        <div style="cursor: pointer; overflow: hidden !important; display: flex; flex-direction: row !important; margin: 0 10px; margin-top: 10px; border-radius: 5px;">
            <div style="padding: 10px; background-color:rgb(247, 140, 0); width: 60%; text-align: center; font-weight: bolder;">
                <a href="${evnt_url}" target="__blank" style="text-decoration: none; font-size: 13px; color: rgb(13, 74, 83);">
                Attend Event</a>
                </div>
            <div onclick="show_all_event_details('eventID', ${number}, '${evnt_pic_url}', '${evnt_name_in_full}', '${evnt_TZ}', '${evnt_start_date}', '${priceRanges}', '${evnt_info}', '${evnt_url}');"  style="border-top-right-radius: 5px; border-bottom-right-radius: 5px; padding: 10px; background-color:rgb(0, 52, 73); width: 40%; text-align: center; font-weight: bolder;">
                <a style="text-decoration: none; font-size: 13px; color: white;">
                Read More</a>
            </div>
        </div>
        </div>
        <img style="border-top-right-radius: 5px; border-top-left-radius: 5px;" src="${evnt_pic_url}" alt="" />
        <div class="each_popular_city_desc">
        <p
            style="font-weight: bolder; color: #ffffff; font-size: 13px; margin: 10px 0; letter-spacing: 1px;"
        >
        <i class="fa fa-calendar-check-o" style="margin-right: 5px; font-size: 13px; color:rgb(255, 102, 0)" aria-hidden="true"></i>
        ${evnt_name}
        </p>
        <p style="color: rgb(233, 128, 0); font-size: 13px; text-align: justify; margin-bottom: 10px;">
            ${evnt_genre} - ${evnt_TZ}
            <br/><br />
            <span style="margin-top: 5px; margin-left: 5px; font-size: 13px; color: #b37400; font-weight: bolder;">
            - ${evnt_start_date} 
            <span class="each_popular_city_see_more_btn" style="cursor: pointer; color: white; font-size: 12px; margin-left: 25px;">See More...</span>
            </span>
        </p>
        </div>
    </div>`;
}


function display_Attractions(start, limit, number){

    if(start === all_public_attractions.length){
        return null
    }

     each_loop_start = limit;

    for(var i = start; i < limit; i++){

        if(i >= all_public_attractions.length){
            break;
        }

        each_loop_limit++

        let event_name = all_public_attractions[i].name;

        if(all_public_attractions[i].name.length > 15){
            event_name = event_name.substring(0, 25) + "...";
        }

        render_attractions(number,all_public_attractions[i].name, event_name, all_public_attractions[i].images[1].url, all_public_attractions[i].type, all_public_attractions[i].classifications[0].subGenre.name,
            all_public_attractions[i].classifications[0].genre.name, all_public_attractions[i].classifications[0].segment.name, all_public_attractions[i].info, all_public_attractions[i].url);

    }
}

function load_Attractions(){

    if(each_loop_limit >= all_public_attractions.length || each_loop_start >= all_public_attractions.length){
        document.getElementById("load_more_public_events_button").innerHTML = '<p style="cursor: pointer; font-size: 16px; margin-top: 20px; text-align: center; color: rgb(228, 190, 190);"><i class="fa fa-exclamation-triangle" aria-hidden="true" style="margin-right: 5px; color: red"></i> no more events to show</p>';
        return null;
    }

    each_events_row_number++;

    let div = document.createElement("div");
    div.style.display = "none";

    div.classList.add("events_and_cities_list_container");
    div.id = "events_and_cities_list_container"+each_events_row_number

    div.innerHTML = `
            <div id="main_each_popular_city_all_info${each_events_row_number}" class="each_popular_city_all_info">
                    
            <div class="each_popular_city_all_info_content">
            <div class="image_area" id="show_all_evnt_detail_image_${each_events_row_number}">
                <p id="show_all_evnt_detail_event_name_${each_events_row_number}"
                    style="font-weight: bolder; color: white; font-size: 16px; padding: 10px; background-color: #0000007e;"
                ></p>
            </div>
            <div class="info_area">
                <div class="info_area_section info_area_section_main">
                <h1 style="font-size: 14px; margin-bottom: 15px; color:#667888;">Event Detail</h1>
                <div>
                    <p>
                    <i class="fa fa-map-marker" style="margin-right: 5px; font-size: 13px; color:rgb(74, 101, 112);" aria-hidden="true"></i>
                    <span id="show_all_evnt_detail_event_time_zone_${each_events_row_number}">1212 Brian St. New York, USA</span>
                    </p>
                    <p>
                    <i class="fa fa-calendar" style="margin-right: 5px; font-size: 13px; color:rgb(74, 101, 112);" aria-hidden="true"></i>
                    <span  id="show_all_evnt_detail_event_date_${each_events_row_number}">March 23 2021</span>
                    </p>
                    <p>
                    <i class="fa fa-clock-o" style="margin-right: 5px; font-size: 13px; color:rgb(74, 101, 112);" aria-hidden="true"></i>
                    1pm to 4pm GMT
                    </p>
                    <p>
                    <i class="fa fa-users" style="margin-right: 5px; font-size: 13px; color:rgb(74, 101, 112);" aria-hidden="true"></i>
                    2000+ people
                    </p>
                    <p>
                    <i class="fa fa-ticket" style="margin-right: 5px; font-size: 13px; color:rgb(74, 101, 112);" aria-hidden="true"></i>
                    <span   id="show_all_evnt_detail_event_price_range_${each_events_row_number}">$ 99.99</span>
                    </p>
                </div>
                </div>
                <div style="display: flex; flex-direction: column; justify-content: space-between;" class="info_area_section">
                <div>
                    <h1 style="font-size: 14px; margin-bottom: 15px; color:#667888;">Event Info</h1>
                    <p class="show_all_evnt_detail_event_info_p" id="show_all_evnt_detail_event_info_${each_events_row_number}" style="font-size: 14px; color: #023057;">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                    Tempora labore quo pariatur ipsam esse eveniet? Sequi 
                    praesentium repellendus voluptate accusamus laboriosam amet f
                    ugiat ipsam recusandae, perferendis eius sit deserunt alias?
                    </p>
                </div>
                <div style="cursor: pointer; overflow: hidden; display: flex; flex-direction: row !important; margin: 0 10px; margin-top: 10px; border-radius: 4px;">
                    <div style="padding: 10px; background-color:rgb(8, 77, 122); color: white; width: 60% !important; text-align: center; font-weight: bolder;">
                    <a id="show_all_evnt_detail_attend_event_btn_${each_events_row_number}" href="" target="__blank" style="text-decoration: none; color: white; font-size: 13px;">
                    Attend Event</a>
                    </div>
                    <div onclick="hide_all_event_details(${each_events_row_number});" style="padding: 10px; background-color: rgb(187, 8, 44); color: white; width: 40% !important; text-align: center; font-weight: bolder;">
                        <a style="text-decoration: none; font-size: 13px; color: white;">
                        Close</a>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
    `;

    document.getElementById("load_more_events_container_div").appendChild(div);

    display_Attractions(each_loop_start, each_loop_limit, each_events_row_number);

    setTimeout(()=>{
        $("#events_and_cities_list_container"+each_events_row_number).slideDown("fast");
    },200)
}
*/
