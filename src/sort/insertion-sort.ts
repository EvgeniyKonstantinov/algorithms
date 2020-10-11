import { SortBy } from '../models/sort-by.enum';

export class InsertionSort {
  public static numberArray(array: number[], sortBy: SortBy = SortBy.asc): number[] {
    const fn: (a: number, b: number) => boolean = sortBy === SortBy.asc ? ascNumber : descNumber;
    for (let i = 1; i < array.length; i++) {
      let tmp = array[i];
      let j = i - 1;
      while (j >= 0 && fn(array[j], tmp)) {
        array[j + 1] = array[j];
        j = j - 1;
      }
      array[j + 1] = tmp;
    }

    return array;
  }
}

function ascNumber(a: number, b: number): boolean {
  return a > b;
}

function descNumber(a: number, b: number): boolean {
  return a < b;
}

