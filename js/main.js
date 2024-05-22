document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('bars');
    const navLinks = document.getElementById('nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
});
