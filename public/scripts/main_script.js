//getting dom elements

var city_search_fieldset_done_btn = document.getElementById("city_search_fieldset_done_btn");

var hotels__search_form_container = document.getElementById("hotels__search_form_container");
var flights_search_tickets_form_container = document.getElementById("flights_search_tickets_form_container");
var car_rentals_search_form_container = document.getElementById("car_rentals_search_form_container");
var main_menu_hotels_option = document.getElementById("main_menu_hotels_option");
var main_menu_car_rentals_option = document.getElementById("main_menu_car_rentals_option");

var more_options_date_show_container = document.getElementById("more_options_date_show_container");

var hotels_accommodations_parameters = document.getElementById("hotels_accommodations_parameters");
var main_hotels_accommodations_parameters_options = document.getElementById("main_hotels_accommodations_parameters_options");
var car_rentals_pickup_time_parameters = document.getElementById("car_rentals_pickup_time_parameters");

var from_when_search_input = document.getElementById("from_when_search_input");
var to_when_search_input = document.getElementById("to_when_search_input");

var header_menu_dropdowns = document.getElementById("header_menu_dropdowns_container");
var top_logo_menu_icon = document.getElementById("top_logo_menu_icon");

var trip_type_param_number_of_people_option = document.getElementById("trip_type_param_number_of_people_option");
var trip_type_param_flight_class_option = document.getElementById("trip_type_param_flight_class_option");
var trip_type_param_round_trip_option = document.getElementById("trip_type_param_round_trip_option");

var number_of_people_round_trip_type_options_item = document.getElementById("number_of_people_round_trip_type_options_item");
var flight_class_round_trip_type_options_item = document.getElementById("flight_class_round_trip_type_options_item");
var oneway_or_round_trip_type_options_item = document.getElementById("oneway_or_round_trip_type_options_item");

trip_type_param_number_of_people_option.addEventListener("click", (evnt) => {
  trip_type_param_flight_class_option.style.color = "#a9ddff";
  trip_type_param_round_trip_option.style.color = "#a9ddff";
  trip_type_param_number_of_people_option.style.color = "#ffcb7d";

  number_of_people_round_trip_type_options_item.style.display = "block";
  flight_class_round_trip_type_options_item.style.display = "none";
  oneway_or_round_trip_type_options_item.style.display = "none";

})

trip_type_param_flight_class_option.addEventListener("click", (evnt) => {
  trip_type_param_flight_class_option.style.color = "#ffcb7d";
  trip_type_param_round_trip_option.style.color = "#a9ddff";
  trip_type_param_number_of_people_option.style.color = "#a9ddff";

  number_of_people_round_trip_type_options_item.style.display = "none";
  flight_class_round_trip_type_options_item.style.display = "block";
  oneway_or_round_trip_type_options_item.style.display = "none";

})

trip_type_param_round_trip_option.addEventListener("click", (evnt) => {
  trip_type_param_flight_class_option.style.color = "#a9ddff";
  trip_type_param_round_trip_option.style.color = "#ffcb7d";
  trip_type_param_number_of_people_option.style.color = "#a9ddff";

  number_of_people_round_trip_type_options_item.style.display = "none";
  flight_class_round_trip_type_options_item.style.display = "none";
  oneway_or_round_trip_type_options_item.style.display = "block";

})

var main_menu_car_option = document.getElementById("main_menu_car_option");
var city_search_fieldset = document.getElementById("city_search_fieldset");
var date_search_fieldset = document.getElementById("date_search_fieldset");
var to_where_search_input_fld = document.getElementById("to_where_search_input_fld");
var from_where_search_input_fld = document.getElementById("from_where_search_input_fld");
var from_where_search_display_span = document.getElementById("from_where_search_display_span");
var to_where_search_display_span = document.getElementById("to_where_search_display_span");
var main_from_where_city_show_container = document.getElementById("main_from_where_city_show_container");
var main_from_when_date_show_container = document.getElementById("main_from_when_date_show_container");

var hotels_city_search_fieldset = document.getElementById("hotels_city_search_fieldset");
var hotels_date_search_fieldset = document.getElementById("hotels_date_search_fieldset");
var hotels_where_search_input_fld = document.getElementById("hotels_where_search_input_fld");
var hotels_from_where_search_display_span = document.getElementById("hotels_from_where_search_display_span");
var hotels_main_where_city_show_container = document.getElementById("hotels_main_from_where_city_show_container");
var hotels_main_from_when_date_show_container = document.getElementById("main_from_when_date_show_container");

