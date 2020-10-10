import * as assert from 'assert';
import { Randomizer } from './randomizer';

describe('Randomizer', () => {
  it('numberArray: should be array of entered length', () => {
    assert.strictEqual(Randomizer.numberArray(100).length, 100);
  })
})
