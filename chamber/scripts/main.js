document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll("#navMenu li a");
    const currentUrl = window.location.href;

    links.forEach(link => {
        link.classList.remove("active");
        if (link.href === currentUrl) {
            link.classList.add("active");
        }

        link.addEventListener('click', () => {
            links.forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navMenu.classList.toggle('close');
        hamburger.classList.toggle('active');
    });

    document.addEventListener('click', (event) => {
        if (!navMenu.contains(event.target) && !hamburger.contains(event.target)) {
            navMenu.classList.remove('active');
            navMenu.classList.add('close');
        }
    });

    window.addEventListener('scroll', () => {
        if (navMenu.classList.contains('active')) {
            navMenu.classList.remove('active');
            navMenu.classList.add('close');
        }

        if (hamburger.classList.contains('active')) {
            hamburger.classList.remove('active');
        }
    });

    const lastModifiedElement = document.getElementById("lastModified");
    const yearElement = document.getElementById("year");

    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});
