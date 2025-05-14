import Rating from "./Rating";

/**
 * Represents a character in the game.
 */
class Character {
    /**
     * Creates a new Character instance.
     */
    constructor() {
        /**
         * The list of specialties the character has.
         * @type {Array}
         */
        this.specialties = [];

        /**
         * The character's hit capacity.
         * @type {number}
         * @private
         */
        this._hitCapacity = 0;

        /**
         * The character's stress capacity.
         * @type {number}
         * @private
         */
        this._stressCapacity = 0;

        /**
         * The character's CUF (Coolness Under Fire) rating.
         * @type {Rating}
         */
        this.cuf = new Rating("CUF", 6);

        /**
         * The character's radiation level.
         * @type {number}
         * @private
         */
        this._radiation = 0;

        /**
         * The gear the character possesses.
         * @type {Array}
         */
        this.gear = [];
    }

    /**
     * Gets the character's hit capacity.
     * @returns {number} The hit capacity.
     */
    get hitCapacity() {
        return this._hitCapacity;
    }

    /**
     * Sets the character's hit capacity.
     * @param {number} value - The new hit capacity. Must be non-negative.
     * @throws {Error} If the value is negative.
     */
    set hitCapacity(value) {
        if (value < 0) {
            throw new Error('Hit capacity cannot be negative');
        }
        this._hitCapacity = value;
    }

    /**
     * Gets the character's stress capacity.
     * @returns {number} The stress capacity.
     */
    get stressCapacity() {
        return this._stressCapacity;
    }

    /**
     * Sets the character's stress capacity.
     * @param {number} value - The new stress capacity. Must be non-negative.
     * @throws {Error} If the value is negative.
     */
    set stressCapacity(value) {
        if (value < 0) {
            throw new Error('Stress capacity cannot be negative');
        }
        this._stressCapacity = value;
    }

    /**
     * Gets the character's radiation level.
     * @returns {number} The radiation level.
     */
    get radiation() {
        return this._radiation;
    }

    /**
     * Sets the character's radiation level.
     * @param {number} value - The new radiation level. Must be non-negative.
     * @throws {Error} If the value is negative.
     */
    set radiation(value) {
        if (value < 0) {
            throw new Error('Radiation cannot be negative');
        }
        this._radiation = value;
    }
}

export default Character;