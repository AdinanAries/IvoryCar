function get_user_info(){
    $.ajax({
        type: "GET",
        url: "/user/G10TI2Pskdioekl994",
        success: data => {
            //alert(data);
        },
        error: err =>{
            console.log(err);
        }
        
    });
}

get_user_info();