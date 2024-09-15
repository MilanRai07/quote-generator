import { quotes } from "../assets/quotes.js";

function showQuote() {
    //container where quotes will be displayed
    const quoteContainer = document.getElementById('quote');

    // Iterate each quotes and create innerHtml
    quotes.forEach((element) => {
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

showQuote();