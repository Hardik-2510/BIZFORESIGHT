// API Key for NewsAPI
const apiKey = '8f6fced608794d48b760529c51e831b9';
const url = `https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=${apiKey}`;

// Function to fetch news
async function fetchNews() {
    try {
        // Fetch news articles
        const response = await fetch(url);
        const data = await response.json();

        if (data.status === 'ok') {
            displayNews(data.articles);
        } else {
            console.error('Error fetching the news:', data.message);
        }
    } catch (error) {
        console.error('Error:', error);
    }
}

// Function to display news articles on the page
function displayNews(articles) {
    const newsContainer = document.getElementById('news-container');
    newsContainer.innerHTML = ''; // Clear previous content

    // Loop through articles and create HTML content
    articles.forEach(article => {
        const articleElement = document.createElement('div');
        articleElement.classList.add('article');

        articleElement.innerHTML = `
            <h3><a href="${article.url}" target="_blank">${article.title}</a></h3>
            <p>${article.description}</p>
            <p><strong>Source:</strong> ${article.source.name}</p>
        `;

        newsContainer.appendChild(articleElement);
    });
}

// Call fetchNews function when the page loads
document.addEventListener('DOMContentLoaded', fetchNews);
