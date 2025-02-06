// Rating is a new JS Class with the properties label and die size, along with the metods step up and step down

class Rating {

    dieSizes = {
        "A": 12,
        "B": 10,
        "C": 8,
        "D": 6,
        "F": 0,
    }
    
    constructor(label = "F") {
        this.label = label;
        this.dieSize = this.dieSizes[this.label];
        this.checkSteps();
    }

    checkSteps() {
        this.canStepUp = this.label !== "A";
        this.canStepDown = this.label !== "F";
    }

    stepUp() {
        // logic to increase die size
        if (this.canStepUp) {
            this.label = String.fromCharCode(this.label.charCodeAt(0) + 1);
            this.dieSize = this.dieSizes[this.label];
            this.checkSteps();
        }
    }

    stepDown() {
        // logic to decrease die size
        if (this.canStepDown) {
            this.label = String.fromCharCode(this.label.charCodeAt(0) - 1);
            this.dieSize = this.dieSizes[this.label];
            this.checkSteps();
        }
    }
}

export default Rating;

