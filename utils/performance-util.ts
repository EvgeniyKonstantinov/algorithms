const {performance} = require('perf_hooks');

export class PerformanceUtil<T> {
  private _result: T;
  private _time: number;

  constructor(private fn: (a : any, ...attr: any) => T, private input: any, private attr: any[] = []) {
    this.check();
  }

  private check(): void {
    const t0 = performance.now();
    this._result = this.fn(this.input, ...this.attr);
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
