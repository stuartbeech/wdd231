document.addEventListener('DOMContentLoaded', () => {
    const currentUrl = window.location.href;
    const urlParams = new URLSearchParams(window.location.search);

    const trailVibeUser = localStorage.getItem("trailVibeUser");
    const heading = document.getElementById('member-container');
    const showInfo = document.querySelector("#userInfo");

    if (heading && trailVibeUser) {
        heading.innerHTML = `Welcome to Trail Vibe, ${trailVibeUser}!`;
    }

    function show(key) {
        const value = urlParams.get(key);
        if (value) {
            return decodeURIComponent(value.replace(/\+/g, " "));
        }
        return "";
    }

    function capitalize(str) {
        if (!str) return "";
        return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
    }

    const userDetails = `
        <div class="thankyou-container heading">
            <h3>User Information</h3>
        </div>
        <div class="thankyou-container">
            <p><strong>Name:</strong></p> <p>${show("name")}</p>
        </div>
        <div class="thankyou-container">
            <p><strong>Surname:</strong></p> <p>${show("surname")}</p>
        </div>
        <div class="thankyou-container">
            <p><strong>Favorite Trail:</strong></p> <p>${show("trail")}</p>
        </div>
        <div class="thankyou-container">
            <p><strong>Experience Level:</strong></p> <p>${capitalize(show("experience"))}</p>
        </div>
        <div class="thankyou-container">
            <p><strong>Registration  Date:</strong></p> <p>${show("timestamp")}</p>
        </div>
    `;

    if (showInfo) {
        showInfo.innerHTML = userDetails;
    }
});
