var global_cheap_hotels_index = 0;
var cheap_hotels_list = [];

/*[
    {
        name: "Despite Properties",
        images: [
            "./images/HotelPic.jpg",
            "./images/HotelPic2.jpg",
            "./images/HotelPic3.jpg"
        ],
        location: "Accra, Ghana",
        rating: 5,
        url: "https://somehotel.com:300/booknowpage",
        description: `Lorem ipsum dolo adipisicing elit. Corrupti  animi modi sint! Similique doloem quis, 
            voluptas necessitatib Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ipsa temporibus eum voluptas error culpa n
            atus molestias in praesentium aut, tenetur r...`,
        price: 54.99,
        currency: 'USD',
        reviews: [
            {
                person: "Mohammed Adinan",
                image: "./images/Anonymous_person3.jpg",
                rated: 4,
                message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, 
                quam eum repellendus eligendi ipsum ac`
            },
            {
                person: "Efya Splending",
                image: "./images/Anonymous_person3.jpg",
                rated: 3,
                message: `This is a rating message from my love Efya Splending. I love Mohammed as she always says`
            }
        ]
    },
    {
        name: "Despite Properties",
        images: [
            "./images/HotelPic.jpg",
            "./images/HotelPic2.jpg",
            "./images/HotelPic3.jpg",
        ],
        location: "Accra, Ghana",
        rating: 5,
        url: "https://somehotel.com:300/booknowpage",
        description: `Lorem ipsum dolo adipisicing elit. Corrupti  animi modi sint! Similique doloem quis, 
            voluptas necessitatib Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ipsa temporibus eum voluptas error culpa n
            atus molestias in praesentium aut, tenetur r...`,
            price: 61.99,
            currency: 'USD',
        reviews: [
            {
                person: "Mohammed Adinan",
                image: "./images/Anonymous_person3.jpg",
                rated: 4,
                message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, 
                quam eum repellendus eligendi ipsum ac`
            }
        ]
    },
    {
        name: "Despite Properties",
        images: [
            "./images/HotelPic.jpg",
            "./images/HotelPic2.jpg",
            "./images/HotelPic3.jpg"
        ],
        location: "Accra, Ghana",
        rating: 5,
        url: "https://somehotel.com:300/booknowpage",
        description: `Lorem ipsum dolo adipisicing elit. Corrupti  animi modi sint! Similique doloem quis, 
            voluptas necessitatib Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ipsa temporibus eum voluptas error culpa n
            atus molestias in praesentium aut, tenetur r...`,
        price: 54.99,
        currency: 'USD',
        reviews: [
            {
                person: "Mohammed Adinan",
                image: "./images/Anonymous_person3.jpg",
                rated: 4,
                message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, 
                quam eum repellendus eligendi ipsum ac`
            }
        ]
    },
    {
        name: "Despite Properties",
        images: [
            "./images/HotelPic.jpg",
            "./images/HotelPic2.jpg",
            "./images/HotelPic3.jpg"
        ],
        location: "Accra, Ghana",
        rating: 5,
        url: "https://somehotel.com:300/booknowpage",
        description: `Lorem ipsum dolo adipisicing elit. Corrupti  animi modi sint! Similique doloem quis, 
            voluptas necessitatib Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ipsa temporibus eum voluptas error culpa n
            atus molestias in praesentium aut, tenetur r...`,
        price: 54.99,
        currency: 'USD',
        reviews: [
            {
                person: "Mohammed Adinan",
                image: "./images/Anonymous_person3.jpg",
                rated: 4,
                message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, 
                quam eum repellendus eligendi ipsum ac`
            }
        ]
    },
    {
        name: "Despite Properties",
        images: [
            "./images/HotelPic.jpg",
            "./images/HotelPic2.jpg",
            "./images/HotelPic3.jpg"
        ],
        location: "Accra, Ghana",
        rating: 5,
        url: "https://somehotel.com:300/booknowpage",
        description: `Lorem ipsum dolo adipisicing elit. Corrupti  animi modi sint! Similique doloem quis, 
            voluptas necessitatib Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ipsa temporibus eum voluptas error culpa n
            atus molestias in praesentium aut, tenetur r...`,
        price: 54.99,
        currency: 'USD',
        reviews: [
            {
                person: "Mohammed Adinan",
                image: "./images/Anonymous_person3.jpg",
                rated: 4,
                message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, 
                quam eum repellendus eligendi ipsum ac`
            }
        ]
    },
    {
        name: "Despite Properties",
        images: [
            "./images/HotelPic.jpg",
            "./images/HotelPic2.jpg",
            "./images/HotelPic3.jpg"
        ],
        location: "Accra, Ghana",
        rating: 5,
        url: "https://somehotel.com:300/booknowpage",
        description: `Lorem ipsum dolo adipisicing elit. Corrupti  animi modi sint! Similique doloem quis, 
            voluptas necessitatib Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ipsa temporibus eum voluptas error culpa n
            atus molestias in praesentium aut, tenetur r...`,
        price: 54.99,
        currency: 'USD',
        reviews: [
            {
                person: "Mohammed Adinan",
                image: "./images/Anonymous_person3.jpg",
                rated: 4,
                message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, 
                quam eum repellendus eligendi ipsum ac`
            }
        ]
    },
    {
        name: "Despite Properties",
        images: [
            "./images/HotelPic.jpg",
            "./images/HotelPic2.jpg",
            "./images/HotelPic3.jpg"
        ],
        location: "Accra, Ghana",
        rating: 5,
        url: "https://somehotel.com:300/booknowpage",
        description: `Lorem ipsum dolo adipisicing elit. Corrupti  animi modi sint! Similique doloem quis, 
            voluptas necessitatib Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ipsa temporibus eum voluptas error culpa n
            atus molestias in praesentium aut, tenetur r...`,
        price: 54.99,
        currency: 'USD',
        reviews: [
            {
                person: "Mohammed Adinan",
                image: "./images/Anonymous_person3.jpg",
                rated: 4,
                message: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, 
                quam eum repellendus eligendi ipsum ac`
            }
        ]
    }
];*/

