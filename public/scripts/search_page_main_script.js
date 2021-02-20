//getting dom elements

var hide_trip_top_params = document.getElementById("hide_trip_top_params");

var home_page_car_rentals_search_button = document.getElementById("home_page_car_rentals_search_button");

var city_search_fieldset_done_btn = document.getElementById("city_search_fieldset_done_btn");

var mobile_main_menu_items = document.getElementById("mobile_main_menu_items");
var top_logo_as_menu_btn = document.getElementById("top_logo_as_menu_btn");

var mobile_menu_hotels_option = document.getElementById("mobile_menu_hotels_option");
var mobile_menu_car_rentals_option = document.getElementById("mobile_menu_car_rentals_option");
var mobile_menu_flights_option = document.getElementById("mobile_menu_flights_option");

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

var main_menu_flights_option = document.getElementById("main_menu_flights_option");

var main_menu_car_option = document.getElementById("main_menu_car_option");

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

var logo_as_home_btn = document.getElementById("logo_as_home_btn");
var trip_type_param_number_of_people_option = document.getElementById("trip_type_param_number_of_people_option");
var trip_type_param_flight_class_option = document.getElementById("trip_type_param_flight_class_option");
var trip_type_param_round_trip_option = document.getElementById("trip_type_param_round_trip_option");

var MobilehowSearchFormInputsBtn = document.getElementById("MobilehowSearchFormInputsBtn");
var mobile_search_change_type_of_service = document.getElementById("mobile_search_change_type_of_service");
var search_tickets_form_container = document.getElementsByClassName("search_tickets_form_container")[0];

var number_of_people_round_trip_type_options_item = document.getElementById("number_of_people_round_trip_type_options_item");
var flight_class_round_trip_type_options_item = document.getElementById("flight_class_round_trip_type_options_item");
var oneway_or_round_trip_type_options_item = document.getElementById("oneway_or_round_trip_type_options_item");

var top_nav_var_main_menu_items = Array.from(
  document.getElementsByClassName("top_nav_var_main_menu_item")
);

function set_all_main_menu_items_as_not_selected() {
  top_nav_var_main_menu_items.forEach((menuItem) => {
    menuItem.classList.remove("active_top_nav_submenu_link");
    menuItem.classList.remove("active_top_nav_link");
    menuItem.classList.remove("active_mobile_nav_link");
  });
}

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

var city_search_fieldset = document.getElementById("city_search_fieldset");
var date_search_fieldset = document.getElementById("date_search_fieldset");
var trip_type_parameters = document.getElementById("trip_type_parameters");
var trip_type_param_round_trip_option_container = document.getElementById("trip_type_param_round_trip_option_container");
var main_round_trip_type_options = document.getElementById("main_round_trip_type_options");
var main_from_where_city_show_container = document.getElementById("main_from_where_city_show_container");
var main_from_when_date_show_container = document.getElementById("main_from_when_date_show_container");
var to_where_search_input_fld = document.getElementById("to_where_search_input_fld");
var from_where_search_input_fld = document.getElementById("from_where_search_input_fld");
var from_where_search_display_span = document.getElementById("from_where_search_display_span");
var to_where_search_display_span = document.getElementById("to_where_search_display_span");
var ui_datepicker = document.getElementsByClassName("ui-datepicker")[0];

trip_type_param_round_trip_option_container.addEventListener("click", (evnt)=>{

  if($(window).width() < 710){
    hide_trip_top_params.style.display = "block";
  }

  $("#main_round_trip_type_options").slideDown("fast");
  $("#main_hotels_accommodations_parameters_options").slideDown("fast");
  $("#car_rentals_pickup_time_parameters_options").slideDown("fast");
})
trip_type_param_round_trip_option_container.addEventListener("mouseleave", (evnt)=>{
  
  $("#car_rentals_pickup_time_parameters_options").slideUp("fast");
  $("#main_hotels_accommodations_parameters_options").slideUp("fast");
  $("#main_round_trip_type_options").slideUp("fast");

  setTimeout(()=>{
    hide_trip_top_params.style.display = "none";
  }, 300)
  
});

city_search_fieldset.addEventListener("focusin", (evnt)=>{
  document.getElementById("main_from_where_city_show_container").style.display = "block";

  if($(window).width() < 1026){
    $("#additional_search_inputs_and_Options").slideUp("fast");
    $("#multi_city_search_inputs_display").slideUp();
  }

})
city_search_fieldset.addEventListener("focusout", (evnt)=>{
  $("#main_from_where_city_show_container").slideUp("fast");

  if($(window).width() < 1026){

    $("#additional_search_inputs_and_Options").slideDown("fast");
    if(document.getElementById("multi_city_search_inputs_display").hasChildNodes){
      $("#multi_city_search_inputs_display").slideDown();
    }
    
  }

})

hotels_city_search_fieldset.addEventListener("focusin", (evnt)=>{
  $("#hotels_main_where_city_show_container").slideDown("fast");

  if($(window).width() < 1026){
    $("#additional_search_inputs_and_Options").slideUp("fast");
    $("#multi_city_search_inputs_display").slideUp();
  }

})

hotels_city_search_fieldset.addEventListener("focusout", (evnt)=>{
  $("#hotels_main_where_city_show_container").slideUp("fast");

  if($(window).width() < 1026){
    $("#additional_search_inputs_and_Options").slideDown("fast");
  }

})

car_rentals_city_search_fieldset.addEventListener("focusin", (evnt)=>{
  $("#car_rentals_main_from_where_city_show_container").slideDown("fast");

  if($(window).width() < 1026){
    $("#additional_search_inputs_and_Options").slideUp("fast");
    $("#multi_city_search_inputs_display").slideUp();
  }

})
car_rentals_city_search_fieldset.addEventListener("focusout", (evnt)=>{
  $("#car_rentals_main_from_where_city_show_container").slideUp("fast");

  if($(window).width() < 1026){
    $("#additional_search_inputs_and_Options").slideDown("fast");
  }

})

date_search_fieldset.addEventListener("focusin", (evnt)=>{
  //$("#main_from_when_date_show_container").slideDown("fast");
})
date_search_fieldset.addEventListener("focusout", (evnt)=>{
  //$("#main_from_when_date_show_container").slideUp("fast");
})

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

function show_flights_forms_from_main_menu(){
  trip_type_parameters.style.display = "block";
  hotels_accommodations_parameters.style.display = "none";
  car_rentals_pickup_time_parameters.style.display = "none";

  car_rentals_search_form_container.style.display = "none";
  flights_search_tickets_form_container.style.display = "flex"
  hotels__search_form_container.style.display = "none";
  
  set_all_main_menu_items_as_not_selected();
  main_menu_flights_option.classList.add("active_top_nav_link");
  mobile_menu_flights_option.classList.add("active_mobile_nav_link");

  flight_set_off_additional_options.style.display = "flex";
  hotel_set_off_additional_options.style.display = "none";
  rental_cars_set_off_additional_options.style.display = "none";
  //jumbotron_background.style.display = "block";
}

//function to show flights search form
flights_search_tickets_form_container.style.display = "flex";
main_menu_flights_option.addEventListener("click", () => {
  show_flights_forms_from_main_menu();
});

