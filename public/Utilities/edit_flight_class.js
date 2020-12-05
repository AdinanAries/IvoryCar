class MultiCityWorkFlow {

    constructor(some_func_ref){

        this.currentID = id;
        this.removeEventListener(some_func_ref);
        
    }

    remove_onchange_event_listener(some_input_id, func_ref){
        document.getElementById(some_input_id).removeEventListener("change", func_ref);
    }

    edit_from_where_of_added_flight(main_search_input_field_id, some_div_for_listing_items_id, event_listener_to_add){
  
        let search_input_elem = document.getElementById(main_search_input_field_id);
      
          $("#"+some_div_for_listing_items_id).slideUp("fast");
      
         if($(window).width() < 1026){
            $('html, body').animate({
                scrollTop: 90
            }, 500);
        }

        search_input_elem.focus();

        search_input_elem.addEventListener("change", event_listener_to_add);
        
    }
}