document.getElementById("hotels_where_search_input_fld").addEventListener("input", (e)=>{

    let suggestedArr = aita_city_codes.filter(item => 
        (item.city.replaceAll(" ", "").toLowerCase().includes(e.target.value.replaceAll(" ", "").toLowerCase())) ||
        (item.code.replaceAll(" ", "").toLowerCase().includes(e.target.value.replaceAll(" ", "").toLowerCase())));
    
    let ul = document.getElementById("list_of_cities_for_hotels_search");
    ul.innerHTML = '';

    for(let k = 0; k < suggestedArr.length; k++){

        if(k < 5){

            ul.innerHTML += `
                <li>
                    <div onclick="set_city_for_hotel_search('${suggestedArr[k].code}')" style="padding: 5px;">
                        <p style="font-size: 13px; font-weight: bolder;">
                            <i style="color: orange; margin-right: 5px; font-size: 12px;" class="fa fa-map-marker" aria-hidden="true"></i>
                            ${suggestedArr[k].city}
                        <p>
                    </div>
                </li>
            `;
        }

    }

});


function set_city_for_hotel_search(city){
    alert(city);
}