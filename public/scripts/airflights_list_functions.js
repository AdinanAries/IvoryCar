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