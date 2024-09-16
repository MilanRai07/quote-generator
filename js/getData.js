import { quotes } from "../assets/quotes.js";

let currentIndex = 0;
let filteredQuotes = quotes;

function showQuote(getQuotes, index) {
    //container where quotes will be displayed
    const quoteContainer = document.getElementById('quote');
    //deleting the previous datas and add new HTML
    quoteContainer.innerHTML = '';

    if (index < 0 || index >= getQuotes.length) {
        throw new Error("you have invalid index for the data");
    } else {
        const { quote, category, author } = getQuotes[index];
        // Iterate each quotes and create innerHtml

        //div element to later append in container
        const quoteElement = document.createElement('div');
        //add innerHTML 
        quoteElement.innerHTML = `
        <div class="quote-div">
            <p>${quote}</p>
            <div class="quote-meta">
               <p class="quote-category">${category}</p>
               <p class="quote-author"><i>- ${author}</i></p>
         </div>
    </div>
    `;
        // Append new element to the container
        quoteContainer.appendChild(quoteElement);
    }
}
showQuote(filteredQuotes, currentIndex); //initially calling the shwowQuote function with all the quotes

//filtering the quotes according to the parameter 
function filterQuote(getCategory) {
    currentIndex=0;
    let storedQuotes = quotes.filter((items) => {
        return items.category == getCategory
    })
    //call the showQuote function again to show the new filtered quotes
    showQuote(storedQuotes, currentIndex)
    filteredQuotes = storedQuotes;
}

//chnage to next quote funcitn
function changeNext() {
    if (currentIndex >= filteredQuotes.length - 1) {
        currentIndex = 0;
    } else {
        currentIndex++;
    }
    showQuote(filteredQuotes, currentIndex)
}

//change to previous quote function 
function changePrevious() {
    if (currentIndex == 0) {
        currentIndex = filteredQuotes.length - 1;
    } else {
        currentIndex--;
    }
    showQuote(filteredQuotes, currentIndex)
}
//genrate random quote and show random quote
function generateRandom(){
    const randomIndex=Math.floor(Math.random()*filteredQuotes.length);
    currentIndex=randomIndex;
    showQuote(filteredQuotes,currentIndex)
} 
//function is defined globally so that onClick attribute works in html
window.filterQuote = filterQuote;
window.changeNext = changeNext;
window.changePrevious = changePrevious;
window.generateRandom=generateRandom;