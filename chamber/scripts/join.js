document.addEventListener("DOMContentLoaded", () => {
    const data = [
        {
            title: "Non-Profit Membership Level",
            cost: "Free!",
            benefits: [
                "Access to community events",
                "Basic training sessions",
                "Listing in the business directory",
            ],
        },
        {
            title: "Bronze Membership Level",
            cost: "R499 Per Year",
            benefits: [
                "Access to community events",
                "Advanced training sessions",
                "Upgraded business directory listing",
            ],
        },
        {
            title: "Silver Membership Level",
            cost: "R999 Per Year",
            benefits: [
                "All Bronze-level benefits",
                "Access to member-only events",
                "Spotlight on the home page (randomly featured)",
            ],
        },
        {
            title: "Gold Membership Level",
            cost: "R1499 Per Year",
            benefits: [
                "All Silver-level benefits",
                "Invitations to VIP events",
                "Guaranteed spotlight on the home page"
            ],
        },
    ];

    function displayCourseDetailsDialog(buttonIndex) {
        const courseDetailsDialog = document.querySelector("#course-details");
        const courseDetailsContent = document.querySelector(".dialog-content");
        const modalHeading = courseDetailsContent.querySelector("#modalTitle");
        const modalDescription = courseDetailsContent.querySelector("#modalDescription");
        const modalList = courseDetailsContent.querySelector(".benefits-list");

        modalHeading.textContent = '';
        modalDescription.textContent = '';
        modalList.innerHTML = '';

        modalHeading.textContent = data[buttonIndex].title;
        modalDescription.textContent = data[buttonIndex].cost;

        let listItems = '';
        data[buttonIndex].benefits.forEach((benefit) => {
            listItems += `<li>${benefit}</li>`;
        });
        modalList.innerHTML = listItems;

        courseDetailsDialog.classList.add("show");

        const closeModal = courseDetailsContent.querySelector("#closeModal");
        closeModal.addEventListener("click", () => {
            courseDetailsDialog.classList.remove("show");
        });

        // courseDetailsDialog.addEventListener("click", (event) => {
        //     if (event.target === courseDetailsDialog) {
        //         courseDetailsDialog.classList.remove("show");
        //     }
        // });
    }

    function createEvents() {
        const buttons = document.querySelectorAll(".member-btn");
        buttons.forEach((button, index) => {
            button.addEventListener("click", () => {
                displayCourseDetailsDialog(index);
            });
        });
    }

    const currentDateTime = new Date().toLocaleString();
    document.getElementById('timestamp').value = currentDateTime;

    createEvents();
});