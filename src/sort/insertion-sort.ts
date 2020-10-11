export class InsertionSort {
  public static numberArray(array: number[]): number[] {
    for (let i = 1; i < array.length; i++) {
      let tmp = array[i];
      let j = i - 1;
      while (j >= 0 && array[j] > tmp) {
        array[j + 1] = array[j];
        j = j - 1;
      }
      array[j + 1] = tmp;
    }

    return array;
  }
}
