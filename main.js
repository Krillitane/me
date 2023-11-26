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


/* Swiper Testimonial */
let swiperTestimonial = new Swiper(".testimonial-container", {
    grabCursor: true,

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});

/* Email JS */
const contactForm = document.getElementById('.contact-form'),
      contactName = document.getElementById('.contact-name'),
      contactEmail = document.getElementById('.contact-email'),
      contactProject = document.getElementById('.contact-project'),
      contactMessage = document.getElementById('.contact-message')

const sendEmail = (e) =>{
    e.preventDefault()

    //check if the field has value
    if(contactName.value === '' || contactEmail.value === '' || contactProject.value === ''){
        //Add and remove color
        contactMessage.classList.remove('color-blue')
        contactMessage.classList.add('color-red')

        //show message
        contactMessage.textContent = 'Write all the input fields 📩'
    }else{
        // serviceID - templateID - #form - publicKey
        emailjs.sendForm('service_5j6s1x4','template_r6cxzzq','#contact-form','h98BHDmxxMHUODCgL')
            .then(() =>{
                //show message and add color
                contactMessage.classList.add('color-blue')
                contactMessage.textContent = 'Message sent✅'

                //remove message after 5 seconds
                setTimeout(() =>{
                    contactMessage.textContent = ''
                }, 5000)
            })
    }
}
contactForm.addEventListener('submit', sendEmail)
