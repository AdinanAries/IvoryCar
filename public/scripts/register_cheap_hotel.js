var register_cheap_hotel_post_data = {
    approved: false,
    subscribed: false,
    name: "",
    location: "",
    url: "",
    price: "",
    currency: "USD",
    photos: [],
    cities_operating: [],
    email: "",
    mobile: "",
    description: "",
    rating: 5,
    reviews: [
        {
            person: "Anidaso Team",
            image: "./images/management_team_icon.png",
            rated: 5,
            message: "We have conducted checks on this hotel brand and we are satisfied by our findings."
        }
    ]

}

var book_cheap_hotel_register_new_hotel_button = document.getElementById("book_cheap_hotel_register_new_hotel_button");
var book_cheap_book_direct_register_hotel_name_input_fld = document.getElementById("book_cheap_book_direct_register_hotel_name_input_fld");
var book_cheap_book_direct_register_hotel_avg_price_input_fld = document.getElementById("book_cheap_book_direct_register_hotel_avg_price_input_fld");
var book_cheap_book_direct_register_hotel_url_input_fld = document.getElementById("book_cheap_book_direct_register_hotel_url_input_fld");
var book_cheap_book_direct_register_main_location_input_fld = document.getElementById("book_cheap_book_direct_register_main_location_input_fld");
var book_cheap_book_direct_register_hotel_email_input_fld = document.getElementById("book_cheap_book_direct_register_hotel_email_input_fld");
var book_cheap_book_direct_register_hotel_phone_input_fld = document.getElementById("book_cheap_book_direct_register_hotel_phone_input_fld");
var book_cheap_book_direct_register_hotel_description_input = document.getElementById("book_cheap_book_direct_register_hotel_description_input");
var register_cheap_hotels_location_text_field = document.getElementById("register_cheap_hotels_location_text_field");
var book_cheap_book_direct_add_hotel_add_pic_input_1 = document.getElementById("book_cheap_book_direct_add_hotel_add_pic_input_1");
var book_cheap_book_direct_add_hotel_add_pic_input_2 = document.getElementById("book_cheap_book_direct_add_hotel_add_pic_input_2");
var book_cheap_book_direct_add_hotel_add_pic_input_3 = document.getElementById("book_cheap_book_direct_add_hotel_add_pic_input_3");
var book_cheap_book_direct_add_hotel_add_pic_input_4 = document.getElementById("book_cheap_book_direct_add_hotel_add_pic_input_4");


async function collect_register_cheap_hotel_data(){
    register_cheap_hotel_post_data.name = book_cheap_book_direct_register_hotel_name_input_fld.value;
    register_cheap_hotel_post_data.price = book_cheap_book_direct_register_hotel_avg_price_input_fld.value;
    register_cheap_hotel_post_data.url = book_cheap_book_direct_register_hotel_url_input_fld.value;
    register_cheap_hotel_post_data.location = book_cheap_book_direct_register_main_location_input_fld.value;
    register_cheap_hotel_post_data.email = book_cheap_book_direct_register_hotel_email_input_fld.value;
    register_cheap_hotel_post_data.mobile = book_cheap_book_direct_register_hotel_phone_input_fld.value;
    register_cheap_hotel_post_data.description = book_cheap_book_direct_register_hotel_description_input.value;

    //adding user's selected photos
    register_cheap_hotel_post_data.photos.push(book_cheap_book_direct_add_hotel_add_pic_input_1.value);
    register_cheap_hotel_post_data.photos.push(book_cheap_book_direct_add_hotel_add_pic_input_2.value);
    register_cheap_hotel_post_data.photos.push(book_cheap_book_direct_add_hotel_add_pic_input_3.value);
    register_cheap_hotel_post_data.photos.push(book_cheap_book_direct_add_hotel_add_pic_input_4.value);

}

async function validate_register_cheap_hotel_data(){

    return $.ajax({
        type: "POST",
        url: "/validate_cheap_hotel_data",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        data: JSON.stringify(register_cheap_hotel_post_data),
        success: res =>{
            return res
        },
        error: err =>{
            return res
        }
    });

}

