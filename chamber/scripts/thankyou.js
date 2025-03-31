const currentUrl = window.location.href;
const urlParams = new URLSearchParams(window.location.search);

function show(cup) {
    const value = urlParams.get(cup);
    if (value) {
        return value.replace("%40", "@").replace(/\+/g, " ");
    }
    return "";
}

const showInfo = document.querySelector("#userInfo");
// const now = new Date();
// const currentDateTime = now.toLocaleString();

const userDetails = `
    <div class="thankyou-container heading">
        <h3>Registration Details</h3>
    </div>
    <div class="thankyou-container">
        <p><strong>First Name:</strong></p> <p>${show("firstName")}</p>
    </div>
    <div class="thankyou-container">
        <p><strong>Last Name:</strong></p> <p>${show("lastName")}</p>
    </div>
    <div class="thankyou-container">
        <p><strong>Email:</strong></p> <p>${show("email")}</p>
    </div>
    <div class="thankyou-container">
        <p><strong>Phone Number:</strong></p> <p>${show("phone")}</p>
    </div>
    <div class="thankyou-container">
        <p><strong>Organization Name:</strong></p> <p>${show("orgName")}</p>
    </div>
    <div class="thankyou-container">
        <p><strong>Membership Level:</strong></p> <p>${capitalize(show("memLevel"))}</p>
    </div>
    <div class="thankyou-container">
        <p><strong>Registration Date:</strong></p> <p>${show("timestamp")}</p>
    </div>
`;

showInfo.innerHTML = userDetails;

function capitalize(str) {
    if (!str) return "";
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase();
}