const toggleMenu = (event) => {
    const menuToggle = document.getElementById('nav-icon');
    const navbarMain = document.getElementById('navbar-main');

    menuToggle.classList.toggle('open');
    navbarMain.classList.toggle('show');

    event.stopPropagation();
}

const closeMenu = (event) => {
    const navbarMain = document.getElementById('navbar-main');

    const isClickInsideMenu = navbarMain.contains(event.target);
    if (!isClickInsideMenu && navbarMain.classList.contains('show')) {
        const menuToggle = document.getElementById('nav-icon');
        menuToggle.classList.remove('open');
        navbarMain.classList.remove('show');
    }
}

const menuToggle = document.getElementById('nav-icon');
menuToggle.addEventListener('click', toggleMenu);

document.addEventListener('click', closeMenu);
