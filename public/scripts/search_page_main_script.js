//getting dom elements

var logo_as_home_btn = document.getElementById("logo_as_home_btn");
var trip_type_param_number_of_people_option = document.getElementById("trip_type_param_number_of_people_option");
var trip_type_param_flight_class_option = document.getElementById("trip_type_param_flight_class_option");
var trip_type_param_round_trip_option = document.getElementById("trip_type_param_round_trip_option");

var MobilehowSearchFormInputsBtn = document.getElementById("MobilehowSearchFormInputsBtn");
var search_tickets_form_container = document.getElementsByClassName("search_tickets_form_container")[0];

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

trip_type_param_round_trip_option_container.addEventListener("mouseenter", (evnt)=>{
  $("#main_round_trip_type_options").slideDown("fast");
})
trip_type_param_round_trip_option_container.addEventListener("mouseleave", (evnt)=>{
  $("#main_round_trip_type_options").slideUp("fast");
});

city_search_fieldset.addEventListener("focusin", (evnt)=>{
  $("#main_from_where_city_show_container").slideDown("fast");
})
city_search_fieldset.addEventListener("focusout", (evnt)=>{
  $("#main_from_where_city_show_container").slideUp("fast");
})

date_search_fieldset.addEventListener("focusin", (evnt)=>{
  $("#main_from_when_date_show_container").slideDown("fast");
})
date_search_fieldset.addEventListener("focusout", (evnt)=>{
  $("#main_from_when_date_show_container").slideUp("fast");
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


logo_as_home_btn.addEventListener("click", ()=>{
  window.location.href = "/";
})

$("#from_when_search_input").datepicker({minDate: 0});
$("#to_when_search_input").datepicker({minDate: 0});



var hero_section_container = document.querySelector(".hero_section_container"); 
        /* Gets the amount of height 
        of the element from the 
        viewport and adds the 
        pageYOffset to get the height 
        relative to the page */ 
        var currStickyPos =  
        hero_section_container.getBoundingClientRect().top + window.pageYOffset; 
  
        window.onscroll = function() { 
            /* Check if the current Y offset 
            is greater than the position of 
            the element */ 
            if (window.pageYOffset > currStickyPos) { 

              hero_section_container.style.position = "fixed"; 
              hero_section_container.style.top = "0px";
              document.body.style.paddingTop = "100px";

              if($(window).width() < 700){
                document.body.style.paddingTop = "200px";
              }

              if($(window).width() < 700 && window.pageYOffset > (currStickyPos + 210)){
                
                city_search_fieldset.style.display = "none";
                date_search_fieldset.style.display = "none";
                home_page_search_button.style.display = "none";
                MobilehowSearchFormInputsBtn.style.display = "none";
                MobilehowSearchFormInputsBtn.style.display = "block";

                if($(window).width() < 450){
                  hero_section_container.style.minWidth = "100vw";
                }

              }
            } else { 

              hero_section_container.style.position = "initial"; 
              hero_section_container.style.top = "initial"; 
              document.body.style.paddingTop = "0";

              if($(window).width() < 450)
                hero_section_container.style.minWidth = "calc(100vw - 20px)";

              city_search_fieldset.style.display = "flex";
              date_search_fieldset.style.display = "flex";

              city_search_fieldset.style.display = "flex";
              date_search_fieldset.style.display = "flex";
              home_page_search_button.style.display = "flex";
              MobilehowSearchFormInputsBtn.style.display = "none";
              
            } 
        }

        MobilehowSearchFormInputsBtn.addEventListener("click", (evnt)=>{

            city_search_fieldset.style.opacity = 0;
            date_search_fieldset.style.opacity = 0;
            home_page_search_button.style.opacity = 0;

              $("#city_search_fieldset").slideDown("fast");
              $("#date_search_fieldset").slideDown("fast");
              $("#home_page_search_button").slideDown("fast");

              city_search_fieldset.style.display = "flex";
              date_search_fieldset.style.display = "flex";
              city_search_fieldset.style.transition = "opacity 2s";
              date_search_fieldset.style.transition = "opacity 2s";
              home_page_search_button.style.transition = "opacity 2s";
              city_search_fieldset.style.opacity = 1;
              date_search_fieldset.style.opacity = 1;
              home_page_search_button.style.opacity = 1;
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