//DOM
var active_selected_currency_option_container = document.getElementById("active_selected_currency_option_container");
var active_selected_currency_option_flag_and_name = document.getElementById("active_selected_currency_option_flag_and_name");
var site_language_select_options_as_id = document.getElementById("site_language_select_options_as_id");
var site_currency_chevron_up = document.getElementById("site_currency_chevron_up");

var current_currency = "USD";

if(localStorage.getItem("site_current_currecy")){
    current_currency = localStorage.getItem("site_current_currecy");
}else{
    localStorage.setItem("site_current_currecy", "USD");
}



function set_site_currency(country_name, flag_pic, currency){

    localStorage.setItem("site_current_currecy", currency);
    current_currency = currency;
    
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
    "EUR" : 0.91,
    "JPY" : 124.17,
    "GBP" : 0.65,
    "BRL" : 3.51,
    "GHC" : 5.85673
    }

    //steps
    //1. Multiply currency needed by money amount
    let currency_needed_rate = currentExchange[currency_needed];
    let product = money_amount * currency_needed_rate;
    
    //2. Devide product from .1 by holding currency
    let holding_currency_rate = currentExchange[holding_currency];
    let exchange_amount = product / holding_currency_rate
    
    //console.log("The converted amount is $ " + (exchange_value.toFixed(2)) + "in " + currencyNeeded+ ".");

    return exchange_amount.toFixed(2);

}