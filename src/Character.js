import Rating from "./Rating";

class Character {
    constructor() {
        this.specialties = [];
        this.hitCapacity = 0;
        this.stressCapacity = 0;
        this.cuf = new Rating("CUF",6);
        this.radiation = 0;
        this.gear = [];
    }
}

export default Character;