function show_flights_forms_from_mobile_menu(){
  trip_type_parameters.style.display = "block";
  hotels_accommodations_parameters.style.display = "none";
  car_rentals_pickup_time_parameters.style.display = "none";

  car_rentals_search_form_container.style.display = "none";
  flights_search_tickets_form_container.style.display = "flex"
  hotels__search_form_container.style.display = "none";
  
  set_all_main_menu_items_as_not_selected();
  main_menu_flights_option.classList.add("active_top_nav_link");
  mobile_menu_flights_option.classList.add("active_mobile_nav_link")

  flight_set_off_additional_options.style.display = "flex";
  hotel_set_off_additional_options.style.display = "none";
  rental_cars_set_off_additional_options.style.display = "none";
  //jumbotron_background.style.display = "block";

  MobilehowSearchFormInputsBtn.style.transform  = "rotate(180deg)";
  show_search_page_top_nav_form();
}

mobile_menu_flights_option.addEventListener("click", () => {
  show_flights_forms_from_mobile_menu();
});

function show_hotels_forms_from_main_menu(){
  hotels_accommodations_parameters.style.display = "block";
  car_rentals_pickup_time_parameters.style.display = "none";
  trip_type_parameters.style.display = "none";

  flights_search_tickets_form_container.style.display = "none";
  hotels__search_form_container.style.display = "flex";
  car_rentals_search_form_container.style.display = "none";
  set_all_main_menu_items_as_not_selected();
  main_menu_hotels_option.classList.add("active_top_nav_link");
  mobile_menu_hotels_option.classList.add("active_mobile_nav_link")

  flight_set_off_additional_options.style.display = "none";
  hotel_set_off_additional_options.style.display = "flex";
  rental_cars_set_off_additional_options.style.display = "none";
  
  //jumbotron_background.style.display = "block";
}

//function to show hotels search form
main_menu_hotels_option.addEventListener("click", () => {
  show_hotels_forms_from_main_menu();
});

function show_hotels_forms_from_mobile_menu(){
  hotels_accommodations_parameters.style.display = "block";
  car_rentals_pickup_time_parameters.style.display = "none";
  trip_type_parameters.style.display = "none";

  flights_search_tickets_form_container.style.display = "none";
  hotels__search_form_container.style.display = "flex";
  car_rentals_search_form_container.style.display = "none";
  set_all_main_menu_items_as_not_selected();
  main_menu_hotels_option.classList.add("active_top_nav_link");
  mobile_menu_hotels_option.classList.add("active_mobile_nav_link")

  flight_set_off_additional_options.style.display = "none";
  hotel_set_off_additional_options.style.display = "flex";
  rental_cars_set_off_additional_options.style.display = "none";
  
  MobilehowSearchFormInputsBtn.style.transform  = "rotate(180deg)";
  show_search_page_top_nav_form();
  $("#multi_city_search_inputs_display").slideUp("fast");

  //jumbotron_background.style.display = "block";
}

mobile_menu_hotels_option.addEventListener("click", () => {
  show_hotels_forms_from_mobile_menu();
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
  mobile_menu_car_rentals_option.classList.add("active_mobile_nav_link");

  flight_set_off_additional_options.style.display = "none";
  rental_cars_set_off_additional_options.style.display = "flex";
  hotel_set_off_additional_options.style.display = "none";
  //jumbotron_background.style.display = "block";
});

mobile_menu_car_rentals_option.addEventListener("click", () => {

  trip_type_parameters.style.display = "none";
  hotels_accommodations_parameters.style.display = "none";
  car_rentals_pickup_time_parameters.style.display = "block";

  hotels__search_form_container.style.display = "none";
  car_rentals_search_form_container.style.display = "flex";
  flights_search_tickets_form_container.style.display = "none"
  set_all_main_menu_items_as_not_selected();
  main_menu_car_rentals_option.classList.add("active_top_nav_link");
  mobile_menu_car_rentals_option.classList.add("active_mobile_nav_link");

  flight_set_off_additional_options.style.display = "none";
  rental_cars_set_off_additional_options.style.display = "flex";
  hotel_set_off_additional_options.style.display = "none";
  //jumbotron_background.style.display = "block";

  MobilehowSearchFormInputsBtn.style.transform  = "rotate(180deg)";
  show_search_page_top_nav_form();
  $("#multi_city_search_inputs_display").slideUp("fast");

});

city_search_fieldset.addEventListener("focusout", (evnt)=>{
  $("#main_from_where_city_show_container").slideUp("fast");
  document.getElementById("airports_exchange_search_fields_values_icon").style.display = "block";
  document.getElementById("from_where_city_input_container").style.display = "block";
  document.getElementById("to_where_city_input_container").style.display = "block";
  setTimeout(()=>{
    document.getElementById("from_where_city_input_container").style.minWidth = "42%";
    document.getElementById("to_where_city_input_container").style.minWidth = "42%";
  },100);
})

from_where_search_input_fld.addEventListener("focusin", ()=>{

    setTimeout(()=>{
      document.getElementById("flights_auto_complete_list").innerHTML = "";
    }, 500);

      setTimeout(()=>{
          document.getElementById("from_where_city_input_container").style.minWidth = "90%";
          document.getElementById("to_where_city_input_container").style.minWidth = "10%";
      },200);
      setTimeout(()=>{
        document.getElementById("airports_exchange_search_fields_values_icon").style.display = "none";
        document.getElementById("to_where_city_input_container").style.display = "none";
      }, 400);
    
})
to_where_search_input_fld.addEventListener("focusin", ()=> {

      setTimeout(()=>{
        document.getElementById("flights_auto_complete_list").innerHTML = "";
      }, 500);

      setTimeout(()=>{
        document.getElementById("from_where_city_input_container").style.minWidth = "10%";
        document.getElementById("to_where_city_input_container").style.minWidth = "90%";
      },200);
      setTimeout(()=>{
        document.getElementById("airports_exchange_search_fields_values_icon").style.display = "none";
        document.getElementById("from_where_city_input_container").style.display = "none";
      },600);
})
from_where_search_input_fld.addEventListener("focusout", ()=>{
    document.getElementById("airports_exchange_search_fields_values_icon").style.display = "block";
    document.getElementById("from_where_city_input_container").style.display = "block";
    document.getElementById("to_where_city_input_container").style.display = "block";
    setTimeout(()=>{
      document.getElementById("from_where_city_input_container").style.minWidth = "42%";
      document.getElementById("to_where_city_input_container").style.minWidth = "42%";
    },100);
})
to_where_search_input_fld.addEventListener("focusout", ()=>{
    document.getElementById("airports_exchange_search_fields_values_icon").style.display = "block";
    document.getElementById("from_where_city_input_container").style.display = "block";
    document.getElementById("to_where_city_input_container").style.display = "block";
    setTimeout(()=>{
      document.getElementById("from_where_city_input_container").style.minWidth = "42%";
      document.getElementById("to_where_city_input_container").style.minWidth = "42%";
    },100);
})
city_search_fieldset_done_btn.addEventListener("click", ()=>{
  document.getElementById("airports_exchange_search_fields_values_icon").style.display = "block";
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
  $("#main_from_where_city_show_container").slideUp("fast");
  document.getElementById("car_rentals_exchange_search_fields_values_icon").style.display = "block";
  document.getElementById("from_where_city_input_container").style.display = "block";
  document.getElementById("to_where_city_input_container").style.display = "block";
  setTimeout(()=>{
    document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "42%";
    document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "42%";
  }, 100);
})

