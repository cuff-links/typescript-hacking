
import { expect } from 'chai';
import { Fish } from '../../src/abstraction/fish';
import { Bloodedness } from '../../src/abstraction/bloodedness';
import { Animal } from '../../src/abstraction/animal';
import { Goldfish } from '../../src/concrete/Goldfish';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('Goldfish Class Tests', () => {

    const testFish1 = new Goldfish('Bubbles', Date.now(), 'rainbow', Bloodedness.Cold, 'Goldfish')
    it('Goldfish should be an animal', () => {
        expect(Goldfish.prototype).to.instanceOf(Animal);
    });
    it('Goldfish should be a fish', () => {
        expect(Goldfish.prototype).to.instanceOf(Fish);
    });
    it('Fish should blub underwater', () => {
        expect(testFish1.communicate()).to.contain('Blub');
    });
    it('Goldfish should produce another goldfish', () => {
        const babyFish = testFish1.reproduce('Bubbles Jr.');
        expect(babyFish).to.be.instanceOf(Goldfish);
    });
});