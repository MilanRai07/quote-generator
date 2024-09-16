import { quotes } from "../assets/quotes.js";

let currentIndex = 0;
let filteredQuotes=quotes; 

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
    let storedQuotes = quotes.filter((items) => {
        return items.category == getCategory
    })
    //call the showQuote function again to show the new filtered quotes
    showQuote(storedQuotes, currentIndex)
    filteredQuotes=storedQuotes;
}
//filterQuote functin is defined globally so that onClick works in the menu list items
window.filterQuote = filterQuote;