var search_cheap_hotels_post_data = {
    search_type:"by_city", //values = ["by_city", "by_name", "by_city_and_name"]
    hotel_name: "",
    city: "",
    country: "",
}

var book_cheap_book_direct_hotels_list = document.getElementById("book_cheap_book_direct_hotels_list");
var book_cheap_book_direct_hotels_loader = document.getElementById("book_cheap_book_direct_hotels_loader");
var book_cheap_book_direct_hotels_load_more_btn = document.getElementById("book_cheap_book_direct_hotels_load_more_btn");
var no_more_cheap_hotels_status_msg = document.getElementById("no_more_cheap_hotels_status_msg");
var book_cheap_book_direct_all_reviews_list = document.getElementById("book_cheap_book_direct_all_reviews_list");
var cheap_hotels_reveiws_hotel_info = document.getElementById("cheap_hotels_reveiws_hotel_info");
var search_cheap_hotels_by_location_text_field = document.getElementById("search_cheap_hotels_by_location_text_field");
var search_cheap_hotels_by_name_text_field = document.getElementById("search_cheap_hotels_by_name_text_field");
var search_cheap_hotels_by_location_button = document.getElementById("search_cheap_hotels_by_location_button");

function get_book_cheap_book_direct_hotels(){
    
    $.ajax({
        type: "POST",
        url: "/cheap_hotels",
        data: JSON.stringify(search_cheap_hotels_post_data),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: data =>{

            console.log(data);
            cheap_hotels_list = data;
            //this simply display's hotels based on new data from search
            if(data.length > 0){
                load_more_cheap_hotels();
            }else{
                alert("no cheap hotel was found");
            }
        },
        error: err =>{
            alert("an error occured while searching");
            console.log(err);
        }
    });

}

