import { NativeSort } from './native-sort';
import * as assert from 'assert';

describe('NativeSort', () => {
  it('should be return an ascending sorted array', () => {
    const array: number[] = [5, -2, -1, 1, 0, 7, 2, 3, 3.2];
    assert.deepStrictEqual([-2, -1, 0, 1, 2, 3, 3.2, 5, 7], NativeSort.numberArray(array));
  })
})
