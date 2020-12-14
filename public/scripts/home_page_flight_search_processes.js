//dom elements
var home_page_search_button = document.getElementById("home_page_search_button");
var home_page_hotels_search_button = document.getElementById("home_page_hotels_search_button");
//Global data

var flight_search_flight_class = {
    f_class: "Economy"
}

var flight_search_trip_round = {
    t_round: "Round-trip"
}

var flight_search_number_of_people = {
    types_of_people_added: ["adults"],
    total_number_of_people: 1,
    adults: { 
        number: 1,
        price: 300000,
    },
    students:{
        number: 0,
        price: 290000
    } ,
    seniors: {
       number: 0,
       price: 270000
    },
    youth:{
        number: 0,
        price: 250000
    } ,
    children: {
        number: 0,
        price: 200000
    },
    toddlers: {
        number: 0,
        price: 170000
    },
    infants: {
        number: 0,
        price: 115000
    }
}

function set_flight_trip_round_for_search(f_trip_round){
    flight_search_trip_round.t_round = f_trip_round;
    document.getElementById("trip_type_param_round_trip_option").innerHTML = `${f_trip_round} 
    <i class="fa fa-caret-down" aria-hidden="true"></i>`;

    if(f_trip_round === "One-way"){

        document.getElementById("airportSearch_date_title_span").innerHTML = "Depature Date"
        $(function() {
            $("#from_when_search_input").daterangepicker({
              singleDatePicker: true,
              showDropdowns: true
            }, function(start, end, label) {
                
                setTimeout(()=>{
                    document.getElementById("from_when_search_input").value = start.toString().substring(0,11);
                }, 100);

              /*var years = moment().diff(start, 'years');
              alert("You are " + years + " years old!");*/
            });
          });

        /*document.getElementById("to_where_input_fld_tile").style.display = "none";
        document.getElementById("airports_exchange_search_fields_values_icon_container").style.display = "none";
        document.getElementById("to_where_city_input_container").style.display = "none";
        //document.getElementById("to_when_date_input_container").style.display = "none";
        document.getElementById("from_where_city_input_container").style.minWidth = "100%";
        //document.getElementById("from_when_date_input_container").style.minWidth = "100%";
        document.getElementById("from_where_search_input_fld").style.width = "calc(100% - 40px)";
        //document.getElementById("from_when_search_input").style.width = "calc(100% - 40px)";
        //document.getElementById("to_where_search_display_span").innerHTML = "";*/
    }else{

        document.getElementById("airportSearch_date_title_span").innerHTML = "Depature - Return Dates"
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

        /*setTimeout(()=>{
            document.getElementById("to_where_input_fld_tile").style.display = "block";
        },500)
        document.getElementById("airports_exchange_search_fields_values_icon_container").style.display = "block";
        document.getElementById("to_where_city_input_container").style.display = "block";
        //document.getElementById("to_when_date_input_container").style.display = "block";
        document.getElementById("from_where_city_input_container").style.minWidth = "44%";
        //document.getElementById("from_when_date_input_container").style.minWidth = "50%";
        document.getElementById("from_where_search_input_fld").style.width = "calc(100% - 40px)";
        //document.getElementById("from_when_search_input").style.width = "calc(100% - 40px)";
        /*document.getElementById("to_where_search_display_span").innerHTML = `<span style="font-size: 12px;">
                and 
                <span style="font-weight: bolder; font-size: 12px;">destination</span> above
            </span>`;*/
    }
}

function set_flight_class_for_search(f_class_param){
    flight_search_flight_class.f_class = f_class_param;
    document.getElementById("trip_type_param_flight_class_option").innerHTML = `${f_class_param} 
    <i class="fa fa-caret-down" aria-hidden="true"></i>`;
}


