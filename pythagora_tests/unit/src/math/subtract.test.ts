import { subtract } from '../../../../src/math';

const describe = require('@jest/globals').describe;
const test = require('@jest/globals').test;
const expect = require('@jest/globals').expect;

describe('subtract', () => {
  test('subtract 3 - 2 to equal 1', () => {
    expect(subtract(3, 2)).toBe(1);
  });

  test('subtract 2 - 3 to equal -1', () => {
    expect(subtract(2, 3)).toBe(-1);
  });

  test('subtract -2 - -2 to equal 0', () => {
    expect(subtract(-2, -2)).toBe(0);
  });

  test('subtract -2 - 2 to equal -4', () => {
    expect(subtract(-2, 2)).toBe(-4);
  });

  test('subtract 0 - 0 to equal 0', () => {
    expect(subtract(0, 0)).toBe(0);
  });

  test('subtract 10.5 - 5.5 to equal 5', () => {
    expect(subtract(10.5, 5.5)).toBe(5);
  });

  test('subtract -10.5 - -5.5 to equal -5', () => {
    expect(subtract(-10.5, -5.5)).toBe(-5);
  });

  test('subtract 10 - null to equal 10', () => {
    expect(subtract(10, null)).toBe(10);
  });

  test('subtract null - 10 to equal -10', () => {
    expect(subtract(null, 10)).toBe(-10);
  });

  test('subtract undefined - 10 to be NaN', () => {
    expect(subtract(undefined, 10)).toBeNaN();
  });

  test('subtract 10 - undefined to be NaN', () => {
    expect(subtract(10, undefined)).toBeNaN();
  });
});