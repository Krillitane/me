/* Show menu */
const navMenu = document.getElementById('navmenu'),
      navToggle = document.getElementById('navtoggle'),
      navClose = document.getElementById('navclose')

/* Menu show*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/* Menu hidden*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/* Remove menu mobile */
const navLink = document.querySelectorAll('.nav-link')

const linkAction = () =>{
    //when we click on each nav-link we remove the show menu icon
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

document.addEventListener("DOMContentLoaded", function () {
    /*== Swiper Projects== */
    let swiperProjects = new Swiper(".projects-container", {
        loop: true,
        spaceBetween: 24,

        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
        pagination: {
            el: ".swiper-pagination",
        },
        breakpoints: {
            1200: {
                slidesPerView: 2, // Fix the typo here
                spaceBetween: -56,
            },
        },
    });
});
