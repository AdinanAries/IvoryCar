//getting dom elements

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
  $("#main_round_trip_type_options").slideDown("fast");
  $("#main_hotels_accommodations_parameters_options").slideDown("fast");
  $("#car_rentals_pickup_time_parameters_options").slideDown("fast");
})
trip_type_param_round_trip_option_container.addEventListener("mouseleave", (evnt)=>{
  $("#car_rentals_pickup_time_parameters_options").slideUp("fast");
  $("#main_hotels_accommodations_parameters_options").slideUp("fast");
  $("#main_round_trip_type_options").slideUp("fast");
});

city_search_fieldset.addEventListener("focusin", (evnt)=>{
  $("#main_from_where_city_show_container").slideDown("fast");
})
city_search_fieldset.addEventListener("focusout", (evnt)=>{
  $("#main_from_where_city_show_container").slideUp("fast");
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

//function to show flights search form
main_menu_flights_option.addEventListener("click", () => {
  
  trip_type_parameters.style.display = "block";
  hotels_accommodations_parameters.style.display = "none";
  car_rentals_pickup_time_parameters.style.display = "none";

  car_rentals_search_form_container.style.display = "none";
  flights_search_tickets_form_container.style.display = "flex"
  hotels__search_form_container.style.display = "none";
  
  set_all_main_menu_items_as_not_selected();
  main_menu_flights_option.classList.add("active_top_nav_link");
  mobile_menu_flights_option.classList.add("active_mobile_nav_link")
  //jumbotron_background.style.display = "block";
});

mobile_menu_flights_option.addEventListener("click", () => {
  
  trip_type_parameters.style.display = "block";
  hotels_accommodations_parameters.style.display = "none";
  car_rentals_pickup_time_parameters.style.display = "none";

  car_rentals_search_form_container.style.display = "none";
  flights_search_tickets_form_container.style.display = "flex"
  hotels__search_form_container.style.display = "none";
  
  set_all_main_menu_items_as_not_selected();
  main_menu_flights_option.classList.add("active_top_nav_link");
  mobile_menu_flights_option.classList.add("active_mobile_nav_link")
  //jumbotron_background.style.display = "block";
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
  mobile_menu_hotels_option.classList.add("active_mobile_nav_link")
  //jumbotron_background.style.display = "block";
});

mobile_menu_hotels_option.addEventListener("click", () => {
  
  hotels_accommodations_parameters.style.display = "block";
  car_rentals_pickup_time_parameters.style.display = "none";
  trip_type_parameters.style.display = "none";

  flights_search_tickets_form_container.style.display = "none";
  hotels__search_form_container.style.display = "flex";
  car_rentals_search_form_container.style.display = "none";
  set_all_main_menu_items_as_not_selected();
  main_menu_hotels_option.classList.add("active_top_nav_link");
  mobile_menu_hotels_option.classList.add("active_mobile_nav_link")
  //jumbotron_background.style.display = "block";
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
  //jumbotron_background.style.display = "block";
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
          document.getElementById("from_where_city_input_container").style.minWidth = "90%";
          document.getElementById("to_where_city_input_container").style.minWidth = "10%";
      },200);
      setTimeout(()=>{
        document.getElementById("airports_exchange_search_fields_values_icon").style.display = "none";
        document.getElementById("to_where_city_input_container").style.display = "none";
      }, 400);
    
})
to_where_search_input_fld.addEventListener("focusin", ()=>{
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

logo_as_home_btn.addEventListener("click", ()=>{
  window.location.href = "/";
})

$("#from_when_search_input").datepicker({minDate: 0});
$("#to_when_search_input").datepicker({minDate: 0});
$("#hotels_from_when_search_input").datepicker({minDate: 0});
$("#hotels_to_when_search_input").datepicker({minDate: 0});
$("#car_rentals_from_when_search_input").datepicker({minDate: 0});
$("#car_rentals_to_when_search_input").datepicker({minDate: 0});


var hero_section_container = document.querySelector(".hero_section_container"); 
        /* Gets the amount of height 
        of the element from the 
        viewport and adds the 
        pageYOffset to get the height 
        relative to the page */ 
        var currStickyPos =  
        hero_section_container.getBoundingClientRect().top + window.pageYOffset;

        window.onscroll = function() {
          
            if($(window).width() < 700 && window.pageYOffset > (currStickyPos - 100)){
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
              document.getElementById("additional_search_inputs_and_Options").style.display = "flex";
              //$("#multi_city_search_inputs_display").slideDown("fast");
            }

            /* Check if the current Y offset 
            is greater than the position of 
            the element */ 
            if (window.pageYOffset > currStickyPos) { 

              hero_section_container.style.position = "fixed"; 
              hero_section_container.style.top = "0px";
              mobile_search_change_type_of_service.style.paddingTop = "15px";
              document.body.style.paddingTop = "100px";
              $("#multi_city_search_inputs_display").slideUp("fast");

              if($(window).width() < 700){
                document.body.style.paddingTop = "200px";
              }

              if($(window).width() < 700 && window.pageYOffset > (currStickyPos + 210)){
                
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
                MobilehowSearchFormInputsBtn.style.display = "none";
                MobilehowSearchFormInputsBtn.style.display = "block";

              }

              if($(window).width() < 450){
                hero_section_container.style.minWidth = "100vw";
              }

            } else { 
              
              document.getElementById("additional_search_inputs_and_Options").style.display = "flex";

              $("#multi_city_search_inputs_display").slideDown("fast");

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


              if($(window).width() < 450)
                hero_section_container.style.minWidth = "calc(100vw - 20px)";

              mobile_search_change_type_of_service.style.paddingTop = 0;
              document.body.style.paddingTop = "0";
              hero_section_container.style.position = "initial"; 
              hero_section_container.style.top = "initial"; 

            } 
        }

        MobilehowSearchFormInputsBtn.addEventListener("click", (evnt)=>{

            document.getElementById("additional_search_inputs_and_Options").style.display = "flex";

            $("#multi_city_search_inputs_display").slideDown("fast");

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
              MobilehowSearchFormInputsBtn.style.display = "none";
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

function add_a_flight(setting_number){

  globalFlightId++;

  let multi_city_search_inputs_display = document.getElementById("multi_city_search_inputs_display");

  if(setting_number == 1){
    document.getElementById("multiple_city_search_option").checked = true;
  }
  if(setting_number == 0){

    if(document.getElementById("multiple_city_search_option").checked === true){
      //this is where to reset everything
      $("#multi_city_search_inputs_display").slideUp("fast");
      setTimeout(()=>{
        multi_city_search_inputs_display.innerHTML = ``;
      })
      
      return null;
    }
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
            From where
            </p>
          </div>
          <div onclick="edit_to_where_of_added_flight(${globalFlightId})">
            <p class="edit_icon"><i class="fa fa-pencil" aria-hidden="true"></i></p>
            <p  style="color:rgb(255, 102, 0); font-size: 12px; font-weight: bolder;">
            <i class="fa fa-map-marker" aria-hidden="true" style="margin-right: 5px; color: white;"></i>To </p>
            <p id="each_added_flight_to_where_input${globalFlightId}" style="color: white; margin: 5px; font-size: 14px">
            To where
            </p>
          </div>
        </div>
        <div style="display: flex; flex-direction: row !important; padding: 0;">
          <div onclick="edit_from_when_of_added_flight(${globalFlightId});"  style="margin-right: 15px;">
            <p class="edit_icon"><i class="fa fa-pencil" aria-hidden="true"></i></p>
            <p class="edit_icon"><i class="fa fa-pencil" aria-hidden="true"></i></p>
            <p  style="color:rgb(255, 102, 0); font-size: 12px; font-weight: bolder;">
            <i class="fa fa-calendar" aria-hidden="true" style="margin-right: 5px; color: white;"></i>Depature </p>
            <input type="text" id="each_added_flight_from_when_input${globalFlightId}" readonly="true"
              style="max-width: 100px; color: white; margin: 5px; font-size: 14px;  background: none; border: none;" placeholder="Departure date" value="" />
            
          </div>
          <div onclick="edit_to_when_of_added_flight(${globalFlightId});">
            <p class="edit_icon"><i class="fa fa-pencil" aria-hidden="true"></i></p>
            <p  style="color:rgb(255, 102, 0); font-size: 12px; font-weight: bolder;">
            <i class="fa fa-calendar" aria-hidden="true" style="margin-right: 5px; color: white;"></i>Return </p>
            <input type="text" id="each_added_flight_to_when_input${globalFlightId}" readonly="true"
              style="max-width: 100px; color: white; margin: 5px; font-size: 14px; background: none; border: none;" placeholder="Return date" value="" />
            
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

  initialize_date_chooser(("each_added_flight_from_when_input"+globalFlightId), ("each_added_flight_to_when_input"+globalFlightId));
  
}

function remove_a_flight(id){
  let flight_id = "each_added_flight"+id;
  $("#"+flight_id).slideUp("fast");
}

function edit_from_where_of_added_flight(number){
  
  let thisId = ("each_added_flight_from_where_input"+number);

  let each_added_flight_from_where_input =  document.getElementById(thisId);

    $("#multi_city_search_inputs_display").slideUp("fast");

    if($(window).width() < 1026){
      $('html, body').animate({
          scrollTop: 90
        }, 500);
    }

    from_where_search_input_fld.focus();

    current_focus_out_func = function(){
      from_where_search_input_fld.blur();
      $("#multi_city_search_inputs_display").slideDown("fast");
    }
    current_onchange_func = function(){
      console.log(each_added_flight_from_where_input);
      each_added_flight_from_where_input.innerText = from_where_search_input_fld.value;
      from_where_search_input_fld.value = '';
      from_where_search_input_fld.blur();
      $("#multi_city_search_inputs_display").slideDown("fast");

      from_where_search_input_fld.removeEventListener("change", current_onchange_func);
      from_where_search_input_fld.removeEventListener("focusout", current_focus_out_func);
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
        scrollTop: 90
      }, 500);
  }

  to_where_search_input_fld.focus();

  current_focus_out_func = function(){
    to_where_search_input_fld.blur();
    $("#multi_city_search_inputs_display").slideDown("fast");
  }
  current_onchange_func = function(){
    console.log(each_added_flight_to_where_input);
    each_added_flight_to_where_input.innerText = to_where_search_input_fld.value;
    to_where_search_input_fld.value = '';
    to_where_search_input_fld.blur();
    $("#multi_city_search_inputs_display").slideDown("fast");

    to_where_search_input_fld.removeEventListener("change",current_onchange_func);
    to_where_search_input_fld.removeEventListener("focusout",current_focus_out_func);
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

function initialize_date_chooser(first_input_Id, second_input_id){
  $("#"+first_input_Id).datepicker({minDate: 0});
  $("#"+second_input_id).datepicker({minDate: 0});
}