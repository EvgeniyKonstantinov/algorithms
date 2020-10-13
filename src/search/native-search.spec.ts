import * as assert from 'assert';
import { NativeSearch } from './native-search';

describe('NativeSearch', () => {
  it('should be return index required element in the array', () => {
    const arr = [5, 3, 2, 2, -1, 2, -8, 2, 3];
    assert.deepStrictEqual(NativeSearch.numberIndex(arr, -8), 6);
    assert.deepStrictEqual(NativeSearch.numberIndex(arr, 3), 1);
    assert.deepStrictEqual(NativeSearch.numberIndex(arr, 2), 2);
  });
})
