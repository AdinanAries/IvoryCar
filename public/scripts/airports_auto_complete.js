
document.getElementById("from_where_search_input_fld").addEventListener("input", (evnt)=>{
    document.getElementById("flights_auto_complete_list").innerHTML = "";
    let flights = [];
    if(evnt.target.value){
        flights = AirportsData.filter(each =>
            (
               each.city.toLowerCase().includes(evnt.target.value.toLowerCase()) 
            || each.name.toLowerCase().includes(evnt.target.value.toLowerCase())
            || each.IATA.toLowerCase().includes(evnt.target.value.toLowerCase())
            )
        );
        flights = flights.map(elem => {
            return `<li>
                        <div onclick="changeAirportsFromInput('(${elem.IATA}) ${elem.name} - ${elem.city}');" style="padding: 10px 5px; cursor: pointer;">
                            <p style="font-size: 14px">
                                <i style="margin-right: 5px; font-size: 14px; overflow: visible !important; color: darkblue;"
                                        aria-hidden="true" class="fa fa-map-marker"></i>
                                <span style="font-size: 14px;">${elem.city} - ${elem.country}</span>
                            </p>
                            <p style="font-size: 14px;">
                                <i style="margin-right: 5px; font-size: 14px; margin-left: 10px; overflow: visible !important;"
                                        class="fa fa-plane" aria-hidden="true"></i>
                                <span style="color: darkblue; font-size: 14px;">
                                ${elem.name}
                                </span> (${elem.IATA})
                            </p>
                        </div>
                    </li>`;
            
        });
    }
    //console.log(flights);
    document.getElementById("flights_auto_complete_list").innerHTML = flights.toString().replaceAll(",", "");
})


function changeAirportsFromInput(airport){
    from_where_search_input_fld.value = airport;
}

//Destination Airports Auto Completion

document.getElementById("to_where_search_input_fld").addEventListener("input", (evnt)=>{
    document.getElementById("flights_auto_complete_list").innerHTML = "";
    let flights = [];
    if(evnt.target.value){
        flights = AirportsData.filter(each =>
            (
               each.city.toLowerCase().includes(evnt.target.value.toLowerCase()) 
            || each.name.toLowerCase().includes(evnt.target.value.toLowerCase())
            || each.IATA.toLowerCase().includes(evnt.target.value.toLowerCase())
            )
        );
        flights = flights.map(elem => {
            return `<li>
                        <div onclick="changeAirportsToInput('(${elem.IATA}) ${elem.name} - ${elem.city}');" style="padding: 10px 5px; cursor: pointer;">
                            <p style="font-size: 14px">
                                <i style="margin-right: 5px; font-size: 14px; overflow: visible !important; color: darkblue;"
                                        aria-hidden="true" class="fa fa-map-marker"></i>
                                <span style="font-size: 14px;">${elem.city} - ${elem.country}</span>
                            </p>
                            <p style="font-size: 14px;">
                                <i style="margin-right: 5px; font-size: 14px; margin-left: 10px; overflow: visible !important;"
                                        class="fa fa-plane" aria-hidden="true"></i>
                                <span style="color: darkblue; font-size: 14px;">
                                ${elem.name}
                                </span> (${elem.IATA})
                            </p>
                        </div>
                    </li>`;
            
        });
    }
    //console.log(flights);
    document.getElementById("flights_auto_complete_list").innerHTML = flights.toString().replaceAll(",", "");
})


function changeAirportsToInput(airport){
    to_where_search_input_fld.value = airport;
}