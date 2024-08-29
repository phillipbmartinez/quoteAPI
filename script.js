const newQuoteButton = document.querySelector("#newQuoteButton");
const clearButton = document.querySelector("#clearButton");
const quoteDataContainer = document.querySelector("#quoteDataContainer");

async function getQuoteData() {
    const url = "https://api.quotable.io/random";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const quoteData = await response.json();
        return quoteData;
    } catch(error) {
        console.error(error.message);
    }
};

// TODO - Add JS functionality to generate a new quote and clear existing one
async function displayQuote() {
    try {
        if (quoteDataContainer.innerHTML === "") {
            const quote = await getQuoteData();
            console.log(`Quote Author: ${quote.author}\nQuote: "${quote.content}"`);
    
            const authorDiv = document.createElement("div");
            authorDiv.classList.add("authorDiv");
            authorDiv.innerHTML = `<strong>Quote Author:</strong> ${quote.author}`;
            quoteDataContainer.appendChild(authorDiv);
    
            const quoteDiv = document.createElement("div");
            quoteDiv.classList.add("quoteDiv");
            quoteDiv.innerHTML = `<strong>Quote: </strong>"${quote.content}"`
            quoteDataContainer.appendChild(quoteDiv);
        } else {
            return;
        }
    } catch (error) {
        console.error(error.message);
    }
};

newQuoteButton.addEventListener("click", () => {
    displayQuote();
});

clearButton.addEventListener("click", () => {
    quoteDataContainer.innerHTML = "";
})


// EXTRA TODO? - Make ability to add favorite quotes to library? 