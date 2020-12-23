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

    //console.log(dif);

    return timeConvert(dif);


}

//console.log(get_transfer_duration("2021-04-01T21:00:00", "2021-04-01T22:40:00"));

var booking_forms_current_travelers_index = 0;
var booking_travelers;

function view_flight_deal(isAnidasoBookable, data_or_link){

    document.getElementById("full_page_loader_container").style.display = "block";
    document.getElementById("full_page_loader_container").style.opacity = 1;

    //console.log(JSON.parse(data_or_link.replaceAll('*#*$#%','"')));
    let flightObj = JSON.parse(data_or_link.replaceAll('*#*$#%','"'));

    //creating user objects for form data collection and aggregation

    booking_travelers = [];
    reset_booking_forms_inputs();
    show_finish_booking_form_personal_info_fieldset();

    for(let q = 0; q < flightObj.travelerPricings.length; q++ ){

        let eachTraveler = {
            "id": (q+1),
            "dateOfBirth": document.getElementById("login_fld_9").value,
            "name": {
              "firstName": "Traveler",
              "lastName": (q+1)
            },
            "gender": "MALE",
            "contact": {
              "emailAddress": "N/A",
              "phones": [
                {
                  "deviceType": "Mobile",
                  "countryCallingCode": "N/A",
                  "number": "N/A"
                }
              ]
            },
            "documents": [
              {
                "documentType": "Passport",
                "birthPlace": "N/A",
                "issuanceLocation": "N/A",
                "issuanceDate": document.getElementById("login_fld_13").value,
                "number": "N/A",
                "expiryDate": document.getElementById("login_fld_14").value,
                "issuanceCountry": "N/A",
                "validityCountry": "N/A",
                "nationality": "N/A",
                "holder": true
              }
            ]
          };

          booking_travelers.push(eachTraveler);

        //booking_forms_render_each__travelers(q, JSON.stringify(eachTraveler).replaceAll('"','#@$%@#'));
        
    }
    
    console.log(booking_travelers);

    if(isAnidasoBookable){

        $.ajax({
            type: "POST",
            url: "/getfinalflightprice",
            data: flightObj,
            success: (res)=>{
                document.getElementById("full_page_loader_container").style.display = "none";
                document.getElementById("full_page_loader_container").style.opacity = 0;
                console.log(res);
                toggle_show_finish_booking_form();
            },
            error: (err)=>{
                document.getElementById("full_page_loader_container").style.display = "none";
                document.getElementById("full_page_loader_container").style.opacity = 0;
                console.log(err);
            }
        });

    }else{
        let link = data_or_link;
        //handle this later;
    }

}

