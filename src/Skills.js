import Rating from "./Rating";

class Skills {
    constructor() {
        this.heavyWeapons = new Rating("Heavy Weapons","str");
        this.closeCombat = new Rating("Close Combat","str");
        this.stamina = new Rating("Stamina","str");
        this.driving = new Rating("Driving","agi");
        this.mobility = new Rating("Mobility","agi");
        this.rangedCombat = new Rating("Ranged Combat","agi");
        this.recon = new Rating("Recon","int");
        this.survival = new Rating("Survival","int");
        this.tech = new Rating("Tech","int");
        this.command = new Rating("Command","emp");
        this.persuasion = new Rating("Persuasion","emp");
        this.medicalAid = new Rating("Medical Aid","emp");
    }
}

export default Skills;