//getting dom elements
var main_menu_car_option = document.getElementById("main_menu_car_option");
var main_menu_packages_option = document.getElementById(
  "main_menu_packages_option"
);
var main_menu_explore_option = document.getElementById(
  "main_menu_explore_option"
);
var main_menu_more_option = document.getElementById("main_menu_more_option");
var top_nav_var_main_menu_items = Array.from(
  document.getElementsByClassName("top_nav_var_main_menu_item")
);
var main_menu_more_option_a_tag = document.getElementById(
  "main_menu_more_option_a_tag"
);
var main_menu_more_submenu = document.getElementById("main_menu_more_submenu");
var other_menu_languages_option = document.getElementById(
  "other_menu_languages_option"
);
var main_menu_language_submenu = document.getElementById(
  "main_menu_language_submenu"
);
var other_menu_languages_option_container = document.getElementById(
  "other_menu_languages_option_container"
);

//hover event for menu languages option
other_menu_languages_option.addEventListener("mouseover", () => {
  main_menu_language_submenu.style.visibility = "visible";
  main_menu_language_submenu.style.opacity = "1";
});
other_menu_languages_option.addEventListener("mouseout", (evnt) => {
  main_menu_language_submenu.style.visibility = "hidden";
  main_menu_language_submenu.style.opacity = "0";
});
main_menu_language_submenu.addEventListener("mouseover", () => {
  main_menu_language_submenu.style.visibility = "visible";
  main_menu_language_submenu.style.opacity = "1";
});
main_menu_language_submenu.addEventListener("mouseout", (evnt) => {
  main_menu_language_submenu.style.visibility = "hidden";
  main_menu_language_submenu.style.opacity = "0";
});

//hover event for menu more option
main_menu_more_option.addEventListener("mouseover", () => {
  main_menu_more_option_a_tag.style.color = "orange";
  main_menu_more_submenu.style.visibility = "visible";
  main_menu_more_submenu.style.opacity = "1";
});
main_menu_more_option.addEventListener("mouseout", (evnt) => {
  main_menu_more_option_a_tag.style.color = "white";
  main_menu_more_submenu.style.visibility = "hidden";
  main_menu_more_submenu.style.opacity = "0";
});
main_menu_more_submenu.addEventListener("mouseover", () => {
  main_menu_more_option_a_tag.style.color = "orange";
  main_menu_more_submenu.style.visibility = "visible";
  main_menu_more_submenu.style.opacity = "1";
});
main_menu_more_submenu.addEventListener("mouseout", (evnt) => {
  main_menu_more_option_a_tag.style.color = "white";
  main_menu_more_submenu.style.visibility = "hidden";
  main_menu_more_submenu.style.opacity = "0";
});

//this function reset all main menu items non active state
function set_all_main_menu_items_as_not_selected() {
  top_nav_var_main_menu_items.forEach((menuItem) => {
    menuItem.classList.remove("active_top_nav_link");
  });
}

//this sets the packages main menu option active
main_menu_packages_option.addEventListener("click", () => {
  set_all_main_menu_items_as_not_selected();
  main_menu_packages_option.classList.add("active_top_nav_link");
});

//this sets the cars main menu option active
main_menu_car_option.addEventListener("click", () => {
  set_all_main_menu_items_as_not_selected();
  main_menu_car_option.classList.add("active_top_nav_link");
});

//this sets the cars main menu option active
main_menu_explore_option.addEventListener("click", () => {
  set_all_main_menu_items_as_not_selected();
  main_menu_explore_option.classList.add("active_top_nav_link");
});
