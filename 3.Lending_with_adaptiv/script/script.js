$(document).ready(function () {
    $('.heading__burger').click(function (event) {
        $('.heading__burger, .header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});