var car_rentals_city_search_fieldset = document.getElementById("car_rentals_city_search_fieldset");
var car_rentals_date_search_fieldset = document.getElementById("car_rentals_date_search_fieldset");
var car_rentals_to_where_search_input_fld = document.getElementById("car_rentals_to_where_search_input_fld");
var car_rentals_from_where_search_input_fld = document.getElementById("car_rentals_from_where_search_input_fld");
var car_rentals_from_where_search_display_span = document.getElementById("car_rentals_from_where_search_display_span");
var car_rentals_to_where_search_display_span = document.getElementById("car_rentals_to_where_search_display_span");
var car_rentals_main_from_where_city_show_container = document.getElementById("car_rentals_main_from_where_city_show_container");
var car_rentals_main_from_when_date_show_container = document.getElementById("car_rentals_main_from_when_date_show_container");

var trip_type_parameters = document.getElementById("trip_type_parameters");
var trip_type_param_round_trip_option_container = document.getElementById("trip_type_param_round_trip_option_container");
var close_main_round_trip_type_options_btn = document.getElementById("close_main_round_trip_type_options_btn");
var main_round_trip_type_options = document.getElementById("main_round_trip_type_options");


var ui_datepicker = document.getElementsByClassName("ui-datepicker")[0];
var ui_datepicker_div = document.getElementById("ui-datepicker-div");
var main_menu_packages_option = document.getElementById(
  "main_menu_packages_option"
);
var main_menu_explore_option = document.getElementById(
  "main_menu_explore_option"
);
var main_menu_more_option = document.getElementById("main_menu_more_option");
var top_nav_var_main_menu_items = Array.from(
  document.getElementsByClassName("top_nav_var_main_menu_item")
);
var main_menu_more_option_a_tag = document.getElementById(
  "main_menu_more_option_a_tag"
);
var main_menu_more_submenu = document.getElementById("main_menu_more_submenu");
var other_menu_languages_option = document.getElementById(
  "other_menu_languages_option"
);
var main_menu_language_submenu = document.getElementById(
  "main_menu_language_submenu"
);
var other_menu_languages_option_container = document.getElementById(
  "other_menu_languages_option_container"
);
var hero_section_container = document.getElementsByClassName(
  "hero_section_container"
)[0];
var packages_section = document.getElementsByClassName("packages_section")[0];
var explore_section = document.getElementsByClassName("explore_section")[0];
var jumbotron_background = document.getElementsByClassName(
  "jumbotron_background"
)[0];
var mobile_main_menu_items = document.getElementById("mobile_main_menu_items");
var top_logo_as_menu_btn = document.getElementById("top_logo_as_menu_btn");

var mobile_menu_hotels_option = document.getElementById("mobile_menu_hotels_option");
var mobile_menu_car_rentals_option = document.getElementById("mobile_menu_car_rentals_option");
var mobile_menu_car_option = document.getElementById("mobile_menu_car_option");

//hover event for mobile main menu
top_logo_as_menu_btn.addEventListener("click", () => {
  if ($(window).width() < 1026) {
    if(header_menu_dropdowns.style.display === "flex"){
      top_logo_menu_icon.style.transform = "rotate(360deg)";
      top_logo_menu_icon.style.marginTop = "23px";
      top_logo_menu_icon.style.marginBottom = "0"
      header_menu_dropdowns.style.display = "none";
      mobile_main_menu_items.style.visibility = "hidden";
      mobile_main_menu_items.style.opacity = "0";
    }else{
      top_logo_menu_icon.style.transform = "rotate(180deg)";
      top_logo_menu_icon.style.marginTop = "0";
      top_logo_menu_icon.style.marginBottom = "23px"
      header_menu_dropdowns.style.display = "flex";
      mobile_main_menu_items.style.visibility = "visible";
      mobile_main_menu_items.style.opacity = "1";
    }
    
  }
});
/*top_logo_as_menu_btn.addEventListener("mouseout", (evnt) => {
  header_menu_dropdowns.style.display = "none";
  mobile_main_menu_items.style.visibility = "hidden";
  mobile_main_menu_items.style.opacity = "0";
});*/
mobile_main_menu_items.addEventListener("mouseover", () => {
  header_menu_dropdowns.style.display = "flex";
  mobile_main_menu_items.style.visibility = "visible";
  mobile_main_menu_items.style.opacity = "1";
});
mobile_main_menu_items.addEventListener("mouseout", (evnt) => {
  header_menu_dropdowns.style.display = "none";
  mobile_main_menu_items.style.visibility = "hidden";
  mobile_main_menu_items.style.opacity = "0";
});

