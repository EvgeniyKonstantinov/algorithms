export class Randomizer {
  public static numberArray(length: number): number[] {
    return Array.from({length}, () => Math.floor(Math.random() * length))
  }
}
