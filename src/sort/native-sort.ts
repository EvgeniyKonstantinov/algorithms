import { SortBy } from '../models/sort-by.enum';

export class NativeSort {
  public static numberArray(arr: number[], sortBy: SortBy = SortBy.asc): number[] {
    return arr.sort(sortBy === SortBy.asc ? ascNumber : descNumber);
  }
}

function ascNumber(a: number, b: number): number {
  return a - b;
}

function descNumber(a: number, b: number): number {
  return b - a;
}
