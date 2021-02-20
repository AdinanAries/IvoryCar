var all_fees_and_markups = [
    {
        type: "Service",
        amount: 3.55,
        currency: "USD",
        Reason: "additional infor mation to be added here"
    },
    {
        type: "Markup",
        amount: 3.00,
        currency: "USD",
        Reason: "additional infor mation to be added here"
    }
]

function include_service_fee(price){

    let fee_obj = all_fees_and_markups.filter( each => {
        return each.type === "Service"
    })[0];

    
    let fee_price = site_currency_coverter(fee_obj.currency, current_currency.currency, fee_obj.amount);

    let new_price = price + parseFloat(fee_price);
    
    return new_price
}

function get_original_price_without_service_fee(){
    
}