
//Array filter method wrapped in function to improve code reuse
function filter_airports_array_based_input_value(elem_value){

    return AirportsData.filter(each => {
        return (
           each.city.toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", "")) 
        || each.name.toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || each.IATA.toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || each.country.toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.city + each.name).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.city + each.country).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.city + each.country + each.name + each.IATA).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.country + each.city + each.name + each.IATA).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.name + each.city + each.country + each.IATA).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.name + each.IATA + each.city + each.country).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.IATA + each.name + each.city + each.country).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.IATA + each.city + each.name + each.country).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.IATA + each.city + each.country + each.name).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        || (each.IATA + each.country + each.city + each.name).toLowerCase().replaceAll(" ", "").includes(elem_value.toLowerCase().replaceAll(" ", ""))
        )
    });

}

document.getElementById("from_where_search_input_fld").addEventListener("input", (evnt)=>{
    let counter = 0;
    document.getElementById("flights_auto_complete_list").innerHTML = "";
    let flights = [];
    if(evnt.target.value){

        flights = filter_airports_array_based_input_value(evnt.target.value);

        flights = flights.map(elem => {
                counter++;
                return counter < 6 && `<li>
                            <div onclick="changeAirportsFromInput('(${elem.IATA}) ${elem.name} - ${elem.city}', '${elem.IATA}', '${elem.ICAO}');" style="padding: 10px 5px; cursor: pointer;">
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


function changeAirportsFromInput(airport, iata, icao){
    from_where_search_input_fld.value = airport;
    fligh_search_data.origin_iata = iata;

    if(iata === "\\N" || iata === "N"){
        fligh_search_data.origin_iata = icao;
        from_where_search_input_fld.value = "(" + icao + ") " + airport.split(")")[1];
    }

    window.localStorage.setItem("flights_post_data", JSON.stringify(fligh_search_data));
}

//Destination Airports Auto Completion

document.getElementById("to_where_search_input_fld").addEventListener("input", (evnt)=>{
    let counter = 0;
    document.getElementById("flights_auto_complete_list").innerHTML = "";
    let flights = [];
    if(evnt.target.value){

        flights = filter_airports_array_based_input_value(evnt.target.value);

        /*AirportsData.filter(each =>
            (
               each.city.toLowerCase().replaceAll(" ", "").includes(evnt.target.value.toLowerCase().replaceAll(" ", "")) 
            || each.name.toLowerCase().replaceAll(" ", "").includes(evnt.target.value.toLowerCase().replaceAll(" ", ""))
            || each.IATA.toLowerCase().replaceAll(" ", "").includes(evnt.target.value.toLowerCase().replaceAll(" ", ""))
            || each.country.toLowerCase().replaceAll(" ", "").includes(evnt.target.value.toLowerCase().replaceAll(" ", ""))
            || (each.city + each.name).toLowerCase().replaceAll(" ", "").includes(evnt.target.value.toLowerCase().replaceAll(" ", ""))
            || (each.city + each.country).toLowerCase().replaceAll(" ", "").includes(evnt.target.value.toLowerCase().replaceAll(" ", ""))
            || (each.city + each.country + each.name + each.IATA).toLowerCase().replaceAll(" ", "").includes(evnt.target.value.toLowerCase().replaceAll(" ", ""))
            || (each.country + each.city + each.name + each.IATA).toLowerCase().replaceAll(" ", "").includes(evnt.target.value.toLowerCase().replaceAll(" ", ""))
            || (each.name + each.city + each.country + each.IATA).toLowerCase().replaceAll(" ", "").includes(evnt.target.value.toLowerCase().replaceAll(" ", ""))
            || (each.name + each.IATA + each.city + each.country).toLowerCase().replaceAll(" ", "").includes(evnt.target.value.toLowerCase().replaceAll(" ", ""))
            || (each.IATA + each.name + each.city + each.country).toLowerCase().replaceAll(" ", "").includes(evnt.target.value.toLowerCase().replaceAll(" ", ""))
            || (each.IATA + each.city + each.name + each.country).toLowerCase().replaceAll(" ", "").includes(evnt.target.value.toLowerCase().replaceAll(" ", ""))
            || (each.IATA + each.city + each.country + each.name).toLowerCase().replaceAll(" ", "").includes(evnt.target.value.toLowerCase().replaceAll(" ", ""))
            || (each.IATA + each.country + each.city + each.name).toLowerCase().replaceAll(" ", "").includes(evnt.target.value.toLowerCase().replaceAll(" ", ""))
            )
        );*/

        flights = flights.map(elem => {
            counter++;
            return counter < 6 && `<li>
                        <div onclick="changeAirportsToInput('(${elem.IATA}) ${elem.name} - ${elem.city}', '${elem.IATA}', '${elem.ICAO}');" style="padding: 10px 5px; cursor: pointer;">
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


function changeAirportsToInput(airport, iata, icao){
    to_where_search_input_fld.value = airport;
    fligh_search_data.destination_iata = iata;

    if(iata === "\\N" || iata === "N"){
        fligh_search_data.destination_iata = icao;
        to_where_search_input_fld.value = "(" + icao + ") " + airport.split(")")[1];
    }

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