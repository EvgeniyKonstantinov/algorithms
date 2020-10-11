import { PerformanceUtil } from '../../utils/performance-util';
import { NativeSort } from '../sort/native-sort';
import { Randomizer } from '../../utils/randomizer';
import { InsertionSort } from '../sort/insertion-sort';
import { Logger, LoggerColor } from '../../utils/logger';
import * as assert from 'assert';
import { SortBy } from '../models/sort-by.enum';

describe('PerformanceSort', function() {
  this.timeout(65000);

  it('performance NativeSort', () => {
    const nativeSortAsc = new PerformanceUtil(NativeSort.numberArray, Randomizer.numberArray(100000));
    const nativeSortDesc = new PerformanceUtil(NativeSort.numberArray, Randomizer.numberArray(100000), SortBy.desc);
    Logger.algorithmName('NativeSort');
    Logger.speed(nativeSortAsc.time, LoggerColor.Green, SortBy.asc);
    Logger.speed(nativeSortDesc.time, LoggerColor.Yellow, SortBy.desc);
    assert('end');
  });

  it('performance InsertionSort', () => {
    const numberArrayAsc = new PerformanceUtil(InsertionSort.numberArray, Randomizer.numberArray(100000));
    const numberArrayDesc = new PerformanceUtil(InsertionSort.numberArray, Randomizer.numberArray(100000));
    Logger.algorithmName('InsertionSort');
    Logger.speed(numberArrayAsc.time, LoggerColor.Green, SortBy.asc);
    Logger.speed(numberArrayDesc.time, LoggerColor.Yellow, SortBy.desc);
    assert('end');
  });
})
