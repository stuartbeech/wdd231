document.addEventListener('DOMContentLoaded', () => {
    fetch('data/news.json')
        .then(response => response.json())
        .then(data => {
            const newsContainer = document.getElementById('news-container');

            const featured = data.find(item => item.highlight);
            const secondary = data.filter(item => !item.highlight);

            let newsHTML = '';

            if (featured) {
                newsHTML += `
                    <article class="news-featured">
                        <h3>${featured.title}</h3>
                        <p>${featured.description}</p>
                    </article>
                `;
            }

            if (secondary.length > 0) {
                newsHTML += `
                    <div class="news-secondary">
                        ${secondary
                        .map(
                            (item) => `
                                    <article class="news-item">
                                        <h4>${item.title}</h4>
                                        <p>${item.description}</p>
                                    </article>
                                `
                        )
                        .join('')}
                    </div>
                `;
            }

            newsContainer.innerHTML = newsHTML;
        })
        .catch(error => {
            console.error('Error loading news:', error);
            document.getElementById('news-container').innerHTML = '<p>Sorry, we could not load the latest news at this time.</p>';
        });
});