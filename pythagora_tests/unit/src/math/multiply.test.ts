import { multiply } from '../../../../src/math';

import { test, expect } from '@jest/globals';

describe('multiply function tests', () => {
  test('multiply two positive numbers', () => {
    expect(multiply(2, 3)).toEqual(6);
  });

  test('multiply two negative numbers', () => {
    expect(multiply(-2, -3)).toEqual(6);
  });

  test('multiply positive and negative number', () => {
    expect(multiply(-2, 3)).toEqual(-6);
  });

  test('multiply number with zero', () => {
    expect(multiply(2, 0)).toEqual(0);
  });

  test('multiply two decimal numbers', () => {
    expect(multiply(1.2, 2.5)).toEqual(3.0);
  });

  test('multiply with NaN', () => {
    expect(multiply(NaN, 2)).toBeNaN();
  });

  test('multiply with undefined', () => {
    expect(multiply(undefined, 2)).toBeNaN();
  });

  test('multiply with null', () => {
    expect(multiply(null, 2)).toBe(0);
  });
});