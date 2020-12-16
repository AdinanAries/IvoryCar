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
})

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
    
})
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
})
from_where_search_input_fld.addEventListener("focusout", ()=>{

  /*if(flight_search_trip_round.t_round === "One-way"){
    $("#main_from_where_city_show_container").slideUp("fast");
    return null;
  }*/
    
  setTimeout(()=>{
    document.getElementById("flights_auto_complete_list").innerHTML = "";
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
})
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

})

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

})
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

})
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

})
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

})
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
  //$("#main_from_when_date_show_container").slideDown("fast");
})
date_search_fieldset.addEventListener("focusout", (evnt)=>{
  //$("#main_from_when_date_show_container").slideUp("fast");
})
/*ui_datepicker_header.addEventListener("click", (evnt)=>{
  $("#main_from_when_date_show_container").slideDown("fast");
})*/

hotels_date_search_fieldset.addEventListener("focusin", (evnt)=>{
  //$("#hotels_main_from_when_date_show_container").slideDown("fast");
})
hotels_date_search_fieldset.addEventListener("focusout", (evnt)=>{
  //$("#hotels_main_from_when_date_show_container").slideUp("fast");
})

car_rentals_date_search_fieldset.addEventListener("focusin", (evnt)=>{
  //$("#car_rentals_main_from_when_date_show_container").slideDown("fast");
})
car_rentals_date_search_fieldset.addEventListener("focusout", (evnt)=>{
  //$("#car_rentals_main_from_when_date_show_container").slideUp("fast");
})

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
});*/

let autocomplete3 = new google.maps.places.Autocomplete(hotels_where_search_input_fld);
autocomplete3.addListener('place_changed', function () {
    let place = autocomplete3.getPlace();
    /*hotels_from_where_search_display_span.innerHTML = "<span style='color: rgb(255, 102, 0); font-size: 12px;'>Hotels from </span><span style='font-weight: bolder; font-size: 12px;'>" 
                                              + hotels_where_search_input_fld.value + "</span>";*/
});

let autocomplete4 = new google.maps.places.Autocomplete(car_rentals_from_where_search_input_fld);
autocomplete4.addListener('place_changed', function () {
    let place = autocomplete4.getPlace();
    /*from_where_search_display_span.innerHTML = "<span style='font-size: 12px; color: rgb(255, 102, 0);'>from </span><span style='font-weight: bolder; font-size: 12px;'>" 
                                              + car_rentals_from_where_search_input_fld.value + "</span>";*/
});

let autocomplete5 = new google.maps.places.Autocomplete(car_rentals_to_where_search_input_fld);
autocomplete5.addListener('place_changed', function () {
    let place = autocomplete5.getPlace();
    car_rentals_to_where_search_display_span.innerHTML = "<span style='color: rgb(255, 102, 0); font-size: 12px;'>to </span><span style='font-weight: bolder; font-size: 12px;'>" 
                                              + car_rentals_to_where_search_input_fld.value + "</span>";
});

//$("#from_when_search_input").datepicker({minDate: 0});
//$("#to_when_search_input").datepicker({minDate: 0});
//$("#hotels_from_when_search_input").datepicker({minDate: 0});
//$("#hotels_to_when_search_input").datepicker({minDate: 0});
//$("#car_rentals_from_when_search_input").datepicker({minDate: 0});
//$("#car_rentals_to_when_search_input").datepicker({minDate: 0});