function add_person_to_flight_search(person_type){
    if(flight_search_number_of_people.total_number_of_people >= 15){
        document.getElementById("number_of_people_indicator").style.display = "block";
        document.getElementById("number_of_people_indicator").innerHTML = 
        "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> only maximum of 15 people allowed";
    }
    else{
        if(person_type === "Adult"){
            flight_search_number_of_people.adults.number += 1;
            flight_search_number_of_people.total_number_of_people += 1;

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "adults"
            });

            if(!item){
                flight_search_number_of_people.types_of_people_added.push("adults");
            }

            document.getElementById("number_of_adults_count").innerText = flight_search_number_of_people.adults.number;

        }else if(person_type === "Student"){
            flight_search_number_of_people.students.number += 1;
            flight_search_number_of_people.total_number_of_people += 1;

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "students"
            });

            if(!item){
                flight_search_number_of_people.types_of_people_added.push("students");
            }

            document.getElementById("number_of_students_count").innerText = flight_search_number_of_people.students.number;

        }else if(person_type === "Senior"){
            flight_search_number_of_people.seniors.number += 1;
            flight_search_number_of_people.total_number_of_people += 1;

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "seniors"
            });

            if(!item){
                flight_search_number_of_people.types_of_people_added.push("seniors");
            }

            document.getElementById("number_of_seniors_count").innerText = flight_search_number_of_people.seniors.number;

        }else if(person_type === "Youth"){
            flight_search_number_of_people.youth.number += 1;
            flight_search_number_of_people.total_number_of_people += 1;

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "youth"
            });

            if(!item){
                flight_search_number_of_people.types_of_people_added.push("youth");
            }

            document.getElementById("number_of_youth_count").innerText = flight_search_number_of_people.youth.number;

        }else if(person_type === "Child"){
            flight_search_number_of_people.children.number += 1;
            flight_search_number_of_people.total_number_of_people += 1;

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "children"
            });

            if(!item){
                flight_search_number_of_people.types_of_people_added.push("children");
            }

            document.getElementById("number_of_children_count").innerText = flight_search_number_of_people.children.number;

        }else if(person_type === "Toddler"){
            flight_search_number_of_people.toddlers.number += 1;
            flight_search_number_of_people.total_number_of_people += 1;

            if(flight_search_number_of_people.adults.number === 0){
                
                flight_search_number_of_people.adults.number += 1;
                flight_search_number_of_people.total_number_of_people += 1;

                let item = flight_search_number_of_people.types_of_people_added.find( person => {
                    return person === "adults"
                });
    
                if(!item){
                    flight_search_number_of_people.types_of_people_added.push("adults");
                }
    
                document.getElementById("number_of_adults_count").innerText = flight_search_number_of_people.adults.number;
            }

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "toddlers"
            });

            if(!item){
                flight_search_number_of_people.types_of_people_added.push("toddlers");
            }

            document.getElementById("number_of_toddlers_count").innerText = flight_search_number_of_people.toddlers.number;

        }else if(person_type === "Infant"){
            flight_search_number_of_people.infants.number += 1;
            flight_search_number_of_people.total_number_of_people += 1;

            if(flight_search_number_of_people.adults.number === 0){

                flight_search_number_of_people.adults.number += 1;
                flight_search_number_of_people.total_number_of_people += 1;

                let item = flight_search_number_of_people.types_of_people_added.find( person => {
                    return person === "adults"
                });
    
                if(!item){
                    flight_search_number_of_people.types_of_people_added.push("adults");
                }
    
                document.getElementById("number_of_adults_count").innerText = flight_search_number_of_people.adults.number;
            }

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "infants"
            });

            if(!item){
                flight_search_number_of_people.types_of_people_added.push("infants");
            }

            document.getElementById("number_of_infants_count").innerText = flight_search_number_of_people.infants.number;

        }

        document.getElementById("number_of_people_indicator").style.display = "none";
        document.getElementById("number_of_people_indicator").innerHTML = "";

    }

    if(flight_search_number_of_people.types_of_people_added.length > 1){
        trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} people 
        <i class="fa fa-caret-down" aria-hidden="true"></i>`;
    }else if(flight_search_number_of_people.types_of_people_added.length === 1 && flight_search_number_of_people.total_number_of_people > 1){
        trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} ${flight_search_number_of_people.types_of_people_added[0]} 
        <i class="fa fa-caret-down" aria-hidden="true"></i>`;
    }else if(flight_search_number_of_people.types_of_people_added.length === 1 && flight_search_number_of_people.total_number_of_people === 1){
        if(flight_search_number_of_people.types_of_people_added[0] === "adults"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} adult 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "students"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} student 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "seniors"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} senior 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "youth"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} youth 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "children"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} child 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "toddlers"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} toddler 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "infants"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} infant 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
    }
    /*alert("number of people: " + flight_search_number_of_people.total_number_of_people)
    alert("types of people " +  flight_search_number_of_people.types_of_people_added)*/
}


