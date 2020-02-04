import { Animal } from './animal';
import { Egglayer } from './egglayer';
export class Fish extends Animal implements Egglayer {
    lay(): string {
        return `${this.personalName} laid a clutch of eggs within some seaweed.`;
    }
    incubate(): string {
        return `${this.personalName} fanned fins to circulate water around eggs.`;
    }
    move(): string {
        return `${this.personalName} swims to the left then swims to the right.`;
    }
    breathe(): string {
        return `${this.personalName} breathes underwater.`;
    }
    eat(food: any): string {
        throw new Error("Method not implemented.");
    }
    drink(fluid: any): string {
        return `Drink some of the ${fluid} you live in.`;
    }
    expelWaste(): string {
        return `Poop anywhere. Makes no difference.`
    }
    reproduce(name: string): Animal {
        throw new Error("Method not implemented.");
    }
    communicate(): string {
        return `Blub, blub, blub...`;
    }
}