function booking_forms_set_current_traveler(number){

    submit_booking_travelers_info_containter.style.display = "none";
    submit_booking_travelers_info_containter.style.opacity = 0;

    show_finish_booking_form_personal_info_fieldset();
    booking_forms_current_travelers_index = number;
    
    if(booking_travelers[number].contact.emailAddress === "N/A" && booking_travelers[number].name.firstName === "Traveler" 
        && booking_travelers[number].contact.phones[0].number === "N/A" && booking_travelers[number].contact.phones[0].countryCallingCode === "N/A"
        && booking_travelers[number].documents[0].issuanceCountry === "N/A" && booking_travelers[number].documents[0].birthPlace === "N/A"
        && booking_travelers[number].documents[0].issuanceLocation === "N/A" && booking_travelers[number].documents[0].validityCountry === "N/A"
        && booking_travelers[number].documents[0].nationality === "N/A" && booking_travelers[number].documents[0].number === "N/A"){
            reset_booking_forms_inputs();
        }else{

            document.getElementById("login_fld_5").value = booking_travelers[number].name.firstName === "Traveler" ? "" : booking_travelers[number].name.firstName;
            document.getElementById("login_fld_8").value = booking_travelers[number].name.lastName;
            document.getElementById("login_fld_10").value = booking_travelers[number].gender === "N/A" ? "" : booking_travelers[number].gender;
            document.getElementById("login_fld_6").value = booking_travelers[number].contact.emailAddress === "N/A" ? "" : booking_travelers[number].contact.emailAddress;
            document.getElementById("login_fld_11").value = booking_travelers[number].contact.phones[0].countryCallingCode === "N/A" ? "" : booking_travelers[number].contact.phones[0].countryCallingCode;
            document.getElementById("login_fld_7").value = booking_travelers[number].contact.phones[0].number === "N/A" ? "" : booking_travelers[number].contact.phones[0].number;
            document.getElementById("login_fld_110").value = booking_travelers[number].documents[0].documentType === "N/A" ? "" : booking_travelers[number].documents[0].documentType;
            document.getElementById("login_fld_12").value = booking_travelers[number].documents[0].number === "N/A" ? "" : booking_travelers[number].documents[0].number;
            document.getElementById("login_fld_15").value = booking_travelers[number].documents[0].issuanceCountry === "N/A" ? "" : booking_travelers[number].documents[0].issuanceCountry;
            document.getElementById("login_fld_16").value = booking_travelers[number].documents[0].validityCountry === "N/A" ? "" : booking_travelers[number].documents[0].validityCountry;
            document.getElementById("login_fld_17").value = booking_travelers[number].documents[0].nationality === "N/A" ? "" : booking_travelers[number].documents[0].nationality;
            document.getElementById("login_fld_18").value = booking_travelers[number].documents[0].birthPlace === "N/A" ? "" : booking_travelers[number].documents[0].birthPlace;
            document.getElementById("login_fld_19").value = booking_travelers[number].documents[0].issuanceLocation === "N/A" ? "" : booking_travelers[number].documents[0].issuanceLocation;
            /*
            document.getElementById("login_fld_111").addEventListener('change', (evnt) => {
                if(evnt.target.value === 'true'){
                    booking_travelers[booking_forms_current_travelers_index].documents[0].holder = true;
                }else{
                    booking_travelers[booking_forms_current_travelers_index].documents[0].holder = false;
                }
            });*/
        }

    //console.log(number);
    
}

function booking_forms_render_each_traveler(index, traveler){

    let decoded_info = traveler.replaceAll('#@$%@#','"');
    let the_traveler = JSON.parse(decoded_info);
    //console.log(the_traveler);

    if(the_traveler.contact.emailAddress === "N/A" || the_traveler.name.firstName === "Traveler" 
        || the_traveler.contact.phones[0].number === "N/A" || the_traveler.contact.phones[0].countryCallingCode === "N/A"
        || the_traveler.documents[0].issuanceCountry === "N/A" || the_traveler.documents[0].birthPlace === "N/A"
        || the_traveler.documents[0].issuanceLocation === "N/A" || the_traveler.documents[0].validityCountry === "N/A"
        || the_traveler.documents[0].nationality === "N/A" || the_traveler.documents[0].number === "N/A"){

        document.getElementById("order_ticket_form_container_review_and_submit_travelers_list").innerHTML +=
        `
            <div data-completed="false" onclick="booking_forms_set_current_traveler(${index});" class="submit_each_traveler_review_info uncompleted_info">
                <p><i style="margin-right: 5px;" class="fa fa-user" aria-hidden="true"></i>${the_traveler.name.firstName} ${the_traveler.name.lastName}</p>
                <p><i style="margin-right: 5px;" class="fa fa-envelope" aria-hidden="true"></i>${the_traveler.contact.emailAddress}</p>
                <p><i style="margin-right: 5px;" class="fa fa-id-card" aria-hidden="true"></i>${the_traveler.documents[0].number}</p>
                
                <div style="font-size: 14px; padding: 20px; background-color: #0000001a; color: white; margin: 0; margin-top: 10px; display: flex; flex-direction: row !important;">
                <div style="background-color: #af2a12; border-radius: 100%; text-align: center; width: 30px; height: 30px; display: flex; flex-direction: column; justify-content: center; margin-right: 10px;">
                    <i style="color: white;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                </div>
                <div style="display: flex; font-size: 14px; flex-direction: column; justify-content: center;">Uncompleted form. Click on this card...</div>
                </div>
            </div>
        `;
    }else{
        document.getElementById("order_ticket_form_container_review_and_submit_travelers_list").innerHTML +=
        `
            <div data-completed="true" onclick="booking_forms_set_current_traveler(${index});" class="submit_each_traveler_review_info">
                <p><i style="margin-right: 5px;" class="fa fa-user" aria-hidden="true"></i>${the_traveler.name.firstName} ${the_traveler.name.lastName}</p>
                <p><i style="margin-right: 5px;" class="fa fa-envelope" aria-hidden="true"></i>${the_traveler.contact.emailAddress}</p>
                <p><i style="margin-right: 5px;" class="fa fa-id-card" aria-hidden="true"></i>${the_traveler.documents[0].number}</p>
                
                <div style="font-size: 14px; padding: 20px; background-color: #0000001a; color: white; margin: 0; margin-top: 10px; display: flex; flex-direction: row !important;">
                <div style="background-color: #12af8d;; border-radius: 100%; text-align: center; width: 30px; height: 30px; display: flex; flex-direction: column; justify-content: center; margin-right: 10px;">
                    <i style="color: white;" class="fa fa-check" aria-hidden="true"></i>
                </div>
                <div style="display: flex; font-size: 14px; flex-direction: column; justify-content: center;">OK</div>
                </div>
            </div>
        `;
    }

}

