var global_cheap_hotels_index = 0;
var cheap_hotels_list = [
    {
        name: "Despite Properties",
        images: ["./images/HotelPic.jpg"],
        location: "Accra Ghana",
        rating: 5,
        url: "https://somehotel.com:300/booknowpage",
        description: `Lorem ipsum dolo adipisicing elit. Corrupti  animi modi sint! Similique doloem quis, 
            voluptas necessitatib Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex ipsa temporibus eum voluptas error culpa n
            atus molestias in praesentium aut, tenetur r...`,
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
]

var book_cheap_book_direct_hotels_list = document.getElementById("book_cheap_book_direct_hotels_list");
var book_cheap_book_direct_hotels_loader = document.getElementById("book_cheap_book_direct_hotels_loader");
var book_cheap_book_direct_hotels_load_more_btn = document.getElementById("book_cheap_book_direct_hotels_load_more_btn");

function render_a_cheap_hotels(name, pic_url, location, rating, hotel_site_url, hotel_description, recent_reviewer, reviewer_image, reviewer_rated, reviewer_message){
    
    let rate_stars = get_rating_stars(rating);
    let reviewer_rated_stars = get_rating_stars(reviewer_rated);

    return `
        <div class="wide_screen_ads_card">
            <p class="wide_screen_ads_card_corder_ads_indicator">$20.00</p>
            <div class="wide_screen_ads_main_content">
            <div class="left_Side" style="background-image: url('${pic_url}'); overflow: initial !important;">
                <div class="book_cheap_book_direct_hotels_full_pic">
                <img src="${pic_url}" alt="hotels full pic"/>
                </div>
                <div class="hotels_card_pic_items_points">
                <div class="hotels_card_pic_each_item_point selected"><p>1</p></div>
                <div class="hotels_card_pic_each_item_point"><p>2</p></div>
                <div class="hotels_card_pic_each_item_point"><p>3</p></div>
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
                        Book Room(s)
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
                            <p style="color:rgb(235, 86, 0); text-align: center; cursor: pointer;">see more...</p>
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
        
        book_cheap_book_direct_hotels_list.innerHTML += render_a_cheap_hotels(hotel_name, hotel_image, hotel_location, hotel_rating,
            hotel_site_url, hotel_description, recent_reviewer, reviewer_image, reviewer_rated, reviewer_message);
        book_cheap_book_direct_hotels_load_more_btn.style.display = "block";
        book_cheap_book_direct_hotels_loader.style.display = "none";

        //global_cheap_hotels_index++;
    }, 300)
    
}

function go_to_cheap_hotel_book_page(url){
    alert(url);
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