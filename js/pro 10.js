"use strict";

let body = document.body,
    menu = document.querySelector(".menu"),
    menuItems = document.querySelectorAll(".menu__item"),
    menuBorder = document.querySelector(".menu__border"),
    activeItem = document.querySelector(".active"),
    one = document.getElementById("x1"),
    two = document.getElementById("x2"),
    three = document.getElementById("x3"),
    four = document.getElementById("x4"),
    five = document.getElementById("x5");
function clickItem(item, index) {

    menu.style.removeProperty("--timeOut");

    if (activeItem == item) return;

    if (activeItem) {
        activeItem.classList.remove("active");
    }


    item.classList.add("active");
    activeItem = item;
    offsetMenuBorder(activeItem, menuBorder);


}

function offsetMenuBorder(element, menuBorder) {

    const offsetActiveItem = element.getBoundingClientRect();
    const left = Math.floor(offsetActiveItem.left - menu.offsetLeft - (menuBorder.offsetWidth - offsetActiveItem
        .width) / 2) + "px";
    menuBorder.style.transform = `translate3d(${left}, 0 , 0)`;

}

offsetMenuBorder(activeItem, menuBorder);

menuItems.forEach((item, index) => {

    item.addEventListener("click", () => clickItem(item, index));

})

window.addEventListener("resize", () => {
    offsetMenuBorder(activeItem, menuBorder);
    menu.style.setProperty("--timeOut", "none");
});

one.onclick = function() {
    body.removeAttribute("class")
    body.classList.add("a")
}
two.onclick = function() {
    body.removeAttribute("class")
    body.classList.add("b")
}
three.onclick = function() {
    body.removeAttribute("class")
    body.classList.add("c")
}
four.onclick = function() {
    body.removeAttribute("class")
    body.classList.add("d")
}
five.onclick = function() {
    body.removeAttribute("class")
    body.classList.add("e")
}