function booking_forms_render_all_travelers(){

    console.log(booking_travelers);

    document.getElementById("order_ticket_form_container_review_and_submit_travelers_list").innerHTML = "";

    for(let qw = 0; qw < booking_travelers.length; qw++){
        booking_forms_render_each_traveler(qw, JSON.stringify(booking_travelers[qw]).replaceAll('"','#@$%@#'));
    }
}

$(function() {
    $("#login_fld_9").daterangepicker({
      singleDatePicker: true,
      showDropdowns: true
    }, function(start, end, label) {
        
        booking_travelers[booking_forms_current_travelers_index].dateOfBirth = start.format('YYYY-MM-DD');

      /*var years = moment().diff(start, 'years');
      alert("You are " + years + " years old!");*/
    });
  });

  $(function() {
    $("#login_fld_13").daterangepicker({
      singleDatePicker: true,
      showDropdowns: true
    }, function(start, end, label) {
        
        booking_travelers[booking_forms_current_travelers_index].documents.issuanceDate = start.format('YYYY-MM-DD');

        //start.format('YYYY-MM-DD');

      /*var years = moment().diff(start, 'years');
      alert("You are " + years + " years old!");*/
    });
  });

  $(function() {
    $("#login_fld_14").daterangepicker({
      singleDatePicker: true,
      showDropdowns: true
    }, function(start, end, label) {
        
        booking_travelers[booking_forms_current_travelers_index].documents.expiryDate = start.format('YYYY-MM-DD');

        //start.format('YYYY-MM-DD');

      /*var years = moment().diff(start, 'years');
      alert("You are " + years + " years old!");*/
    });
  });

//booking forms inputs onchange events

document.getElementById("login_fld_5").addEventListener('input', (evnt) => {
    booking_travelers[booking_forms_current_travelers_index].name.firstName = evnt.target.value;
});

document.getElementById("login_fld_8").addEventListener('input', (evnt) => {
    booking_travelers[booking_forms_current_travelers_index].name.lastName = evnt.target.value;
});

document.getElementById("login_fld_10").addEventListener('change', (evnt) => {
    booking_travelers[booking_forms_current_travelers_index].gender = evnt.target.value;
});

document.getElementById("login_fld_6").addEventListener('input', (evnt) => {
    booking_travelers[booking_forms_current_travelers_index].contact.emailAddress = evnt.target.value;
});

document.getElementById("login_fld_11").addEventListener('change', (evnt) => {
    booking_travelers[booking_forms_current_travelers_index].contact.phones[0].countryCallingCode = evnt.target.value;
});

document.getElementById("login_fld_7").addEventListener('input', (evnt) => {
    booking_travelers[booking_forms_current_travelers_index].contact.phones[0].number = evnt.target.value;
});

