document.addEventListener('DOMContentLoaded', () => {
    const lastModifiedElement = document.getElementById("lastModified");
    const yearElement = document.getElementById("year");

    if (lastModifiedElement) {
        lastModifiedElement.textContent = `Last Modified: ${document.lastModified}`;
    }

    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }
});