search_cheap_hotels_by_location_button.addEventListener("click", evnt =>{

    if(search_cheap_hotels_post_data.search_type === "by_city"){

        if(search_cheap_hotels_by_location_text_field.value === ""){
            search_cheap_hotels_by_location_text_field.focus();
        }else{
            if(search_cheap_hotels_post_data.city === "" || search_cheap_hotels_post_data.country === ""){
                
                let cities_arr = all_world_cities_auto_complete(search_cheap_hotels_by_location_text_field.value);

                if(cities_arr.length > 0){
                    search_cheap_hotels_post_data.city = cities_arr[0].name;
                    search_cheap_hotels_post_data.country = cities_arr[0].country;

                    book_cheap_book_direct_hotels_list.innerHTML = ``;
                    global_cheap_hotels_index = 0;
                    no_more_cheap_hotels_status_msg.style.display = "none";
                    search_cheap_hotels_by_location_text_field.value = `${cities_arr[0].name}, ${cities_arr[0].country}`;

                    get_book_cheap_book_direct_hotels();

                }else{
                    search_cheap_hotels_by_location_text_field.focus();
                    search_cheap_hotels_by_location_text_field.placeholder = "please enter a valid city/country";
                    search_cheap_hotels_by_location_text_field.value = "";
                }

                //alert(search_cheap_hotels_post_data.city);
                //alert(search_cheap_hotels_post_data.country);

            }else{
                book_cheap_book_direct_hotels_list.innerHTML = ``;
                global_cheap_hotels_index = 0;
                no_more_cheap_hotels_status_msg.style.display = "none";

                get_book_cheap_book_direct_hotels();

            }
        }
        
    }else if(search_cheap_hotels_post_data.search_type === "by_name"){

        if(search_cheap_hotels_by_name_text_field.value === ""){
            search_cheap_hotels_by_name_text_field.focus();
            search_cheap_hotels_by_name_text_field.placeholder = "hotel name is required for search";
        }else{
            book_cheap_book_direct_hotels_list.innerHTML = ``;
            global_cheap_hotels_index = 0;
            no_more_cheap_hotels_status_msg.style.display = "none";

            get_book_cheap_book_direct_hotels();
        }
        
    }else if(search_cheap_hotels_post_data.search_type === "by_city_and_name"){

        if(search_cheap_hotels_by_name_text_field.value === ""){
            search_cheap_hotels_by_name_text_field.focus();
            search_cheap_hotels_by_name_text_field.placeholder = "hotel name is required";
        }else if(search_cheap_hotels_by_location_text_field.value === ""){
            search_cheap_hotels_by_location_text_field.focus();
        }else if(search_cheap_hotels_post_data.city === "" || search_cheap_hotels_post_data.country === ""){
                
            let cities_arr = all_world_cities_auto_complete(search_cheap_hotels_by_location_text_field.value);

            if(cities_arr.length > 0){
                search_cheap_hotels_post_data.city = cities_arr[0].name;
                search_cheap_hotels_post_data.country = cities_arr[0].country;

                book_cheap_book_direct_hotels_list.innerHTML = ``;
                global_cheap_hotels_index = 0;
                no_more_cheap_hotels_status_msg.style.display = "none";
                search_cheap_hotels_by_location_text_field.value = `${cities_arr[0].name}, ${cities_arr[0].country}`;

                get_book_cheap_book_direct_hotels();
            }else{
                search_cheap_hotels_by_location_text_field.focus();
                search_cheap_hotels_by_location_text_field.placeholder = "please enter a valid city/country";
                search_cheap_hotels_by_location_text_field.value = "";
            }

            //alert(search_cheap_hotels_post_data.city);
            //alert(search_cheap_hotels_post_data.country);

        }else{
            book_cheap_book_direct_hotels_list.innerHTML = ``;
            global_cheap_hotels_index = 0;
            no_more_cheap_hotels_status_msg.style.display = "none";

            get_book_cheap_book_direct_hotels();
        }
    }
});

