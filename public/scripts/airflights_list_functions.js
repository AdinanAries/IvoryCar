//this function show each flight ticket main details
function show_flight_ticket_item_main_details_set(number){

    document.getElementById("flight_ticket_item_details_each_top_option_details_btn"+number).classList.add("active");
    document.getElementById("flight_ticket_item_details_each_top_option_fairs_btn"+number).classList.remove("active");

    $("#flight_ticket_item_details_section_content_set"+number).slideDown("fast");
    $("#flight_ticket_item_fairs_details_section_content_set"+number).slideUp("fast");

}

function show_flight_ticket_item_fair_details_set(number){
    
    document.getElementById("flight_ticket_item_details_each_top_option_details_btn"+number).classList.remove("active");
    document.getElementById("flight_ticket_item_details_each_top_option_fairs_btn"+number).classList.add("active");

    $("#flight_ticket_item_details_section_content_set"+number).slideUp("fast");
    $("#flight_ticket_item_fairs_details_section_content_set"+number).slideDown("fast");

}

var site_lower_section_tabs_best_option = document.getElementById("site_lower_section_tabs_best_option");
var site_lower_section_tabs_best_option_content = document.getElementById("site_lower_section_tabs_best_option_content");
var site_lower_section_tabs_cheapest_option = document.getElementById("site_lower_section_tabs_cheapest_option");
var site_lower_section_tabs_cheapest_option_content = document.getElementById("site_lower_section_tabs_cheapest_option_content");
var site_lower_section_tabs_LeastC02_option = document.getElementById("site_lower_section_tabs_LeastC02_option");

function getBestFlights(){

    site_lower_section_tabs_cheapest_option.classList.remove("active");
    site_lower_section_tabs_LeastC02_option.classList.remove("active");
    site_lower_section_tabs_best_option.classList.add("active");

    site_lower_section_tabs_best_option_content.style.borderColor = "rgb(112, 2, 2)";
    site_lower_section_tabs_cheapest_option_content.style.borderColor = "#ad310b";

}

function getCheapFlights(){

    site_lower_section_tabs_cheapest_option.classList.add("active");
    site_lower_section_tabs_LeastC02_option.classList.remove("active");
    site_lower_section_tabs_best_option.classList.remove("active");

    site_lower_section_tabs_cheapest_option_content.style.borderColor = "rgb(112, 2, 2)";
    site_lower_section_tabs_best_option_content.style.borderColor = "#a32600";

}

function getLeastC02Flights(){

    site_lower_section_tabs_cheapest_option.classList.remove("active");
    site_lower_section_tabs_LeastC02_option.classList.add("active");
    site_lower_section_tabs_best_option.classList.remove("active");

    site_lower_section_tabs_cheapest_option_content.style.borderColor = "#a32600";
    site_lower_section_tabs_best_option_content.style.borderColor = "#ad310b";

}

function show_flight_ticket_added_policies_content(number){
    let read_more_txt = document.getElementById("each_flight_ticket_added_policies_content_read_more_txt"+number);
    let chevron_icon = document.getElementById("each_flight_ticket_added_policies_content_chevron_icon"+number);
    let content_div = document.getElementById("each_flight_ticket_added_policies_content"+number);
    let title = document.getElementById("each_flight_ticket_added_policies_content_title"+number);
    let summary = document.getElementById("each_flight_ticket_added_policies_content_summary"+number);

    if(content_div.style.display === "none"){
        $("#each_flight_ticket_added_policies_content"+number).slideDown("fast");
        summary.style.display = "none";
        title.style.display = "block";
        chevron_icon.style.transform = "rotate(180deg)";
        read_more_txt.style.display = "none";
    }else{
        $("#each_flight_ticket_added_policies_content"+number).slideUp("fast");
        chevron_icon.style.transform = "rotate(0deg)";
        read_more_txt.style.display = "block";
        title.style.display = "none";
        summary.style.display = "block";
    }

}

function covert_time_to_12_hour(time_param){
    let timeArr = time_param.split(":");
    let hours = timeArr[0];
    let minutes = timeArr[1];
    //var dt = new Date();
    //var hours = dt.getHours() ; // gives the value in 24 hours format
    var AmOrPm = hours >= 12 ? 'pm' : 'am';

    hours = (hours % 12) || 12;
    //var minutes = dt.getMinutes() ;

    var finalTime = hours + ":" + minutes + " " + AmOrPm; 
    //finalTime // final time Time - 22:10
    return finalTime;
}

