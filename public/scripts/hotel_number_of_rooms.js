//Dom elements
var hotels_search_form_rooms_list = document.getElementById("hotels_search_form_rooms_list");
var number_of_rooms_count = document.getElementById("number_of_rooms_count");
var hotels_accommodations_parameters_option = document.getElementById("hotels_accommodations_parameters_option");

var element_unique_id_number = 1;

var hotel_rooms_and_travelers = 
{
    total_rooms: 1,
    total_guest: 1,
    total_adults: 1,
    total_children: 0,
    rooms: [
        {
            rooms_total_adults: 1,
            children: {
                rooms_total_children: 0,
                rooms_children: [
                    /*{
                        child_age: 2
                    },
                    {
                        child_age: 6
                    }*/
                ]
            }
        }/*,
        {
            rooms_total_adults: 1,
            children: {
                rooms_total_children: 4,
                rooms_children: [
                    {
                        child_age: 11
                    },
                    {
                        child_age: 5
                    },
                    {
                        child_age: 8
                    },
                    {
                        child_age: 10
                    }
                ]
            }
        }*/
    ]
};

function render_total_rooms_and_travelers(){
    let room_word = hotel_rooms_and_travelers.total_rooms > 1 ? "rooms" : "room";
    let guest_word = hotel_rooms_and_travelers.total_guest > 1 ? "guests" : "guest";
    hotels_accommodations_parameters_option.innerHTML = `
    ${hotel_rooms_and_travelers.total_rooms} ${room_word}, ${hotel_rooms_and_travelers.total_guest} ${guest_word}
    <i class="fa fa-caret-down" aria-hidden="true"></i>
    `;
}

function add_a_room(){
    
    element_unique_id_number++;

    hotel_rooms_and_travelers.total_rooms += 1;
    hotel_rooms_and_travelers.total_guest += 1;
    hotel_rooms_and_travelers.total_adults += 1;
     
    hotel_rooms_and_travelers.rooms.push(
        {
            rooms_total_adults: 1,
            children: {
                rooms_total_children: 0,
                rooms_children: []
            }
        }
    )

    let div = document.createElement("div");
    div.innerHTML = `
    <div style="padding: 0 10px;">
            <p style="color: rgb(255, 102, 0);margin-top: 15px; font-weight: bolder; text-shadow: none !important;">
            Room ${hotel_rooms_and_travelers.total_rooms}</p>
            <div style="margin-top: -5px;" class="each_round_trip_options_person_selector">
            <div style="margin-left: 15px;" class="each_round_trip_options_person_type">Adults</div>
            <div class="each_round_trip_options_increase_person_div">
                <div onclick="remove_a_adult(${element_unique_id_number}, ${hotel_rooms_and_travelers.rooms.length});"
                class="each_round_trip_options_increase_person_btn">-</div>
                <div class="hotels_number_of_items_count" id="hotels_number_of_adults_count${element_unique_id_number}">1</div>
                <div onclick="add_a_adult(${element_unique_id_number}, ${hotel_rooms_and_travelers.rooms.length});"
                class="each_round_trip_options_increase_person_btn">+</div>
            </div>
            </div>
            <div style="margin-top: -10px;" class="each_round_trip_options_person_selector">
            <div style="margin-left: 15px;" class="each_round_trip_options_person_type">Children</div>
            <div class="each_round_trip_options_increase_person_div">
                <div onclick="remove_a_child(${element_unique_id_number}, ${hotel_rooms_and_travelers.rooms.length});"
                class="each_round_trip_options_increase_person_btn">-</div>
                <div class="hotels_number_of_items_count" id="hotels_number_of_children_count${element_unique_id_number}">0</div>
                <div onclick="add_a_child(${element_unique_id_number}, ${hotel_rooms_and_travelers.rooms.length})"
                class="each_round_trip_options_increase_person_btn">+</div>
            </div>
            </div>
            <div style="flex-direction: row !important;" class="hotels_search_form_room_children_list" id="hotels_search_form_room_children_list${element_unique_id_number}">
            <div>
        </div>
    `;

    hotels_search_form_rooms_list.appendChild(div);

    number_of_rooms_count.innerText = hotel_rooms_and_travelers.total_rooms;

    render_total_rooms_and_travelers();
}

function remov_a_room(){

    if(hotel_rooms_and_travelers.total_rooms > 1){

        //removing all children in that room
        hotel_rooms_and_travelers.total_children -= 
        hotel_rooms_and_travelers.rooms[(hotel_rooms_and_travelers.rooms.length - 1)].children.rooms_total_children;
        hotel_rooms_and_travelers.total_guest -= 
        hotel_rooms_and_travelers.rooms[(hotel_rooms_and_travelers.rooms.length - 1)].children.rooms_total_children;

        hotel_rooms_and_travelers.total_guest -= 
        hotel_rooms_and_travelers.rooms[(hotel_rooms_and_travelers.rooms.length - 1)].rooms_total_adults;
        hotel_rooms_and_travelers.rooms_total_adults -= 
        hotel_rooms_and_travelers.rooms[(hotel_rooms_and_travelers.rooms.length - 1)].rooms_total_adults;;
        
        hotel_rooms_and_travelers.total_rooms -= 1;
        hotel_rooms_and_travelers.rooms.pop();

        //remove last element from html list div
        hotels_search_form_rooms_list.removeChild(hotels_search_form_rooms_list.lastChild)

        number_of_rooms_count.innerText = hotel_rooms_and_travelers.total_rooms;

        render_total_rooms_and_travelers();
    }
}

