let showMenu = false;
let dropElement = document.querySelector('.drop-menu');
function toggleMenu() {
    if (showMenu == true) {
        dropElement.style.display = "none"
        showMenu = false;
    } else {
        dropElement.style.display = "block"
        showMenu = true;
    }
}
window.toggleMenu = toggleMenu;