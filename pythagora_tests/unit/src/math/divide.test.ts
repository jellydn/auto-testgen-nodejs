import { divide } from '../../../../src/math';

describe('divide function tests', () => {

  test('divides 2 numbers correctly', () => {
    expect(divide(10, 5)).toBe(2);
  });

  test('divides negative numbers correctly', () => {
    expect(divide(-10, -2)).toBe(5);
  });

  test('divides number by 1 correctly', () => {
    expect(divide(10, 1)).toBe(10);
  });

  test('divides number by itself correctly', () => {
    expect(divide(10, 10)).toBe(1);
  });

  test('divides 0 by a number correctly', () => {
    expect(divide(0, 1)).toBe(0);
  });

  test('throws error when dividing by 0', () => {
    function wrap() {
      divide(10, 0);
    }

    expect(wrap).toThrowError("Cannot divide by 0");
  });

});