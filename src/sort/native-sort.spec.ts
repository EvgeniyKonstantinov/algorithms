import { NativeSort } from './native-sort';
import * as assert from 'assert';
import { SortBy } from '../models/sort-by.enum';

describe('NativeSort', () => {
  it('should be return sorted array asc', () => {
    const array: number[] = [5, -2, -1, 1, 0, 7, 2, 3, 3.2];
    assert.deepStrictEqual([-2, -1, 0, 1, 2, 3, 3.2, 5, 7], NativeSort.numberArray(array));
  });

  it('should be return sorted array desc', () => {
    const array: number[] = [5, -2, -1, 1, 0, 7, 2, 3, 3.2];
    assert.deepStrictEqual([7, 5, 3.2, 3, 2, 1, 0, -1, -2], NativeSort.numberArray(array, SortBy.desc));
  });
})
