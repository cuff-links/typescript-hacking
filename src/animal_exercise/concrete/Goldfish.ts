import { Fish } from "../abstraction/fish";

export class Goldfish extends Fish {
  constructor(name, date, color = "orange", species) {
    super(name, date, color,  species);
  }
  reproduce(personalName: string): Goldfish {
    this.lay();
    this.incubate();
    const babyFish = new Goldfish(
      personalName,
      Date.now(),
      this.color,
      this.species
    );
    return babyFish;
  }
}
