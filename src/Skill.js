import Rating from "./Rating";

class Skill {
    constructor(name) {
        this.name = name;
        this.value = new Rating();
    }

}

export default Skill;