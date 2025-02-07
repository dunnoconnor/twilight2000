import Rating from "./Rating";

class Attributes {
    constructor() {
        this.str = new Rating("Strength","str",8);
        this.agi = new Rating("Agility","agi",8);
        this.int = new Rating("Intelligence","int",8);
        this.emp= new Rating("Empathy","emp",8);
    }
}

export default Attributes;