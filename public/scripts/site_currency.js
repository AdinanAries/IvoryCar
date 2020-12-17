//DOM
var active_selected_currency_option_container = document.getElementById("active_selected_currency_option_container");
var active_selected_currency_option_flag_and_name = document.getElementById("active_selected_currency_option_flag_and_name");
var site_language_select_options_as_id = document.getElementById("site_language_select_options_as_id");
var site_currency_chevron_up = document.getElementById("site_currency_chevron_up");

var current_currency = {
    currency: "USD",
    country_flag:  "USflag2.png",
    element_id:  "USD_each_site_language_select_option",
    country_name: "United States",
    sign: "&#x24;"
};

if(localStorage.getItem("site_current_currecy")){
    current_currency = JSON.parse(localStorage.getItem("site_current_currecy"));
}else{
    localStorage.setItem("site_current_currecy", JSON.stringify(current_currency));
}



function set_site_currency(country_name, flag_pic, currency, element_Id, hex_code){

    Array.from(document.getElementsByClassName("each_site_language_select_option")).forEach((elem)=>{
        elem.classList.remove("active");
    });

    document.getElementById(element_Id).classList.add('active');

    current_currency.country_flag = flag_pic;
    current_currency.country_name = country_name;
    current_currency.currency = currency;
    current_currency.element_id = element_Id;
    current_currency.sign = hex_code;

    localStorage.setItem("site_current_currecy", JSON.stringify(current_currency));

    active_selected_currency_option_flag_and_name.innerHTML = 
        `<p><img
            class="site_currency_flag"
            src="images/${flag_pic}" alt=""
            /></p>
            <p>${country_name} (${currency})</p>
        `;

        site_language_select_options_as_id.style.opacity = 0;
        site_currency_chevron_up.style.transform = "rotate(0deg)";
        setTimeout(()=>{
            site_language_select_options_as_id.style.display = "none";
        }, 300);

}

site_language_select_options_as_id.style.display = "none";
function show_site_currency_list(){
    if(site_language_select_options_as_id.style.display === "none"){
        site_language_select_options_as_id.style.display = "block";
        site_currency_chevron_up.style.transform = "rotate(180deg)";
        setTimeout(()=>{
            site_language_select_options_as_id.style.opacity = 1;
        }, 100);
    }else{
        site_language_select_options_as_id.style.opacity = 0;
        site_currency_chevron_up.style.transform = "rotate(0deg)";
        setTimeout(()=>{
            site_language_select_options_as_id.style.display = "none";
        }, 300);
    }
}

function site_currency_coverter(holding_currency, currency_needed, money_amount){


    let currentExchange = {
    "USD": 1,
    "EUR" : 0.82,
    "JPY" : 103.39,
    "GBP" : 0.74,
    "BRL" : 3.51,
    "GHC" : 5.85673,
    "CNY" : 6.53
    }

    //steps
    //1. Multiply currency needed by money amount
    let currency_needed_rate = currentExchange[currency_needed];
    let product = money_amount * currency_needed_rate;
    
    //2. Devide product from .1 by holding currency
    let holding_currency_rate = currentExchange[holding_currency];
    let exchange_amount = product / holding_currency_rate
    
    //console.log("The converted amount is $ " + (exchange_value.toFixed(2)) + "in " + currencyNeeded+ ".");

    return addCommas(exchange_amount.toFixed(2));

}


$(document).ready(()=>{
    set_site_currency(current_currency.country_name, current_currency.country_flag, current_currency.currency, current_currency.element_id, current_currency.sign);
});

//function to add commas to money values
function addCommas(nStr){
    nStr += '';
    var x = nStr.split('.');
    var x1 = x[0];
    var x2 = x.length > 1 ? '.' + x[1] : '';
    var rgx = /(\d+)(\d{3})/;
    while (rgx.test(x1)) {
     x1 = x1.replace(rgx, '$1' + ',' + '$2');
    }
    return x1 + x2;
   }