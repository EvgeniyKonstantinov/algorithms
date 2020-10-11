import { SortBy } from '../src/models/sort-by.enum';

const {performance} = require('perf_hooks');

export class PerformanceUtil<T> {
  private _result: T;
  private _time: number;

  constructor(private fn: (a : any, sortBy: SortBy) => T, private input: T, private sortBy: SortBy = SortBy.asc) {
    this.check();
  }

  private check(): void {
    const t0 = performance.now();
    this._result = this.fn(this.input, this.sortBy);
    const t1 = performance.now();
    this._time = t1 - t0;
  }

  public get result() {
    return this._result;
  }

  public get time(): number {
    return this._time;
  }
}
