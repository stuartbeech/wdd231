document.addEventListener('DOMContentLoaded', () => {
    setActiveLink();
});

function setActiveLink() {
    const links = document.querySelectorAll(".navigation li a");
    const currentUrl = window.location.href;

    links.forEach(link => {
        link.classList.remove("active");

        if (link.href === currentUrl) {
            link.classList.add("active");
        }

        link.addEventListener('click', () => {
            links.forEach(link => link.classList.remove("active"));
            link.classList.add("active");
        });
    });
}

const hamburger = document.getElementById("Hamburger");
const navMenu = document.querySelector(".navigation");

hamburger.addEventListener("click", () => {
    navMenu.classList.toggle("active");
    hamburger.classList.toggle("active")
});

window.addEventListener("resize", () => {
    if (window.innerWidth > 980 && navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
    }
});