function render_a_cheap_hotels(name, pic_url, location, rating, hotel_site_url, hotel_description, recent_reviewer, reviewer_image, reviewer_rated, reviewer_message, current_price){
    
    let rate_stars = get_rating_stars(rating);
    let reviewer_rated_stars = get_rating_stars(reviewer_rated);

    return `
        <div class="wide_screen_ads_card">
            <p class="wide_screen_ads_card_corder_ads_indicator">
            <span style="color: rgb(216, 102, 27); font-size: 12px;">Average price:</span> ${current_price}</p>
            <div class="wide_screen_ads_main_content">
            <div id="book_cheap_book_direct_hotels_main_pic_img${global_cheap_hotels_index}" class="left_Side" style="background-image: url('${pic_url}'); overflow: initial !important;">
                <div class="book_cheap_book_direct_hotels_full_pic">
                <img  id="book_cheap_book_direct_hotels_full_pic_img${global_cheap_hotels_index}" src="${pic_url}" alt="hotels full pic"/>
                </div>
                <div class="hotels_card_pic_items_points">
                    <div id="hotels_card_pic_each_item_point${global_cheap_hotels_index}1" onclick="cheap_hotels_show_full_pic(${global_cheap_hotels_index}, 1);"
                        class="hotels_card_pic_each_item_point hotels_card_pic_each_item_point${global_cheap_hotels_index} selected"><p>1</p></div>
                    <div id="hotels_card_pic_each_item_point${global_cheap_hotels_index}2" onclick="cheap_hotels_show_full_pic(${global_cheap_hotels_index}, 2);"
                    class="hotels_card_pic_each_item_point hotels_card_pic_each_item_point${global_cheap_hotels_index}"><p>2</p></div>
                    <div id="hotels_card_pic_each_item_point${global_cheap_hotels_index}3" onclick="cheap_hotels_show_full_pic(${global_cheap_hotels_index}, 3);"
                    class="hotels_card_pic_each_item_point hotels_card_pic_each_item_point${global_cheap_hotels_index}"><p>3</p></div>
                </div>
            </div>
            <div class="right_Side">
                <div style="height: 100%; display: flex; flex-direction: column !important; justify-content: space-between;">
                    <div style="overflow: hidden;">
                    <div style="background-color:#094470; padding: 10px; display: flex; flex-direction: row !important; justify-content: space-between;">
                        <div>
                        <p style="color: white; font-weight: bolder;">${name}</p>
                        <p style="color: white; margin-top: 5px; font-size: 14px;">
                            <i class="fa fa-map-marker" aria-hidden="true" style="margin-right: 5px; color:aliceblue;"></i>
                            ${location}</p>
                            <div class="each_wide_screen_ads_card_reviewer_stars book_cheap_hotels_main_ratings">
                                ${rate_stars}
                            </div>
                        </div>
                        <div onclick='go_to_cheap_hotel_book_page("${hotel_site_url}");' style="cursor: pointer; background-color:rgb(0, 127, 177); color: white; padding: 10px 20px; text-align: center;
                        display: flex; flex-direction: column; justify-content: center; font-size: 14px; border-radius: 4px;">
                        View Hotel
                        </div>
                    </div>
                    <div style="padding: 0 10px;">
                        <div style="margin-top: 15px; color: rgb(90, 90, 90);">
                        <p>${hotel_description}</p>
                        </div>
                    </div>
                    </div>
                    <div class="wide_screen_ads_extra_content" style="overflow: hidden;">
                    <p style="font-size: 14px; color:rgb(0, 26, 43); margin-bottom: 20px; font-weight: bolder; letter-spacing: 1px; text-align: center;">
                        Reviews</p>
                    <div class="wide_screen_ads_card_reviews_list">
                        <div class="each_wide_screen_ads_card_review">
                        <div class="each_wide_screen_ads_card_reviewer_pic">
                            <img src="${reviewer_image}" alt="review image">
                        </div>
                        <p style="color:rgb(5, 94, 129); font-size: 13px; font-weight: bolder; margin-bottom: 10px; 
                        letter-spacing: 1px; text-align: center; margin-top: 10px;">${recent_reviewer}</p>
                        <div class="each_wide_screen_ads_card_reviewer_stars">
                            ${reviewer_rated_stars}
                        </div>
                        <div class="each_wide_screen_ads_card_reviewer_msg">
                            <p>${reviewer_message}</p>
                        </div>
                            <p onclick="book_cheap_book_direct_show_all_review(${global_cheap_hotels_index}, '${name}', '${location}', ${rating});" style="color:rgb(235, 86, 0); text-align: center; cursor: pointer;">see more...</p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    `;

}

