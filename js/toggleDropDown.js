let showMenu = false;
let dropElement = document.querySelector('.drop-menu');

function toggleMenu() {
    if (!showMenu) {
        dropElement.style.display = "block"
        showMenu = true;
    } else {
        dropElement.style.display = "none"
        showMenu = false;
    }
}
window.toggleMenu = toggleMenu;