// TODO - Create fetch API
async function getQuoteDate() {
    const url = "https://api.quotable.io/random";
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const quote = await response.json();
        console.log(quote);
        console.log(quote.author)
        console.log(quote.content)
    } catch(error) {
        console.error(error.message);
    }
};

getQuoteDate();

// TODO - Add JS functionality to generate a new quote and clear existing one
// EXTRA TODO? - Make ability to add favorite quotes to library? 