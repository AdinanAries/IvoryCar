function render_hotels(){
    $.ajax({
        beforeSend: xhrObj =>{
            xhrObj.setRequestHeader("Accept", "application/json");
            xhrObj.setRequestHeader("Content-Type", "application/json");
        },
        type: "POST",
        url: "./get_hotels",
        data: window.localStorage.getItem("hotels_post_data"),
        success: data =>{
            console.log(data);
        },
        error: err =>{
            console.log(err);
        }

    });
}

if(localStorage.getItem("main_search_type") === "hotel_search"){
    render_hotels();
}

