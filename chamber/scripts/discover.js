const currentDate = new Date();
const currentTime = currentDate.getTime();
const lastVisitDate = localStorage.getItem("lastVisitDate");

function updateVisitorMessage() {
    const sidebar = document.getElementById('visitor-message');
    if (!lastVisitDate) {
        sidebar.innerHTML = "Welcome! Let us know if you have any questions.";
    } else {
        const timeDiff = currentTime - lastVisitDate;
        const daysDiff = Math.floor(timeDiff / (1000 * 3600 * 24));

        if (daysDiff < 1) {
            sidebar.innerHTML = "Back so soon! Awesome!";
        } else {
            sidebar.innerHTML = `You last visited ${daysDiff} ${daysDiff === 1 ? "day" : "days"} ago.`;
        }
    }
    localStorage.setItem("lastVisitDate", currentTime);
}

fetch('data/items.json')
    .then(response => response.json())
    .then(data => {
        const discoverContent = document.querySelector('.discover-content');

        data.forEach((item, index) => {
            const card = document.createElement('div');
            card.classList.add('item-card');
            card.style.gridArea = `item${index + 1}`;

            card.innerHTML = `
                <h2>${item.name}</h2>
                <figure>
                    <img src="images/${item.image}" alt="${item.name}">
                </figure>
                <address>${item.address}</address>
                <p>${item.description}</p>
                <button>Learn More</button>
            `;

            discoverContent.appendChild(card);
        });

        updateVisitorMessage();
    })
    .catch(error => console.error('Error fetching data:', error));
