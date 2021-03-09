/*Array.from(document.getElementsByClassName("hide_book_cheap_book_direct_hotels_full_pic_btn")).forEach(elem =>{
  elem.addEventListener("click", e => {
    alert("clicked");
    e.stopPropagation();
  })
});*/

//getting dom elements
var city_search_fieldset_done_btn = document.getElementById("city_search_fieldset_done_btn");
var site_motto = document.getElementsByClassName("site_motto")[0];

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
var main_menu_deals_option = document.getElementById(
  "main_menu_deals_option"
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
var deals_section = document.getElementsByClassName("deals_section")[0];
var jumbotron_background = document.getElementsByClassName(
  "jumbotron_background"
)[0];
var mobile_main_menu_items = document.getElementById("mobile_main_menu_items");
var top_logo_as_menu_btn = document.getElementById("top_logo_as_menu_btn");

var mobile_menu_hotels_option = document.getElementById("mobile_menu_hotels_option");
var mobile_menu_car_rentals_option = document.getElementById("mobile_menu_car_rentals_option");
var mobile_menu_car_option = document.getElementById("mobile_menu_car_option");
var mobile_menu_packages_option = document.getElementById("mobile_menu_packages_option");
var mobile_menu_explore_option = document.getElementById("mobile_menu_explore_option");
var mobile_menu_deals_option = document.getElementById("mobile_menu_deals_option");

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

//this sets the explore main menu option active
main_menu_explore_option.addEventListener("click", () => {

  set_all_main_menu_items_as_not_selected();
  //main_menu_more_option.classList.add("active_top_nav_link");
  main_menu_explore_option.classList.add("active_top_nav_submenu_link");
  jumbotron_background.style.display = "none";
  render_explore_page();
});

//this sets the packages main menu option active
main_menu_packages_option.addEventListener("click", (e) => {
  set_all_main_menu_items_as_not_selected();
  //main_menu_more_option.classList.add("active_top_nav_link");
  main_menu_packages_option.classList.add("active_top_nav_submenu_link");
  jumbotron_background.style.display = "none";
  render_packages_page();
  e.stopPropagation();
});

//this sets the deals main menu option active
main_menu_deals_option.addEventListener("click", (e) => {
  set_all_main_menu_items_as_not_selected();
  //main_menu_more_option.classList.add("active_top_nav_link");
  main_menu_deals_option.classList.add("active_top_nav_submenu_link");
  jumbotron_background.style.display = "none";
  render_deals_page();
  e.stopPropagation();
});

//this sets the packages main menu option active from mobile menu
mobile_menu_packages_option.addEventListener("click", (e) => {
  _hide_mobile_menu_();
  set_all_main_menu_items_as_not_selected();
  //main_menu_more_option.classList.add("active_top_nav_link");
  main_menu_packages_option.classList.add("active_top_nav_submenu_link");
  jumbotron_background.style.display = "none";
  render_packages_page();
  e.stopPropagation();
});

//this sets the explore main menu option active from mobile menu
mobile_menu_explore_option.addEventListener("click", () => {
  _hide_mobile_menu_();
  set_all_main_menu_items_as_not_selected();
  //main_menu_more_option.classList.add("active_top_nav_link");
  main_menu_explore_option.classList.add("active_top_nav_submenu_link");
  jumbotron_background.style.display = "none";
  render_explore_page();
});

//this sets the deals main menu option active from mobile menu
mobile_menu_deals_option.addEventListener("click", (e) => {
  _hide_mobile_menu_();
  set_all_main_menu_items_as_not_selected();
  //main_menu_more_option.classList.add("active_top_nav_link");
  main_menu_deals_option.classList.add("active_top_nav_submenu_link");
  jumbotron_background.style.display = "none";
  render_deals_page();
  e.stopPropagation();
});

//this function hides mobile menu when an item is selected from its menu
function _hide_mobile_menu_(){

  top_logo_menu_icon.style.transform = "rotate(360deg)";
  top_logo_menu_icon.style.marginTop = "23px";
  top_logo_menu_icon.style.marginBottom = "0"
  header_menu_dropdowns.style.display = "none";
  mobile_main_menu_items.style.visibility = "hidden";
  mobile_main_menu_items.style.opacity = "0";

}

//function to show flights search form
function show_flights_search_forms_from_main_menu(){

  if(document.getElementById("multi_city_search_inputs_display").contains(document.querySelector(".each_added_flight"))){
    setTimeout(()=>{
      $("#multi_city_search_inputs_display").slideDown("fast");
    },150)
  }

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

  jumbotron_background.style.opacity = 0;
  setTimeout(()=>{
    jumbotron_background.style.background = "linear-gradient(rgba(204, 241, 255, 0), #210340), url('../images/flightsBg.jpg')";
  }, 500);
  setTimeout(()=>{
    jumbotron_background.style.opacity = 1;
  },700);

  site_motto.style.transform = "rotate(360deg)";
  setTimeout(()=>{
    site_motto.innerText = "Get cheap flight tickets";
    site_motto.style.transform = "rotate(0deg)";
  },100);

  flight_set_off_additional_options.style.display = "flex";
  hotel_set_off_additional_options.style.display = "none";
  rental_cars_set_off_additional_options.style.display = "none";
  
  //site_motto.style.width = "auto";

  /*document.getElementById("first_each_display_picture").style.backgroundImage = "url('../images/JFKAIR.jpg')";
  document.getElementById("second_each_display_picture").style.backgroundImage = "url('../images/travel-4.jpg')";
  document.getElementById("third_each_display_picture").style.backgroundImage = "url('../images/633637768_flight-attendant.jpg')";*/

}
main_menu_car_option.addEventListener("click", () => {
  show_flights_search_forms_from_main_menu();
});

function show_flights_search_forms_from_mobile_menu(){

  if(document.getElementById("multi_city_search_inputs_display").contains(document.querySelector(".each_added_flight"))){
    setTimeout(()=>{
      $("#multi_city_search_inputs_display").slideDown("fast");
    },150)
    
  }

  _hide_mobile_menu_();

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

  site_motto.style.transform = "rotate(360deg)";
  setTimeout(()=>{
    site_motto.innerText = "Get cheap flight tickets";
    site_motto.style.transform = "rotate(0deg)";
  },100);

  flight_set_off_additional_options.style.display = "flex";
  hotel_set_off_additional_options.style.display = "none";
  rental_cars_set_off_additional_options.style.display = "none";

  /*document.getElementById("first_each_display_picture").style.backgroundImage = "url('../images/flightsBg.jpg')";
  document.getElementById("second_each_display_picture").style.backgroundImage = "url('../images/travel-4.jpg')";
  document.getElementById("third_each_display_picture").style.backgroundImage = "url('../images/633637768_flight-attendant.jpg')";*/

}

mobile_menu_car_option.addEventListener("click", () => {
  show_flights_search_forms_from_mobile_menu();
});

//function to show hotels search form
function show_hotels_search_forms_from_main_menu(){
  $("#multi_city_search_inputs_display").slideUp("fast");

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

  jumbotron_background.style.opacity = 0;
  setTimeout(()=>{
    jumbotron_background.style.background = "linear-gradient(rgba(204, 241, 255, 0), #210340), url('../images/HotelPic2.jpg')";
    jumbotron_background.backgroundPosition = "bottom";
  }, 500);
  setTimeout(()=>{
    jumbotron_background.style.opacity = 1;
  },700);
  
  site_motto.style.transform = "rotate(360deg)";
  setTimeout(()=>{
    site_motto.innerText = "Best prices on hotels";
    site_motto.style.transform = "rotate(0deg)";
  },100);

  flight_set_off_additional_options.style.display = "none";
  rental_cars_set_off_additional_options.style.display = "none";
  hotel_set_off_additional_options.style.display = "flex";
  
  /*document.getElementById("first_each_display_picture").style.backgroundImage = "url('../images/HotelPic.jpg')";
  document.getElementById("second_each_display_picture").style.backgroundImage = "url('../images/HotelPic2.jpg')";
  document.getElementById("third_each_display_picture").style.backgroundImage = "url('../images/HotelPic3.jpg')";*/

}

main_menu_hotels_option.addEventListener("click", () => {
  show_hotels_search_forms_from_main_menu();
});

mobile_menu_hotels_option.addEventListener("click", () => {
  
  $("#multi_city_search_inputs_display").slideUp("fast");
  
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

  site_motto.style.transform = "rotate(360deg)";
  setTimeout(()=>{
    site_motto.innerText = "Best prices on hotels";
    site_motto.style.transform = "rotate(0deg)";
  },100);

  flight_set_off_additional_options.style.display = "none";
  rental_cars_set_off_additional_options.style.display = "none";
  hotel_set_off_additional_options.style.display = "flex";

  /*document.getElementById("first_each_display_picture").style.backgroundImage = "url('../images/HotelPic.jpg')";
  document.getElementById("second_each_display_picture").style.backgroundImage = "url('../images/HotelPic2.jpg')";
  document.getElementById("third_each_display_picture").style.backgroundImage = "url('../images/HotelPic3.jpg')";*/

});

//function to show car rentals search form
main_menu_car_rentals_option.addEventListener("click", () => {

  $("#multi_city_search_inputs_display").slideUp("fast");

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

  jumbotron_background.style.opacity = 0;
  setTimeout(()=>{
    jumbotron_background.style.background = "linear-gradient(rgba(204, 241, 255, 0), #210340), url('../images/carBackgroundPic3.jpg')";
  }, 500);
  setTimeout(()=>{
    jumbotron_background.style.opacity = 1;
  },700);

  site_motto.style.transform = "rotate(360deg)";
  setTimeout(()=>{
    site_motto.innerText = "Best rental car prices";
    site_motto.style.transform = "rotate(0deg)";
  },100);

  flight_set_off_additional_options.style.display = "none";
  rental_cars_set_off_additional_options.style.display = "flex";
  hotel_set_off_additional_options.style.display = "none";

  /*document.getElementById("first_each_display_picture").style.backgroundImage = "url('../images/CarRentals.png')";
  document.getElementById("second_each_display_picture").style.backgroundImage = "url('../images/CarRentals2.jpg')";
  document.getElementById("third_each_display_picture").style.backgroundImage = "url('../images/CarRentals3.jpg')";*/

});

mobile_menu_car_rentals_option.addEventListener("click", () => {

  $("#multi_city_search_inputs_display").slideUp();

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

  site_motto.style.transform = "rotate(360deg)";
  setTimeout(()=>{
    site_motto.innerText = "Best rental car prices";
    site_motto.style.transform = "rotate(0deg)";
  },100);

  flight_set_off_additional_options.style.display = "none";
  rental_cars_set_off_additional_options.style.display = "flex";
  hotel_set_off_additional_options.style.display = "none";
  
  /*document.getElementById("first_each_display_picture").style.backgroundImage = "url('../images/CarRentals.png')";
  document.getElementById("second_each_display_picture").style.backgroundImage = "url('../images/CarRentals2.jpg')";
  document.getElementById("third_each_display_picture").style.backgroundImage = "url('../images/CarRentals3.jpg')";*/

});



//this function renders renders explore page
function render_explore_page() {
  packages_section.style.display = "none";
  hero_section_container.style.display = "none";
  deals_section.style.display = "none";
  explore_section.style.display = "block";
}

//this function renders renders explore page
function render_packages_page() {
  hero_section_container.style.display = "none";
  explore_section.style.display = "none";
  deals_section.style.display = "none";
  packages_section.style.display = "block";
}

function render_deals_page(){
  hero_section_container.style.display = "none";
  explore_section.style.display = "none";
  packages_section.style.display = "none";
  deals_section.style.display = "block";
}

//this function renders cars page
function render_cars_page() {
  packages_section.style.display = "none";
  explore_section.style.display = "none";
  deals_section.style.display = "none";
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
});