$(function() {
  $('#from_when_search_input').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {

    setTimeout(()=>{
      document.getElementById("from_when_search_input").value = start.toString().substring(0,11) +" - "+ end.toString().substring(0,11);
    }, 100);
    
    //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

$(function() {
  $('#hotels_from_when_search_input').daterangepicker({
    opens: 'left'
  }, function(start, end, label) {

    setTimeout(()=>{
      document.getElementById("hotels_from_when_search_input").value = start.toString().substring(0,11) +" - "+ end.toString().substring(0,11);
    }, 100);

    //console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
  });
});

$(function() {
  $('#car_rentals_from_when_search_input').daterangepicker({
    opens: 'left'
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
  number_of_flights: 1
};

function add_a_flight(setting_number){

  flight_search_data.number_of_flights++;

  globalFlightId++;

  let multi_city_search_inputs_display = document.getElementById("multi_city_search_inputs_display");

  if(setting_number == 1){
    document.getElementById("multiple_city_search_option").checked = true;
    document.getElementById("total_cities_for_flight_search").innerHTML = `(${flight_search_data.number_of_flights} flights)`;
  }
  if(setting_number == 0){

    if(document.getElementById("multiple_city_search_option").checked === true){

      //this is where to reset everything

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

  let div = document.createElement("div");
  div.id = "each_added_flight" + globalFlightId;
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
            <i class="fa fa-calendar" aria-hidden="true" style="margin-right: 5px; color: white;"></i>Depature - Return Dates</p>
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

  initialize_date_chooser(("each_added_flight_from_when_input"+globalFlightId));
  
}

function remove_a_flight(id){

  flight_search_data.number_of_flights--;
  let addedTxt = flight_search_data.number_of_flights > 1 ? `(${flight_search_data.number_of_flights} flights)` : `(${flight_search_data.number_of_flights} default)`
  document.getElementById("total_cities_for_flight_search").innerHTML = `${addedTxt}`;

  let flight_id = "each_added_flight"+id;
  $("#"+flight_id).slideUp("fast");
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
      }, 1)
      
      setTimeout(()=> {
        clearInterval(intervalID);
        $("#multi_city_search_inputs_display").slideDown("fast");
        from_where_search_input_fld.value = '';
        from_where_search_input_fld.removeEventListener("change", current_onchange_func);
        from_where_search_input_fld.removeEventListener("focusout", current_focus_out_func);
      }, 200)
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

function initialize_date_chooser(first_input_Id){
  $(function() {
    $('#'+first_input_Id).daterangepicker({
      opens: 'left'
    }, function(start, end, label) {

      setTimeout(()=>{
        document.getElementById(first_input_Id).value = start.toString().substring(0,11) +" - "+ end.toString().substring(0,11);
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
  $("#top_noti_fication_div").slideUp("fast");
});

/*$(document).ready(()=>{
  setTimeout(()=>{
    $("#top_noti_fication_div").slideDown("fast");
  }, 300)
});*/


function show_all_event_details(main_evnt_iD, number, img_url, name, timezone, date, price, info, url){
  $("#main_each_popular_city_all_info"+ number).slideDown("fast");
  document.getElementById("show_all_evnt_detail_image_"+number).style.backgroundImage = "url("+img_url+")";
  document.getElementById("show_all_evnt_detail_event_name_"+number).innerText = name;
  document.getElementById("show_all_evnt_detail_event_time_zone_"+number).innerText = timezone;
  document.getElementById("show_all_evnt_detail_event_date_"+number).innerText = date
  document.getElementById("show_all_evnt_detail_event_price_range_"+number).innerText = price;
  document.getElementById("show_all_evnt_detail_attend_event_btn_"+number).href = url;
  if(info === 'undefined'){
    document.getElementById("show_all_evnt_detail_event_info_"+number).innerHTML = 
                                                                      "<i style='margin-right: 5px; color: red;' aria-hidden='true' class='fa fa-exclamation-triangle'></i>"+
                                                                       "no information added to this event. <br/> <br/>" +
                                                                      "This section will be used to show any additional notes the event organizers add to inform you";
  }else{
    document.getElementById("show_all_evnt_detail_event_info_"+number).innerText = info;
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

setInterval(()=>{
  show_a_quote();
}, 5000);

var show_a_quote = ()=>{
  document.getElementById("quote_elem").style.opacity = 0;
  let qouteObj = quotes[Math.floor(Math.random()*quotes.length)]
  document.getElementById("quote_elem").innerHTML =
  `
  <p>" ${qouteObj.quote} "</p>
  <p style='font-size: 18px; margin-top: 20px; color: rgba(232,142,12)'>- ${qouteObj.authur}</p>
  `;
  setTimeout(()=>{
    document.getElementById("quote_elem").style.opacity = 1;
  }, 600);
  
}
show_a_quote();


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