function load_more_cheap_hotels(){

    book_cheap_book_direct_hotels_load_more_btn.style.display = "none";
    book_cheap_book_direct_hotels_loader.style.display = "flex";

    setTimeout(()=>{
        
        //always try loading 3 hotels
        let rr = 0;
        while(rr <= 3){
            if(global_cheap_hotels_index < cheap_hotels_list.length){

                let each_cheap_hotel = cheap_hotels_list[global_cheap_hotels_index];
                let hotel_name = each_cheap_hotel.name;
                let hotel_image = each_cheap_hotel.images[0];
                let hotel_location = each_cheap_hotel.location;
                let hotel_rating = each_cheap_hotel.rating;
                let hotel_site_url = each_cheap_hotel.url;
                let hotel_description = each_cheap_hotel.description;
                let recent_reviewer = each_cheap_hotel.reviews[0].person;
                let reviewer_image = each_cheap_hotel.reviews[0].image;
                let reviewer_rated = each_cheap_hotel.reviews[0].rated;
                let reviewer_message = each_cheap_hotel.reviews[0].message;
                let price = site_currency_coverter(each_cheap_hotel.currency, current_currency.currency, each_cheap_hotel.price)
                let current_price = `${current_currency.sign}${price}`;

                
                book_cheap_book_direct_hotels_list.innerHTML += render_a_cheap_hotels(hotel_name, hotel_image, hotel_location, hotel_rating,
                    hotel_site_url, hotel_description, recent_reviewer, reviewer_image, reviewer_rated, reviewer_message, current_price);
                
                book_cheap_book_direct_hotels_load_more_btn.style.display = "block";
                book_cheap_book_direct_hotels_loader.style.display = "none";

                global_cheap_hotels_index += 1;

            }else{
                book_cheap_book_direct_hotels_load_more_btn.style.display = "none";
                no_more_cheap_hotels_status_msg.style.display = "block";
                book_cheap_book_direct_hotels_loader.style.display = "none";
            }

            rr++
        }
        
    }, 300)
    
}

function go_to_cheap_hotel_book_page(url){
    toggle_show_hide_cheap_hotel_view_full_profile_info();
    view_hotels_full_profile_info();
    //alert(url);
}