city_search_fieldset.addEventListener("focusout", (evnt)=>{

  /*if(flight_search_trip_round.t_round === "One-way"){
    $("#main_from_where_city_show_container").slideUp("fast");
    return null;
  }*/

  //$(".autocomplete-results").slideUp("fast");
  $("#main_from_where_city_show_container").slideUp("fast");
  document.getElementById("airports_exchange_search_fields_values_icon_container").style.display = "flex";
  document.getElementById("from_where_city_input_container").style.display = "block";
  document.getElementById("to_where_city_input_container").style.display = "block";
  setTimeout(()=>{
    document.getElementById("from_where_city_input_container").style.minWidth = "42%";
    document.getElementById("to_where_city_input_container").style.minWidth = "42%";
  },100);

});

from_where_search_input_fld.addEventListener("focusin", ()=>{
  //$(".autocomplete-results").slideDown("fast");
  document.getElementById("to_where_input_fld_tile").style.display = "none";
  setTimeout(()=>{
      document.getElementById("from_where_city_input_container").style.minWidth = "90%";
      document.getElementById("to_where_city_input_container").style.minWidth = "1%";
  },200);
  setTimeout(()=>{
    document.getElementById("to_where_city_input_container").style.display = "none";
    document.getElementById("airports_exchange_search_fields_values_icon_container").style.display = "none";
  }, 400);
    
});

to_where_search_input_fld.addEventListener("focusin", ()=>{

  setTimeout(()=>{
    document.getElementById("flights_auto_complete_list").innerHTML = "";
  }, 500);
  
  //$(".autocomplete-results").slideDown("fast");
  document.getElementById("from_where_input_fld_tile").style.display = "none";
  setTimeout(()=>{
    document.getElementById("from_where_city_input_container").style.minWidth = "1%";
    document.getElementById("to_where_city_input_container").style.minWidth = "90%";
  },200);
  setTimeout(()=>{
    document.getElementById("from_where_city_input_container").style.display = "none";
    document.getElementById("airports_exchange_search_fields_values_icon_container").style.display = "none";
  },600);

});

from_where_search_input_fld.addEventListener("focusout", ()=>{

  /*if(flight_search_trip_round.t_round === "One-way"){
    $("#main_from_where_city_show_container").slideUp("fast");
    return null;
  }*/
    
  setTimeout(()=>{
    document.getElementById("flights_auto_complete_list").innerHTML = "";
    $("html, body").animate({ scrollTop: 0 }, "fast");
    //additional_search_inputs_and_Options.scrollIntoView();
  }, 500);

  //$(".autocomplete-results").slideUp("fast");
  document.getElementById("airports_exchange_search_fields_values_icon_container").style.display = "flex";
  document.getElementById("from_where_city_input_container").style.minWidth = "42%";
  document.getElementById("to_where_city_input_container").style.minWidth = "42%";
  setTimeout(()=>{
    document.getElementById("from_where_city_input_container").style.display = "block";
    document.getElementById("to_where_city_input_container").style.display = "block";
  },100);
  setTimeout(()=>{
    document.getElementById("to_where_input_fld_tile").style.display = "block";
  }, 500);
  
});

to_where_search_input_fld.addEventListener("focusout", ()=>{

  /*if(flight_search_trip_round.t_round === "One-way"){
    $("#main_from_where_city_show_container").slideUp("fast");
    return null;
  }*/

  //$(".autocomplete-results").slideUp("fast");
  document.getElementById("airports_exchange_search_fields_values_icon_container").style.display = "flex";
  document.getElementById("from_where_city_input_container").style.display = "block";
  document.getElementById("to_where_city_input_container").style.display = "block";
  setTimeout(()=>{
    document.getElementById("from_where_city_input_container").style.minWidth = "42%";
    document.getElementById("to_where_city_input_container").style.minWidth = "42%";
  },100);
  setTimeout(()=>{
    document.getElementById("from_where_input_fld_tile").style.display = "block";
    document.getElementById("flights_auto_complete_list").innerHTML = "";
    $("html, body").animate({ scrollTop: 0 }, "fast");
  }, 500);

})