car_rentals_from_where_search_input_fld.addEventListener("focusin", ()=>{
    setTimeout(()=>{
      document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "90%";
      document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "10%";
    },200);
    setTimeout(()=>{
      document.getElementById("car_rentals_exchange_search_fields_values_icon").style.display = "none";
      document.getElementById("car_rentals_to_where_city_input_container").style.display = "none";
    }, 400);
})
car_rentals_to_where_search_input_fld.addEventListener("focusin", ()=>{
    setTimeout(()=>{
      document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "10%";
      document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "90%";
    }, 200);
    setTimeout(()=>{
      document.getElementById("car_rentals_exchange_search_fields_values_icon").style.display = "none";
      document.getElementById("car_rentals_from_where_city_input_container").style.display = "none";
    },600);
})
car_rentals_from_where_search_input_fld.addEventListener("focusout", ()=>{
    document.getElementById("car_rentals_exchange_search_fields_values_icon").style.display = "block";
    document.getElementById("car_rentals_from_where_city_input_container").style.display = "block";
    document.getElementById("car_rentals_to_where_city_input_container").style.display = "block";
    setTimeout(()=>{
      document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "42%";
      document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "42%";
    }, 100);
})
car_rentals_to_where_search_input_fld.addEventListener("focusout", ()=>{
    document.getElementById("car_rentals_exchange_search_fields_values_icon").style.display = "block";
    document.getElementById("car_rentals_from_where_city_input_container").style.display = "block";
    document.getElementById("car_rentals_to_where_city_input_container").style.display = "block";
    setTimeout(()=>{
      document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "42%";
      document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "42%";
    }, 100);
})
car_rentals_city_search_fieldset_done_btn.addEventListener("click", ()=>{
  document.getElementById("car_rentals_exchange_search_fields_values_icon").style.display = "block";
  document.getElementById("car_rentals_from_where_city_input_container").style.display = "block";
  document.getElementById("car_rentals_to_where_city_input_container").style.display = "block";
  setTimeout(()=>{
    document.getElementById("car_rentals_from_where_city_input_container").style.minWidth = "42%";
    document.getElementById("car_rentals_to_where_city_input_container").style.minWidth = "42%";
  }, 100);
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
});
let autocomplete3 = new google.maps.places.Autocomplete(hotels_where_search_input_fld);
autocomplete3.addListener('place_changed', function () {
    let place = autocomplete3.getPlace();
    hotels_from_where_search_display_span.innerHTML = "<span style='color: rgb(255, 102, 0); font-size: 12px;'>Hotels from </span><span style='font-weight: bolder; font-size: 12px;'>" 
                                              + hotels_where_search_input_fld.value + "</span>";
});*/

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

logo_as_home_btn.addEventListener("click", ()=>{
  window.location.href = "/";
})

/*$("#from_when_search_input").datepicker({minDate: 0});
$("#to_when_search_input").datepicker({minDate: 0});
$("#hotels_from_when_search_input").datepicker({minDate: 0});
$("#hotels_to_when_search_input").datepicker({minDate: 0});
$("#car_rentals_from_when_search_input").datepicker({minDate: 0});
$("#car_rentals_to_when_search_input").datepicker({minDate: 0});*/

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

    hotel_search_data.checkin = start.format('YYYY-MM-DD');
    hotel_search_data.checkout = end.format('YYYY-MM-DD');

    window.localStorage.setItem("hotels_post_data", JSON.stringify(hotel_search_data));
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

var hero_section_container = document.querySelector(".hero_section_container"); 
        /* Gets the amount of height 
        of the element from the 
        viewport and adds the 
        pageYOffset to get the height 
        relative to the page */ 
        var currStickyPos =  
        hero_section_container.getBoundingClientRect().top + window.pageYOffset;

        window.onscroll = function() {
          
            /*if($(window).width() < 700 && window.pageYOffset > (currStickyPos - 100)){
              city_search_fieldset.style.display = "flex";
              car_rentals_city_search_fieldset.style.display = "flex";
              hotels_city_search_fieldset.style.display = "flex";
              date_search_fieldset.style.display = "flex";
              car_rentals_date_search_fieldset.style.display = "flex";
              hotels_date_search_fieldset.style.display = "flex";
              home_page_search_button.style.display = "flex";
              home_page_car_rentals_search_button.style.display = "flex";
              home_page_hotels_search_button.style.display = "flex";
              MobilehowSearchFormInputsBtn.style.display = "none";

              if(document.activeElement !== city_search_fieldset 
                || document.activeElement !== date_search_fieldset){

                  //$("#additional_search_inputs_and_Options").slideDown("fast");
                  document.getElementById("additional_search_inputs_and_Options").style.display = "block";
                  
                }
              //$("#multi_city_search_inputs_display").slideDown("fast");
            }*/

            /* Check if the current Y offset 
            is greater than the position of 
            the element */ 
            if (window.pageYOffset > currStickyPos) { 

              hero_section_container.style.position = "fixed"; 
              hero_section_container.style.top = "0px";
              mobile_search_change_type_of_service.style.paddingTop = "15px";

              if((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 25 )){
                document.body.style.marginTop = 0;
              }else{
                document.body.style.marginTop = "20px";
              }
              

              if(
                  city_search_fieldset.style.display === "flex" ||
                  car_rentals_city_search_fieldset.style.display === "flex" ||
                  hotels_city_search_fieldset.style.display === "flex"
                  ){
                    document.getElementById("mobile_search_change_type_of_service").style.paddingBottom = 0;
                  }else{
                    document.getElementById("mobile_search_change_type_of_service").style.paddingBottom = "10px";
                  }
              
                  
              if($(window).width() > 1025){
                if((window.innerHeight + window.scrollY) >= (document.body.offsetHeight - 120 )){
                  document.body.style.marginTop = 0;
                }else{
                  document.body.style.marginTop = "115px";
                }
                $("#multi_city_search_inputs_display").slideUp("fast");
                document.getElementById("additional_search_inputs_and_Options").style.display = "none";
              }
              //$("#multi_city_search_inputs_display").slideUp("fast");

              //$("#additional_search_inputs_and_Options").slideUp("fast");
              //document.getElementById("additional_search_inputs_and_Options").style.display = "none";
              
              /*if($(window).width() < 700){
                document.body.style.paddingTop = "265px";
              }*/

              /*if($(window).width() < 700 && window.pageYOffset > (currStickyPos + 210)){
                
                if(document.activeElement !== city_search_fieldset 
                    || document.activeElement !== date_search_fieldset){
                  city_search_fieldset.style.display = "none";
                  car_rentals_city_search_fieldset.style.display = "none";
                  hotels_city_search_fieldset.style.display = "none";
                  date_search_fieldset.style.display = "none";
                  car_rentals_date_search_fieldset.style.display = "none";
                  hotels_date_search_fieldset.style.display = "none";
                  home_page_search_button.style.display = "none";
                  home_page_car_rentals_search_button.style.display = "none";
                  home_page_hotels_search_button.style.display = "none";
                  MobilehowSearchFormInputsBtn.style.display = "none";
                  MobilehowSearchFormInputsBtn.style.display = "block";
                }

              }*/

              if($(window).width() < 450){
                hero_section_container.style.minWidth = "100vw";
              }

            } else { 
              
              /*if(document.activeElement !== city_search_fieldset 
                || document.activeElement !== date_search_fieldset){
                  
                  //$("#additional_search_inputs_and_Options").slideDown("fast");
                  document.getElementById("additional_search_inputs_and_Options").style.display = "block";
                  
                }*/
              //document.getElementById("additional_search_inputs_and_Options").style.display = "flex";

              /*$("#multi_city_search_inputs_display").slideDown("fast");

              city_search_fieldset.style.display = "flex";
              car_rentals_city_search_fieldset.style.display = "flex";
              hotels_city_search_fieldset.style.display = "flex";
              date_search_fieldset.style.display = "flex";
              car_rentals_date_search_fieldset.style.display = "flex";
              hotels_date_search_fieldset.style.display = "flex";
              home_page_search_button.style.display = "flex";
              home_page_car_rentals_search_button.style.display = "flex";
              home_page_hotels_search_button.style.display = "flex";
              MobilehowSearchFormInputsBtn.style.display = "none";*/


              if($(window).width() < 450)
                hero_section_container.style.minWidth = "100vw";

              mobile_search_change_type_of_service.style.paddingTop = 0;
              document.getElementById("mobile_search_change_type_of_service").style.paddingBottom = 0;
              document.body.style.marginTop = "0";
              hero_section_container.style.position = "initial"; 
              hero_section_container.style.top = "initial"; 

              if($(window).width() > 1025){
                $("#multi_city_search_inputs_display").slideDown("fast");
                document.getElementById("additional_search_inputs_and_Options").style.display = "block";
              }

            } 
        }


        //hiding top nav forms for mobile views