//hover event for menu languages option
other_menu_languages_option.addEventListener("mouseover", () => {
  header_menu_dropdowns.style.display = "flex";
  main_menu_language_submenu.style.visibility = "visible";
  main_menu_language_submenu.style.opacity = "1";
});
other_menu_languages_option.addEventListener("mouseout", (evnt) => {
  header_menu_dropdowns.style.display = "none";
  main_menu_language_submenu.style.visibility = "hidden";
  main_menu_language_submenu.style.opacity = "0";
});
main_menu_language_submenu.addEventListener("mouseover", () => {
  header_menu_dropdowns.style.display = "flex";
  main_menu_language_submenu.style.visibility = "visible";
  main_menu_language_submenu.style.opacity = "1";
});
main_menu_language_submenu.addEventListener("mouseout", (evnt) => {
  header_menu_dropdowns.style.display = "none";
  main_menu_language_submenu.style.visibility = "hidden";
  main_menu_language_submenu.style.opacity = "0";
});

//hover event for menu more option
main_menu_more_option.addEventListener("mouseover", () => {
  header_menu_dropdowns.style.display = "flex";
  main_menu_more_option_a_tag.style.color = "orange";
  main_menu_more_submenu.style.visibility = "visible";
  main_menu_more_submenu.style.opacity = "1";
});
main_menu_more_option.addEventListener("mouseout", (evnt) => {
  header_menu_dropdowns.style.display = "none";
  main_menu_more_option_a_tag.style.color = "white";
  main_menu_more_submenu.style.visibility = "hidden";
  main_menu_more_submenu.style.opacity = "0";
});
main_menu_more_submenu.addEventListener("mouseover", () => {
  header_menu_dropdowns.style.display = "flex";
  main_menu_more_option_a_tag.style.color = "orange";
  main_menu_more_submenu.style.visibility = "visible";
  main_menu_more_submenu.style.opacity = "1";
});
main_menu_more_submenu.addEventListener("mouseout", (evnt) => {
  header_menu_dropdowns.style.display = "none";
  main_menu_more_option_a_tag.style.color = "white";
  main_menu_more_submenu.style.visibility = "hidden";
  main_menu_more_submenu.style.opacity = "0";
});

//this function reset all main menu items non active state
function set_all_main_menu_items_as_not_selected() {
  top_nav_var_main_menu_items.forEach((menuItem) => {
    menuItem.classList.remove("active_top_nav_submenu_link");
    menuItem.classList.remove("active_top_nav_link");
  });
}

//this sets the packages main menu option active
main_menu_packages_option.addEventListener("click", () => {
  set_all_main_menu_items_as_not_selected();
  main_menu_more_option.classList.add("active_top_nav_link");
  main_menu_packages_option.classList.add("active_top_nav_submenu_link");
  jumbotron_background.style.display = "none";
  render_packages_page();
});

//function to show flights search form
main_menu_car_option.addEventListener("click", () => {
  
  trip_type_parameters.style.display = "block";
  hotels_accommodations_parameters.style.display = "none";
  car_rentals_pickup_time_parameters.style.display = "none";

  car_rentals_search_form_container.style.display = "none";
  flights_search_tickets_form_container.style.display = "flex"
  hotels__search_form_container.style.display = "none";
  
  set_all_main_menu_items_as_not_selected();
  main_menu_car_option.classList.add("active_top_nav_link");
  jumbotron_background.style.display = "block";
  render_cars_page();
  document.getElementById("first_each_display_picture").style.backgroundImage = "url('../images/JFKAIR.jpg')";
  document.getElementById("second_each_display_picture").style.backgroundImage = "url('../images/travel-4.jpg')";
  document.getElementById("third_each_display_picture").style.backgroundImage = "url('../images/633637768_flight-attendant.jpg')";
});