city_search_fieldset_done_btn.addEventListener("click", ()=>{

  /*if(flight_search_trip_round.t_round === "One-way"){
    $("#main_from_where_city_show_container").slideUp("fast");
    return null;
  }*/

  //$(".autocomplete-results").slideUp("fast");
  document.getElementById("airports_exchange_search_fields_values_icon_container").style.display = "flex";
  document.getElementById("from_where_city_input_container").style.display = "block";
  document.getElementById("to_where_city_input_container").style.display = "block";
  setTimeout(()=>{
    document.getElementById("from_where_city_input_container").style.minWidth = "42%";
    document.getElementById("to_where_city_input_container").style.minWidth = "42%";
  },100);

})
/*ui_datepicker_div.addEventListener("mouseenter", (evnt)=>{
  $("#main_from_where_city_show_container").slideDown("fast");
});*/

car_rentals_city_search_fieldset.addEventListener("focusout", (evnt)=>{

  /*if(flight_search_trip_round.t_round === "One-way"){
    $("#main_from_where_city_show_container").slideUp("fast");
    return null;
  }*/
  
  $("#main_from_where_city_show_container").slideUp("fast");
  document.getElementById("car_rentals_exchange_search_fields_values_icon_container").style.display = "flex";
  document.getElementById("from_where_city_input_container").style.display = "block";
  document.getElementById("to_where_city_input_container").style.display = "block";
  setTimeout(()=>{
    document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "42%";
    document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "42%";
  }, 100);

});

car_rentals_from_where_search_input_fld.addEventListener("focusin", ()=>{

  document.getElementById("car_drop_off_input_fld_tile").style.display = "none";
  setTimeout(()=>{
    document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "90%";
    document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "10%";
  },200);
  setTimeout(()=>{
    document.getElementById("car_rentals_exchange_search_fields_values_icon_container").style.display = "none";
    document.getElementById("car_rentals_to_where_city_input_container").style.display = "none";
  }, 400);

});

car_rentals_to_where_search_input_fld.addEventListener("focusin", ()=>{

  document.getElementById("car_pick_up_input_fld_tile").style.display = "none";
  setTimeout(()=>{
    document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "10%";
    document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "90%";
  }, 200);
  setTimeout(()=>{
    document.getElementById("car_rentals_exchange_search_fields_values_icon_container").style.display = "none";
    document.getElementById("car_rentals_from_where_city_input_container").style.display = "none";
  },600);

});

car_rentals_from_where_search_input_fld.addEventListener("focusout", ()=>{

  /*if(flight_search_trip_round.t_round === "One-way"){
    return null;
  }*/

  document.getElementById("car_rentals_exchange_search_fields_values_icon_container").style.display = "flex";
  document.getElementById("car_rentals_from_where_city_input_container").style.display = "block";
  document.getElementById("car_rentals_to_where_city_input_container").style.display = "block";
  setTimeout(()=>{
    document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "42%";
    document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "42%";
  }, 100);
  setTimeout(()=>{
    document.getElementById("car_drop_off_input_fld_tile").style.display = "block";
  },500);

});

car_rentals_to_where_search_input_fld.addEventListener("focusout", ()=>{

  /*if(flight_search_trip_round.t_round === "One-way"){
    return null;
  }*/

  document.getElementById("car_rentals_exchange_search_fields_values_icon_container").style.display = "flex";
  document.getElementById("car_rentals_from_where_city_input_container").style.display = "block";
  document.getElementById("car_rentals_to_where_city_input_container").style.display = "block";
  setTimeout(()=>{
    document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "42%";
    document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "42%";
  }, 100);
  setTimeout(()=>{
    document.getElementById("car_pick_up_input_fld_tile").style.display = "block";
  },500);

});

car_rentals_city_search_fieldset_done_btn.addEventListener("click", ()=>{

  /*if(flight_search_trip_round.t_round === "One-way"){
    return null;
  }*/

  document.getElementById("car_rentals_exchange_search_fields_values_icon_container").style.display = "flex";
  document.getElementById("car_rentals_from_where_city_input_container").style.display = "block";
  document.getElementById("car_rentals_to_where_city_input_container").style.display = "block";
  setTimeout(()=>{
    document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "42%";
    document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "42%";
  }, 100);

});

hotels_city_search_fieldset.addEventListener("focusin", (evnt)=>{
  $("#hotels_main_where_city_show_container").slideDown("fast");
});

hotels_city_search_fieldset.addEventListener("focusout", (evnt)=>{
  $("#hotels_main_where_city_show_container").slideUp("fast");
});

car_rentals_city_search_fieldset.addEventListener("focusin", (evnt)=>{
  $("#car_rentals_main_from_where_city_show_container").slideDown("fast");
});

car_rentals_city_search_fieldset.addEventListener("focusout", (evnt)=>{
  $("#car_rentals_main_from_where_city_show_container").slideUp("fast");
});

date_search_fieldset.addEventListener("focusin", (evnt)=>{
  //$("#main_from_when_date_show_container").slideDown("fast");
});

date_search_fieldset.addEventListener("focusout", (evnt)=>{
  //$("#main_from_when_date_show_container").slideUp("fast");
});

/*ui_datepicker_header.addEventListener("click", (evnt)=>{
  $("#main_from_when_date_show_container").slideDown("fast");
})*/

hotels_date_search_fieldset.addEventListener("focusin", (evnt)=>{
  //$("#hotels_main_from_when_date_show_container").slideDown("fast");
});

hotels_date_search_fieldset.addEventListener("focusout", (evnt)=>{
  //$("#hotels_main_from_when_date_show_container").slideUp("fast");
});

car_rentals_date_search_fieldset.addEventListener("focusin", (evnt)=>{
  //$("#car_rentals_main_from_when_date_show_container").slideDown("fast");
});

car_rentals_date_search_fieldset.addEventListener("focusout", (evnt)=>{
  //$("#car_rentals_main_from_when_date_show_container").slideUp("fast");
});

/*let autocomplete = new google.maps.places.Autocomplete(from_where_search_input_fld);
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
    //hotels_from_where_search_display_span.innerHTML = "<span style='color: rgb(255, 102, 0); font-size: 12px;'>Hotels from </span><span style='font-weight: bolder; font-size: 12px;'>" 
                                              //+ hotels_where_search_input_fld.value + "</span>";s
});

let autocomplete4 = new google.maps.places.Autocomplete(car_rentals_from_where_search_input_fld);
autocomplete4.addListener('place_changed', function () {
    let place = autocomplete4.getPlace();
    /*from_where_search_display_span.innerHTML = "<span style='font-size: 12px; color: rgb(255, 102, 0);'>from </span><span style='font-weight: bolder; font-size: 12px;'>" 
                                              + car_rentals_from_where_search_input_fld.value + "</span>";
});

let autocomplete5 = new google.maps.places.Autocomplete(car_rentals_to_where_search_input_fld);
autocomplete5.addListener('place_changed', function () {
    let place = autocomplete5.getPlace();
    car_rentals_to_where_search_display_span.innerHTML = "<span style='color: rgb(255, 102, 0); font-size: 12px;'>to </span><span style='font-weight: bolder; font-size: 12px;'>" 
                                              + car_rentals_to_where_search_input_fld.value + "</span>";
});*/

//$("#from_when_search_input").datepicker({minDate: 0});
//$("#to_when_search_input").datepicker({minDate: 0});
//$("#hotels_from_when_search_input").datepicker({minDate: 0});
//$("#hotels_to_when_search_input").datepicker({minDate: 0});
//$("#car_rentals_from_when_search_input").datepicker({minDate: 0});
//$("#car_rentals_to_when_search_input").datepicker({minDate: 0});

