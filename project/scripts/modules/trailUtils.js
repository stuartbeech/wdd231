export function filterByDifficulty(trails, difficulties = ['Moderate', 'Challenging']) {
    return trails.filter(trail => difficulties.includes(trail.difficulty));
}

export function getRandomTrails(trails, count = 3) {
    const copy = [...trails]; // avoid mutating original
    const selected = [];

    while (selected.length < count && copy.length > 0) {
        const index = Math.floor(Math.random() * copy.length);
        selected.push(copy.splice(index, 1)[0]);
    }

    return selected;
}