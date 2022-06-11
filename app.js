//mobile targets the menu flip
const menu = document.querySelector('#mobile-menu')
//mobile targets the menu links, class .navbar__menu
const menuLinks = document.querySelector('.navbar__menu')

const navLogo = document.querySelector('#navbar__logo')

//toggling the menu - display mobile menue
//we want to trigger navbar__menu.active and the animation effects of nth child 1-3
const mobileMenu = () => {
    menu.classList.toggle('is-active') //basicall active, or not active
    menuLinks.classList.toggle('active')
}

menu.addEventListener('click', mobileMenu);

// animation in navbar - show active menu when scrolling

const highlightMenu = () => {
    //target all of the menu, all ID's
    const elem = document.querySelector('.highlight')
    const homeMenu = document.querySelector('#home-page')
    const aboutMenu = document.querySelector('#about-page')
    const servicesMenu = document.querySelector('#services-page')
    //show me what im positioned at
    let scrollPos = window.scrollY

    //ads 'highlight class to my menu items
if(window.innerWidth > 960 && scrollPos < 600) {
    homeMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
}   else if (window.innerWidth > 960 && scrollPos < 1400) {
    aboutMenu.classList.add('highlight')
    homeMenu.classList.remove('highlight')
    servicesMenu.classList.remove('highlight')
    return
}   else if (window.innerWidth > 960 && scrollPos < 2345) {
    servicesMenu.classList.add('highlight')
    aboutMenu.classList.remove('highlight')
    return
}

if((elem && window.innerWidth < 960 && scrollPos < 600) || elem) {
    elem.classList.remove('highlight')
}

}

window.addEventListener('scroll', highlightMenu)
window.addEventListener('click', highlightMenu)

//Close mobile Menue when clicking on a menu item

const hideMobileMenu = () => {
    const menuBars = document.querySelector('.is-active')
    if(window.innerWidth <= 768 && menuBars ) {
        menu.classList.toggle('is-active')
        menuLinks.classList.remove('active')

    }
}
menuLinks.addEventListener('click', hideMobileMenu)
navLogo.addEventListener('click', hideMobileMenu)