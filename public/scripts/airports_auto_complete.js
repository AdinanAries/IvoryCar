
document.getElementById("from_where_search_input_fld").addEventListener("input", (evnt)=>{
    let counter = 0;
    document.getElementById("flights_auto_complete_list").innerHTML = "";
    let flights = [];
    if(evnt.target.value){

        flights = AirportsData.filter(each => {
            return (
               each.city.toLowerCase().includes(evnt.target.value.toLowerCase()) 
            || each.name.toLowerCase().includes(evnt.target.value.toLowerCase())
            || each.IATA.toLowerCase().includes(evnt.target.value.toLowerCase())
            || each.country.toLowerCase().includes(evnt.target.value.toLowerCase())
            )
        });
        flights = flights.map(elem => {
                counter++;
                return counter < 20 && `<li>
                            <div onclick="changeAirportsFromInput('(${elem.IATA}) ${elem.name} - ${elem.city}', '${elem.IATA}');" style="padding: 10px 5px; cursor: pointer;">
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
                
            })
    }
    //console.log(flights);
    document.getElementById("flights_auto_complete_list").innerHTML = flights.join('').replaceAll("false","");
})


function changeAirportsFromInput(airport, iata){
    from_where_search_input_fld.value = airport;
    fligh_search_data.origin_iata = iata;
    window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));
}

//Destination Airports Auto Completion

document.getElementById("to_where_search_input_fld").addEventListener("input", (evnt)=>{
    let counter = 0;
    document.getElementById("flights_auto_complete_list").innerHTML = "";
    let flights = [];
    if(evnt.target.value){
        flights = AirportsData.filter(each =>
            (
               each.city.toLowerCase().includes(evnt.target.value.toLowerCase()) 
            || each.name.toLowerCase().includes(evnt.target.value.toLowerCase())
            || each.IATA.toLowerCase().includes(evnt.target.value.toLowerCase())
            || each.country.toLowerCase().includes(evnt.target.value.toLowerCase())
            )
        );
        flights = flights.map(elem => {
            counter++;
            return counter < 20 && `<li>
                        <div onclick="changeAirportsToInput('(${elem.IATA}) ${elem.name} - ${elem.city}', '${elem.IATA}');" style="padding: 10px 5px; cursor: pointer;">
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
    document.getElementById("flights_auto_complete_list").innerHTML = flights.join('').replaceAll("false","");
})


function changeAirportsToInput(airport, iata){
    to_where_search_input_fld.value = airport;
    fligh_search_data.destination_iata = iata;
    window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));
}



/*function *filter(array, condition, maxSize) {
    if (!maxSize || maxSize > array.length) {
      maxSize = array.length;
    }
    let count = 0;
    let i = 0;
    while ( count< maxSize && i < array.length ) {
      if (condition(array[i])) {
        yield array[i];
        count++;
      }
      i++;
    }
  }
  
  const array = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  
  console.log( Array.from( filter(array, i => i % 2 === 0, 2 ) ) );*/