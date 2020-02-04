
import { expect } from 'chai';
import { Fish } from '../../src/abstraction/fish';
import { Bloodedness } from '../../src/abstraction/bloodedness';
import { Animal } from '../../src/abstraction/animal';
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';
describe('Fish Abstract Class Tests', () => {
    it('Fish should be an animal', () => {
        expect(Fish.prototype).to.instanceOf(Animal);
    });
});