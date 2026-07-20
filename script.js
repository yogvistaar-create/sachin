console.log("Yog Vistaar Website Loaded");

// ==========================
// MOBILE MENU
// ==========================

const menuToggle = document.querySelector(".menu-toggle");
const navbar = document.querySelector(".navbar");

menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("active");
});
//==============================
// Navbar Scroll Effect
//==============================

window.addEventListener("scroll",()=>{

const header=document.querySelector(".header");

header.classList.toggle("scrolled",window.scrollY>40);

});