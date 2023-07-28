
import { expect } from 'chai';
import { Fish } from '../../../src/animal_exercise/abstraction/fish';
import { Bloodedness } from '../../../src/animal_exercise/abstraction/bloodedness';
import { Animal } from '../../../src/animal_exercise/abstraction/animal';

const testFish1 = new Fish('Bubbles', Date.now(), 'rainbow', 'Goldfish');
describe('Fish Abstract Class Tests', () => {
    it('Fish should be an animal', () => {
        expect(Object.prototype).to.instanceOf(Animal);
    });
    it('Fish should have cold blood', () => {
        expect(testFish1.bloodedness).to.equal(Bloodedness.Cold);
    });
});