export class NativeSort {
  public static numberArray(arr: number[]): number[] {
    return arr.sort((a, b) => a - b);
  }
}