function timeConvert(n) {
    let num = n;
    let hours = (num / 60);
    let rhours = Math.floor(hours);
    let minutes = (hours - rhours) * 60;
    let rminutes = Math.round(minutes);
    return rhours + "h " + rminutes + "m";
}

function return_time_diff(firstTime, secondTime){
    let first_hours = firstTime.split(":")[0];
    //let first_minutes = firstTime.toLowerCase().split(":")[1].split(" ")[0].split("p")[0].split("a")[0];
    let first_minutes = firstTime.split(":")[1];

    first_hours = parseInt(first_hours);
    first_minutes = parseInt(first_minutes);

    let first_time_total_minutes = ((first_hours * 60) + first_minutes);

    console.log("first H: " + first_hours + ", first M: " + first_minutes );

    let second_hours = secondTime.split(":")[0];
    //let second_minutes = secondTime.toLowerCase().split(":")[1].split(" ")[0].split("p")[0].split("a")[0];
    let second_minutes = secondTime.split(":")[1];

    second_hours = parseInt(second_hours);
    second_minutes = parseInt(second_minutes);

    let second_time_total_minutes = ((second_hours * 60) + second_minutes);

    console.log("second H: " + second_hours + ", second M: " + second_minutes );

    let minute_diff =  second_time_total_minutes - first_time_total_minutes
    console.log(minute_diff);

    return timeConvert(minute_diff);

}

//return_time_diff("9:00", "22:40");

function get_transfer_duration(timeA, timeB){

    let timeADate = timeA.split("T")[0];
    let timeBDate = timeB.split("T")[0];
    //console.log(timeADate);
    //console.log(timeBDate);
    
    let timeATime = timeA.split("T")[1];
    let timeBTime = timeB.split("T")[1];
    //console.log(timeATime);
    //console.log(timeBTime);

    let firstDateObj = new Date(parseInt(timeADate.split("-")[0]), parseInt(timeADate.split("-")[1]) - 1,
                                    parseInt(timeADate.split("-")[2]), timeATime.split(":")[0], 
                                    timeATime.split(":")[1], 0, 0);

    let secondDAteObj = new Date(parseInt(timeBDate.split("-")[0]), parseInt(timeBDate.split("-")[1]) - 1,
                                    parseInt(timeBDate.split("-")[2]), timeBTime.split(":")[0], 
                                    timeBTime.split(":")[1], 0, 0);
    //console.log(firstDateObj);
    let dif = (secondDAteObj - firstDateObj); 
    dif = Math.round((dif/1000)/60);

    //console.log(dif);

    return timeConvert(dif);


}

//console.log(get_transfer_duration("2021-04-01T21:00:00", "2021-04-01T22:40:00"));

var booking_forms_current_travelers_index = 0;
var booking_travelers = [];

function view_flight_deal(isAnidasoBookable, data_or_link){

    document.getElementById("full_page_loader_container").style.display = "block";
    document.getElementById("full_page_loader_container").style.opacity = 1;

    //console.log(JSON.parse(data_or_link.replaceAll('*#*$#%','"')));
    let flightObj = JSON.parse(data_or_link.replaceAll('*#*$#%','"'));

    //creating user objects for form data collection and aggregation
    

    for(let q = 0; q < flightObj.travelerPricings.length; q++ ){

        let eachTraveler = {
            "id": (q+1),
            "dateOfBirth": "N/A",
            "name": {
              "firstName": "Traveler "+ (q+1),
              "lastName": "N/A"
            },
            "gender": "N/A",
            "contact": {
              "emailAddress": "N/A",
              "phones": [
                {
                  "deviceType": "N/A",
                  "countryCallingCode": "N/A",
                  "number": "N/A"
                }
              ]
            },
            "documents": [
              {
                "documentType": "N/A",
                "birthPlace": "N/A",
                "issuanceLocation": "N/A",
                "issuanceDate": "N/A",
                "number": "N/A",
                "expiryDate": "N/A",
                "issuanceCountry": "N/A",
                "validityCountry": "N/A",
                "nationality": "N/A",
                "holder": false
              }
            ]
          };

          booking_travelers.push(eachTraveler);

        //booking_forms_render_each__travelers(q, JSON.stringify(eachTraveler).replaceAll('"','#@$%@#'));
        
    }
    
    console.log(booking_travelers);

    if(isAnidasoBookable){

        $.ajax({
            type: "POST",
            url: "/getfinalflightprice",
            data: flightObj,
            success: (res)=>{
                document.getElementById("full_page_loader_container").style.display = "none";
                document.getElementById("full_page_loader_container").style.opacity = 0;
                console.log(res);
                toggle_show_finish_booking_form();
            },
            error: (err)=>{
                document.getElementById("full_page_loader_container").style.display = "none";
                document.getElementById("full_page_loader_container").style.opacity = 0;
                console.log(err);
            }
        });

    }else{
        let link = data_or_link;
        //handle this later;
    }

}