function remove_person_from_flight_search(person_type){
    let adult_subract_clicked = false;

    if(flight_search_number_of_people.total_number_of_people <= 1){
        if(person_type === "Adult" && flight_search_number_of_people.adults.number === 1){
            document.getElementById("number_of_people_indicator").style.display = "block";
            document.getElementById("number_of_people_indicator").innerHTML = 
            "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> minimum of 1 person allowed";
        }
        if(person_type === "Student" && flight_search_number_of_people.students.number === 1){
            document.getElementById("number_of_people_indicator").style.display = "block";
            document.getElementById("number_of_people_indicator").innerHTML = 
            "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> minimum of 1 person allowed";
        }
        if(person_type === "Senior" && flight_search_number_of_people.seniors.number === 1){
            document.getElementById("number_of_people_indicator").style.display = "block";
            document.getElementById("number_of_people_indicator").innerHTML = 
            "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> minimum of 1 person allowed";
        }
        if(person_type === "Youth" && flight_search_number_of_people.youth.number === 1){
            document.getElementById("number_of_people_indicator").style.display = "block";
            document.getElementById("number_of_people_indicator").innerHTML = 
            "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> minimum of 1 person allowed";
        }
        if(person_type === "Child" && flight_search_number_of_people.children.number === 1){
            document.getElementById("number_of_people_indicator").style.display = "block";
            document.getElementById("number_of_people_indicator").innerHTML = 
            "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> minimum of 1 person allowed";
        }
    }
    else{
        if(person_type === "Adult"){
            adult_subract_clicked = true;
            if( (flight_search_number_of_people.infants.number > 0 ||
                flight_search_number_of_people.toddlers.number > 0) &&
                flight_search_number_of_people.adults.number <= 1){
                    //do nothing
                }else{

                    if(flight_search_number_of_people.adults.number > 0){
                        flight_search_number_of_people.adults.number -= 1;
                        flight_search_number_of_people.total_number_of_people -= 1;
                    }
        
                    let item = flight_search_number_of_people.types_of_people_added.find( person => {
                        return person === "adults"
                    });
        
                    if(item){
                        if(flight_search_number_of_people.adults.number === 0)
                            flight_search_number_of_people.types_of_people_added.splice (
                                flight_search_number_of_people.types_of_people_added.indexOf("adults"), 1);
                    }
        
                    document.getElementById("number_of_adults_count").innerText = flight_search_number_of_people.adults.number;
                }

        }else if(person_type === "Student"){

            if(flight_search_number_of_people.students.number > 0){
                flight_search_number_of_people.students.number -= 1;
                flight_search_number_of_people.total_number_of_people -= 1;
            }

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "students"
            });

            if(item){
                if(flight_search_number_of_people.students.number === 0)
                    flight_search_number_of_people.types_of_people_added.splice (
                        flight_search_number_of_people.types_of_people_added.indexOf("students"), 1);
            }

            document.getElementById("number_of_students_count").innerText = flight_search_number_of_people.students.number;

        }else if(person_type === "Senior"){

            if(flight_search_number_of_people.seniors.number > 0){
                flight_search_number_of_people.seniors.number -= 1;
                flight_search_number_of_people.total_number_of_people -= 1;
            }

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "seniors"
            });

            if(item){
                if(flight_search_number_of_people.seniors.number === 0)
                    flight_search_number_of_people.types_of_people_added.splice (
                        flight_search_number_of_people.types_of_people_added.indexOf("seniors"), 1);
            }

            document.getElementById("number_of_seniors_count").innerText = flight_search_number_of_people.seniors.number;

        }else if(person_type === "Youth"){

            if(flight_search_number_of_people.youth.number > 0){
                flight_search_number_of_people.youth.number -= 1;
                flight_search_number_of_people.total_number_of_people -= 1;
            }

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "youth"
            });

            if(item){
                if(flight_search_number_of_people.youth.number === 0)
                    flight_search_number_of_people.types_of_people_added.splice (
                        flight_search_number_of_people.types_of_people_added.indexOf("youth"), 1);
            }

            document.getElementById("number_of_youth_count").innerText = flight_search_number_of_people.youth.number;

        }else if(person_type === "Child"){

            if(flight_search_number_of_people.children.number > 0){
                flight_search_number_of_people.children.number -= 1;
                flight_search_number_of_people.total_number_of_people -= 1;
            }

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "children"
            });

            if(item){
                if(flight_search_number_of_people.children.number === 0)
                    flight_search_number_of_people.types_of_people_added.splice (
                        flight_search_number_of_people.types_of_people_added.indexOf("children"), 1);
            }

            document.getElementById("number_of_children_count").innerText = flight_search_number_of_people.children.number;

        }else if(person_type === "Toddler"){

            if(flight_search_number_of_people.toddlers.number > 0){
                flight_search_number_of_people.toddlers.number -= 1;
                flight_search_number_of_people.total_number_of_people -= 1;
            }

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "toddlers"
            });

            if(item){
                if(flight_search_number_of_people.toddlers.number === 0)
                    flight_search_number_of_people.types_of_people_added.splice (
                        flight_search_number_of_people.types_of_people_added.indexOf("toddlers"), 1);
            }

            document.getElementById("number_of_toddlers_count").innerText = flight_search_number_of_people.toddlers.number;

        }else if(person_type === "Infant"){

            if(flight_search_number_of_people.infants.number > 0){
                flight_search_number_of_people.infants.number -= 1;
                flight_search_number_of_people.total_number_of_people -= 1;
            }

            let item = flight_search_number_of_people.types_of_people_added.find( person => {
                return person === "infants"
            });

            if(item){
                if(flight_search_number_of_people.infants.number === 0)
                    flight_search_number_of_people.types_of_people_added.splice (
                        flight_search_number_of_people.types_of_people_added.indexOf("infants"), 1);
            }

            document.getElementById("number_of_infants_count").innerText = flight_search_number_of_people.infants.number;

        }

        
        document.getElementById("number_of_people_indicator").style.display = "none";
        document.getElementById("number_of_people_indicator").innerHTML = "";

        if( (flight_search_number_of_people.infants.number > 0 ||
            flight_search_number_of_people.toddlers.number > 0) &&
            flight_search_number_of_people.adults.number <= 1 &&
            adult_subract_clicked ){
                
                document.getElementById("number_of_people_indicator").style.display = "block";
                document.getElementById("number_of_people_indicator").innerHTML = 
                "<i class='fa fa-exclamation-triangle' aria-hidden='true'></i> a toddler or infant search must include at least one adult";
            }

    }

    if(flight_search_number_of_people.types_of_people_added.length > 1){
        trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} people 
        <i class="fa fa-caret-down" aria-hidden="true"></i>`;
    }else if(flight_search_number_of_people.types_of_people_added.length === 1 && flight_search_number_of_people.total_number_of_people > 1){
        trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} ${flight_search_number_of_people.types_of_people_added[0]} 
        <i class="fa fa-caret-down" aria-hidden="true"></i>`;
    }else if(flight_search_number_of_people.types_of_people_added.length === 1 && flight_search_number_of_people.total_number_of_people === 1){
        if(flight_search_number_of_people.types_of_people_added[0] === "adults"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} adult 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "students"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} student 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "seniors"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} senior 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "youth"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} youth 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "children"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} child 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "toddlers"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} toddler 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
        if(flight_search_number_of_people.types_of_people_added[0] === "infants"){
            trip_type_param_number_of_people_option.innerHTML = `${flight_search_number_of_people.total_number_of_people} infant 
            <i class="fa fa-caret-down" aria-hidden="true"></i>`;
        }
    }
    /*alert("number of people: " + flight_search_number_of_people.total_number_of_people)
    alert("types of people " +  flight_search_number_of_people.types_of_people_added)*/
}


