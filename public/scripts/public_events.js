var each_events_row_number = 0;
var all_public_events = [];
var each_loop_start = 0;
var each_loop_limit = 4;

function getEvents(){
    $.ajax({
        type: "GET",
        url: "./publicevents",
        success: (data)=>{
            all_public_events = data;
            display_events(each_loop_start, each_loop_limit, 0);
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

        let event_name = all_public_events[i].name;

        if(all_public_events[i].name.length > 15){
            event_name = event_name.substring(0, 25) + "...";
        }

        let mydate = new Date(all_public_events[i].dates.start.localDate);
        let stringdate = mydate.toString("MMMM yyyy");

        render_event(number,all_public_events[i].name, event_name, all_public_events[i].images[1].url, stringdate.substring(0, 15), 
            (all_public_events[i].priceRanges[0].min + " to " + all_public_events[i].priceRanges[0].max + " " + all_public_events[i].priceRanges[0].currency),
            all_public_events[i].classifications[0].genre.name, all_public_events[i].dates.timezone.replaceAll("_", " "), all_public_events[i].info);

    }
}

function render_event(number, evnt_name_in_full, evnt_name, evnt_pic_url, evnt_start_date, priceRanges, evnt_genre, evnt_TZ, evnt_info){

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
            <div style="padding: 10px; background-color:rgb(247, 140, 0); color: rgb(13, 74, 83); width: 60%; text-align: center; font-size: 13px; font-weight: bolder;">
            Attend Event
            </div>
            <div onclick="show_all_event_details('eventID', ${number}, '${evnt_pic_url}', '${evnt_name_in_full}', '${evnt_TZ}', '${evnt_start_date}', '${priceRanges}', '${evnt_info}');"  style="border-top-right-radius: 5px; border-bottom-right-radius: 5px; padding: 10px; background-color:rgb(0, 52, 73); color: white; width: 40%; text-align: center; font-size: 13px; font-weight: bolder;">
            Read More
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

function load_more_events(){

    if(each_loop_limit >= all_public_events.length || each_loop_start >= all_public_events.length){
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
                    <div style="padding: 10px; background-color:rgb(8, 77, 122); color: white; width: 60% !important; text-align: center; font-size: 13px; font-weight: bolder;">
                    Attend Event
                    </div>
                    <div onclick="hide_all_event_details(${each_events_row_number});" style="padding: 10px; background-color: rgb(187, 8, 44); color: white; width: 40% !important; text-align: center; font-size: 13px; font-weight: bolder;">
                    Close
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