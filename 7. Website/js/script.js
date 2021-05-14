const headerLinks = document.querySelectorAll('.header__link');

headerLinks.forEach(item => {
    item.addEventListener('click', addActiveLink);
})

function addActiveLink(event) {
    headerLinks.forEach(item => {
        item.classList.remove('header__active');
    })
    if (event.target.classList.contains('header__active')) {
        return;
    } else {
        event.target.classList.add('header__active');
    }
}


