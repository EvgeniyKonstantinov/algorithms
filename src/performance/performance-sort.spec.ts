import { PerformanceUtil } from '../../utils/performance-util';
import { NativeSort } from '../sort/native-sort';
import { Randomizer } from '../../utils/randomizer';
import { InsertionSort } from '../sort/insertion-sort';
import { Logger, LoggerColor } from '../../utils/logger';
import * as assert from 'assert';

describe('PerformanceSort', function() {
  this.timeout(65000);

  it('performance NativeSort', () => {
    const nativeSort = new PerformanceUtil(NativeSort.numberArray, Randomizer.numberArray(100000));
    Logger.speed(nativeSort.time, LoggerColor.Yellow);
    assert('end');
  });

  it('performance InsertionSort', () => {
    const numberArray = new PerformanceUtil(InsertionSort.numberArray, Randomizer.numberArray(100000));
    Logger.speed(numberArray.time, LoggerColor.Green);
    assert('end');
  });
})
