var first_name_input = document.getElementById("login_fld_20");
var last_name_input = document.getElementById("login_fld_2");
var email_input = document.getElementById("login_fld_3");
var password_input = document.getElementById("login_fld_4");
var confirm_password_input = document.getElementById("login_fld_199");

//types of travels on Anidaso for content personalization
 var travel_types = [
     "Leisure",
     "Business",
     "Holidays",
     "family Visit"
 ];
 var login_user_data = {
    id: "",
    email: "",
    password: ""
};
//helps personalize user's experience
//collect this data through user's previous activities and surveys
var user_meta_data = {
    travel_type: travel_types[1],
    gender: "",
    age: "",
};
//for collecting and signing up new users
 var signup_user_data = {
    firstname: "",
    lastname: "",
    email: "",
    password: ""
 };
 

function login_function(){
    
    let email_elem = document.getElementById("login_fld_0");
    let password_elem = document.getElementById("login_fld_1");

    let email = email_elem.value;
    let password = password_elem.value;

    if(email === ""){
        email_elem.focus();
        activate_login_fld(0);
        alert("please enter your email");
    }else if(password === ""){
        password_elem.focus();
        activate_login_fld(1);
        alert("please enter your password");
    }else{

        login_user_data.email = email;
        login_user_data.password = password;
        //login user here 
        $.ajax({
            type: "POST",
            url: "/login",
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            data: JSON.stringify(login_user_data),
            success: data =>{
                console.log(data);
            },
            error: err =>{

            }
        });
    }
}

document.getElementById("main_login_submit_btn").addEventListener("click", evnt =>{
    login_function();
});

function signup_function(){

    let password_complexity_result = password_complexity_checker(password_input.value);

    if(first_name_input.value === ""){
        first_name_input.focus();
        first_name_input.placeholder = "first name is required";
    }else if(last_name_input.value === ""){
        last_name_input.focus();
        last_name_input.placeholder = "last name is required";
    }else if(email_input.value === ""){
        email_input.focus();
        email_input.placeholder = "email is required";
    }else if(password_input.value === ""){
        password_input.focus();
        password_input.placeholder = "password is required";
    }else if(password_input.value !== confirm_password_input.value){
        confirm_password_input.value = "";
        confirm_password_input.placeholder = "passwords don't match";
        confirm_password_input.focus();
    }else if(!password_complexity_result.pass){
        password_input.placeholder = password_complexity_result.msg;
        confirm_password_input.value = "";
        password_input.value = "";
        password_input.focus();
    }else{

        collect_user_signup_data().then(()=>{
            //do ajax here after collecting post data into post object
            console.log(signup_user_data)
        }).catch( err => {
            console.log(err)
        });
        
    }
}

async function collect_user_signup_data(){
    signup_user_data.firstname = first_name_input.value;
    signup_user_data.lastname = last_name_input.value;
    signup_user_data.email = email_input.value;
    signup_user_data.password = password_input.value;
}


function password_complexity_checker(password){

    let contains_number = false;
    let contains_uppercase = false

    //checking password string
    for(let i = 0; i < password.length; i++){
        if(!isNaN(password.charAt(i))){
            contains_number = true;
        }
        if(password.charAt(i) === password.charAt(i).toUpperCase()
            && password.charAt(i) !== password.charAt(i).toLowerCase()){
            contains_uppercase = true
        }
    }

    //returning response object
    if(password.length < 8){
        return {
            pass: false,
            msg: "password too short"
        }
    }else if(!contains_number){
        return {
            pass: false,
            msg: "password must contain at least one number"
        }
    }else if(!contains_uppercase){
        return {
            pass: false,
            msg: "password must contain atleast one uppercase letter"
        }
    }else{
        return {
            pass: true,
            msg: "all password complexity requirements have been met"
        }
    }
}

document.getElementById("sign_up_anidaso_user_btn").addEventListener("click", evnt => {
    signup_function();
})