function hide_search_page_top_nav_form(){

  if($(window).width() < 700){

    document.getElementById("mobile_search_change_type_of_service").style.paddingBottom = "10px";

    MobilehowSearchFormInputsBtn_i.classList.add("fa-search");
    MobilehowSearchFormInputsBtn_i.classList.remove("fa-chevron-down");

    $("#trip_type_param_round_trip_option_container").slideUp("fast");
    $("#multi_city_search_inputs_display").slideUp("fast");
    document.getElementById("additional_search_inputs_and_Options").style.display = "none";
    city_search_fieldset.style.display = "none";
    car_rentals_city_search_fieldset.style.display = "none";
    hotels_city_search_fieldset.style.display = "none";
    date_search_fieldset.style.display = "none";
    car_rentals_date_search_fieldset.style.display = "none";
    hotels_date_search_fieldset.style.display = "none";
    home_page_search_button.style.display = "none";
    home_page_car_rentals_search_button.style.display = "none";
    home_page_hotels_search_button.style.display = "none";
    //MobilehowSearchFormInputsBtn.style.display = "none";
    MobilehowSearchFormInputsBtn.style.display = "flex";
    
    document.getElementsByClassName("search_tickets_form_container")[0].style.marginBottom = 0;
    document.getElementById("car_rentals_search_form_container").style.marginBottom = 0;
    document.getElementById("hotels__search_form_container").style.marginBottom = 0;
    hero_section_container.style.paddingBottom = 0;
  }

}

hide_search_page_top_nav_form();

function show_search_page_top_nav_form(){

  if($(window).width() < 1025){
    hero_section_container.style.paddingBottom = "5px";
    document.getElementById("mobile_search_change_type_of_service").style.paddingBottom = 0;
  }

  MobilehowSearchFormInputsBtn_i.classList.remove("fa-search");
  MobilehowSearchFormInputsBtn_i.classList.add("fa-chevron-down");

  /*document.getElementById("car_rentals_search_form_container").style.marginBottom = "5px";
  document.getElementById("hotels__search_form_container").style.marginBottom = "5px";
  document.getElementsByClassName("search_tickets_form_container")[0].style.marginBottom = "5px";*/

  $("#additional_search_inputs_and_Options").slideDown("fast");
  $("#trip_type_param_round_trip_option_container").slideDown("fast");
  //document.getElementById("additional_search_inputs_and_Options").style.display = "block";

  city_search_fieldset.style.opacity = 0;
  car_rentals_city_search_fieldset.style.opacity = 0;
  hotels_city_search_fieldset.style.opacity = 0;
  date_search_fieldset.style.opacity = 0;
  car_rentals_date_search_fieldset.style.opacity = 0;
  hotels_date_search_fieldset.style.opacity = 0;
  home_page_search_button.style.opacity = 0;
  home_page_car_rentals_search_button.style.opacity = 0;
  home_page_hotels_search_button.style.opacity = 0;

  $("#city_search_fieldset").slideDown("fast");
  $("#car_rentals_city_search_fieldset").slideDown("fast");
  $("#hotels_city_search_fieldset").slideDown("fast");
  $("#date_search_fieldset").slideDown("fast");
  $("#car_rentals_date_search_fieldset").slideDown("fast");
  $("#hotels_date_search_fieldset").slideDown("fast");
  $("#home_page_search_button").slideDown("fast");
  $("#home_page_car_rentals_search_button").slideDown("fast");
  $("#home_page_hotels_search_button").slideDown("fast");

  if(flights_search_tickets_form_container.style.display === "flex"){
    $("#multi_city_search_inputs_display").slideDown("fast");
  }

  city_search_fieldset.style.display = "flex";
  car_rentals_city_search_fieldset.style.display = "flex";
  hotels_city_search_fieldset.style.display = "flex";
  date_search_fieldset.style.display = "flex";
  car_rentals_date_search_fieldset.style.display = "flex";
  hotels_date_search_fieldset.style.display = "flex";
  city_search_fieldset.style.transition = "opacity 2s";
  car_rentals_city_search_fieldset.style.transition = "opacity 2s";
  hotels_city_search_fieldset.style.transition = "opacity 2s";
  date_search_fieldset.style.transition = "opacity 2s";
  car_rentals_date_search_fieldset.style.transition = "opacity 2s";
  hotels_date_search_fieldset.style.transition = "opacity 2s";
  home_page_search_button.style.transition = "opacity 2s";
  home_page_car_rentals_search_button.style.transition = "opacity 2s";
  home_page_hotels_search_button.style.transition = "opacity 2s";
  city_search_fieldset.style.opacity = 1;
  car_rentals_city_search_fieldset.style.opacity = 1;
  hotels_city_search_fieldset.style.opacity = 1;
  date_search_fieldset.style.opacity = 1;
  car_rentals_date_search_fieldset.style.opacity = 1;
  hotels_date_search_fieldset.style.opacity = 1;
  home_page_search_button.style.opacity = 1;
  home_page_car_rentals_search_button.style.opacity = 1;
  home_page_hotels_search_button.style.opacity = 1;
    
}

function MobilehowSearchFormInputsBtnFunc(){
  if(document.getElementById("additional_search_inputs_and_Options").style.display === "none"){
    MobilehowSearchFormInputsBtn.style.transform  = "rotate(-180deg)";
    
    show_search_page_top_nav_form();
  }else{
    MobilehowSearchFormInputsBtn.style.transform  = "rotate(0deg)";
    
    hide_search_page_top_nav_form();
    
  }
}
MobilehowSearchFormInputsBtn.addEventListener("click", (evnt)=>{
  MobilehowSearchFormInputsBtnFunc()
})

