function toggleColorMode(color) {
    let body = document.body;
    let quoteContainer = document.querySelector('.quote-container')
    let quoteCategory = document.querySelector('.quote-category')
    let dropDownList = document.querySelector('.drop-menu')
    let moon = document.querySelector('.dark')
    let sun = document.querySelector('.light')

    if (color == 'dark') {
        body.style.backgroundColor = "#121212";
        body.style.color = "#ffff";
        quoteContainer.classList.add('card-dark-mode');
        quoteCategory.classList.add('category-dark-mode');
        dropDownList.classList.add('list-dark-mode');
        moon.classList.add('selected-mode');
        sun.classList.remove('selected-mode');
    } else if (color == 'light') {
        body.style.backgroundColor = "#e0f2f1";
        body.style.color = "black";
        quoteContainer.classList.remove('card-dark-mode');
        dropDownList.classList.remove('list-dark-mode');
        quoteCategory.classList.remove('category-dark-mode');
        sun.classList.add('selected-mode');
        moon.classList.remove('selected-mode');
    }
}

window.toggleColorMode = toggleColorMode;