mobile_menu_car_option.addEventListener("click", () => {
  
  top_logo_menu_icon.style.transform = "rotate(360deg)";
  top_logo_menu_icon.style.marginTop = "23px";
  top_logo_menu_icon.style.marginBottom = "0"
  header_menu_dropdowns.style.display = "none";
  mobile_main_menu_items.style.visibility = "hidden";
  mobile_main_menu_items.style.opacity = "0";

  trip_type_parameters.style.display = "block";
  hotels_accommodations_parameters.style.display = "none";
  car_rentals_pickup_time_parameters.style.display = "none";

  car_rentals_search_form_container.style.display = "none";
  flights_search_tickets_form_container.style.display = "flex"
  hotels__search_form_container.style.display = "none";
  
  set_all_main_menu_items_as_not_selected();
  main_menu_car_option.classList.add("active_top_nav_link");
  jumbotron_background.style.display = "block";
  render_cars_page();
  document.getElementById("first_each_display_picture").style.backgroundImage = "url('../images/JFKAIR.jpg')";
  document.getElementById("second_each_display_picture").style.backgroundImage = "url('../images/travel-4.jpg')";
  document.getElementById("third_each_display_picture").style.backgroundImage = "url('../images/633637768_flight-attendant.jpg')";
});

//function to show hotels search form
main_menu_hotels_option.addEventListener("click", () => {
  
  hotels_accommodations_parameters.style.display = "block";
  car_rentals_pickup_time_parameters.style.display = "none";
  trip_type_parameters.style.display = "none";

  flights_search_tickets_form_container.style.display = "none";
  hotels__search_form_container.style.display = "flex";
  car_rentals_search_form_container.style.display = "none";
  set_all_main_menu_items_as_not_selected();
  main_menu_hotels_option.classList.add("active_top_nav_link");
  jumbotron_background.style.display = "block";
  render_cars_page();
  document.getElementById("first_each_display_picture").style.backgroundImage = "url('../images/HotelPic.jpg')";
  document.getElementById("second_each_display_picture").style.backgroundImage = "url('../images/HotelPic2.jpg')";
  document.getElementById("third_each_display_picture").style.backgroundImage = "url('../images/HotelPic3.jpg')";
});

mobile_menu_hotels_option.addEventListener("click", () => {
  
  top_logo_menu_icon.style.transform = "rotate(360deg)";
  top_logo_menu_icon.style.marginTop = "23px";
  top_logo_menu_icon.style.marginBottom = "0"
  header_menu_dropdowns.style.display = "none";
  mobile_main_menu_items.style.visibility = "hidden";
  mobile_main_menu_items.style.opacity = "0";

  hotels_accommodations_parameters.style.display = "block";
  car_rentals_pickup_time_parameters.style.display = "none";
  trip_type_parameters.style.display = "none";

  flights_search_tickets_form_container.style.display = "none";
  hotels__search_form_container.style.display = "flex";
  car_rentals_search_form_container.style.display = "none";
  set_all_main_menu_items_as_not_selected();
  main_menu_hotels_option.classList.add("active_top_nav_link");
  jumbotron_background.style.display = "block";
  render_cars_page();
  document.getElementById("first_each_display_picture").style.backgroundImage = "url('../images/HotelPic.jpg')";
  document.getElementById("second_each_display_picture").style.backgroundImage = "url('../images/HotelPic2.jpg')";
  document.getElementById("third_each_display_picture").style.backgroundImage = "url('../images/HotelPic3.jpg')";
});

//function to show car rentals search form
main_menu_car_rentals_option.addEventListener("click", () => {

  trip_type_parameters.style.display = "none";
  hotels_accommodations_parameters.style.display = "none";
  car_rentals_pickup_time_parameters.style.display = "block";

  hotels__search_form_container.style.display = "none";
  car_rentals_search_form_container.style.display = "flex";
  flights_search_tickets_form_container.style.display = "none"
  set_all_main_menu_items_as_not_selected();
  main_menu_car_rentals_option.classList.add("active_top_nav_link");
  jumbotron_background.style.display = "block";
  render_cars_page();
  document.getElementById("first_each_display_picture").style.backgroundImage = "url('../images/CarRentals.png')";
  document.getElementById("second_each_display_picture").style.backgroundImage = "url('../images/CarRentals2.jpg')";
  document.getElementById("third_each_display_picture").style.backgroundImage = "url('../images/CarRentals3.jpg')";
});

