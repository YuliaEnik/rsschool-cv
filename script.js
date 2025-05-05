const burgerButton = document.querySelector(".header__burger");
const burgerMenu  = document.querySelector(".menu-list");
const body  = document.querySelector("body");

function addActive () {
    console.log(123)
    burgerButton.classList.toggle("active");
    burgerMenu.classList.toggle("active");
    body.classList.toggle("lock");
}



burgerButton.addEventListener("click", addActive);
burgerMenu.addEventListener("click", addActive);