document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navlinks = document.getElementById('navlinks');

    menuToggle.addEventListener('click', function() {
        navlinks.classList.toggle('menu-open');
    });
});
