import { LinearSearch } from './linear-search';
import * as assert from 'assert';

describe('LinearSearch', () => {
  it('should be return index required element in the array', () => {
    const arr = [5, 3, 2, 2, -1, 2, -8, 2, 3];
    assert.deepStrictEqual(LinearSearch.numberIndex(arr, -8), 6);
    assert.deepStrictEqual(LinearSearch.numberIndex(arr, 3), 1);
    assert.deepStrictEqual(LinearSearch.numberIndex(arr, 2), 2);
  });
})
