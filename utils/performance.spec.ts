import * as assert from 'assert';
import { PerformanceUtil } from './performance-util';

describe('Performance', () => {
  it('should be return array and return script execution time', () => {
    const per = new PerformanceUtil((arr) => arr, [1,2,3]);
    assert(per.result.length > 0);
    assert(per.time > 0);
  })
})
