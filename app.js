//mobile targets the menu flip
const menu = document.querySelector('#mobile-menu')
//mobile targets the menu links, class .navbar__menu
const menuLinks = document.querySelector('.navbar__menu')

//toggling the menu - display mobile menue
//we want to trigger navbar__menu.active and the animation effects of nth child 1-3
const mobileMenu = () => {
    menu.classList.toggle('is-active') //basicall active, or not active
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);