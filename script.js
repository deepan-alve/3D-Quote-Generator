document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    const newQuoteButton = document.getElementById('new-quote');

    async function fetchRandomQuote() {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            return `"${data.content}" - ${data.author}`;
        } catch (error) 
        {
            console.error('Error fetching quote:', error);
            return 'Failed to fetch a quote. Please try again.';
        }
    }

    async function updateQuote() {
        quoteElement.textContent = 'Loading...';
        const quote = await fetchRandomQuote();
        quoteElement.textContent = quote;
    }
    w

    // newQuoteButton.addEventListener('click', updateQuote);

    // Load initial quote
    updateQuote();
});
