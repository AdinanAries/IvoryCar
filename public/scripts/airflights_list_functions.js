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

    console.log(dif);

    return timeConvert(dif);


}

//console.log(get_transfer_duration("2021-04-01T21:00:00", "2021-04-01T22:40:00"));