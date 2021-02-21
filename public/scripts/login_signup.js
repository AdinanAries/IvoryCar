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
        alert("please enter your email");
    }else if(password === ""){
        password_elem.focus();
        alert("please enter your password")
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