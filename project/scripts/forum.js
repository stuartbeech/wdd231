document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.close-modal');
    const joinNowBtn = document.getElementById('joinBtn');
    const viewButtons = document.querySelectorAll(".view-button");

    const openModal = (postId) => {
        let promptedPosts = JSON.parse(localStorage.getItem("promptedPosts")) || [];

        if (!promptedPosts.includes(postId)) {
            promptedPosts.push(postId);
            localStorage.setItem("promptedPosts", JSON.stringify(promptedPosts));
        }

        modal.classList.remove('hidden');
    };

    viewButtons.forEach(button => {
        button.addEventListener("click", () => {
            const postId = button.dataset.post;
            openModal(postId);
        });
    });

    closeModal.addEventListener('click', () => {
        modal.classList.add('hidden');
    });

    joinNowBtn.addEventListener('click', () => {
        window.location.href = "community.html";
    });

    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.add('hidden');
        }
    });
});