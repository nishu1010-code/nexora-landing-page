/* ==========================================
        NEXORA PREMIUM JAVASCRIPT
========================================== */

// Sticky Navbar Shadow
const header = document.querySelector("header");

window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
        header.style.background = "rgba(7,17,38,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";
    } else {
        header.style.background = "rgba(7,17,38,.75)";
        header.style.boxShadow = "none";
    }
});

/* ==========================================
        SCROLL TO TOP BUTTON
========================================== */

const scrollBtn = document.getElementById("scrollTop");

window.addEventListener("scroll", () => {

    if (window.scrollY > 400) {
        scrollBtn.classList.add("show");
    } else {
        scrollBtn.classList.remove("show");
    }

});

scrollBtn.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

/* ==========================================
        ACTIVE NAVIGATION LINK
========================================== */

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 120;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop) {
            current = section.getAttribute("id");
        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {
            link.classList.add("active");
        }

    });

});

/* ==========================================
        REVEAL ANIMATION
========================================== */

const reveals = document.querySelectorAll(
".service-card,.tech-card,.why-card,.process-card,.about-content,.about-image,.contact-form,.contact-info"
);

const reveal = () => {

    const windowHeight = window.innerHeight;

    reveals.forEach(item => {

        const top = item.getBoundingClientRect().top;

        if (top < windowHeight - 100) {
            item.style.opacity = "1";
            item.style.transform = "translateY(0)";
        }

    });

};

reveals.forEach(item => {

    item.style.opacity = "0";
    item.style.transform = "translateY(40px)";
    item.style.transition = "all .7s ease";

});

window.addEventListener("scroll", reveal);
window.addEventListener("load", reveal);

// Hero Buttons Ripple Effect
const buttons = document.querySelectorAll(".btn,.btn-outline");

buttons.forEach(button => {

    button.addEventListener("mouseenter", () => {
        button.style.transform = "translateY(-4px)";
    });

    button.addEventListener("mouseleave", () => {
        button.style.transform = "translateY(0)";
    });

});

/* ==========================================
        SMOOTH ANCHOR LINKS
========================================== */

document.querySelectorAll('a[href^="#"]').forEach(anchor => {

    anchor.addEventListener("click", function (e) {

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});

console.log("🚀 Nexora Premium Loaded Successfully");

document.querySelectorAll('nav a').forEach(link => {

    link.addEventListener('click', function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));

        target.scrollIntoView({

            behavior:'smooth',

            block:'center'

        });

    });

});