book_cheap_hotel_register_new_hotel_button.addEventListener("click", evnt => {
    
    if(book_cheap_book_direct_register_hotel_name_input_fld.value === ""){
        book_cheap_hotel_register_new_hotel_button.innerText = "hotel name is required"
        book_cheap_hotel_register_new_hotel_button.style.backgroundColor = "orangered";
        book_cheap_hotel_register_new_hotel_button.style.borderColor = "orange";
    }else if(book_cheap_book_direct_register_hotel_avg_price_input_fld.value === ""){
        book_cheap_hotel_register_new_hotel_button.innerText = "average price is required"
        book_cheap_hotel_register_new_hotel_button.style.backgroundColor = "orangered";
        book_cheap_hotel_register_new_hotel_button.style.borderColor = "orange";
    }else if(book_cheap_book_direct_register_hotel_url_input_fld.value === ""){
        book_cheap_hotel_register_new_hotel_button.innerText = "web url is required"
        book_cheap_hotel_register_new_hotel_button.style.backgroundColor = "orangered";
        book_cheap_hotel_register_new_hotel_button.style.borderColor = "orange";
    }else if(book_cheap_book_direct_register_main_location_input_fld.value === ""){
        book_cheap_hotel_register_new_hotel_button.innerText = "main location is required"
        book_cheap_hotel_register_new_hotel_button.style.backgroundColor = "orangered";
        book_cheap_hotel_register_new_hotel_button.style.borderColor = "orange";
    }else if(book_cheap_book_direct_register_hotel_email_input_fld.value === ""){
        book_cheap_hotel_register_new_hotel_button.innerText = "email is required"
        book_cheap_hotel_register_new_hotel_button.style.backgroundColor = "orangered";
        book_cheap_hotel_register_new_hotel_button.style.borderColor = "orange";
    }else if(book_cheap_book_direct_register_hotel_phone_input_fld.value === ""){
        book_cheap_hotel_register_new_hotel_button.innerText = "phone is required"
        book_cheap_hotel_register_new_hotel_button.style.backgroundColor = "orangered";
        book_cheap_hotel_register_new_hotel_button.style.borderColor = "orange";
    }else if(book_cheap_book_direct_register_hotel_description_input.value === ""){
        book_cheap_hotel_register_new_hotel_button.innerText = "description is required"
        book_cheap_hotel_register_new_hotel_button.style.backgroundColor = "orangered";
        book_cheap_hotel_register_new_hotel_button.style.borderColor = "orange";
    }else if(book_cheap_book_direct_add_hotel_add_pic_input_1.value === "" || 
             book_cheap_book_direct_add_hotel_add_pic_input_2.value === "" ||
             book_cheap_book_direct_add_hotel_add_pic_input_3.value === "" ||
             book_cheap_book_direct_add_hotel_add_pic_input_4.value === ""){
        book_cheap_hotel_register_new_hotel_button.innerText = "add all four(4) photos"
        book_cheap_hotel_register_new_hotel_button.style.backgroundColor = "orangered";
        book_cheap_hotel_register_new_hotel_button.style.borderColor = "orange";
    }else if(register_cheap_hotel_post_data.cities_operating.length < 1){
        book_cheap_hotel_register_new_hotel_button.innerText = "add atleast one city"
        book_cheap_hotel_register_new_hotel_button.style.backgroundColor = "orangered";
        book_cheap_hotel_register_new_hotel_button.style.borderColor = "orange";
    }else{

        //collecting value from input into post data object
        collect_register_cheap_hotel_data().then(()=>{

            validate_register_cheap_hotel_data().then((validation_res)=>{

                console.log(validation_res);

                if(validation_res.success){
                    toggle_hide_show_cheap_hotel_payments_prompt();

                    //setting post data to validated data from server
                    register_cheap_hotel_post_data = validation_res.data;
                }else{
                    book_cheap_hotel_register_new_hotel_button.innerText = validation_res.responseJSON.msg;
                    book_cheap_hotel_register_new_hotel_button.style.backgroundColor = "orangered";
                    book_cheap_hotel_register_new_hotel_button.style.borderColor = "orange";
                }
    

            }).catch(err=>{
                console.log(err)
            });

            
        }).catch(err =>{
            console.log(err);
        });

        //1. Do validation on server first to make sure data can be saved - /validate_cheap_hotel_data/
        
        //2. Start subscription and payment process - /series of subscription and payments endpoints required by stripes payment gateway
        //3. If payment is successul, save user's information to DB - /register_cheap_hotel/
        
    }
    
});