function get_rating_stars(rating){
    if(rating === 5){
        return `
            <div style="display: flex; flex-direction: row !important; justify-content: center;">
                <p>&#9733;</p> 
                <p>&#9733;</p>
                <p>&#9733;</p>
                <p>&#9733;</p>
                <p>&#9733;</p>
            </div>
        `;
    }else if(rating === 4){
        return `
            <div style="display: flex; flex-direction: row !important; justify-content: center;">
                <p>&#9733;</p> 
                <p>&#9733;</p>
                <p>&#9733;</p>
                <p>&#9733;</p>
                <p class="unrated">&#9733;</p>
            </div>
        `;
    }
    else if(rating === 3){
        return `
            <div style="display: flex; flex-direction: row !important; justify-content: center;">
                <p>&#9733;</p> 
                <p>&#9733;</p>
                <p>&#9733;</p>
                <p class="unrated">&#9733;</p>
                <p class="unrated">&#9733;</p>
            </div>
        `;
    }
    else if(rating === 2){
        return `
            <div style="display: flex; flex-direction: row !important; justify-content: center;">
                <p>&#9733;</p> 
                <p>&#9733;</p>
                <p class="unrated">&#9733;</p>
                <p class="unrated">&#9733;</p>
                <p class="unrated">&#9733;</p>
            </div>
        `;
    }else if(rating === 1){
        return `
            <div style="display: flex; flex-direction: row !important; justify-content: center;">
                <p>&#9733;</p> 
                <p class="unrated">&#9733;</p>
                <p class="unrated">&#9733;</p>
                <p class="unrated">&#9733;</p>
                <p class="unrated">&#9733;</p>
            </div>
        `;
    }else {
        return `
            <p style="font-size: 14px; color: white;">
                <i style="color: orangered; margin-right: 5px;" class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                no rating available
            </p>
        `;
    }
}

function remove_selected_from_all_picture_points(index){
    Array.from(document.getElementsByClassName("hotels_card_pic_each_item_point"+index)).forEach(item =>{
        item.classList.remove("selected");
    });
}

function cheap_hotels_show_full_pic(index, number){
    remove_selected_from_all_picture_points(index);
    document.getElementById(("hotels_card_pic_each_item_point"+index+number)).classList.add("selected");
    let pic_tag = document.getElementById("book_cheap_book_direct_hotels_full_pic_img"+index);
    let main_pic_tag = document.getElementById("book_cheap_book_direct_hotels_main_pic_img"+index);

    let cheap_hotel = cheap_hotels_list[index];

    //decrement number so that it matches index value
    let pic_index = (number - 1);
    let pic_url = cheap_hotel.images[pic_index];
    pic_tag.src = pic_url;
    main_pic_tag.style.backgroundImage = `url(${pic_url})`;
    
}

function book_cheap_book_direct_show_all_review(index, hotel_name, hotel_location, rating_number){

    let selected_hotel_reviews = cheap_hotels_list[index].reviews;
    book_cheap_book_direct_all_reviews_list.innerHTML = "";

    let hotel_rating_stars = get_rating_stars(rating_number);

    cheap_hotels_reveiws_hotel_info.innerHTML = `
        <div style="margin-left: 20px;">
            <p style="color: white; font-size: 15px; font-weight: bolder; letter-spacing: 1px;">${hotel_name}</p>
            <p style="color: white; font-size: 13px; margin-top: 5px; margin-bottom: 10px;">${hotel_location}</p>
            <div  style="width: fit-content !important;" class="each_wide_screen_ads_card_reviewer_stars book_cheap_hotels_main_ratings">
                ${hotel_rating_stars}
            </div>
        </div>
        <p style="text-align: center; margin-top: 20px; color: white;">Reviews</p>
    `;

    selected_hotel_reviews.forEach(item=>{

        let rated_stars = get_rating_stars(item.rated);
        let person = item.person;
        let image = item.image;
        let message = item.message;

        book_cheap_book_direct_all_reviews_list.innerHTML += `
            <div style="margin-bottom: 20px;" class="each_wide_screen_ads_card_review">
                <div class="each_wide_screen_ads_card_reviewer_pic">
                <img src="${image}" alt="review image">
                </div>
                <p style="color:rgb(5, 94, 129); font-size: 13px; font-weight: bolder; margin-bottom: 10px; 
                letter-spacing: 1px; text-align: center; margin-top: 10px;">${person}</p>
                <div class="each_wide_screen_ads_card_reviewer_stars">
                    ${rated_stars}
                </div>
                <div class="each_wide_screen_ads_card_reviewer_msg">
                <p>${message}</p>
                </div>
            </div>
        `;

    })
    
    //document.getElementById("book_cheap_book_direct_reviews_div").style.display = "block";
    toggle_show_hide_book_cheap_book_direct_reviews_div();

}