mobile_menu_car_rentals_option.addEventListener("click", () => {

  top_logo_menu_icon.style.transform = "rotate(360deg)";
  top_logo_menu_icon.style.marginTop = "23px";
  top_logo_menu_icon.style.marginBottom = "0"
  header_menu_dropdowns.style.display = "none";
  mobile_main_menu_items.style.visibility = "hidden";
  mobile_main_menu_items.style.opacity = "0";
  
  trip_type_parameters.style.display = "none";
  hotels_accommodations_parameters.style.display = "none";
  car_rentals_pickup_time_parameters.style.display = "block";

  hotels__search_form_container.style.display = "none";
  car_rentals_search_form_container.style.display = "flex";
  flights_search_tickets_form_container.style.display = "none"
  set_all_main_menu_items_as_not_selected();
  main_menu_car_rentals_option.classList.add("active_top_nav_link");
  jumbotron_background.style.display = "block";
  render_cars_page();
  document.getElementById("first_each_display_picture").style.backgroundImage = "url('../images/CarRentals.png')";
  document.getElementById("second_each_display_picture").style.backgroundImage = "url('../images/CarRentals2.jpg')";
  document.getElementById("third_each_display_picture").style.backgroundImage = "url('../images/CarRentals3.jpg')";
});

//this sets the cars main menu option active
main_menu_explore_option.addEventListener("click", () => {

  set_all_main_menu_items_as_not_selected();
  main_menu_more_option.classList.add("active_top_nav_link");
  main_menu_explore_option.classList.add("active_top_nav_submenu_link");
  jumbotron_background.style.display = "none";
  render_explore_page();
});

//this function renders renders explore page
function render_explore_page() {
  packages_section.style.display = "none";
  hero_section_container.style.display = "none";
  explore_section.style.display = "block";
}

//this function renders renders explore page
function render_packages_page() {
  hero_section_container.style.display = "none";
  explore_section.style.display = "none";
  packages_section.style.display = "block";
}

//this function renders cars page
function render_cars_page() {
  packages_section.style.display = "none";
  explore_section.style.display = "none";
  hero_section_container.style.display = "block";
}

trip_type_param_round_trip_option_container.addEventListener("click", (evnt)=>{
  $("#main_round_trip_type_options").slideDown("fast");
  $("#main_hotels_accommodations_parameters_options").slideDown("fast");
  $("#car_rentals_pickup_time_parameters_options").slideDown("fast");
  if($(window).width() < 700){
    close_main_round_trip_type_options_btn.style.display = "block";
  }
});
trip_type_param_round_trip_option_container.addEventListener("mouseleave", (evnt)=>{
  $("#car_rentals_pickup_time_parameters_options").slideUp("fast");
  $("#main_hotels_accommodations_parameters_options").slideUp("fast");
  $("#main_round_trip_type_options").slideUp("fast");
  close_main_round_trip_type_options_btn.style.display = "none";
});

close_main_round_trip_type_options_btn.addEventListener("click", (evnt)=>{
  $("#main_round_trip_type_options").slideUp("fast");
  close_main_round_trip_type_options_btn.style.display = "none";
});

city_search_fieldset.addEventListener("focusin", (evnt)=>{
  $("#main_from_where_city_show_container").slideDown("fast");
})
city_search_fieldset.addEventListener("focusout", (evnt)=>{
  $("#main_from_where_city_show_container").slideUp("fast");
  document.getElementById("airports_exchange_search_fields_values_icon").style.display = "block";
  document.getElementById("from_where_city_input_container").style.minWidth = "42%";
  document.getElementById("to_where_city_input_container").style.minWidth = "42%";
  document.getElementById("from_where_city_input_container").style.display = "block";
  document.getElementById("to_where_city_input_container").style.display = "block";
})

