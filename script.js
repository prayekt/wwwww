'use strict'; // Enforces stricter parsing and error handling.

const /** {NodeElement} */ $navbar = document.querySelector("[data-navbar]");
const /** {NodeElement} */ $navToggler = document.querySelector("[data-nav-toggler]");

$navToggler.addEventListener("click", () => $navbar.classList.toggle("active"));


const $header = document.querySelector("[data-header]");

window.addEventListener("scroll", e => {
 $header.classList[window.scrollY > 50 ? "add" : "remove"]("active")
});

const $toggleBtns = document.querySelectorAll("[data-toggle-btn]")

$toggleBtns.forEach($toggleBtns => {
  
    $toggleBtns.addEventListener("click", () => {
        $toggleBtns.classList.toggle("active");
    });

});