const $ = document;
const humbarger = $.querySelector(".humbarger");
const menu = $.querySelector(".menu");
const close = $.querySelector(".close");
function clickHandler(flex, hidden) {
    return function() {
        menu.classList.add(flex);
        menu.classList.remove(hidden);
    }
}
humbarger.addEventListener("click", clickHandler("flex", "hidden"));
close.addEventListener("click", clickHandler("hidden", "flex"));