function on_input_reset_func(){
    book_cheap_hotel_register_new_hotel_button.style.backgroundColor = "rgb(5, 146, 116)";
    book_cheap_hotel_register_new_hotel_button.style.borderColor = "rgb(48, 199, 166)";
    book_cheap_hotel_register_new_hotel_button.innerText = "Register";
}

function cheap_hotel_preview_image(event, elem) {
    var reader = new FileReader();
    reader.onload = function()
    {
        var output = document.getElementById(elem);
        output.style.backgroundImage = `url('${reader.result}')`;
    }
    reader.readAsDataURL(event.target.files[0]);
}

function register_cheap_hotel_add_city_to_operating_cities(){
    if(register_cheap_hotels_location_text_field.value === ""){
        register_cheap_hotels_location_text_field.focus()
        register_cheap_hotels_location_text_field.placeholder = "please enter city/country";
    }else{
        if(register_cheap_hotel_current_input_location.city === "" || register_cheap_hotel_current_input_location.country === ""){

            let city_arr = all_world_cities_auto_complete(register_cheap_hotels_location_text_field.value);
            if(city_arr.length > 0){
                register_cheap_hotel_add_city(`${city_arr[0].name},${city_arr[0].country}`);
            }else{
                register_cheap_hotels_location_text_field.value = "";
                register_cheap_hotels_location_text_field.focus()
                register_cheap_hotels_location_text_field.placeholder = "please enter valid city";
            }
        }else{
            register_cheap_hotel_add_city(register_cheap_hotels_location_text_field.value);
        }
    }

    on_input_reset_func();
}

function register_cheap_hotel_add_city(city_country){

    let item_index = (register_cheap_hotel_post_data.cities_operating.length); //length is going to be one more than last index
    
    let city_value = city_country.split(",")[0].trim();
    let country_value = city_country.split(",")[1].trim();

    let contains_array = register_cheap_hotel_post_data.cities_operating.filter(
        each => ((each.city + each.country) === (city_value + country_value))
    );

    if(contains_array.length > 0){
        register_cheap_hotels_location_text_field.focus();
        register_cheap_hotels_location_text_field.value = "";
        register_cheap_hotels_location_text_field.placeholder = "city already added";
    }else{
        register_cheap_hotel_post_data.cities_operating.push({city: city_value, country: country_value});

        //Create Dom here
        document.getElementById("register_cheap_hotels_cities_in_operation_list")
        .innerHTML += `
            <p id="register_cheap_hotels_city_in_operation_${item_index}" style="margin-right: 5px; background-color:rgb(74, 101, 112); color: white; border-radius: 4px; padding: 10px; font-size: 11px;"
            >${city_value}
                <span onclick="register_cheap_hotel_remove_city_from_operating_cities(${item_index}, '${city_value}', '${country_value}');" style="padding: 5px; padding-left: 15px;">
                    <i class="fa fa-times" aria-hidden="true" style="color: red"></i>
                </span>
            </p>
        `;
        
        register_cheap_hotels_location_text_field.value = "";
        register_cheap_hotels_location_text_field.placeholder = "";
        console.log(register_cheap_hotel_post_data.cities_operating);
    }

}

function register_cheap_hotel_remove_city_from_operating_cities(index, city, country){
    
    register_cheap_hotel_post_data.cities_operating = register_cheap_hotel_post_data.cities_operating.filter(
        each => ((each.city + each.country) !== (city + country))
    );
    document.getElementById("register_cheap_hotels_city_in_operation_"+index).style.display = "none";
    document.getElementById("register_cheap_hotels_city_in_operation_"+index).remove();
    console.log(register_cheap_hotel_post_data.cities_operating);
}

toggle_hide_show_cheap_hotel_payments_prompt();