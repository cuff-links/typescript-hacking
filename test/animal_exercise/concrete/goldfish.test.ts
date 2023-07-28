
import { expect } from 'chai';
import { Fish } from '../../../src/animal_exercise/abstraction/fish';
import { Bloodedness } from '../../../src/animal_exercise/abstraction/bloodedness';
import { Animal } from '../../../src/animal_exercise/abstraction/animal';
import { Goldfish } from '../../../src/animal_exercise/concrete/Goldfish';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('Goldfish Class Tests', () => {

    const testFish1 = new Goldfish('Bubbles', Date.now(), 'rainbow', 'Goldfish')
    it('Goldfish should be an animal', () => {
        expect(Goldfish.prototype).to.instanceOf(Animal);
    });
    it('Goldfish should be a fish', () => {
        expect(Goldfish.prototype).to.instanceOf(Fish);
    });
    it('Fish should blub underwater', () => {
        expect(testFish1.communicate()).to.contain('Blub');
    });
    it('Goldfish should lay eggs', () => {
        expect(testFish1.lay()).to.contain('laid');
    });
    it('Goldfish should incubate eggs', () => {
        expect(testFish1.incubate()).to.contain('circulate water around eggs');
    });
    it('Goldfish should produce another goldfish', () => {
        const babyFish = testFish1.reproduce('Bubbles Jr.');
        expect(babyFish).to.be.instanceOf(Goldfish);
        expect(babyFish.personalName).to.equal('Bubbles Jr.');
        expect(babyFish).to.be.instanceOf(Animal)
    });
});