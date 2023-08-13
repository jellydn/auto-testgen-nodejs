import { sum } from '../../../../src/math';

import { test, expect } from '@jest/globals';

describe('sum', () => {
  test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });

  test('adds 2 + 2 to equal 4', () => {
    expect(sum(2, 2)).toBe(4);
  });

  test('checks if the function is commutative', () => {
    expect(sum(2, 3)).toBe(sum(3, 2));
  });

  test('adds 0 + 0 to equal 0', () => {
    expect(sum(0, 0)).toBe(0);
  });

  test('adds negative numbers correctly', () => {
    expect(sum(-1, -2)).toBe(-3);
  });

  test('adds a negative number and a positive number correctly', () => {
    expect(sum(-1, 2)).toBe(1);
  });

  test('checks that input types are numbers', () => {
    expect(() => sum('2', '1')).toThrow(TypeError);
    expect(() => sum(null, 1)).toThrow(TypeError);
    expect(() => sum([1], 1)).toThrow(TypeError);
  });
});