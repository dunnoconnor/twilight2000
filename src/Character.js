import Attribute from "./Attribute";
import Rating from "./Rating";

class Character {

    constructor() {
        this.attributes = {
            strength: new Attribute("Strength", "C"),
            agility: new Attribute("Agility", "C"),
            intelligence: new Attribute("Intelligence", "C"),
            empathy: new Attribute("Empathy", "C"),
        },
        this.specialties = [];
        this.hitCapacity = 0;
        this.stressCapacity = 0;
        this.cuf = new Rating("D");
        this.radiation = 0;
        this.gear = [];
    }
}


export default Character;