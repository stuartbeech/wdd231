export function showModal(modalBody, modal, trail, weather) {
    modalBody.innerHTML = `
        <h2>${trail.name}</h2>
        <img src="${trail.image}" alt="${trail.name}" />
        <p><strong>Location:</strong> ${trail.location}</p>
        <p><strong>Distance:</strong> ${trail.distance}</p>
        <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
        <p><strong>Description:</strong> ${trail.description}</p>
    `;
    modal.classList.remove("hidden");
}

export function showModalWithMap(modalBody, modal, trail, weather) {
    modalBody.innerHTML = `
        <h2>${trail.name}</h2>
        <p><strong>Location:</strong> ${trail.location}</p>
        <p><strong>Distance:</strong> ${trail.distance}</p>
        <p><strong>Difficulty:</strong> ${trail.difficulty}</p>
        <p><strong>Current Weather:</strong> ${weather}</p>
        <p><strong>Description:</strong> ${trail.description}</p>
        <br>
        <div class="map-container">
            <iframe
              src="${trail.mapUrl}"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    `;
    modal.classList.remove("hidden");
}