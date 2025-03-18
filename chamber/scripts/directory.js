document.addEventListener("DOMContentLoaded", async () => {
    const url = "./data/members.json";

    async function getCompanyData() {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Failed to fetch company data.");
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Error fetching company data:", error);
            return [];
        }
    }

    const displayCompanies = (companies) => {
        const cardsContainer = document.getElementById("cards");
        cardsContainer.innerHTML = "";

        companies.forEach((company) => {
            const card = document.createElement("section");
            const cardContent = document.createElement("div");
            const cardInfo = document.createElement("div");
            const name = document.createElement("h3");
            const portrait = document.createElement("img");
            const email = document.createElement("p");
            const phone = document.createElement("p");
            const urlContainer = document.createElement("p");
            const link = document.createElement("a");


            card.classList.add("card");
            cardContent.classList.add("cardContent");
            cardInfo.classList.add("cardInfo");

            name.textContent = company.name;
            portrait.setAttribute("src", company.image_icon);
            portrait.setAttribute("alt", `Portrait of ${company.name}`);
            portrait.setAttribute("loading", "lazy");

            email.innerHTML = `<strong>Email:</strong> ${company.email}`;
            phone.innerHTML = `<strong>Phone:</strong> ${company.phone_number}`;
            link.textContent = company.website_url.replace("https://", "");
            link.href = company.website_url;
            link.target = "_blank";
            urlContainer.innerHTML = `<strong>URL:</strong> `;
            urlContainer.appendChild(link);

            card.appendChild(name);
            cardContent.appendChild(portrait);
            cardContent.appendChild(cardInfo);
            cardInfo.appendChild(email);
            cardInfo.appendChild(phone);
            cardInfo.appendChild(urlContainer);
            card.appendChild(cardContent);
            cardsContainer.appendChild(card);
        });
    };

    const toggleButton = document.getElementById("toggleLayoutBtn");
    const cardsContainer = document.getElementById("cards");

    toggleButton.addEventListener("click", () => {
        const isListView = cardsContainer.classList.toggle("list-view");
        toggleButton.textContent = isListView ? "Switch to Grid View" : "Switch to List View";
    });

    getCompanyData().then(data => {
        if (Array.isArray(data)) {
            displayCompanies(data, false);
        } else if (data && data.companies) {
            displayCompanies(data.companies, false);
        } else {
            console.error("No data available:", data);

            const cardsContainer = document.getElementById("cards");
            cardsContainer.innerHTML = "<p>No companies available to display.</p>";
        }
    });
});
