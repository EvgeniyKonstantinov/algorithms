import { SortBy } from '../src/models/sort-by.enum';

export enum LoggerColor {
  White, Red, Green, Yellow, Blue, Magenta, Cyan, Black
}

export class Logger {
  public static algorithmName(name: string, color: LoggerColor = LoggerColor.White): void {
    console.log(this.colors[color], `Algorithm: ${name}`);
  }

  public static speed(time: number, color: LoggerColor = LoggerColor.White, sortBy?: SortBy): void {
    console.log(this.colors[color], `Sorting speed${this.sortByText(sortBy)}: ${time}ms`);
  }

  public static get colors(): Record<LoggerColor, string> {
    return {
      [LoggerColor.White]: '\x1b[30m',
      [LoggerColor.Red]: '\x1b[31m',
      [LoggerColor.Green]: '\x1b[32m',
      [LoggerColor.Yellow]: '\x1b[33m',
      [LoggerColor.Blue]: '\x1b[34m',
      [LoggerColor.Magenta]: '\x1b[35m',
      [LoggerColor.Cyan]: '\x1b[36m',
      [LoggerColor.Black]: '\x1b[37m',
    }
  }

  private static sortByText(sortBy?: SortBy): string {
    return sortBy === undefined || sortBy === null ? '' : ' ' + SortBy[sortBy];
  }
}
