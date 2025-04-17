import { loadTrails } from './modules/trailService.js';
import { getWeather } from './modules/weatherService.js';
import { showModal, showModalWithMap } from './modules/modal.js';
import { filterByDifficulty, getRandomTrails } from './modules/trailUtils.js';

document.addEventListener('DOMContentLoaded', () => {
    const trailList = document.getElementById("trail-list");
    const trailGrid = document.querySelector(".trail-grid");
    const modal = document.getElementById("trail-modal");
    const modalBody = document.getElementById("modal-body");
    const closeBtn = document.querySelector(".close-modal");

    async function displayTrails() {
        const trails = await loadTrails();
        if (!trails) {
            trailGrid.innerHTML = "<p>Sorry, we couldn't load trail data.</p>";
            return;
        }

        if (trailList) {
            const filtered = filterByDifficulty(trails);
            const randomTrails = getRandomTrails(filtered, 3);

            randomTrails.forEach(async trail => {
                const card = document.createElement("div");
                card.classList.add("trail-card");

                const weather = await getWeather(trail.lat, trail.lon);

                card.innerHTML = `
                    <img src="${trail.image}" alt="${trail.name}" loading="lazy" />
                    <h3>${trail.name}</h3>
                    <p><strong>Location:</strong> ${trail.location}</p>
                    <p><strong>Distance:</strong> ${trail.distance}</p>
                    <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
                    <p><strong>Current Weather:</strong> ${weather}</p>
                    <p><strong>Description:</strong> ${trail.description}</p>
                    <button class="view-details" data-name="${trail.name}">View Details</button>
                `;

                trailList.appendChild(card);

                card.querySelector(".view-details").addEventListener("click", () => {
                    showModal(modalBody, modal, trail);
                });
            });
        } else {
            trails.forEach(async (trail) => {
                const card = document.createElement("div");
                card.classList.add("trail-card");

                const weather = await getWeather(trail.lat, trail.lon);

                card.innerHTML = `
                    <img src="${trail.image}" alt="${trail.name}" loading="lazy" />
                    <h3>${trail.name}</h3>
                    <p><strong>Location:</strong> ${trail.location}</p>
                    <p><strong>Distance:</strong> ${trail.distance}</p>
                    <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
                    <p><strong>Current Weather:</strong> ${weather}</p>
                    <p><strong>Description:</strong> ${trail.description}</p>
                    <button class="view-details" data-name="${trail.name}">View Details</button>
                `;

                trailGrid.appendChild(card);

                card.querySelector(".view-details").addEventListener("click", () => {
                    showModalWithMap(modalBody, modal, trail, weather);
                });
            });
        }
    }

    closeBtn.addEventListener("click", () => {
        modal.classList.add("hidden");
    });

    window.addEventListener("click", e => {
        if (e.target === modal) {
            modal.classList.add("hidden");
        }
    });

    displayTrails();
});