from_where_search_input_fld.addEventListener("focusin", ()=>{
    document.getElementById("airports_exchange_search_fields_values_icon").style.display = "none";
    document.getElementById("from_where_city_input_container").style.minWidth = "90%";
    document.getElementById("to_where_city_input_container").style.minWidth = "10%";
    document.getElementById("to_where_city_input_container").style.display = "none";
})
to_where_search_input_fld.addEventListener("focusin", ()=>{
    document.getElementById("airports_exchange_search_fields_values_icon").style.display = "none";
    document.getElementById("from_where_city_input_container").style.minWidth = "10%";
    document.getElementById("from_where_city_input_container").style.display = "none";
    document.getElementById("to_where_city_input_container").style.minWidth = "90%";
})
from_where_search_input_fld.addEventListener("focusout", ()=>{
    document.getElementById("airports_exchange_search_fields_values_icon").style.display = "block";
    document.getElementById("from_where_city_input_container").style.minWidth = "42%";
    document.getElementById("to_where_city_input_container").style.minWidth = "42%";
    document.getElementById("from_where_city_input_container").style.display = "block";
    document.getElementById("to_where_city_input_container").style.display = "block";
})
to_where_search_input_fld.addEventListener("focusout", ()=>{
    document.getElementById("airports_exchange_search_fields_values_icon").style.display = "block";
    document.getElementById("from_where_city_input_container").style.minWidth = "42%";
    document.getElementById("to_where_city_input_container").style.minWidth = "42%";
    document.getElementById("from_where_city_input_container").style.display = "block";
    document.getElementById("to_where_city_input_container").style.display = "block";
})
city_search_fieldset_done_btn.addEventListener("click", ()=>{
  document.getElementById("airports_exchange_search_fields_values_icon").style.display = "block";
  document.getElementById("from_where_city_input_container").style.minWidth = "42%";
  document.getElementById("to_where_city_input_container").style.minWidth = "42%";
  document.getElementById("from_where_city_input_container").style.display = "block";
  document.getElementById("to_where_city_input_container").style.display = "block";
})
/*ui_datepicker_div.addEventListener("mouseenter", (evnt)=>{
  $("#main_from_where_city_show_container").slideDown("fast");
});*/

car_rentals_city_search_fieldset.addEventListener("focusout", (evnt)=>{
  $("#main_from_where_city_show_container").slideUp("fast");
  document.getElementById("car_rentals_exchange_search_fields_values_icon").style.display = "block";
  document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "42%";
  document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "42%";
  document.getElementById("from_where_city_input_container").style.display = "block";
  document.getElementById("to_where_city_input_container").style.display = "block";
})

car_rentals_from_where_search_input_fld.addEventListener("focusin", ()=>{
    document.getElementById("car_rentals_exchange_search_fields_values_icon").style.display = "none";
    document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "90%";
    document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "10%";
    document.getElementById("car_rentals_to_where_city_input_container").style.display = "none";
})
car_rentals_to_where_search_input_fld.addEventListener("focusin", ()=>{
    document.getElementById("car_rentals_exchange_search_fields_values_icon").style.display = "none";
    document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "10%";
    document.getElementById("car_rentals_from_where_city_input_container").style.display = "none";
    document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "90%";
})
car_rentals_from_where_search_input_fld.addEventListener("focusout", ()=>{
    document.getElementById("car_rentals_exchange_search_fields_values_icon").style.display = "block";
    document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "42%";
    document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "42%";
    document.getElementById("car_rentals_from_where_city_input_container").style.display = "block";
  document.getElementById("car_rentals_to_where_city_input_container").style.display = "block";
})
car_rentals_to_where_search_input_fld.addEventListener("focusout", ()=>{
    document.getElementById("car_rentals_exchange_search_fields_values_icon").style.display = "block";
    document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "42%";
    document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "42%";
    document.getElementById("car_rentals_from_where_city_input_container").style.display = "block";
  document.getElementById("car_rentals_to_where_city_input_container").style.display = "block";
})
car_rentals_city_search_fieldset_done_btn.addEventListener("click", ()=>{
  document.getElementById("car_rentals_exchange_search_fields_values_icon").style.display = "block";
  document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "42%";
  document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "42%";
  document.getElementById("car_rentals_from_where_city_input_container").style.display = "block";
  document.getElementById("car_rentals_to_where_city_input_container").style.display = "block";
})

hotels_city_search_fieldset.addEventListener("focusin", (evnt)=>{
  $("#hotels_main_where_city_show_container").slideDown("fast");
})

hotels_city_search_fieldset.addEventListener("focusout", (evnt)=>{
  $("#hotels_main_where_city_show_container").slideUp("fast");
})

