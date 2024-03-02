const $ = document;
const humbarger = $.querySelector(".humbarger");
const menu = $.querySelector(".menu");
const close = $.querySelector(".close");
const isblur = $.querySelectorAll(".isblur");
function clickHandler(flex, hidden,blur) {
    return function() {
        menu.classList.add(flex);
        menu.classList.remove(hidden);
        for(let i=0;i<isblur.length;i++)
        isblur[i].classList.toggle(blur)
    }
}
humbarger.addEventListener("click", clickHandler("flex", "hidden","blur"));
close.addEventListener("click", clickHandler("hidden", "flex","blur"));