import { Animal } from './animal';
export class Mammal extends Animal {
    move(): string {
        throw new Error('Method not implemented.');
    }
    eat(food): string {
        throw new Error("Method not implemented.");
    }
    drink(): string {
        throw new Error("Method not implemented.");
    }
    expelWaste(): string {
        throw new Error("Method not implemented.");
    }
    reproduce(): Animal {
        throw new Error("Method not implemented.");
    }
    communicate(): string {
        throw new Error("Method not implemented.");
    }
    breathe(): string {
        throw new Error("Method not implemented.");
    }
}