car_rentals_city_search_fieldset.addEventListener("focusin", (evnt)=>{
  $("#car_rentals_main_from_where_city_show_container").slideDown("fast");
})
car_rentals_city_search_fieldset.addEventListener("focusout", (evnt)=>{
  $("#car_rentals_main_from_where_city_show_container").slideUp("fast");
})

date_search_fieldset.addEventListener("focusin", (evnt)=>{
  $("#main_from_when_date_show_container").slideDown("fast");
})
date_search_fieldset.addEventListener("focusout", (evnt)=>{
  $("#main_from_when_date_show_container").slideUp("fast");
})
/*ui_datepicker_header.addEventListener("click", (evnt)=>{
  $("#main_from_when_date_show_container").slideDown("fast");
})*/

hotels_date_search_fieldset.addEventListener("focusin", (evnt)=>{
  $("#hotels_main_from_when_date_show_container").slideDown("fast");
})
hotels_date_search_fieldset.addEventListener("focusout", (evnt)=>{
  $("#hotels_main_from_when_date_show_container").slideUp("fast");
})

car_rentals_date_search_fieldset.addEventListener("focusin", (evnt)=>{
  $("#car_rentals_main_from_when_date_show_container").slideDown("fast");
})
car_rentals_date_search_fieldset.addEventListener("focusout", (evnt)=>{
  $("#car_rentals_main_from_when_date_show_container").slideUp("fast");
})

let autocomplete = new google.maps.places.Autocomplete(from_where_search_input_fld);
autocomplete.addListener('place_changed', function () {
  let place = autocomplete.getPlace();
  from_where_search_display_span.innerHTML = "<span style='font-size: 12px; color: rgb(255, 102, 0);'>from </span><span style='font-weight: bolder; font-size: 12px;'>"
                                              + from_where_search_input_fld.value + "</span> ";
});

let autocomplete2 = new google.maps.places.Autocomplete(to_where_search_input_fld);
autocomplete2.addListener('place_changed', function () {
    let place = autocomplete2.getPlace();
    to_where_search_display_span.innerHTML = "<span style='color: rgb(255, 102, 0); font-size: 12px;'>to </span><span style='font-weight: bolder; font-size: 12px;'>" 
                                              + to_where_search_input_fld.value + "</span>";
});

let autocomplete3 = new google.maps.places.Autocomplete(hotels_where_search_input_fld);
autocomplete3.addListener('place_changed', function () {
    let place = autocomplete3.getPlace();
    hotels_from_where_search_display_span.innerHTML = "<span style='color: rgb(255, 102, 0); font-size: 12px;'>Hotels from </span><span style='font-weight: bolder; font-size: 12px;'>" 
                                              + hotels_where_search_input_fld.value + "</span>";
});

let autocomplete4 = new google.maps.places.Autocomplete(car_rentals_from_where_search_input_fld);
autocomplete4.addListener('place_changed', function () {
    let place = autocomplete4.getPlace();
    from_where_search_display_span.innerHTML = "<span style='font-size: 12px; color: rgb(255, 102, 0);'>from </span><span style='font-weight: bolder; font-size: 12px;'>" 
                                              + car_rentals_from_where_search_input_fld.value + "</span>";
});

let autocomplete5 = new google.maps.places.Autocomplete(car_rentals_to_where_search_input_fld);
autocomplete5.addListener('place_changed', function () {
    let place = autocomplete5.getPlace();
    car_rentals_to_where_search_display_span.innerHTML = "<span style='color: rgb(255, 102, 0); font-size: 12px;'>to </span><span style='font-weight: bolder; font-size: 12px;'>" 
                                              + car_rentals_to_where_search_input_fld.value + "</span>";
});

$("#from_when_search_input").datepicker({minDate: 0});
$("#to_when_search_input").datepicker({minDate: 0});
$("#hotels_from_when_search_input").datepicker({minDate: 0});
$("#hotels_to_when_search_input").datepicker({minDate: 0});
$("#car_rentals_from_when_search_input").datepicker({minDate: 0});
$("#car_rentals_to_when_search_input").datepicker({minDate: 0});


/*var divs = document.getElementsByTagName('div');
for (var i = 0, len = divs.length; i < len; i++){
    divs[i].setAttribute('tabindex', '0');
}*/