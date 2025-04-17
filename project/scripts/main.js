document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.getElementById('menuBtn');
    const navLinks = document.querySelector('.nav-links');

    menuBtn.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    document.addEventListener('scroll', () => {
        if (navLinks.classList.contains('show')) {
            navLinks.classList.remove('show');
        }
    });
});