function toggle_show_hide_book_cheap_book_direct_reviews_div(){
    $("#book_cheap_book_direct_reviews_div").toggle("up");
}

function toggle_show_hide_book_cheap_book_direct_register_hotel_div(){
    $("#book_cheap_book_direct_register_hotel_div").toggle("up");
}

$(document).ready(()=>{
    get_book_cheap_book_direct_hotels();
})


var book_cheap_book_direct_register_hotel_description_input = document.getElementById("book_cheap_book_direct_register_hotel_description_input");
var heightLimit = 200; /* Maximum height: 200px */

book_cheap_book_direct_register_hotel_description_input.oninput = function() {
    book_cheap_book_direct_register_hotel_description_input.style.height = ""; /* Reset the height*/
    book_cheap_book_direct_register_hotel_description_input.style.height = Math.min(book_cheap_book_direct_register_hotel_description_input.scrollHeight, heightLimit) + "px";
};

function toggle_hide_show_cheap_hotel_payments_prompt(){
    $("#book_cheap_book_direct_payments").toggle("up");
    show_book_cheap_book_direct_payments_form_subscription();
}

function show_book_cheap_book_direct_payments_form(){
    document.getElementById('book_cheap_book_direct_payments_prompt').style.display = 'none';
    document.getElementById('book_cheap_book_direct_payments_form_container').style.display = 'flex';
}
function show_book_cheap_book_direct_payments_form_subscription(){
    document.getElementById("book_cheap_book_direct_payments_form_container_subscription").style.display = "block";
    document.getElementById("book_cheap_book_direct_payments_form_container_inputs").style.display = "none";
}
function show_book_cheap_book_direct_payments_form_inputs(){
    document.getElementById("book_cheap_book_direct_payments_form_container_subscription").style.display = "none";
    document.getElementById("book_cheap_book_direct_payments_form_container_inputs").style.display = "block";
}

function cheap_hotels_search_pick_search_type(search_type){

    var name_input_title = document.getElementById("book_cheap_book_direct_search_form_name_input_title");
    var city_input_title = document.getElementById("book_cheap_book_direct_search_form_city_input_title");

    if(search_type === "by_city"){

        name_input_title.style.opacity = 0;
        city_input_title.style.opacity = 0;

        setTimeout(()=>{
            name_input_title.style.display = "none";
            city_input_title.style.display = "none";
            $("#search_cheap_hotels_by_name_text_field").slideUp("fast");
        }, 300);

        setTimeout(()=>{
            $("#search_cheap_hotels_by_location_text_field").slideDown("fast");
        },600);

        //values = ["by_city", "by_name", "by_city_and_name"]
        search_cheap_hotels_post_data.search_type = "by_city";

    }else if(search_type === "by_name"){

        name_input_title.style.opacity = 0;
        city_input_title.style.opacity = 0;

        setTimeout(()=>{
            name_input_title.style.display = "none";
            city_input_title.style.display = "none";
            $("#search_cheap_hotels_by_location_text_field").slideUp("fast");
        }, 300);

        setTimeout(()=>{
            $("#search_cheap_hotels_by_name_text_field").slideDown("fast");
        },600);

        //values = ["by_city", "by_name", "by_city_and_name"]
        search_cheap_hotels_post_data.search_type = "by_name";

    }else if(search_type === "by_city_and_name"){

        $("#search_cheap_hotels_by_location_text_field").slideDown("fast");
        $("#search_cheap_hotels_by_name_text_field").slideDown("fast");
        
        setTimeout(()=>{
            name_input_title.style.display = "block";
            city_input_title.style.display = "block";
        },300);

        setTimeout(()=>{
            name_input_title.style.opacity = 1;
            city_input_title.style.opacity = 1;
        },600);

        //values = ["by_city", "by_name", "by_city_and_name"]
        search_cheap_hotels_post_data.search_type = "by_city_and_name";
    }
}