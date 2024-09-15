import { quotes } from "../assets/quotes.js";

function showQuote(filteredQuotes) {
    //container where quotes will be displayed
    const quoteContainer = document.getElementById('quote');
    //deleting the previous datas and add new HTML
    quoteContainer.innerHTML = '';

    // Iterate each quotes and create innerHtml
    filteredQuotes.forEach((element) => {
        const { quote, category, author } = element;

        //create a div element to later append in container
        const quoteElement = document.createElement('div');
        //add innerHTML 
        quoteElement.innerHTML = `
      <p>${quote}</p>
                <div>
                    <p class="quote-category">${category}</p>
                    <p class="quote-author"><i>- ${author}</i></p>
                </div>
    `;
        // Append new element to the container
        quoteContainer.appendChild(quoteElement);
    });
}
showQuote(quotes); //initially calling the shwowQuote function with all the quotes

//filtering the quotes according to the parameter 
function filterQuote(getCategory) {
    let filteredQuotes = quotes.filter((items) => {
        return items.category == getCategory
    })
    //call the showQuote function again to show the new filtered quotes
    showQuote(filteredQuotes)
}
//filterQuote functin is defined globally so that onClick works in the menu list items
window.filterQuote = filterQuote;