document.getElementById("login_fld_110").addEventListener('change', (evnt) => {
    booking_travelers[booking_forms_current_travelers_index].documents[0].documentType = evnt.target.value;
});

document.getElementById("login_fld_12").addEventListener('input', (evnt) => {
    booking_travelers[booking_forms_current_travelers_index].documents[0].number = evnt.target.value;
});

document.getElementById("login_fld_15").addEventListener('input', (evnt) => {
    booking_travelers[booking_forms_current_travelers_index].documents[0].issuanceCountry = evnt.target.value;
});

document.getElementById("login_fld_16").addEventListener('input', (evnt) => {
    booking_travelers[booking_forms_current_travelers_index].documents[0].validityCountry = evnt.target.value;
});

document.getElementById("login_fld_17").addEventListener('input', (evnt) => {
    booking_travelers[booking_forms_current_travelers_index].documents[0].nationality = evnt.target.value;
});

document.getElementById("login_fld_18").addEventListener('input', (evnt) => {
    booking_travelers[booking_forms_current_travelers_index].documents[0].birthPlace = evnt.target.value;
});

document.getElementById("login_fld_19").addEventListener('input', (evnt) => {
    booking_travelers[booking_forms_current_travelers_index].documents[0].issuanceLocation = evnt.target.value;
});

document.getElementById("login_fld_111").addEventListener('change', (evnt) => {
    if(evnt.target.value === 'true'){
        booking_travelers[booking_forms_current_travelers_index].documents[0].holder = true;
    }else{
        booking_travelers[booking_forms_current_travelers_index].documents[0].holder = false;
    }
});





function reset_booking_forms_inputs(){
    document.getElementById("login_fld_5").value = "";
    document.getElementById("login_fld_8").value = "";
    document.getElementById("login_fld_10").value = "";
    document.getElementById("login_fld_6").value = "";
    document.getElementById("login_fld_11").value = "";
    document.getElementById("login_fld_7").value = "";
    document.getElementById("login_fld_12").value = "";
    document.getElementById("login_fld_15").value = "";
    document.getElementById("login_fld_16").value = "";
    document.getElementById("login_fld_17").value = "";
    document.getElementById("login_fld_18").value = "";
    document.getElementById("login_fld_19").value = "";
}


//function to finish the booking process
function book_ticket(){
    
    let isClear = true;
    let foundACard = false;
    let user_cards = document.getElementById("order_ticket_form_container_review_and_submit_travelers_list").childNodes;
    

    for(let usc = 0; usc < user_cards.length; usc++){

        if(user_cards[usc].className){
            if(user_cards[usc].className.includes("uncompleted_info")){
                isClear = false;
            }
        }

        if(user_cards[usc].className){
            if(user_cards[usc].className.includes("submit_each_traveler_review_info")){
                foundACard = true;
            }
        }

    }

    if(!foundACard){
        
        submit_booking_travelers_info_containter.style.display = "block";
        submit_booking_travelers_info_containter.innerHTML = `
            <p style="text-align: center; font-size: 13px; color:rgb(6, 62, 83); font-weight: bolder; letter-spacing: 0.5px;">
                <i class="fa fa-exclamation-triangle" style="margin-right: 5px; color: red;"></i> You must have atleast one traveler to book a flight.
            </p>
        `;
        setTimeout(()=>{
            submit_booking_travelers_info_containter.style.opacity = 1;
        }, 100);

        return null;
    }

    if(isClear){
        console.log("booking your flight");
    }else{
        
        submit_booking_travelers_info_containter.style.display = "block";
        submit_booking_travelers_info_containter.innerHTML = `
            <p style="text-align: center; font-size: 13px; color:rgb(6, 62, 83); font-weight: bolder; letter-spacing: 0.5px;">
                <i class="fa fa-exclamation-triangle" style="margin-right: 5px; color: red;"></i> Uncompleted form(s) detected. Please check and fill out all forms.
            </p>
        `;
        setTimeout(()=>{
            submit_booking_travelers_info_containter.style.opacity = 1;
        }, 100);
        
    }
}