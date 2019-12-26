const navIcon = document.querySelector('#menu-btn');
const sidebar = document.querySelector('#sidebar');
const closeIcon = document.querySelector('#menu-close-icon');

const openNav = () => {
    sidebar.style.display = 'block';
}

const closeNav = () => {
    sidebar.style.display = 'none';
}
navIcon.addEventListener('click', openNav);
closeIcon.addEventListener('click', closeNav);