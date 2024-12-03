document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote');
    const newQuoteButton = document.getElementById('new-quote');
    const shareTwitterButton = document.getElementById('share-twitter');
    const shareInstagramButton = document.getElementById('share-instagram');
    const shareWhatsAppButton = document.getElementById('share-whatsapp');

    async function fetchRandomQuote() {
        try {
            const response = await fetch('https://api.kanye.rest');
            const data = await response.json();
            return `"${data.quote}" - Kanye West`;
        } catch (error) {
            console.error('Error fetching quote:', error);
            return 'Failed to fetch a quote. Please try again.';
        }
    }

    async function updateQuote() {
        quoteElement.textContent = 'Loading...';
        const quote = await fetchRandomQuote();
        quoteElement.textContent = quote;
    }

    function shareQuote(platform) {
        const quote = quoteElement.textContent;
        let shareUrl = '';

        switch (platform) {
            case 'twitter':
                shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(quote)}`;
                break;
            case 'instagram':
                alert('Instagram sharing is not supported directly via URL. Please copy the quote and share it manually.');
                return;
            case 'whatsapp':
                shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(quote)}`;
                break;
        }

        window.open(shareUrl, '_blank');
    }

    newQuoteButton.addEventListener('click', updateQuote);
    shareTwitterButton.addEventListener('click', () => shareQuote('twitter'));
    shareInstagramButton.addEventListener('click', () => shareQuote('instagram'));
    shareWhatsAppButton.addEventListener('click', () => shareQuote('whatsapp'));

    // Load initial quote
    updateQuote();
});
