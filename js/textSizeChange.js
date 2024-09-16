function changeTextSize(size) {
    let getText = document.getElementById('quote-text');
    if (size == 'small') {
        getText.style.fontSize = "12px";
    } else if (size == 'medium') {
        getText.style.fontSize = "18px";
    } else if (size == 'large') {
        getText.style.fontSize = "26px";
    }
}

window.changeTextSize = changeTextSize;