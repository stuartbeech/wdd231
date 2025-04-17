document.addEventListener('DOMContentLoaded', () => {
    const timestamp = document.getElementById('timestamp');
    if (timestamp) {
        const currentDateTime = new Date().toLocaleString();
        timestamp.value = currentDateTime;
    }

    const form = document.querySelector("form");

    if (form) {
        form.addEventListener("submit", (event) => {
            const nameId = document.getElementById("name");
            if (nameId) {
                const name = nameId.value.trim();
                if (name) {
                    localStorage.setItem("trailVibeUser", name);
                }
            }
        });
    }
});
