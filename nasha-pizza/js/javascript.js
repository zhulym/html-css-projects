
function showHiddenMenu() {
    document.getElementById("hidden__menu").classList.toggle("hidden__menu_active");
    window.onclick = function (event) {
        if (!event.target.matches('.aside__menu_button')) {
            let dropDown = document.getElementsByClassName("hidden__menu_content");
            let i;
            for (i = 0; i < dropDown.length; i++) {
                let openDropdown = dropDown[i];
                if (openDropdown.classList.contains('hidden__menu_active')) {
                    openDropdown.classList.remove('hidden__menu_active');
                }
            }
        }
    }
}
