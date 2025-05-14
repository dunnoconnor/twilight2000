// Rating is a new JS Class with the properties label and die size, along with the metods step up and step down

/**
 * Steps up the die size by a specific increment.
 * If the die size is 0, it increases by 4. Otherwise, it increases by 2.
 *
 * @param {number} die - The current die size.
 * @returns {number} - The new die size after stepping up.
 */
class Rating {
    dieSizes = {
        12:"A",
        10:"B",
        8:"C",
        6:"D",
        0:"F",
    };

    constructor(name, attribute, dieSize= 0) {
        this.name = name;
        this.attribute = attribute;
        this.dieSize = dieSize;
        this.label = this.dieSizes[dieSize];
    }

    stepUpDieSize(die) {
        if (die === 0) {
            return die +4;
        }
        return die + 2;
    }

    stepUpLabel(die) {
        return this.dieSizes[die];
    }
}

export default Rating;