//Going to search page
let search_for_flights = () =>{
    //window.location.href = "./search_results_page.html";
    $.ajax({
        type: "POST",
        url: "/searchflight",
        data: JSON.stringify(fligh_search_data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: (data)=>{
            console.log(data);
        }

    });
}

home_page_search_button.addEventListener("click", () =>{
    search_for_flights();
});

home_page_hotels_search_button.addEventListener("click", () =>{
    //search_for_flights();
    window.location.href = "./search_results_page.html";
});


//exchange flights inputs values
let rotated = false;
document.getElementById("airports_exchange_search_fields_values_icon").addEventListener('click', (evnt)=>{

    let exchbtn = document.getElementById("airports_exchange_search_fields_values_icon");
    
    if(!rotated){
        exchbtn.style.transform = "rotate(360deg)";
        rotated = true;
    }else{
        exchbtn.style.transform = "rotate(0deg)";
        rotated = false;
    }

    let tempValue = from_where_search_input_fld.value;
    from_where_search_input_fld.value = to_where_search_input_fld.value;
    to_where_search_input_fld.value = tempValue;

    let tempIata = fligh_search_data.destination_iata;
    fligh_search_data.destination_iata = fligh_search_data.origin_iata;
    fligh_search_data.origin_iata = tempIata;

});