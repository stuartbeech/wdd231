export async function loadTrails() {
    try {
        const response = await fetch('data/trails.json');
        const trails = await response.json();

        if (!trails || !Array.isArray(trails)) {
            throw new Error("Invalid trail data");
        }

        return trails;
    } catch (error) {
        console.error("Failed to load trails:", error);
        return null;
    }
}