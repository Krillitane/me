//// dynamic background color for my header section ///
document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    const sections = document.querySelectorAll("section");

    // Function to update header background color based on the bottom of the section
    function updateHeaderBackground() {
        sections.forEach((section) => {
            const rect = section.getBoundingClientRect();
            if (rect.bottom <= window.innerHeight) {
                const backgroundColor = getComputedStyle(section).backgroundColor;
                header.style.background = backgroundColor;
            }
        });
    }

    // Initial call to set the header background color
    updateHeaderBackground();

    // Update header background on scroll
    window.addEventListener("scroll", updateHeaderBackground);
});

////////////////////////////   words    //////////////////////////
let words = document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters = word.textContent.split(""); 
    word.textContent = "";
    letters.forEach((letter)=>{
        let span = document.createElement("span");
        span.textContent = letter;
        span.className = "letter";
        word.append(span);
    });
});

let currentWordIndex = 0;
let maxWordIndex = words.length -1;
words[currentWordIndex].style.opacity = "1";

let changeText = ()=>{
    let currentWord = words [currentWordIndex];
    let nextWord = currentWordIndex === maxWordIndex ? words [0] : words[currentWordIndex +1];

    Array.from(currentWord.children).forEach((letter, i)=>{
        setTimeout(()=>{
            letter.className = "letter out";
        }, i * 80);
    });
    nextWord.style.opacity = "1";
    Array.from(nextWord.children).forEach((letter, i)=>{
        letter.className = "letter behind";
        setTimeout(()=>{
            letter.className = "letter in";
        },340 + i*80);
        });
        currentWordIndex = currentWordIndex === maxWordIndex ? 0 : currentWordIndex + 1;
};

changeText();
setInterval(changeText,3000)

//////////////////////////       show cv       /////////////////////////////
document.addEventListener("DOMContentLoaded", function () {
    const showButton = document.getElementById("showButton");
    const hiddenContent = document.getElementById("hiddenContent");

    // Initially, hide the content
    hiddenContent.style.display = "none";

    // Add a click event listener to the button
    showButton.addEventListener("click", function () {
        // Toggle the visibility of the hidden content
        if (hiddenContent.style.display === "none") {
            hiddenContent.style.display = "block";
            showButton.textContent = "Conceal";
        } else {
            hiddenContent.style.display = "none";
            showButton.textContent = "Show CV"
        }
    });
});
//////////////////////////       circle skills       /////////////////////////////
const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360 / dots;

    for(let i = 0 ; i< dots ; i++){
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i = 0; i<percent ; i++){
        pointsMarked[i].classList.add('marked')
    }
})
/////////////   mix it up portfolio section    ///////////
var mixer = mixitup('.portfolio-gallery');

//////////    active menu    ////////////////////////////////
let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec => sec.classList.remove("active"));
    menuLi[len].classList.add("active");
}

activeMenu();
window.addEventListener("scroll",activeMenu);


//////////////  sticky navbar /////////////////////////////////
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",this.window.scrollY > 50)
})

//////////////   toggle icon navbar   /////////////////////////
let menuIcon = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menuIcon.onclick = ()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
}


window.onscroll = ()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
}


//////////////   Paralax   /////////////////////////

const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.target.classList.remove("show-items");
        }
    });
});

const scrollScale = document.querySelectorAll(".scroll-scale");
scrollScale.forEach((el)=>observer.observe(el));

const scrollBottom = document.querySelectorAll(".scroll-bottom");
scrollBottom.forEach((el)=>observer.observe(el));

const scrollTop = document.querySelectorAll(".scroll-top");
scrollTop.forEach((el)=>observer.observe(el));


////////read more/////
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the button and hidden content
    const readMoreButton = document.querySelector('#bttn');
    const abouthiddenContent = document.querySelector('.abouthidden-content');

    // Add a click event listener to the button
    readMoreButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior (e.g., navigating to a new page)

        // Toggle the visibility of the hidden content
        if (abouthiddenContent.style.display === 'none' || abouthiddenContent.style.display === '') {
            abouthiddenContent.style.display = 'block';
            readMoreButton.textContent = 'Read Less'; // Optionally, change the button text
        } else {
            abouthiddenContent.style.display = 'none';
            readMoreButton.textContent = 'Read More'; // Optionally, change the button text
        }
    });
});

//                          services section                                       //
document.addEventListener('DOMContentLoaded', function() {
    // Get references to the button and hidden content
    const readMoreServices = document.querySelector('#btnService');
    const serviceshiddenContent = document.querySelector('.serviceshidden-content');

    // Add a click event listener to the button
    readMoreServices.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default link behavior (e.g., navigating to a new page)

        // Toggle the visibility of the hidden content
        if (serviceshiddenContent.style.display === 'none' || serviceshiddenContent.style.display === '') {
            serviceshiddenContent.style.display = 'block';
            readMoreServices.textContent = 'Read Less'; // Optionally, change the button text
        } else {
            serviceshiddenContent.style.display = 'none';
            readMoreServices.textContent = 'Read More'; // Optionally, change the button text
        }
    });
});


