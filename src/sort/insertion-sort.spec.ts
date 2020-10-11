import { InsertionSort } from './insertion-sort';
import * as assert from 'assert';

describe('InsertionSort', () => {
  it('should be return an ascending sorted array', () => {
    const array: number[] = [5, -2, -1, 1, 0, 7, 2, 3, 3.2];
    assert.deepStrictEqual([-2, -1, 0, 1, 2, 3, 3.2, 5, 7], InsertionSort.numberArray(array));
  })
})


// describe('', () => {
//   it('Проверка эффективности сортировки', () => {
//     const array = Randomizer.numberArray(100000);
//     const pr = new PerformanceUtil(InsertionSort.sort, array);
//     const pr2 = new PerformanceUtil((arr) => arr.sort((a: number, b: number) => a - b), array);
//     const result = pr.time - pr2.time;
//     console.log(pr.time);
//     console.log(pr2.time);
//     result < 0 ? console.log(`Сортировка А быстрее на ${result} ms`) : console.log(`Сортировка B быстрее на ${result} ms`);
//   })
// })
