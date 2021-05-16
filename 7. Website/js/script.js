const headerLinks = document.querySelectorAll('.header__link');
const contactsDate = document.querySelector('.contacts__date');
const leftArrow = document.querySelectorAll('.header__left-arrow');
const rightArrow = document.querySelectorAll('.header__right-arrow');
const serviceItem = document.querySelectorAll('.service__work-item');
const slides = document.querySelectorAll('.header__slide');
let currentSlide = 0;


rightArrow.forEach(el => {
    el.addEventListener('click', slideBlockRight);
})
leftArrow.forEach(el => {
    el.addEventListener('click', slideBlockLeft);
})
slideBlockRight();
setInterval(slideBlockRight, 2000);

function slideBlockRight() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hide_slides');
    }
    slides[currentSlide].classList.remove('hide_slides');

    if (currentSlide + 1 === slides.length) {
        currentSlide = 0;
    } else {
        currentSlide++;
    }
}

function slideBlockLeft() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hide_slides');
    }
    slides[currentSlide].classList.remove('hide_slides');

    if (currentSlide === 0) {
        currentSlide = slides.length - 1;
    } else {
        currentSlide--;
    }
}



headerLinks.forEach(item => {
    item.addEventListener('click', addActiveLink);
})
function addActiveLink(event) {
    debugger;
    headerLinks.forEach(item => {
        item.classList.remove('header__active');
    })
    if (event.target.classList.contains('header__active')) {
        return;
    } else {
        event.target.classList.add('header__active');
    }
}



let dateForBlog = new Date();
contactsDate.innerHTML = `${dateForBlog.getFullYear()}-${dateForBlog.getMonth()}-${dateForBlog.getDate()} &nbsp; ${dateForBlog.getHours()}:${dateForBlog.getMinutes()}`;

