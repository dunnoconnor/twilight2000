import Rating from "./Rating";
import Skill from "./Skill";

const attributeKey = {
    "Strength": ["Heavy Weapons", "Close Combat", "Stamina"],
    "Agility": ["Driving", "Mobility", "Ranged Combat"],
    "Intelligence": ["Recon", "Survival", "Tech"],
    "Empathy": ["Command", "Persuasion", "Medical Aid"],
}

function addSkills(name){
    //for each element of the array in attributeKey, create a new object with the key being the element and the value being a new Rating object
    const skills = {};
    if (attributeKey[name]) {
        attributeKey[name].forEach(skill => {
        skills[skill] = new Skill(skill);
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