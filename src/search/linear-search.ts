export class LinearSearch {
  public static numberIndex(arr: number[], el: number): number | undefined {
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === el) {
        return i;
      }
    }
  }
}
