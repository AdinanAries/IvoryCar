function getEvents(){
    $.ajax({
        type: "GET",
        url: "./publicevents",
        success: (data)=>{
            console.log(data);
            for(var i = 5; i < 9; i++){

                let event_name = data[i].name;

                if(data[i].name.length > 15){
                    event_name = event_name.substring(0, 25) + "...";
                }

                let mydate = new Date(data[i].dates.start.localDate);
                let stringdate = mydate.toString("MMMM yyyy");

                render_event(data[i].name, event_name, data[i].images[1].url, stringdate.substring(0, 15), 
                    (data[i].priceRanges[0].min + " to " + data[i].priceRanges[0].max + " " + data[i].priceRanges[0].currency),
                    data[i].classifications[0].genre.name, data[i].dates.timezone.replaceAll("_", " "), data[i].info);
            }
        }
    });
}

getEvents();

function render_event(evnt_name_in_full, evnt_name, evnt_pic_url, evnt_start_date, priceRanges, evnt_genre, evnt_TZ, evnt_info){

    document.getElementById("events_and_cities_list_container").innerHTML += `
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
            <div onclick="show_all_event_details('eventID', 0, '${evnt_pic_url}', '${evnt_name_in_full}', '${evnt_TZ}', '${evnt_start_date}', '${priceRanges}', '${evnt_info}');"  style="border-top-right-radius: 5px; border-bottom-right-radius: 5px; padding: 10px; background-color:rgb(0, 52, 73); color: white; width: 40%; text-align: center; font-size: 13px; font-weight: bolder;">
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