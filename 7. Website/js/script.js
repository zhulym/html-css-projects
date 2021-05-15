const headerLinks = document.querySelectorAll('.header__link');
const contactsDate = document.querySelector('.contacts__date');
const leftArrow = document.querySelector('.header__left-arrow');
const rightArrow = document.querySelector('.header__right-arrow');



const slides = document.querySelectorAll('.header__slide');
let currentSlide = 0;

rightArrow.addEventListener('click', slideBlockRight);

function slideBlockRight() {
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.add('hide_slides');
    }
    slides[currentSlide].classList.remove('hide_slides');
    currentSlide++;

    if (currentSlide++ === slides.length) {
        currentSlide = 0;
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