function booking_forms_set_current_traveler(number){
    show_finish_booking_form_personal_info_fieldset();
    booking_forms_current_travelers_index = number;
    console.log(number);
    
}

function booking_forms_render_each_traveler(index, traveler){

    let decoded_info = traveler.replaceAll('#@$%@#','"');
    let the_traveler = JSON.parse(decoded_info);
    //console.log(the_traveler);

    if(the_traveler.dateOfBirth === "N/A"){
        document.getElementById("order_ticket_form_container_review_and_submit_travelers_list").innerHTML +=
        `
            <div onclick="booking_forms_set_current_traveler(${index});" class="submit_each_traveler_review_info">
                <p><i style="margin-right: 5px;" class="fa fa-user" aria-hidden="true"></i>${the_traveler.name.firstName}</p>
                <p><i style="margin-right: 5px;" class="fa fa-envelope" aria-hidden="true"></i>${the_traveler.contact.emailAddress}</p>
                <p><i style="margin-right: 5px;" class="fa fa-id-card" aria-hidden="true"></i>${the_traveler.documents[0].number}</p>
                
                <div style="font-size: 14px; padding: 20px; background-color: #0000001a; color: white; margin: 0; margin-top: 10px; display: flex; flex-direction: row !important;">
                <div style="background-color: #af2a12; border-radius: 100%; text-align: center; width: 30px; height: 30px; display: flex; flex-direction: column; justify-content: center; margin-right: 10px;">
                    <i style="color: white;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                </div>
                <div style="display: flex; font-size: 14px; flex-direction: column; justify-content: center;">Click on this card to add information</div>
                </div>
            </div>
        `;
    }else{
        document.getElementById("order_ticket_form_container_review_and_submit_travelers_list").innerHTML +=
        `
            <div onclick="booking_forms_set_current_traveler(${index});" class="submit_each_traveler_review_info">
                <p><i style="margin-right: 5px;" class="fa fa-user" aria-hidden="true"></i>${the_traveler.name.firstName} ${the_traveler.name.lastName}</p>
                <p><i style="margin-right: 5px;" class="fa fa-envelope" aria-hidden="true"></i>${the_traveler.contact.emailAddress}</p>
                <p><i style="margin-right: 5px;" class="fa fa-id-card" aria-hidden="true"></i>${the_traveler.documents[0].number}</p>
                
                <div style="font-size: 14px; padding: 20px; background-color: #0000001a; color: white; margin: 0; margin-top: 10px; display: flex; flex-direction: row !important;">
                <div style="background-color: #12af8d;; border-radius: 100%; text-align: center; width: 30px; height: 30px; display: flex; flex-direction: column; justify-content: center; margin-right: 10px;">
                    <i style="color: white;" class="fa fa-check" aria-hidden="true"></i>
                </div>
                <div style="display: flex; font-size: 14px; flex-direction: column; justify-content: center;">OK</div>
                </div>
            </div>
        `;
    }

}

function booking_forms_render_all_travelers(){
    for(let qw = 0; qw < booking_travelers.length; qw++){
        booking_forms_render_each_traveler(qw, JSON.stringify(booking_travelers[qw]).replaceAll('"','#@$%@#'));
    }
}