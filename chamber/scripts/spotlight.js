async function loadSpotlights() {
  const response = await fetch("./data/members.json");
  const members = await response.json();

  const goldSilverMembers = members.companies.filter(
    (member) => member.membership_level === 2 || member.membership_level === 3
  );

  const randomMembers = [];
  while (randomMembers.length < 3 && goldSilverMembers.length > 0) {
    const randomIndex = Math.floor(Math.random() * goldSilverMembers.length);
    randomMembers.push(goldSilverMembers.splice(randomIndex, 1)[0]);
  }

  const spotlightContainer = document.getElementById("cards");
  randomMembers.forEach((member) => {
    const spotlightCard = document.createElement("div");
    spotlightCard.classList.add("card");
    spotlightCard.innerHTML = `
              <h3>${member.name}</h3>
          `;
    const spotlightCardContent = document.createElement("div");
    spotlightCardContent.classList.add("cardContent");
    spotlightCardContent.innerHTML = `
            <img src="${member.image_icon}" alt="${member.name} Logo">`;

    const spotlightCardInfo = document.createElement("div");
    spotlightCardInfo.classList.add("cardInfo");
    spotlightCardInfo.innerHTML = `
              <p><strong>Email:</strong> ${member.email}</p>
              <p><strong>Phone:</strong> ${member.phone_number}</p>
              <p><strong>URL:</strong> <a href="${member.website_url}">${member.website_url}</a></p>
              <p><strong>Membership Level:</strong> ${member.membership_level}</p>`;

    spotlightContainer.appendChild(spotlightCard);
    spotlightCard.appendChild(spotlightCardContent);
    spotlightCardContent.appendChild(spotlightCardInfo);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  loadSpotlights();
});
