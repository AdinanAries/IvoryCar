/*$(function(){ 
    $('.airport_search_input').autocomplete({ 
       source: function(req, res){ 
          $.ajax({ 
             url:"airportSearch/", 
              dataType: "json", 
              type:"GET", 
              data:req, 
              success: function (data){ 
                res($.map(data, function(el){ 
                    //console.log(el);
                   return { 
                     label: el.address.cityName + " - " + el.name
                     + " (" + el.iataCode + ") " + " - " + el.address.countryCode, 
                     value: el.iataCode 
                   } 
                })); 
              }, 
              error: function(err){ 
                console.log(err.status); 
              } 
          }); 
       }         
    }); 
  });*/

  /*const options = {
    formatting: `<div class="$(unique-result)" single-result" data-index="$(i)"> 
                    <i class="fa fa-map-marker" style="margin-right: 5px; font-size: 14px;" aria-hidden="true"></i>$(city), $(country)
                    <br/>
                    <i style="margin-right: 5px; margin-left: 5px; color: #003f7a; font-size: 14px;" class="fa fa-plane" aria-hidden="true"></i>$(name) $(IATA)
                </div>`
  };


AirportInput("from_where_search_input_fld", options);
AirportInput("to_where_search_input_fld", options);*/