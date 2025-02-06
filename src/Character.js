import Attribute from "./Attribute";
import Rating from "./Rating";

class Character {

    constructor() {
        this.attributes = {
            strength: new Attribute("strength", "C"),
            agility: new Attribute("agility", "C"),
            intelligence: new Attribute("intelligence", "C"),
            empathy: new Attribute("empathy", "C"),
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