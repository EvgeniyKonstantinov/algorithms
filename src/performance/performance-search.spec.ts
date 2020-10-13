import { PerformanceUtil } from '../../utils/performance-util';
import { Randomizer } from '../../utils/randomizer';
import { Logger } from '../../utils/logger';
import * as assert from 'assert';
import { NativeSearch } from '../search/native-search';
import { LinearSearch } from '../search/linear-search';

describe('PerformanceSearch', function() {
  this.timeout(65000);

  it('performance NativeSearch', () => {
    const arr = Randomizer.numberArray(1000000);
    const results = [
      new PerformanceUtil<number>(NativeSearch.numberIndex, arr, [arr[25000]]),
      new PerformanceUtil<number>(NativeSearch.numberIndex, arr, [arr[250000]]),
      new PerformanceUtil<number>(NativeSearch.numberIndex, arr, [arr[500000]]),
      new PerformanceUtil<number>(NativeSearch.numberIndex, arr, [arr[750000]]),
      new PerformanceUtil<number>(NativeSearch.numberIndex, arr, [arr[999999]])
    ]
    Logger.algorithmName('NativeSearch');
    results.forEach((el, i) => {
      Logger.speed(el.time, i);
    });
    assert('end');
  });

  it('performance LinearSearch', () => {
    const arr = Randomizer.numberArray(1000000);
    const results = [
      new PerformanceUtil<number>(LinearSearch.numberIndex, arr, [arr[25000]]),
      new PerformanceUtil<number>(LinearSearch.numberIndex, arr, [arr[250000]]),
      new PerformanceUtil<number>(LinearSearch.numberIndex, arr, [arr[500000]]),
      new PerformanceUtil<number>(LinearSearch.numberIndex, arr, [arr[750000]]),
      new PerformanceUtil<number>(LinearSearch.numberIndex, arr, [arr[999999]])
    ]
    Logger.algorithmName('LinearSearch');
    results.forEach((el, i) => {
      Logger.speed(el.time, i);
    });
    assert('end');
  });
})