document.getElementById("show_search_results_options_btn").addEventListener("click", (evnt)=>{
    if(document.getElementById("site_lower_section_left_container").style.display === "block"){
      $("#site_lower_section_left_container").slideUp("fast");
      document.getElementById("site_lower_section_left_container").style.display = "none";
      document.getElementById("search_settings_angle_down").style.transform = "rotate(360deg)";
    }else{
      $("#site_lower_section_left_container").slideDown("fast");
      document.getElementById("site_lower_section_left_container").style.display = "block";
      document.getElementById("search_settings_angle_down").style.transform = "rotate(180deg)";
    }
})


//Adding toggle functions for showing and hiding settings areas

//stop settings
var main_stops_settings_container = document.getElementById("main_stops_settings_container");
main_stops_settings_container.style.display = "none";

document.getElementById("toggle_show_stops_settings_btn").addEventListener("click", (evnt)=>{
  
  if(main_stops_settings_container.style.display === "none"){
    document.getElementById("toggle_show_stops_settings_btn_i").style.transform = "rotate(360deg)";
    $("#main_stops_settings_container").slideDown("fast");
  }else{
    document.getElementById("toggle_show_stops_settings_btn_i").style.transform = "rotate(180deg)";
    $("#main_stops_settings_container").slideUp("fast");
  }
})

//flexible options settings
var main_flexible_options_settings_container = document.getElementById("main_flexible_options_settings_container");
main_flexible_options_settings_container.style.display = "none";

document.getElementById("toggle_show_flexible_options_settings_btn").addEventListener("click", (evnt)=>{
  
  if(main_flexible_options_settings_container.style.display === "none"){
    document.getElementById("toggle_show_flexible_options_settings_btn_i").style.transform = "rotate(360deg)";
    $("#main_flexible_options_settings_container").slideDown("fast");
  }else{
    document.getElementById("toggle_show_flexible_options_settings_btn_i").style.transform = "rotate(180deg)";
    $("#main_flexible_options_settings_container").slideUp("fast");
  }
})

//airports settings
var main_airports_settings_container = document.getElementById("main_airports_settings_container");
main_airports_settings_container.style.display = "none";

document.getElementById("toggle_airports_settings_btn").addEventListener("click", (evnt)=>{
  
  if(main_airports_settings_container.style.display === "none"){
    document.getElementById("toggle_airports_settings_btn_i").style.transform = "rotate(360deg)";
    $("#main_airports_settings_container").slideDown("fast");
  }else{
    document.getElementById("toggle_airports_settings_btn_i").style.transform = "rotate(180deg)";
    $("#main_airports_settings_container").slideUp("fast");
  }
})

//transport types settings
var main_transport_types_settings_container = document.getElementById("main_transport_types_settings_container");
main_transport_types_settings_container.style.display = "none";

document.getElementById("toggle_transport_types_settings_btn").addEventListener("click", (evnt)=>{
  
  if(main_transport_types_settings_container.style.display === "none"){
    document.getElementById("toggle_transport_types_settings_btn_i").style.transform = "rotate(360deg)";
    $("#main_transport_types_settings_container").slideDown("fast");
  }else{
    document.getElementById("toggle_transport_types_settings_btn_i").style.transform = "rotate(180deg)";
    $("#main_transport_types_settings_container").slideUp("fast");
  }
})

//times settings
var main_times_settings_container = document.getElementById("main_times_settings_container");
main_times_settings_container.style.display = "none";

document.getElementById("toggle_times_settings_btn").addEventListener("click", (evnt)=>{
  
  if(main_times_settings_container.style.display === "none"){
    document.getElementById("toggle_times_settings_btn_i").style.transform = "rotate(360deg)";
    $("#main_times_settings_container").slideDown("fast");
  }else{
    document.getElementById("toggle_times_settings_btn_i").style.transform = "rotate(180deg)";
    $("#main_times_settings_container").slideUp("fast");
  }
})

//airlines settings
var main_airlines_settings_container = document.getElementById("main_airlines_settings_container");
main_airlines_settings_container.style.display = "none";

document.getElementById("toggle_airlines_settings_btn").addEventListener("click", (evnt)=>{
  
  if(main_airlines_settings_container.style.display === "none"){
    document.getElementById("toggle_airlines_settings_btn_i").style.transform = "rotate(360deg)";
    $("#main_airlines_settings_container").slideDown("fast");
  }else{
    document.getElementById("toggle_airlines_settings_btn_i").style.transform = "rotate(180deg)";
    $("#main_airlines_settings_container").slideUp("fast");
  }
});


//left panel hotel settings
var hotel_settings_container_1 = document.getElementById("hotel_settings_container_1");
hotel_settings_container_1.style.display = "none";

document.getElementById("toggle_hotel_settings_btn_1").addEventListener("click", (evnt)=>{
  
  if(hotel_settings_container_1.style.display === "none"){
    document.getElementById("toggle_hotel_settings_btn_i_1").style.transform = "rotate(360deg)";
    $("#hotel_settings_container_1").slideDown("fast");
  }else{
    document.getElementById("toggle_hotel_settings_btn_i_1").style.transform = "rotate(180deg)";
    $("#hotel_settings_container_1").slideUp("fast");
  }
})

var hotel_settings_container_2 = document.getElementById("hotel_settings_container_2");
hotel_settings_container_2.style.display = "none";

document.getElementById("toggle_hotel_settings_btn_2").addEventListener("click", (evnt)=>{
  
  if(hotel_settings_container_2.style.display === "none"){
    document.getElementById("toggle_hotel_settings_btn_i_2").style.transform = "rotate(360deg)";
    $("#hotel_settings_container_2").slideDown("fast");
  }else{
    document.getElementById("toggle_hotel_settings_btn_i_2").style.transform = "rotate(180deg)";
    $("#hotel_settings_container_2").slideUp("fast");
  }
})

var hotel_settings_container_3 = document.getElementById("hotel_settings_container_3");
hotel_settings_container_3.style.display = "none";

document.getElementById("toggle_hotel_settings_btn_3").addEventListener("click", (evnt)=>{
  
  if(hotel_settings_container_3.style.display === "none"){
    document.getElementById("toggle_hotel_settings_btn_i_3").style.transform = "rotate(360deg)";
    $("#hotel_settings_container_3").slideDown("fast");
  }else{
    document.getElementById("toggle_hotel_settings_btn_i_3").style.transform = "rotate(180deg)";
    $("#hotel_settings_container_3").slideUp("fast");
  }
})


function  toggle_show_flight_ticket_item_details(number){
let flight_ticket_item_details = ("flight_ticket_item_details" + number);
let see_flight_details_angle_down = ("see_flight_details_angle_down" + number)
if(document.getElementById(flight_ticket_item_details).style.display === "block"){
  $("#"+flight_ticket_item_details).slideUp("fast");
  document.getElementById(see_flight_details_angle_down).style.transform = "rotate(360deg)";

}else{
  $("#"+flight_ticket_item_details).slideDown("fast");
  document.getElementById(see_flight_details_angle_down).style.transform = "rotate(180deg)";
}
}



