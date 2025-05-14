/**
 * Simulates rolling multiple dice of a specified size
 * @param {number} count - The number of dice to roll
 * @param {number} size - The number of sides on each die
 * @returns {number[]} An array containing the results of each die roll
 * @throws {Error} If count or size is invalid
 */

function roll(count, size) {
    // Validate inputs
    if (typeof count !== 'number' || typeof size !== 'number' || count < 0 || size < 1) {
        throw new Error('Invalid count or size');
    }

    let dice = [];
    for (let i = 0; i < count; i++) {
        dice.push(Math.floor(Math.random() * size) + 1);
    }
    return dice;
}

export default roll;