console.log(fligh_search_data)

$.ajax({
    type: "POST",
    url: "/searchflight",
    data: JSON.stringify(fligh_search_data),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    success: (data)=>{
        console.log(fligh_search_data);
        console.log(data);
    }

});