import Rating from "./Rating";

const attributeKey = {
    "strength": ["heavy weapons", "close combat", "stamina"],
    "agility": ["driving", "mobility", "ranged combat"],
    "intelligence": ["recon", "survival", "tech"],
    "empathy": ["command", "persuasion", "medical aid"],
}

function addSkills(name){
    //for each element of the array in attributeKey, create a new object with the key being the element and the value being a new Rating object
    const skills = {};
    if (attributeKey[name]) {
        attributeKey[name].forEach(skill => {
        skills[skill] = new Rating();
        });
    }
    return skills;
}

class Attribute {
    constructor(name,value) {
        this.name = name;
        this.value = new Rating(value);
        this.skills = addSkills(name);
    }

}

export default Attribute;