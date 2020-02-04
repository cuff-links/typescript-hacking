import { Bloodedness } from './bloodedness';
export abstract class Animal {
    dateOfBirth: Date;
    personalName: string;
    species: string;
    color: string;
    bloodedness: Bloodedness;

    constructor(name: string, dob: Date, color: string, blooded: Bloodedness, species: string) {
        this.personalName = name;
        this.dateOfBirth = dob;
        this.color = color;
        this.bloodedness = blooded;
        this.species = species;
    }
    abstract breathe(): string;
    abstract eat(food): string;
    abstract drink(fluid): string;
    abstract expelWaste(): string;
    abstract reproduce(name:string): Animal;
    abstract communicate(): string;
    abstract move(): string;
    age(): number {
        return 10;
    }
}; 