function add_a_adult(number, room_number){

    element_unique_id_number++;

    let room_index = room_number - 1;
    
    if((hotel_rooms_and_travelers.rooms[room_index].rooms_total_adults 
        + hotel_rooms_and_travelers.rooms[room_index].children.rooms_total_children) > 3 ){
        if((hotel_rooms_and_travelers.total_guest/hotel_rooms_and_travelers.total_rooms) > 3){
            add_a_room();
        }
    }else{

        hotel_rooms_and_travelers.total_guest += 1;
        hotel_rooms_and_travelers.total_adults += 1;
        hotel_rooms_and_travelers.rooms[room_index].rooms_total_adults += 1;

        let rooms_total_adults = hotel_rooms_and_travelers.rooms[room_index].rooms_total_adults;

        let hotels_number_of_adults_count = "hotels_number_of_adults_count" + number;

        document.getElementById(hotels_number_of_adults_count).innerText = rooms_total_adults;
        render_total_rooms_and_travelers()
    }
}

function remove_a_adult(number, room_number){
    
    let room_index = room_number - 1;
    
    if(hotel_rooms_and_travelers.rooms[room_index].rooms_total_adults > 1){
        hotel_rooms_and_travelers.total_guest -= 1;
        hotel_rooms_and_travelers.total_adults -= 1;
        hotel_rooms_and_travelers.rooms[room_index].rooms_total_adults -= 1;

        let rooms_total_adults = hotel_rooms_and_travelers.rooms[room_index].rooms_total_adults;

        let hotels_number_of_adults_count = "hotels_number_of_adults_count" + number;

        document.getElementById(hotels_number_of_adults_count).innerText = rooms_total_adults;
        render_total_rooms_and_travelers()
    }
}

function add_a_child(number, room_number){

    element_unique_id_number++;

    let room_index = room_number - 1;
    
    if((hotel_rooms_and_travelers.rooms[room_index].children.rooms_total_children 
        + hotel_rooms_and_travelers.rooms[room_index].rooms_total_adults)
        > 3 ){
        if((hotel_rooms_and_travelers.total_guest/hotel_rooms_and_travelers.total_rooms) > 3){
            add_a_room();
        }
    }else{
        hotel_rooms_and_travelers.total_guest += 1;
        hotel_rooms_and_travelers.total_children += 1;
        hotel_rooms_and_travelers.rooms[room_index].children.rooms_total_children += 1;
        hotel_rooms_and_travelers.rooms[room_index].children.rooms_children.push({child_age: 0.5})

        let rooms_total_children = hotel_rooms_and_travelers.rooms[room_index].children.rooms_total_children;

        let hotels_number_of_children_count = "hotels_number_of_children_count" + number;
        document.getElementById(hotels_number_of_children_count).innerText = rooms_total_children;

        let children_list_container_id = "hotels_search_form_room_children_list" + number;
        let hotels_search_form_room_children_list = document.getElementById(children_list_container_id);
        let div = document.createElement("div")

        div.innerHTML = `
            <p style="margin-bottom: 5px; color: #00284e; text-shadow: none !important; font-size: 14px; font-weight: bolder;">
            Child ${hotel_rooms_and_travelers.rooms[room_index].children.rooms_total_children} Age:</p>
            <select>
                <option>Under 1</option>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
                <option>9</option>
                <option>10</option>
                <option>11</option>
                <option>12</option>
                <option>13</option>
                <option>14</option>
                <option>15</option>
                <option>16</option>
                <option>17</option>
            </select>
        `;

        hotels_search_form_room_children_list.appendChild(div);
        render_total_rooms_and_travelers()
    }

}

function remove_a_child(number, room_number){

    let room_index = room_number - 1;

    if(hotel_rooms_and_travelers.rooms[room_index].children.rooms_total_children > 0){
        hotel_rooms_and_travelers.total_guest -= 1;
        hotel_rooms_and_travelers.total_children -= 1;
        hotel_rooms_and_travelers.rooms[room_index].children.rooms_total_children -= 1;
        hotel_rooms_and_travelers.rooms[room_index].children.rooms_children.pop();

        let rooms_total_children = hotel_rooms_and_travelers.rooms[room_index].children.rooms_total_children;

        let hotels_number_of_children_count = "hotels_number_of_children_count" + number;

        let children_list_container_id = "hotels_search_form_room_children_list" + number;
        let hotels_search_form_room_children_list = document.getElementById(children_list_container_id);

        hotels_search_form_room_children_list.removeChild(hotels_search_form_room_children_list.lastChild);

        document.getElementById(hotels_number_of_children_count).innerText = rooms_total_children;
        render_total_rooms_and_travelers()
    }
}