$(function() {
  $('#from_when_search_input').daterangepicker({
    opens: 'left',
    autoUpdateInput: false,
    locale: {
      cancelLabel: 'Clear'
    }
  }, function(start, end, label) {

    setTimeout(()=>{
      document.getElementById("from_when_search_input").value = start.toString().substring(0,11) +" - "+ end.toString().substring(0,11);
    }, 100);

    fligh_search_data.departure_date = start.format('YYYY-MM-DD');
    fligh_search_data.return_date = end.format('YYYY-MM-DD');

    window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));

    //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

$(function() {
  $('#hotels_from_when_search_input').daterangepicker({
    opens: 'left',
    autoUpdateInput: false,
    locale: {
        cancelLabel: 'Clear'
    }

  }, function(start, end, label) {

    setTimeout(()=>{
      document.getElementById("hotels_from_when_search_input").value = start.toString().substring(0,11) +" - "+ end.toString().substring(0,11);
    }, 100);

    //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

$(function() {
  $('#car_rentals_from_when_search_input').daterangepicker({
    opens: 'left',
    autoUpdateInput: false,
    locale: {
      cancelLabel: 'Clear'
    }
  }, function(start, end, label) {

    setTimeout(()=>{
      document.getElementById("car_rentals_from_when_search_input").value = start.toString().substring(0,11) +" - "+ end.toString().substring(0,11);
    }, 100);
    
    //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

/*var divs = document.getElementsByTagName('div');
for (var i = 0, len = divs.length; i < len; i++){
    divs[i].setAttribute('tabindex', '0');
}*/

var globalFlightId = 0;
var current_onchange_func = function(){
  return null;
};
var current_focus_out_func =function(){
  return null;
};

//Add Flight functions
var flight_search_data = {
  number_of_flights: 1,
  itinerary: [] 
};

function add_a_flight(setting_number){

  if(flight_search_data.number_of_flights > 5){
    if(setting_number === 1){
      alert("only a total of 6 flights can be added!");
    }
  }else{
    set_flight_trip_round_for_search("One-way");
    flight_search_data.number_of_flights++;
    globalFlightId++;
  }
  
  let multi_city_search_inputs_display = document.getElementById("multi_city_search_inputs_display");

  if(setting_number == 1){
    document.getElementById("multiple_city_search_option").checked = true;
    document.getElementById("total_cities_for_flight_search").innerHTML = `(${flight_search_data.number_of_flights} flights)`;
  }
  if(setting_number == 0){

    if(document.getElementById("multiple_city_search_option").checked === true){

      //this is where to reset everything

      set_flight_trip_round_for_search("Round-trip");

      flight_search_data.number_of_flights = 1;
      
      $("#multi_city_search_inputs_display").slideUp("fast");
      setTimeout(()=>{
        multi_city_search_inputs_display.innerHTML = ``;
      })
      document.getElementById("total_cities_for_flight_search").innerHTML = `(${flight_search_data.number_of_flights} default)`;
      return null;
    }

    document.getElementById("total_cities_for_flight_search").innerHTML = `(${flight_search_data.number_of_flights} flights)`;
  }

  if(flight_search_data.number_of_flights > 6){
    return null;
  }

  let div = document.createElement("div");
  div.id = "each_added_flight" + globalFlightId;
  div.classList.add("each_added_flight");
  div.style.display = "none";

  div.innerHTML = `
        <div class="each_multi_city_search_inputs_display">
        <div style="display: flex; flex-direction: row !important; padding: 0;">
          <div onclick="edit_from_where_of_added_flight(${globalFlightId});" style="margin-right: 15px;">
            <p class="edit_icon"><i class="fa fa-pencil" aria-hidden="true"></i></p>
            <p style="color:rgb(255, 102, 0); font-size: 12px; font-weight: bolder;">
            <i class="fa fa-map-marker" aria-hidden="true" style="margin-right: 5px; color: white;"></i>From Where</p>
            <p id="each_added_flight_from_where_input${globalFlightId}" style="color: white; margin: 5px; font-size: 14px">
            City/Airport
            </p>
          </div>
          <div onclick="edit_to_where_of_added_flight(${globalFlightId});" style="margin-right: 20px;">
            <p class="edit_icon"><i class="fa fa-pencil" aria-hidden="true"></i></p>
            <p  style="color:rgb(255, 102, 0); font-size: 12px; font-weight: bolder;">
            <i class="fa fa-map-marker" aria-hidden="true" style="margin-right: 5px; color: white;"></i>To Where</p>
            <p id="each_added_flight_to_where_input${globalFlightId}" style="color: white; margin: 5px; font-size: 14px">
            City/Airport
            </p>
          </div>
        </div>
        <div style="display: flex; flex-direction: row !important; padding: 0;">
          <div onclick="edit_from_when_of_added_flight(${globalFlightId});"  style="margin-right: 15px;">
            <p class="edit_icon"><i class="fa fa-pencil" aria-hidden="true"></i></p>
            <p class="edit_icon"><i class="fa fa-pencil" aria-hidden="true"></i></p>
            <p  style="color:rgb(255, 102, 0); font-size: 12px; font-weight: bolder;">
            <i class="fa fa-calendar" aria-hidden="true" style="margin-right: 5px; color: white;"></i>Depature Date</p>
            <input type="text" id="each_added_flight_from_when_input${globalFlightId}" readonly="true"
              style="min-width: 200px; color: white; margin: 5px; font-size: 14px;  background: none; border: none;" placeholder="Pick your dates" value="" />
          </div>
        </div>
        <div class="each_multi_city_search_inputs_display_close_edit_btns">
          <p><i onclick="remove_a_flight(${globalFlightId});" class="fa fa-times" aria-hidden="true"></i></p>
        </div>
      </div>
  `;

  multi_city_search_inputs_display.appendChild(div);

  setTimeout(()=>{
    $("#multi_city_search_inputs_display").slideDown("fast");
  }, 100);

  setTimeout(()=>{
    $("#"+div.id).slideDown("fast");
  }, 200);

  flight_search_data.itinerary.push({
      id: globalFlightId, 
      originLocationCode: "MAD", 
      destinationLocationCode: "PAR", 
      departureDateTimeRange: { 
        date: "2021-04-03" 
      }
  });

  initialize_date_chooser(globalFlightId);
  
}

function remove_a_flight(id){
  
  flight_search_data.itinerary = flight_search_data.itinerary.filter(each => each.id !== id);
  
  flight_search_data.number_of_flights--;
  let addedTxt = flight_search_data.number_of_flights > 1 ? `(${flight_search_data.number_of_flights} flights)` : `(${flight_search_data.number_of_flights} default)`
  document.getElementById("total_cities_for_flight_search").innerHTML = `${addedTxt}`;

  let flight_id = "each_added_flight"+id;
  $("#"+flight_id).slideUp("fast");

  setTimeout(()=>{
    document.getElementById("multi_city_search_inputs_display").removeChild(document.getElementById(flight_id));
    //console.log(document.getElementById("multi_city_search_inputs_display").contains(document.querySelector(".each_added_flight")))
  }, 200);

  setTimeout(()=>{
  if(!document.getElementById("multi_city_search_inputs_display").contains(document.querySelector(".each_added_flight"))){

      document.getElementById("multi_city_search_inputs_display").innerHTML = "";
      $("#multi_city_search_inputs_display").slideUp("fast");
      
    }
  }, 250);

}

function edit_from_where_of_added_flight(number){
  
  let thisId = ("each_added_flight_from_where_input"+number);

  let each_added_flight_from_where_input =  document.getElementById(thisId);

    $("#multi_city_search_inputs_display").slideUp("fast");

    if($(window).width() < 1026){
      $('html, body').animate({
          scrollTop: 195
        }, 500);
    }

    from_where_search_input_fld.focus();

    current_focus_out_func = function(){

      let intervalID = setInterval(()=> {

        each_added_flight_from_where_input.innerText = from_where_search_input_fld.value;

        let originIata = from_where_search_input_fld.value;
        originIata = originIata.split(")")[0];
        originIata = originIata.substring(1,originIata.length);

        flight_search_data.itinerary = flight_search_data.itinerary.map(each => {

          if(each.id === number){
            each.originLocationCode = originIata;
          }

          return each;
        });

        //console.log(flight_search_data.itinerary)

      }, 1);
        
      setTimeout(()=> {
        clearInterval(intervalID);
        $("#multi_city_search_inputs_display").slideDown("fast");
        from_where_search_input_fld.value = '';
        from_where_search_input_fld.removeEventListener("change", current_onchange_func);
        from_where_search_input_fld.removeEventListener("focusout", current_focus_out_func);
      }, 200);
    
    }

    current_onchange_func = function(){
      //console.log(each_added_flight_from_where_input);
      from_where_search_input_fld.blur();
    };

    from_where_search_input_fld.addEventListener("change", current_onchange_func);
    from_where_search_input_fld.addEventListener("focusout", current_focus_out_func);
    
}

function edit_to_where_of_added_flight(number){
  
  let thisId = ("each_added_flight_to_where_input"+number);

  let each_added_flight_to_where_input =  document.getElementById(thisId);

  $("#multi_city_search_inputs_display").slideUp();
  
  if($(window).width() < 1026){
    $('html, body').animate({
        scrollTop: 195
      }, 500);
  }

  to_where_search_input_fld.focus();

  current_focus_out_func = function(){

    let intervalID = setInterval(()=> {
      each_added_flight_to_where_input.innerText = to_where_search_input_fld.value;
      
      let destIata = to_where_search_input_fld.value;
      destIata = destIata.split(")")[0];
      destIata = destIata.substring(1,destIata.length);

      flight_search_data.itinerary = flight_search_data.itinerary.map(each => {

        if(each.id === number){
          each.destinationLocationCode = destIata;
        }

        return each;
      });

      //console.log(flight_search_data.itinerary)
    }, 1);

    setTimeout(()=> {
      clearInterval(intervalID);
      $("#multi_city_search_inputs_display").slideDown("fast");
      to_where_search_input_fld.value = '';
      to_where_search_input_fld.removeEventListener("change",current_onchange_func);
      to_where_search_input_fld.removeEventListener("focusout",current_focus_out_func);
    }, 200);
  }
  current_onchange_func = function(){
    //console.log(each_added_flight_to_where_input);
    to_where_search_input_fld.blur();
    
  }

  to_where_search_input_fld.addEventListener("change", current_onchange_func);
  to_where_search_input_fld.addEventListener("focusout",current_focus_out_func);
  
}

function edit_from_when_of_added_flight(number){
  //flights_search_tickets_form_container.style.opacity = 0;
}

function edit_to_when_of_added_flight(number){
  //flights_search_tickets_form_container.style.opacity = 0;
}

function initialize_date_chooser(number){

  let first_input_Id = "each_added_flight_from_when_input" + number;

  $(function() {
    $('#'+first_input_Id).daterangepicker({
      singleDatePicker: true,
      showDropdowns: true
    }, function(start, end, label) {

      setTimeout(()=>{
        document.getElementById(first_input_Id).value = start.toString().substring(0,11);

        let adate = fligh_search_data.departure_date = start.format('YYYY-MM-DD');

        flight_search_data.itinerary = flight_search_data.itinerary.map(each => {

          if(each.id === number){
            each.departureDateTimeRange.date = adate;
          }

          return each;
        });

      }, 100);

      //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
    });
  });
}


//default onchange functions for input fields
from_where_search_input_fld.addEventListener("change", ()=>{
  from_where_search_input_fld.blur();
})
to_where_search_input_fld.addEventListener("change", ()=>{
  to_where_search_input_fld.blur();
})
hotels_where_search_input_fld.addEventListener("change", ()=>{
  hotels_where_search_input_fld.blur();
})
car_rentals_from_where_search_input_fld.addEventListener("change", ()=>{
  car_rentals_from_where_search_input_fld.blur();
})
car_rentals_to_where_search_input_fld.addEventListener("change", ()=>{
  car_rentals_to_where_search_input_fld.blur();
})


var top_noti_fication_close_btn = document.getElementById("top_noti_fication_close_btn");

top_noti_fication_close_btn.addEventListener("click", ()=>{
  close_main_round_trip_type_options_btn.style.top = "90px";
  $("#top_noti_fication_div").slideUp("fast");
});

$(document).ready(()=>{
  
  setTimeout(()=>{
    $("#top_noti_fication_div").slideDown("fast");
    
  }, 300)

  setTimeout(()=>{

    let top_noti_height = document.getElementById("top_noti_fication_div").offsetHeight;
    let top = (top_noti_height + 90);
    //alert(top_noti_height)
    //alert(top)
    close_main_round_trip_type_options_btn.style.top = `${top}px`;
    
  },600)
});


function show_all_event_details(main_evnt_iD, number, img_url, name, timezone, date, price, info, url, venue, promoter){
  $("#main_each_popular_city_all_info"+ number).slideDown("fast");
  document.getElementById("show_all_evnt_detail_image_"+number).style.backgroundImage = "url("+img_url+")";
  document.getElementById("show_all_evnt_detail_event_name_"+number).innerText = name;
  document.getElementById("show_all_evnt_detail_event_time_zone_"+number).innerText = timezone;
  document.getElementById("show_all_evnt_detail_event_date_"+number).innerText = date
  document.getElementById("show_all_evnt_detail_event_price_range_"+number).innerText = price;
  document.getElementById("show_all_evnt_detail_attend_event_btn_"+number).href = url;
  document.getElementById("show_all_evnt_detail_venue_"+number).innerText = venue;
  document.getElementById("show_all_evnt_detail_promoter_"+number).innerText = promoter;
  if(info === 'undefined'){
    document.getElementById("show_all_evnt_detail_event_info_"+number).innerHTML = 
                                                                      "<i style='margin-right: 5px; color: red;' aria-hidden='true' class='fa fa-exclamation-triangle'></i>"+
                                                                       "no information added to this event. <br/> <br/>" +
                                                                      "This section will be used to show any additional notes the event organizers add to inform you";
  }else{
    document.getElementById("show_all_evnt_detail_event_info_"+number).innerText = info.replaceAll("#$@@#@$#","'");
  }
  
}

function hide_all_event_details(number){
  $(("#main_each_popular_city_all_info"+number)).slideUp("fast");
}

//hide or show right side docker
function show_notification_icons(){
  document.getElementById("events_notification_more").style.transform = "rotate(0deg)";
  document.getElementById("events_notification_more").style.overflow = "visible";
  document.getElementById("events_notification_more").style.height = "auto";
  document.getElementById("events_notification_show_more_btn").style.transform = "rotate(180deg)";
  document.getElementById("events_notification_show_more_btn_container").style.borderTop = "1px solid #094470";
  document.getElementById("top_level_notification_counter").style.display = "none";
}

function hide_notification_icons(){
  document.getElementById("events_notification_more").style.transform = "rotate(180deg)";
  document.getElementById("events_notification_more").style.overflow = "hidden";
  document.getElementById("events_notification_more").style.height = "";
  document.getElementById("events_notification_show_more_btn").style.transform = "rotate(0deg)";
  document.getElementById("events_notification_show_more_btn_container").style.borderTop = "none";
  document.getElementById("top_level_notification_counter").style.display = "block";
}

document.getElementById("events_notification_show_more_btn_container").addEventListener("click", ()=>{
  //document.getElementById("events_notification_show_more_btn").style.transform = "rotate(180deg)";
  if(document.getElementById("events_notification_more").style.height === ""){
    show_notification_icons();
  }else{
    hide_notification_icons();
  }
});


//travel quotes functions
var quotes = [
  {
    quote: "The gladdest moment in human life is a departure into unknown lands",
     authur: "Sir Richard Burton"
  },
  {
    quote: "Be fearless in the pursuit of what sets your soul on fire",
     authur: "Jennifer Lee"
  },
  {
    quote: "Travel makes one modest. You see what a tiny place you occupy in the world",
     authur: "Gustav Flaubert"
  },
  {
    quote: "Traveling – it leaves you speechless, then turns you into a storyteller",
     authur: "Ibn Battuta"
  },
  {
    quote: "All you need to know is that it’s possible",
     authur: "Wolf"
  },
  {
    quote: "The journey not the arrival matters",
     authur: "T.S. Eliot"
  },
  {
    quote: "Travel and change of place impart new vigor to the mind",
     authur: "Seneca"
  }
];

var quotesInterval = setInterval(()=>{
  show_a_quote();
}, 5000);

var show_a_quote = ()=>{

  document.getElementById("quote_elem").style.opacity = 0;

  let qouteObj = quotes[Math.floor(Math.random()*quotes.length)];

  setTimeout(()=>{

    document.getElementById("quote_elem").innerHTML =
      `
      <p>" ${qouteObj.quote} "</p>
      <p style='font-size: 18px; margin-top: 20px; color: rgba(232,142,12)'>- ${qouteObj.authur}</p>
      `;

    document.getElementById("quote_elem").style.opacity = 1;
  }, 600);
  
}
show_a_quote();

var current_qoute_index = 0;
function show_next_quote(){

  clearInterval(quotesInterval);

  document.getElementById("quote_elem").style.opacity = 0;

  current_qoute_index++;
  if(current_qoute_index > (quotes.length - 1)){
      current_qoute_index = 0;
  }
      
  let qouteObj = quotes[current_qoute_index];

  setTimeout(()=>{

    document.getElementById("quote_elem").innerHTML =
      `
      <p>" ${qouteObj.quote} "</p>
      <p style='font-size: 18px; margin-top: 20px; color: rgba(232,142,12)'>- ${qouteObj.authur}</p>
      `;

    document.getElementById("quote_elem").style.opacity = 1;
  }, 600);
  
  /*setTimeout(()=> {

    quotesInterval = setInterval(()=>{
      show_a_quote();
    }, 5000);

  },15000);*/
  
}

function show_previous_quote(){
  
  clearInterval(quotesInterval);

  document.getElementById("quote_elem").style.opacity = 0;

  current_qoute_index--;

  if(current_qoute_index < 0){
    current_qoute_index = (quotes.length - 1);
  }
  
  let qouteObj = quotes[current_qoute_index];

  setTimeout(()=>{

    document.getElementById("quote_elem").innerHTML =
      `
      <p>" ${qouteObj.quote} "</p>
      <p style='font-size: 18px; margin-top: 20px; color: rgba(232,142,12)'>- ${qouteObj.authur}</p>
      `;

    document.getElementById("quote_elem").style.opacity = 1;
  }, 600);
  
  /*setTimeout(()=> {

    quotesInterval = setInterval(()=>{
      show_a_quote();
    }, 5000);

  },15000);*/

}

//help and support scripts
function toggle_show_help_and_support_div(){
  $("#help_and_support_chat_box").toggle("up");
  hide_notification_icons();
  setTimeout(()=>{
    document.getElementById("chat_bot_response_msg").style.display = "block";
    document.getElementById("bot_is_thinking_loader").style.display = "none";
  },4000);
  setTimeout(()=>{
    document.getElementById("how_many_i_help_you").style.display = "block";
  }, 4500);
}

function toggle_show_price_alerts_div(){
  $("#price_alerts_div").toggle("up");
  hide_notification_icons();
}

function toggle_show_your_bookings_div(){
  $("#your_bookings_div").toggle("up");
  hide_notification_icons();
}

function toggle_show_whats_new_div(){
  $("#whats_new_div").toggle("up");
  hide_notification_icons();
}

function toggle_show_your_trips_div(){
  $("#your_trips_div").toggle("up");
  hide_notification_icons();
}


//login functions

function toggle_show_login_div(){
  $("#sign_in_container").toggle("up");
  if(document.getElementById("sign_in_container").style.display === "block"){
    document.getElementById("sign_in_container").style.display = "flex";
  }
}

function mobile_toggle_show_login_div(){

  top_logo_menu_icon.style.transform = "rotate(360deg)";
  top_logo_menu_icon.style.marginTop = "23px";
  top_logo_menu_icon.style.marginBottom = "0"
  header_menu_dropdowns.style.display = "none";
  mobile_main_menu_items.style.visibility = "hidden";
  mobile_main_menu_items.style.opacity = "0";

  $("#sign_in_container").toggle("up");
  if(document.getElementById("sign_in_container").style.display === "block"){
    document.getElementById("sign_in_container").style.display = "flex";
  }
}

function activate_login_fld(number){
  document.getElementById(("login_fld_container_"+number)).style.border = "2px solid rgb(231, 124, 2)";
  document.getElementById(("login_fld_title_"+number)).style.paddingTop = "10px";
  document.getElementById(("login_fld_title_"+number)).style.paddingLeft = "10px";
  document.getElementById(("login_fld_title_"+number)).style.color = "rgb(231, 124, 2)"
  document.getElementById(("login_fld_"+number)).style.border = "none";
 }
 
 function de_activate_login_fld(number){
  document.getElementById(("login_fld_"+number)).style.border = "1px solid #d4d4d4";
  document.getElementById(("login_fld_container_"+number)).style.border = "none";
  document.getElementById(("login_fld_title_"+number)).style.padding = 0;
  document.getElementById(("login_fld_title_"+number)).style.color = "rgb(74, 101, 112)";
 }

 function toggle_show_login_or_signup_forms(){
   let sign_up_form_container = document.getElementById("sign_up_form_container");
   let toggle_show_login_or_signup_formsbtn = document.getElementById("toggle_show_login_or_signup_formsbtn");
   let login_and_signup_title = document.getElementById("login_and_signup_title");

   if(sign_up_form_container.style.display === "none"){
    $("#login_form_container").slideUp("fast");
    $("#sign_up_form_container").slideDown("fast");
    toggle_show_login_or_signup_formsbtn.innerHTML = '<i class="fa fa-sign-in" aria-hidden="true"></i>Already have an account ? (login)';
    login_and_signup_title.innerHTML = 'Sign Up and Save';
   }else{
    $("#login_form_container").slideDown("fast");
    $("#sign_up_form_container").slideUp("fast");
    toggle_show_login_or_signup_formsbtn.innerHTML = '<i class="fa fa-user-plus" aria-hidden="true"></i>dont have an account ? (sign up)';
    login_and_signup_title.innerHTML = "Login and Save";
   }
   
 }

 var most_searched_for_cities = [
    [
      {name: "Abuja", img: "./images/Nigerian-abuja-city.jpg", quote: "You cannot come to a Nigerian restaurant without having pepper soup.", quote_author: "Ben Okri", input_city_name: "Nnamdi Azikiwe Intl - Abuja", iata_code: "ABV"},
      {name: "Beijing", img: "./images/Beijin_China.jpg", quote: "Beijing has a glut of charming and traditional or brash and luxurious places to stay.", quote_author: "Evan Osnos", input_city_name: "Beijing Capital Intl - Beijing", iata_code: "PEK"},
      {name: "Liverpool", img: "./images/Liverpool-City.jpg", quote: "A good place to wash your hair, Liverpool. Good soft water.", quote_author: "John Lennon", input_city_name: "Liverpool John Lennon - Liverpool", iata_code: "LPL"},
      {name: "Berlin", img: "./images/Berlin-City.jpg", quote: "Germans don't speak in a German accent, they just speak German.", quote_author: "Daniel Day-Lewis", input_city_name: "Berlin-Tempelhof Intl - Berlin", iata_code: "THF"}
    ],
   
    [
      {name: "Toronto", img: "./images/Toronto-Canada.jpg", quote: "In Toronto, the film festival is like a carnival… entire families come to it.", quote_author: "Vetrimaaran", input_city_name: "Lester B. Pearson Intl - Toronto", iata_code: "YYZ"},
      {name: "Madrid", img: "./images/Madrid.jpg", quote: "We're Real Madrid - and being successful is part of our DNA.", quote_author: "Toni Kroos", input_city_name: "Adolfo Suárez Madrid–Barajas - Madrid", iata_code: "MAD"},
      {name: "Riyadh", img: "./images/Riyadh.jpg", quote: "I'm telling you, you can't compare Saudi Arabia to other countries.", quote_author: "Al-Waleed bin Talal", input_city_name: "King Khaled Intl - Riyadh", iata_code: "RUH"},
      {name: "Canberra", img: "./images/Canberra.jpg", quote: "Canberra always had a great sense of community when I was there.", quote_author: "Ellyse Perry", input_city_name: "Canberra Intl - Canberra", iata_code: "CBR"},
    ],

    [
      {name: "Amsterdam", img: "./images/Amsterdam.jpg", quote: "Amsterdam is like the rings of a tree: It gets older as you get closer to the centre.", quote_author: "John Green", input_city_name: "Amsterdam  Schiphol - Amsterdam", iata_code: "AMS"},
      {name: "Rome", img: "./images/Rome.jpg", quote: "Rome is the city of echoes, the city of illusions, and the city of yearning.", quote_author: "Giotto di Bondone", input_city_name: "Ciampino–G. B. Pastine Intl - Rome", iata_code: "CIA"},
      {name: "Cairo", img: "./images/Cairo.jpg", quote: "When we look back at the Mayans or ancient Egypt, we look at their art.", quote_author: "Robert Wilson", input_city_name: "Cairo Intl - Cairo", iata_code: "CAI"},
      {name: "Milan", img: "./images/Milan.jpg", quote: "I grew up in Milan during the golden age of designers. There was fashion all around.", quote_author: "Fabio Lanzoni", input_city_name: "Milano Linate - Milan", iata_code: "LIN"}
    ],

    [
      {name: "Mumbai", img: "./images/Mumbai.jpg", quote: "When I came to Mumbai, I had no experience in acting 'til I actually did it.", quote_author: "Shaheer Sheikh", input_city_name: "Chhatrapati Shivaji Intl - Mumbai", iata_code: "BOM"},
      {name: "Cape Town", img: "./images/CapeTown.jpg", quote: "It's a blessing that South Africa has a man like Nelson Mandela.", quote_author: "Desmond Tutu", input_city_name: "Cape Town Intl - Cape Town", iata_code: "CPT"},
      {name: "Hong Kong", img: "./images/Hong_Kong.jpg", quote: "Give Hong Kong to an Artist. He can use it. It can be poetised.", quote_author: "Baris Gencel", input_city_name: "Hong Kong Intl - Hong Kong", iata_code: "HKG"},
      {name: "Abidjan", img: "./images/Abidjan-Ivory-Coast.jpg", quote: "this is the test quote. Quite useful", quote_author: "test_author", input_city_name: "Port Bouet - Abidjan", iata_code: "ABJ"}
    ]
 ];
 var mcs_number = 0;
 function load_more_popular_cities(){

  let margin_top = "0";
  if($(window).width() > 1000){
    margin_top = "20px";
  }

  if(mcs_number+1 > most_searched_for_cities.length){
    
    document.getElementById("more_popular_cites_btn").style.display = "none";
    return null;

  }
  let cities_row = most_searched_for_cities[mcs_number];

   document.getElementById("load_more_popular_cities_container").innerHTML += `

        <div id="more_popular_city_set${mcs_number}" style="display: none; margin-top: ${margin_top} !important;" class="most_searched_cities_list_container">
          <div class="each_popular_city">
            <img style="border-top-right-radius: 5px; border-top-left-radius: 5px;" src="${cities_row[0].img}" alt="" />
            <div class="each_popular_city_desc">
              <p
                style="font-weight: bolder; color: #023057; margin: 10px 0;"
              >
              ${cities_row[0].name}
              </p>
              <p style="color: #3d5970; font-size: 13px; text-align: justify; margin-bottom: 10px;">
                ${cities_row[0].quote}
                <br/><br />
                <span style="margin-top: 5px; margin-left: 20px; font-size: 13px; color: #855600; font-weight: bolder;">
                  - ${cities_row[0].quote_author}
                </span>
              </p>
              <div style="cursor: pointer; margin-top: 20px; display: flex; flex-direction: row !important; border-radius: 4px; overflow: hidden !important;">
                <div onclick="select_popular_city_for_flight_search('${cities_row[0].iata_code}', '${cities_row[0].input_city_name}');" style="padding: 15px 10px; width: calc(50% - 20px) !important; background-color:rgb(8, 77, 122);  color: white; font-size: 13px; text-align: center;">
                  Search Flights
                </div>
                <div onclick="select_popular_city_for_hotel_search('${cities_row[0].iata_code}', '${cities_row[0].input_city_name}');" style="padding: 15px 10px; width: calc(50% - 20px) !important; background-color:rgb(0, 177, 139); color: white; font-size: 13px; text-align: center;">
                  Search Hotels
                </div>
              </div>
            </div>
          </div>
          <div class="each_popular_city">
            <img style="border-top-right-radius: 5px; border-top-left-radius: 5px;" src="${cities_row[1].img}"  alt=""/>
            <div class="each_popular_city_desc">
              <p
                style="font-weight: bolder; color: #023057; margin: 10px 0;"
              >
              ${cities_row[1].name}
              </p>
              <p style="color: #3d5970; font-size: 13px; text-align: justify; margin-bottom: 10px;">
                ${cities_row[1].quote}
                <br/><br/>
                <span style="margin-top: 5px; margin-left: 20px; font-size: 13px; color: #855600; font-weight: bolder;">
                  - ${cities_row[1].quote_author}
                </span>
              </p>
              <div style="cursor: pointer; margin-top: 20px; display: flex; flex-direction: row !important; border-radius: 4px; overflow: hidden !important;">
                <div onclick="select_popular_city_for_flight_search('${cities_row[1].iata_code}', '${cities_row[1].input_city_name}');" style="padding: 15px 10px; width: calc(50% - 20px) !important; background-color:rgb(8, 77, 122);  color: white; font-size: 13px; text-align: center;">
                  Search Flights
                </div>
                <div onclick="select_popular_city_for_hotel_search('${cities_row[1].iata_code}', '${cities_row[1].input_city_name}');" style="padding: 15px 10px; width: calc(50% - 20px) !important; background-color:rgb(0, 177, 139); color: white; font-size: 13px; text-align: center;">
                  Search Hotels
                </div>
              </div>
            </div>
          </div>
          <div class="each_popular_city">
            <img style="border-top-right-radius: 5px; border-top-left-radius: 5px;" src="${cities_row[2].img}" alt=""/>
            <div class="each_popular_city_desc">
              <p
                style="font-weight: bolder; color: #023057; margin: 10px 0;"
              >
              ${cities_row[2].name}
              </p>
              <p style="color: #3d5970; font-size: 13px; text-align: justify; margin-bottom: 10px;">
                ${cities_row[2].quote}
                <br/><br/>
                <span style="margin-top: 5px; margin-left: 20px; font-size: 13px; color: #855600; font-weight: bolder;">
                  - ${cities_row[2].quote_author}
                </span>
              </p>
              <div style="cursor: pointer; margin-top: 20px; display: flex; flex-direction: row !important; border-radius: 4px; overflow: hidden !important;">
                <div onclick="select_popular_city_for_flight_search('${cities_row[2].iata_code}', '${cities_row[2].input_city_name}');" style="padding: 15px 10px; width: calc(50% - 20px) !important; background-color:rgb(8, 77, 122);  color: white; font-size: 13px; text-align: center;">
                  Search Flights
                </div>
                <div onclick="select_popular_city_for_hotel_search('${cities_row[2].iata_code}', '${cities_row[2].input_city_name}');" style="padding: 15px 10px; width: calc(50% - 20px) !important; background-color:rgb(0, 177, 139); color: white; font-size: 13px; text-align: center;">
                  Search Hotels
                </div>
              </div>
            </div>
          </div>
          <div class="each_popular_city">
            <img style="border-top-right-radius: 5px; border-top-left-radius: 5px;" src="${cities_row[3].img}" alt=""/>
            <div class="each_popular_city_desc">
              <p
                style="font-weight: bolder; color: #023057; margin: 10px 0;"
              >
              ${cities_row[3].name}
              </p>
              <p style="color: #3d5970; font-size: 13px; text-align: justify; margin-bottom: 10px;">
              ${cities_row[3].quote} 
                <br/><br/>
                <span style="margin-top: 5px; margin-left: 20px; font-size: 13px; color: #855600; font-weight: bolder;">
                  - ${cities_row[3].quote_author}
                </span>
              </p>
              <div style="cursor: pointer; margin-top: 20px; display: flex; flex-direction: row !important; border-radius: 4px; overflow: hidden !important;">
                <div onclick="select_popular_city_for_flight_search('${cities_row[3].iata_code}', '${cities_row[3].input_city_name}');" style="padding: 15px 10px; width: calc(50% - 20px) !important; background-color:rgb(8, 77, 122);  color: white; font-size: 13px; text-align: center;">
                  Search Flights
                </div>
                <div onclick="select_popular_city_for_hotel_search('${cities_row[3].iata_code}', '${cities_row[3].input_city_name}');" style="padding: 15px 10px; width: calc(50% - 20px) !important; background-color:rgb(0, 177, 139); color: white; font-size: 13px; text-align: center;">
                  Search Hotels
                </div>
              </div>
            </div>
          </div>
        </div>
   `;

   setTimeout(()=>{
     
    $(("#more_popular_city_set"+mcs_number)).slideDown("fast");
    mcs_number++;

   }, 300);

   
 }

 if($(window).width() > 1000){
  load_more_popular_cities();
 }

function select_popular_city_for_flight_search(iata_code, city_name){

  show_flights_search_forms_from_main_menu();

  fligh_search_data.destination_iata = iata_code;
  window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));

  to_where_search_input_fld.value = `(${iata_code}) - ${city_name}`;

  setTimeout(()=>{
    from_where_search_input_fld.value = "";
    from_where_search_input_fld.placeholder = "where are you flying from";
    from_where_search_input_fld.focus();
  }, 200);
  

  $('html, body').animate({
      scrollTop: 60
    }, 500);
  
}

function select_popular_city_for_hotel_search(iata_code, city_name){

  show_hotels_search_forms_from_main_menu();

  hotel_search_data.city = iata_code;
  window.localStorage.setItem("hotels_post_data", JSON.stringify(hotel_search_data));

  hotels_where_search_input_fld.value = `${city_name}`;

  $('html, body').animate({
      scrollTop: 60
    }, 500);
  
}

function toggle_show_hide_cheap_hotel_view_full_profile_info(){
  $("#cheap_hotel_view_full_profile_info").toggle("up");
}

//all code below needs replicated to homepage
function view_hotels_full_profile_info(){
  
  show_loading_card_on_book_hotel_view_full_profile_infor_row_set_item();
  setTimeout(()=>{
      show_book_hotel_view_full_profile_ratings_infor();
      show_book_hotel_view_full_profile_amenities_infor();
      show_book_hotel_view_full_profile_sentiments_infor();
      show_book_hotel_view_full_profile_contacts_infor();
      show_book_hotel_view_full_profile_photos();
      show_book_hotel_view_full_profile_child_policies_infor();
      show_book_hotel_view_full_profile_whats_nearby_infor();
      show_book_hotel_view_full_profile_public_transit_infor();
      show_book_hotel_view_full_profile_other_infor();
      show_view_full_hotel_profile_reviews_list();
  }, 1000);
  
}

function show_book_hotel_view_full_profile_ratings_infor(){
  document.getElementById("book_hotel_view_full_profile_ratings_infor").innerHTML = `
      <p style="color: white; font-size: 14px; text-align: center; margin-bottom: 20px; font-weight: bolder; letter-spacing: 1px;;">
      Rating/Reviews</p>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
          <p style="color: rgb(155, 238, 220); font-size: 14px;">Rating:</p>
          <p style="color: rgb(250, 187, 187);">&#9733; &#9733; &#9733; &#9733; &#9733;</p>
      </div>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
          <p style="color: rgb(155, 238, 220); font-size: 14px;">Number of ratings:</p>
          <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">121 Ratings</p>
      </div>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
          <p style="color: rgb(155, 238, 220); font-size: 14px;">Number of reviews:</p>
          <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">145 Reviews</p>
      </div>
      <div style="padding: 10px; border-radius: 4px; margin-top: 15px; border:rgb(250, 187, 187) 1px solid;">
          <p style="font-size: 14px; margin-bottom: 10px; color:rgb(152, 197, 214); font-weight: bolder; letter-spacing: 1px;">
          Perfect for a 1-week stay</p>
          <div style="display: flex; flex-direction: row !important; margin-bottom: 5px;">
          <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
              <i style="color:rgb(86, 223, 193);" class="fa fa-map-marker" aria-hidden="true"></i></p>
          <p style="color: rgb(250, 187, 187); font-size: 14px;">Located in the heart of New York, this hotel has an excellent location score of 9.5</p>
          </div>
          <div style="display: flex; flex-direction: row !important;">
          <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
              <i style="color:rgb(86, 223, 193);" class="fa fa-bed" aria-hidden="true"></i></p>
          <p style="color: rgb(250, 187, 187); font-size: 14px;">Want a great night's sleep? This hotel was highly-rated for its very comfy beds.</p>
          </div>
      </div>
  `;
}

function show_book_hotel_view_full_profile_amenities_infor(){
  document.getElementById("book_hotel_view_full_profile_amenities_infor").innerHTML = `
      <p style="color: white; font-size: 14px; text-align: center; margin-bottom: 20px; font-weight: bolder; letter-spacing: 1px;;">
      Amenities</p>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
      <p style="color: rgb(155, 238, 220); font-size: 14px;"><i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
      <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">Wifi<i  style="margin-left: 5px;" class="fa fa-wifi" aria-hidden="true"></i></p>
      </div>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
      <p style="color: rgb(155, 238, 220); font-size: 14px;"><i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
      <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">Coffee<i  style="margin-left: 5px;" class="fa fa-coffee" aria-hidden="true"></i></p>
      </div>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
      <p style="color: rgb(155, 238, 220); font-size: 14px;"><i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
      <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">Laundry Service</p>
      </div>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
      <p style="color: rgb(155, 238, 220); font-size: 14px;"><i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
      <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">business center</p>
      </div>
  `;
}

function show_book_hotel_view_full_profile_sentiments_infor(){
  document.getElementById("book_hotel_view_full_profile_sentiments_infor").innerHTML = `
      <p style="color: white; font-size: 14px; text-align: center; margin-bottom: 20px; font-weight: bolder; letter-spacing: 1px;;">
      Sentiments</p>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
      <p style="color: rgb(155, 238, 220); font-size: 14px;">Sleep Quality:</p>
      <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">80%</p>
      </div>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
      <p style="color: rgb(155, 238, 220); font-size: 14px;">Service:</p>
      <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">66%</p>
      </div>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
      <p style="color: rgb(155, 238, 220); font-size: 14px;">Facilities:</p>
      <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">74%</p>
      </div>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
      <p style="color: rgb(155, 238, 220); font-size: 14px;">Staff:</p>
      <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">60%</p>
      </div>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
      <p style="color: rgb(155, 238, 220); font-size: 14px;">Internet:</p>
      <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">78%</p>
      </div>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
      <p style="color: rgb(155, 238, 220); font-size: 14px;">Swimming Pool</p>
      <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">90%</p>
      </div>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
      <p style="color: rgb(155, 238, 220); font-size: 14px;">Catering:</p>
      <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">60%</p>
      </div>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
      <p style="color: rgb(155, 238, 220); font-size: 14px;">Points of Interest:</p>
      <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">56%</p>
      </div>
  `;
}
function show_book_hotel_view_full_profile_contacts_infor(){
  document.getElementById("book_hotel_view_full_profile_contacts_infor").innerHTML = `
      <p style="color: white; font-size: 14px; text-align: center; margin-bottom: 20px; font-weight: bolder; letter-spacing: 1px;;">
      Contact</p>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
      <p style="color: rgb(155, 238, 220); font-size: 14px;">
          <i  style="margin-right: 5px;" class="fa fa-phone" aria-hidden="true"></i>Phone:</p>
      <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">1-212-7479222</p>
      </div>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
      <p style="color: rgb(155, 238, 220); font-size: 14px;">
          <i  style="margin-right: 5px;" class="fa fa-fax" aria-hidden="true"></i>Fax:</p>
      <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">1-719-5479352</p>
      </div>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
      <p style="color: rgb(155, 238, 220); font-size: 14px;">
          <i  style="margin-right: 5px;" class="fa fa-envelope" aria-hidden="true"></i>Email:</p>
      <p style="color: rgb(250, 187, 187); font-size: 14px; text-align: right;">somehotel@gmail.com</p>
      </div>
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
function show_book_hotel_view_full_profile_public_transit_infor(){
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
      Closest Airports</p>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
          <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
          <i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
          <p style="color: rgb(250, 187, 187); font-size: 14px;">LaGuardia Airport</p>
      </div>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
          <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
          <i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
          <p style="color: rgb(250, 187, 187); font-size: 14px;">Newark Liberty International Airport</p>
      </div>
      <div style="display: flex; flex-direction: row !important; justify-content: space-between;">
          <p style="color: rgb(155, 238, 220); font-size: 14px; margin-right: 10px;">
          <i style="color:rgb(86, 223, 193);" class="fa fa-check" aria-hidden="true"></i></p>
          <p style="color: rgb(250, 187, 187); font-size: 14px;">John F. Kennedy International Airport</p>
      </div>
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