export class LinearSearch {
  public static numberIndex(arr: number[], el: number): number {
    let result = -1;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === el) {
        result = i;
        break;
      }
    }
    return result;
  }
}
