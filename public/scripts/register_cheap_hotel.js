var book_cheap_hotel_register_new_hotel_button = document.getElementById("book_cheap_hotel_register_new_hotel_button");

book_cheap_hotel_register_new_hotel_button.addEventListener("click", evnt => {
    alert("here");
});


function cheap_hotel_preview_image(event, elem) {
    var reader = new FileReader();
    reader.onload = function()
    {
        var output = document.getElementById(elem);
        output.style.backgroundImage = `url('${reader.result}')`;
    }
    reader.readAsDataURL(event.target.files[0]);
}