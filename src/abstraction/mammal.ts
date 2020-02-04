import { Animal } from './animal';
export class Mammal extends Animal {
    eat(food): void {
        throw new Error("Method not implemented.");
    }
    drink(): void {
        throw new Error("Method not implemented.");
    }
    expelWaste(): void {
        throw new Error("Method not implemented.");
    }
    reproduce(): Animal {
        throw new Error("Method not implemented.");
    }
    communicate(): void {
        throw new Error("Method not implemented.");
    }
    breathe(): void {

    }
}