//Add Flight functions
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
  div.style.display = "none";

  div.innerHTML = `
        <div class="each_multi_city_search_inputs_display">
        <div style="display: flex; flex-direction: row !important; padding: 0;">
          <div onclick="edit_from_where_of_added_flight(${globalFlightId});" style="margin-right: 15px;">
            <p class="edit_icon"><i class="fa fa-pencil" aria-hidden="true"></i></p>
            <p style="color:rgb(255, 102, 0); font-size: 12px; font-weight: bolder;">
            <i class="fa fa-map-marker" aria-hidden="true" style="margin-right: 5px; color: white;"></i>From </p>
            <p id="each_added_flight_from_where_input${globalFlightId}" style="color: white; margin: 5px; font-size: 14px">
            City/Airport
            </p>
          </div>
          <div onclick="edit_to_where_of_added_flight(${globalFlightId})" style="margin-right: 20px;">
            <p class="edit_icon"><i class="fa fa-pencil" aria-hidden="true"></i></p>
            <p  style="color:rgb(255, 102, 0); font-size: 12px; font-weight: bolder;">
            <i class="fa fa-map-marker" aria-hidden="true" style="margin-right: 5px; color: white;"></i>To </p>
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
            <i class="fa fa-calendar" aria-hidden="true" style="margin-right: 5px; color: white;"></i>Depature Date </p>
            <input type="text" id="each_added_flight_from_when_input${globalFlightId}" readonly="true"
              style="min-width: 200px; color: white; margin: 5px; font-size: 14px;  background: none; border: none;" placeholder="Departure date" value="" />
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
}

function edit_from_where_of_added_flight(number){
  
  let thisId = ("each_added_flight_from_where_input"+number);

  let each_added_flight_from_where_input =  document.getElementById(thisId);

    $("#multi_city_search_inputs_display").slideUp("fast");

    if($(window).width() < 1026){
      $("#additional_search_inputs_and_Options").slideUp("fast");
      //document.getElementById("additional_search_inputs_and_Options").style.display = "none";
    }

    from_where_search_input_fld.focus();

    current_focus_out_func = function(){

      let intervarId = setInterval(()=>{
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

      },1);
      
      setTimeout(()=>{
        clearInterval(intervarId);
        from_where_search_input_fld.value = '';
        $("#multi_city_search_inputs_display").slideDown("fast");
        $("#additional_search_inputs_and_Options").slideDown("fast");
        from_where_search_input_fld.removeEventListener("change", current_onchange_func);
        from_where_search_input_fld.removeEventListener("focusout", current_focus_out_func);
      },200);
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
    $("#additional_search_inputs_and_Options").slideUp("fast");
  }

  to_where_search_input_fld.focus();

  current_focus_out_func = function(){

    let intervalId = setInterval(()=>{
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
    },1);
    
    setTimeout(()=>{
      clearInterval(intervalId)
      to_where_search_input_fld.value = '';
      $("#multi_city_search_inputs_display").slideDown("fast");
      $("#additional_search_inputs_and_Options").slideDown("fast");
      to_where_search_input_fld.removeEventListener("change",current_onchange_func);
      to_where_search_input_fld.removeEventListener("focusout",current_focus_out_func);
    },200);
    
  }

  current_onchange_func = function(){
    //console.log(each_added_flight_to_where_input);
    to_where_search_input_fld.blur();
  }

  to_where_search_input_fld.addEventListener("change",current_onchange_func);
  to_where_search_input_fld.addEventListener("focusout",current_focus_out_func);
  
}

function edit_from_when_of_added_flight(number){
  //flights_search_tickets_form_container.style.opacity = 0;
}

function edit_to_when_of_added_flight(number){
  //flights_search_tickets_form_container.style.opacity = 0;
}

function initialize_date_chooser(number){

  let first_input_Id= "each_added_flight_from_when_input" + number;

  $(function() {
    $("#"+first_input_Id).daterangepicker({
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

document.getElementById("other_menu_languages_option").addEventListener("click", ()=>{
  if(document.getElementById("main_menu_language_submenu").style.visibility === "visible"){
    document.getElementById("main_menu_language_submenu").style.visibility = "hidden";
    setTimeout(()=>{
      document.getElementById("main_menu_language_submenu").style.opacity = 0;
    }, 10);
    
  }else{
    document.getElementById("main_menu_language_submenu").style.opacity = 1;
      document.getElementById("main_menu_language_submenu").style.visibility = "visible";
    
  }

});

document.getElementById("other_menu_languages_option").addEventListener("focusout", ()=>{

    document.getElementById("main_menu_language_submenu").style.visibility = "hidden";
      document.getElementById("main_menu_language_submenu").style.opacity = 0;
   
});

//login functions
function toggle_show_login_div(){
  $("#sign_in_container").toggle("up");
  if(document.getElementById("sign_in_container").style.display === "block"){
    document.getElementById("sign_in_container").style.display = "flex";
  }
}

function mobile_toggle_show_login_div(){

  /*top_logo_menu_icon.style.transform = "rotate(360deg)";
  top_logo_menu_icon.style.marginTop = "23px";
  top_logo_menu_icon.style.marginBottom = "0"
  header_menu_dropdowns.style.display = "none";
  mobile_main_menu_items.style.visibility = "hidden";
  mobile_main_menu_items.style.opacity = "0";*/

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

 function toggle_show_finish_booking_form(){
   $("#order_ticket_form_container").toggle("up");
   if(document.getElementById("order_ticket_form_container").style.display === "block"){
    document.getElementById("order_ticket_form_container").style.display = "flex";
  }
 }

 function toggle_show_hotel_booking_form(){
  $("#order_room_form_container").toggle("up");
  if(document.getElementById("order_room_form_container").style.display === "block"){
   document.getElementById("order_room_form_container").style.display = "flex";
 }
}

//for flights booking forms
var forms_personal_info_step_indicator = document.getElementById("forms_personal_info_step_indicator");
var forms_personal_info_step_indicator_number = document.getElementById("forms_personal_info_step_indicator_number");
var forms_personal_info_step_indicator_title = document.getElementById("forms_personal_info_step_indicator_title");

var forms_contacts_step_indicator = document.getElementById("forms_contacts_step_indicator");
var forms_contacts_step_indicator_number = document.getElementById("forms_contacts_step_indicator_number");
var forms_contacts_step_indicator_title = document.getElementById("forms_contacts_step_indicator_title");

var forms_documents_step_indicator = document.getElementById("forms_documents_step_indicator");
var forms_documents_step_indicator_number = document.getElementById("forms_documents_step_indicator_number");
var forms_documents_step_indicator_title = document.getElementById("forms_documents_step_indicator_title");

var order_ticket_form_container_personal_info = document.getElementById("order_ticket_form_container_personal_info");
var order_ticket_form_container_contacts_info = document.getElementById("order_ticket_form_container_contacts_info");
var order_ticket_form_container_documents_info = document.getElementById("order_ticket_form_container_documents_info");
var order_ticket_form_container_review_and_submit = document.getElementById("order_ticket_form_container_review_and_submit");

var order_ticket_form_container_review_and_submit_indicator = document.getElementById("order_ticket_form_container_review_and_submit_indicator");


//for hotels booking forms
var order_room_form_hotel_rates_list_indicator = document.getElementById("order_room_form_hotel_rates_list_indicator");
var order_room_form_hotel_rates_list_indicator_number = document.getElementById("order_room_form_hotel_rates_list_indicator_number");
var order_room_form_hotel_rates_list_indicator_title = document.getElementById("order_room_form_hotel_rates_list_indicator_title");

var hotels_final_price_step_indicator = document.getElementById("hotels_final_price_step_indicator");
var hotels_final_price_step_indicator_number = document.getElementById("hotels_final_price_step_indicator_number");
var hotels_final_price_step_indicator_title = document.getElementById("hotels_final_price_step_indicator_title");

var hotels_forms_step_three_indicator = document.getElementById("hotels_forms_step_three_indicator");
var hotels_forms_step_three_indicator_number = document.getElementById("hotels_forms_step_three_indicator_number");
var hotels_forms_step_three_indicator_title = document.getElementById("hotels_forms_step_three_indicator_title");

var order_room_form_hotel_rates_list_container = document.getElementById("order_room_form_hotel_rates_list_container");
var order_room_form_final_price_container = document.getElementById("order_room_form_final_price_container");
var order_room_form_step_three_container = document.getElementById("order_room_form_step_three_container");
var hotels_order_ticket_form_container_review_and_submit_container = document.getElementById("hotels_order_ticket_form_container_review_and_submit_container");

var hotels_order_ticket_form_container_review_and_submit_indicator = document.getElementById("hotels_order_ticket_form_container_review_and_submit_indicator");

//flights
function show_finish_booking_form_personal_info_fieldset(){

  forms_personal_info_step_indicator.classList.add("active");
  forms_personal_info_step_indicator_number.classList.add("_active");
  forms_personal_info_step_indicator_title.classList.add("__active");

  forms_contacts_step_indicator.classList.remove("active");
  forms_contacts_step_indicator_number.classList.remove("_active");
  forms_contacts_step_indicator_title.classList.remove("__active");

  forms_documents_step_indicator.classList.remove("active");
  forms_documents_step_indicator_number.classList.remove("_active");
  forms_documents_step_indicator_title.classList.remove("__active");

  order_ticket_form_container_review_and_submit_indicator.style.borderColor = "white";

  order_ticket_form_container_personal_info.style.display = "block";

  setTimeout(()=>{
  order_ticket_form_container_personal_info.style.opacity = 1;
  },10);

  order_ticket_form_container_contacts_info.style.display = "none";
  order_ticket_form_container_contacts_info.style.opacity = 0;
  order_ticket_form_container_documents_info.style.display = "none";
  order_ticket_form_container_documents_info.style.opacity = 0;
  order_ticket_form_container_review_and_submit.style.display = "none";
  order_ticket_form_container_review_and_submit.style.opacity = 0;

}

//hotels
function show_hotels_booking_form_hotel_rates_fieldset(){

  order_room_form_hotel_rates_list_indicator.classList.add("active");
  order_room_form_hotel_rates_list_indicator_number.classList.add("_active");
  order_room_form_hotel_rates_list_indicator_title.classList.add("__active");

  hotels_final_price_step_indicator.classList.remove("active");
  hotels_final_price_step_indicator_number.classList.remove("_active");
  hotels_final_price_step_indicator_title.classList.remove("__active");

  hotels_forms_step_three_indicator.classList.remove("active");
  hotels_forms_step_three_indicator_number.classList.remove("_active");
  hotels_forms_step_three_indicator_title.classList.remove("__active");

  hotels_order_ticket_form_container_review_and_submit_indicator.style.borderColor = "white";

  order_room_form_final_price_container.style.display = "none";
  order_room_form_final_price_container.style.opacity = 0;
  order_room_form_hotel_rates_list_container.style.display = "block";

  setTimeout(()=>{
    order_room_form_hotel_rates_list_container.style.opacity = 1;
  }, 10);
  
  order_room_form_step_three_container.style.display = "none";
  order_room_form_step_three_container.style.opacity = 0;
  hotels_order_ticket_form_container_review_and_submit_container.style.display = "none";
  hotels_order_ticket_form_container_review_and_submit_container.style.opacity = 0;

}

//flights
function show_finish_booking_form_contacts_fieldset(){

  forms_personal_info_step_indicator.classList.add("active");
  forms_personal_info_step_indicator_number.classList.add("_active");
  forms_personal_info_step_indicator_title.classList.add("__active");

  forms_contacts_step_indicator.classList.add("active");
  forms_contacts_step_indicator_number.classList.add("_active");
  forms_contacts_step_indicator_title.classList.add("__active");

  forms_documents_step_indicator.classList.remove("active");
  forms_documents_step_indicator_number.classList.remove("_active");
  forms_documents_step_indicator_title.classList.remove("__active");

  order_ticket_form_container_review_and_submit_indicator.style.borderColor = "white";

  order_ticket_form_container_personal_info.style.display = "none";
  order_ticket_form_container_personal_info.style.opacity = 0;
  order_ticket_form_container_contacts_info.style.display = "block";

  setTimeout(()=>{
    order_ticket_form_container_contacts_info.style.opacity = 1;
  }, 10);
  
  order_ticket_form_container_documents_info.style.display = "none";
  order_ticket_form_container_documents_info.style.opacity = 0;
  order_ticket_form_container_review_and_submit.style.display = "none";
  order_ticket_form_container_review_and_submit.style.opacity = 0;

}

//hotels
function show_hotels_booking_form_final_price_fieldset(){

  order_room_form_hotel_rates_list_indicator.classList.add("active");
  order_room_form_hotel_rates_list_indicator_number.classList.add("_active");
  order_room_form_hotel_rates_list_indicator_title.classList.add("__active");

  hotels_final_price_step_indicator.classList.add("active");
  hotels_final_price_step_indicator_number.classList.add("_active");
  hotels_final_price_step_indicator_title.classList.add("__active");

  hotels_forms_step_three_indicator.classList.remove("active");
  hotels_forms_step_three_indicator_number.classList.remove("_active");
  hotels_forms_step_three_indicator_title.classList.remove("__active");

  hotels_order_ticket_form_container_review_and_submit_indicator.style.borderColor = "white";

  order_room_form_hotel_rates_list_container.style.display = "none";
  order_room_form_hotel_rates_list_container.style.opacity = 0;
  order_room_form_final_price_container.style.display = "block";

  setTimeout(()=>{
    order_room_form_final_price_container.style.opacity = 1;
  }, 10);
  
  order_room_form_step_three_container.style.display = "none";
  order_room_form_step_three_container.style.opacity = 0;
  hotels_order_ticket_form_container_review_and_submit_container.style.display = "none";
  hotels_order_ticket_form_container_review_and_submit_container.style.opacity = 0;

}

//flights
function show_finish_booking_form_documents_fieldset(){

  forms_personal_info_step_indicator.classList.add("active");
  forms_personal_info_step_indicator_number.classList.add("_active");
  forms_personal_info_step_indicator_title.classList.add("__active");

  forms_contacts_step_indicator.classList.add("active");
  forms_contacts_step_indicator_number.classList.add("_active");
  forms_contacts_step_indicator_title.classList.add("__active");

  forms_documents_step_indicator.classList.add("active");
  forms_documents_step_indicator_number.classList.add("_active");
  forms_documents_step_indicator_title.classList.add("__active");

  order_ticket_form_container_review_and_submit_indicator.style.borderColor = "white";

  order_ticket_form_container_personal_info.style.display = "none";
  order_ticket_form_container_personal_info.style.opacity = 0;
  order_ticket_form_container_contacts_info.style.display = "none";
  order_ticket_form_container_contacts_info.style.opacity = 0;
  order_ticket_form_container_documents_info.style.display = "block";
  order_ticket_form_container_review_and_submit.style.display = "none";
  order_ticket_form_container_review_and_submit.style.opacity = 0;

  setTimeout(()=>{
    order_ticket_form_container_documents_info.style.opacity = 1;
  }, 10);

}

//hotels
function show_hotels_booking_user_info_forms(){

  order_room_form_hotel_rates_list_indicator.classList.add("active");
  order_room_form_hotel_rates_list_indicator_number.classList.add("_active");
  order_room_form_hotel_rates_list_indicator_title.classList.add("__active");

  hotels_final_price_step_indicator.classList.add("active");
  hotels_final_price_step_indicator_number.classList.add("_active");
  hotels_final_price_step_indicator_title.classList.add("__active");

  hotels_forms_step_three_indicator.classList.add("active");
  hotels_forms_step_three_indicator_number.classList.add("_active");
  hotels_forms_step_three_indicator_title.classList.add("__active");

  hotels_order_ticket_form_container_review_and_submit_indicator.style.borderColor = "white";

  order_room_form_hotel_rates_list_container.style.display = "none";
  order_room_form_hotel_rates_list_container.style.opacity = 0;
  order_room_form_step_three_container.style.display = "block";

  setTimeout(()=>{
    order_room_form_step_three_container.style.opacity = 1;
  }, 10);
  
  order_room_form_final_price_container.style.display = "none";
  order_room_form_final_price_container.style.opacity = 0;
  hotels_order_ticket_form_container_review_and_submit_container.style.display = "none";
  hotels_order_ticket_form_container_review_and_submit_container.style.opacity = 0;

}

function show_finish_booking_form_reivew_and_submit(){

  forms_personal_info_step_indicator.classList.add("active");
  forms_personal_info_step_indicator_number.classList.add("_active");
  forms_personal_info_step_indicator_title.classList.add("__active");

  forms_contacts_step_indicator.classList.add("active");
  forms_contacts_step_indicator_number.classList.add("_active");
  forms_contacts_step_indicator_title.classList.add("__active");

  forms_documents_step_indicator.classList.add("active");
  forms_documents_step_indicator_number.classList.add("_active");
  forms_documents_step_indicator_title.classList.add("__active");

  order_ticket_form_container_review_and_submit_indicator.style.borderColor = "rgb(231, 124, 2)";

  order_ticket_form_container_personal_info.style.display = "none";
  order_ticket_form_container_personal_info.style.opacity = 0;
  order_ticket_form_container_contacts_info.style.display = "none";
  order_ticket_form_container_contacts_info.style.opacity = 0;
  order_ticket_form_container_documents_info.style.display = "none";
  order_ticket_form_container_documents_info.style.opacity = 0;
  order_ticket_form_container_review_and_submit.style.display = "block";
  
  setTimeout(()=>{
    order_ticket_form_container_review_and_submit.style.opacity = 1;
  }, 10);

  booking_forms_render_all_travelers();

}

//hotels
function show_hotels_review_booking_detials(){

  order_room_form_hotel_rates_list_indicator.classList.add("active");
  order_room_form_hotel_rates_list_indicator_number.classList.add("_active");
  order_room_form_hotel_rates_list_indicator_title.classList.add("__active");

  hotels_final_price_step_indicator.classList.add("active");
  hotels_final_price_step_indicator_number.classList.add("_active");
  hotels_final_price_step_indicator_title.classList.add("__active");

  hotels_forms_step_three_indicator.classList.add("active");
  hotels_forms_step_three_indicator_number.classList.add("_active");
  hotels_forms_step_three_indicator_title.classList.add("__active");

  hotels_order_ticket_form_container_review_and_submit_indicator.style.borderColor = "rgb(231, 124, 2)";

  order_room_form_hotel_rates_list_container.style.display = "none";
  order_room_form_hotel_rates_list_container.style.opacity = 0;
  hotels_order_ticket_form_container_review_and_submit_container.style.display = "block";

  setTimeout(()=>{
    hotels_order_ticket_form_container_review_and_submit_container.style.opacity = 1;
  }, 10);
  
  order_room_form_final_price_container.style.display = "none";
  order_room_form_final_price_container.style.opacity = 0;
  order_room_form_step_three_container.style.display = "none";
  order_room_form_step_three_container.style.opacity = 0;

}

if(localStorage.getItem("main_search_type") === "hotel_search"){
  
  if($(window).width > 700){

    show_hotels_forms_from_main_menu();

  }else{

    hotels_accommodations_parameters.style.display = "block";
    car_rentals_pickup_time_parameters.style.display = "none";
    trip_type_parameters.style.display = "none";

    flights_search_tickets_form_container.style.display = "none";
    hotels__search_form_container.style.display = "flex";
    car_rentals_search_form_container.style.display = "none";
    set_all_main_menu_items_as_not_selected();
    main_menu_hotels_option.classList.add("active_top_nav_link");
    mobile_menu_hotels_option.classList.add("active_mobile_nav_link")

    flight_set_off_additional_options.style.display = "none";
    hotel_set_off_additional_options.style.display = "flex";
    rental_cars_set_off_additional_options.style.display = "none";
    
  }
}

var is_wide_hotels_card_pic = [];
function show_full_hotel_list_pic(number){
  let elem_height = $("#hotels_card_booking_desc"+number).height();
  let desc_width = $("#hotels_card_booking_desc"+number).width();
  
  if(!is_wide_hotels_card_pic[number]){
    
      document.getElementById("hotels_card_booking_desc"+number).style.maxHeight = elem_height+"px";
      document.getElementById("hotels_card_booking_desc"+number).style.opacity = 0;
      document.getElementById("hotels_card_booking_desc"+number).style.overflow = "hidden";
      setTimeout(()=>{
        document.getElementById("hotels_card_booking_desc"+number).style.minWidth = "1px";
        document.getElementById("hotels_card_pic"+number).style.minWidth = "100%";
        document.getElementById("hotels_card_pic_show_full_pic_icon"+number).style.transform = "rotate(180deg)";
      }, 100);

      setTimeout(()=>{
        document.getElementById("hotels_card_pic_title"+number).style.opacity = 1;
      }, 300);

  }else{
      
      setTimeout(()=>{
        document.getElementById("hotels_card_pic"+number).style.minWidth = "200px";
        document.getElementById("hotels_card_booking_desc"+number).style.minWidth = "static";
        document.getElementById("hotels_card_pic_show_full_pic_icon"+number).style.transform = "rotate(0deg)";
      }, 100);

      setTimeout(()=>{
        document.getElementById("hotels_card_pic_title"+number).style.opacity = 0;
        document.getElementById("hotels_card_booking_desc"+number).style.overflow = "initial";
        document.getElementById("hotels_card_booking_desc"+number).style.opacity = 1;
      }, 300);

  }

  is_wide_hotels_card_pic[number] = !is_wide_hotels_card_pic[number];
  
}

function show_full_description(number){
  alert(number);
}