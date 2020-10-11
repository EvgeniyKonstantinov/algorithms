import { Logger, LoggerColor } from './logger';
import * as assert from 'assert';

describe('Logger', () => {
  it('should be return selected color', () => {
    assert.deepStrictEqual(Logger.colors[LoggerColor.White], '\x1b[30m');
    assert.deepStrictEqual(Logger.colors[LoggerColor.Red], '\x1b[31m');
    assert.deepStrictEqual(Logger.colors[LoggerColor.Green], '\x1b[32m');
    assert.deepStrictEqual(Logger.colors[LoggerColor.Yellow], '\x1b[33m');
    assert.deepStrictEqual(Logger.colors[LoggerColor.Blue], '\x1b[34m');
    assert.deepStrictEqual(Logger.colors[LoggerColor.Magenta], '\x1b[35m');
    assert.deepStrictEqual(Logger.colors[LoggerColor.Cyan], '\x1b[36m');
    assert.deepStrictEqual(Logger.colors[LoggerColor.Black], '\x1b[37m');
  });
})
