import { Fish } from "../abstraction/fish";
import { Animal } from "../abstraction/animal";

export class Goldfish extends Fish {
    constructor(name, date, color = 'orange', blooded, species) {
        super(name, date, color, blooded, species);
    }
    reproduce(personalName: string): Goldfish {
        this.lay();
        this.incubate();
        const babyFish = new Goldfish(personalName, Date.now(), this.color, this.bloodedness, this.species);
        return babyFish;
    }
}