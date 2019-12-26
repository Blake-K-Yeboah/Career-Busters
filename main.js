const scrollToFirstSection = () => {
    window.location = '#firstsection' //Change when you upload
}

const navbar = document.querySelector('#navbar');
const navlist = document.querySelector('#navlist');
const navimg = document.querySelector('#navimg');
const movilenavbar = document.querySelector('#mobile-navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop >= 100) {
        if (window.innerWidth < 802) {
            movilenavbar.classList.add('contract');
        } else {
            navbar.classList.add('contract');
            navlist.classList.add('contract');
            navimg.classList.add('contract');
        }
    } else {
        if (window.innerWidth < 802) {
            movilenavbar.classList.remove('contract');
        } else {
            navbar.classList.remove('contract');
            navlist.classList.remove('contract');
            navimg.classList.remove('contract');
        }
    }
})